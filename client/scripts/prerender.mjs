// Post-build step: renders every route in src/seo/routes.ts to static HTML
// (dist/<route>.html, served extensionless via vercel.json "cleanUrls"), plus
// 404.html, sitemap.xml and robots.txt.
//
// Expects `vite build` (dist/) and `vite build --ssr src/entry-server.tsx`
// (dist-ssr/) to have run first — see the "build" script in package.json.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, ROUTES, NOT_FOUND_SEO, SITE_URL, renderHeadTags } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
if (!template.includes('<!--seo-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing the <!--seo-head--> marker or an empty <div id="root"></div>')
}

const failures = []

function buildPage(route, url) {
  let body = ''
  if (route.prerenderBody !== false) {
    try {
      body = render(url)
    } catch (err) {
      // Fall back to a head-only shell so the build never ships a broken page.
      failures.push(`${url}: ${err?.message ?? err}`)
    }
  }
  return template
    .replace(/<title>.*?<\/title>/s, '')
    .replace('<!--seo-head-->', renderHeadTags(route))
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
}

function outFile(routePath) {
  return routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`
}

for (const route of ROUTES) {
  const file = path.join(distDir, outFile(route.path))
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, buildPage(route, route.path))
}
fs.writeFileSync(path.join(distDir, '404.html'), buildPage(NOT_FOUND_SEO, '/__not-found__'))

// sitemap.xml
const today = new Date().toISOString().slice(0, 10)
const urls = ROUTES.filter((r) => !r.noindex && r.sitemap !== false)
  .map((r) =>
    [
      '  <url>',
      `    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>` : '',
      r.priority != null ? `    <priority>${r.priority.toFixed(1)}</priority>` : '',
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n'),
  )
  .join('\n')
fs.writeFileSync(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

// robots.txt — templates stay crawlable so their noindex tag is honoured.
fs.writeFileSync(
  path.join(distDir, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

fs.rmSync(ssrDir, { recursive: true, force: true })

console.log(`Prerendered ${ROUTES.length} routes + 404.html, sitemap.xml (${urls.split('<url>').length - 1} URLs), robots.txt`)
if (failures.length) {
  console.warn(`\n⚠ ${failures.length} route(s) fell back to client-only rendering:\n  ${failures.join('\n  ')}`)
}
