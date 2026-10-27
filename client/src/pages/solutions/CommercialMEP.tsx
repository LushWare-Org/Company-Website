import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { commercialMepOutline } from "@/data/outlines/commercialMep";

const content: LandingContent = {
  eyebrow: "Commercial HVAC & MEP",
  title: { lead: "Commercial HVAC & MEP", highlight: "Software", tail: "for Projects, AMC & PPM." },
  intro:
    "Project delivery, AMC and PPM contract management, and facility maintenance in one platform for commercial HVAC, mechanical, electrical and plumbing contractors across Europe, the Middle East, East Asia and South Asia.",
  tags: ["MEP Project Management", "AMC Management", "PPM Scheduling", "CAFM / CMMS", "BIM & BMS Integration"],
  image: { src: "/Industry/electrical.jpg", alt: "Commercial HVAC and MEP engineer on a building services project" },
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
  marketRelated: {
    text: "Running a residential or light-commercial service business in North America or Australasia?",
    links: [{ label: "Field service software", to: "/industries/field-service" }],
  },
  outline: commercialMepOutline,
};

export default function CommercialMEP() {
  return <IndustryLanding content={content} />;
}
