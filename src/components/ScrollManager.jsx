import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom'

const storageKey = 'doctor-website:scroll-positions'

function readPositions() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey) || '{}')
    return Object.fromEntries(Object.entries(saved).filter(([, point]) => Array.isArray(point) && point.length === 2 && point.every(Number.isFinite)))
  } catch {
    return {}
  }
}

function headerOffset() {
  const headers = document.querySelectorAll('.desktop-header, .mobile-header')
  return Math.max(0, ...Array.from(headers, (header) => header.getBoundingClientRect().height)) + 16
}

// One owner for route, hash and history scrolling. Layout changes are observed
// only while restoring; user input immediately returns control to the user.
export default function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const navigate = useNavigate()
  const positions = useRef(null)
  if (positions.current === null) positions.current = readPositions()

  useLayoutEffect(() => {
    const previous = history.scrollRestoration
    history.scrollRestoration = 'manual'
    const followLocalAnchor = (event) => {
      const link = event.target.closest?.('a[href]')
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !link || link.target || link.hasAttribute('download')) return
      const url = new URL(link.href, window.location.href)
      if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.search === window.location.search && url.hash) {
        event.preventDefault()
        navigate(url.pathname + url.search + url.hash)
      }
    }
    document.addEventListener('click', followLocalAnchor)
    return () => {
      history.scrollRestoration = previous
      document.removeEventListener('click', followLocalAnchor)
    }
  }, [navigate])

  useLayoutEffect(() => {
    const positionKey = JSON.stringify([location.key, location.pathname, location.search, location.hash])
    const saved = navigationType === 'POP' ? positions.current[positionKey] : null
    let hash = location.hash.slice(1)
    try { hash = decodeURIComponent(hash) } catch { /* Keep a malformed hash harmless. */ }
    let restoring = true
    let fontsReady = document.fonts.status === 'loaded'
    let frame = 0
    let lastPosition = saved || [0, 0]

    const remember = () => {
      if (restoring) return
      lastPosition = [window.scrollX, window.scrollY]
      positions.current[positionKey] = lastPosition
    }
    const persist = () => {
      remember()
      try {
        // Keep history useful across reloads without growing storage indefinitely.
        const entries = Object.entries(positions.current).slice(-100)
        sessionStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(entries)))
      } catch { /* Scrolling also works when storage is unavailable. */ }
    }
    const stopRestoring = () => {
      restoring = false
      observer.disconnect()
      cancelAnimationFrame(frame)
      remember()
    }
    const onKeyDown = (event) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Tab'].includes(event.key)) stopRestoring()
    }
    const restore = () => {
      if (!restoring) return
      const target = hash ? document.getElementById(hash) : null
      const offset = target ? Math.max(headerOffset(), parseFloat(getComputedStyle(target).scrollMarginTop) || 0) : 0
      const [x, y] = saved || [0, target ? Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset) : 0]
      window.scrollTo({ left: x, top: y, behavior: 'instant' })
      lastPosition = [window.scrollX, window.scrollY]
      positions.current[positionKey] = lastPosition
      const pendingImages = [...document.images].some((img) => !img.complete && (img.loading !== 'lazy' || img.getBoundingClientRect().top <= innerHeight))
      const reachable = y <= document.documentElement.scrollHeight - innerHeight + 1 || y === 0
      if ((!saved && !hash) || (fontsReady && !pendingImages && reachable && (!hash || target || saved))) stopRestoring()
    }
    const scheduleRestore = () => {
      if (!restoring) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(restore)
    }
    const observer = new ResizeObserver(scheduleRestore)
    observer.observe(document.body)
    document.addEventListener('load', scheduleRestore, true)
    window.addEventListener('scroll', remember, { passive: true })
    window.addEventListener('pagehide', persist)
    window.addEventListener('wheel', stopRestoring, { passive: true })
    window.addEventListener('touchstart', stopRestoring, { passive: true })
    window.addEventListener('pointerdown', stopRestoring, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    document.fonts.ready.then(() => { fontsReady = true; scheduleRestore() })
    restore()

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      restoring = false
      positions.current[positionKey] = lastPosition
      document.removeEventListener('load', scheduleRestore, true)
      window.removeEventListener('scroll', remember)
      window.removeEventListener('pagehide', persist)
      window.removeEventListener('wheel', stopRestoring)
      window.removeEventListener('touchstart', stopRestoring)
      window.removeEventListener('pointerdown', stopRestoring)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [location.key, location.pathname, location.search, location.hash, navigationType])

  return null
}
