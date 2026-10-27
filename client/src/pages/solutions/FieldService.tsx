import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { fieldServiceOutline } from "@/data/outlines/trades";

const content: LandingContent = {
  eyebrow: "Field Service Software",
  title: { lead: "Field Service Software", highlight: "for HVAC, Plumbing", tail: "& Electrical Contractors." },
  intro:
    "Scheduling, dispatch, quoting, invoicing and customer management for HVAC, plumbing and electrical businesses — built around how your team actually works, from the first call to the final payment.",
  tags: ["Scheduling & Dispatch", "Mobile Technician App", "Quotes & Invoices", "Service Agreements", "Xero & QuickBooks Sync"],
  image: { src: "/Industry/hvac.jpg", alt: "HVAC technician using field service management software" },
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
  marketRelated: {
    text: "Delivering large commercial projects or AMC/PPM contracts in Europe, the Middle East or Asia?",
    links: [{ label: "Commercial HVAC & MEP software", to: "/industries/commercial-hvac-mep" }],
  },
  outline: fieldServiceOutline,
};

export default function FieldService() {
  return <IndustryLanding content={content} />;
}
