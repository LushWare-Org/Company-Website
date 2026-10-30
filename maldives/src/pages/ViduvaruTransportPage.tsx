import { useState } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import { getRouteFaq } from "../data/faq";
import InquiryForm from "../components/InquiryForm";
import WhyChooseUs from "../components/WhyChooseUs";

const WHATSAPP_NUMBER = "94716430053";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi LushWare! I'm interested in your Viduvaru Speedboat Ticketing & Dispatch system. Could we book a free demo to see how it can help my fleet operations?")}`;


const audiences = [
  { icon: "directions_boat", label: "Speedboat operators" },
  { icon: "sailing", label: "Ferry service providers" },
  { icon: "water", label: "Water taxi companies" },
];

const challenges = [
  {
    icon: "call",
    title: "Bookings by phone and WhatsApp",
    description:
      "Every reservation lives in a different chat thread, so nothing is confirmed until someone remembers to check.",
  },
  {
    icon: "content_copy",
    title: "Double bookings, no warning",
    description:
      "Without one shared seat count, the same seat gets sold twice and someone's left at the jetty.",
  },
  {
    icon: "calendar_view_week",
    title: "Routes and schedules, untracked",
    description:
      "Managing several boats across several routes by memory means gaps and clashes creep in.",
  },
  {
    icon: "home_work",
    title: "Guest house coordination by hand",
    description:
      "Every transfer request for a guest means another call, another message, another chance to lose track.",
  },
];


function ViduvaruTransportPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const closeInquiryModal = () => setIsInquiryOpen(false);

  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-24 md:pt-12 bg-[#ffffff] selection:bg-primary-container selection:text-on-primary-container">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#ffffff] px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
          {/* Modern Background Accents */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[250px] w-full max-w-7xl bg-gradient-to-tr from-primary/5 via-primary-container/10 to-transparent blur-3xl opacity-70 sm:h-[320px] md:h-[400px]" />

          <div className="mx-auto max-w-5xl text-center">
            {/* Refined Modern Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-wider text-on-secondary-container backdrop-blur-sm border border-secondary-container/30 shadow-sm transition-all duration-300 hover:bg-secondary-container sm:px-4 sm:py-1.5 sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
              <span className="text-balance">
                Speedboat Ticketing & Operations
              </span>
            </span>

            {/* Stronger, Cleaner Typographic Hierarchy */}
            <h1 className="mt-6 font-headline text-5xl font-extrabold tracking-tight text-on-surface leading-[1.2] xs:text-4xl sm:mt-8 sm:text-5xl sm:leading-[1.15] md:text-6xl lg:text-7xl">
              <span className="block text-balance">
                Run Your Speedboat Business
              </span>
              <span className="mt-1 block bg-gradient-to-r from-primary via-primary/90 to-primary-container bg-clip-text text-transparent drop-shadow-sm py-1 sm:mt-2">
                From One Platform
              </span>
            </h1>

            {/* Optimized Description Reading Width */}
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant font-medium xs:max-w-sm sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
              Routes, bookings, boats, guest house partnerships, payments, and
              performance — one cloud-based system built for Maldivian
              speedboat, ferry, and water taxi operators.
            </p>

            {/* Premium Split-Action Controller */}
            <div className="mt-8 inline-flex w-full max-w-xs flex-col items-center justify-center gap-2.5 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:bg-surface-container-low/60 sm:p-2 sm:rounded-full sm:border sm:border-surface-variant/30 sm:backdrop-blur-md">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto sm:min-w-[180px] flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary to-primary-container px-6 py-3 font-bold text-on-primary shadow-md shadow-primary/5 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:py-3.5"
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
            <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 md:p-8">
              <InquiryForm
                topic="Viduvaru Transport"
                ctaLabel="Submit Inquiry"
                onSuccess={closeInquiryModal}
                onClose={closeInquiryModal}
                showCloseButton
              />
            </div>
          </div>
        ) : null}

        {/* ---------------------------------------------------------- */}
        {/* Who is it for                                                */}
        {/* ---------------------------------------------------------- */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-4 pb-12 md:pb-16">
          <div className="mb-8 text-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-outline">
              Built For
            </span>
            <h2 className="mt-2 font-headline text-2xl sm:text-3xl font-semibold text-primary">
              Every Vessel-Based Transport Business
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-lowest px-5 py-3 text-sm font-semibold text-on-surface shadow-sm"
              >
                <span className="material-symbols-outlined text-lg text-primary">
                  {a.icon}
                </span>
                {a.label}
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Challenges we solve                                          */}
        {/* ---------------------------------------------------------- */}
        <section className="bg-surface/50 px-5 sm:px-6 md:px-8 py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-outline">
                The Problem
              </span>
              <h2 className="mt-2 mb-4 font-headline text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
                Manual Operations Cost You Seats and Revenue
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base">
                Running a speedboat business by phone and spreadsheet adds
                friction your passengers and your team both feel.
              </p>
            </div>
            {/* Premium Interactive Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((c, index) => (
                <div
                  key={c.title}
                  className="group relative rounded-2xl bg-white border border-outline-variant/40 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-secondary/40 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon Container with subtle background ring */}
                    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface border border-outline-variant/30 group-hover:border-secondary/20 transition-colors duration-300">
                      <span className="material-symbols-outlined text-2xl text-secondary">
                        {c.icon}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-primary tracking-tight transition-colors duration-300 group-hover:text-secondary">
                      {c.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant font-normal">
                      {c.description}
                    </p>
                  </div>

                  {/* Elegant step indicator for structured hierarchy */}
                  <div className="mt-8 text-right font-mono text-xs font-bold text-outline-variant/50 select-none group-hover:text-secondary/50 transition-colors duration-300">
                    0{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Core feature grid                                            */}
        {/* ---------------------------------------------------------- */}
        <section className="pb-12 px-5 sm:pb-16 sm:px-6 md:py-24 md:px-8 max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 text-center">
            <h2 className="font-headline text-headline-md text-primary mb-4 font-semibold text-3xl sm:text-4xl md:text-5xl">
              Engineered for Excellence
            </h2>
            <div className="h-1 w-20 submerged-gradient mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant/30 border border-outline-variant/30 rounded-lg overflow-hidden bg-surface">
            {/* SECTION 1: FLEET & BOAT MANAGEMENT */}
            <div className="md:col-span-8 bg-[#ffffff] p-6 sm:p-8 md:p-12 flex flex-col justify-between min-h-[auto] md:min-h-[500px] border-b md:border-b-0 md:border-r border-outline-variant/30">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-outline">
                    Fleet Overview
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-primary tracking-tight mb-4 md:mb-6">
                  Real-time{" "}
                  <span className="font-semibold">
                    Boat & Capacity Management
                  </span>
                </h3>
                <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed opacity-80">
                  Register every boat, assign it to a route, and track
                  operational status and live seat occupancy across your entire
                  fleet from one screen.
                </p>
              </div>

              {/* DATA MODULE */}
              <div className="mt-8 md:mt-12 p-5 sm:p-6 md:p-8 border border-outline-variant/20 rounded-2xl bg-surface-container-low rounded-sm shadow-sm max-w-md">
                <div className="flex justify-between items-end mb-5 md:mb-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-outline font-bold mb-1">
                      Vessel
                    </p>
                    <p className="text-lg md:text-xl font-bold text-primary">
                      Coral Express V
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl md:text-3xl font-light text-primary">
                      84<span className="text-sm ml-1 opacity-60">%</span>
                    </p>
                    <p className="text-[10px] uppercase tracking-tighter font-bold text-outline">
                      Seats Booked
                    </p>
                  </div>
                </div>

                <div className="w-full bg-outline-variant/20 h-1.5 mb-5 md:mb-6">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: "84%" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-8 border-t border-outline-variant/10 pt-4 md:pt-6">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline mb-1">
                      Departure
                    </p>
                    <p className="text-xs md:text-sm font-medium text-on-surface">
                      14:00 Port Male'
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline mb-1">
                      Arrival (Est)
                    </p>
                    <p className="text-xs md:text-sm font-medium text-on-surface">
                      14:45 Maafushi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: ONLINE TICKET BOOKING */}
            <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-container text-white p-6 sm:p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-6 md:mb-8 font-light text-white/80 block">
                  confirmation_number
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 leading-tight tracking-tight">
                  Online Ticket <br />
                  Booking
                </h3>
                <p className="text-white leading-relaxed text-sm md:text-md">
                  Passengers reserve seats, pay securely, and get an instant
                  confirmation — no phone call required.
                </p>
              </div>

              <div className="mt-8 md:mt-12 space-y-3">
                <div className="h-11 md:h-12 border border-white/80 rounded-sm bg-white/5 flex items-center px-4">
                  <span className="text-xs text-white/90 font-mono">
                    01 // SELECT ROUTE
                  </span>
                </div>
                <div className="h-11 md:h-12 border border-white/80 rounded-sm bg-white/5 flex items-center px-4">
                  <span className="text-xs text-white/90 font-mono">
                    02 // PASSENGER DETAILS
                  </span>
                </div>
                <button className="w-full h-12 md:h-14 bg-white hover:text-white text-primary font-bold text-xs uppercase tracking-[0.15em] hover:bg-primary transition-colors duration-300 mt-4">
                  Initialize Booking
                </button>
              </div>
            </div>

            {/* SECTION 3: ROUTE & SCHEDULE MANAGEMENT */}
            <div className="md:col-span-4 bg-surface p-6 sm:p-8 md:p-12 border-t border-outline-variant/30 flex flex-col items-start hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-outline-variant/40 flex rounded-lg items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary">
                  calendar_view_week
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">
                Route & Schedule Management
              </h3>
              <p className="text-on-surface-variant text-sm md:text-md leading-relaxed opacity-80">
                Create routes, configure departure schedules, manage
                destinations, and control seat availability in one place.
              </p>
            </div>

            {/* SECTION 4: CUSTOMER MANAGEMENT */}
            <div className="md:col-span-4 bg-surface p-6 sm:p-8 md:p-12 border-t border-outline-variant/30 flex flex-col items-start hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-outline-variant/40 flex rounded-lg items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary">
                  group
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">
                Customer Management
              </h3>
              <p className="text-on-surface-variant text-sm md:text-md leading-relaxed opacity-80">
                Keep a passenger database with full booking history, and send
                notifications and updates straight to their phone.
              </p>
            </div>

            {/* SECTION 5: DIGITAL E-TICKETING */}
            <div className="md:col-span-4 bg-surface p-6 sm:p-8 md:p-12 border-t md:border-r border-outline-variant/30 flex flex-col items-start hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-outline-variant/40 flex rounded-lg items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary">
                  qr_code_2
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">
                Digital Issuance
              </h3>
              <p className="text-on-surface-variant text-sm md:text-md leading-relaxed opacity-80">
                Paperless tickets delivered instantly to a passenger's phone,
                ready to scan at boarding.
              </p>
            </div>

            {/* SECTION 6: BOOKING VALIDATION & LIVE UPDATES */}
            <div className="md:col-span-8 bg-surface-container-lowest p-6 sm:p-8 md:p-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
              <div className="max-w-md w-full">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                  Boarding Validation &amp; Live Updates
                </h3>
                <p className="text-on-surface-variant text-sm md:text-md leading-relaxed opacity-80 mb-5 md:mb-6">
                  Offline-ready QR validation prevents double bookings at the
                  jetty, while departure notifications and route changes reach
                  passengers automatically.
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-md text-primary">
                      verified
                    </span>
                    <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-outline">
                      No Double Bookings
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-md text-primary">
                      notifications_active
                    </span>
                    <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-outline">
                      Live Notifications
                    </span>
                  </div>
                </div>
              </div>

              {/* QR CODE */}
              <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary p-2 bg-white flex items-center justify-center shadow-lg shrink-0">
                <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PRO')] bg-cover opacity-90 grayscale" />
              </div>
            </div>

            {/* SECTION 7: GUEST HOUSE PORTAL */}
            <div className="md:col-span-4 bg-surface p-6 sm:p-8 md:p-12 border-t border-outline-variant/30 flex flex-col items-start hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-outline-variant/40 flex rounded-lg items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary">
                  home_work
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">
                Guest House Portal
              </h3>
              <p className="text-on-surface-variant text-sm md:text-md leading-relaxed opacity-80">
                Guest houses and tour operators book, schedule, and track guest
                transfers themselves, through their own portal.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Finance, reporting & admin                                   */}
        {/* ---------------------------------------------------------- */}
        <section className="px-8 bg-[#ffffff] py-32 bg-surface">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden  p-2">
                <img
                  className="rounded-lg w-full"
                  data-alt="Sophisticated software interface showing complex marine logistics data, bar charts, and a map of tropical islands with shipping routes"
                  src="https://www.abswavesight.com/sites/default/files/styles/vertical_image_slider/public/2024-06/oprisk.png?itok=t5bArY_i"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                One Dashboard, Whole Business
              </span>
              <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-primary mt-6 mb-8 tracking-tight leading-tight">
                Command your fleet with absolute precision.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl shrink-0">
                    payments
                  </span>
                  <div>
                    <h4 className="font-bold text-primary mb-2">
                      Finance Management
                    </h4>
                    <p className="text-on-surface-variant">
                      Track revenue and payments and generate daily income
                      reports without a spreadsheet in sight.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl shrink-0">
                    analytics
                  </span>
                  <div>
                    <h4 className="font-bold text-primary mb-2">
                      Reports &amp; Analytics
                    </h4>
                    <p className="text-on-surface-variant">
                      Booking statistics, route performance, and passenger
                      trends, rolled up into one business dashboard.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl shrink-0">
                    admin_panel_settings
                  </span>
                  <div>
                    <h4 className="font-bold text-primary mb-2">
                      Administration Dashboard
                    </h4>
                    <p className="text-on-surface-variant">
                      Daily overview, quick actions, support, and user
                      management — everything an operator needs, in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* How it works                                                 */}
        {/* ---------------------------------------------------------- */}
        <section className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-20 md:py-32 overflow-hidden">
          {/* Modern ambient line grid pattern behind content */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--primary-rgb,15,23,42),0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--primary-rgb,15,23,42),0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            {/* Left Anchor Column: Sticky Brand Hub */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-outline">
                How It Works
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-primary leading-[1.15]">
                From Booking <br className="hidden lg:block" />
                to Boarding
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant/70 leading-relaxed font-normal max-w-md">
                An interconnected infrastructure engineering a fluid transition
                between dynamic reservations and live maritime operations.
              </p>

              {/* Mini Visual Stepper Widget Metric */}
              <div className="hidden lg:flex items-center gap-1.5 p-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest/50 backdrop-blur-sm max-w-xs shadow-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className="w-6 h-6 rounded-full bg-primary border-2 border-surface-container-lowest flex items-center justify-center font-mono text-[8px] font-bold text-white shadow-sm"
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <span className="text-[11px] font-medium text-on-surface-variant/80 pl-2">
                  100% Automated Flow
                </span>
              </div>
            </div>

            {/* Right Column: The Interconnected Vertical Stepper Pipeline */}
            <div className="lg:col-span-8 relative">
              {/* The Continuous Vertical Stepper Axis Line */}
              <div className="absolute top-8 bottom-8 left-6 w-[2px] bg-gradient-to-b from-primary/30 via-outline-variant/30 to-transparent z-0" />

              <div className="space-y-8 relative z-10">
                {[
                  {
                    step: "01",
                    title: "Set up your fleet",
                    tagline: "Infrastructure Initialization",
                    description:
                      "Configure boats, routes, schedules, and destinations with micro-precision control filters.",
                  },
                  {
                    step: "02",
                    title: "Take the booking",
                    tagline: "Omnichannel Acquisition",
                    description:
                      "Customers seamlessly check out online, or localized port staff create instant manual reservations.",
                  },
                  {
                    step: "03",
                    title: "Confirm the trip",
                    tagline: "Instantaneous Telemetry",
                    description:
                      "Passengers receive atomic, real-time dispatch confirmations accompanied by modern live updates.",
                  },
                  {
                    step: "04",
                    title: "Coordinate transfers",
                    tagline: "B2B Ecosystem Integration",
                    description:
                      "Affiliated guest houses and external cruise operators securely provision tickets via dedicated APIs.",
                  },
                  {
                    step: "05",
                    title: "Track performance",
                    tagline: "Analytical Overview Dashboard",
                    description:
                      "Supervise historical global bookings, live revenue margins, and deep operational logistics dynamically.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="group relative flex flex-row items-start gap-6 rounded-2xl p-2 transition-all duration-300 hover:bg-primary/[0.01]"
                  >
                    {/* Elegant Circular Node Step Indicator */}
                    <div className="flex-shrink-0 relative mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full font-mono text-xs font-bold bg-surface-container-lowest text-primary border-2 border-outline-variant/80 shadow-[0_2px_6px_rgba(0,0,0,0.03)] group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300">
                        {s.step}
                      </div>
                      {/* Active pulsing dynamic dot positioned on the pipeline core */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/5 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>

                    {/* Stepper Content Block Card */}
                    <div className="flex-1 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest/80 backdrop-blur-sm p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:border-outline-variant/60 group-hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
                        <h3 className="text-base sm:text-lg font-bold text-primary tracking-tight">
                          {s.title}
                        </h3>
                        <span className="inline-block  text-[9px] font-bold tracking-wider text-primary/80 uppercase bg-primary/[0.03] px-2 py-0.5 rounded border border-primary/5 group-hover:text-primary group-hover:bg-primary/5 transition-colors duration-300">
                          {s.tagline}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-on-surface-variant/80 font-normal">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          items={getRouteFaq("/viduvaru")}
          title="Viduvaru Transport FAQs"
          subtitle="Everything you need to know about our fleet management and booking system"
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
                    <span>Speedboat Management</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
                    Ready to Modernize Your
                    <br className="hidden sm:block" />
                    Speedboat Operations?
                  </h2>

                  <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
                    Manage bookings, routes, customers, finances, and guest
                    transfers from one intelligent platform.
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

                {/* Empty right column for image composition */}
                <div
                  className="hidden lg:block lg:col-span-1 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ViduvaruTransportPage;
