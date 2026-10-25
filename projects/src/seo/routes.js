// Single source of truth for URLs and per-route SEO metadata.
// Used at runtime by <Seo /> and the tab navs, and at build time by
// scripts/prerender.mjs (static HTML, sitemap.xml, robots.txt).
// Specialization titles/descriptions are derived from src/data/specializations.js.

import { TABS } from '../data/specializations.js'

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://tech.lushware.net').replace(/\/$/, '')
export const SITE_NAME = 'LushWare'
export const DEFAULT_OG_IMAGE = '/og-image.jpg'
/** Paths blocked in robots.txt. */
export const ROBOTS_DISALLOW = []

export const ORGANIZATION = {
  name: 'LushWare',
  email: 'info@lushware.net',
  logo: '/lushware-logo.png',
  sameAs: ['https://lushware.net', 'https://www.linkedin.com/company/lushware', 'https://www.instagram.com/lush_ware_org/'],
}

// The default tab/subtab lives at its parent URL so the same content never has two URLs.
export const tabPath = (tab) => (tab === TABS[0] ? '/' : `/specializations/${tab.slug}`)
export const subtabPath = (tab, sub) =>
  sub === tab.subtabs[0] ? tabPath(tab) : `${tabPath(tab)}/${sub.slug}`

/** Cuts copy to a meta-description length at a word boundary. */
function summarize(text, max = 158) {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return clean.slice(0, clean.lastIndexOf(' ', max - 1)).replace(/[,;:—–-]\s*$/, '') + '…'
}

const specializations = { name: 'Specializations', path: '/' }

const specializationRoutes = TABS.flatMap((tab) => {
  const own = {
    path: tabPath(tab),
    title: tab === TABS[0] ? 'LushWare — Service Specializations: Software, AI, ML, Deep Tech & Blockchain' : `${tab.title} | LushWare`,
    description:
      tab === TABS[0]
        ? 'LushWare capability map: scalable software systems, agentic AI, machine learning, deep tech and blockchain — each with a build blueprint and proven industry applications.'
        : summarize(tab.intro),
    service: tab.title,
    breadcrumbName: tab.label,
    breadcrumb: tab === TABS[0] ? undefined : [specializations],
    priority: tab === TABS[0] ? 1.0 : 0.8,
    changefreq: tab === TABS[0] ? 'weekly' : 'monthly',
  }
  const subs = (tab.subtabs ?? []).slice(1).map((sub) => ({
    path: subtabPath(tab, sub),
    title: `${sub.title} | LushWare`,
    description: summarize(sub.intro),
    service: sub.title,
    breadcrumbName: sub.label,
    breadcrumb: [specializations, { name: tab.label, path: tabPath(tab) }],
    priority: 0.7,
    changefreq: 'monthly',
  }))
  return [own, ...subs]
})

export const ROUTES = [
  ...specializationRoutes,
  {
    path: '/packages',
    title: 'Engagement Packages for Founders, Businesses & Partners | LushWare',
    description:
      'Three ways to work with LushWare: equity-based packages for founders, scoped fixed-budget engagements for businesses, and commission-based partnerships for agencies.',
    breadcrumbName: 'Packages',
    priority: 0.9,
    changefreq: 'monthly',
  },
]

export const NOT_FOUND_SEO = {
  path: '/404',
  title: 'Page Not Found | LushWare',
  description: 'The page you are looking for does not exist.',
  noindex: true,
}

export function getRouteSeo(pathname) {
  const normalized = pathname !== '/' ? pathname.replace(/\/+$/, '') : pathname
  return ROUTES.find((r) => r.path === normalized) ?? NOT_FOUND_SEO
}

export const absoluteUrl = (path) => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`)

/** JSON-LD graph for a route. */
export function getStructuredData(route) {
  const org = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    url: `${SITE_URL}/`,
    logo: absoluteUrl(ORGANIZATION.logo),
    email: ORGANIZATION.email,
    sameAs: ORGANIZATION.sameAs,
  }
  const data = []
  if (route.path === '/') {
    data.push(org, {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
    })
  }
  if (route.service) {
    data.push({
      '@type': 'Service',
      name: route.service,
      serviceType: route.service,
      description: route.description,
      url: absoluteUrl(route.path),
      provider: route.path === '/' ? { '@id': `${SITE_URL}/#organization` } : org,
      areaServed: 'Worldwide',
    })
  }
  if (route.path !== '/' && !route.noindex) {
    const trail = [{ name: 'Home', path: '/' }, ...(route.breadcrumb ?? []), { name: route.breadcrumbName, path: route.path }]
      // "Specializations" is the home page; drop the duplicate crumb.
      .filter((t, i, arr) => arr.findIndex((o) => o.path === t.path) === i)
    data.push({
      '@type': 'BreadcrumbList',
      itemListElement: trail.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: t.name,
        item: absoluteUrl(t.path),
      })),
    })
  }
  return data.length ? [{ '@context': 'https://schema.org', '@graph': data }] : []
}

/** Head tags as an HTML string — used by <Seo /> and the prerender script. */
export function renderHeadTags(route) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const url = absoluteUrl(route.path)
  const image = absoluteUrl(DEFAULT_OG_IMAGE)
  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    route.noindex ? `<meta name="robots" content="noindex, follow" />` : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    route.path !== NOT_FOUND_SEO.path ? `<link rel="canonical" href="${url}" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...getStructuredData(route).map(
      (d) => `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, '\\u003c')}</script>`,
    ),
  ]
  // data-seo marks tags that <Seo /> replaces on client-side navigation.
  return tags
    .filter(Boolean)
    .map((t) => t.replace(/^<(\w+)/, '<$1 data-seo'))
    .join('\n    ')
}
