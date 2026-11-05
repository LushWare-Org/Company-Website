// Long-form case studies, one page each at /case-studies/<slug> (rendered by
// src/pages/CaseStudyPage.tsx, SEO in src/seo/routes.ts). Real projects from
// src/data/work.ts only. Every capability below is visible in the live product;
// no invented screenshots or metrics, and testimonials only as the client wrote them.

import type { PagePath } from './links'
import type { WorkProjectId } from './work'

export type CaseStudy = {
  slug: string
  /** Matching entry in src/data/work.ts (its /work card links here). */
  workId: WorkProjectId
  name: string
  industry: string
  category: string
  /** Positioning line, used as the H1 under the project name. */
  headline: string
  intro: string
  link: string
  image: { src: string; alt: string }
  /** Extra real screenshots of the live product. */
  gallery?: { src: string; alt: string; caption: string; className: string }[]
  overview: string[]
  challenge: { heading: string; paragraphs: string[]; points: string[] }
  solution: { heading: string; paragraphs: string[]; flow: { step: string; detail: string }[] }
  capabilities: { heading: string; intro: string; items: { term: string; detail: string }[] }
  value: { heading: string; items: { title: string; detail: string }[] }
  /** Client review, quoted verbatim. */
  testimonial: { quote: string; author: string; company: string }
  /** What the project shows LushWare can do. */
  strengths: string[]
  /** Only technologies confirmed in the live build. */
  technologies: { names: string[]; note: string }
  related: PagePath[]
  cta: { heading: string; text: string }
  inquiry: { topic: string; industry: string }
}

export const CASE_STUDIES = [
  {
    slug: 'meet-me-maldives',
    workId: 'meetmemaldives',
    name: 'Meet Me Maldives',
    industry: 'Travel & Tourism',
    category: 'AI-Powered Travel Personalization Platform',
    headline: 'Making Travel Discovery More Personal with AI',
    intro:
      'A Maldives travel deals platform that uses AI-powered recommendations to show each traveller the offers that fit them, instead of one long list for everyone.',
    link: 'https://meetmemaldives.com/',
    image: {
      src: '/work2/meetmemaldives.webp',
      alt: 'Meet Me Maldives home page with AI-powered deal matching, built by LushWare',
    },
    gallery: [
      {
        src: '/work2/meetmemaldives-tablet.webp',
        alt: 'Meet Me Maldives on a tablet',
        caption: 'Tablet',
        className: 'aspect-[588/784]',
      },
      {
        src: '/work2/meetmemaldives-mobile.webp',
        alt: 'Meet Me Maldives on a phone',
        caption: 'Mobile',
        className: 'aspect-[440/790]',
      },
    ],
    overview: [
      'Meet Me Maldives is a travel platform that promotes Maldives holidays and connects travellers with offers from verified local operators: resorts, local guesthouses, diving, liveaboards, island hopping and other experiences.',
      'LushWare built the platform with AI-powered personalization at its core. Rather than listing every deal the same way for every visitor, it learns what each traveller is looking for and puts the most relevant offers in front of them.',
    ],
    challenge: {
      heading: 'Too many offers, too little relevance',
      paragraphs: [
        'The Maldives serves very different travellers. A honeymoon couple looking at overwater villas, a family on a budget looking at local islands and a diver chasing manta season all search for "Maldives deals", but they want completely different things.',
        'Typical deal sites show the same list to all of them. Travellers have to dig through offers that do not fit, and good offers from smaller operators get buried. The business needed discovery that adapts to the person, not just more listings.',
      ],
      points: [
        'Generic listings treat every visitor the same',
        'Relevant offers get lost among hundreds of others',
        'Operators struggle to reach the travellers their deals suit',
      ],
    },
    solution: {
      heading: 'A deals platform that learns what each traveller wants',
      paragraphs: [
        'We designed the platform around the traveller profile. During onboarding, travellers share their travel style, budget, who they travel with, the activities and accommodation they prefer and the destinations they dream of. As they search and browse, the platform keeps learning from their behaviour.',
        'An AI recommendation layer combines this profile and behavioural data with the details of every live offer, then builds a personalized "For You" feed. Matched deals are marked so travellers can see why an offer was suggested.',
      ],
      flow: [
        { step: 'Discover', detail: 'Travellers land on curated, subscriber-only Maldives deals.' },
        { step: 'Personalize', detail: 'A short onboarding captures preferences; AI matches offers to the traveller.' },
        { step: 'Explore', detail: 'Travellers browse, search and compare offers in detail.' },
        { step: 'Enquire or book', detail: 'They lock a deal or request their own dates from the operator.' },
        { step: 'Fulfil', detail: 'The verified operator handles the booking and arrangements.' },
      ],
    },
    capabilities: {
      heading: 'AI-powered personalized recommendations',
      intro:
        'The recommendation system ranks every available offer for every traveller. It considers four kinds of signal, so the feed improves the more a traveller uses the platform.',
      items: [
        {
          term: 'Profile & preferences',
          detail:
            'Travel style, budget range, travel companions, preferred activities, accommodation types, trip length, transfer preferences and diving experience, captured in a guided onboarding.',
        },
        {
          term: 'Search history',
          detail: 'What a traveller has searched for before shapes which offers are recommended next.',
        },
        {
          term: 'Interests & browsing behaviour',
          detail: 'Deals and categories a traveller views and engages with refine their interests over time.',
        },
        {
          term: 'Offer relevance',
          detail:
            'Each live offer is scored against the individual traveller, and the best matches appear in the "For You" feed with an AI match label.',
        },
        {
          term: 'Verified operator dashboard',
          detail:
            'Operators publish deals, properties, itineraries, inclusions and availability in Maldives time; listings are reviewed and moderated before they go live.',
        },
        {
          term: 'Deal locking & date requests',
          detail:
            'Travellers can lock a subscriber-only price after phone verification, or request their preferred dates and group size directly from the operator.',
        },
      ],
    },
    value: {
      heading: 'Business value',
      items: [
        {
          title: 'More relevant offers',
          detail: 'Each traveller sees the deals that match their profile and behaviour first, not a generic list.',
        },
        {
          title: 'Personal travel discovery',
          detail: 'The experience adapts to every visitor, from luxury escapes to budget island life and diving trips.',
        },
        {
          title: 'Better traveller–offer fit',
          detail: 'Operators reach the travellers their offers actually suit, so good deals are not buried.',
        },
        {
          title: 'Engagement & conversion potential',
          detail: 'Showing people offers they are more likely to act on creates more opportunities for enquiries and bookings.',
        },
      ],
    },
    testimonial: {
      quote:
        'You guys are professional and always does a great job. I have been asking for changes frequently and those changes were made with a short time period with the quality of work I wanted. The website was structured and designed the way how I pictured. The payment plan was flexible and would love to continue working with you in the future.',
      author: 'Mr. Shaif',
      company: 'Meet Me Maldives',
    },
    strengths: [
      'AI integration in a live consumer product',
      'Recommendation systems',
      'Behavioural data analysis',
      'Personalized digital experiences',
      'Multi-sided platforms (travellers, operators, admins)',
    ],
    technologies: {
      names: ['React', 'Vite', 'Framer Motion', 'AI recommendation engine'],
      note: 'Front-end stack as deployed on the live platform.',
    },
    related: ['/solutions/ai-agents', '/custom-software-development', '/industries/tourism-hospitality', '/case-studies/yo-maldives'],
    cta: {
      heading: 'Want AI personalization in your platform?',
      text: 'Whether you run a travel business, a marketplace or a customer portal, we can help you turn your customer data into recommendations that feel personal. Tell us what you want to build.',
    },
    inquiry: { topic: 'AI-powered personalization platform', industry: 'Travel & Tourism' },
  },
  {
    slug: 'yo-maldives',
    workId: 'yomaldives',
    name: 'Yo Maldives',
    industry: 'Travel & Tourism',
    category: 'B2B Travel Technology Platform',
    headline: 'Enabling Travel Businesses Through B2B Digital Platforms',
    intro:
      'A B2B platform where travel agencies register, find Maldives hotels at trade rates, request bookings and prepare client quotes, all in one place.',
    link: 'https://yomaldives.travel/',
    image: {
      src: '/work2/yomaldives.webp',
      alt: 'Yo Maldives B2B portal for travel agents on laptop, tablet and phone, built by LushWare',
    },
    overview: [
      'Yo Maldives (Yomaldives, "Maldives Wholesale Experts") is a B2B digital platform for travel agents selling Maldives holidays. It gives agencies their own digital access to resorts, rooms, tours and special offers at trade rates.',
      'LushWare designed and built the platform around how travel agents actually work: checking availability for a client, comparing room and meal-plan options, requesting a booking and sending the client a quote with their own margin.',
    ],
    challenge: {
      heading: 'Complex rates, manual processes',
      paragraphs: [
        'Much of Maldives tourism is sold through travel agents and wholesalers. Pricing is unusually complex: rates change by season and source market, depend on room and occupancy combinations, meal plans and child ages, and add transfers by speedboat, domestic flight or ferry, plus supplements and early-bird offers.',
        'When that information lives in contracts, spreadsheets and email threads, every quote is slow and error-prone. The business needed a dedicated platform that gives agents self-service access while keeping trade rates behind a controlled, registered login.',
      ],
      points: [
        'Rates spread across seasons, markets, meal plans and transfers',
        'Agents waiting on email for availability and prices',
        'Trade rates that must stay restricted to approved agencies',
      ],
    },
    solution: {
      heading: 'A dedicated digital platform for travel agents',
      paragraphs: [
        'We built a B2B portal with two sides. Administrators set up hotels, rooms, seasons, markets, occupancy rules, offers, supplements and transfers once, in a structured way. Agents then search and book against that data themselves.',
        'Access is account-based: agencies register with their company, billing and invoicing details, sign in, and only see the pages their role allows. The front end talks to the back end through an API, so new capabilities can be added as the business grows.',
      ],
      flow: [
        { step: 'Register', detail: 'Agencies apply with company, billing and invoicing details.' },
        { step: 'Search', detail: 'Agents search properties by dates, rooms, guests, meal plan and transfer.' },
        { step: 'Compare', detail: 'Hotel and room profiles show policies, dining, transfers and prices.' },
        { step: 'Request', detail: 'Agents submit a booking request with a full price breakdown.' },
        { step: 'Quote', detail: 'They generate a client quote with their own profit margin.' },
      ],
    },
    capabilities: {
      heading: 'Built for the commercial reality of travel businesses',
      intro:
        'Yo Maldives is not a brochure website. It is an operational system that models how Maldives travel is priced and sold through the trade.',
      items: [
        {
          term: 'B2B platform development',
          detail:
            'A dedicated portal for travel agencies, with B2B rates, special offers for partners and tour packages, separate from any consumer site.',
        },
        {
          term: 'Business accounts & access management',
          detail:
            'Travel agency registration with company, billing and invoicing contacts, secure sign-in, and role-based access between agents and administrators.',
        },
        {
          term: 'Agent-oriented search',
          detail:
            'Property search by dates, multiple rooms, child ages, nationality, meal plan, star rating and transfer method, with available rooms and room combinations.',
        },
        {
          term: 'Contract & rate management',
          detail:
            'Administrators manage hotels, rooms, seasons, markets, occupancy combinations, discount tiers, early-bird offers, festive supplements, transfers and tours.',
        },
        {
          term: 'Digital booking & quote workflows',
          detail:
            'Booking requests with guest details and a price breakdown, a booking history with references, tour enquiries, and client quotes generated with the agent\'s profit margin.',
        },
        {
          term: 'Scalable foundation',
          detail:
            'A modular single-page application over an API, built so new modules and integrations can be added without rebuilding the platform.',
        },
      ],
    },
    value: {
      heading: 'Business value',
      items: [
        {
          title: 'A dedicated digital platform',
          detail: 'Travel businesses get their own trade platform instead of relying on email, PDFs and spreadsheets.',
        },
        {
          title: 'Digitalized agent operations',
          detail: 'Search, booking requests and client quotes move from manual back-and-forth into one self-service workflow.',
        },
        {
          title: 'Reach and revenue opportunities',
          detail: 'Agencies can register, check rates and request bookings online at any hour, opening the door to more agent partnerships and bookings.',
        },
        {
          title: 'A foundation to grow on',
          detail: 'Structured rate data and an API-based architecture make it practical to extend the platform\'s digital capabilities over time.',
        },
      ],
    },
    testimonial: {
      quote:
        'We have successfully completed three projects with Lush Ware, and they have consistently delivered excellent results using the latest development technologies. What stands out most is their ability to truly understand our business requirements and translate them into tech solutions that are practical and easy to use immediately. They don\'t just build software; they solve business problems. Highly recommended.',
      author: 'Mr. Samir',
      company: 'Yomaldives',
    },
    strengths: [
      'Complex B2B software platforms',
      'Industry-specific pricing and contract logic',
      'Role-based business access',
      'Travel business digitalization',
      'Scalable business applications',
    ],
    technologies: {
      names: ['React', 'React Router', 'Material UI', 'Axios', 'Vite', 'REST API'],
      note: 'Front-end stack as deployed on the live platform.',
    },
    related: ['/solutions/travel-agency-software', '/custom-software-development', '/industries/tourism-hospitality', '/case-studies/meet-me-maldives'],
    cta: {
      heading: 'Planning a B2B platform for your business?',
      text: 'Agent portals, wholesale platforms and partner systems with real business logic behind them are what we build. Tell us how your business sells and we will show you how we would build it.',
    },
    inquiry: { topic: 'B2B travel platform', industry: 'Travel & Tourism' },
  },
] as const satisfies readonly CaseStudy[]

export type CaseStudySlug = (typeof CASE_STUDIES)[number]['slug']

export const caseStudyPath = (slug: CaseStudySlug) => `/case-studies/${slug}` as const

export const getCaseStudy = (slug: CaseStudySlug): CaseStudy => CASE_STUDIES.find((c) => c.slug === slug)!

/** Case study page path for a /work project, if it has one. */
export const caseStudyPathForWork = (workId: string) => {
  const cs = CASE_STUDIES.find((c) => c.workId === workId)
  return cs && caseStudyPath(cs.slug)
}
