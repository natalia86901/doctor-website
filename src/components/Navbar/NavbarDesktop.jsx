import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from './navConfig'
import logo from '../../assets/brand/LOGO.svg'

function NavbarDesktop() {
  const [openPath, setOpenPath] = useState(null)
  const navRef = useRef(null)
  const submenuIdPrefix = useId()

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) setOpenPath(null)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [])

  const closeOnEscape = (event) => {
    if (event.key === 'Escape') {
      setOpenPath(null)
      navRef.current?.querySelector(`[data-menu-path="${openPath}"]`)?.focus()
    }
  }

  return (
    <header className="desktop-header" onKeyDown={closeOnEscape}>
      <div className="desktop-header__inner">
        <Link className="desktop-header__brand" to="/" aria-label="Bakersfield Dentures and Implants home">
         <img
         src={logo} alt="Bakersfield Dentures and Implants logo"
         className="desktop-header__brand-logo"
          />
        </Link>

        <nav ref={navRef} className="desktop-nav" aria-label="Main navigation">
          <ul className="desktop-nav__list">
            {navItems.map((item, index) => {
              const isOpen = openPath === item.path
              const submenuId = `${submenuIdPrefix}-submenu-${index}`
              return (
                <li
                  className="desktop-nav__item"
                  key={item.path}
                  onPointerEnter={() => setOpenPath(item.path)}
                  onPointerLeave={() => setOpenPath(null)}
                  onFocus={() => setOpenPath(item.path)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setOpenPath(null)
                  }}
                >
                  <div className="desktop-nav__parent">
                    <NavLink
                      className={({ isActive }) => `desktop-nav__link${isActive ? ' desktop-nav__link--active' : ''}`}
                      to={item.path}
                      end={false}
                      onClick={() => setOpenPath(null)}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      className="desktop-nav__menu-button"
                      type="button"
                      aria-label={`Toggle ${item.label} menu`}
                      aria-expanded={isOpen}
                      aria-controls={submenuId}
                      data-menu-path={item.path}
                      onClick={() => setOpenPath(isOpen ? null : item.path)}
                    >
                      <span aria-hidden="true" />
                    </button>
                  </div>
                  <ul className="desktop-nav__dropdown" id={submenuId} hidden={!isOpen}>
                    {item.children.map((child) => (
                      <li key={child.path ?? child.href}>
                        {child.path ? (
                          <NavLink to={child.path} onClick={() => setOpenPath(null)}>{child.label}</NavLink>
                        ) : (
                          <a href={child.href}>{child.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="desktop-header__actions">
          <a className="desktop-header__phone" href="tel:6611234567" aria-label="Call 661 123 4567">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.4 15.4 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" /></svg>
            <span>661.123.4567</span>
          </a>
          <Link className="desktop-header__cta" to="/contact/schedule-consultation">Book a Consultation</Link>
        </div>
      </div>
    </header>
  )
}

export default NavbarDesktop
