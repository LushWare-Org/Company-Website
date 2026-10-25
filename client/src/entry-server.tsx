// Build-time render entry used by scripts/prerender.mjs (never shipped to the browser).
/* eslint-disable react-refresh/only-export-components -- not a hot-reloaded module */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.tsx'

export { ROUTES, NOT_FOUND_SEO, SITE_URL, ROBOTS_DISALLOW, renderHeadTags } from './seo/routes'

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
