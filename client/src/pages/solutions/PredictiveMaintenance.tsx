import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { MARKETS } from "@/data/markets";

const content: LandingContent = {
  eyebrow: "Predictive Maintenance",
  title: { lead: "Predictive Maintenance", highlight: "Software", tail: "That Prevents Downtime." },
  intro:
    "Condition monitoring and AI failure prediction for production lines, utilities and critical assets — using your machine data, IoT sensors and maintenance history to fix equipment before it stops.",
  tags: ["Condition Monitoring", "Failure Prediction", "Remaining Useful Life", "CMMS Integration", "IoT Sensors"],
  image: { src: "/hero4/manufacturing.jpg", alt: "Engineer reviewing predictive maintenance dashboards for factory equipment" },
  challenge: {
    heading: "Unplanned downtime costs more than the repair.",
    text:
      "Most plants still maintain equipment on fixed calendars or after it fails. Calendar maintenance replaces healthy parts; run-to-failure stops the line, scraps work in progress and misses delivery dates.",
    items: [
      "Unplanned stoppages on critical machines",
      "Calendar-based maintenance replacing healthy parts",
      "Sensor and PLC data collected but never analysed",
      "Spare parts ordered after the failure",
      "Maintenance history locked in paper or a CMMS nobody queries",
      "No early warning for bearings, motors, pumps or compressors",
    ],
  },
  capabilities: {
    heading: "From sensor data to",
    highlight: "work orders.",
    intro:
      "We connect the data, build the models and push the result straight into your maintenance workflow, so predictions turn into planned work.",
    items: [
      {
        title: "Condition Monitoring",
        desc: "Live health signals from the assets that matter most.",
        points: ["Vibration, temperature, current and pressure", "PLC and SCADA data over OPC UA, Modbus and MQTT", "Retrofit wireless sensors where data is missing", "Threshold and trend alarms"],
      },
      {
        title: "Failure Prediction",
        desc: "Machine learning models trained on your own equipment history.",
        points: ["Anomaly detection", "Failure-mode classification", "Remaining useful life (RUL) estimates", "Asset health scores"],
      },
      {
        title: "Maintenance Planning",
        desc: "Predictions become scheduled work, not just dashboards.",
        points: ["Automatic work orders in your CMMS or ERP", "Spare-parts forecasting", "Planned downtime windows", "Technician scheduling"],
      },
      {
        title: "Root Cause & Reliability",
        desc: "Understand why assets fail and stop it recurring.",
        points: ["Failure history analysis", "MTBF and MTTR tracking", "Pareto of downtime causes", "Reliability-centred maintenance support"],
      },
      {
        title: "Energy & Performance",
        desc: "Catch inefficiency before it becomes failure.",
        points: ["Energy per unit produced", "Degradation trends", "Compressed air and utilities monitoring", "Peak-demand alerts"],
      },
      {
        title: "Enterprise Rollout",
        desc: "Start with one line, then scale across plants.",
        points: ["Pilot on critical assets first", "Multi-site dashboards", "Role-based access", "SAP PM, Maximo and Dynamics integration"],
      },
    ],
  },
  market: MARKETS.industrial,
  related: {
    heading: "Related solutions",
    items: [
      { name: "Manufacturing Operations", desc: "AI, digital twins and self-optimizing production for manufacturers.", to: "/industries/manufacturing" },
      { name: "OEE Monitoring", desc: "Real-time availability, performance and quality on every line.", to: "/solutions/oee-monitoring" },
      { name: "IoT Product Development", desc: "Custom sensors, gateways and firmware for industrial data.", to: "/solutions/iot-product-development" },
    ],
  },
  faq: [
    {
      question: "What is predictive maintenance software?",
      answer:
        "Predictive maintenance software analyses machine and sensor data to detect early signs of failure and estimate when an asset will need attention, so maintenance is planned before a breakdown instead of after it.",
    },
    {
      question: "What data do we need to get started?",
      answer:
        "Usually some combination of PLC/SCADA tags, sensor readings and maintenance history. If critical assets have no data, we add retrofit sensors for vibration, temperature or current.",
    },
    {
      question: "Can it work with our existing CMMS or ERP?",
      answer:
        "Yes. Predictions create work orders directly in systems such as SAP PM, IBM Maximo, Microsoft Dynamics 365 or your current CMMS.",
    },
    {
      question: "How long does a pilot take?",
      answer:
        "A focused pilot on a few critical assets typically runs for a few months: connecting data, training models and proving the alerts against real maintenance events before scaling.",
    },
    {
      question: "Do you work with manufacturers outside your home region?",
      answer:
        "Yes. We work with plants and operators globally, delivering remotely and planning on-site visits per phase when installation is needed.",
    },
  ],
  inquiry: { topic: "Predictive Maintenance", industry: "Manufacturing" },
};

export default function PredictiveMaintenance() {
  return <IndustryLanding content={content} />;
}
