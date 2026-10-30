// Single source for every page FAQ. The same list renders the visible FAQ
// (<FAQSection /> in each page) and the FAQPage JSON-LD (src/seo/routes.ts),
// so the two can't drift apart.

import { LOCAL } from './local'

export type Faq = { question: string; answer: string }

/** Questions every Maldivian buyer asks: price, setup time, data location, internet, hours. */
const buyerFaq = (product: string, sizedBy: string): Faq[] => [
  {
    question: `How much does ${product} cost?`,
    answer: `Pricing depends on the size of your operation — ${sizedBy} — and the modules you need. Request pricing and we send a written quote; the demo is free.`,
  },
  {
    question: 'How long does setup take?',
    answer:
      'We set up the system with your real data, import what you already have and train your staff. Most of the time goes into your data, so we agree a go-live date with you before we start.',
  },
  {
    question: 'Where is our data stored?',
    answer:
      'On secure cloud servers with encryption and automatic backups. The data belongs to your business, and you can ask us for a full export at any time.',
  },
  {
    question: 'Does it work with slow island internet?',
    answer:
      'Yes. It is a lightweight web app that runs in any phone, tablet or laptop browser over normal mobile data. It needs a connection to sync, so bookings made on the island appear in Malé straight away.',
  },
  {
    question: 'Do you support us in Maldives hours?',
    answer: `Yes. ${LOCAL.hoursLine} Reach us on ${LOCAL.channels}.`,
  },
]

const ROUTE_FAQ: Record<string, Faq[]> = {
  '/': [
    {
      question: 'What software does LushWare make for Maldives businesses?',
      answer:
        'Lush Hotel Cloud for guest houses and small hotels, Viduvaru for speedboat and ferry ticketing, a Travel CRM for travel agencies and tour operators, and a Property Management System for agencies that manage many properties. We also build custom software, websites and mobile apps.',
    },
    {
      question: 'Which businesses do you work with?',
      answer:
        'Guest houses on local islands, small hotels, speedboat and transfer operators, travel agencies, tour operators and DMCs across the Maldives.',
    },
    {
      question: 'Do the systems work together?',
      answer:
        'Yes. For example, guest houses using Hotel Cloud can book speedboat transfers for their guests through the Viduvaru partner portal.',
    },
    {
      question: 'Can you build something custom for our business?',
      answer:
        'Yes. If none of our products fit, we build custom software, websites, booking systems and AI chatbots for island businesses.',
    },
    {
      question: 'Do you support us in Maldives hours?',
      answer: `Yes. ${LOCAL.hoursLine} Reach us on ${LOCAL.channels}.`,
    },
  ],
  '/hotelcloud': [
    {
      question: "Can I manage multiple guest houses?",
      answer:
        "Yes. The platform supports managing multiple properties from a single account, so you can oversee each one without juggling separate systems.",
    },
    {
      question: "Can guests make reservations online?",
      answer:
        "Yes. Guests can book directly online, and your availability updates instantly so every channel stays accurate.",
    },
    {
      question: "Does the system prevent double bookings?",
      answer:
        "Yes. Room availability updates in real time across every booking source, which is what keeps double bookings from happening in the first place.",
    },
    {
      question: "Can I track my business finances?",
      answer:
        "Yes. Income and expense tracking, invoicing, payment management and financial reporting are all built into the platform.",
    },
    {
      question: "Does it include maintenance management?",
      answer:
        "Yes. You can log maintenance requests, assign them to staff and monitor progress until they're resolved.",
    },
    {
      question: "Can I manage kitchen operations?",
      answer:
        "Yes. Restaurant order management, menu management and kitchen order processing are included for properties running food and beverage service.",
    },
    {
      question: "Is the system cloud-based?",
      answer:
        "Yes. You can securely access your guest house from any device with an internet connection, wherever you are.",
    },
  ],
  '/viduvaru': [
    {
      question: "Can I manage multiple boats and routes?",
      answer:
        "Yes. Register every boat in your fleet, assign it to routes, and manage schedules, destinations, and seat availability from a single dashboard.",
    },
    {
      question: "Can customers book tickets online?",
      answer:
        "Yes. Customers reserve seats online, pay securely, and get an instant booking confirmation — no back-and-forth over the phone.",
    },
    {
      question: "Can my staff still create bookings manually?",
      answer:
        "Yes. Staff can create, edit, and manage bookings directly in the dashboard for walk-ins or phone requests, with the same protection against double-booking.",
    },
    {
      question: "Can guest houses book transfers through the platform?",
      answer:
        "Yes. Guest houses get their own portal to book transfers for guests, schedule special transportation, and track their reservations directly.",
    },
    {
      question: "Can I monitor revenue and business performance?",
      answer:
        "Yes. The dashboard includes revenue tracking, daily income reports, and route performance so you always know how the business is doing.",
    },
    {
      question: "Is the platform cloud-based?",
      answer:
        "Yes. Everything runs securely in the cloud, so you and your team can manage the business from anywhere with an internet connection.",
    },
  ],
  '/travel-crm': [
    {
      question: "Can I manage all my customer enquiries in one place?",
      answer:
        "Yes. Every enquiry, conversation, and booking is logged against a single customer profile, so your whole team can see the full history without digging through old emails.",
    },
    {
      question: "Can the system generate travel itineraries automatically?",
      answer:
        "Yes. The AI itinerary generator drafts a complete multi-day plan from your package details and customer preferences, ready to fine-tune and export as a professional document.",
    },
    {
      question: "Can I create quotations and invoices from the same platform?",
      answer:
        "Yes. Quotations, invoices, and receipts are generated from the same booking data, so pricing stays consistent from the first proposal to the final receipt — no re-typing figures.",
    },
    {
      question: "Can I manage more than one tour package at a time?",
      answer:
        "Yes. Create, categorize, and update as many packages as you run, set pricing and availability per package, and promote your top sellers as featured listings.",
    },
    {
      question: "Does the platform include financial reporting?",
      answer:
        "Yes. Income, expenses, and payments are tracked automatically, and the dashboard rolls them up into revenue summaries and profit reports whenever you need them.",
    },
    {
      question: "Is the platform cloud-based?",
      answer:
        "Yes. It runs securely in the cloud, so you and your team can access customer records, packages, and finances from any device with an internet connection.",
    },
  ],
  '/real-estate-control': [
    {
      question: "Can I manage multiple properties?",
      answer:
        "Yes. Add as many resorts, hotels, guest houses, restaurants or rental units as you operate, and manage every one of them from a single dashboard — no separate logins or spreadsheets per property.",
    },
    {
      question: "Can multiple staff members access the system?",
      answer:
        "Yes. Invite your reservations, finance and operations teams with their own logins and permission levels, so everyone works from the same up-to-date information without stepping on each other's bookings.",
    },
    {
      question: "Can I access the system from my phone?",
      answer:
        "Yes. The platform is fully cloud-based and works on any device with a browser, so you can check availability, confirm a booking or review revenue from your phone, tablet or laptop, anywhere.",
    },
    {
      question: "Is training provided?",
      answer:
        "Yes. Every account comes with guided onboarding and hands-on training for your team, plus ongoing support so new staff can get up to speed quickly as your business grows.",
    },
  ],
  '/services': [
    {
      question: "What types of services does LushWare offer?",
      answer:
        "We specialize in digital transformation services tailored for Maldivian hospitality and enterprise businesses. Our offerings include CRM software, AI agents & chatbots, BPM automation, custom websites, and native mobile app development for iOS and Android.",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary based on scope and complexity. A custom website typically takes 6-12 weeks, mobile apps 4-6 months, and enterprise CRM systems 8-16 weeks. We provide detailed timelines and milestone schedules during the initial consultation phase.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Absolutely! We offer comprehensive post-launch support including regular updates, security patches, feature enhancements, and 24/7 technical assistance. Our support packages are customized to your needs and can be scaled as your business grows.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes, integration is one of our core strengths. We connect new solutions with your existing systems, databases, and third-party tools seamlessly. Our APIs and custom integration work ensure smooth data flow across your entire technology stack.",
    },
    {
      question: "What happens if we need to scale our application?",
      answer:
        "Our solutions are built with scalability in mind from day one. Whether you need to handle more users, process more data, or expand to new features, our cloud-based architecture and modular design allow for seamless scaling without performance degradation.",
    },
  ],
}

const BUYER_FAQ: Record<string, Faq[]> = {
  '/hotelcloud': buyerFaq('Lush Hotel Cloud', 'the number of properties and rooms'),
  '/viduvaru': buyerFaq('Viduvaru', 'the number of boats and routes'),
  '/travel-crm': buyerFaq('the Travel CRM', 'the number of users and the modules you use'),
  '/real-estate-control': buyerFaq('the Property Management System', 'the number of properties and users'),
}

export const getRouteFaq = (path: string): Faq[] => [...(ROUTE_FAQ[path] ?? []), ...(BUYER_FAQ[path] ?? [])]

/** schema.org FAQPage for a list of questions. */
export const faqPageJsonLd = (faq: Faq[]) => ({
  '@type': 'FAQPage',
  mainEntity: faq.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer },
  })),
})
