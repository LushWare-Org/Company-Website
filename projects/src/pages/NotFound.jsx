import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="wrap">
      <section className="hero">
        <span className="eyebrow">404</span>
        <h1>
          Page <span className="grad">not found</span>
        </h1>
        <p>The page you are looking for doesn&rsquo;t exist or has moved.</p>
        <nav className="tabnav" aria-label="Go to" style={{ marginTop: 28 }}>
          <Link to="/" className="tab-btn">Specializations</Link>
          <Link to="/packages" className="tab-btn">Packages</Link>
        </nav>
      </section>
    </main>
  )
}
