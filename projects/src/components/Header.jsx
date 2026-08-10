import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

export default function Header() {
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
        </div>
      </div>
    </header>
  )
}
