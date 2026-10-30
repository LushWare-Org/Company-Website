// Single source of truth for per-route SEO metadata.
// Used at runtime by <Seo /> (client-side navigation) and at build time by
// scripts/prerender.mjs (static HTML, sitemap.xml, robots.txt).

import { faqPageJsonLd, getRouteFaq } from '../data/faq'

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://mv.lushware.net').replace(/\/$/, '')
export const SITE_NAME = 'LushWare Maldives'
export const DEFAULT_OG_IMAGE = '/og-image.jpg'
/** Paths blocked in robots.txt. */
export const ROBOTS_DISALLOW: string[] = []

export const ORGANIZATION = {
  name: 'LushWare',
  email: 'info@lushware.net',
  telephone: '+94716430053',
  logo: '/logo.jpeg',
  sameAs: [
    'https://lushware.net',
    'https://www.linkedin.com/company/lushware',
    'https://www.instagram.com/lush_ware_org/',
    'https://web.facebook.com/lushware/',
  ],
}

/** Malé office for the LocalBusiness schema on / and /contact. Empty fields are left out of the JSON-LD. */
export const LOCAL_BUSINESS = {
  name: 'LushWare Maldives',
  // TODO: fill in the Malé street address, postcode and Maldives (+960) phone number.
  streetAddress: '',
  addressLocality: 'Malé',
  postalCode: '',
  addressCountry: 'MV',
  telephone: '',
}

export type RouteSeo = {
  path: string
  title: string
  description: string
  /** Keep out of search results (still crawlable so the noindex is seen). */
  noindex?: boolean
  /** schema.org Service name for product/service pages. */
  service?: string
  /** schema.org SoftwareApplication name for product pages (used instead of `service`). */
  software?: string
  priority?: number
  changefreq?: 'weekly' | 'monthly' | 'yearly'
  breadcrumb?: { name: string; path: string }[]
}

const services = { name: 'Services', path: '/services' }

export const ROUTES: RouteSeo[] = [
  {
    path: '/',
    title: 'LushWare Maldives — Software for Maldives Tourism & Hospitality',
    description:
      'Cloud software built for Maldivian tourism: guest house PMS, speedboat ticketing, travel agency CRM and property management. Run your island business from one platform.',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/hotelcloud',
    title: 'Guest House & Hotel Management Software Maldives | Lush Hotel Cloud',
    description:
      'Manage reservations, rooms, finances, housekeeping and maintenance from one cloud platform built for Maldives guest houses, B&Bs and small hotels.',
    software: 'Lush Hotel Cloud',
    breadcrumb: [services],
    priority: 0.9,
  },
  {
    path: '/viduvaru',
    title: 'Speedboat Ticketing & Transport Software Maldives | Viduvaru',
    description:
      'Routes, bookings, boats, guest house partnerships and payments in one cloud system for Maldivian speedboat, ferry and water taxi operators.',
    software: 'Viduvaru',
    breadcrumb: [services],
    priority: 0.9,
  },
  {
    path: '/travel-crm',
    title: 'Travel Agency CRM Maldives — AI-Powered Tour Operator CRM | LushWare',
    description:
      'Customer relationships, tour packages, quotations, invoicing and finances in one AI-powered CRM built for Maldives travel agencies and tour operators.',
    software: 'LushWare Travel CRM',
    breadcrumb: [services],
    priority: 0.9,
  },
  {
    path: '/real-estate-control',
    title: 'Property Management System for Maldives Travel Agencies | LushWare',
    description:
      'Manage properties, bookings, finances and daily operations from one cloud platform built for the way Maldivian tourism businesses work.',
    service: 'Property Management System',
    breadcrumb: [services],
    priority: 0.9,
  },
  {
    path: '/services',
    title: 'Software, Web & AI Services for Maldives Businesses | LushWare',
    description:
      'Tailored software, websites, CRM, automation and AI services for island businesses in the Maldives — from resorts and guest houses to travel agencies.',
    service: 'Software Development',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/our-work',
    title: 'Our Work — Maldives Tourism & Hospitality Projects | LushWare',
    description:
      'Recent LushWare deployments for Maldives travel agencies, speedboat operators and hospitality businesses.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    title: 'Contact LushWare Maldives — Book a Strategy Call',
    description:
      "Let's scale your island business. Book a free strategy call with LushWare about software for your Maldives guest house, travel agency or transport operation.",
    priority: 0.7,
  },
]

export const NOT_FOUND_SEO: RouteSeo = {
  path: '/404',
  title: 'Page Not Found | LushWare Maldives',
  description: 'The page you are looking for does not exist.',
  noindex: true,
}

export function getRouteSeo(pathname: string): RouteSeo {
  const normalized = pathname !== '/' ? pathname.replace(/\/+$/, '') : pathname
  return ROUTES.find((r) => r.path === normalized) ?? NOT_FOUND_SEO
}

export const absoluteUrl = (path: string) => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`)

/** JSON-LD graph for a route. */
export function getStructuredData(route: RouteSeo): object[] {
  const org = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    url: `${SITE_URL}/`,
    logo: absoluteUrl(ORGANIZATION.logo),
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.telephone,
    sameAs: ORGANIZATION.sameAs,
    areaServed: { '@type': 'Country', name: 'Maldives' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: ORGANIZATION.email,
      telephone: ORGANIZATION.telephone,
      areaServed: 'MV',
    },
  }
  const data: object[] = []
  if (route.path === '/') {
    data.push(org, {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
    })
  }
  if (route.path === '/' || route.path === '/contact') {
    const b = LOCAL_BUSINESS
    data.push({
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: b.name,
      url: `${SITE_URL}/`,
      image: absoluteUrl(DEFAULT_OG_IMAGE),
      logo: absoluteUrl(ORGANIZATION.logo),
      email: ORGANIZATION.email,
      telephone: b.telephone || ORGANIZATION.telephone,
      address: {
        '@type': 'PostalAddress',
        ...(b.streetAddress && { streetAddress: b.streetAddress }),
        addressLocality: b.addressLocality,
        ...(b.postalCode && { postalCode: b.postalCode }),
        addressCountry: b.addressCountry,
      },
      areaServed: { '@type': 'Country', name: 'Maldives' },
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    })
  }
  if (route.software) {
    data.push({
      '@type': 'SoftwareApplication',
      name: route.software,
      description: route.description,
      url: absoluteUrl(route.path),
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      publisher: org,
      areaServed: { '@type': 'Country', name: 'Maldives' },
    })
  } else if (route.service) {
    data.push({
      '@type': 'Service',
      name: route.service,
      serviceType: route.service,
      description: route.description,
      url: absoluteUrl(route.path),
      provider: org,
      areaServed: { '@type': 'Country', name: 'Maldives' },
    })
  }
  if (route.path !== '/' && !route.noindex) {
    const trail = [{ name: 'Home', path: '/' }, ...(route.breadcrumb ?? []), { name: route.title.split(/ [|—] /)[0], path: route.path }]
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
  const faq = route.noindex ? [] : getRouteFaq(route.path)
  if (faq.length) data.push(faqPageJsonLd(faq))
  return data.length ? [{ '@context': 'https://schema.org', '@graph': data }] : []
}

/** Head tags as an HTML string — used by <Seo /> and the prerender script. */
export function renderHeadTags(route: RouteSeo): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const url = absoluteUrl(route.path)
  const image = absoluteUrl(DEFAULT_OG_IMAGE)
  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    route.noindex ? `<meta name="robots" content="noindex, follow" />` : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    route.path !== NOT_FOUND_SEO.path ? `<link rel="canonical" href="${url}" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_MV" />`,
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
