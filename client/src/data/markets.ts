// Target markets per segment. Single source for the on-page "market fit"
// sections (<MarketFitSection />) and the schema.org `areaServed` in
// src/seo/routes.ts — edit claims here, not in individual pages.

export type MarketId = 'trades' | 'commercialMep' | 'industrial' | 'tourism' | 'smb'

export type Market = {
  id: MarketId
  /** Short badge, e.g. "US · Canada · Australia · New Zealand". */
  badge: string
  heading: string
  intro: string
  regions: string[]
  /** schema.org areaServed values (country/region names). */
  areaServed: string[]
  integrations: string[]
  localPractice: string[]
  currencyAndHours: string[]
}

export const MARKETS: Record<MarketId, Market> = {
  trades: {
    id: 'trades',
    badge: 'US · Canada · Australia · New Zealand',
    heading: 'Built for trade contractors in North America and Australasia',
    intro:
      'We build field service software for residential and light-commercial HVAC, plumbing and electrical businesses in the United States, Canada, Australia and New Zealand — set up around the way your market quotes, invoices, taxes and certifies work.',
    regions: ['United States', 'Canada', 'Australia', 'New Zealand'],
    areaServed: ['United States', 'Canada', 'Australia', 'New Zealand'],
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
  },

  commercialMep: {
    id: 'commercialMep',
    badge: 'Europe · Middle East · East Asia · South Asia',
    heading: 'Built for commercial HVAC & MEP contractors and FM providers',
    intro:
      'For HVAC, mechanical, electrical and plumbing contractors delivering commercial projects and maintenance contracts across Europe, the Gulf, East Asia and South Asia — where AMC renewals, PPM compliance and multi-site reporting decide your margins.',
    regions: ['European Union', 'UAE, Saudi Arabia and the GCC', 'Japan, South Korea, China and Hong Kong', 'India, Sri Lanka and Bangladesh'],
    areaServed: [
      'European Union',
      'United Arab Emirates',
      'Saudi Arabia',
      'Qatar',
      'Kuwait',
      'Oman',
      'Bahrain',
      'Japan',
      'South Korea',
      'China',
      'Hong Kong',
      'Taiwan',
      'India',
      'Sri Lanka',
      'Bangladesh',
    ],
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
  },

  industrial: {
    id: 'industrial',
    badge: 'Global manufacturers & supply chain operators',
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
  },

  tourism: {
    id: 'tourism',
    badge: 'Europe · Asia Pacific · Middle East (GCC) · South Asia',
    heading: 'Built for travel businesses in Europe, Asia Pacific, the Gulf and South Asia',
    intro:
      'We build booking, CRM and operations software for tour operators, DMCs, travel agencies and hotels across the EU, Asia Pacific, the GCC, Sri Lanka, India and the Maldives — with the channels, payments, languages and data rules those markets expect.',
    regions: ['European Union', 'Asia Pacific', 'Middle East (GCC)', 'Sri Lanka', 'India', 'Maldives'],
    areaServed: [
      'European Union',
      'Asia Pacific',
      'United Arab Emirates',
      'Saudi Arabia',
      'Qatar',
      'Kuwait',
      'Bahrain',
      'Oman',
      'Sri Lanka',
      'India',
      'Maldives',
    ],
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
  },

  smb: {
    id: 'smb',
    badge: 'Small and mid-sized businesses worldwide',
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
  },
}
