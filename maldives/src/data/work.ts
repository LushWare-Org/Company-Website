// Delivered client projects. Shown on /our-work and cited as proof by the page
// outlines (src/data/outlines.ts) — only real, live projects belong here.

export type WorkProject = {
  id: string
  name: string
  client: string
  summary: string
  description: string
  image: string
  link: string
  /** Product page this project is the closest proof for. */
  relatedPath?: string
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'dreamspeed',
    name: 'Speedboat Ticket Booking System',
    client: 'Dream Speed',
    summary:
      'The Dream Speed speedboat booking system lets travellers search routes, check availability and book their island journeys in the Maldives online.',
    description:
      'We built the route search, seat availability and online booking flow, so tickets are sold directly instead of over the phone.',
    image: '/work/dreamspeed.webp',
    link: 'https://www.dreamspeedmaldives.com/',
    relatedPath: '/viduvaru',
  },
  {
    id: 'yomaldives',
    name: 'B2B Portal for Travel Agents',
    client: 'Yomaldives',
    summary: 'Yomaldives is a B2B portal designed to help travel agents boost their revenue.',
    description:
      'We delivered a tailored B2B platform that helps travel agents streamline operations, increase revenue and manage bookings day to day.',
    image: '/work/yomaldives.webp',
    link: 'https://yomaldives.live/',
    relatedPath: '/real-estate-control',
  },
  {
    id: 'crownvoyages',
    name: 'Travel Agency Management System',
    client: 'Crown Voyages',
    summary:
      'Crown Voyages is a travel agency management system with automatic quotation generation, designed to streamline operations.',
    description:
      'We built a central platform where the agency handles bookings, generates quotations automatically and manages clients and daily operations.',
    image: '/work/CrownVoyages.jpg',
    link: 'https://portal.crownvoyages.com/',
    relatedPath: '/travel-crm',
  },
  {
    id: 'islekey',
    name: 'All-in-one Travel Agency Web Application',
    client: 'Islekey Holidays',
    summary: 'IsleKey Holidays runs on an all-in-one web application we built for their travel agency.',
    description:
      'The platform streamlines bookings, improves the customer experience and gives the agency one place to manage its operations as it grows.',
    image: '/work/islekeyholidays.webp',
    link: 'https://islekeyholidays.com/',
    relatedPath: '/travel-crm',
  },
  {
    id: 'holidayvibes',
    name: 'Tour & Travel Website',
    client: 'Holiday Vibes Tour',
    summary: 'Holiday Vibes Tour is a travel website built to promote curated tours and immersive travel experiences.',
    description:
      'We created a platform where visitors explore curated tour packages and detailed itineraries and contact the travel team directly.',
    image: '/work/HolidayVibesTour.webp',
    link: 'https://holidayvibestour.com/',
    relatedPath: '/services',
  },
  {
    id: 'holidaylife',
    name: 'Travel Agency Web Application',
    client: 'Holiday Life',
    summary: 'Holiday Life is a custom web application we developed for a travel agency.',
    description:
      'The platform helps travellers discover holidays and gives the agency the tools to deliver its services and manage operations every day.',
    image: '/work/holidaylife.jpg',
    link: 'https://holidaylife.travel/',
    relatedPath: '/services',
  },
  {
    id: 'tripskyway',
    name: 'Travel Booking Website',
    client: 'Trip Sky Way',
    summary: 'Trip Sky Way is a travel booking platform that helps travellers discover destinations and plan their journeys.',
    description:
      'We built a responsive travel platform with intuitive navigation, fast performance and a simple booking experience.',
    image: '/work/TripSkyWay.webp',
    link: 'https://tripskyway.com/',
    relatedPath: '/services',
  },
  {
    id: 'traveliccted',
    name: 'Travel Agency Website',
    client: 'Traveliccted',
    summary: 'Traveliccted is a travel website built to showcase curated travel experiences and destination packages.',
    description:
      'We designed a site with strong visual storytelling, simple navigation and conversion-focused package pages.',
    image: '/work/Traveliccted.webp',
    link: 'https://traveliccted.com/',
    relatedPath: '/services',
  },
]

export const getWork = (ids: string[]) =>
  ids.map((id) => WORK_PROJECTS.find((p) => p.id === id)).filter((p): p is WorkProject => Boolean(p))
