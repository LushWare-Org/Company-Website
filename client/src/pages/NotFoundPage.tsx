import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 mb-4">404</p>
      <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight mb-4">Page not found</h1>
      <p className="text-slate-500 text-lg font-light max-w-md mb-8">
        The page you are looking for doesn't exist or has moved.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/" className="px-6 py-3 bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors">
          Back to home
        </Link>
        <Link to="/solutions" className="px-6 py-3 border border-slate-300 text-slate-900 text-sm font-semibold hover:border-emerald-600 transition-colors">
          Explore solutions
        </Link>
      </div>
    </section>
  )
}
