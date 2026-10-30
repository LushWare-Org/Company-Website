import type { PageOutline } from './types'

// Tour operators, DMCs, travel agencies and hotels in Europe, Asia Pacific, the GCC and South Asia.

export const tourismOutline: PageOutline = {
  path: '/industries/tourism-hospitality',
  market: 'tourism',
  product: 'tourism and hospitality software',
  whoFor:
    'Built for tour operators, DMCs, travel agencies and hotels in Europe, Asia Pacific, the GCC, Sri Lanka and India.',
  problems: {
    heading: 'What travel and hospitality teams tell us',
    intro: 'Reservations managers, DMC owners and hotel GMs describe the same pressure points, season after season.',
    items: [
      { quote: 'Every quote is rebuilt by hand.', detail: 'Rates are copied from supplier contracts into Word documents, so replies take hours and errors slip in.' },
      { quote: 'Inquiries get lost between WhatsApp and email.', detail: 'Guests and agents message on every channel, and nobody owns the follow-up.' },
      { quote: 'We overbook in peak season and sit empty in low season.', detail: 'Pricing and allotments are set by gut feel instead of demand per source market.' },
      { quote: 'Agents want net rates and instant vouchers.', detail: 'B2B partners expect a portal; you are still emailing PDFs.' },
      { quote: 'Transfers and excursions are on a whiteboard.', detail: 'Boats, vehicles and guides are scheduled by phone, and changes do not reach the driver.' },
      { quote: 'GDPR and card rules worry us.', detail: 'Guest data and payments are handled in spreadsheets and inboxes that would not survive a compliance check.' },
    ],
  },
  features: {
    heading: 'Features, in travel trade language',
    intro: 'Named the way reservations, operations and revenue teams already talk.',
    items: [
      { term: 'Automatic quotations', feature: 'Quotes built from your contracted rates with markups, taxes and currency applied, sent as branded PDF or web itineraries.' },
      { term: 'Itinerary builder', feature: 'Day-by-day trips combining hotels, transfers, excursions and flights, editable until confirmation.' },
      { term: 'Allotments & contracts', feature: 'Supplier contracts, allotments, release periods and stop-sales tracked per property and season.' },
      { term: 'B2B agent portal', feature: 'Partners search availability, see net rates, book and download vouchers, with commission rules and credit limits.' },
      { term: 'Transfers & excursions', feature: 'Vehicle, boat and guide scheduling with manifests sent to drivers and captains on mobile.' },
      { term: 'Travel CRM', feature: 'Every guest and agent conversation, booking and payment in one timeline, with follow-ups and repeat-trip campaigns.' },
      { term: 'Demand forecasting & pricing', feature: 'AI forecasts by source market and season, with rate recommendations for peak and shoulder periods.' },
      { term: 'Guest messaging', feature: 'Confirmations and updates over WhatsApp, LINE, KakaoTalk, WeChat and email in the guest\'s language.' },
    ],
  },
  proof: {
    kind: 'caseStudy',
    heading: 'Travel platforms we have built',
    intro:
      'We have delivered booking systems, B2B portals and agency management platforms for travel businesses in the Maldives and beyond. These are live today.',
    projects: ['crownvoyages', 'yomaldives', 'dreamspeed'],
  },
  guide: {
    heading: 'Choosing tourism and hospitality software',
    intro:
      'Tourism software ranges from simple booking engines to full operating systems for tour operators, DMCs and hotel groups. The right choice depends on how you sell (direct, through agents, through OTAs), what you operate (rooms, transfers, excursions, packages) and which markets your guests come from. This guide covers what we recommend travel businesses in Europe, Asia Pacific, the Gulf and South Asia look for.',
    sections: [
      {
        heading: 'Start from your quote-to-booking flow',
        paragraphs: [
          'For most tour operators and DMCs, the biggest daily cost is quoting. Every inquiry means pulling rates from supplier contracts, applying seasonal supplements, markups and currency, then building an itinerary document. If a team answers dozens of inquiries a day, automating that step changes the business.',
          'Look for a system that stores your contracts, allotments and supplements in a structured way, so quotes are generated in minutes and stay consistent across the team. The same data should flow into the booking, vouchers and supplier confirmations without retyping.',
        ],
      },
      {
        heading: 'Serve agents and partners, not just guests',
        paragraphs: [
          'Much of the travel trade in Sri Lanka, India and the Gulf runs through B2B agents. A partner portal that shows net rates, live availability and instant vouchers — with commission rules and credit limits per agent — turns those partners into a scalable sales channel instead of an email inbox.',
          'If you also sell direct, the same inventory should power your website booking engine and your OTA connections to Booking.com, Expedia and Agoda, so availability never drifts between channels.',
        ],
      },
      {
        heading: 'Get operations off the whiteboard',
        paragraphs: [
          'Transfers, speedboats, seaplanes, excursions and guides are where guest experience is won or lost. Operations software should schedule vehicles and crews against confirmed bookings, send manifests to drivers and captains on mobile, and push changes instantly when a flight is delayed.',
          'For hotels and resorts, the same principle applies to housekeeping, maintenance and guest requests: one system that every department sees.',
        ],
      },
      {
        heading: 'Respect the rules of every source market',
        paragraphs: [
          'Guests from the EU bring GDPR obligations for consent, retention and access to their data, and card payments need Strong Customer Authentication under PSD2. EU tour operators also have package travel information duties. Guests from China, Japan, Korea or India expect their own payment methods and messaging apps — WeChat Pay and Alipay, LINE and KakaoTalk, UPI.',
          'Check that the system handles multiple languages and currencies with live exchange rates, and that guest data can be hosted where your compliance requires.',
        ],
      },
      {
        heading: 'Use demand data to price the season',
        paragraphs: [
          'Seasonality drives everything in tourism. AI demand forecasting by source market, combined with your booking pace and historical occupancy, helps set rates and allotments before peak season instead of reacting to it. Even simple pace reports — bookings on the books versus the same date last year — are a big step up from gut feel.',
        ],
      },
    ],
  },
  related: [
    '/solutions/travel-agency-software',
    '/solutions/websites',
    '/solutions/ai-agents',
    '/solutions/mobile-apps',
  ],
  faq: [
    {
      question: 'What are LushWare\'s Tourism & Hospitality Solutions?',
      answer:
        'A combination of ready-to-deploy platforms (booking, hotel management, property management and travel CRM) and an intelligence layer that predicts demand, optimizes resources, improves revenue, simulates scenarios and automates operational decisions.',
    },
    {
      question: 'Which markets do you build tourism software for?',
      answer:
        'We build for tour operators, DMCs, travel agencies and hotels in the European Union, Asia Pacific, the Middle East (GCC) and South Asia (Sri Lanka and India), with multi-language guest communications, multi-currency pricing and meetings in your local time zone.',
    },
    {
      question: 'Can it handle GDPR and payment rules for European guests?',
      answer:
        'Yes. Guest data handling follows GDPR consent and retention rules, and payment flows support Strong Customer Authentication (PSD2), SEPA and major cards.',
    },
    {
      question: 'Can guests book and message us in their own language and apps?',
      answer:
        'Yes. Itineraries and guest communications can run in English, German, French, Japanese, Korean and Chinese, with messaging over WhatsApp, LINE, KakaoTalk or WeChat and payments by WeChat Pay or Alipay.',
    },
    {
      question: 'How can these solutions improve our hospitality operations?',
      answer:
        'They automate repetitive tasks, centralize guest and booking data, forecast demand, optimize inventory, staff and transport, and provide real-time reporting, so your team can focus on delivering exceptional guest experiences.',
    },
    {
      question: 'Can AI predict demand and recommend pricing?',
      answer:
        'Yes. We build occupancy, booking and cancellation forecasts, revenue forecasts and pricing recommendations from your own booking and market data, so you can act before demand shifts.',
    },
    {
      question: 'What is a resort or hotel digital twin?',
      answer:
        'A computational model of your operation that lets you test scenarios first, such as a 20% occupancy increase, an extra speedboat, a shifted restaurant peak, or the staffing needed at peak periods.',
    },
    {
      question: 'Are these solutions suitable for all sizes of travel businesses?',
      answer:
        'Yes. They are scalable and can be customized for solo travel consultants, small agencies, tour operators, resorts, and enterprise hospitality groups.',
    },
    {
      question: 'Can these solutions integrate with existing travel industry tools?',
      answer:
        'Yes. We integrate with GDS systems, payment processors, email platforms, property and booking systems, and other third-party tools to create a unified ecosystem.',
    },
    {
      question: 'Is customer data secure?',
      answer:
        'Absolutely. We use industry-standard security measures including encryption, access controls, compliance with data protection regulations, and regular security audits to protect sensitive guest and business data.',
    },
  ],
  cta: {
    heading: 'Answer every inquiry faster this season',
    text: 'Show us how you quote and operate today and we will map it into one system for your reservations, partners and operations teams.',
  },
  inquiry: { topic: 'Tourism & Hospitality Software', industry: 'Tourism & Hospitality' },
}

export const travelAgencyOutline: PageOutline = {
  path: '/solutions/travel-agency-software',
  market: 'tourism',
  product: 'travel agency software',
  whoFor:
    'Built for travel agencies and tour operators in Europe, Asia Pacific, the GCC and South Asia, including Sri Lanka and India.',
  problems: {
    heading: 'What travel agents tell us',
    intro: 'Agency owners and reservations teams describe the same daily friction.',
    items: [
      { quote: 'Every quote is rebuilt by hand.', detail: 'Rates are copied from supplier sheets into documents, so replies take hours.' },
      { quote: 'Inquiries get lost between WhatsApp, email and phone.', detail: 'Nobody knows who replied, what was offered or when to follow up.' },
      { quote: 'I can\'t see bookings, payments and suppliers in one place.', detail: 'Reconciling deposits, balances and supplier payments takes days at month end.' },
      { quote: 'Allotments live in a spreadsheet.', detail: 'Release dates pass unnoticed and rooms are lost or overbooked.' },
      { quote: 'Markups and currency are calculated by hand.', detail: 'Margins differ between agents and mistakes reach the client.' },
      { quote: 'Clients book once and never hear from us again.', detail: 'There is no follow-up after the trip, so repeat business is left to chance.' },
    ],
  },
  features: {
    heading: 'Features, in agency language',
    intro: 'Named the way consultants and reservations teams already talk.',
    items: [
      { term: 'Auto quotations', feature: 'Quotes from contracted rates with markups, taxes and currency applied automatically.' },
      { term: 'Itinerary builder', feature: 'Branded day-by-day itineraries as PDF or web pages, updated until the trip is confirmed.' },
      { term: 'Booking file', feature: 'Every service, supplier confirmation, voucher and payment for a trip in one place.' },
      { term: 'Supplier contracts & allotments', feature: 'Contracts, allotments, release periods and stop-sales tracked by season.' },
      { term: 'B2B agent portal', feature: 'Sub-agents search, book and download vouchers at net rates, with commissions and credit limits.' },
      { term: 'Travel CRM', feature: 'Inquiry pipeline, follow-up reminders and post-trip campaigns for repeat bookings.' },
    ],
  },
  proof: {
    kind: 'caseStudy',
    heading: 'Agency platforms we have built',
    intro: 'Live systems we have delivered for travel agencies and B2B travel businesses.',
    projects: ['crownvoyages', 'islekey', 'yomaldives'],
  },
  guide: {
    heading: 'What to look for in travel agency software',
    intro:
      'Travel agency software manages the work behind every trip: inquiries, quotations, itineraries, bookings, supplier contracts, payments and client follow-up. A few capabilities make the biggest difference.',
    sections: [
      {
        heading: 'Quoting speed decides conversion',
        paragraphs: [
          'The agency that replies first with a clear, accurate quote usually wins the booking. Structured supplier rates and automatic markups turn a two-hour task into a few minutes, and every consultant quotes the same way.',
        ],
      },
      {
        heading: 'One booking file per trip',
        paragraphs: [
          'Every service, confirmation, voucher, deposit and balance for a trip should live in one file, visible to everyone who touches it. That is what makes month-end reconciliation and supplier payments manageable.',
        ],
      },
      {
        heading: 'Channels and compliance',
        paragraphs: [
          'Agencies selling to EU travellers need GDPR-ready data handling and package travel documents; agencies in South Asia and the Gulf often depend on B2B partners and WhatsApp. Make sure the system supports the channels, payment methods and rules of the markets you sell to.',
        ],
      },
    ],
  },
  related: [
    '/industries/tourism-hospitality',
    '/solutions/websites',
    '/solutions/ai-agents',
  ],
  faq: [
    {
      question: 'What is travel agency software?',
      answer:
        'Travel agency software manages the work behind every trip — inquiries, quotations, itineraries, bookings, supplier contracts, payments and client follow-up — in one system instead of spreadsheets and inboxes.',
    },
    {
      question: 'Can it generate quotations automatically?',
      answer:
        'Yes. Quotes are built from your contracted supplier rates with your markups, taxes and currency applied, and sent as branded PDF or web itineraries.',
    },
    {
      question: 'Does it support B2B agents and partners?',
      answer:
        'Yes. A B2B portal lets partner agents search availability, see net rates, book and download vouchers, with commission rules and credit limits per agent.',
    },
    {
      question: 'Which markets do you work with?',
      answer:
        'We build for travel agencies and tour operators in the European Union, Asia Pacific, the Middle East (GCC) and South Asia, including Sri Lanka and India, with multi-currency pricing and meetings in your time zone.',
    },
  ],
  cta: {
    heading: 'Quote in minutes, not hours',
    text: 'Send us a recent inquiry and your supplier rates, and we will show you the quote our system would generate.',
  },
  inquiry: { topic: 'Travel Agency Software', industry: 'Tourism & Hospitality' },
}
