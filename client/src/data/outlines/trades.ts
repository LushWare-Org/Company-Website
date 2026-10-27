import type { PageOutline } from './types'

// Trades: residential & light-commercial contractors in the US, Canada, Australia and New Zealand.

const tradesDemo = (trade: string, steps: string[]): PageOutline['proof'] => ({
  kind: 'demo',
  heading: `See a ${trade} job run end to end`,
  intro:
    'A 30-minute screen-share on a sample business set up for your country: real dispatch board, real technician app, real invoice. Bring your toughest scheduling day and we will walk it through.',
  steps,
})

export const fieldServiceOutline: PageOutline = {
  path: '/industries/field-service',
  market: 'trades',
  product: 'field service software',
  whoFor:
    'Built for residential and light-commercial HVAC, plumbing and electrical companies in the United States, Canada, Australia and New Zealand.',
  problems: {
    heading: 'What contractors tell us before they switch',
    intro:
      'Owners and office managers describe the same problems whether they run three vans in Ohio or thirty in Brisbane. These are their words, not ours.',
    items: [
      {
        quote: 'Dispatch is chaos by 10am.',
        detail: 'One emergency call and the whiteboard falls apart: techs crossing town, customers chasing ETAs, and nobody sure who is where.',
      },
      {
        quote: 'We miss calls when everyone is on a job.',
        detail: 'Every unanswered call after hours or during lunch is a booking that went to the competitor who picked up.',
      },
      {
        quote: 'Invoices go out days after the work is done.',
        detail: 'Paper job sheets come back at the end of the week, so cash flow waits on whoever does the paperwork.',
      },
      {
        quote: 'Maintenance agreements just lapse.',
        detail: 'Nobody reminds the customer, nobody books the tune-up, and the most profitable recurring revenue quietly disappears.',
      },
      {
        quote: 'The tech gets there without the part.',
        detail: 'Without van stock levels, second visits for a missing part eat the margin on the job.',
      },
      {
        quote: 'Our software charges per tech and keeps going up.',
        detail: 'Per-user pricing punishes growth, and the features you need are always one tier higher.',
      },
    ],
  },
  features: {
    heading: 'Features, in your words',
    intro: 'We name things the way your office and your techs already do. Here is what each part of the system handles.',
    items: [
      { term: 'Dispatch board', feature: 'Drag-and-drop schedule by technician, skill and zone, with drive-time estimates and emergency call-outs pushed to the top.' },
      { term: '"On my way" texts', feature: 'Automatic SMS with the tech\'s name, photo and live ETA, so customers stop calling the office to ask.' },
      { term: 'Tech app', feature: 'Job details, service history, checklists, photos and signatures on iOS or Android — works without signal and syncs later.' },
      { term: 'Good-better-best quotes', feature: 'Tiered options built on site from your price book, approved and signed on the tablet, with deposits taken by card.' },
      { term: 'Flat-rate price book', feature: 'Your own task-based pricing, labour and parts bundles, updated once and used by every tech.' },
      { term: 'Maintenance agreements', feature: 'Membership plans that schedule their own visits, send renewal reminders and bill automatically.' },
      { term: 'Van stock', feature: 'Stock per vehicle and warehouse, low-stock alerts and supplier purchase orders raised from the job.' },
      { term: 'Licences & certificates', feature: 'Technician licence expiry, compliance certificates and inspection photos stored against every job.' },
    ],
  },
  proof: tradesDemo('trade', [
    'A customer books online or by phone; the job lands on the dispatch board with the right skills and zone.',
    'An emergency call comes in; the board suggests the nearest qualified tech and re-sequences the day.',
    'The tech arrives, sees the equipment history, builds a good-better-best quote and gets it signed.',
    'The job closes on the tablet; the invoice, payment and accounting entry are done before the van leaves.',
    'The customer is offered a maintenance agreement, and the next visit is scheduled automatically.',
  ]),
  guide: {
    heading: 'How to choose field service software for a trade business',
    intro:
      'Field service management (FSM) software is the system a trade contractor runs on: it takes the booking, schedules and dispatches the technician, puts job details in their hands, and turns finished work into an invoice and a payment. Choosing the right one matters more than most software decisions, because your office, your techs and your customers all use it every day. Here is how we suggest HVAC, plumbing and electrical owners in the US, Canada, Australia and New Zealand evaluate their options.',
    sections: [
      {
        heading: 'Start with your busiest day, not the feature list',
        paragraphs: [
          'Every FSM product lists scheduling, dispatch, quoting and invoicing. The difference shows up on a Monday in peak season, when two techs call in sick, a commercial customer has a no-cooling emergency and the phones do not stop. Write down what actually happens on that day: who answers the phone, how jobs get assigned, how techs find out about changes, and when the customer hears from you.',
          'Then ask any vendor, including us, to run that exact day in a demo. A system that fits your business will make the hard parts faster. One that does not will add clicks to a process that already works.',
        ],
      },
      {
        heading: 'Make sure it speaks your local rules',
        paragraphs: [
          'Trade software built for one country often fits the others poorly. US contractors need sales tax by jurisdiction and EPA 608 refrigerant records. Canadian businesses need GST/HST on quotes and invoices. In Australia and New Zealand, GST, ARCtick refrigerant handling and electrical compliance certificates matter, and many accounts run on Xero or MYOB rather than QuickBooks.',
          'Check that taxes, units, currency, licence tracking and compliance documents work the way your state, province or region requires before you look at anything else.',
        ],
      },
      {
        heading: 'Look hard at the technician app',
        paragraphs: [
          'If techs will not use the app, the rest of the system is useless. The app should open the next job in one tap, show the equipment and service history at that address, work in basements and rural areas with no signal, and let the tech quote, take photos, collect a signature and take payment without calling the office.',
          'Ask for a trial with two or three of your senior techs. Their feedback after a week is worth more than any comparison table.',
        ],
      },
      {
        heading: 'Count the real cost of per-technician pricing',
        paragraphs: [
          'Most off-the-shelf FSM platforms charge per user per month, with key features such as maintenance agreements, price books or reporting locked to higher tiers. That is fine for a small team, but the bill grows every time you hire, and you still bend your process to the product.',
          'A custom-built system flips that model: it is built around your workflow, and with LushWare there is no upfront build fee — you adopt it on a managed monthly plan only once it fits. Compare total cost over three years, including add-ons, payment processing and the time your office spends on workarounds.',
        ],
      },
      {
        heading: 'Plan the switch before you sign',
        paragraphs: [
          'Moving to new field service software means importing customers, equipment, price books and open maintenance agreements, then training the office and the techs. A good rollout runs the new system alongside the old one for a short period, starts with the dispatch board and the technician app, and adds quoting, agreements and reporting once the basics are second nature.',
          'Ask who does the data migration, how long training takes and who you call when something breaks on a Saturday.',
        ],
      },
    ],
  },
  related: [
    '/solutions/hvac-mep-service-software',
    '/solutions/mobile-apps',
    '/industries/commercial-hvac-mep',
  ],
  faq: [
    {
      question: 'What is field service management software?',
      answer:
        'Field service management (FSM) software runs the operational side of a trade business: taking bookings, scheduling and dispatching technicians, giving them job details on a mobile app, and turning completed work into quotes, invoices and payments.',
    },
    {
      question: 'Do you work with contractors in the US, Canada, Australia and New Zealand?',
      answer:
        'Yes. We build for trade businesses in all four markets, with pricing, invoices and taxes in USD, CAD, AUD or NZD, and meetings scheduled in your local time zone.',
    },
    {
      question: 'How is this different from off-the-shelf field service apps?',
      answer:
        'Off-the-shelf apps make every business work the same way and usually charge per technician. We build around your workflow, your pricing and your reports, and you only adopt it once it fits.',
    },
    {
      question: 'Does the technician app work without mobile signal?',
      answer:
        'Yes. Technicians can view jobs, complete checklists, take photos and capture signatures offline; everything syncs once the device is back online.',
    },
  ],
  cta: {
    heading: 'Run your next busy Monday from one screen',
    text: 'Tell us how your office dispatches today and we will show you the same day running in software built for your trade and your country.',
  },
  inquiry: { topic: 'Field Service Software', industry: 'Trades / Field Service' },
}

export const hvacOutline: PageOutline = {
  path: '/solutions/hvac-mep-service-software',
  market: 'trades',
  product: 'HVAC service software',
  whoFor:
    'Built for residential and light-commercial HVAC companies in the United States, Canada, Australia and New Zealand.',
  problems: {
    heading: 'What HVAC owners tell us',
    intro: 'Heating and cooling businesses live and die by peak season. These are the problems they describe in the first call.',
    items: [
      { quote: 'The first heatwave breaks our schedule.', detail: 'No-cooling calls pile up, maintenance visits get bumped and techs drive past each other across town.' },
      { quote: 'Tune-up memberships renew by accident, if at all.', detail: 'Spring and fall maintenance depends on someone remembering to call every customer.' },
      { quote: 'Refrigerant logs are on paper in the truck.', detail: 'EPA 608 or ARCtick records are hard to find when an auditor or customer asks.' },
      { quote: 'Techs quote replacements from memory.', detail: 'Without equipment history and tiered options, high-value system replacements are left on the table.' },
      { quote: 'We don\'t know which units are under warranty.', detail: 'Model, serial and install dates live in old invoices, so warranty claims are missed.' },
      { quote: 'Invoices wait until Friday.', detail: 'Paper job sheets slow down billing and cash flow in the months that matter most.' },
    ],
  },
  features: {
    heading: 'HVAC features, in HVAC language',
    intro: 'Every feature is named the way your dispatchers and techs talk about the work.',
    items: [
      { term: 'No-heat / no-cool priority', feature: 'Emergency calls jump the queue and the board suggests the closest qualified tech.' },
      { term: 'Maintenance agreements', feature: 'Spring and fall tune-ups scheduled automatically from each membership, with renewal reminders and auto-billing.' },
      { term: 'Equipment history', feature: 'Model, serial, install date, warranty and every past visit stored per unit, per property.' },
      { term: 'Refrigerant tracking', feature: 'Refrigerant type, quantities added or recovered and technician certification logged per job (EPA 608, ARCtick).' },
      { term: 'Replacement quotes', feature: 'Good-better-best system options with photos, financing links and e-signature on site.' },
      { term: 'Flat-rate pricing', feature: 'Task-based price book for repairs and installs, used consistently by every tech.' },
      { term: 'Commissioning checklists', feature: 'Install and start-up checklists with readings and photos attached to the job record.' },
    ],
  },
  proof: tradesDemo('HVAC', [
    'A no-cooling call is booked and pushed to the top of the dispatch board.',
    'The nearest certified tech is assigned; the customer gets an "on my way" text.',
    'On site, the tech sees the unit\'s history and warranty, logs refrigerant and builds a replacement quote.',
    'The customer signs on the tablet and joins a maintenance agreement; tune-ups are scheduled for the year.',
    'The invoice syncs to QuickBooks, Xero or MYOB before the tech reaches the next job.',
  ]),
  related: [
    '/industries/field-service',
    '/solutions/predictive-maintenance',
    '/solutions/iot-product-development',
    '/industries/commercial-hvac-mep',
  ],
  faq: [
    {
      question: 'Can it keep refrigerant handling records?',
      answer:
        'Yes. Technicians log refrigerant type, quantities added or recovered and their certification against each job, so you have a clean record for EPA 608 (US) or ARCtick (Australia) requirements.',
    },
    {
      question: 'We run large commercial MEP projects — is this the right page?',
      answer:
        'This page is for residential and light-commercial service contractors in the US, Canada, Australia and New Zealand. For commercial HVAC & MEP projects, AMC contracts and PPM schedules in Europe, the Middle East or Asia, see our Commercial HVAC & MEP software page.',
    },
    {
      question: 'How can software help HVAC and MEP service businesses?',
      answer:
        'Custom software helps HVAC, electrical, and plumbing companies manage service requests, technician scheduling, maintenance contracts, compliance records, and customer relationships more efficiently while reducing manual work.',
    },
    {
      question: 'Do you work with HVAC businesses in the US, Canada, Australia and New Zealand?',
      answer:
        'Yes. We build for trade contractors in all four markets, with quotes, invoices and taxes in USD, CAD, AUD or NZD, and meetings scheduled in your local time zone.',
    },
    {
      question: 'Can one system cover HVAC, electrical, and plumbing work?',
      answer:
        'Yes. The platform is built around a shared core of jobs, customers, technicians, and billing, with trade-specific modules on top, so mixed MEP teams work from a single system instead of three separate tools.',
    },
    {
      question: 'Can the system handle job scheduling and dispatch?',
      answer:
        'Yes. Smart scheduling tools assign technicians, estimate job duration, and optimize routes for faster service delivery. Multi-crew dispatch and job-site assignment are supported for larger projects.',
    },
    {
      question: 'Can it manage emergency call-outs and urgent jobs?',
      answer:
        'Yes. Emergency jobs can be flagged as priority, instantly routed to the nearest available technician, and the customer is updated in real time.',
    },
    {
      question: 'Does it support recurring maintenance services?',
      answer:
        'Yes. Preventive maintenance contracts and recurring service schedules are managed, tracked, and reminded to customers automatically.',
    },
    {
      question: 'Can we manage compliance certificates and safety records?',
      answer:
        'Yes. The platform stores compliance certificates, safety inspection records, and permit tracking so your business stays audit-ready at all times.',
    },
    {
      question: 'Can we handle quoting, invoicing, parts, and supplier orders?',
      answer:
        'Yes. Technicians can create quotes on-site from mobile devices, convert approved quotes to jobs, and invoice on completion. Parts tracking, low-stock alerts, and supplier orders keep vans and sites stocked.',
    },
    {
      question: 'Can we track technicians in real time?',
      answer:
        'Yes. The platform includes technician tracking, job status updates, and mobile access for field teams so dispatchers always have full visibility.',
    },
  ],
  cta: {
    heading: 'Get ready for peak season now',
    text: 'Show us how you schedule tune-ups and emergency calls today, and we will map it into HVAC software built around your business.',
  },
  inquiry: { topic: 'HVAC / MEP Service Software', industry: 'HVAC / MEP' },
}

