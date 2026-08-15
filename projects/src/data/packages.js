export const FOUNDER_PACKAGES = [
  {
    id: 'foundation',
    tier: 'Tier 01',
    name: 'Foundation Partner',
    price: '$5,000',
    budgetPercent: 20,
    equity: 20,
    tagline: 'For idea-stage founders who need a true technical co-building partner.',
    features: [
      'Deepest equity partnership — we build as if it were our own venture',
      'Full product architecture, MVP build, and iteration support',
      'Direct access to senior engineers throughout the build',
      'Ongoing technical advisory after launch'
    ]
  },
  {
    id: 'build',
    tier: 'Tier 02',
    name: 'Build Partner',
    price: '$10,000',
    budgetPercent: 40,
    equity: 10,
    featured: true,
    tagline: 'A balanced blend of cash and equity for founders with early traction.',
    features: [
      'Full MVP-to-v1 product build',
      'Shared upside with a moderate equity stake',
      'Weekly build reviews with founders',
      'Priority access to LushWare\u2019s specialist tracks'
    ]
  },
  {
    id: 'growth',
    tier: 'Tier 03',
    name: 'Growth Partner',
    price: '$20,000',
    budgetPercent: 80,
    equity: 5,
    tagline: 'Mostly cash-funded, for founders who want to preserve most of their equity.',
    features: [
      'Full-scope build with a minority equity kicker',
      'Suited to funded or revenue-generating startups',
      'Dedicated project lead and delivery pod',
      'Architecture scaled for your next funding round'
    ]
  },
  {
    id: 'custom',
    tier: 'Tier 04',
    name: 'Custom Build',
    price: 'Estimated Budget',
    equity: 0,
    tagline: 'Fully cash-funded engagement — no equity given up, scoped to your budget.',
    features: [
      'Custom-scoped proposal based on your requirements',
      'No equity exchanged — a standard client engagement',
      'Same senior delivery team and quality bar',
      'Flexible engagement models: fixed-price or sprint-based'
    ]
  }
]

export const BUSINESS_PACKAGE = {
  icon: 'chart',
  name: 'Business Package',
  price: 'Estimated Budget',
  tagline: 'For established businesses commissioning custom software, AI, or blockchain systems.',
  features: [
    'Free discovery workshop and requirements audit',
    'Fixed-scope proposal with transparent milestone pricing',
    'Dedicated delivery pod for the full project lifecycle',
    'Post-launch support and SLA options'
  ]
}

export const PARTNER_PACKAGE = {
  icon: 'handshake',
  name: 'Partner Package',
  price: 'Negotiable Commission',
  tagline: 'For agencies, consultancies, and technology resellers referring or co-delivering projects.',
  features: [
    'Commission structured per engagement — no fixed rate card',
    'Co-branded or white-label delivery available',
    'Dedicated partner success contact',
    'Early access to new service tracks as they launch'
  ]
}

export const AUDIENCES = [
  { id: 'founders', label: 'Founders', icon: 'rocket' },
  { id: 'business', label: 'Business', icon: 'building' },
  { id: 'partners', label: 'Partners', icon: 'handshake' }
]
