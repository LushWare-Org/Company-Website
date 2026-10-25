// Single source of truth for per-route SEO metadata.
// Used at runtime by <Seo /> (client-side navigation) and at build time by
// scripts/prerender.mjs (static HTML, sitemap.xml, robots.txt).

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://lushware.net').replace(/\/$/, '')
export const SITE_NAME = 'LushWare'
export const DEFAULT_OG_IMAGE = '/og-image.jpg'
/** Paths blocked in robots.txt. */
export const ROBOTS_DISALLOW = ['/admin']

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
  priority?: number
  changefreq?: 'weekly' | 'monthly' | 'yearly'
  breadcrumb?: { name: string; path: string }[]
}

const solutions = { name: 'Solutions', path: '/solutions' }
const industries = { name: 'Industries', path: '/solutions' }

export const ROUTES: RouteSeo[] = [
  {
    path: '/',
    title: 'LushWare — Business Operations on Autopilot',
    description:
      'LushWare builds CRM, AI agents, business process automation, websites, mobile apps and IoT solutions that put your business operations on autopilot.',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/solutions',
    title: 'Intelligent Operations Solutions | LushWare',
    description:
      'Explore LushWare solutions: CRM, AI agents, BPM, websites, mobile apps, IoT, AI process optimization and autonomous decision intelligence for growing businesses.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/solutions/crm',
    title: 'Custom CRM Development & Solutions | LushWare',
    description:
      'Build stronger customer relationships with intelligent CRM solutions — custom CRM development, automation, integrations and analytics tailored to your business.',
    service: 'CRM Development',
    breadcrumb: [solutions],
    priority: 0.8,
  },
  {
    path: '/solutions/ai-agents',
    title: 'AI Agents & AI Chatbots for Business | LushWare',
    description:
      'Automate, engage and optimize with AI. LushWare designs AI agents and AI chatbots that handle customer conversations, qualify leads and automate repetitive work.',
    service: 'AI Agent Development',
    breadcrumb: [solutions],
    priority: 0.8,
  },
  {
    path: '/solutions/bpm',
    title: 'Business Process Management (BPM) Software | LushWare',
    description:
      'Streamline operations with business process management software — workflow automation, approvals, and real-time visibility for operational excellence.',
    service: 'Business Process Management Software',
    breadcrumb: [solutions],
    priority: 0.8,
  },
  {
    path: '/solutions/websites',
    title: 'Business & Corporate Website Development | LushWare',
    description:
      'Build a strong digital presence with professional, fast, SEO-ready business and corporate websites designed to convert visitors into customers.',
    service: 'Website Development',
    breadcrumb: [solutions],
    priority: 0.8,
  },
  {
    path: '/solutions/mobile-apps',
    title: 'Mobile App Development (iOS & Android) | LushWare',
    description:
      'Transform your business with intelligent mobile apps. LushWare designs and builds iOS and Android applications for customers, staff and field teams.',
    service: 'Mobile Application Development',
    breadcrumb: [solutions],
    priority: 0.8,
  },
  {
    path: '/solutions/iot-product-development',
    title: 'IoT Product Development Services | LushWare',
    description:
      'Connect devices and achieve operational excellence with end-to-end IoT product development — sensors, connectivity, cloud platforms and dashboards.',
    service: 'IoT Product Development',
    breadcrumb: [solutions],
    priority: 0.8,
  },
  {
    path: '/solutions/product-engineering',
    title: 'Product Engineering & Embedded Systems | LushWare',
    description:
      'From concept to market-ready hardware: product engineering, embedded systems, PCB design and firmware development, done properly.',
    service: 'Product Engineering',
    breadcrumb: [solutions],
    priority: 0.8,
  },
  {
    path: '/solutions/ai-process-optimization',
    title: 'AI Process Optimization & Operational Intelligence | LushWare',
    description:
      'See what is happening and know what to do next. AI process optimization that adds five layers of operational intelligence to your existing operations.',
    service: 'AI Process Optimization',
    breadcrumb: [solutions],
    priority: 0.8,
  },
  {
    path: '/solutions/autonomous-decision-intelligence',
    title: 'Autonomous Decision Intelligence | LushWare',
    description:
      'Operations that decide, act and keep improving. Autonomous decision intelligence that moves your business step by step towards self-running operations.',
    service: 'Decision Intelligence',
    breadcrumb: [solutions],
    priority: 0.8,
  },
  {
    path: '/industries/hvac',
    title: 'HVAC & MEP Software Solutions | LushWare',
    description:
      'Tailored software for HVAC and MEP contractors — job scheduling, dispatch, quoting, invoicing and customer management in one platform for every MEP trade.',
    service: 'HVAC Field Service Software',
    breadcrumb: [industries],
    priority: 0.8,
  },
  {
    path: '/industries/plumbing',
    title: 'Plumbing Business Software | LushWare',
    description:
      'Tailored software for plumbing businesses — job scheduling, dispatch, quoting, invoicing and customer management built for plumbing contractors.',
    service: 'Plumbing Field Service Software',
    breadcrumb: [industries],
    priority: 0.8,
  },
  {
    path: '/industries/electrical',
    title: 'Electrical Contractor Software | LushWare',
    description:
      'Tailored software for electrical contractors — scheduling, dispatch, quoting, invoicing and customer management for your trades business.',
    service: 'Electrical Contractor Software',
    breadcrumb: [industries],
    priority: 0.8,
  },
  {
    path: '/industries/manufacturing',
    title: 'Intelligent Operations for Manufacturing | LushWare',
    description:
      'Intelligence for every stage of production — manufacturing software, IoT monitoring, predictive maintenance and AI-driven operational insights.',
    service: 'Manufacturing Operations Software',
    breadcrumb: [industries],
    priority: 0.8,
  },
  {
    path: '/industries/logistics-supply-chain',
    title: 'Logistics & Supply Chain Software | LushWare',
    description:
      'Intelligent operations for logistics and supply chain — real-time visibility, tracking, optimization and AI insights across the entire supply chain.',
    service: 'Logistics and Supply Chain Software',
    breadcrumb: [industries],
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
      areaServed: 'Worldwide',
    })
  }
  if (route.path !== '/' && !route.noindex) {
    const trail = [{ name: 'Home', path: '/' }, ...(route.breadcrumb ?? []), { name: route.title.split(' | ')[0], path: route.path }]
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
