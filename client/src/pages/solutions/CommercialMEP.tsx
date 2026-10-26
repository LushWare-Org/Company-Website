import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { MARKETS } from "@/data/markets";

const content: LandingContent = {
  eyebrow: "Commercial HVAC & MEP",
  title: { lead: "Commercial HVAC & MEP", highlight: "Software", tail: "for Projects, AMC & PPM." },
  intro:
    "Project delivery, AMC and PPM contract management, and facility maintenance in one platform for commercial HVAC, mechanical, electrical and plumbing contractors across Europe, the Middle East, East Asia and South Asia.",
  tags: ["MEP Project Management", "AMC Management", "PPM Scheduling", "CAFM / CMMS", "BIM & BMS Integration"],
  image: { src: "/Industry/electrical.jpg", alt: "Commercial HVAC and MEP engineer on a building services project" },
  challenge: {
    heading: "Projects and maintenance contracts run on disconnected systems.",
    text:
      "Commercial HVAC and MEP contractors juggle project delivery, subcontractors, AMC renewals and PPM evidence across spreadsheets, email and separate CAFM tools — and margin leaks at every handover.",
    items: [
      "AMC renewals and SLA penalties tracked manually",
      "PPM visits without auditable evidence",
      "Variations and retentions lost between project and finance",
      "Subcontractor progress invisible until it is late",
      "Commissioning records scattered across files",
      "BMS alarms that never reach the maintenance team",
      "Multi-site reporting rebuilt every month",
      "Snag lists and handover documents chased by email",
    ],
  },
  capabilities: {
    heading: "From design handover to",
    highlight: "decades of maintenance.",
    intro:
      "One platform follows the asset from installation through commissioning into the maintenance contract, so nothing is re-keyed between teams.",
    items: [
      {
        title: "MEP Project Management",
        desc: "Plan, track and close commercial MEP packages with full cost control.",
        points: ["Work breakdown by system and floor", "Variations, retentions and payment applications", "Subcontractor progress and manpower tracking", "Snagging and handover documentation"],
      },
      {
        title: "AMC & Contract Management",
        desc: "Every annual maintenance contract, SLA and renewal under control.",
        points: ["Contract value, scope and asset register", "SLA timers and penalty tracking", "Renewal pipeline and reminders", "Contract profitability per site"],
      },
      {
        title: "PPM & Reactive Maintenance",
        desc: "Planned preventive maintenance with evidence clients and auditors accept.",
        points: ["PPM calendars per asset class", "Mobile checklists with photos and readings", "Reactive tickets with priority SLAs", "Customer portal and monthly reports"],
      },
      {
        title: "Commissioning & Compliance",
        desc: "Testing and commissioning records that are complete at handover.",
        points: ["Checklists referencing ASHRAE, CIBSE and EN standards", "Test sheets and witness sign-offs", "Certificate and permit tracking", "LEED, BREEAM and Estidama documentation"],
      },
      {
        title: "BIM & BMS Integration",
        desc: "Connect design data and live building systems to maintenance.",
        points: ["Asset data from Revit and Navisworks models", "BMS alarms over BACnet and Modbus", "Energy and runtime monitoring", "Condition-based maintenance triggers"],
      },
      {
        title: "Operational Intelligence",
        desc: "See every project, contract and site in one view.",
        points: ["Multi-site, multi-company dashboards", "Technician utilization and first-time-fix rate", "Predictive maintenance on critical plant", "ERP sync with SAP, Oracle, Dynamics or Odoo"],
      },
    ],
  },
  market: MARKETS.commercialMep,
  marketRelated: {
    text: "Running a residential or light-commercial service business in North America or Australasia?",
    links: [{ label: "Field service software", to: "/industries/field-service" }],
  },
  related: {
    heading: "Related solutions",
    items: [
      { name: "HVAC / MEP Service Software", desc: "Dispatch, maintenance agreements, predictive maintenance and building digital twins for HVAC.", to: "/solutions/hvac-mep-service-software" },
      { name: "Predictive Maintenance", desc: "Condition monitoring and failure prediction for critical plant and equipment.", to: "/solutions/predictive-maintenance" },
      { name: "IoT Product Development", desc: "Sensors, gateways and dashboards to connect building systems.", to: "/solutions/iot-product-development" },
    ],
  },
  faq: [
    {
      question: "What is commercial HVAC & MEP project management software?",
      answer:
        "It is software that helps HVAC, mechanical, electrical and plumbing contractors plan and control commercial projects — scope, cost, variations, subcontractors, progress and handover — instead of tracking them in spreadsheets.",
    },
    {
      question: "Can it manage AMC (annual maintenance contracts) and PPM schedules?",
      answer:
        "Yes. AMC scope, asset registers, SLA timers and renewals are managed in one place, and PPM visits are scheduled automatically with mobile checklists, readings and photos as evidence.",
    },
    {
      question: "Do you work with HVAC and MEP contractors in the Middle East, Europe and Asia?",
      answer:
        "Yes. We build for contractors and FM providers across the GCC, the European Union, East Asia and South Asia, with multi-currency billing and bilingual English/Arabic reports on request. Our Sri Lanka base overlaps the Gulf and South Asian working day.",
    },
    {
      question: "Can it integrate with our ERP, BIM models or BMS?",
      answer:
        "Yes. We integrate with ERP systems such as SAP, Oracle, Microsoft Dynamics 365 and Odoo, import asset data from BIM models, and connect to building management systems over BACnet or Modbus.",
    },
    {
      question: "Will it replace our existing CAFM or CMMS?",
      answer:
        "It can, but it does not have to. Many clients start by connecting their existing CAFM/CMMS and adding the project, contract or intelligence layer they are missing.",
    },
    {
      question: "Do we need to pay before development starts?",
      answer:
        "No. We build the solution first. If it fits your business, you adopt it as a fully managed pay-as-you-go service that includes hosting, updates and support.",
    },
  ],
  inquiry: { topic: "Commercial HVAC & MEP Software", industry: "Commercial HVAC & MEP / Facilities Management" },
};

export default function CommercialMEP() {
  return <IndustryLanding content={content} />;
}
