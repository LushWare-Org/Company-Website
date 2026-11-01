// Post-deploy SEO check (identical copy in client/ and maldives/ — keep them in sync).
// Compares the live site with the local build of the deployed commit:
//   - every sitemap URL is 200, indexable (meta robots + X-Robots-Tag) and self-canonical
//   - the live sitemap lists the same URLs as the build (catches a stale deploy)
//   - every moved page (redirect stub in dist/) lands on its target, ideally via an nginx 301
//   - an unknown URL returns 404 (no SPA fallback to index.html)
//   - robots.txt doesn't block the site and points at the sitemap
//
// Usage: npm run build && node scripts/check-seo.mjs [https://live-origin]
// The origin defaults to the one in dist/sitemap.xml. Exits 1 on any failure.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const distDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const sitemapFile = path.join(distDir, 'sitemap.xml')
if (!fs.existsSync(sitemapFile)) {
  console.error('dist/sitemap.xml not found — run `npm run build` first.')
  process.exit(1)
}

const locs = (xml) => [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
const builtUrls = locs(fs.readFileSync(sitemapFile, 'utf-8'))
const builtOrigin = new URL(builtUrls[0]).origin
const origin = (process.argv[2] || builtOrigin).replace(/\/$/, '')
// Check the live site even when the build's SITE_URL differs from the given origin.
const live = (url) => url.replace(builtOrigin, origin)

const failures = []
const warnings = []
const fail = (msg) => failures.push(msg)

async function get(url, redirect = 'follow') {
  const res = await fetch(url, { redirect, headers: { 'User-Agent': 'LushWare-SEO-check' } })
  return { res, html: redirect === 'manual' ? '' : await res.text() }
}

const metaRobots = (html) => html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/i)?.[1] ?? ''
const canonical = (html) => html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i)?.[1]

// 1. Indexable pages
async function checkPage(url) {
  try {
    const { res, html } = await get(live(url))
    if (res.status !== 200) return fail(`${url} → HTTP ${res.status}`)
    if (res.redirected) fail(`${url} redirects to ${res.url} but is in the sitemap`)
    if (/noindex/i.test(metaRobots(html))) fail(`${url} has <meta name="robots" content="${metaRobots(html)}">`)
    if (/noindex/i.test(res.headers.get('x-robots-tag') ?? '')) fail(`${url} has X-Robots-Tag: ${res.headers.get('x-robots-tag')}`)
    const canon = canonical(html)
    if (!canon) fail(`${url} has no canonical`)
    else if (canon !== url) fail(`${url} canonical points to ${canon}`)
  } catch (err) {
    fail(`${url} → ${err.message}`)
  }
}

// 2. Moved pages: dist/<from>.html stubs written by prerender.mjs
function findRedirects(dir = distDir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const file = path.join(dir, e.name)
    if (e.isDirectory()) return findRedirects(file)
    if (!e.name.endsWith('.html')) return []
    const to = fs.readFileSync(file, 'utf-8').match(/http-equiv="refresh" content="0; url=([^"]+)"/)?.[1]
    if (!to) return []
    const from = '/' + path.relative(distDir, file).replace(/\\/g, '/').replace(/\.html$/, '')
    return [{ from, to }]
  })
}

async function checkRedirect({ from, to }) {
  try {
    const { res } = await get(origin + from, 'manual')
    const location = res.headers.get('location')
    if (res.status === 301 || res.status === 308) {
      const target = location && new URL(location, origin + from).pathname
      if (target !== to) fail(`${from} → ${res.status} to ${location}, expected ${to}`)
      return
    }
    if (res.status >= 300 && res.status < 400) return fail(`${from} → temporary ${res.status} to ${location}; use a 301`)
    if (res.status !== 200) return fail(`${from} → HTTP ${res.status}, expected a redirect to ${to}`)
    const { html } = await get(origin + from)
    if (!html.includes(`url=${to}"`)) return fail(`${from} → 200 without a redirect to ${to}`)
    warnings.push(`${from} → ${to} only via meta refresh; add the 301 in nginx`)
  } catch (err) {
    fail(`${from} → ${err.message}`)
  }
}

// Small concurrency pool so the check is quick without hammering the server.
async function pool(items, fn, size = 6) {
  const queue = [...items]
  await Promise.all(Array.from({ length: size }, async () => { while (queue.length) await fn(queue.shift()) }))
}

console.log(`Checking ${origin} against the local build (${builtUrls.length} sitemap URLs)…`)
await pool(builtUrls, checkPage)

const redirects = findRedirects()
await pool(redirects, checkRedirect)

// 3. Live sitemap matches the build
try {
  const liveUrls = new Set(locs((await get(`${origin}/sitemap.xml`)).html).map(live))
  const expected = new Set(builtUrls.map(live))
  for (const u of expected) if (!liveUrls.has(u)) fail(`live sitemap is missing ${u} (stale deploy?)`)
  for (const u of liveUrls) if (!expected.has(u)) fail(`live sitemap has ${u}, which the build doesn't`)
} catch (err) {
  fail(`sitemap.xml → ${err.message}`)
}

// 4. Unknown URLs are real 404s
try {
  const { res } = await get(`${origin}/__seo-check-${Date.now()}`)
  if (res.status !== 404) fail(`unknown URL → HTTP ${res.status}, expected 404 (SPA fallback in nginx?)`)
} catch (err) {
  fail(`404 check → ${err.message}`)
}

// 5. robots.txt
try {
  const { res, html: robots } = await get(`${origin}/robots.txt`)
  if (res.status !== 200) fail(`robots.txt → HTTP ${res.status}`)
  if (/^Disallow:\s*\/\s*$/m.test(robots)) fail('robots.txt blocks the whole site (Disallow: /)')
  if (!/^Sitemap:\s*\S+/m.test(robots)) fail('robots.txt has no Sitemap line')
} catch (err) {
  fail(`robots.txt → ${err.message}`)
}

for (const w of warnings) console.warn(`⚠ ${w}`)
if (failures.length) {
  console.error(`\n✗ ${failures.length} problem(s):\n  ${failures.join('\n  ')}`)
  process.exit(1)
}
console.log(`\n✓ ${builtUrls.length} pages indexable, ${redirects.length} redirect(s) OK, 404 + robots.txt OK`)
