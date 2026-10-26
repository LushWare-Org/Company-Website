import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { MARKETS } from "@/data/markets";

const content: LandingContent = {
  eyebrow: "OEE Monitoring",
  title: { lead: "OEE Monitoring", highlight: "& Production Tracking", tail: "in Real Time." },
  intro:
    "Measure availability, performance and quality on every machine and line automatically — and see exactly where capacity is lost, shift by shift.",
  tags: ["OEE Dashboards", "Downtime Tracking", "Machine Connectivity", "Shift Reports", "MES Lite"],
  image: { src: "/hero4/iot2.jpg", alt: "Engineer connecting machines for real-time OEE monitoring" },
  challenge: {
    heading: "You can't improve what you only measure at the end of the shift.",
    text:
      "Manual production logs arrive late, hide micro-stops and argue about the numbers. Without trustworthy OEE, improvement projects target the wrong losses.",
    items: [
      "OEE calculated by hand in spreadsheets",
      "Micro-stops and slow cycles never recorded",
      "Downtime reasons guessed after the fact",
      "Scrap and rework tracked separately from output",
      "No comparison between lines, shifts or plants",
      "Older machines with no data connection",
    ],
  },
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
  market: MARKETS.industrial,
  related: {
    heading: "Related solutions",
    items: [
      { name: "Predictive Maintenance", desc: "Predict failures on the machines your OEE depends on.", to: "/solutions/predictive-maintenance" },
      { name: "Manufacturing Operations", desc: "Digital twins and self-optimizing production.", to: "/industries/manufacturing" },
      { name: "AI Process Optimization", desc: "Forecast, simulate and optimize operations with AI.", to: "/solutions/ai-process-optimization" },
    ],
  },
  faq: [
    {
      question: "What is OEE?",
      answer:
        "Overall Equipment Effectiveness (OEE) multiplies availability, performance and quality into one score that shows how much of a machine's planned production time is truly productive.",
    },
    {
      question: "Can you connect older machines without PLCs?",
      answer:
        "Yes. We retrofit sensors and edge gateways to capture cycles, run states and power draw from legacy equipment, so every machine is measured the same way.",
    },
    {
      question: "Is this a full MES?",
      answer:
        "It covers the most valuable MES functions — OEE, downtime, work orders and output tracking — without the cost of a full MES. It can integrate with an existing MES or ERP if you have one.",
    },
    {
      question: "Can operators enter downtime reasons?",
      answer:
        "Yes. Operators pick reason codes on a shop-floor tablet when a stop is detected, which makes downtime analysis accurate instead of estimated.",
    },
    {
      question: "Do you support multiple plants in different countries?",
      answer:
        "Yes. Dashboards roll up across sites with multi-language, multi-unit and role-based access for plant and group management.",
    },
  ],
  inquiry: { topic: "OEE Monitoring", industry: "Manufacturing" },
};

export default function OEEMonitoring() {
  return <IndustryLanding content={content} />;
}
