import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 font-body">
      <p className="font-label text-xs font-semibold uppercase tracking-wider text-primary mb-4">404</p>
      <h1 className="font-headline text-4xl sm:text-5xl font-extrabold tracking-tight text-on-surface mb-4">Page not found</h1>
      <p className="text-on-surface-variant text-lg max-w-md mb-8">
        The page you are looking for doesn't exist or has moved.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/" className="rounded-full px-6 py-3 bg-primary text-on-primary text-sm font-semibold hover:opacity-90 transition-opacity">
          Back to home
        </Link>
        <Link to="/services" className="rounded-full px-6 py-3 border border-outline-variant text-on-surface text-sm font-semibold hover:border-primary transition-colors">
          Explore services
        </Link>
      </div>
    </main>
  )
}
