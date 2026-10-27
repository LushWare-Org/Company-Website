import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { oeeOutline } from "@/data/outlines/industrial";

const content: LandingContent = {
  eyebrow: "OEE Monitoring",
  title: { lead: "OEE Monitoring", highlight: "Software", tail: "for Real-Time Production Tracking." },
  intro:
    "Measure availability, performance and quality on every machine and line automatically — and see exactly where capacity is lost, shift by shift.",
  tags: ["OEE Dashboards", "Downtime Tracking", "Machine Connectivity", "Shift Reports", "MES Lite"],
  image: { src: "/hero4/iot2.jpg", alt: "Engineer connecting machines for real-time OEE monitoring" },
  capabilities: {
    heading: "Automatic OEE from",
    highlight: "the machine itself.",
    intro:
      "We connect machines directly, capture events automatically and give operators and managers the same live numbers.",
    items: [
      {
        title: "Machine Connectivity",
        desc: "Collect cycle counts, states and alarms from new and legacy equipment.",
        points: ["PLC data over OPC UA, Modbus and MQTT", "Retrofit sensors for legacy machines", "Edge gateways with offline buffering", "Secure cloud or on-premise hosting"],
      },
      {
        title: "Live OEE Dashboards",
        desc: "Availability, performance and quality per machine, line and plant.",
        points: ["Real-time OEE and TEEP", "Target vs actual by shift", "Andon screens on the shop floor", "Plant and multi-site roll-ups"],
      },
      {
        title: "Downtime & Loss Analysis",
        desc: "Know exactly where capacity goes.",
        points: ["Operator downtime reason codes on tablets", "Six Big Losses breakdown", "Micro-stop and slow-cycle detection", "Pareto and trend reports"],
      },
      {
        title: "Quality & Scrap",
        desc: "Tie quality losses to the machine, shift and batch that caused them.",
        points: ["Scrap and rework capture", "Batch and lot traceability", "SPC charts", "Vision inspection integration"],
      },
      {
        title: "Production Tracking (MES Lite)",
        desc: "Work orders, output and labour without a heavyweight MES.",
        points: ["Work order start/stop", "Output vs plan", "Changeover tracking", "ERP sync for orders and completions"],
      },
      {
        title: "Continuous Improvement",
        desc: "Turn OEE data into improvement actions.",
        points: ["Shift handover reports", "Kaizen and action tracking", "Bottleneck identification", "AI recommendations on recurring losses"],
      },
    ],
  },
  outline: oeeOutline,
};

export default function OEEMonitoring() {
  return <IndustryLanding content={content} />;
}
