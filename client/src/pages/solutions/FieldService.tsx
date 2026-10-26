import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { MARKETS } from "@/data/markets";

const content: LandingContent = {
  eyebrow: "Field Service Software",
  title: { lead: "Field Service Software", highlight: "for Trade Contractors", tail: "in the US, Canada, AU & NZ." },
  intro:
    "Scheduling, dispatch, quoting, invoicing and customer management for HVAC, plumbing and electrical businesses — built around how your team actually works, from the first call to the final payment.",
  tags: ["Scheduling & Dispatch", "Mobile Technician App", "Quotes & Invoices", "Service Agreements", "Xero & QuickBooks Sync"],
  image: { src: "/Industry/hvac.jpg", alt: "HVAC technician using field service management software" },
  challenge: {
    heading: "Jobs, techs and paperwork spread across too many tools.",
    text:
      "Most trade businesses run on a mix of phone calls, whiteboards, spreadsheets and a generic app that never quite fits. The result is missed calls, double-booked technicians and invoices that go out days late.",
    items: [
      "Missed or slow-to-answer service calls",
      "Double-booked technicians and wasted drive time",
      "Quotes written up back at the office",
      "Invoices sent days after the job is done",
      "Service agreements that lapse without renewal",
      "No clear view of van stock and parts",
      "Licences and certificates tracked on paper",
      "Off-the-shelf apps priced per technician that keep going up",
    ],
  },
  capabilities: {
    heading: "One system for the",
    highlight: "whole job.",
    intro:
      "Every module shares one core of customers, jobs, technicians and billing, so office and field teams always see the same picture.",
    items: [
      {
        title: "Scheduling & Dispatch",
        desc: "Drag-and-drop dispatch board that matches the right technician to every job.",
        points: ["Skills- and zone-based assignment", "Route and drive-time optimization", "Emergency call-out prioritization", "Customer 'on my way' SMS alerts"],
      },
      {
        title: "Mobile Technician App",
        desc: "Everything a technician needs on site, online or offline.",
        points: ["Job details and service history", "Checklists, photos and signatures", "On-site quotes and upsells", "Time and materials capture"],
      },
      {
        title: "Quotes, Invoicing & Payments",
        desc: "Turn approved quotes into jobs and jobs into paid invoices the same day.",
        points: ["Good-better-best quote options", "Card payments and deposits", "Progress and milestone billing", "Accounting sync with Xero, QuickBooks or MYOB"],
      },
      {
        title: "Service Agreements & Maintenance",
        desc: "Recurring revenue that renews itself.",
        points: ["Maintenance plan memberships", "Automatic visit scheduling", "Renewal reminders", "Equipment and asset history per property"],
      },
      {
        title: "Parts & Van Stock",
        desc: "Arrive with the right part the first time.",
        points: ["Van and warehouse stock levels", "Low-stock alerts", "Supplier purchase orders", "Parts usage per job"],
      },
      {
        title: "Customer CRM & Reviews",
        desc: "Keep customers coming back and turn good jobs into reviews.",
        points: ["Lead capture from web, phone and Google", "Follow-ups and reactivation campaigns", "Automated review requests", "Churn and lifetime-value insights"],
      },
    ],
  },
  market: MARKETS.trades,
  marketRelated: {
    text: "Delivering large commercial projects or AMC/PPM contracts in Europe, the Middle East or Asia?",
    links: [{ label: "Commercial HVAC & MEP software", to: "/industries/commercial-hvac-mep" }],
  },
  related: {
    heading: "Software for your trade",
    items: [
      { name: "HVAC / MEP Service Software", desc: "Dispatch, maintenance agreements and refrigerant records for heating and cooling contractors.", to: "/solutions/hvac-mep-service-software" },
      { name: "Plumbing Business Software", desc: "Emergency call-outs, on-site quotes and van stock for plumbing companies.", to: "/industries/plumbing" },
      { name: "Electrical Contractor Software", desc: "Crews, compliance certificates and milestone billing for electricians.", to: "/industries/electrical" },
    ],
  },
  faq: [
    {
      question: "What is field service management software?",
      answer:
        "Field service management (FSM) software runs the operational side of a trade business: taking bookings, scheduling and dispatching technicians, giving them job details on a mobile app, and turning completed work into quotes, invoices and payments.",
    },
    {
      question: "Do you work with contractors in the US, Canada, Australia and New Zealand?",
      answer:
        "Yes. We build for trade businesses in all four markets, with pricing, invoices and taxes in USD, CAD, AUD or NZD, and meetings scheduled in your local time zone.",
    },
    {
      question: "Can it sync with QuickBooks, Xero or MYOB?",
      answer:
        "Yes. We build two-way accounting integrations so customers, invoices and payments flow into the accounting system you already use, without double entry.",
    },
    {
      question: "How is this different from off-the-shelf field service apps?",
      answer:
        "Off-the-shelf apps make every business work the same way and usually charge per technician. We build around your workflow, your pricing and your reports, and you only adopt it once it fits.",
    },
    {
      question: "Does the technician app work without mobile signal?",
      answer:
        "Yes. Technicians can view jobs, complete checklists, take photos and capture signatures offline; everything syncs once the device is back online.",
    },
    {
      question: "Do I need to pay before development starts?",
      answer:
        "No. We build the solution first. If it fits your business, you adopt it as a fully managed pay-as-you-go service that includes hosting, updates and support.",
    },
  ],
  inquiry: { topic: "Field Service Software", industry: "Trades / Field Service" },
};

export default function FieldService() {
  return <IndustryLanding content={content} />;
}
