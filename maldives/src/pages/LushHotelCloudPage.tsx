import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import { getRouteFaq } from "../data/faq";
import PageOutline from "../components/PageOutline";
import InquiryForm from "../components/InquiryForm";

// TODO: replace with the client's live WhatsApp Business number (international format, no + or spaces)
const WHATSAPP_NUMBER = "94716430053";
const WHATSAPP_MESSAGE =
  "Hi LushWare! I'm interested in your Guest House Management System. Could we book a free demo to see how it can help my property?";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const audiences = [
  "Guest Houses",
  "Boutique Hotels",
  "Bed & Breakfasts",
  "Small Hotels",
  "Holiday Villas",
  "Homestays",
  "Island Accommodation Providers",
];

const challengeTags = [
  "Manual reservation management",
  "Double bookings",
  "Room availability tracking",
  "Inefficient financial management",
  "Poor maintenance tracking",
  "Limited business visibility",
];

const benefits = [
  {
    title: "Eliminate Double Bookings",
    description:
      "Real-time room availability keeps every channel and every booking in sync.",
  },
  {
    title: "Save Time Through Automation",
    description:
      "Routine reservation, billing and reporting tasks run themselves in the background.",
  },
  {
    title: "Improve Guest Satisfaction",
    description:
      "Guest profiles and stay history help your team anticipate what returning guests want.",
  },
  {
    title: "Track Finances Accurately",
    description:
      "Invoicing, payments and expenses stay reconciled without a separate spreadsheet.",
  },
  {
    title: "Manage Maintenance Efficiently",
    description:
      "Tickets, assignments and repair history are tracked so nothing falls through the cracks.",
  },
  {
    title: "Decide With Real Data",
    description:
      "Occupancy, revenue and booking trends are always one glance away on your dashboard.",
  },
];

const steps = [
  {
    n: "01",
    title: "Set up your property",
    description: "Add rooms, pricing and guest house information.",
  },
  {
    n: "02",
    title: "Take reservations",
    description: "Receive online bookings or create them manually.",
  },
  {
    n: "03",
    title: "Run daily operations",
    description: "Manage check-ins, room assignments and day-to-day tasks.",
  },
  {
    n: "04",
    title: "Track the back office",
    description:
      "Follow finances, maintenance and kitchen operations together.",
  },
  {
    n: "05",
    title: "Monitor performance",
    description:
      "Watch occupancy, revenue and business health from your dashboard.",
  },
];

const whyChoose = [
  "Designed specifically for guest houses",
  "Cloud-based access from anywhere",
  "Easy-to-use interface",
  "Complete reservation management",
  "Integrated finance management",
  "Maintenance tracking",
  "Kitchen & restaurant management",
  "Secure cloud storage",
  "Scalable as your business grows",
];


function WhatsAppLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function GuestHouseManagementSystemPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openInquiryModal = () => setIsInquiryOpen(true);
  const closeInquiryModal = () => setIsInquiryOpen(false);

  return (
    <main className="md:pt-12 pt-24 bg-[#ffffff] selection:bg-primary-container selection:text-on-primary-container">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-[#ffffff] px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        {/* Modern Background Accents */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[250px] w-full max-w-7xl bg-gradient-to-tr from-primary/5 via-primary-container/10 to-transparent blur-3xl opacity-70 sm:h-[320px] md:h-[400px]" />

        <div className="mx-auto max-w-5xl text-center">
          {/* Refined Modern Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-wider text-on-secondary-container backdrop-blur-sm border border-secondary-container/30 shadow-sm transition-all duration-300  sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
            <span className="text-balance">
              Cloud Operations for Modern Guest Houses
            </span>
          </span>

          {/* Stronger, Cleaner Typographic Hierarchy */}
          <h1 className="mt-6 font-headline text-5xl font-extrabold tracking-tight text-on-surface leading-[1.2] xs:text-4xl sm:mt-8 sm:text-5xl sm:leading-[1.15] md:text-6xl lg:text-7xl">
            <span className="block text-balance">
              Guest House Management
            </span>
            <span className="mt-1 block bg-gradient-to-r from-primary via-primary/90 to-primary-container bg-clip-text text-transparent drop-shadow-sm py-1 sm:mt-2">
              Software for the Maldives
            </span>
          </h1>

          {/* Optimized Description Reading Width */}
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant font-medium xs:max-w-sm sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
            Built for guest houses and small hotels on Maafushi, Thulusdhoo,
            Dhigurah and every local island. Manage reservations, rooms,
            finances, housekeeping, maintenance and daily operations from one
            cloud-based platform.
          </p>

          {/* Premium Split-Action Controller */}
          <div className="mt-8 inline-flex w-full max-w-xs flex-col items-center justify-center gap-2.5 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:bg-surface-container-low/60 sm:p-2 sm:rounded-full sm:border sm:border-surface-variant/30 sm:backdrop-blur-md">
            <WhatsAppLink className="w-full sm:w-auto sm:min-w-[180px] flex items-center justify-center gap-2 rounded-full shadow-md shadow-primary/5 bg-gradient-to-br from-primary to-primary-container px-6 py-3 font-bold text-on-primary transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:py-3.5">
              <span className="material-symbols-outlined text-xl leading-none">
                chat
              </span>
              Book a Free Demo
            </WhatsAppLink>

            <button
              type="button"
              onClick={openInquiryModal}
              className="w-full sm:w-auto sm:min-w-[180px] rounded-full px-6 py-3 text-center text-sm font-bold text-on-surface transition-all duration-200 hover:bg-surface-container-high hover:text-primary active:scale-[0.98] sm:py-3.5 md:text-base"
            >
              Request Pricing
            </button>
          </div>
        </div>
      </section>

      {isInquiryOpen ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 md:p-8">
            <InquiryForm
              topic="Guest House Management System — Pricing Request"
              ctaLabel="Submit Request"
              onSuccess={closeInquiryModal}
              onClose={closeInquiryModal}
              showCloseButton
            />
          </div>
        </div>
      ) : null}

      {/* WHO IS IT FOR */}
      <section className="bg-[#ffffff] px-6 pt-4 pb-10 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-on-surface-variant">
            Designed For
          </span>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {audiences.map((item) => (
              <div
                key={item}
                className="relative flex items-center px-5 py-2 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-l-2 border-primary"
              >
                <span className="text-[11px] font-bold uppercase tracking-tighter text-on-surface">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES + SOLUTION */}
      <section className="relative overflow-hidden bg-primary px-6 py-20 sm:py-28 md:px-8 text-white ">
        {/* Decorative Ambient Background Glows */}
        <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: The Problem & Tags */}
            <div className="lg:col-span-6 text-left">
              <span className="inline-flex items-center text-white/80 font-semibold tracking-wider uppercase text-xs sm:text-sm bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mb-6">
                The Problem
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white mb-8">
                Spreadsheets and notebooks weren't built to run a guest house
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {challengeTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs md:text-sm font-medium text-white/80 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: The Premium Solution Card */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 shadow-2xl transition-all duration-500 ">
                {/* Elegant top accent line */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent" />

                <span className="text-white text-xs uppercase tracking-widest font-bold block mb-4">
                  Our Solution
                </span>
                <p className="text-white text-base sm:text-lg leading-relaxed font-light">
                  Our Guest House Management System centralizes every part of
                  your accommodation business into one easy-to-use cloud
                  platform. Manage reservations, room availability, finances,
                  maintenance and kitchen operations from a single dashboard, so
                  your team can focus on delivering a great guest experience
                  instead of chasing information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD DEVICE MOCKUP */}
      <section className="overflow-hidden bg-[#ffffff] px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="w-full space-y-8 lg:px-0 px-2 lg:w-2/5">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">
              One Dashboard,{" "}
              <span className="text-primary">Your Entire Property</span>
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Live room status, today's arrivals, revenue and maintenance alerts
              — everything you'd otherwise check in five different places, in
              one view.
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  title: "Live Room Status",
                  description:
                    "See what's occupied, vacant, or being cleaned, in real time.",
                },
                {
                  title: "Booking Alerts",
                  description:
                    "Get notified of new reservations, cancellations and check-ins as they happen.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                    <span
                      className="material-symbols-outlined text-[14px] text-on-secondary-container"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <div className="relative mx-auto max-w-5xl [perspective:2200px]">
              <div className="absolute -bottom-10 left-1/2 h-16 w-[88%] -translate-x-1/2 rounded-[100%] bg-black/30 blur-2xl" />

              <div className="relative rounded-[3.2rem] border-[10px] border-[#121212] bg-gradient-to-b from-[#222] to-[#0f0f0f] p-[10px] shadow-[0_70px_120px_-35px_rgba(0,0,0,0.6),0_35px_60px_-30px_rgba(0,0,0,0.55)] ring-1 ring-white/10 transition-transform duration-700 md:[transform:rotateX(10deg)_rotateY(-8deg)_rotateZ(1deg)] md:hover:[transform:rotateX(6deg)_rotateY(-4deg)_rotateZ(0deg)]">
                <div className="absolute -right-[3px] top-24 h-20 w-[4px] rounded-l bg-[#2b2b2b]" />
                <div className="absolute -right-[3px] top-52 h-14 w-[4px] rounded-l bg-[#2b2b2b]" />
                <div className="absolute left-10 top-[5px] h-[2px] w-20 rounded-b bg-[#363636]" />

                <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[2.5rem]">
                  <div className="absolute -left-[12%] -top-[10%] h-[150%] w-[35%] rotate-[20deg] bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                </div>

                <div className="absolute left-1/2 top-4 z-40 h-2 w-16 -translate-x-1/2 rounded-full bg-[#0a0a0a]" />
                <div className="absolute left-[52%] top-[1.05rem] z-40 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1e3a8a] shadow-[0_0_8px_rgba(59,130,246,0.45)]" />

                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0b1118] p-3 ring-1 ring-white/10 shadow-inner">
                  <div className="overflow-hidden rounded-[2rem] bg-[#f8fafc]">
                    <div className="border-b border-slate-200/80 bg-white/90 px-4 py-3 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-6 w-20 rounded-md bg-slate-100" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                            Guest House Cloud
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500">
                          <span className="material-symbols-outlined text-sm">
                            wifi
                          </span>
                          11:38 AM
                          <span className="material-symbols-outlined text-sm">
                            battery_full_alt
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col xs:grid xs:grid-cols-[90px_1fr] sm:grid-cols-[100px_1fr] md:grid-cols-[minmax(90px,25%)_1fr]">
                      <aside className="flex flex-row items-center gap-4 overflow-x-auto border-b border-slate-200 bg-slate-50 px-4 py-2 scrollbar-hide xs:flex-col xs:items-start xs:gap-0 xs:space-y-4 xs:overflow-x-visible xs:border-b-0 xs:border-r xs:p-4 min-h-0 xs:min-h-[460px]">
                        <p className="hidden xs:block text-[9px] font-black uppercase tracking-[0.18em] text-slate-400 mb-2">
                          Menu
                        </p>
                        <div className="flex flex-row gap-4 xs:flex-col xs:gap-0 xs:space-y-4">
                          {[
                            "Dashboard",
                            "Reservations",
                            "Rooms",
                            "Maintenance",
                            "Guests",
                          ].map((item, index) => (
                            <div
                              key={item}
                              className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
                                index === 0 ? "text-primary" : "text-slate-500"
                              }`}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="hidden xs:block rounded-xl bg-white p-3 shadow-sm mt-4">
                          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                            Alerts
                          </p>
                          <p className="mt-2 text-[10px] font-semibold text-slate-700">
                            2 maintenance tickets open
                          </p>
                        </div>
                      </aside>

                      <div className="space-y-4 bg-white p-3 sm:p-4 md:p-5">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 sm:pb-4">
                          <div>
                            <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                              Today's Overview
                            </h3>
                            <p className="text-[11px] font-medium text-slate-500">
                              Palm Breeze Guest House
                            </p>
                          </div>
                          <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                            <span className="material-symbols-outlined text-sm">
                              sync
                            </span>
                            Live
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2 sm:p-3">
                            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                              Occupancy
                            </p>
                            <p className="mt-1 text-lg font-black text-slate-900 sm:text-2xl">
                              87%
                            </p>
                            <p className="text-[10px] font-bold text-emerald-600">
                              7/8 Rooms
                            </p>
                          </div>
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2 sm:p-3">
                            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                              Revenue
                            </p>
                            <p className="mt-1 text-lg font-black text-slate-900 sm:text-2xl">
                              $1,240
                            </p>
                            <p className="text-[10px] font-bold text-emerald-600">
                              Today
                            </p>
                          </div>
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2 sm:p-3">
                            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                              Check-ins
                            </p>
                            <p className="mt-1 text-lg font-black text-slate-900 sm:text-2xl">
                              3
                            </p>
                            <p className="text-[10px] font-bold text-primary">
                              Due Today
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
                            Today's Arrivals
                          </p>
                          <div className="grid grid-cols-1 gap-2">
                            {[
                              {
                                guest: "R. Fernando",
                                room: "Room 4",
                                nights: "3 nights",
                                status: "Confirmed",
                              },
                              {
                                guest: "A. Muller",
                                room: "Room 6",
                                nights: "2 nights",
                                status: "Confirmed",
                              },
                              {
                                guest: "S. Ibrahim",
                                room: "Room 2",
                                nights: "5 nights",
                                status: "Pending Payment",
                              },
                            ].map((booking) => (
                              <div
                                key={booking.guest}
                                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm"
                              >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                  <span className="material-symbols-outlined text-lg">
                                    person
                                  </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="truncate text-[11px] font-bold text-slate-900">
                                    {booking.guest}
                                  </div>
                                  <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                                    {booking.room} · {booking.nights}
                                  </div>
                                </div>
                                <div
                                  className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest ${
                                    booking.status === "Confirmed"
                                      ? "bg-emerald-50 text-emerald-600"
                                      : "bg-amber-50 text-amber-600"
                                  }`}
                                >
                                  {booking.status}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto my-2 h-1.5 w-32 rounded-full bg-slate-300/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUEST EXPERIENCE STORY */}
      <section className="relative px-2 md:px-4 lg:px-0 py-16 sm:py-20 md:py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] border border-white/[0.03] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-5 order-1 lg:order-2 text-white pl-0 lg:pl-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-[0.9] lg:leading-[0.85] tracking-tighter">
              Every Room, <br />
              <span className="text-secondary-fixed font-light">
                Every Guest
              </span>
            </h2>

            <div className="space-y-8 sm:space-y-10 lg:space-y-16">
              {[
                {
                  num: "01",
                  title: "Room Management",
                  desc: "Live room availability, categories and pricing, and occupancy tracking from a single dashboard.",
                },
                {
                  num: "02",
                  title: "Guest Management",
                  desc: "Guest profiles, stay history and special requests, so your team can deliver a personal welcome every time.",
                },
                {
                  num: "03",
                  title: "Leads Management",
                  desc: "Track booking inquiries and follow up before they go cold, turning more enquiries into confirmed stays.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-6 sm:gap-8 lg:gap-10"
                >
                  <div className="relative pt-1 flex-shrink-0">
                    <span className="text-white font-bold text-base sm:text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.num}
                    </span>
                    <div className="w-[1px] h-8 sm:h-10 lg:h-12 bg-white/10 absolute -bottom-10 sm:-bottom-12 lg:-bottom-14 left-1/2 -translate-x-1/2 group-last:hidden" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 lg:mb-3 tracking-widest uppercase text-white/90 group-hover:text-secondary-fixed transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/80 leading-relaxed max-w-sm text-sm group-hover:text-secondary-fixed-dim/90 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-2 lg:order-1 w-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  alt="Guest house room"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden mt-8 sm:mt-10">
                <img
                  alt="Guest house courtyard"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                  src="https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&fit=crop&q=80&w=800"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden -mt-6 sm:-mt-8">
                <img
                  alt="Guest breakfast"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  alt="Front desk check-in"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
                />
              </div>
            </div>

            <div className="hidden lg:block relative h-[700px]">
              <div className="absolute top-0 left-0 w-3/5 aspect-[3/4] z-20 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  alt="Guest house room"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
                />
              </div>
              <div className="absolute top-12 right-0 w-1/2 aspect-square z-10 rounded-2xl overflow-hidden border border-white/10">
                <img
                  alt="Guest house courtyard"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                  src="https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&fit=crop&q=80&w=800"
                />
              </div>
              <div className="absolute bottom-12 right-12 w-2/5 aspect-[3/4] z-30 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  alt="Guest breakfast"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
                />
              </div>
              <div className="absolute bottom-0 left-12 w-1/3 aspect-square z-40 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  alt="Front desk check-in"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES — Precision Components bento */}
      <section className="py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="relative mb-6 md:mb-12 w-full py-8 sm:py-10 overflow-hidden md:py-12">
          {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
          <div className="absolute top-10 left-0 select-none font-headline font-black text-[5rem] tracking-tighter leading-none text-primary-container/[0.14] dark:text-white/[0.01] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-14 md:text-[10rem] lg:top-9 lg:text-[14rem]">
            FEATURES
          </div>

          {/* Main Content Layout Container */}
          <div className="relative z-10 flex flex-col items-start px-2 pt-8 text-left sm:pt-12 md:pt-16 lg:pt-20">
            {/* Minimalist Category Kicker */}
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
              Core Features
            </span>

            {/* Headline */}
            <h2 className="mt-0 md:mt-2 text-4xl font-extrabold font-headline tracking-tight text-primary sm:text-5xl md:text-7xl lg:text-8xl">
              Core Features
            </h2>

            {/* Editorial Description */}
            <p className="mt-6 sm:mt-8 max-w-md text-balance text-base font-light font-body leading-relaxed tracking-wide text-on-surface-variant sm:text-lg">
              Every part of running a guest house, handled by one connected
              platform.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 md:grid-rows-2 md:h-[500px]">
          {/* Reservation Management — featured */}
          <div className="sm:col-span-2 md:col-span-2 md:row-span-2 border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden group hover:border-secondary/20 transition-all flex flex-col">
            <div className="p-5 sm:p-6 md:p-8 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary-fixed flex items-center justify-center mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-on-secondary-fixed text-lg sm:text-xl">
                  calendar_month
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline mb-2 sm:mb-4">
                Reservation Management
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Manage every booking from inquiry to check-out — online
                reservations, walk-ins, a live calendar, and real-time
                availability that prevents double bookings.
              </p>
            </div>
            <div className="h-48 sm:h-56 md:h-1/2 relative overflow-hidden flex-shrink-0">
              <img
                alt="Reception desk"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=900"
              />
            </div>
          </div>

          {/* Maintenance & Housekeeping */}
          <div className="sm:col-span-2 md:col-span-2 border border-outline-variant bg-surface-container-lowest rounded-xl p-7 sm:p-6 md:p-8 flex flex-col justify-between group">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-headline mb-1 sm:mb-2">
                  Maintenance & Housekeeping
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Room status, task assignment and repair tracking, in one
                  action-required view.
                </p>
              </div>
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl flex-shrink-0">
                build
              </span>
            </div>
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] uppercase font-bold tracking-wider rounded-md">
                6 Rooms Ready
              </span>
              <span className="px-3 py-1 bg-rose-50 text-rose-700 border border-rose-100 text-[10px] uppercase font-bold tracking-wider rounded-md">
                2 Tickets Open
              </span>
            </div>
          </div>

          {/* Restaurant & Bar Management */}
          <div className="bg-gradient-to-br from-primary to-primary-container text-white rounded-xl p-7 sm:p-6 md:p-8 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
            <span className="material-symbols-outlined text-secondary-fixed text-2xl sm:text-3xl">
              restaurant
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-headline mb-1">
                Restaurant & Bar
              </h3>
              <p className="text-white text-xs">
                Table reservations, kitchen orders and F&amp;B billing.
              </p>
            </div>
          </div>

          {/* Billing & Analytics */}
          <div className="bg-surface-container-lowest rounded-xl p-7 sm:p-8 md:p-8 border border-outline-variant flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
            <span className="material-symbols-outlined text-secondary text-2xl sm:text-3xl">
              analytics
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-headline mb-1 text-primary">
                Billing & Analytics
              </h3>
              <p className="text-on-surface-variant text-xs">
                Automated invoicing plus occupancy and revenue reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="bg-surface px-6 py-16 sm:py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="relative mb-6 md:mb-12 w-full py-8 sm:py-10 overflow-visible md:py-12">
            {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none font-headline font-black text-[5.5rem] tracking-tighter leading-none text-primary-container/[0.14] dark:text-white/[0.01] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-20 md:text-[10rem] lg:top-4 lg:text-[14rem]">
              BENEFITS
            </div>

            {/* Main Content Layout Container */}
            <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
              {/* Minimalist Category Kicker */}
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
                Key Benefits
              </span>

              {/* Headline */}
              <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-7xl dark:text-white">
                What it means for your guest house
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                  <span
                    className="material-symbols-outlined text-[14px] text-on-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 py-20 sm:px-6 md:px-8 md:py-32">
        {/* Ambient Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--primary-rgb,15,23,42),0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--primary-rgb,15,23,42),0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6 lg:sticky lg:top-28 lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline">
              How It Works
            </span>

            <h2 className="font-headline text-3xl font-black tracking-tight text-primary leading-[1.15] sm:text-4xl md:text-5xl">
              Live in <br className="hidden lg:block" />
              Five Steps
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-on-surface-variant/70 md:text-base">
              Launch your business in minutes with a streamlined workflow
              designed to guide you from initial setup to daily operations
              without unnecessary complexity.
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
                Simple 5-Step Workflow
              </span>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="relative lg:col-span-8">
            {/* Timeline */}
            <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary/30 via-outline-variant/30 to-transparent" />

            <div className="relative z-10 space-y-8">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="group relative flex items-start gap-6 rounded-2xl p-2 transition-all duration-300 hover:bg-primary/[0.01]"
                >
                  {/* Step Circle */}
                  <div className="relative mt-1 shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-outline-variant/80 bg-surface-container-lowest font-mono text-xs font-bold text-primary shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      {String(step.n).padStart(2, "0")}
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
                        Phase {String(step.n).padStart(2, "0")}
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

      {/* WHY CHOOSE */}
      <section className="bg-[#ffffff] px-6 py-16 sm:py-20 md:px-8">
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
                Why Choose Our Guest House Management System?
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="group relative flex items-center justify-between border-b border-outline-variant/60 bg-white py-5 pl-4 pr-2 transition-all duration-300 hover:bg-neutral-50/50"
              >
                <div className="flex items-center gap-4">
                  {/* Subtle, Sophisticated Bullet instead of a heavy icon */}
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-primary" />

                  {/* High-End, Clean Typography */}
                  <span className="text-sm font-medium tracking-wider text-on-surface uppercase text-xs transition-colors duration-300 group-hover:text-primary">
                    {item}
                  </span>
                </div>

                {/* Elegant trailing detail (optional chevron that fades in on hover) */}
                <span className="material-symbols-outlined text-xs text-primary opacity-0 transition-all duration-300 transform translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0">
                  arrow_forward_ios
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageOutline path="/hotelcloud" />

      <FAQSection
        items={getRouteFaq("/hotelcloud")}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about the Guest House Management System"
      />

      {/* FINAL CTA */}
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
                  <span>Guest House Management</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
                  Ready to Modernize Your
                  <br className="hidden sm:block" />
                  Guest House?
                </h2>

                <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
                  Deliver a better guest experience while managing your entire
                  business from one platform.
                </p>

                {/* Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
                  <WhatsAppLink className="group relative flex items-center justify-center gap-3 sm:justify-between overflow-hidden rounded-xl bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-primary/90 hover:shadow-[0_0_35px_rgba(0,112,243,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[240px]">
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
                  </WhatsAppLink>

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

              {/* Empty column to preserve image composition */}
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

export default GuestHouseManagementSystemPage;
