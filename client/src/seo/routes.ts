// Single source of truth for per-route SEO metadata.
// Used at runtime by <Seo /> (client-side navigation) and at build time by
// scripts/prerender.mjs (static HTML, sitemap.xml, robots.txt).

import { faqPageJsonLd, getRouteFaq } from '../data/faq'
import { MARKETS, type MarketId } from '../data/markets'

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://lushware.net').replace(/\/$/, '')
export const SITE_NAME = 'LushWare'
export const DEFAULT_OG_IMAGE = '/og-image.jpg'
/** Paths blocked in robots.txt. */
export const ROBOTS_DISALLOW = ['/admin']
/** Moved pages: prerendered as instant redirects (also add a 301 in nginx). */
export const REDIRECTS = [
  { from: '/solutions', to: '/industries/tourism-hospitality' },
  { from: '/industries/hvac', to: '/solutions/hvac-mep-service-software' },
  { from: '/industries/commercial-mep', to: '/industries/commercial-hvac-mep' },
  { from: '/industries/plumbing', to: '/industries/field-service' },
  { from: '/industries/electrical', to: '/industries/field-service' },
  { from: '/solutions/crm', to: '/custom-software-development' },
]

export const ORGANIZATION = {
  name: 'LushWare',
  email: 'info@lushware.net',
  telephone: '+94716430053',
  logo: '/logo.jpeg',
  sameAs: [
    'https://www.linkedin.com/company/lushware',
    'https://www.instagram.com/lush_ware_org/',
  ],
}

export type RouteSeo = {
  path: string
  title: string
  description: string
  /** Keep out of search results (still crawlable so the noindex is seen). */
  noindex?: boolean
  /** Exclude from the sitemap (implied by noindex). */
  sitemap?: boolean
  /** Prerender the page body; false = head-only shell rendered client-side. */
  prerenderBody?: boolean
  /** schema.org Service type for solution/industry pages. */
  service?: string
  /** Target market (src/data/markets.ts); drives schema.org areaServed (ISO country codes). Default: Worldwide. */
  market?: MarketId
  priority?: number
  changefreq?: 'weekly' | 'monthly' | 'yearly'
  breadcrumb?: { name: string; path: string }[]
}

const fieldService = { name: 'Field Service Software', path: '/industries/field-service' }
const manufacturing = { name: 'Manufacturing', path: '/industries/manufacturing' }
const logistics = { name: 'Logistics & Supply Chain', path: '/industries/logistics-supply-chain' }
const tourism = { name: 'Tourism & Hospitality', path: '/industries/tourism-hospitality' }
const customSoftware = { name: 'Custom Software Development', path: '/custom-software-development' }

export const ROUTES: RouteSeo[] = [
  {
    path: '/',
    title: 'LushWare — Business Operations on Autopilot',
    description:
      'LushWare builds field service software for trades, MEP and maintenance platforms, manufacturing and supply chain AI, tourism systems and custom software for growing businesses worldwide.',
    priority: 1.0,
    changefreq: 'weekly',
  },

  // ── Trades: US / Canada / Australia / New Zealand ─────────────────────
  {
    path: '/industries/field-service',
    title: 'Field Service Software for HVAC, Plumbing & Electrical Contractors | LushWare',
    description:
      'Scheduling, dispatch, quoting, invoicing and service agreements for trade contractors in the US, Canada, Australia and New Zealand. Syncs with QuickBooks, Xero and MYOB.',
    service: 'Field Service Management Software',
    market: 'trades',
    priority: 0.9,
  },
  {
    path: '/solutions/hvac-mep-service-software',
    title: 'HVAC / MEP Service Software — Dispatch, Maintenance & Invoicing | LushWare',
    description:
      'HVAC and MEP service software for heating, cooling and building services contractors in the US, Canada, Australia and NZ: scheduling, dispatch, maintenance agreements, refrigerant records, quotes and invoices.',
    service: 'HVAC and MEP Field Service Software',
    market: 'trades',
    breadcrumb: [fieldService],
    priority: 0.8,
  },

  // ── Commercial HVAC / MEP: Europe, Middle East, East & South Asia ─────
  {
    path: '/industries/commercial-hvac-mep',
    title: 'Commercial HVAC & MEP Software — Projects, AMC & PPM | LushWare',
    description:
      'Commercial HVAC & MEP software for contractors and FM providers in Europe, the Middle East, East Asia and South Asia: project control, AMC management, PPM scheduling and BIM/BMS integration.',
    service: 'Commercial HVAC and MEP Project and Maintenance Software',
    market: 'commercialMep',
    priority: 0.9,
  },

  // ── Manufacturing & supply chain: global ──────────────────────────────
  {
    path: '/industries/manufacturing',
    title: 'Manufacturing Software — AI, IoT & Smart Factory Solutions | LushWare',
    description:
      'AI-powered manufacturing software for global plants: real-time production monitoring, predictive maintenance, quality intelligence and digital twins integrated with your ERP.',
    service: 'Manufacturing Operations Software',
    market: 'industrial',
    priority: 0.8,
  },
  {
    path: '/solutions/predictive-maintenance',
    title: 'Predictive Maintenance Software — Condition Monitoring & AI | LushWare',
    description:
      'Predict equipment failures before they stop production. Condition monitoring, remaining useful life estimates and automatic work orders in SAP PM, Maximo or your CMMS.',
    service: 'Predictive Maintenance Software',
    market: 'industrial',
    breadcrumb: [manufacturing],
    priority: 0.8,
  },
  {
    path: '/solutions/oee-monitoring',
    title: 'OEE Monitoring Software — Real-Time Production Tracking | LushWare',
    description:
      'Automatic OEE from your machines: live availability, performance and quality, downtime reason codes, micro-stop detection and shift reports across lines and plants.',
    service: 'OEE Monitoring Software',
    market: 'industrial',
    breadcrumb: [manufacturing],
    priority: 0.8,
  },
  {
    path: '/industries/logistics-supply-chain',
    title: 'Logistics & Supply Chain Software — Visibility & Optimization | LushWare',
    description:
      'Supply chain software for global operators: real-time visibility, fleet and route optimization, warehouse intelligence, demand forecasting and supply chain digital twins.',
    service: 'Logistics and Supply Chain Software',
    market: 'industrial',
    priority: 0.8,
  },
  {
    path: '/solutions/warehouse-management',
    title: 'Custom Warehouse Management System (WMS) | LushWare',
    description:
      'A WMS built around your warehouse: barcode and RFID receiving, real-time inventory, pick and pack, carrier labels and integration with SAP, Dynamics, NetSuite or Odoo.',
    service: 'Warehouse Management System Development',
    market: 'industrial',
    breadcrumb: [logistics],
    priority: 0.8,
  },

  // ── Tourism: Europe, Asia Pacific, GCC, South Asia ────────────────────
  {
    path: '/industries/tourism-hospitality',
    title: 'Tourism & Hospitality Software for Tour Operators, DMCs & Hotels | LushWare',
    description:
      'Booking, travel CRM, hotel and property management with AI demand forecasting for tour operators, DMCs and hotels in Europe, Asia Pacific, the Middle East and South Asia (GCC, Sri Lanka, India).',
    service: 'Tourism and Hospitality Software',
    market: 'tourism',
    priority: 0.8,
  },
  {
    path: '/solutions/travel-agency-software',
    title: 'Travel Agency Software — Quotes, Bookings & Travel CRM | LushWare',
    description:
      'Travel agency software for agencies and tour operators in Europe, Asia Pacific, the Middle East and South Asia: itinerary quotes, bookings, supplier contracts, payments, B2B agent portals and travel CRM.',
    service: 'Travel Agency Software',
    market: 'tourism',
    breadcrumb: [tourism],
    priority: 0.8,
  },

  // ── Global SMBs: custom projects ──────────────────────────────────────
  {
    path: '/custom-software-development',
    title: 'Custom Software Development for Small & Mid-Sized Businesses | LushWare',
    description:
      'Offshore custom software development for growing businesses worldwide: custom CRMs, web apps, mobile apps and AI automation. No upfront payment — we build first.',
    service: 'Custom Software Development',
    market: 'smb',
    priority: 0.9,
  },
  {
    path: '/solutions/ai-agents',
    title: 'AI Agents & AI Chatbots for Business | LushWare',
    description:
      'Automate, engage and optimize with AI. LushWare designs AI agents and AI chatbots that handle customer conversations, qualify leads and automate repetitive work.',
    service: 'AI Agent Development',
    market: 'smb',
    breadcrumb: [customSoftware],
    priority: 0.8,
  },
  {
    path: '/solutions/bpm',
    title: 'Business Process Management (BPM) Software | LushWare',
    description:
      'Streamline operations with business process management software — workflow automation, approvals, and real-time visibility for operational excellence.',
    service: 'Business Process Management Software',
    market: 'smb',
    breadcrumb: [customSoftware],
    priority: 0.8,
  },
  {
    path: '/solutions/websites',
    title: 'Business & Corporate Website Development | LushWare',
    description:
      'Build a strong digital presence with professional, fast, SEO-ready business and corporate websites designed to convert visitors into customers.',
    service: 'Website Development',
    market: 'smb',
    breadcrumb: [customSoftware],
    priority: 0.8,
  },
  {
    path: '/solutions/mobile-apps',
    title: 'Mobile App Development (iOS & Android) | LushWare',
    description:
      'Transform your business with intelligent mobile apps. LushWare designs and builds iOS and Android applications for customers, staff and field teams.',
    service: 'Mobile Application Development',
    market: 'smb',
    breadcrumb: [customSoftware],
    priority: 0.8,
  },

  // ── Engineering & AI capabilities ─────────────────────────────────────
  {
    path: '/solutions/iot-product-development',
    title: 'IoT Product Development Services | LushWare',
    description:
      'Connect devices and achieve operational excellence with end-to-end IoT product development — sensors, connectivity, cloud platforms and dashboards.',
    service: 'IoT Product Development',
    priority: 0.8,
  },
  {
    path: '/solutions/product-engineering',
    title: 'Product Engineering & Embedded Systems | LushWare',
    description:
      'From concept to market-ready hardware: product engineering, embedded systems, PCB design and firmware development, done properly.',
    service: 'Product Engineering',
    priority: 0.8,
  },
  {
    path: '/solutions/ai-process-optimization',
    title: 'AI Process Optimization & Operational Intelligence | LushWare',
    description:
      'See what is happening and know what to do next. AI process optimization that adds five layers of operational intelligence to your existing operations.',
    service: 'AI Process Optimization',
    priority: 0.8,
  },
  {
    path: '/solutions/autonomous-decision-intelligence',
    title: 'Autonomous Decision Intelligence | LushWare',
    description:
      'Operations that decide, act and keep improving. Autonomous decision intelligence that moves your business step by step towards self-running operations.',
    service: 'Decision Intelligence',
    priority: 0.8,
  },

  {
    path: '/work',
    title: 'Our Work — Projects & Case Studies | LushWare',
    description:
      'Explore LushWare projects showcasing innovation across travel, hospitality, real estate, CRM, automation and digital products.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/project-base',
    title: 'Become a Product Builder | LushWare',
    description:
      'Join LushWare programs and become a product builder — collaborate on real products and grow your skills with our team.',
    priority: 0.5,
  },
  {
    path: '/contact',
    title: 'Book a Free Consultation | LushWare',
    description:
      'Book a free consultation with LushWare. Tell us about your business and we will show you how to automate operations with CRM, AI and custom software.',
    priority: 0.7,
  },
  // Demo templates: reachable but kept out of search results.
  {
    path: '/templates/consultancy',
    title: 'Consultancy Website Template | LushWare',
    description: 'Consultancy website template demo by LushWare.',
    noindex: true,
  },
  {
    path: '/templates/healthcare',
    title: 'Healthcare Website Template | LushWare',
    description: 'Healthcare website template demo by LushWare.',
    noindex: true,
  },
  {
    path: '/templates/real-estate',
    title: 'Real Estate Website Template | LushWare',
    description: 'Real estate website template demo by LushWare.',
    noindex: true,
  },
  // Admin: client-rendered only, never indexed.
  {
    path: '/admin',
    title: 'Admin | LushWare',
    description: 'LushWare admin.',
    noindex: true,
    prerenderBody: false,
  },
  {
    path: '/admin/dashboard',
    title: 'Admin Dashboard | LushWare',
    description: 'LushWare admin dashboard.',
    noindex: true,
    prerenderBody: false,
  },
]

export const NOT_FOUND_SEO: RouteSeo = {
  path: '/404',
  title: 'Page Not Found | LushWare',
  description: 'The page you are looking for does not exist.',
  noindex: true,
}

export function getRouteSeo(pathname: string): RouteSeo {
  const normalized = pathname !== '/' ? pathname.replace(/\/+$/, '') : pathname
  return ROUTES.find((r) => r.path === normalized) ?? NOT_FOUND_SEO
}

export const absoluteUrl = (path: string) => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path === '/' ? '/' : path}`)

/** schema.org areaServed: ISO 3166-1 alpha-2 codes for a target market, or "Worldwide". */
function areaServed(route: RouteSeo): string | string[] {
  const codes = route.market ? MARKETS[route.market].areaServed : ['Worldwide']
  return codes.length === 1 ? codes[0] : codes
}

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
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: ORGANIZATION.email,
      telephone: ORGANIZATION.telephone,
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
  if (route.service) {
    data.push({
      '@type': 'Service',
      name: route.service,
      serviceType: route.service,
      description: route.description,
      url: absoluteUrl(route.path),
      provider: org,
      areaServed: areaServed(route),
    })
  }
  const faq = route.noindex ? [] : getRouteFaq(route.path)
  if (faq.length) data.push(faqPageJsonLd(faq))
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
  return data.length ? [{ '@context': 'https://schema.org', '@graph': data }] : []
}

/** Head tags as an HTML string — used by the prerender script. */
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
