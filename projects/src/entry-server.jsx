// Build-time render entry used by scripts/prerender.mjs (never shipped to the browser).
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import { ThemeProvider } from './theme.jsx'

export { ROUTES, NOT_FOUND_SEO, SITE_URL, ROBOTS_DISALLOW, renderHeadTags } from './seo/routes.js'

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <ThemeProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    </React.StrictMode>,
  )
}
