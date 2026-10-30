// SEO outline copy per page, rendered by <PageOutline /> above each page FAQ:
// Maldives fit → proof (real projects only, see work.ts) → buyer guide → time-zone CTA.

import { LOCAL, LOCAL_FIT } from './local'

export type Outline = {
  product: string
  fit?: { heading: string; intro: string; items: { title: string; desc: string }[] }
  proof: { heading: string; intro: string; workIds: string[] }
  guide: { heading: string; paragraphs: string[] }
  cta: { heading: string; text: string }
}

const cta = (product: string) =>
  `See ${product} with your own rooms, routes or packages in a free demo. ${LOCAL.hoursLine} Reach us on ${LOCAL.channels}.`

export const OUTLINES: Record<string, Outline> = {
  '/': {
    product: 'LushWare Maldives',
    proof: {
      heading: 'Built for Maldivian travel businesses',
      intro:
        'These systems are live today for speedboat operators and travel agencies in the Maldives — the same team builds and supports every LushWare Maldives product.',
      workIds: ['dreamspeed', 'yomaldives', 'crownvoyages', 'islekey'],
    },
    guide: {
      heading: 'Which LushWare system fits your business?',
      paragraphs: [
        'Running a guest house or small hotel on a local island? Lush Hotel Cloud handles reservations, rooms, housekeeping, maintenance, kitchen orders and finances in one place, and keeps online bookings in sync so you stop double-booking rooms.',
        'Operating speedboats, ferries or water taxis? Viduvaru sells seats online, gives guest houses their own transfer portal and shows revenue per route, so your team spends less time on the phone and more time on the water.',
        'Selling holidays as a travel agency, tour operator or DMC? The Travel CRM keeps every enquiry, package, quotation and invoice together and drafts itineraries with AI. Agencies that manage many properties use the Property Management System to run villas, guest houses and allocations from one dashboard.',
        'Need something none of these cover? We also build custom software, websites, mobile apps and AI chatbots for island businesses — see our services.',
      ],
    },
    cta: {
      heading: 'Talk to us in Maldives hours',
      text: `Tell us how your business runs today and we will show you the system that fits. ${LOCAL.hoursLine}`,
    },
  },
  '/hotelcloud': {
    product: 'Lush Hotel Cloud',
    fit: {
      heading: 'Built for guest houses in the Maldives',
      intro:
        'Guest houses on local islands work differently from resorts: small teams, mixed currencies, transfers to arrange and an owner who is often in Malé. Hotel Cloud is set up for that.',
      items: LOCAL_FIT['/hotelcloud'],
    },
    proof: {
      heading: 'Try it before you decide',
      intro:
        'We set up a free demo with your own rooms and rates, so you can see your guest house running in Hotel Cloud before you commit. Our transfer and agency systems are already live with Maldivian businesses:',
      workIds: ['dreamspeed', 'yomaldives'],
    },
    guide: {
      heading: 'How to choose guest house software in the Maldives',
      paragraphs: [
        'Start with double bookings. If you sell rooms on Booking.com, Airbnb, Expedia and by WhatsApp, the system must update availability everywhere the moment a room is booked. That alone pays for most guest house software.',
        'Next, check the money side. Maldivian guest houses invoice in US dollars and rufiyaa and must show taxes such as T-GST and Green Tax correctly. Software that only prints a booking total leaves your accountant to rebuild every invoice.',
        'Then look at day-to-day operations: housekeeping status, maintenance requests, restaurant orders and staff permissions. A small team on a local island needs these in one place, on a phone, not in five spreadsheets.',
        'Finally, ask who supports you. Choose a provider who works in your time zone, sets the system up with your real rooms and rates, and trains your staff — not a foreign product with an email-only help desk.',
      ],
    },
    cta: {
      heading: 'Get a demo with your own rooms',
      text: cta('Lush Hotel Cloud'),
    },
  },
  '/viduvaru': {
    product: 'Viduvaru',
    fit: {
      heading: 'Built for Maldivian speedboat operators',
      intro:
        'Transfer businesses in the Maldives sell seats to tourists, locals, guest houses and travel agents at the same time. Viduvaru keeps every one of those bookings on the same trip.',
      items: LOCAL_FIT['/viduvaru'],
    },
    proof: {
      heading: 'Live with a Maldivian speedboat operator',
      intro:
        'We built the online speedboat booking system for Dream Speed, where travellers search routes, check seat availability and book their island transfers online.',
      workIds: ['dreamspeed'],
    },
    guide: {
      heading: 'What to look for in speedboat booking software',
      paragraphs: [
        'Seats, not just bookings. The system should know how many seats each boat has on each departure and stop selling when it is full — whether the booking comes from your website, a guest house or a staff member at the jetty.',
        'Partners need their own access. Guest houses and travel agents send a large share of transfer passengers. A partner portal where they book directly removes most of the phone calls and WhatsApp messages your team handles every day.',
        'Payments and reports must match the boat. Revenue per route, per boat and per day tells you which departures earn money and which run half empty.',
        'Finally, make sure the provider can adapt the system to your routes and pricing, and supports you in Maldives hours.',
      ],
    },
    cta: {
      heading: 'See Viduvaru with your own routes',
      text: cta('Viduvaru'),
    },
  },
  '/travel-crm': {
    product: 'the LushWare Travel CRM',
    fit: {
      heading: 'Built for Maldivian travel agencies and DMCs',
      intro:
        'Selling the Maldives means pricing resorts, guest houses and transfers together for guests around the world. The Travel CRM keeps each of those pieces in the quote.',
      items: LOCAL_FIT['/travel-crm'],
    },
    proof: {
      heading: 'Live with Maldivian travel agencies',
      intro:
        'Our agency platforms are used every day for quotations, bookings and client management, including automatic quotation generation at Crown Voyages and an all-in-one agency system at IsleKey Holidays.',
      workIds: ['crownvoyages', 'islekey'],
    },
    guide: {
      heading: 'How to choose a CRM for a Maldives travel agency',
      paragraphs: [
        'A general sales CRM tracks leads; a travel CRM must also build the trip. Look for packages, itineraries and quotations generated from the same data, so prices never drift between the first proposal and the final invoice.',
        'Speed of reply wins bookings. Enquiries arrive by WhatsApp, email and website forms at all hours. The CRM should log each one against a client profile and remind your team to follow up.',
        'Check the finance side: invoices, receipts, payments received and profit per booking. Without it you still need a separate spreadsheet at month end.',
        'Finally, choose a team that can adapt the CRM to how your agency sells — B2C, B2B agents or both — and that supports you in your own time zone.',
      ],
    },
    cta: {
      heading: 'See the Travel CRM with your own packages',
      text: cta('the Travel CRM'),
    },
  },
  '/real-estate-control': {
    product: 'the LushWare Property Management System',
    fit: {
      heading: 'Built for agencies managing Maldives properties',
      intro:
        'Travel agencies in the Maldives often sell and manage rooms across many islands. The Property Management System puts every property, booking and payment in one place.',
      items: LOCAL_FIT['/real-estate-control'],
    },
    proof: {
      heading: 'Built by the team behind Maldivian agency platforms',
      intro:
        'We built the Yomaldives B2B portal for travel agents and the Crown Voyages agency management system. The Property Management System comes from the same work with Maldivian agencies.',
      workIds: ['yomaldives', 'crownvoyages'],
    },
    guide: {
      heading: 'When an agency needs a property management system',
      paragraphs: [
        'Once you sell or manage more than a handful of properties, spreadsheets stop showing the truth: who is staying where, which rooms are free and what has been paid.',
        'A property management system gives each property its own availability, bookings and revenue, while letting you see the whole portfolio at once.',
        'Look for multi-user access with permissions, so reservations, finance and operations staff work from the same data without overwriting each other.',
        'And make sure setup and training are included, so the system is used from day one rather than abandoned after a month.',
      ],
    },
    cta: {
      heading: 'See your properties in one dashboard',
      text: cta('the Property Management System'),
    },
  },
  '/services': {
    product: 'LushWare',
    proof: {
      heading: 'Websites and platforms we have delivered',
      intro: 'A selection of travel websites and booking platforms we have designed and built.',
      workIds: ['islekey', 'holidayvibes', 'holidaylife', 'traveliccted'],
    },
    guide: {
      heading: 'Working with a software company in the Maldives',
      paragraphs: [
        'Most island businesses do not need a large IT team — they need one partner who can build the website, connect bookings and payments, and keep everything running.',
        'We start with a short call about how your business works today, agree what to build first, and deliver it in small steps you can see and test.',
        'After launch we host, update and support what we built, in Maldives hours.',
      ],
    },
    cta: {
      heading: 'Tell us what you need built',
      text: `Websites, booking systems, CRMs, mobile apps and AI chatbots for island businesses. ${LOCAL.hoursLine}`,
    },
  },
}

export const getOutline = (path: string) => OUTLINES[path]
