import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { customSoftwareOutline } from "@/data/outlines/smb";

const content: LandingContent = {
  eyebrow: "Custom Software Development",
  title: { lead: "Custom Software Development", highlight: "for Small & Mid-Sized", tail: "Businesses." },
  intro:
    "A dedicated offshore development team for CRMs, internal tools, customer portals, mobile apps and AI automation — scoped with you, built in short demoable increments, and run for you after launch.",
  tags: ["Custom CRM", "Web Applications", "Mobile Apps", "AI Agents & Automation", "Dedicated Team"],
  image: { src: "/hero4/crmnew2.jpg", alt: "Custom CRM and business software dashboard built for a growing company" },
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
  outline: customSoftwareOutline,
};

export default function CustomSoftwareDevelopment() {
  return <IndustryLanding content={content} />;
}
