import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { MARKETS } from "@/data/markets";

const content: LandingContent = {
  eyebrow: "Warehouse Management",
  title: { lead: "Warehouse Management", highlight: "System (WMS)", tail: "Built Around Your Flow." },
  intro:
    "Receiving, put-away, picking, packing and shipping with real-time stock accuracy — a custom WMS that fits your warehouse layout, carriers and ERP instead of the other way round.",
  tags: ["Inventory Accuracy", "Barcode & RFID", "Pick & Pack", "Multi-Warehouse", "ERP & Carrier Integration"],
  image: { src: "/hero4/logistics-supply-chain.jpg", alt: "Warehouse and supply chain management dashboard" },
  challenge: {
    heading: "Stock you can't find is stock you don't have.",
    text:
      "Spreadsheets and generic ERP inventory modules break down as order volumes grow — leading to mis-picks, phantom stock and late shipments.",
    items: [
      "Inventory counts that never match the system",
      "Mis-picks and wrong shipments",
      "Slow, paper-based receiving",
      "No real-time view across warehouses",
      "Manual carrier booking and label printing",
      "Peak-season volume the team can't keep up with",
    ],
  },
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
  market: MARKETS.industrial,
  related: {
    heading: "Related solutions",
    items: [
      { name: "Logistics & Supply Chain", desc: "Visibility, fleet and route optimization across the supply chain.", to: "/industries/logistics-supply-chain" },
      { name: "OEE Monitoring", desc: "Real-time production tracking for the plant feeding your warehouse.", to: "/solutions/oee-monitoring" },
      { name: "Business Process Management", desc: "Automate approvals and workflows around your operations.", to: "/solutions/bpm" },
    ],
  },
  faq: [
    {
      question: "What does a warehouse management system do?",
      answer:
        "A WMS controls stock movements inside the warehouse — receiving, put-away, storage, picking, packing and shipping — and keeps inventory accurate in real time by location, lot and serial number.",
    },
    {
      question: "Why build a custom WMS instead of buying one?",
      answer:
        "Packaged WMS products are priced for large operations and force their own processes. A custom WMS fits your layout, product rules and integrations, and you only adopt it once it fits.",
    },
    {
      question: "Can it integrate with our ERP and e-commerce platforms?",
      answer:
        "Yes. We integrate with ERPs such as SAP, Microsoft Dynamics 365, Oracle NetSuite and Odoo, as well as e-commerce platforms, marketplaces and EDI trading partners.",
    },
    {
      question: "Does it support barcode scanners and RFID?",
      answer:
        "Yes. The system works with handheld scanners, mobile phones and fixed RFID readers, and prints GS1-compliant labels.",
    },
    {
      question: "Can it manage multiple warehouses in different countries?",
      answer:
        "Yes. Multi-warehouse, multi-currency and multi-language operation is built in, with transfers and stock visibility across every site.",
    },
  ],
  inquiry: { topic: "Warehouse Management System", industry: "Logistics & Supply Chain" },
};

export default function WarehouseManagement() {
  return <IndustryLanding content={content} />;
}
