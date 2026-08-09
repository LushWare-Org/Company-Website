import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand" aria-label="LushWare home">
          <img src="/lushware-logo.png" alt="LushWare logo" />
          <span className="brand-text">
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

        <NavLink to="/packages" className="header-cta">
          Start a project
        </NavLink>
      </div>
    </header>
  )
}
