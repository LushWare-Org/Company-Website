import type { PageOutline } from './types'

// Commercial HVAC & MEP contractors and FM providers in Europe, the Middle East, East Asia and South Asia.

export const commercialMepOutline: PageOutline = {
  market: 'commercialMep',
  product: 'commercial HVAC & MEP software',
  whoFor:
    'Built for commercial HVAC & MEP contractors and facilities management providers in Europe, the GCC, East Asia and South Asia.',
  problems: {
    heading: 'What MEP contractors and FM managers tell us',
    intro:
      'Whether the portfolio is towers in Dubai, hospitals in Germany or factories in Pune, the same handovers leak margin. This is how operations directors describe it.',
    items: [
      { quote: 'We find out the AMC expired when the client stops paying.', detail: 'Renewals, scope changes and SLA terms sit in contract PDFs nobody reviews until it is too late.' },
      { quote: 'Our PPM evidence won\'t survive an audit.', detail: 'Visits are done, but readings, photos and sign-offs are scattered across WhatsApp groups and paper sheets.' },
      { quote: 'SLA penalties hit before anyone sees the ticket.', detail: 'Reactive calls are logged by phone and email, so response timers start long before the technician is assigned.' },
      { quote: 'Variations disappear between site and finance.', detail: 'Approved changes, retentions and subcontractor claims are tracked in separate spreadsheets that never reconcile.' },
      { quote: 'The BMS alarms, but nobody acts on it.', detail: 'Building management systems raise alerts that never reach the maintenance team as work orders.' },
      { quote: 'Monthly client reports take a week to build.', detail: 'Multi-site KPIs are copy-pasted from several systems for every client, every month.' },
    ],
  },
  features: {
    heading: 'Features, in contractor and FM language',
    intro: 'The terms on the screen are the terms in your contracts: AMC, PPM, SLA, snag, retention, variation.',
    items: [
      { term: 'AMC management', feature: 'Contract value, scope, asset register, SLA terms and renewal pipeline per client and site, with profitability per contract.' },
      { term: 'PPM scheduling', feature: 'Planned preventive maintenance calendars by asset class, generated from the contract and assigned to the right team automatically.' },
      { term: 'Reactive tickets & SLA timers', feature: 'Calls logged from portal, email or phone with priority-based response and resolution timers and penalty tracking.' },
      { term: 'Mobile job cards', feature: 'Checklists, meter readings, photos and client sign-off captured on site — the audit trail builds itself.' },
      { term: 'Variations & retentions', feature: 'Approved variations, retention release dates and payment applications tracked per project and synced to finance.' },
      { term: 'Snagging & handover', feature: 'Snag lists with photos and owners, commissioning sheets referencing ASHRAE, CIBSE and EN standards, and O&M documents at handover.' },
      { term: 'BMS-to-work-order', feature: 'BACnet and Modbus alarms turned into prioritised maintenance tickets, with runtime data for condition-based maintenance.' },
      { term: 'Client portal & monthly reports', feature: 'Clients see open tickets, PPM completion and SLA performance live, and receive branded reports without manual work.' },
    ],
  },
  proof: {
    kind: 'demo',
    heading: 'See an AMC portfolio run in one system',
    intro:
      'A 45-minute walkthrough on a sample commercial portfolio — multiple buildings, contracts and subcontractors — configured for your region, currency and reporting language.',
    steps: [
      'An AMC is set up with its asset register, PPM frequencies and SLA terms; the year\'s PPM calendar is generated automatically.',
      'A BMS alarm on a chiller raises a reactive ticket; the SLA timer starts and the nearest qualified technician is assigned.',
      'The technician completes the job card on mobile with readings, photos and client sign-off.',
      'A variation on a fit-out project is approved and flows to finance with the retention schedule.',
      'The client\'s monthly report — PPM completion, SLA compliance and open snags — is generated in one click.',
    ],
  },
  guide: {
    heading: 'Choosing commercial HVAC & MEP software for projects, AMC and PPM',
    intro:
      'Commercial HVAC and MEP contractors run two businesses at once: project delivery, where margin depends on variations, retentions and subcontractor control, and maintenance, where margin depends on AMC renewals, PPM compliance and SLA performance. Most firms in Europe, the Gulf and Asia use separate tools for each, and lose money in the gaps between them. Here is what to look for in a system that covers both.',
    sections: [
      {
        heading: 'One asset record from installation to the last PPM visit',
        paragraphs: [
          'The most expensive re-keying in MEP happens at handover. Asset data from the BIM model and the commissioning sheets is typed again into the CAFM system, often months later and with errors. A platform that carries each asset from the project into the maintenance contract keeps serial numbers, warranties, test results and O&M documents attached to the equipment for its whole life.',
          'Ask whether the system can import asset data from Revit, Navisworks or Autodesk Construction Cloud exports, and whether commissioning records stay linked once the asset moves into an AMC.',
        ],
      },
      {
        heading: 'AMC and SLA control that protects margin',
        paragraphs: [
          'Annual maintenance contracts are won on price and lost on performance. Your software should know each contract\'s scope, asset list, visit frequencies, response times and penalty clauses, and warn you before an SLA is breached rather than after.',
          'It should also show profitability per contract and per site — labour hours, parts, subcontractor cost and penalties against contract value — so renewal pricing is based on facts. In the GCC, where many contracts renew annually with large FM groups, this alone can change the conversation at renewal time.',
        ],
      },
      {
        heading: 'PPM evidence an auditor will accept',
        paragraphs: [
          'Planned preventive maintenance only counts if you can prove it happened. Mobile job cards should capture readings, photos, timestamps, GPS location and client sign-off for every visit, and link to the standard or method statement being followed — ASHRAE, CIBSE, EN standards or the client\'s own specification.',
          'For green building portfolios, the same records support LEED, BREEAM and Estidama documentation without a separate data collection exercise.',
        ],
      },
      {
        heading: 'Integration with ERP, BMS and existing CAFM',
        paragraphs: [
          'Few commercial contractors can replace everything at once. The right platform connects to the finance system you already run — SAP, Oracle, Microsoft Dynamics 365 or Odoo — and to building management systems over BACnet or Modbus, so alarms become work orders automatically.',
          'If you already have a CAFM or CMMS that works for part of the business, a good partner will connect to it through APIs and add the missing layer — project control, AMC management or reporting — instead of forcing a full migration.',
        ],
      },
      {
        heading: 'Regional fit: currency, language and data residency',
        paragraphs: [
          'A contractor working across the UAE, Saudi Arabia and India needs multi-currency billing, VAT handling per country, and often bilingual English and Arabic reports with right-to-left layouts. European clients expect GDPR-compliant data handling; some Gulf clients require data to stay in-country.',
          'Confirm where the system will be hosted, whether it can run in your region or your own cloud tenancy, and whether the delivery team works in hours that overlap with your operations.',
        ],
      },
    ],
  },
  faq: [
    {
      question: 'What is commercial HVAC & MEP project management software?',
      answer:
        'It is software that helps HVAC, mechanical, electrical and plumbing contractors plan and control commercial projects — scope, cost, variations, subcontractors, progress and handover — instead of tracking them in spreadsheets.',
    },
    {
      question: 'Can it manage AMC (annual maintenance contracts) and PPM schedules?',
      answer:
        'Yes. AMC scope, asset registers, SLA timers and renewals are managed in one place, and PPM visits are scheduled automatically with mobile checklists, readings and photos as evidence.',
    },
    {
      question: 'Do you work with HVAC and MEP contractors in the Middle East, Europe and Asia?',
      answer:
        'Yes. We build for contractors and FM providers across the GCC, the European Union, East Asia and South Asia, with multi-currency billing and bilingual English/Arabic reports on request. Our Sri Lanka base overlaps the Gulf and South Asian working day.',
    },
    {
      question: 'Will it replace our existing CAFM or CMMS?',
      answer:
        'It can, but it does not have to. Many clients start by connecting their existing CAFM/CMMS and adding the project, contract or intelligence layer they are missing.',
    },
  ],
  cta: {
    heading: 'Bring your projects and maintenance contracts into one view',
    text: 'Share a sample AMC or project and we will show you how it runs end to end — from asset register to monthly client report.',
  },
  inquiry: { topic: 'Commercial HVAC & MEP Software', industry: 'Commercial HVAC & MEP / Facilities Management' },
}
