import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { predictiveMaintenanceOutline } from "@/data/outlines/industrial";

const content: LandingContent = {
  eyebrow: "Predictive Maintenance",
  title: { lead: "Predictive Maintenance", highlight: "Software", tail: "That Prevents Downtime." },
  intro:
    "Condition monitoring and AI failure prediction for production lines, utilities and critical assets — using your machine data, IoT sensors and maintenance history to fix equipment before it stops.",
  tags: ["Condition Monitoring", "Failure Prediction", "Remaining Useful Life", "CMMS Integration", "IoT Sensors"],
  image: { src: "/hero4/manufacturing.jpg", alt: "Engineer reviewing predictive maintenance dashboards for factory equipment" },
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
  related: {
    heading: "Related solutions",
    items: [
      { name: "Manufacturing Operations", desc: "AI, digital twins and self-optimizing production for manufacturers.", to: "/industries/manufacturing" },
      { name: "OEE Monitoring", desc: "Real-time availability, performance and quality on every line.", to: "/solutions/oee-monitoring" },
      { name: "IoT Product Development", desc: "Custom sensors, gateways and firmware for industrial data.", to: "/solutions/iot-product-development" },
    ],
  },
  outline: predictiveMaintenanceOutline,
};

export default function PredictiveMaintenance() {
  return <IndustryLanding content={content} />;
}
