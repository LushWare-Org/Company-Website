// pages/SolutionsPage.tsx
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import InquiryForm from "../components/InquiryForm";
import QuestionItem from "../components/QuestionItem";
import SolutionTopicStepper from "../components/SolutionTopicStepper";

type Solution = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
};

/* ── Ready-made platforms (unchanged) ───────────────────────────── */
const solutions: Solution[] = [
  {
    title: "Viduvaru",
    subtitle: "Online Ticket Booking for Boat Services",
    description:
      "Self-service bookings, capacity management, e-ticketing, and boarding validation designed for marine transport.",
    image: "/solution/boat.png",
  },
  {
    title: "Lush Hotel Cloud",
    subtitle: "Hotel Internal Management System",
    description:
      "A centralized cloud suite for reservations, housekeeping, inventory, and finance, built for multi-property operations.",
    image: "/solution/hotel.png",
  },
  {
    title: "Property Management System",
    subtitle: "Unified property oversight",
    description:
      "Digital workflows for property listings, maintenance tracking, tenant relations, and revenue oversight.",
    image: "/solution/realstate.png",
  },
  {
    title: "Travel Agency CRM System",
    subtitle: "Lead-to-trip lifecycle",
    description:
      "Automate inquiries, itineraries, payments, and post-trip follow-ups with a CRM tuned for travel teams.",
    image: "/solution/travel.png",
  },
];

/* ── New: Tourism & Hospitality intelligence content ────────────── */
const challenges = [
  "Unpredictable demand",
  "Seasonal fluctuations",
  "Room and inventory optimization",
  "Complex booking patterns",
  "Staff allocation",
  "Transportation coordination",
  "Overbooking and cancellations",
  "Revenue leakage",
  "Inefficient follow-ups",
  "Guest-service bottlenecks",
  "Fragmented operational systems",
];

const intelligence = [
  {
    title: "Demand & Revenue Intelligence",
    intro:
      "Predict future demand and identify opportunities to improve revenue.",
    items: [
      "Occupancy forecasting",
      "Booking prediction",
      "Cancellation prediction",
      "Revenue forecasting",
      "Customer behavior analysis",
      "Pricing recommendations",
      "Market-segment analysis",
    ],
  },
  {
    title: "Reservation & Inventory Optimization",
    intro:
      "Optimize room, villa, activity and transportation inventory across multiple channels.",
    items: [
      "Inventory forecasting",
      "Availability optimization",
      "Allocation recommendations",
      "Booking-channel analysis",
      "Overbooking optimization",
      "Demand-based allocation",
    ],
  },
  {
    title: "Guest & Travel Intelligence",
    intro: "Understand guest behavior and provide intelligent recommendations.",
    items: [
      "Personalized recommendations",
      "Guest segmentation",
      "Upselling opportunities",
      "Cross-selling",
      "Repeat-guest prediction",
      "Guest experience intelligence",
    ],
  },
  {
    title: "Workforce & Transportation Optimization",
    intro:
      "Optimize staff allocation, excursions, transfers, boats, vehicles and operational resources.",
    items: [
      "Workforce scheduling",
      "Transfer optimization",
      "Fleet allocation",
      "Activity capacity planning",
      "Resource allocation",
      "Demand-aware scheduling",
    ],
  },
];

const twinQuestions = [
  "What happens if occupancy increases by 20%?",
  "What if we add another speedboat?",
  "What if restaurant demand peaks at a different time?",
  "How many staff members are required during peak periods?",
];

const travelPipeline = [
  "Leads",
  "Quotes",
  "Bookings",
  "Customers",
  "Suppliers",
  "Revenue",
];

const useCases = [
  {
    name: "Hotels & Resorts",
    desc: "Optimize occupancy, staffing, energy, maintenance and guest services.",
  },
  {
    name: "Travel Agencies",
    desc: "Improve lead conversion, quotation follow-up, customer intelligence and supplier coordination.",
  },
  {
    name: "Tour Operators",
    desc: "Optimize tours, excursions, transportation and capacity.",
  },
  {
    name: "Resort Transportation",
    desc: "Predict demand and optimize boats, vehicles, schedules and routes.",
  },
];

const outcomes = [
  "Higher revenue.",
  "Better resource utilization.",
  "Lower operational costs.",
  "Faster decisions.",
  "More personalized guest experiences.",
];

const faqItems = [
  {
    question: "What are LushWare's Tourism & Hospitality Solutions?",
    answer:
      "A combination of ready-to-deploy platforms (booking, hotel management, property management and travel CRM) and an intelligence layer that predicts demand, optimizes resources, improves revenue, simulates scenarios and automates operational decisions.",
  },
  {
    question: "How can these solutions improve our hospitality operations?",
    answer:
      "They automate repetitive tasks, centralize guest and booking data, forecast demand, optimize inventory, staff and transport, and provide real-time reporting, so your team can focus on delivering exceptional guest experiences.",
  },
  {
    question: "Can AI predict demand and recommend pricing?",
    answer:
      "Yes. We build occupancy, booking and cancellation forecasts, revenue forecasts and pricing recommendations from your own booking and market data, so you can act before demand shifts.",
  },
  {
    question: "What is a resort or hotel digital twin?",
    answer:
      "A computational model of your operation that lets you test scenarios first, such as a 20% occupancy increase, an extra speedboat, a shifted restaurant peak, or the staffing needed at peak periods.",
  },
  {
    question:
      "Are these solutions suitable for all sizes of travel businesses?",
    answer:
      "Yes. They are scalable and can be customized for solo travel consultants, small agencies, tour operators, resorts, and enterprise hospitality groups.",
  },
  {
    question:
      "Can these solutions integrate with existing travel industry tools?",
    answer:
      "Yes. We integrate with GDS systems, payment processors, email platforms, property and booking systems, and other third-party tools to create a unified ecosystem.",
  },
  {
    question: "Is customer data secure?",
    answer:
      "Absolutely. We use industry-standard security measures including encryption, access controls, compliance with data protection regulations, and regular security audits to protect sensitive guest and business data.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Timelines vary with your needs and complexity, typically from a few weeks to a few months. Our team provides guided onboarding and training to ensure smooth adoption.",
  },
];

const travelSteps = [
  {
    title: (
      <>
        Share Your <span className="text-emerald-600">Workflow</span>
      </>
    ),
    desc: "Tell us how your hotel, resort, or travel business runs today: demand, bookings, staff, transport, suppliers, and reporting. We map your exact operational flow.",
  },
  {
    title: (
      <>
        We Build Your{" "}
        <span className="text-emerald-600">Intelligent Platform</span>
      </>
    ),
    desc: "Our team designs and develops a tailored platform with forecasting, optimization, and simulation built around your processes, team structure, and growth targets.",
    badge: "Build Phase",
  },
  {
    title: (
      <>
        Launch, Optimize, and <span className="text-emerald-600">Scale</span>
      </>
    ),
    desc: "Go live with confidence while we support onboarding, improvements, and a progressive move toward automated decisions as your operations expand.",
  },
];

const gridBg = {
  backgroundImage:
    "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-3 mb-6">
    <div className="h-px w-8 bg-emerald-600" />
    <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
      {children}
    </div>
    <div className="h-px w-8 bg-emerald-600" />
  </div>
);

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(
    null,
  );
  const [visibleSolutions, setVisibleSolutions] = useState<Set<number>>(
    new Set(),
  );
  const [activeTab, setActiveTab] = useState(0);
  const solutionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = solutionRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) {
              setVisibleSolutions((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );
    solutionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const tab = intelligence[activeTab];

  const openRequirement = () =>
    setSelectedSolution({
      title: "Tourism & Hospitality Solutions",
      subtitle: "Tourism & hospitality consultation",
      description: "Inquiry submitted from tourism & hospitality solutions.",
    });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .sol-root * { font-family: 'DM Sans', sans-serif; }
        .sol-serif  { font-family: 'DM Serif Display', serif !important; }

        .sol-fadeUp {
          animation: solFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .sol-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .sol-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes solFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sol-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .sol-modal-animate {
          animation: solModalIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes solModalIn {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <section
        id="solutions"
        className="sol-root px-4 sm:px-6 py-16 sm:py-24 bg-white selection:bg-emerald-50"
      >
        <div className="mx-auto pt-8 max-w-7xl ">
          {/* HERO  */}
          <div className="relative min-h-[90vh] lg:px-6 px-0 py-8 bg-[#FAFAFA] flex items-center rounded-lg overflow-hidden font-sans selection:bg-emerald-100 selection:text-emerald-900">
            {/* ARCHITECTURAL BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/[0.3] border-l border-slate-200/60 hidden lg:block" />
            </div>

            <div className="relative max-w-[1400px] mx-auto w-full px-8 p-8 lg:px-10 grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center z-10">
              {/* LEFT SIDE: EDITORIAL CONTENT */}
              <div className="lg:col-span-6 xl:col-span-5 text-left md:text-center lg:text-left ">
                <div className="sol-fadeUp flex items-center gap-4 mb-8 overflow-hidden justify-start md:justify-center lg:justify-start">
                  <span className=" lg:text-[12px] text-[12px] md:text-[16px] font-bold text-emerald-700 uppercase tracking-[0.3em] whitespace-nowrap">
                    Tourism & Hospitality
                  </span>
                  <div className="h-[1px] w-12 bg-emerald-200" />
                </div>

                <h1 className="sol-fadeUp sol-serif text-5xl sm:text-6xl md:text-8xl xl:text-7xl font-normal text-slate-950 leading-[0.9]  mb-8">
                  Intelligent <br />
                  <span className="text-emerald-600">Operations</span>
                  <br />
                  <span className="text-slate-900 sol-serif">
                    for Hospitality.
                  </span>
                </h1>

                <div className="sol-fadeUp flex gap-6 items-start justify-center lg:justify-start">
                  <div className="w-1 h-20 bg-emerald-600 mt-2 hidden sm:block lg:block" />
                  <p className="text-lg md:text-2xl lg:text-lg text-slate-600 lg:max-w-md max-w-xl leading-relaxed">
                    Transform complex hospitality operations into intelligent,
                    adaptive systems that predict demand, optimize resources,
                    improve revenue, and automate operational decisions.
                  </p>
                </div>

                <div className="sol-fadeUp mt-8 flex items-center gap-8 justify-start md:justify-center lg:justify-start">
                  <button
                    onClick={openRequirement}
                    className="group/btn relative cursor-pointer overflow-hidden px-8 py-4 bg-slate-950 text-white lg:text-xs text-xs md:text-lg font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-slate-200 flex items-center gap-2"
                  >
                    <span className="relative z-10 transition-colors duration-300">
                      Send Requirement
                    </span>

                    <svg
                      className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 group-hover/btn:translate-x-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>

                    <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE: THE EXECUTIVE SHOWCASE */}
              <div className="lg:col-span-6 xl:col-span-7 relative ">
                <div className="relative group ">
                  {/* THE "PLATFORM" */}
                  <div className="absolute -inset-4 bg-white/40 backdrop-blur-md rounded-sm border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] -rotate-2 transition-transform duration-700" />

                  {/* MAIN IMAGE CONTAINER */}
                  <div className="relative z-20 pt-4 px-2 lg:px-8 md:px-10 sm:px-8">
                    <img
                      src="/Industry/travelhero-Photoroom.png"
                      alt="Tourism and hospitality management system"
                      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] brightness-[1.02] contrast-[1.02]"
                    />
                  </div>

                  {/* ACCENT LINE */}
                  <div className="absolute bottom-0 right-20 w-32 h-px bg-emerald-600/30 z-40" />
                </div>
              </div>
            </div>
          </div>

          {/* ── PROCESS STEPPER ──────────────────────── */}
          <div className="-mt-38 sm:mt-0 md:-mt-38 lg:mt-0">
            <SolutionTopicStepper steps={travelSteps} />
          </div>

          {/* ── INTRO + THE CHALLENGE ────────────────── */}
          <section className="bg-white py-16 md:py-24 px-0">
            <div className="max-w-4xl mx-auto text-center px-4 mb-16 md:mb-20">
              <SectionBadge>Intelligent Operations</SectionBadge>
              <p className="text-2xl md:text-3xl text-slate-700 font-normal leading-snug">
                Hotels, resorts, travel companies and tourism operators manage
                constantly changing demand, room inventory, staff,
                transportation, activities, pricing and guest requirements.{" "}
                <span className="text-emerald-700 font-medium">
                  We build intelligent systems
                </span>{" "}
                that predict demand, optimize resources, improve revenue,
                simulate scenarios and automate operational decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-14 md:mb-20">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    The Challenge
                  </div>
                </div>
                <h3 className="sol-serif text-5xl sm:text-6xl md:text-7xl font-normal text-slate-900 tracking-tight leading-[1.0]">
                  Highly Dynamic <br />
                  <span className="text-emerald-600">Operations.</span>
                </h3>
              </div>

              <div className="lg:pt-14">
                <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-6">
                  Hospitality operations change by the hour. Demand, capacity
                  and guest expectations rarely stand still.
                </p>
                <div className="h-px w-20 bg-emerald-600" />
              </div>
            </div>

            <div className="border-t border-stone-300 bg-[#F5F5F7]/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-300 border-b border-stone-300">
                {challenges.map((item, i) => (
                  <div
                    key={item}
                    className="group p-8 md:p-10 bg-[#F5F5F7] hover:bg-white transition-all duration-300 flex flex-col justify-between"
                  >
                    <span className="font-sans text-[11px] font-medium tracking-wider text-stone-400 group-hover:text-stone-900 uppercase transition-colors duration-300 mb-6 block tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p className="font-sans text-xl md:text-2xl font-normal text-stone-900 tracking-tight leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── OUR SOLUTIONS (tabs) ─────────────────── */}
          <section className="bg-white py-16 md:py-20 px-0">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14 md:mb-20">
              <SectionBadge>Our Solutions</SectionBadge>
              <h2 className="sol-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                Intelligence for{" "}
                <span className="text-emerald-600">Every Guest Journey</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                From demand and revenue to inventory, guests, staff and
                transport, connected into one decision layer.
              </p>
            </div>

            <div className="border border-emerald-600/20 bg-[#ffffff] shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
              {/* Tab Rail */}
              <div className="bg-[#ffffff] border-b border-emerald-600/10 p-4">
                <div
                  role="tablist"
                  className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-stretch gap-2"
                >
                  {intelligence.map((s, i) => {
                    const on = i === activeTab;

                    return (
                      <button
                        key={s.title}
                        role="tab"
                        aria-selected={on}
                        onClick={() => setActiveTab(i)}
                        className={`lg:flex-1 lg:min-w-0 text-left px-4 py-3 transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                          on
                            ? "bg-emerald-600 text-white shadow-sm"
                            : "bg-[#ffffff] hover:bg-emerald-50/50 text-slate-600 border border-emerald-600/10"
                        }`}
                      >
                        <span
                          className={`text-xs md:text-sm font-mono tabular-nums shrink-0 ${
                            on ? "text-emerald-100" : "text-slate-400"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm md:text-base font-medium tracking-tight truncate">
                          {s.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Content Panel */}
              <div
                role="tabpanel"
                className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#ffffff]"
              >
                {/* Introduction */}
                <div className="lg:col-span-4 lg:pr-8 lg:border-r border-emerald-600/10">
                  <h3 className="sol-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-[1.1] mb-4">
                    {tab.title}
                  </h3>

                  <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                    {tab.intro}
                  </p>

                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700 mt-6">
                    What we deliver
                  </p>
                </div>

                {/* Deliverables */}
                <div className="lg:col-span-8 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tab.items.map((it, idx) => (
                    <div
                      key={it}
                      className="group flex items-start gap-4 p-5 bg-emerald-50/30 hover:bg-emerald-600 transition-all duration-300 border border-emerald-600/10 hover:border-emerald-600"
                    >
                      <span className="text-xs md:text-sm font-mono font-medium text-emerald-700 group-hover:text-white transition-colors duration-300 tabular-nums shrink-0 mt-1">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <p className="text-base md:text-lg text-slate-800 group-hover:text-white font-normal leading-snug transition-colors duration-300">
                        {it}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── RESORT & HOTEL DIGITAL TWINS ─────────── */}
          <section className="py-12 md:py-16 px-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <div className="md:col-span-8 group relative overflow-hidden bg-[#062c1b] p-8 md:p-12 flex flex-col justify-end shadow-[0_32px_80px_rgba(6,44,27,0.3)]">
                <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-all duration-1000 pointer-events-none" />
                <div
                  className="absolute inset-0 opacity-[0.035] pointer-events-none"
                  style={gridBg}
                />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    Test Before You Implement
                  </div>
                  <h4 className="sol-serif text-3xl md:text-5xl font-normal text-white mb-6 tracking-tight leading-[1.05]">
                    Resort & Hotel Digital Twins
                  </h4>
                  <p className="text-emerald-100 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                    Model complex hospitality operations and test scenarios
                    before implementing them.
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 group relative border border-slate-200 hover:border-emerald-400 p-8 md:p-10 flex flex-col transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)] overflow-hidden">
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />
                <div className="flex items-center gap-3 mb-6">
                  <span className="sol-serif text-xl italic text-emerald-600">
                    For example
                  </span>
                  <div className="h-px flex-1 bg-slate-200 group-hover:bg-emerald-300 transition-colors duration-500" />
                </div>
                <ul className="space-y-4">
                  {twinQuestions.map((q) => (
                    <li
                      key={q}
                      className="flex gap-3 text-slate-700 font-light leading-snug"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── AI-POWERED TRAVEL OPERATIONS ─────────── */}
          <section className="bg-white py-16 md:py-24 px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-slate-200 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)]">
              <div className="lg:col-span-4 bg-emerald-800 p-8 md:p-12 flex flex-col justify-between text-white min-h-[200px] relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={gridBg}
                />
                <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  For Agencies & Tour Operators
                </p>
                <h4 className="relative sol-serif text-3xl md:text-4xl font-normal tracking-tight leading-snug mt-8">
                  AI-Powered Travel Operations
                </h4>
              </div>

              <div className="lg:col-span-8 p-8 md:p-14 bg-white">
                <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-8">
                  AI can continuously analyze the entire business flow and
                  identify{" "}
                  <span className="text-slate-900 font-medium italic">
                    actionable opportunities.
                  </span>
                </p>

<div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10">
  {travelPipeline.map((s, i) => (
    <React.Fragment key={s}>
      <div className="group relative flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 bg-white text-emerald-700 border border-emerald-600/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-emerald-600/60 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
        {/* Subtle top inner highlight for depth */}
        <div className="absolute inset-x-0 top-0 h-[1px] rounded-t-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent" />

        <span className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold transition-transform duration-300 group-hover:scale-105 bg-emerald-600 text-white shadow-sm">
          {i + 1}
        </span>
        <span className="relative z-10">{s}</span>
      </div>

      {i < travelPipeline.length - 1 && (
        <div className="flex items-center px-1 transition-opacity duration-300 text-emerald-600/70">
          <div className="h-[1px] w-3 sm:w-4 bg-emerald-600/40" />
          <svg
            className="w-3.5 h-3.5 -ml-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </React.Fragment>
  ))}
</div>

                <div className="relative bg-[#062c1b] p-8 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                    Example insight
                  </p>
                  <p className="sol-serif text-xl md:text-2xl text-white leading-snug">
                    “Several high-value quotations are approaching their
                    expected conversion window. Prioritize follow-up with these
                    customers.”
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── USE CASES ────────────────────────────── */}
          <section className="bg-white py-16 md:py-20 px-0">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14 md:mb-20">
              <SectionBadge>Example Use Cases</SectionBadge>
              <h2 className="sol-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.05]">
                Where It <span className="text-emerald-600">Applies</span>
              </h2>
            </div>

            <div className="flex flex-col divide-y divide-slate-100 border-y border-slate-100">
              {useCases.map((u, i) => (
                <div
                  key={u.name}
                  className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-10 md:py-12 px-4 sm:px-8 hover:bg-slate-50 hover:shadow-xl transition-all duration-700 ease-in-out"
                >
                  <div className="flex items-center gap-6 md:w-96 shrink-0">
                    <span className="sol-serif text-xs italic text-slate-300 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-500">
                      {u.name}
                    </h4>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed flex-1">
                    {u.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── OUTCOME ──────────────────────────────── */}
          <section className="py-12 md:py-16 px-0">
            <div className="bg-[#062c1b] relative overflow-hidden p-8 md:p-16 shadow-[0_32px_80px_rgba(6,44,27,0.3)]">
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={gridBg}
              />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />
              <div className="relative z-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-8">
                  The Outcome
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-10">
                  {outcomes.map((o) => (
                    <p
                      key={o}
                      className="sol-serif text-3xl md:text-4xl text-white tracking-tight py-5 border-b border-emerald-900 hover:text-emerald-300 transition-colors duration-500"
                    >
                      {o}
                    </p>
                  ))}
                </div>
                <button
                  onClick={openRequirement}
                  className="group/btn relative cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-[0.18em] overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(16,185,129,0.4)] active:scale-[0.98]"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-emerald-700">
                    Discuss Your Operation
                  </span>
                  <svg
                    className="relative z-10 h-3.5 w-3.5 transition-all duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:text-emerald-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                </button>
              </div>
            </div>
          </section>

          {/* ── OUR PLATFORMS HEADER ─────────────────── */}
          <div className="max-w-4xl mx-auto text-center px-4 pt-16 md:pt-24 pb-12 md:pb-16">
            <SectionBadge>Our Platforms</SectionBadge>
            <h2 className="sol-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
              Ready-to-Deploy{" "}
              <span className="text-emerald-600">Travel Platforms</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
              Proven systems you can launch today, designed to connect with the
              intelligence layer above as your operation matures.
            </p>
          </div>

          {/* ── SOLUTION GRID ────────────────────────── */}
          <div className="grid gap-px border border-slate-100 overflow-hidden">
            {solutions
              .slice()
              .reverse()
              .map((solution, index) => (
                <div
                  key={solution.title}
                  ref={(el) => {
                    solutionRefs.current[index] = el;
                  }}
                  className={`group relative gap-12 md:gap-4 grid md:grid-cols-2 bg-white transition-all duration-700 ${
                    visibleSolutions.has(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${(index % 2) * 150}ms` }}
                >
                  {/* ── IMAGE SIDE — UNCHANGED ── */}
                  <div
                    className={`relative flex h-72 sm:h-96 md:h-[450px] lg:h-[550px] items-center justify-center overflow-hidden bg-white p-6 sm:p-12 ${index % 2 === 1 ? "md:order-last" : ""}`}
                  >
                    <div className="absolute h-52 w-52 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-[3rem] sm:rounded-[4rem] bg-white border border-slate-100 scale-110 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]" />
                    <div className="absolute h-52 w-52 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-[3rem] sm:rounded-[4rem] border-2 border-emerald-600/60 rotate-[25deg] scale-110" />
                    <div className="absolute top-16 right-12 sm:top-20 sm:right-16 md:top-24 md:right-20 z-0 h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-3xl bg-emerald-50/40 backdrop-blur-md border border-white/50 shadow-sm rotate-12" />
                    <div className="relative z-10 flex flex-col items-center -translate-y-6 sm:-translate-y-8 md:-translate-y-12">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full sm:scale-110 md:scale-125 lg:w-[90%] lg:scale-110 object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.12)]"
                      />
                      <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 h-6 sm:h-8 md:h-10 w-3/4 rounded-[100%] bg-emerald-600/50 blur-3xl opacity-100" />
                      <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 h-2 w-1/2 rounded-[100%] bg-emerald-950/20 blur-md opacity-100" />
                    </div>
                  </div>

                  {/* ── TEXT SIDE ── */}
                  <div className="relative flex flex-col justify-between p-8 sm:p-12 lg:p-20 lg:py-28 bg-white border-l border-slate-100 transition-all duration-500 overflow-hidden">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="sol-serif text-xs italic text-slate-300 tabular-nums">
                        {String(solutions.length - index).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-slate-100 group-hover:bg-emerald-200 transition-colors duration-500" />
                    </div>

                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em] mb-3">
                        {solution.subtitle}
                      </p>

                      <h3 className="sol-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-5 group-hover:translate-x-1 transition-transform duration-500">
                        {solution.title}
                      </h3>

                      <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed max-w-md border-b border-slate-100 pb-8 group-hover:border-emerald-200 transition-colors duration-500">
                        {solution.description}
                      </p>
                    </div>

                    <div className="mt-8">
                      <button
                        onClick={() => setSelectedSolution(solution)}
                        className="group/btn relative cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.18em] overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] active:scale-[0.98]"
                      >
                        <span className="relative z-10 transition-colors duration-300">
                          Send Requirement
                        </span>
                        <svg
                          className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 group-hover/btn:translate-x-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* ── FAQ ──────────────────────────────────── */}
        <div className="mt-20 sm:mt-32 lg:px-0 px-1 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-600" />
              <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                Tourism & Hospitality FAQ
              </span>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h3 className="sol-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-4 leading-tight">
              Frequently Asked{" "}
              <span className=" text-emerald-600">Questions</span>
            </h3>

            <p className="text-slate-500 font-light max-w-2xl text-base sm:text-lg mx-auto leading-relaxed">
              Clear answers to common questions about our tourism and
              hospitality solutions.
            </p>
          </div>

          <div>
            {faqItems.map((item, index) => (
              <QuestionItem
                key={`${item.question}-${index}`}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {/* ── MODAL ──────────────────────────────────── */}
        {selectedSolution &&
          createPortal(
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
              <div
                className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
                onClick={() => setSelectedSolution(null)}
              />
              <div
                data-lenis-prevent
                className="sol-modal-animate relative w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
              >
                <div className="p-6 sm:p-8 lg:p-14">
                  <InquiryForm
                    inquiryType="solution"
                    topic={selectedSolution.title}
                    industry={selectedSolution.title}
                    onSuccess={() => setSelectedSolution(null)}
                    onClose={() => setSelectedSolution(null)}
                    showCloseButton={true}
                  />
                </div>
              </div>
            </div>,
            document.body,
          )}
      </section>
    </>
  );
}
