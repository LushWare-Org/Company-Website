import IndustryLanding, { type LandingContent } from "@/components/IndustryLanding";
import { travelAgencyOutline } from "@/data/outlines/tourism";

const content: LandingContent = {
  eyebrow: "Travel Agency Software",
  title: { lead: "Travel Agency", highlight: "Software", tail: "From Inquiry to Trip." },
  intro:
    "Quotes, itineraries, bookings, supplier contracts, payments and follow-ups in one system for travel agencies and tour operators across Europe, Asia Pacific, the Middle East and South Asia.",
  tags: ["Automatic Quotations", "Itinerary Builder", "Booking Management", "B2B Agent Portal", "Travel CRM"],
  image: { src: "/solution/travel.webp", alt: "Travel agency software for quotes, itineraries and bookings" },
  capabilities: {
    heading: "One system for the whole",
    highlight: "trip lifecycle.",
    intro:
      "We build the platform around how your agency sells — FIT, groups, MICE or B2B — and connect it to the suppliers and channels you already use.",
    items: [
      {
        title: "Quotations & Itineraries",
        desc: "Branded quotes in minutes instead of hours.",
        points: ["Automatic quotation from contracted rates", "Day-by-day itinerary builder", "Markups, taxes and multi-currency pricing", "PDF and web itineraries for clients"],
      },
      {
        title: "Booking Management",
        desc: "Every booking, status and document in one place.",
        points: ["Hotels, transfers, tours and flights", "Vouchers and booking confirmations", "Amendments and cancellations", "Operations and service schedules"],
      },
      {
        title: "Supplier & Contract Management",
        desc: "Contracted rates and allotments kept current.",
        points: ["Seasonal rate contracts", "Allotments and release periods", "Supplier payments and statements", "Booking.com, Expedia, Agoda and GDS connections"],
      },
      {
        title: "Travel CRM",
        desc: "Capture every inquiry and keep clients coming back.",
        points: ["Inquiries from web, email and WhatsApp", "Lead pipeline and follow-up reminders", "Client profiles and trip history", "Post-trip reviews and repeat offers"],
      },
      {
        title: "B2B Agent Portal",
        desc: "Let partner agents search, quote and book online.",
        points: ["Agent accounts and commission rules", "Live availability and net rates", "Credit limits and statements", "White-label booking pages"],
      },
      {
        title: "Payments & Reporting",
        desc: "See revenue and margin per booking, agent and market.",
        points: ["Deposits, balances and payment links", "Card, SEPA, UPI and regional gateways", "Profit per booking and per supplier", "Source-market and seasonality reports"],
      },
    ],
  },
  marketRelated: {
    text: "Running a guest house, speedboat operation or travel agency in the Maldives?",
    links: [{ label: "LushWare Maldives", to: "https://mv.lushware.net" }],
  },
  related: {
    heading: "Related solutions",
    items: [
      { name: "Tourism & Hospitality", desc: "Booking, hotel and property management with AI demand forecasting.", to: "/industries/tourism-hospitality" },
      { name: "Custom CRM Solutions", desc: "CRM development, automation and analytics for any sales process.", to: "/solutions/crm" },
      { name: "AI Agents & AI Chatbots", desc: "Answer traveller inquiries and qualify leads around the clock.", to: "/solutions/ai-agents" },
    ],
  },
  outline: travelAgencyOutline,
};

export default function TravelAgencySoftware() {
  return <IndustryLanding content={content} />;
}
