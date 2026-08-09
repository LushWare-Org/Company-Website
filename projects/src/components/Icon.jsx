import { ICON_PATHS } from '../data/iconPaths.js'

export default function Icon({ name, className = '' }) {
  const inner = ICON_PATHS[name]
  if (!inner) return null
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  )
}
