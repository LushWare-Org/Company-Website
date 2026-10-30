import { useState } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import { getRouteFaq } from "../data/faq";
import PageOutline from "../components/PageOutline";
import InquiryForm from "../components/InquiryForm";
import WhyChooseUs from "../components/WhyChooseUs";

const WHATSAPP_NUMBER = "94716430053";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi LushWare! I'm interested in your Travel CRM & Tour Operations platform. Could we book a free demo to see how it can help manage my travel agency?")}`;

// ---------------------------------------------------------------------------
// Content data
// ---------------------------------------------------------------------------

const audiences = [
  {
    label: "Travel agencies",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=150&auto=format&fit=crop&q=80",
  },
  {
    label: "Tour operators",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=150&auto=format&fit=crop&q=80",
  },
  {
    label: "Destination management companies",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&auto=format&fit=crop&q=80",
  },
  {
    label: "Holiday planners",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=150&auto=format&fit=crop&q=80",
  },
  {
    label: "Travel consultants",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
  {
    label: "Inbound & outbound operators",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=150&auto=format&fit=crop&q=80",
  },
];
const challenges = [
  {
    icon: "table_rows",
    title: "Scattered across spreadsheets",
    description:
      "Customer details, package pricing, and payment status live in different files, so nothing lines up when you need it.",
  },
  {
    icon: "hourglass_bottom",
    title: "Itineraries take hours to build",
    description:
      "Every enquiry starts from a blank document, even when the trip is 80% the same as the last one you quoted.",
  },
  {
    icon: "receipt_long",
    title: "Invoices tracked by memory",
    description:
      "Without a single source of truth, it's easy to lose sight of who's paid, who's overdue, and what's still owed to vendors.",
  },
  {
    icon: "visibility_off",
    title: "No view of the whole business",
    description:
      "Owners can't see booking volume, revenue, or customer history at a glance — only after chasing it down manually.",
  },
];

const coreFeatureBlurbs = {
  quotation: {
    title: "Quotation Management",
    description:
      "Turn an enquiry into a priced, branded quotation in minutes — with custom pricing across flights, stays, and transfers, exported straight to PDF.",
  },
  tourPackage: {
    title: "Tour Package Management",
    description:
      "Build your catalogue once. Categorize by destination, set pricing and availability, and mark your best sellers as featured packages.",
  },
  documents: {
    title: "Document Management",
    description:
      "Quotations, invoices, receipts, and itineraries generated and filed automatically — nothing lives in a scattered downloads folder again.",
  },
  booking: {
    title: "Booking Management",
    description:
      "Track every reservation from confirmed to travelled, with automatic customer confirmations and a shared view of your travel schedule.",
  },
};


const howItWorks = [
  {
    step: "01",
    title: "Capture the enquiry",
    description:
      "Log every customer enquiry and conversation straight into the CRM as it comes in.",
  },
  {
    step: "02",
    title: "Match a package",
    description:
      "Recommend and customize a tour package around what the customer actually wants.",
  },
  {
    step: "03",
    title: "Generate the plan",
    description:
      "Produce an AI-drafted itinerary and a priced quotation in the same pass.",
  },
  {
    step: "04",
    title: "Confirm the booking",
    description:
      "Once they're in, the invoice and receipt are generated automatically.",
  },
  {
    step: "05",
    title: "Track the business",
    description:
      "Follow payments, customer activity, and performance from one dashboard.",
  },
];

function TravelCrmPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const closeInquiryModal = () => setIsInquiryOpen(false);

  return (
    <main className="bg-[#ffffff] pt-24 md:pt-12 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#ffffff] px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        {/* Modern Background Accents */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[250px] w-full max-w-7xl bg-gradient-to-tr from-primary/5 via-primary-container/10 to-transparent blur-3xl opacity-70 sm:h-[320px] md:h-[400px]" />

        <div className="mx-auto max-w-5xl text-center">
          {/* Refined Modern Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-wider text-on-secondary-container backdrop-blur-sm border border-secondary-container/30 shadow-sm transition-all duration-300 hover:bg-secondary-container sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
            <span className="text-balance">Travel CRM & Tour Operations</span>
          </span>

          {/* Stronger, Cleaner Typographic Hierarchy */}
          <h1 className="mt-6 font-headline text-5xl font-extrabold tracking-tight text-on-surface leading-[1.2] xs:text-4xl sm:mt-8 sm:text-5xl sm:leading-[1.15] md:text-6xl lg:text-7xl">
            <span className="block text-balance">Travel Agency CRM for</span>
            <span className="mt-1 block sm:mt-2">
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary-container bg-clip-text text-transparent drop-shadow-sm">
                Maldives Tour Operators
              </span>{" "}
              <span className="text-on-surface">& DMCs</span>
            </span>
          </h1>

          {/* Optimized Description Reading Width */}
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant font-medium xs:max-w-sm sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
            Built for travel agencies, tour operators and DMCs selling the
            Maldives. Customer relationships, tour packages, quotations,
            invoicing and finances in one AI-powered CRM — not a generic sales
            tool with travel bolted on.
          </p>

          {/* Premium Split-Action Controller */}
          <div className="mt-8 inline-flex w-full max-w-xs flex-col items-center justify-center gap-2.5 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:bg-surface-container-low/60 sm:p-2 sm:rounded-full sm:border sm:border-surface-variant/30 sm:backdrop-blur-md">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[180px] flex items-center justify-center gap-2 rounded-full shadow-md shadow-primary/5 bg-gradient-to-br from-primary to-primary-container px-6 py-3 font-bold text-on-primary transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:py-3.5"
            >
              <span className="material-symbols-outlined text-xl leading-none">chat</span>
              Book a Free Demo
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto sm:min-w-[180px] rounded-full px-6 py-3 text-center text-sm font-bold text-on-surface transition-all duration-200 hover:bg-surface-container-high hover:text-primary active:scale-[0.98] sm:py-3.5 md:text-base"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {isInquiryOpen ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 md:p-8">
            <InquiryForm
              topic="Travel CRM"
              ctaLabel="Submit Inquiry"
              onSuccess={closeInquiryModal}
              onClose={closeInquiryModal}
              showCloseButton
            />
          </div>
        </div>
      ) : null}

      {/* ------------------------------------------------------------ */}
      {/* Who is it for                                                  */}
      {/* ------------------------------------------------------------ */}
      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-6 md:px-8">
        {/* HEADER */}
        <div className="relative mb-6 md:mb-12 w-full py-8 sm:py-10 overflow-visible md:py-12">
          {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 select-none font-headline font-black text-[5rem] tracking-tighter leading-none text-primary-container/[0.18] dark:text-white/[0.01] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-12 md:text-[12rem] lg:top-11 lg:text-[12rem]">
            BUILT FOR
          </div>

          {/* Main Content Layout Container */}
          <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
            {/* Minimalist Category Kicker */}
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
              Built For
            </span>

            {/* Headline */}
            <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-7xl dark:text-white">
              Every Kind of Travel Business
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="group flex items-center gap-3 rounded-full border border-slate-200 bg-surface-container-lowest pl-2 pr-5 py-2 text-sm font-semibold text-on-surface shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:scale-[1.02] cursor-pointer"
            >
              {/* Premium Circular Thumbnail */}
              <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-slate-100 shadow-inner">
                <img
                  src={a.image}
                  alt={a.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Label Text */}
              <span className="tracking-wide">{a.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Challenges we solve                                            */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-surface/50 px-6 py-20 md:py-28 md:px-8 relative overflow-hidden">
        {/* Fine architectural geometric alignment line */}
        <div className="absolute top-0 bottom-0 left-[max(2rem,calc(50%-36rem))] w-px bg-slate-200/50 hidden xl:block" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Bold Header & Primary Focus Callout */}
            <div className="lg:col-span-5 sticky top-8">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                The Problem
              </span>
              <h2 className="mt-6 mb-6 font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Running a Travel Business Shouldn't Mean Ten Open Tabs
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed mb-8">
                Spreadsheets, fragmented email threads, and disconnected tools
                scale back your team's velocity. We engineer order out of the
                chaos.
              </p>

              {/* Featured Card Showcase */}
              {challenges.length > 0 && (
                <div className="hidden lg:block relative rounded-2xl bg-gradient-to-br from-primary to-primary-container p-8 text-white shadow-xl overflow-hidden group">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl transition-all duration-500 group-hover:bg-primary/40" />
                  <span className="material-symbols-outlined mb-4 text-3xl text-white">
                    {challenges[0].icon}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-white tracking-tight">
                    {challenges[0].title}
                  </h3>
                  <p className="text-sm text-slate-50 leading-relaxed">
                    {challenges[0].description}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Stacked Interactive Timeline/List Structure */}
            <div className="lg:col-span-7 space-y-4">
              {/* If utilizing the featured layout above, you can skip index 0 on desktop, or map all for a unified list */}
              {challenges.map((c, idx) => (
                <div
                  key={c.title}
                  className="group flex flex-col sm:flex-row items-start gap-6 rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-slate-200 hover:shadow-lg "
                >
                  {/* Minimal Indexing Circle */}
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 font-mono text-sm font-bold text-slate-400 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-transparent">
                    <span className="material-symbols-outlined text-xl group-hover:hidden">
                      {c.icon}
                    </span>
                    <span className="hidden group-hover:inline font-mono text-xs">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Core Content */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-primary">
                      {c.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant/90">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Core feature bento grid                                       */}
      {/* ------------------------------------------------------------ */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 md:px-8 md:pb-24">
        {/* HEADER */}
        <div className="relative mb-6 md:mb-12 w-full py-8 sm:py-10 overflow-visible md:py-12">
          {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none font-headline font-black text-[5.5rem] tracking-tighter leading-none text-primary-container/[0.14] dark:text-white/[0.01] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-12 md:text-[12rem] lg:top-4 lg:text-[14rem]">
            RUNS ON
          </div>

          {/* Main Content Layout Container */}
          <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
            {/* Minimalist Category Kicker */}
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
              All-in-One Platform
            </span>

            {/* Headline */}
            <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-7xl dark:text-white">
              Everything a Travel Business Runs On
            </h2>

            {/* Editorial Description */}
            <p className="mt-8 sm:mt-10 max-w-xl text-balance text-base font-light font-body leading-relaxed tracking-wide text-on-surface-variant sm:text-lg md:text-xl dark:text-zinc-400">
              CRM, packages, quotations, invoicing, and finance — connected, not
              cobbled together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-12">
          {/* Enquiry-to-Booking Pipeline — full width on mobile */}
          <div className="glass-card group border relative overflow-hidden rounded-xl p-8 sm:p-8 md:p-10 md:col-span-8">
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl text-primary">
                query_stats
              </span>
              <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold tracking-tight">
                Enquiry-to-Booking Pipeline
              </h3>
              <p className="mb-6 md:mb-8 max-w-md text-sm md:text-base text-on-surface-variant">
                See every lead and enquiry in one view. Drag customers through
                custom stages — from first message to confirmed booking — and
                keep a full history of every conversation.
              </p>
              <div className="mt-6 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 p-4 md:p-8">
                {/* Column 1: 3D Fanned Stack */}
                <div className="relative group">
                  <span className="mb-4 md:mb-6 block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Enquiry Stack
                  </span>
                  <div className="relative h-40 md:h-48 w-full">
                    <div className="absolute inset-0 translate-x-4 translate-y-2 rotate-3 rounded-2xl border border-slate-200 bg-slate-100/50 shadow-sm transition-transform group-hover:rotate-6" />
                    <div className="absolute inset-0 translate-x-2 translate-y-1 rotate-1 rounded-2xl border border-slate-200 bg-slate-50 shadow-md transition-transform group-hover:rotate-3" />
                    <div className="absolute inset-0 rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-xl transition-transform group-hover:-translate-y-2">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            <h4 className="text-[12px] md:text-[13px] font-bold text-slate-900">
                              Kandy Family Tour
                            </h4>
                          </div>
                          <p className="mt-2 text-[10px] md:text-[11px] text-slate-500 leading-relaxed">
                            6-day cultural package, 4 travelers.
                          </p>
                        </div>
                        <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                          <span className="text-[9px] md:text-[10px] font-mono text-slate-400">
                            #ENQ-2026
                          </span>
                          <div className="text-[9px] md:text-[10px] font-bold bg-slate-900 text-white px-2 py-1 rounded">
                            New
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Floating Quotation Slot */}
                <div className="flex flex-col justify-center items-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-4 md:p-6">
                  <div className="relative">
                    <div className="h-14 w-10 md:h-16 md:w-12 rounded border border-slate-300 bg-white shadow-2xl rotate-12 origin-bottom-right opacity-40" />
                    <div className="absolute inset-0 h-14 w-10 md:h-16 md:w-12 rounded border border-slate-300 bg-white shadow-lg -rotate-6" />
                  </div>
                  <span className="mt-4 md:mt-6 text-[10px] md:text-[11px] font-medium text-slate-400">
                    Drop Quotation Here
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 h-80 w-80 bg-primary-fixed/20 blur-[100px] transition-colors group-hover:bg-primary-fixed/30" />
          </div>

          {/* Finance & Invoicing */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 sm:p-8 md:p-10 text-on-secondary md:col-span-4">
            <span className="material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl">
              credit_score
            </span>
            <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold tracking-tight">
              Finance &amp; Invoicing
            </h3>
            <p className="text-sm leading-relaxed text-white/90">
              Invoices and receipts generate automatically from booking data.
              Income, expenses, and payments roll up into reports without a
              spreadsheet in sight.
            </p>
            <div className="mt-8 md:mt-12 space-y-4">
              <div className="h-[2px] w-full bg-secondary-container/30">
                <div className="h-full w-[70%] bg-secondary-fixed" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest">
                70% of Invoices Collected
              </p>
            </div>
          </div>

          {/* Tour Package Management */}
          <div className="rounded-xl bg-surface-container-lowest p-8 sm:p-10 md:p-10 border shadow-[0_20px_40px_rgba(0,104,116,0.04)] md:col-span-4">
            <span className="material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl text-tertiary">
              luggage
            </span>
            <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-bold">
              {coreFeatureBlurbs.tourPackage.title}
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              {coreFeatureBlurbs.tourPackage.description}
            </p>
          </div>

          {/* Quotation Management */}
          <div className="rounded-xl bg-surface-container-lowest p-8 sm:p-10 md:p-10 border shadow-[0_20px_40px_rgba(0,104,116,0.04)] md:col-span-4">
            <span className="material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl text-secondary">
              request_quote
            </span>
            <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-bold">
              {coreFeatureBlurbs.quotation.title}
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              {coreFeatureBlurbs.quotation.description}
            </p>
          </div>

          {/* Document Management */}
          <div className="rounded-xl bg-surface-container-lowest p-8 sm:p-10 md:p-10 border shadow-[0_20px_40px_rgba(0,104,116,0.04)] md:col-span-4">
            <span className="material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl text-primary">
              folder_managed
            </span>
            <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-bold">
              {coreFeatureBlurbs.documents.title}
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              {coreFeatureBlurbs.documents.description}
            </p>
          </div>

          {/* AI Itinerary Creation */}
          <div className="flex flex-col gap-6 md:gap-10 overflow-hidden border rounded-xl bg-white p-6 sm:p-8 md:p-10 md:col-span-8 md:flex-row md:items-center">
            <div className="flex-1">
              <span className="material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl text-secondary">
                map
              </span>
              <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold tracking-tight">
                AI-Powered Itinerary Generator
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-on-surface-variant">
                Turn a package and a customer preference into a full, day-by-day
                itinerary in minutes — then drag, drop, and edit until it's
                exactly right, ready to export as a client-ready document.
              </p>
            </div>
            <div className="relative w-full flex-1">
              <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05),_inset_0_-4px_8px_rgba(0,0,0,0.05)]">
                {/* Activity Item 1 */}
                <div className="group mb-3 md:mb-4 flex items-center gap-3 md:gap-4 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-secondary text-white shadow-lg shadow-black/20 shrink-0">
                    <span className="material-symbols-outlined text-[18px] md:text-[20px]">
                      flight_takeoff
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Day 1
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-slate-800">
                      Arrival &amp; Airport Transfer
                    </span>
                  </div>
                </div>

                {/* Activity Item 2 */}
                <div className="group mb-4 md:mb-6 flex items-center gap-3 md:gap-4 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-amber-500/20 shrink-0">
                    <span className="material-symbols-outlined text-[18px] md:text-[20px]">
                      tour
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Day 2
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-slate-800">
                      Guided City Tour
                    </span>
                  </div>
                </div>

                {/* Add Button */}
                <button className="group flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 py-4 md:py-6 transition-all hover:border-slate-400 hover:bg-white">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-slate-600">
                      add
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Add Activity
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Booking Management */}
          <div className="rounded-xl bg-surface-container-lowest p-8 sm:p-10 md:p-10 border shadow-[0_20px_40px_rgba(0,104,116,0.04)] md:col-span-4">
            <span className="material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl text-tertiary">
              event_available
            </span>
            <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-bold">
              {coreFeatureBlurbs.booking.title}
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              {coreFeatureBlurbs.booking.description}
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Dashboard mockup (recontent to agency operations)             */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-[#ffffff] px-6 py-24 md:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 md:mb-16 max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
              Dashboard
            </span>
            <h2 className="mt-3 mb-4 font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Your Whole Business, One Screen
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Sales, bookings, and follow-ups — updated the moment they happen.
            </p>
          </div>

          {/* 3D Perspective Wrapper */}
          <div className="relative mx-auto w-full max-w-[1024px] [perspective:2000px]">
            {/* Physical iPad Hardware Chassis */}
            <div className="relative rounded-[2rem] md:rounded-[3.5rem] border-[1px] border-slate-500/30 bg-[#121212] p-[8px] md:p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] [transform:rotateX(8deg)_rotateY(-4deg)_rotateZ(1deg)] transition-transform duration-700 hover:rotate-0">
              {/* Physical Hardware Buttons */}
              <div className="absolute -right-[2px] top-32 h-16 w-[3px] rounded-l-sm bg-slate-700" />
              <div className="absolute -right-[2px] top-52 h-16 w-[3px] rounded-l-sm bg-slate-700" />

              {/* The Screen Bezel */}
              <div className="relative overflow-hidden rounded-[1.6rem] md:rounded-[2.8rem] bg-[#050505] p-2 md:p-4 ring-1 ring-inset ring-white/10 shadow-inner">
                {/* Glass Reflection Overlay */}
                <div className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40" />

                {/* Front Camera Lens */}
                <div className="absolute left-1/2 top-3 md:top-5 z-50 h-2 w-2 md:h-3 md:w-3 -translate-x-1/2 rounded-full bg-[#1a1a1a] ring-1 ring-white/5">
                  <div className="mx-auto mt-0.5 md:mt-1 h-1 w-1 rounded-full bg-blue-900/40" />
                </div>

                {/* INTERNAL SCREEN: CRM DASHBOARD */}
                <div className="relative overflow-hidden rounded-[1.2rem] md:rounded-[2.2rem] bg-surface-container-lowest min-h-[420px] md:min-h-[600px]">
                  <div className="flex h-full min-h-[420px] md:min-h-[600px]">
                    {/* Ultra-Modern Vertical Nav */}
                    <div className="flex w-12 md:w-20 flex-col items-center gap-4 md:gap-8 bg-white border-r border-slate-100 py-6 md:py-10">
                      <div className="mb-2 md:mb-4 flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-sm md:text-xl">
                          flight
                        </span>
                      </div>
                      <span
                        className="material-symbols-outlined text-base md:text-[24px] text-primary cursor-pointer"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        dashboard
                      </span>
                      <span className="material-symbols-outlined text-base md:text-[24px] text-slate-400 hover:text-primary cursor-pointer">
                        groups
                      </span>
                      <span className="material-symbols-outlined text-base md:text-[24px] text-slate-400 hover:text-primary cursor-pointer">
                        luggage
                      </span>
                      <span className="material-symbols-outlined text-base md:text-[24px] text-slate-400 hover:text-primary cursor-pointer">
                        receipt_long
                      </span>
                      <div className="mt-auto">
                        <span className="material-symbols-outlined text-base md:text-[24px] text-slate-400 cursor-pointer">
                          settings
                        </span>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-4 md:p-10 bg-[#fbfcfd] overflow-y-auto">
                      {/* Header */}
                      <div className="mb-5 md:mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                          <h4 className="text-base md:text-2xl font-black tracking-tight text-slate-900">
                            Agency Overview
                          </h4>
                          <p className="text-[10px] md:text-sm font-medium text-slate-500">
                            Today's business at a glance
                          </p>
                        </div>
                        <div className="flex gap-2 md:gap-4">
                          <div className="flex h-8 md:h-11 items-center gap-1 md:gap-2 rounded-lg md:rounded-xl border border-slate-200 bg-white px-3 md:px-5 text-[10px] md:text-xs font-bold text-slate-600 shadow-sm">
                            <span className="material-symbols-outlined text-sm md:text-lg">
                              calendar_today
                            </span>
                            Today
                          </div>
                          <div className="flex h-8 md:h-11 items-center rounded-lg md:rounded-xl bg-primary px-3 md:px-6 text-[10px] md:text-xs font-bold text-white shadow-xl shadow-primary/20">
                            + New Quotation
                          </div>
                        </div>
                      </div>

                      {/* Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                        {/* Revenue Card */}
                        <div className="md:col-span-4 rounded-2xl md:rounded-3xl bg-white p-5 md:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                          <p className="mb-1 md:mb-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
                            Today's Sales
                          </p>
                          <p className="text-xl md:text-3xl font-black text-slate-900">
                            $2,840
                            <span className="text-xs md:text-sm font-bold text-slate-400">
                              .00
                            </span>
                          </p>
                          <div className="mt-4 md:mt-6 flex h-14 md:h-20 items-end gap-1 md:gap-1.5">
                            {[40, 65, 45, 90, 55, 80, 95].map((h, i) => (
                              <div
                                key={i}
                                className={`flex-1 rounded-t-md transition-all ${i === 6 ? "bg-primary shadow-[0_-4px_10px_rgba(var(--primary-rgb),0.3)]" : "bg-slate-100"}`}
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                          <p className="mt-3 md:mt-4 text-[9px] md:text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">
                              trending_up
                            </span>{" "}
                            +12% vs last week
                          </p>
                        </div>

                        {/* Operational Follow-ups Card */}
                        <div className="md:col-span-8 rounded-2xl md:rounded-3xl bg-white p-5 md:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                          <p className="mb-4 md:mb-6 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
                            Needs Your Attention
                          </p>
                          <div className="space-y-4 md:space-y-6">
                            {/* Entry 1 */}
                            <div className="flex items-center justify-between border-b border-slate-50 pb-4 md:pb-5">
                              <div className="flex items-center gap-3 md:gap-4">
                                <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-xl md:rounded-2xl bg-amber-50 text-amber-600">
                                  <span className="material-symbols-outlined text-base md:text-xl">
                                    request_quote
                                  </span>
                                </div>
                                <div>
                                  <span className="block text-[10px] md:text-xs font-black text-slate-900">
                                    Quotation Sent • European Grand Tour
                                  </span>
                                  <span className="text-[9px] md:text-[10px] font-medium text-slate-500">
                                    Awaiting customer response
                                  </span>
                                </div>
                              </div>
                              <span className="text-[9px] md:text-[10px] font-black bg-amber-100 text-amber-700 px-2 md:px-3 py-1 rounded-full uppercase tracking-tighter whitespace-nowrap">
                                Follow Up
                              </span>
                            </div>

                            {/* Entry 2 */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 md:gap-4">
                                <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-xl md:rounded-2xl bg-primary/5 text-primary">
                                  <span className="material-symbols-outlined text-base md:text-xl">
                                    receipt_long
                                  </span>
                                </div>
                                <div>
                                  <span className="block text-[10px] md:text-xs font-black text-slate-900">
                                    Invoice Due • Corporate Retreat, ABC Ltd.
                                  </span>
                                  <span className="text-[9px] md:text-[10px] font-medium text-slate-500">
                                    Balance due in 3 days
                                  </span>
                                </div>
                              </div>
                              <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-tighter tracking-widest whitespace-nowrap">
                                Pending
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Summary Footer Statistics */}
                        <div className="md:col-span-12 grid grid-cols-3 gap-2 md:gap-6 pt-1 md:pt-2">
                          <div className="flex items-center gap-2 md:gap-4 px-1 md:px-2">
                            <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-500 shrink-0" />
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">
                              Active Bookings: 42
                            </span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-4 px-1 md:px-2 border-x border-slate-100">
                            <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-primary shrink-0" />
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">
                              Quotations Pending: 08
                            </span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-4 px-1 md:px-2">
                            <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-amber-500 shrink-0" />
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">
                              Invoices Overdue: 02
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* iOS Home Indicator Bar */}
                  <div className="absolute bottom-2 left-1/2 h-1.5 w-24 md:w-32 -translate-x-1/2 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>

            {/* Surface Reflection (Floor Shadow) */}
            <div className="absolute -bottom-16 left-1/2 h-10 w-[85%] -translate-x-1/2 rounded-[100%] bg-slate-900/15 blur-[45px] -z-10" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* How it works                                                   */}
      {/* ------------------------------------------------------------ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 md:px-8 relative">
        {/* Header Section */}
        <div className="relative overflow-visible pt-8 pb-8 mb-16 border-b border-slate-200/60">
          {/* Giant Structural Background Typography */}
          <div className="pointer-events-none absolute -left-1 top-10 xs:-top-4 sm:-top-4 md:-top-0 lg:-left-2 lg:-top-4  select-none whitespace-nowrap font-headline font-black leading-none tracking-tighter text-primary-container/[0.16] text-[clamp(3rem,14vw,9rem)]">
            ROADMAP
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em] block mb-3">
                Execution Roadmap
              </span>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                From First Message to Paid Invoice
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-sm sm:text-base text-slate-500 max-w-sm">
              Our structured deployment framework ensuring speed, transparency,
              and perfection.
            </p>
          </div>
        </div>

        {/* Timeline Process Grid */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Connecting line for large screens */}
          <div className="hidden lg:block absolute top-[27px] left-6 right-6 h-[2px] bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 -z-10" />

          {howItWorks.map((s) => (
            <div key={s.step} className="group relative flex flex-col">
              {/* Timeline Node */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white font-headline text-base font-bold text-slate-600 shadow-sm transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:scale-110 group-hover:shadow-md">
                {s.step}
              </div>

              {/* Content Box */}
              <div className="mt-6 flex-1 rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-slate-100/70 group-hover:border-slate-200">
                <h3 className="mb-2 text-base font-bold text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageOutline path="/travel-crm" />

      <FAQSection
        items={getRouteFaq("/travel-crm")}
        title="Travel CRM FAQs"
        subtitle="Common questions about managing your travel business with Lushware's CRM"
      />

      <WhyChooseUs />

      <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24 mb-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
          <div
            className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-cover bg-center bg-no-repeat p-8 sm:p-12 md:p-16 lg:p-20"
            style={{ backgroundImage: `url('/cta.jpg')` }}
          >
            {/* Dark Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r
          from-slate-950/90 via-slate-950/85 to-slate-950/70
          lg:from-slate-950/90 lg:via-slate-950/40 lg:to-transparent"
            />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-3 lg:gap-12">
              {/* Content */}
              <div className="lg:col-span-2 max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-inset ring-white/30 backdrop-blur-md shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  <span>Travel Agency Management</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
                  Ready to Run Your Agency
                  <br className="hidden sm:block" />
                  From One Screen?
                </h2>

                <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
                  Manage customers, automate quotations and invoicing, and grow
                  your travel business with Lushware.
                </p>

                {/* Button */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 sm:justify-between overflow-hidden rounded-xl bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-primary/90 hover:shadow-[0_0_35px_rgba(0,112,243,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[240px]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">chat</span>
                      Book a Free Demo
                    </span>

                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>

                    <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-0" />
                  </a>

                  <Link
                    to="/contact"
                    className="group flex items-center justify-center gap-3 sm:justify-between rounded-xl border border-white/20 bg-slate-900/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-950 hover:border-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[220px]"
                  >
                    <span>Contact Sales</span>

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-slate-300 transition-all duration-300 group-hover:text-slate-950 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Empty right column to preserve image composition */}
              <div
                className="hidden lg:block lg:col-span-1 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TravelCrmPage;
