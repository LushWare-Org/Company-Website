import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { MARKETS } from "@/data/markets";

const content: LandingContent = {
  eyebrow: "Custom Software Development",
  title: { lead: "Custom Software Development", highlight: "for Small & Mid-Sized", tail: "Businesses." },
  intro:
    "A dedicated offshore development team for CRMs, internal tools, customer portals, mobile apps and AI automation — scoped with you, built in short demoable increments, and run for you after launch.",
  tags: ["Custom CRM", "Web Applications", "Mobile Apps", "AI Agents & Automation", "Dedicated Team"],
  image: { src: "/hero4/crmnew2.jpg", alt: "Custom CRM and business software dashboard built for a growing company" },
  challenge: {
    heading: "Off-the-shelf tools stop fitting as the business grows.",
    text:
      "Growing businesses end up paying for several SaaS subscriptions that don't talk to each other, with key processes still living in spreadsheets and inboxes.",
    items: [
      "Too many disconnected SaaS subscriptions",
      "Core processes stuck in spreadsheets",
      "Per-user pricing that grows faster than revenue",
      "Features you need that no product offers",
      "Agencies that disappear after launch",
      "Hiring an in-house team is slow and expensive",
    ],
  },
  capabilities: {
    heading: "Software built around",
    highlight: "how you work.",
    intro:
      "From a single internal tool to a full platform, we design, build, host and support the software your business runs on.",
    items: [
      {
        title: "Custom CRM Development",
        desc: "A CRM shaped around your sales and service process.",
        points: ["Pipelines, quotes and follow-ups", "Customer portals", "Email, WhatsApp and SMS automation", "Reporting your team actually uses"],
      },
      {
        title: "Web Applications & Portals",
        desc: "Internal tools, booking systems and customer platforms.",
        points: ["Role-based dashboards", "Online booking and payments", "Document and approval workflows", "Secure cloud hosting"],
      },
      {
        title: "Mobile Apps",
        desc: "iOS and Android apps for customers, staff and field teams.",
        points: ["Cross-platform builds", "Offline mode", "Push notifications", "App Store and Google Play publishing"],
      },
      {
        title: "AI Agents & Automation",
        desc: "Automate the repetitive work around your core processes.",
        points: ["AI chat and voice agents", "Document and email processing", "Lead qualification", "Workflow automation"],
      },
      {
        title: "Integrations & Data",
        desc: "Make the tools you already pay for work together.",
        points: ["Accounting, payment and CRM integrations", "Data migration from legacy systems", "APIs for partners", "Dashboards across all your data"],
      },
      {
        title: "Dedicated Development Team",
        desc: "An extension of your team, without the hiring overhead.",
        points: ["Product owner and senior engineers", "Weekly demos", "Shared roadmap and backlog", "Long-term support and improvements"],
      },
    ],
  },
  market: MARKETS.smb,
  related: {
    heading: "Explore our services",
    items: [
      { name: "Custom CRM Solutions", desc: "Intelligent CRM development, automation and analytics.", to: "/solutions/crm" },
      { name: "Business & Corporate Websites", desc: "Fast, SEO-ready websites that convert visitors into customers.", to: "/solutions/websites" },
      { name: "Mobile App Development", desc: "iOS and Android apps for customers and teams.", to: "/solutions/mobile-apps" },
      { name: "AI Agents & AI Chatbots", desc: "Automate conversations, lead qualification and repetitive work.", to: "/solutions/ai-agents" },
      { name: "Business Process Management", desc: "Design and automate business workflows.", to: "/solutions/bpm" },
      { name: "Our Work", desc: "Projects we have delivered for clients.", to: "/work" },
    ],
  },
  faq: [
    {
      question: "How much does custom software development cost?",
      answer:
        "It depends on scope. We start with a short discovery session to define the first version, then build it without an upfront payment. If it fits your business, you continue on a managed pay-as-you-go plan that covers hosting, updates and support.",
    },
    {
      question: "Do you work with businesses outside Sri Lanka?",
      answer:
        "Yes. Most of our clients are international. We work remotely with businesses across North America, Europe, the Middle East and Asia-Pacific, with meetings in your time zone and written progress updates every working day.",
    },
    {
      question: "How long does it take to build a custom application?",
      answer:
        "A focused first version typically takes a few weeks to a few months. We deliver in short increments with weekly demos, so you see working software early and can steer priorities.",
    },
    {
      question: "Can you sign an NDA before we share our idea?",
      answer: "Yes. We can sign an NDA before discovery on request.",
    },
    {
      question: "What happens after launch?",
      answer:
        "We keep running it. Hosting, monitoring, updates, security patches and new features are part of the managed service, so you are never left with unsupported software.",
    },
    {
      question: "Can you integrate with the tools we already use?",
      answer:
        "Yes. We regularly integrate accounting systems, payment gateways, Google Workspace, Microsoft 365, messaging platforms and existing databases.",
    },
  ],
  inquiry: { topic: "Custom Software Development", industry: "Custom Software / SMB" },
};

export default function CustomSoftwareDevelopment() {
  return <IndustryLanding content={content} />;
}
