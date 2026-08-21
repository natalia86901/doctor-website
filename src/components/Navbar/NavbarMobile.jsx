import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoStacked from '../../assets/brand/logo_stacked.svg'
import { navItems } from './navConfig'

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedPath, setExpandedPath] = useState(null)
  const location = useLocation()
  const menuButtonRef = useRef(null)
  const submenuIdPrefix = useId()

  const closeMenu = (restoreFocus = false) => {
    setMenuOpen(false)
    setExpandedPath(null)
    if (restoreFocus) menuButtonRef.current?.focus()
  }

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeMenu(true)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <header className="mobile-header">
      <div className="mobile-header__inner">
        <Link
          className="mobile-header__brand"
          to="/"
          aria-label="Bakersfield Dentures and Implants home"
          onClick={() => closeMenu()}
        >
          <img
            className="mobile-header__brand-logo"
            src={logoStacked}
            alt="Bakersfield Dentures and Implants logo"
          />
        </Link>

        <button
          ref={menuButtonRef}
          className="mobile-header__menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div className="mobile-header__panel" hidden={!menuOpen}>
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <ul className="mobile-nav__list">
            {navItems.map((item, index) => {
              const isExpanded = expandedPath === item.path
              const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
              const submenuId = `${submenuIdPrefix}-mobile-submenu-${index}`

              return (
                <li className="mobile-nav__item" key={item.path}>
                  <div className="mobile-nav__row">
                    <NavLink
                      className={`mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`}
                      to={item.path}
                      onClick={() => closeMenu()}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      className="mobile-nav__toggle"
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={submenuId}
                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label} submenu`}
                      onClick={() => setExpandedPath(isExpanded ? null : item.path)}
                    >
                      <span aria-hidden="true" />
                    </button>
                  </div>

                  <ul id={submenuId} className="mobile-nav__submenu" hidden={!isExpanded}>
                    {item.children.map((child) => (
                      <li key={child.path ?? child.href}>
                        {child.path ? (
                          <NavLink to={child.path} onClick={() => closeMenu()}>
                            {child.label}
                          </NavLink>
                        ) : (
                          <a href={child.href} onClick={() => closeMenu()}>
                            {child.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>

          <div className="mobile-nav__actions">
            <a className="mobile-nav__phone" href="tel:6611234567" onClick={() => closeMenu()}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.4 15.4 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" /></svg>
              <span>661.123.4567</span>
            </a>
            <Link
              className="mobile-header__cta"
              to="/contact/schedule-consultation"
              onClick={() => closeMenu()}
            >
              Book a Consultation
            </Link>
          </div>
        </nav>
        <button
          className="mobile-header__backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => closeMenu(true)}
        />
      </div>
    </header>
  )
}

export default NavbarMobile
