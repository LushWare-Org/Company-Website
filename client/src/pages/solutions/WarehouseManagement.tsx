import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { warehouseOutline } from "@/data/outlines/industrial";

const content: LandingContent = {
  eyebrow: "Warehouse Management",
  title: { lead: "Custom Warehouse", highlight: "Management System", tail: "(WMS) Built Around Your Flow." },
  intro:
    "Receiving, put-away, picking, packing and shipping with real-time stock accuracy — a custom WMS that fits your warehouse layout, carriers and ERP instead of the other way round.",
  tags: ["Inventory Accuracy", "Barcode & RFID", "Pick & Pack", "Multi-Warehouse", "ERP & Carrier Integration"],
  image: { src: "/hero4/logistics-supply-chain.jpg", alt: "Warehouse and supply chain management dashboard" },
  capabilities: {
    heading: "Every pallet, carton and unit,",
    highlight: "accounted for.",
    intro:
      "We build the WMS around your locations, product rules and order profile, then connect it to the systems upstream and downstream.",
    items: [
      {
        title: "Receiving & Put-Away",
        desc: "Fast, accurate inbound against purchase orders and ASNs.",
        points: ["Barcode and RFID receiving", "ASN and EDI support", "Directed put-away rules", "Quality hold and inspection"],
      },
      {
        title: "Inventory Control",
        desc: "Real-time stock by location, lot and serial number.",
        points: ["Bin and location management", "Cycle counting", "Lot, batch and expiry (FEFO)", "Multi-warehouse visibility"],
      },
      {
        title: "Picking & Packing",
        desc: "Pick strategies that match your order profile.",
        points: ["Wave, batch and zone picking", "Mobile scanner apps", "Pack verification", "Pick-rate and accuracy KPIs"],
      },
      {
        title: "Shipping & Carriers",
        desc: "Get orders out the door without manual booking.",
        points: ["Carrier rate shopping and labels", "GS1 shipping labels", "Dispatch and loading plans", "Proof of delivery"],
      },
      {
        title: "Integrations",
        desc: "Connected to the systems that send orders and receive updates.",
        points: ["ERP: SAP, Dynamics 365, NetSuite, Odoo", "E-commerce and marketplace orders", "EDI with trading partners", "Transport management and fleet tracking"],
      },
      {
        title: "Forecasting & Optimization",
        desc: "Use the data to plan space, labour and stock.",
        points: ["Demand and replenishment forecasting", "Slotting optimization", "Labour planning for peaks", "Supply chain digital twin scenarios"],
      },
    ],
  },
  related: {
    heading: "Related solutions",
    items: [
      { name: "Logistics & Supply Chain", desc: "Visibility, fleet and route optimization across the supply chain.", to: "/industries/logistics-supply-chain" },
      { name: "OEE Monitoring", desc: "Real-time production tracking for the plant feeding your warehouse.", to: "/solutions/oee-monitoring" },
      { name: "Business Process Management", desc: "Automate approvals and workflows around your operations.", to: "/solutions/bpm" },
    ],
  },
  outline: warehouseOutline,
};

export default function WarehouseManagement() {
  return <IndustryLanding content={content} />;
}
