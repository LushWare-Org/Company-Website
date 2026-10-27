// Target markets per segment. Single source for the on-page "market fit"
// sections (<MarketFitSection />) and the schema.org `areaServed` in
// src/seo/routes.ts — edit claims here, not in individual pages.

export type MarketId = 'trades' | 'commercialMep' | 'industrial' | 'tourism' | 'smb'

import type { Faq } from './faq'

/** EU member states (ISO 3166-1 alpha-2). */
const EU = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE']
/** Gulf Cooperation Council states. */
const GCC = ['AE', 'SA', 'QA', 'KW', 'OM', 'BH']

export type Market = {
  id: MarketId
  /** Market name for menus, footer columns and lead reports. */
  label: string
  /** Short badge, e.g. "US · Canada · Australia · New Zealand". */
  badge: string
  /** Compact region label for menus and footer columns, e.g. "US · CA · AU · NZ". */
  shortRegions: string
  heading: string
  intro: string
  regions: string[]
  /** schema.org areaServed: ISO 3166-1 alpha-2 codes, or ['Worldwide']. */
  areaServed: string[]
  integrations: string[]
  localPractice: string[]
  currencyAndHours: string[]
  /** Time zones named in calls to action ("we cover … hours"). */
  hours: string
  /** Buyer FAQ — price, setup time, data location, integrations — for a product name. */
  buyerFaq: (product: string) => Faq[]
}

export const MARKETS: Record<MarketId, Market> = {
  trades: {
    id: 'trades',
    label: 'Trades',
    badge: 'US · Canada · Australia · New Zealand',
    shortRegions: 'US · CA · AU · NZ',
    heading: 'Built for trade contractors in North America and Australasia',
    intro:
      'We build field service software for residential and light-commercial HVAC, plumbing and electrical businesses in the United States, Canada, Australia and New Zealand — set up around the way your market quotes, invoices, taxes and certifies work.',
    regions: ['United States', 'Canada', 'Australia', 'New Zealand'],
    areaServed: ['US', 'CA', 'AU', 'NZ'],
    integrations: [
      'QuickBooks Online, Xero and MYOB accounting sync',
      'Stripe and Square card payments, deposits and financing links',
      'Google Business Profile and Local Services Ads lead capture',
      'SMS and email booking confirmations, reminders and "on my way" alerts',
    ],
    localPractice: [
      'Sales tax, GST/HST (Canada) and GST (Australia and New Zealand) on quotes and invoices',
      'Technician licence and certificate expiry tracking',
      'Refrigerant handling records (EPA 608 in the US, ARCtick in Australia)',
      'Compliance certificates, inspection photos and sign-offs stored per job',
    ],
    currencyAndHours: [
      'USD, CAD, AUD and NZD pricing, quotes and invoices',
      'Imperial and metric units',
      'Meetings booked in your local time zone, with written progress updates every working day',
    ],
    hours: 'EST, CST, MST, PST, AEST and NZST',
    buyerFaq: (product) => [
      {
        question: `How much does ${product} cost?`,
        answer:
          'There is no upfront build fee and no per-technician licence. We build the first version around your workflow first; if it fits, you move to a managed monthly plan in USD, CAD, AUD or NZD, sized to your users and modules, that includes hosting, updates and support. You get a written quote after a free discovery call.',
      },
      {
        question: 'How long does setup take?',
        answer:
          'A focused first version typically takes a few weeks to a few months, depending on how many modules you need. We import your customers, equipment and price book, train your office team and technicians, and can run alongside your current system until you are ready to switch.',
      },
      {
        question: 'Where is our data stored?',
        answer:
          'In the cloud region you choose, such as the United States, Canada or Australia, or in your own cloud account. Your customer and job data stays yours, and you can export it at any time.',
      },
      {
        question: 'Which tools does it integrate with?',
        answer:
          'QuickBooks Online, Xero and MYOB for accounting; Stripe and Square for payments; Google Business Profile and Local Services Ads for leads; plus SMS and email. If another tool you rely on has an API, we can usually connect it too.',
      },
    ],
  },

  commercialMep: {
    id: 'commercialMep',
    label: 'Commercial MEP',
    badge: 'Europe · Middle East · East Asia · South Asia',
    shortRegions: 'EU · GCC · Asia',
    heading: 'Built for commercial HVAC & MEP contractors and FM providers',
    intro:
      'For HVAC, mechanical, electrical and plumbing contractors delivering commercial projects and maintenance contracts across Europe, the Gulf, East Asia and South Asia — where AMC renewals, PPM compliance and multi-site reporting decide your margins.',
    regions: ['European Union', 'UAE, Saudi Arabia and the GCC', 'Singapore, Japan, South Korea, China, Hong Kong and Taiwan', 'India, Sri Lanka and Bangladesh'],
    areaServed: [...EU, ...GCC, 'SG', 'JP', 'KR', 'CN', 'HK', 'TW', 'IN', 'LK', 'BD'],
    integrations: [
      'BIM model data from Revit, Navisworks and Autodesk Construction Cloud',
      'Building management systems over BACnet and Modbus',
      'ERP and finance: SAP, Oracle, Microsoft Dynamics 365 and Odoo',
      'Existing CAFM / CMMS platforms through APIs and data exports',
    ],
    localPractice: [
      'AMC (annual maintenance contract) tracking, renewals and SLA penalties',
      'PPM (planned preventive maintenance) schedules with evidence for audits',
      'Commissioning and inspection checklists referencing ASHRAE, CIBSE and EN standards',
      'Retention, variation and subcontractor payment tracking per project',
      'Green building documentation for LEED, BREEAM and Estidama submissions',
    ],
    currencyAndHours: [
      'Multi-currency: EUR, AED, SAR, QAR, JPY, KRW, CNY, INR and more',
      'English / Arabic bilingual reports and right-to-left interfaces on request',
      'Our Sri Lanka base (UTC+5:30) overlaps Gulf and South Asian working days, European afternoons and East Asian mornings',
    ],
    hours: 'GST (Gulf), CET, IST, SGT and JST',
    buyerFaq: (product) => [
      {
        question: `How much does ${product} cost?`,
        answer:
          'There is no upfront build fee. We build the first version around your contracts and projects; if it fits, you continue on a managed plan in your currency (EUR, AED, SAR, QAR, INR and others), sized to your sites, users and modules, covering hosting, updates and support. You get a written quote after a discovery session.',
      },
      {
        question: 'How long does setup take?',
        answer:
          'A focused first version typically takes a few weeks to a few months. We roll out by contract or site, importing asset registers, AMC contracts and PPM schedules from your spreadsheets or current CAFM so teams start with live data.',
      },
      {
        question: 'Where is our data stored?',
        answer:
          'In the cloud region you need for data residency, for example the UAE, Saudi Arabia, the EU or India, or in your own cloud tenancy. Access is role-based per client, site and subcontractor.',
      },
      {
        question: 'Which systems does it integrate with?',
        answer:
          'SAP, Oracle, Microsoft Dynamics 365 and Odoo for finance; Revit, Navisworks and Autodesk Construction Cloud for BIM data; BACnet and Modbus building management systems; and existing CAFM or CMMS platforms through APIs and data exports.',
      },
    ],
  },

  industrial: {
    id: 'industrial',
    label: 'Manufacturing & Supply Chain',
    badge: 'Global manufacturers & supply chain operators',
    shortRegions: 'Worldwide',
    heading: 'Built for global manufacturing and supply chain teams',
    intro:
      'We work with plants, warehouses and logistics operators across regions, connecting the machines, ERP and planning tools you already run instead of asking you to replace them.',
    regions: ['Europe', 'North America', 'Middle East', 'Asia-Pacific'],
    areaServed: ['Worldwide'],
    integrations: [
      'ERP: SAP S/4HANA, Microsoft Dynamics 365, Oracle NetSuite and Odoo',
      'PLC and SCADA data through OPC UA, Modbus and MQTT',
      'IoT sensors for vibration, temperature, power and flow',
      'Barcode, RFID and EDI (EDIFACT / ANSI X12) partner messaging',
    ],
    localPractice: [
      'Lot and serial traceability that supports ISO 9001 and IATF 16949 audits',
      'Asset maintenance records aligned with ISO 55000 practice',
      'GS1 barcode standards for labelling and shipping',
      'Multi-site, multi-plant dashboards with role-based access',
    ],
    currencyAndHours: [
      'Multi-currency, multi-language and multi-unit by design',
      'Phased delivery per site, so one plant proves value before rollout',
      'Remote-first delivery with on-site visits planned per phase',
    ],
    hours: 'CET, GST, IST, SGT and EST',
    buyerFaq: (product) => [
      {
        question: `How much does ${product} cost?`,
        answer:
          'We start with a scoped pilot on one line, site or warehouse, with no upfront build fee. Once it proves value, you continue on a managed plan in your currency, sized to your sites, assets and users, covering hosting, model upkeep and support. You get a written quote after a discovery session.',
      },
      {
        question: 'How long does setup take?',
        answer:
          'A focused pilot typically takes a few weeks to a few months: connecting machine and ERP data, configuring dashboards and proving results against real events. Further lines and sites then follow the same template.',
      },
      {
        question: 'Where is our data stored?',
        answer:
          'In the cloud region you choose (EU, North America, Middle East or Asia-Pacific) or in your own cloud tenancy. Machine data can be pre-processed on an edge gateway on site so only what is needed leaves the plant.',
      },
      {
        question: 'Which systems does it integrate with?',
        answer:
          'SAP S/4HANA, Microsoft Dynamics 365, Oracle NetSuite and Odoo; PLCs and SCADA over OPC UA, Modbus and MQTT; IoT sensors; and barcode, RFID and EDI (EDIFACT / ANSI X12) partner messaging.',
      },
    ],
  },

  tourism: {
    id: 'tourism',
    label: 'Tourism',
    badge: 'Europe · Asia Pacific · Middle East (GCC) · South Asia',
    shortRegions: 'EU · APAC · GCC · South Asia',
    heading: 'Built for travel businesses in Europe, Asia Pacific, the Gulf and South Asia',
    intro:
      'We build booking, CRM and operations software for tour operators, DMCs, travel agencies and hotels across the EU, Asia Pacific, the GCC, Sri Lanka, India and the Maldives — with the channels, payments, languages and data rules those markets expect.',
    regions: ['European Union', 'Asia Pacific', 'Middle East (GCC)', 'Sri Lanka', 'India', 'Maldives'],
    areaServed: [...EU, ...GCC, 'JP', 'KR', 'CN', 'TH', 'SG', 'MY', 'ID', 'VN', 'AU', 'LK', 'IN', 'MV'],
    integrations: [
      'Booking.com, Expedia and Agoda channel connections',
      'GDS connectivity through Amadeus and Sabre',
      'Card, SEPA, UPI, WeChat Pay, Alipay and regional payment gateways',
      'Guest messaging over WhatsApp, LINE, KakaoTalk and WeChat',
    ],
    localPractice: [
      'GDPR-ready guest data handling, consent and retention rules',
      'Strong Customer Authentication (PSD2) ready payment flows',
      'Package travel information and booking documents for EU tour operators',
      'Multi-language itineraries and guest communications, including English, German, French, Arabic, Hindi, Japanese and Chinese',
    ],
    currencyAndHours: [
      'EUR, GBP, USD, AED, SAR, INR, LKR, AUD, SGD, JPY and CNY pricing with live exchange rates',
      'Seasonal and peak-period demand forecasting per source market',
      'Meetings booked in your local time zone',
    ],
    hours: 'CET, GST, Maldives (MVT), IST, SGT and AEST',
    buyerFaq: (product) => [
      {
        question: `How much does ${product} cost?`,
        answer:
          'There is no upfront build fee. We build the first version around your products and booking flow; if it fits, you continue on a managed plan in EUR, USD, AED, INR, LKR or your own currency, sized to your users, properties and modules, covering hosting, updates and support.',
      },
      {
        question: 'How long does setup take?',
        answer:
          'A focused first version typically takes a few weeks to a few months. We import your contracts, rates, products and customers, and plan go-live and staff training around your season rather than in the middle of it.',
      },
      {
        question: 'Where is guest data stored?',
        answer:
          'In the cloud region you choose. For businesses selling to EU guests we can host in the EU with GDPR-ready consent, retention and access rules; you can also use your own cloud account.',
      },
      {
        question: 'Which channels and tools does it integrate with?',
        answer:
          'Booking.com, Expedia and Agoda channels; Amadeus and Sabre GDS; card, SEPA, UPI, WeChat Pay, Alipay and regional gateways; WhatsApp, LINE, KakaoTalk and WeChat messaging; and your accounting system.',
      },
    ],
  },

  smb: {
    id: 'smb',
    label: 'Growing Businesses',
    badge: 'Small and mid-sized businesses worldwide',
    shortRegions: 'Worldwide',
    heading: 'Custom software for growing businesses, wherever you are',
    intro:
      'An offshore development team that works like an in-house one: we scope with you, build in short demoable increments and keep the system running after launch.',
    regions: ['North America', 'Europe', 'Middle East', 'Asia-Pacific'],
    areaServed: ['Worldwide'],
    integrations: [
      'Accounting: QuickBooks, Xero, Zoho Books and Odoo',
      'Payments: Stripe, PayPal and regional gateways',
      'Google Workspace and Microsoft 365',
      'WhatsApp Business, email and SMS messaging',
    ],
    localPractice: [
      'No upfront payment: we build first, you adopt it if it fits',
      'Then a fully managed pay-as-you-go service covering hosting, updates and support',
      'NDA before discovery on request',
      'Data protection practices aligned with GDPR',
    ],
    currencyAndHours: [
      'Quotes in your currency',
      'Weekly demos and written progress updates',
      'Our Sri Lanka base (UTC+5:30) gives same-day overlap with Europe, the Middle East and Asia-Pacific',
    ],
    hours: 'EST, GMT, CET, GST, IST and AEST',
    buyerFaq: (product) => [
      {
        question: `How much does ${product} cost?`,
        answer:
          'It depends on scope. We start with a short discovery session to define the first version, then build it without an upfront payment. If it fits your business, you continue on a managed pay-as-you-go plan in your currency that covers hosting, updates and support.',
      },
      {
        question: 'How long does it take to build?',
        answer:
          'A focused first version typically takes a few weeks to a few months. We deliver in short increments with weekly demos, so you see working software early and can steer priorities.',
      },
      {
        question: 'Where is our data stored?',
        answer:
          'In the cloud region you choose, such as North America, Europe, the Middle East or Asia-Pacific, or in your own cloud account. Data handling follows GDPR-aligned practices, and your data can be exported at any time.',
      },
      {
        question: 'Can it integrate with the tools we already use?',
        answer:
          'Yes. We regularly integrate QuickBooks, Xero, Zoho Books and Odoo; Stripe, PayPal and regional payment gateways; Google Workspace and Microsoft 365; WhatsApp Business, email and SMS; and existing databases.',
      },
    ],
  },
}
