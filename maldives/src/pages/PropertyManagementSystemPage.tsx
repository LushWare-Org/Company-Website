import React from "react";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import { getRouteFaq } from "../data/faq";

// TODO: replace with the client's live WhatsApp Business number (international format, no + or spaces)
const WHATSAPP_NUMBER = "94716430053";
const WHATSAPP_MESSAGE =
  "Hi LushWare! I'm interested in your Property Management System for Travel Agencies. Could we book a free demo to see how it can work for my business?";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;


const audiences = [
  { icon: "confirmation_number", label: "Travel Agencies" },
  { icon: "travel_explore", label: "Destination Management Companies" },
  { icon: "hiking", label: "Tour Operators" },
  { icon: "apartment", label: "Property Management Companies" },
  { icon: "bungalow", label: "Resort & Guest House Operators" },
];

const challenges = [
  { icon: "event_busy", label: "Double bookings" },
  { icon: "edit_note", label: "Manual reservation management" },
  {
    icon: "calendar_month",
    label: "Difficulty tracking property availability",
  },
  { icon: "receipt_long", label: "Time-consuming financial management" },
  {
    icon: "visibility_off",
    label: "Poor visibility into business performance",
  },
  { icon: "hub", label: "Scattered customer and property information" },
];

const coreFeatures = [
  {
    icon: "villa",
    title: "Property Management",
    items: [
      "List resorts, hotels, guest houses, restaurants and rental properties",
      "Organize rooms and accommodation units",
      "Manage property information and availability",
    ],
  },
  {
    icon: "event_available",
    title: "Booking Management",
    items: [
      "Create and manage reservations",
      "Prevent double bookings",
      "Real-time booking updates",
      "Booking history and tracking",
    ],
  },
  {
    icon: "payments",
    title: "Finance Management",
    items: [
      "Income and expense tracking",
      "Payment management",
      "Financial reporting",
    ],
  },
  {
    icon: "dashboard",
    title: "Business Dashboard",
    items: [
      "Booking overview",
      "Revenue insights",
      "Occupancy and performance monitoring",
      "Key business statistics in one place",
    ],
  },
];

const steps = [
  {
    title: "Add your properties",
    description:
      "Bring your resorts, hotels, guest houses or rentals into the system.",
  },
  {
    title: "Set up availability",
    description: "Manage room availability and property details in one place.",
  },
  {
    title: "Take bookings",
    description:
      "Receive and manage reservations through a centralized dashboard.",
  },
  {
    title: "Track payments",
    description: "Monitor payments and financial performance as it happens.",
  },
  {
    title: "Monitor performance",
    description: "Follow your business with real-time reports and analytics.",
  },
];

const whyChooseUs = [
  { icon: "cloud_done", label: "Cloud-based platform" },
  { icon: "location_on", label: "Optimized for Maldivian businesses" },
  { icon: "touch_app", label: "Easy-to-use interface" },
  { icon: "hub", label: "Centralized operations" },
  { icon: "lock", label: "Secure data management" },
  { icon: "flight", label: "Designed for tourism businesses" },
  { icon: "trending_up", label: "Scalable as your business grows" },
];

const occupancyBars = [80, 90, 40, 95, 85, 100, 98];
const occupancyDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function WhatsAppButton({
  children,
  className = "",
  variant = "solid",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm sm:text-base font-bold transition-all active:scale-95";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_10px_20px_rgba(0,104,116,0.15)] hover:scale-105"
      : "border-2 border-primary text-primary hover:bg-surface-container-high hover:scale-105";
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <span className="material-symbols-outlined text-xl leading-none">
        chat
      </span>
      {children}
    </a>
  );
}

function PropertyManagementSystemPage() {
  return (
    <main className="bg-[#ffffff] pb-24 md:pt-12 pt-24 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-[#ffffff] px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        {/* Modern Background Accents */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[250px] w-full max-w-7xl bg-gradient-to-tr from-primary/5 via-primary-container/10 to-transparent blur-3xl opacity-70 sm:h-[320px] md:h-[400px]" />

        <div className="mx-auto max-w-5xl text-center">
          {/* Refined Modern Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-wider text-on-secondary-container backdrop-blur-sm border border-secondary-container/30 shadow-sm transition-all duration-300 hover:bg-secondary-container sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
            <span className="text-balance">
              Built for Travel Agencies & DMCs
            </span>
          </span>

          {/* Stronger, Cleaner Typographic Hierarchy */}
          <h1 className="mt-6 font-headline text-5xl font-extrabold tracking-tight text-on-surface leading-[1.2] xs:text-4xl sm:mt-8 sm:text-5xl sm:leading-[1.15] md:text-6xl lg:text-7xl">
            <span className="block text-balance">
              Property Management System for
            </span>
            <span className="mt-1 block bg-gradient-to-r from-primary via-primary/90 to-primary-container bg-clip-text text-transparent drop-shadow-sm py-1 sm:mt-2">
              Travel Agencies
            </span>
          </h1>

          {/* Optimized Description Reading Width */}
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant font-medium xs:max-w-sm sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
            Manage properties, bookings, finances and daily operations from one
            cloud-based platform — built for the way Maldivian tourism
            businesses actually work.
          </p>

          {/* Premium Split-Action Controller */}
          <div className="mt-8 inline-flex w-full max-w-xs flex-col items-center justify-center gap-2.5 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:bg-surface-container-low/60 sm:p-2 sm:rounded-full sm:border sm:border-surface-variant/30 sm:backdrop-blur-md">
            <WhatsAppButton className="w-full sm:w-auto sm:min-w-[180px] rounded-full shadow-md shadow-primary/5 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              Book a Demo
            </WhatsAppButton>

            <a
              href="#features"
              className="w-full sm:w-auto sm:min-w-[180px] rounded-full px-6 py-3 text-center text-sm font-bold text-on-surface transition-all duration-200 hover:bg-surface-container-high hover:text-primary active:scale-[0.98] sm:py-3.5 md:text-base"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHO IS IT FOR */}
      <section className="bg-[#ffffff] px-6 py-14 sm:py-16 md:py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="relative mb-6 md:mb-12 w-full py-8 sm:py-10 overflow-visible md:py-12">
            {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 select-none font-headline font-black text-[5rem] tracking-tighter leading-none text-primary-container/[0.14] dark:text-white/[0.01] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-12 md:text-[12rem] lg:top-4 lg:text-[14rem]">
              MALDIVES
            </div>

            {/* Main Content Layout Container */}
            <div className="relative z-10 mx-auto max-w-6xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
              {/* Minimalist Category Kicker */}
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
                Who It's For
              </span>

              {/* Headline */}
              <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-7xl dark:text-white">
                Built for the businesses that run Maldivian tourism
              </h2>

              {/* Editorial Description */}
              <p className="mt-8 sm:mt-10 max-w-3xl text-balance text-base font-light font-body leading-relaxed tracking-wide text-on-surface-variant sm:text-lg md:text-xl dark:text-zinc-400">
                One platform for every team that manages guests, properties and
                bookings across the islands.
              </p>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-2 border-t border-l border-slate-200/60 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {audiences.map((item) => (
              <div
                key={item.label}
                className="group relative flex  flex-col justify-between bg-white p-6 min-h-[160px] border-r border-b border-slate-200/60 transition-all duration-300 ease-in-out hover:bg-slate-50/30"
              >
                {/* 4-Corner High-Tech Framing Brackets (Revealed on Hover) */}
                <div className="pointer-events-none rounded-md absolute inset-0 border border-primary scale-95 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />

                {/* Top Utility Layer */}
                <div className="relative z-10 flex w-full items-start justify-between">
                  <div className="text-[#1F8FA0] transition-colors duration-300 group-hover:text-primary">
                    <span className="material-symbols-outlined text-[44px] transition-transform duration-300 group-hover:scale-105">
                      {item.icon}
                    </span>
                  </div>

                  {/* Modern Corporate Interactive Indicator */}
                  <span className="material-symbols-outlined text-sm font-bold text-slate-300 opacity-0 transition-all duration-300 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-primary">
                    north_east
                  </span>
                </div>

                {/* Bottom Typographic Content */}
                <div className="relative z-10 mt-auto pt-8">
                  <h4 className="text-[14px] font-bold tracking-tight text-on-surface leading-snug transition-colors duration-200 group-hover:text-primary">
                    {item.label}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE CHALLENGES WE SOLVE */}
      <section className="bg-[#ffffff] px-6 py-14 sm:py-16 md:py-20 mb-12  md:px-24">
        <div className="mx-auto max-w-8xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-3 block font-label text-xs font-black uppercase tracking-[0.3em] text-primary">
                The Problem
              </span>
              <h2 className="mb-5 font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
                Spreadsheets and WhatsApp chats weren't built to run a portfolio
              </h2>
              <p className="mb-8 text-base text-on-surface-variant sm:text-lg">
                Many travel agencies still rely on spreadsheets, WhatsApp
                messages, emails and disconnected systems to run their
                properties. That leads to:
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {challenges.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 rounded-full border border-primary/10 bg-white px-4 py-3.5"
                  >
                    <span className="material-symbols-outlined shrink-0 text-lg text-primary">
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold text-on-surface">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex min-h-[400px] w-full items-stretch justify-center lg:min-h-full">
              <div className="relative w-full overflow-hidden ">
                <div className="h-full w-full overflow-hidden rounded-md">
                  <img
                    src="/prm.jpg"
                    alt="Premium Portfolio Management Visual"
                    className="h-full w-full object-cover object-center "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SOLUTION */}
      <section className="bg-primary px-6 py-14 sm:py-16 md:py-20 md:px-8">
        {/* HEADER */}
        <div className="relative mb-6 md:mb-12 w-full py-8 sm:py-10 overflow-visible md:py-12">
          {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none font-headline font-black text-[5.5rem] tracking-tighter leading-none text-white/[0.15] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-12 md:text-[12rem] lg:top-4 lg:text-[14rem]">
            CLOUD
          </div>

          {/* Main Content Layout Container */}
          <div className="relative z-10 mx-auto max-w-6xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
            {/* Minimalist Category Kicker */}
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-white sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
              Our Solution
            </span>

            {/* Headline */}
            <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-white sm:text-6xl md:text-8xl lg:text-7xl">
              One cloud-based platform for your entire operation
            </h2>

            {/* Editorial Description */}
            <p className="mt-8 sm:mt-10 max-w-6xl text-balance text-base font-light font-body leading-relaxed tracking-wide text-white/70 sm:text-lg md:text-xl">
              Manage your properties, handle bookings, monitor finances and
              track business performance through an intuitive dashboard —
              accessible anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard mockup — visual proof of the centralized platform */}
      <section className="bg-surface px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="relative mx-auto w-full max-w-[1000px] [perspective:2000px]">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] border-[1px] border-slate-500/30 bg-[#121212] p-[8px] sm:p-[10px] lg:p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4),0_20px_40px_-15px_rgba(0,0,0,0.3)] lg:[transform:rotateX(10deg)_rotateY(-5deg)_rotateZ(1deg)] transition-transform duration-700 hover:rotate-0">
              <div className="hidden sm:block absolute -right-[2px] top-32 h-16 w-[3px] rounded-l-sm bg-slate-700" />
              <div className="hidden sm:block absolute -right-[2px] top-52 h-16 w-[3px] rounded-l-sm bg-slate-700" />
              <div className="hidden sm:block absolute right-20 -top-[2px] h-[3px] w-12 rounded-b-sm bg-slate-700" />

              <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.8rem] bg-[#050505] p-2 sm:p-3 lg:p-4 ring-1 ring-inset ring-white/10 shadow-inner">
                <div className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-60" />
                <div className="absolute left-1/2 top-3 sm:top-4 lg:top-5 z-50 h-2 w-2 sm:h-3 sm:w-3 -translate-x-1/2 rounded-full bg-[#1a1a1a] ring-1 ring-white/5">
                  <div className="mx-auto mt-0.5 sm:mt-1 h-1 w-1 rounded-full bg-blue-900/40 shadow-[0_0_2px_rgba(0,0,255,0.5)]" />
                </div>

                <div className="overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem] bg-white shadow-2xl">
                  <div className="flex items-center justify-between border-b border-outline-variant/10 bg-surface-container-lowest px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-primary">
                        LUSHWARE{" "}
                        <span className="font-light text-on-surface-variant">
                          PMS
                        </span>
                      </div>
                      <div className="mx-1 sm:mx-2 h-4 w-px bg-outline-variant/50" />
                      <div className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                        Travel Agency Dashboard
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-6">
                      <span className="material-symbols-outlined text-base lg:text-lg text-on-surface-variant">
                        wifi
                      </span>
                      <span className="material-symbols-outlined text-base lg:text-lg text-emerald-500">
                        battery_full_alt
                      </span>
                      <div className="h-7 w-7 sm:h-9 sm:w-9 overflow-hidden rounded-full border-2 border-white ring-1 ring-primary/20 shadow-sm">
                        <img
                          alt="Operations Manager"
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12">
                    <aside className="col-span-3 bg-slate-50 p-3 sm:p-5 lg:p-8 min-h-[400px] sm:min-h-[480px] lg:min-h-[550px] border-r border-slate-100">
                      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 sm:mb-4">
                          Portfolio
                        </p>
                        {[
                          {
                            icon: "bungalow",
                            label: "Properties",
                            active: true,
                          },
                          { icon: "event_available", label: "Bookings" },
                          { icon: "payments", label: "Finance" },
                          { icon: "dashboard", label: "Dashboard" },
                          { icon: "groups", label: "Staff Access" },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 sm:gap-4 cursor-pointer transition-all hover:translate-x-1 ${item.active ? "text-primary" : "text-slate-500"}`}
                          >
                            <span className="material-symbols-outlined text-base sm:text-xl">
                              {item.icon}
                            </span>
                            <span className="hidden sm:block text-[9px] lg:text-[11px] font-bold uppercase tracking-wider">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </aside>

                    <main className="col-span-9 p-4 sm:p-6 lg:p-10 bg-white">
                      <div className="mb-5 sm:mb-7 lg:mb-10 flex items-end justify-between">
                        <div>
                          <h2 className="text-base sm:text-lg lg:text-2xl font-black text-slate-900 tracking-tight">
                            Portfolio Overview
                          </h2>
                          <p className="text-[9px] sm:text-xs text-slate-500">
                            All Properties • Live Briefing
                          </p>
                        </div>
                        <div className="flex gap-1 sm:gap-2 text-[9px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                          <span className="material-symbols-outlined text-xs sm:text-sm">
                            sync
                          </span>
                          <span className="hidden sm:inline">Live Sync</span>
                        </div>
                      </div>

                      <div className="mb-5 sm:mb-7 lg:mb-10 grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                        {[
                          {
                            label: "Revenue MTD",
                            value: "$48.2k",
                            badge: "+18.4% vs last month",
                            badgeColor: "text-emerald-600",
                          },
                          {
                            label: "Occupancy",
                            value: "94%",
                            badge: "42/45 Units Booked",
                            badgeColor: "text-primary",
                          },
                          {
                            label: "Open Bookings",
                            value: "12",
                            badge: "3 arriving today",
                            badgeColor: "text-error",
                          },
                        ].map((kpi, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-1 sm:gap-2 rounded-xl sm:rounded-2xl border border-slate-100 bg-white p-3 sm:p-5 lg:p-7 shadow-sm transition-all hover:shadow-md"
                          >
                            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                              {kpi.label}
                            </span>
                            <span className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-900">
                              {kpi.value}
                            </span>
                            <span
                              className={`text-[8px] sm:text-[11px] font-bold ${kpi.badgeColor} flex items-center gap-1`}
                            >
                              {i === 0 && (
                                <span className="material-symbols-outlined text-xs sm:text-sm">
                                  trending_up
                                </span>
                              )}
                              <span className="hidden sm:inline">
                                {kpi.badge}
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-2xl lg:rounded-3xl border border-slate-100 bg-slate-50/50 p-4 sm:p-6 lg:p-8">
                        <div className="mb-5 sm:mb-7 lg:mb-10 flex items-center justify-between">
                          <div>
                            <h4 className="text-[10px] sm:text-sm font-black uppercase tracking-widest text-slate-900">
                              Booking Activity
                            </h4>
                            <p className="hidden sm:block text-[10px] text-slate-500">
                              Reservations by day
                            </p>
                          </div>
                          <select className="rounded-lg sm:rounded-xl border border-slate-200 bg-white px-2 sm:px-4 py-1 sm:py-2 text-[8px] sm:text-[10px] font-black uppercase tracking-widest outline-none">
                            <option>This Week</option>
                            <option>Peak Season</option>
                          </select>
                        </div>

                        <div className="flex h-28 sm:h-36 lg:h-44 items-end justify-between gap-1 sm:gap-2 lg:gap-4 px-1 sm:px-2 lg:px-4">
                          {occupancyBars.map((value, index) => (
                            <div
                              key={index}
                              className="group relative h-full flex-1"
                            >
                              <div className="relative h-full w-full rounded-full bg-slate-200/50 transition-all duration-300 group-hover:bg-slate-200">
                                <div
                                  className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-primary to-primary-container shadow-lg transition-all duration-700"
                                  style={{ height: `${value}%` }}
                                >
                                  <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 scale-0 rounded bg-slate-900 px-1 sm:px-2 py-0.5 sm:py-1 text-[7px] sm:text-[8px] text-white transition-all group-hover:scale-100">
                                    {value}%
                                  </div>
                                </div>
                              </div>
                              <span className="absolute -bottom-5 sm:-bottom-8 left-1/2 -translate-x-1/2 text-[7px] sm:text-[9px] font-black uppercase tracking-tighter text-slate-400">
                                {occupancyDays[index]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </main>
                  </div>

                  <div className="mx-auto mb-1.5 sm:mb-2 h-1 sm:h-1.5 w-20 sm:w-32 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-16 left-1/2 h-10 w-[85%] -translate-x-1/2 rounded-[100%] bg-slate-900/15 blur-[40px] -z-10" />
          </div>
        </div>
      </section>

      {/* 5. CORE FEATURES */}
      <section
        id="features"
        className="bg-[#ffffff] px-6 py-14 sm:py-16 md:py-20 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="relative mb-6 md:mb-12 w-full py-8 sm:py-10 overflow-visible md:py-12">
            {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none font-headline font-black text-[5.5rem] tracking-tighter leading-none text-primary-container/[0.14] dark:text-white/[0.01] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-12 md:text-[12rem] lg:top-4 lg:text-[14rem]">
              FEATURES
            </div>

            {/* Main Content Layout Container */}
            <div className="relative z-10 mx-auto max-w-6xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
              {/* Minimalist Category Kicker */}
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
                Core Features
              </span>

              {/* Headline */}
              <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-7xl dark:text-white">
                Everything your operation needs, in one place
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-outline-variant/40 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-md"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-outline-variant/30 bg-surface transition-colors duration-300 group-hover:border-secondary/20">
                    <span className="material-symbols-outlined text-2xl text-secondary">
                      {feature.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-lg font-bold tracking-tight text-primary transition-colors duration-300 group-hover:text-secondary">
                    {feature.title}
                  </h3>

                  {/* Feature List */}
                  <ul className="space-y-3">
                    {feature.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined mt-0.5 text-base text-secondary">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step Number */}
                <div className="mt-8 text-right font-mono text-xs font-bold text-outline-variant/50 transition-colors duration-300 group-hover:text-secondary/50 select-none">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 py-20 sm:px-6 md:px-8 md:py-32">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--primary-rgb,15,23,42),0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--primary-rgb,15,23,42),0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Side */}
          <div className="space-y-6 lg:sticky lg:top-28 lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline">
              How It Works
            </span>

            <h2 className="font-headline text-3xl font-black tracking-tight text-primary sm:text-4xl md:text-5xl leading-[1.15]">
              From Setup <br className="hidden lg:block" />
              to Insight
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-on-surface-variant/70 md:text-base">
              Get started in minutes. Configure your workspace, connect your
              data, automate workflows, and gain actionable insights through one
              seamless platform.
            </p>

            {/* Metric */}
            <div className="hidden max-w-xs items-center gap-1.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest/50 p-4 shadow-sm backdrop-blur-sm lg:flex">
              <div className="flex -space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-surface-container-lowest bg-primary font-mono text-[8px] font-bold text-white shadow-sm"
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <span className="pl-2 text-[11px] font-medium text-on-surface-variant/80">
                5-Step Guided Process
              </span>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="relative lg:col-span-8">
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary/30 via-outline-variant/30 to-transparent" />

            <div className="relative z-10 space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative flex items-start gap-6 rounded-2xl p-2 transition-all duration-300 hover:bg-primary/[0.01]"
                >
                  {/* Number */}
                  <div className="relative mt-1 shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-outline-variant/80 bg-surface-container-lowest font-mono text-xs font-bold text-primary shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="absolute left-1/2 top-1/2 -z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest/80 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all duration-300 group-hover:border-outline-variant/60 group-hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)]">
                    <div className="mb-2.5 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <h3 className="text-base font-bold tracking-tight text-primary sm:text-lg">
                        {step.title}
                      </h3>

                      <span className="inline-flex w-fit self-start rounded border border-primary/5 bg-primary/[0.03] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary/80 transition-colors duration-300 group-hover:bg-primary/5 group-hover:text-primary">
                        Step {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-xs font-normal leading-relaxed text-on-surface-variant/80 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE OUR PMS */}
      <section className="bg-[#ffffff] px-6 py-14 sm:py-16 md:py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="relative mb-6 md:mb-12 w-full py-8 sm:py-10 overflow-visible md:py-12">
            {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none font-headline font-black text-[5.5rem] tracking-tighter leading-none text-primary-container/[0.14] dark:text-white/[0.01] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-12 md:text-[12rem] lg:top-4 lg:text-[14rem]">
              WHY US
            </div>

            {/* Main Content Layout Container */}
            <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
              {/* Minimalist Category Kicker */}
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
                Why Choose Us
              </span>

              {/* Headline */}
              <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-7xl dark:text-white">
                Why Choose Our Property Management System?
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.label}
                className="group relative flex flex-col justify-between bg-white p-7 min-h-[160px] transition-all duration-300 ease-out hover:z-10"
              >
                {/* The Apple-style ambient backdrop plate that materializes on hover */}
                <div className="absolute inset-[4px] rounded-2xl bg-slate-50 border border-slate-100/70 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-[1.01]" />

                {/* Top Section: High-contrast horizontal structural track */}
                <div className="relative z-10 flex w-full items-start justify-between">
                  {/* Clean, unboxed icon — floats freely to maximize whitespace layout */}
                  <div className="text-slate-400 transition-colors duration-300 group-hover:text-primary">
                    <span className="material-symbols-outlined text-[34px] transition-transform duration-500 group-hover:rotate-6">
                      {item.icon}
                    </span>
                  </div>

                  {/* Elegant corporate tracking crosshair dot */}
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-4 group-hover:bg-primary" />
                </div>

                {/* Bottom Section: Left-aligned, high-density typographic unit */}
                <div className="relative z-10 mt-auto pt-6 text-left space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400">
                      System Node
                    </span>
                  </div>

                  <h4 className="text-[15px] font-bold tracking-tight text-on-surface leading-snug transition-transform duration-300 group-hover:translate-x-1">
                    {item.label}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQSection
        items={getRouteFaq("/real-estate-control")}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about the Property Management System"
      />

      {/* 10. FINAL CTA */}
      <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
          <div
            className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-cover bg-center bg-no-repeat p-8 sm:p-12 md:p-16 lg:p-20"
            style={{ backgroundImage: `url('/cta.jpg')` }}
          >
            {/* Overlay */}
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
                  <span>Property Management System</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
                  Ready to simplify your
                  <br className="hidden sm:block" />
                  property management?
                </h2>

                <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
                  Book a free demo and discover how our Property Management
                  System can help your travel business operate more efficiently.
                </p>

                {/* Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 sm:justify-between overflow-hidden rounded-xl bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-primary/90 hover:shadow-[0_0_35px_rgba(0,112,243,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[240px]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">
                        chat
                      </span>
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
                    <span>Contact Us</span>

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-slate-300 transition-all duration-300 group-hover:text-slate-950 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Empty column to preserve right-side composition */}
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

export default PropertyManagementSystemPage;
