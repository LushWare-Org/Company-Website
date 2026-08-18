import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import Icon from './Icon.jsx'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand" aria-label="LushWare home">
          <span className="brand-mark">
            <img src="/lushware-logo.png" alt="LushWare logo" />
          </span>
          <span className="brand-text">
            <span className="name">LushWare</span>
            <span className="sub">Growth-engineered software</span>
          </span>
        </NavLink>

        <nav className="page-nav" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => 'page-nav-link' + (isActive ? ' active' : '')}>
            Specializations
          </NavLink>
          <NavLink to="/packages" className={({ isActive }) => 'page-nav-link' + (isActive ? ' active' : '')}>
            Packages
          </NavLink>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <NavLink to="/packages" className="header-cta">
            <span className="full">Start a project</span>
            <span className="short">Start</span>
          </NavLink>
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Primary mobile">
          <NavLink to="/" end className={({ isActive }) => 'page-nav-link' + (isActive ? ' active' : '')}>
            Specializations
          </NavLink>
          <NavLink to="/packages" className={({ isActive }) => 'page-nav-link' + (isActive ? ' active' : '')}>
            Packages
          </NavLink>
        </nav>
      )}
    </header>
  )
}
