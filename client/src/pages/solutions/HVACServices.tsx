import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import QuestionItem from "@/components/QuestionItem";
import ValueCard from "@/components/ValueCard";
import InquiryForm from "@/components/InquiryForm";
import SolutionTopicStepper from "@/components/SolutionTopicStepper";

const faqItems = [
  {
    question: "How can software help HVAC and MEP service businesses?",
    answer:
      "Custom software helps HVAC, electrical, and plumbing companies manage service requests, technician scheduling, maintenance contracts, compliance records, and customer relationships more efficiently while reducing manual work.",
  },
  {
    question: "Can one system cover HVAC, electrical, and plumbing work?",
    answer:
      "Yes. The platform is built around a shared core of jobs, customers, technicians, and billing, with trade-specific modules on top, so mixed MEP teams work from a single system instead of three separate tools.",
  },
  {
    question: "Can the system handle job scheduling and dispatch?",
    answer:
      "Yes. Smart scheduling tools assign technicians, estimate job duration, and optimize routes for faster service delivery. Multi-crew dispatch and job-site assignment are supported for larger projects.",
  },
  {
    question: "Can it manage emergency call-outs and urgent jobs?",
    answer:
      "Yes. Emergency jobs can be flagged as priority, instantly routed to the nearest available technician, and the customer is updated in real time.",
  },
  {
    question: "Does it support recurring maintenance services?",
    answer:
      "Yes. Preventive maintenance contracts and recurring service schedules are managed, tracked, and reminded to customers automatically.",
  },
  {
    question: "Can we manage compliance certificates and safety records?",
    answer:
      "Yes. The platform stores compliance certificates, safety inspection records, and permit tracking so your business stays audit-ready at all times.",
  },
  {
    question: "Can we handle quoting, invoicing, parts, and supplier orders?",
    answer:
      "Yes. Technicians can create quotes on-site from mobile devices, convert approved quotes to jobs, and invoice on completion. Parts tracking, low-stock alerts, and supplier orders keep vans and sites stocked.",
  },
  {
    question: "Can we track technicians in real time?",
    answer:
      "Yes. The platform includes technician tracking, job status updates, and mobile access for field teams so dispatchers always have full visibility.",
  },
  {
    question: "Do I need to pay before development starts?",
    answer:
      "No. We first build the solution based on your requirements. If it fits your business needs, you can then use it as a managed pay-as-you-go software service.",
  },
];

const benefits = [
  {
    title: "Perfect Fit for Business Processes",
    desc: "Built around your HVAC and MEP workflows instead of forcing your team to adapt to a generic system.",
  },
  {
    title: "Higher Operational Efficiency",
    desc: "Eliminates unnecessary features and focuses only on functions that create real value for your trades.",
  },
  {
    title: "Better Integration",
    desc: "Easily integrates with existing internal systems, databases, supplier tools, compliance databases, and accounting platforms.",
  },
  {
    title: "Competitive Advantage",
    desc: "Unique capabilities that competitors using the same off-the-shelf SaaS platforms simply cannot replicate.",
  },
  {
    title: "Full Control & Ownership",
    desc: "You control features, updates, security policies, and data without depending on a vendor's roadmap.",
  },
  {
    title: "Scalability for Future Needs",
    desc: "The system evolves as your business grows, adds technicians, new trades, or expands service territories.",
  },
  {
    title: "Enhanced Security & Compliance",
    desc: "Security mechanisms designed specifically for your operational and regulatory requirements.",
  },
];

const steps = [
  {
    title: (
      <>
        Discuss Your <span className="text-emerald-600">Requirements</span>
      </>
    ),
    desc: "Share your HVAC, electrical, or plumbing business challenges and goals. We listen, analyse your workflows, and define the exact solution you need.",
  },
  {
    title: (
      <>
        We Build — <span className="text-emerald-600">No Upfront Payment</span>
      </>
    ),
    desc: "Our team develops the full custom solution tailored to your operations. No payment required until it's ready and approved by you.",
    badge: "No Initial Payment",
  },
  {
    title: (
      <>
        <span className="text-emerald-600">Pay-as-You-Go</span>, Fully Managed
      </>
    ),
    desc: "If the solution fits your business, you adopt it as a fully managed pay-as-you-go service. We handle hosting, updates, and support.",
  },
];

const trades = [
  {
    key: "hvac",
    name: "Mechanical & HVAC",
    tagline: "Keep every system running and every customer comfortable.",
    features: [
      "Smart scheduling and dispatch",
      "Recurring maintenance contracts",
      "Real-time technician tracking",
      "Route and job-duration optimization",
    ],
    image: "/Industry/havc.jpg",
    labels: ["Air Conditioning", "Heating Systems", "Ventilation"],
    icon: (
      <>
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
      </>
    ),
  },
  {
    key: "electrical",
    name: "Electrical",
    tagline: "Master crews, compliance, and cash flow on every site.",
    features: [
      "Compliance certificates and permit tracking",
      "Safety inspection records",
      "Multi-crew and job-site dispatch",
      "Project quoting and milestone billing",
    ],
    image: "/Industry/elec.jpg",
    labels: ["Site Inspection", "System Installation", "Ongoing Maintenance"],
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    key: "plumbing",
    name: "Plumbing",
    tagline: "Respond fast, quote on-site, and never run out of parts.",
    features: [
      "Emergency call-out dispatch",
      "On-site quotes and automatic invoicing",
      "Parts, van stock, and supplier orders",
      "Service history for every property",
    ],
    image: "/Industry/plum.jpg",
    labels: ["Leak Detection", "Pipe Installation", "Routine Servicing"],
    icon: (
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    ),
  },
];

const challenges = [
  "Unplanned equipment failures",
  "Reactive maintenance",
  "Inefficient technician scheduling",
  "Excessive energy consumption",
  "Poor spare-parts planning",
  "Long service response times",
  "Underutilized technicians",
  "Difficulty predicting workload",
  "Limited visibility across service operations",
  "Complex commercial building environments",
];

const aiSolutions = [
  {
    title: "Predictive Maintenance",
    desc: "Identify potential equipment failures before they become costly breakdowns.",
    points: [
      "Failure prediction",
      "Condition monitoring",
      "Sensor anomaly detection",
      "Equipment health scoring",
      "Maintenance forecasting",
      "Remaining useful life estimation",
    ],
  },
  {
    title: "Intelligent Scheduling & Dispatch",
    desc: "Optimize technicians, jobs, locations, skills, priorities, and time windows.",
    points: [
      "Technician-job matching",
      "Dynamic dispatch",
      "Route optimization",
      "Emergency-job prioritization",
      "Workload balancing",
      "SLA-aware scheduling",
    ],
  },
  {
    title: "Building & HVAC Digital Twins",
    desc: "Create computational models of buildings and HVAC systems to understand and simulate their behavior.",
    points: [
      "What happens if occupancy increases 30%?",
      "What happens if an HVAC unit fails?",
      "How can we reduce energy consumption while maintaining comfort?",
    ],
  },
  {
    title: "Energy Optimization",
    desc: "Continuously analyze building conditions and operational parameters to identify opportunities for energy savings.",
    points: [
      "Energy forecasting",
      "Load prediction",
      "HVAC optimization",
      "Peak-demand management",
      "Anomaly detection",
      "Adaptive optimization",
    ],
  },
  {
    title: "MEP Operational Intelligence",
    desc: "Connect information from BMS, CMMS, IoT, ERP and service-management systems to create a unified operational intelligence layer.",
    points: ["BMS", "CMMS", "IoT", "ERP", "Service management"],
  },
];

const capabilityPath = [
  "Operational AI",
  "Digital Twins",
  "Optimization",
  "Autonomous Decision Making",
  "Self-Optimization",
];

const useCases = [
  {
    title: "Commercial Buildings",
    desc: "Optimize HVAC performance, energy consumption, occupancy response and maintenance.",
  },
  {
    title: "HVAC Contractors",
    desc: "Optimize service scheduling, technician utilization, inventory and maintenance operations.",
  },
  {
    title: "Facilities Management",
    desc: "Predict maintenance requirements and optimize workforce and asset utilization.",
  },
  {
    title: "Industrial Facilities",
    desc: "Combine equipment intelligence, predictive maintenance and energy optimization.",
  },
];

export default function HVACServices() {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [coverVisible, setCoverVisible] = useState(false);
  const coverRef = useRef<HTMLDivElement | null>(null);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const benefitsRef = useRef<HTMLDivElement | null>(null);
  const [activeTrade, setActiveTrade] = useState(0);

  useEffect(() => {
    const coverObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setCoverVisible(true);
      },
      { threshold: 0.15 },
    );
    if (coverRef.current) coverObs.observe(coverRef.current);

    const benefObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setBenefitsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (benefitsRef.current) benefObs.observe(benefitsRef.current);

    return () => {
      coverObs.disconnect();
      benefObs.disconnect();
    };
  }, []);

  const trade = trades[activeTrade];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .hvac-root * { font-family: 'DM Sans', sans-serif; }
        .hvac-serif { font-family: 'DM Serif Display', serif; }

        .hvac-hero-line {
          animation: hvac-fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hvac-hero-line:nth-child(2) { animation-delay: 0.1s; }
        .hvac-hero-line:nth-child(3) { animation-delay: 0.2s; }
        .hvac-hero-line:nth-child(4) { animation-delay: 0.3s; }

        @keyframes hvac-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hvac-cover {
          opacity: 0;
          transform: scale(0.97);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .hvac-cover.visible { opacity: 1; transform: scale(1); }

        .hvac-benefit {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .hvac-benefit.visible { opacity: 1; transform: translateY(0); }

        .hvac-tag { transition: background 0.25s, color 0.25s, border-color 0.25s; }
        .hvac-tag:hover { background: #ecfdf5; border-color: #6ee7b7; color: #065f46; }

        .hvac-trade-fade { animation: hvac-tradeIn 0.55s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes hvac-tradeIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

      <section className="hvac-root w-full py-16 md:py-32 lg:py-32 bg-[#ffffff]">
        <div className="mx-auto">
          <div className="max-w-8xl px-4 sm:px-8 lg:px-24">
            {/* ── HVAC & MEP EDITORIAL HERO ───────────────────────────────── */}
            <div className="relative min-h-[90vh] lg:px-6 px-0 lg:py-0 sm:py-8 py-8 bg-[#FAFAFA] flex items-center rounded-lg overflow-hidden font-sans selection:bg-emerald-100 selection:text-emerald-900">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/[0.35] border-l border-slate-200/60 hidden lg:block" />
                <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[60%] bg-emerald-50/50 blur-[120px] rounded-full" />
              </div>

              <div className="relative max-w-[1400px] mx-auto w-full px-8 p-8 lg:px-10 grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center z-10">
                {/* LEFT SIDE */}
                <div className="lg:col-span-6 xl:col-span-5 text-left md:text-center lg:text-left">
                  <div className="hvac-hero-line flex items-center gap-4 mb-8 overflow-hidden justify-start md:justify-center lg:justify-start">
                    <span className="lg:text-[12px] text-[12px] md:text-[16px] font-bold text-emerald-700 uppercase tracking-[0.3em] whitespace-nowrap">
                      Industry Solutions
                    </span>
                    <div className="h-[1px] w-12 bg-emerald-200" />
                  </div>

                  <h1 className="hvac-hero-line hvac-serif text-5xl sm:text-6xl md:text-8xl xl:text-7xl font-normal text-slate-950 leading-[0.8]  mb-8">
                    HVAC &amp; MEP <br />
                    <span className="text-emerald-600">Solutions</span>
                    <br />
                    <span className="text-slate-900 hvac-serif">
                      Architected.
                    </span>
                  </h1>

                  <div className="hvac-hero-line flex gap-6 items-start justify-center lg:justify-start">
                    <div className="w-1 h-20 bg-emerald-600 mt-2 hidden sm:block lg:block" />
                    <p className="text-lg md:text-3xl lg:text-lg text-slate-600 lg:max-w-md max-w-xl leading-relaxed">
                      Smart software built for HVAC, electrical, and plumbing
                      enterprises. Seamlessly manage{" "}
                      <span className="text-emerald-700 font-medium">
                        jobs, crews, compliance, and maintenance contracts
                      </span>{" "}
                      across every MEP trade.
                    </p>
                  </div>

                  <div className="hvac-hero-line mt-8 flex flex-wrap gap-3 justify-start md:justify-center lg:justify-start">
                    {[
                      "Scheduling & Dispatch",
                      "AI-Assisted CRM",
                      "Technician Tracking",
                      "Maintenance Contracts",
                      "Compliance Records",
                      "Quote & Invoice",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="hvac-tag text-[9px] lg:text-[10px] md:text-[14px] font-bold text-slate-500 uppercase tracking-widest border border-slate-400 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="hvac-hero-line mt-8 flex items-center gap-8 justify-start md:justify-center lg:justify-start">
                    <button
                      onClick={() => setShowInquiryForm(true)}
                      className="group/btn relative cursor-pointer overflow-hidden px-8 py-4 bg-slate-950 text-white lg:text-xs text-xs md:text-xl font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-slate-200 flex items-center gap-2"
                    >
                      <span className="relative z-10 transition-colors duration-300">
                        Send Requirements
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

                {/* RIGHT SIDE */}
                <div className=" lg:col-span-6 xl:col-span-7 relative">
                  <div className="relative group animate-float">
                    <div className="absolute -inset-4 bg-white/40 backdrop-blur-md rounded-sm border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] -rotate-2 transition-transform duration-700 group-hover:rotate-0" />

                    <div className="relative z-20 pt-4 px-0 lg:px-14 md:px-16 sm:px-4 animate-float">
                      <img
                        src="/Industry/hvachero-Photoroom.png"
                        alt="HVAC and MEP service software"
                        className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] brightness-[1.01] contrast-[1.01]"
                      />
                    </div>

                    <div className="absolute -top-10 -right-10 w-32 h-32 border-t border-r border-emerald-200/50 -z-10" />
                    <div className="absolute bottom-0 right-20 w-32 h-px bg-emerald-600/30 z-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 3 STEPS ─────────────────────────────── */}
          <div className="-mt-38 sm:mt-0 md:-mt-38 lg:mt-0">
            <SolutionTopicStepper steps={steps} threshold={0.45} />
          </div>

          {/*  COVER IMAGE BANNER  */}
          <div
            ref={coverRef}
            className={`hvac-cover w-full mb-16 md:mb-28 ${coverVisible ? "visible" : ""}`}
          >
            <div className="relative lg:pl-108 md:pl-72 pl-32 overflow-hidden">
              <img
                src="/Industry/hvac.jpg"
                alt="HVAC professional at work"
                className="w-full h-[380px] sm:h-[440px] md:h-[580px] object-cover object-top"
              />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl w-full mx-auto px-8 sm:px-14">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white/10 border border-black/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span className="text-black text-[12px] font-bold uppercase tracking-[0.2em]">
                        HVAC &amp; MEP Software Experts
                      </span>
                    </div>

                    <h3 className="hvac-serif text-4xl sm:text-6xl font-normal text-black leading-[1.1] mb-5">
                      Run your trades business{" "}
                      <span className="text-emerald-600">
                        like never before.
                      </span>
                    </h3>

                    <p className="text-black text-base sm:text-xl  leading-relaxed mb-8 max-w-md">
                      From the first call to the final invoice — every part of
                      your HVAC, electrical, and plumbing workflow, automated
                      and optimised.
                    </p>

                    <button
                      onClick={() => {
                        document
                          .getElementById("hvac-services-section")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                      className="group cursor-pointer relative inline-flex items-center gap-3 px-10 py-4 bg-emerald-600 text-slate-50 font-semibold text-xs uppercase tracking-[0.18em] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] active:scale-[0.98]"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        Explore Services
                      </span>
                      <svg
                        className="relative z-10 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
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
                      <div className="absolute inset-0 bg-slate-900 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── TAILORED SOFTWARE SECTION ────────────── */}
          <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-28">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="group py-12 md:py-16 md:pr-16 border-b md:border-b-0 md:border-r border-slate-200">
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-emerald-600" />
                    <span className="text-[12px] font-bold text-emerald-600 uppercase tracking-[0.2em]">
                      Our Approach
                    </span>
                  </div>

                  <h2 className="hvac-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.1]">
                    We provide tailored software services for your{" "}
                    <span className="text-emerald-600  transition-colors duration-500">
                      trades business.
                    </span>
                  </h2>

                  <p className="text-slate-500 leading-relaxed text-base md:text-lg ">
                    Generic SaaS platforms are built for everyone — which means
                    they're perfect for no one. Your HVAC, electrical, or
                    plumbing business has unique workflows, seasonal patterns,
                    and compliance needs that demand a system built around{" "}
                    <span className="text-slate-900 font-medium">
                      your reality, not a template
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div ref={benefitsRef} className="py-12 md:py-16 md:pl-16">
                <div className="space-y-4">
                  {benefits.map((b, i) => (
                    <div
                      key={b.title}
                      className={`hvac-benefit group/b flex items-start gap-4 p-4 border border-transparent hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300 cursor-default ${benefitsVisible ? "visible" : ""}`}
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <div className="mt-1 w-5 h-5 shrink-0 border border-emerald-400 flex items-center justify-center group-hover/b:bg-emerald-500 transition-colors duration-300">
                        <svg
                          className="w-2.5 h-2.5 text-emerald-600 group-hover/b:text-white transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-slate-900 mb-0.5">
                          {b.title}
                        </p>
                        <p className="text-slate-500 text-md leading-relaxed ">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── ONE PLATFORM, EVERY MEP TRADE ────────── */}
          <div className="max-w-7xl mx-auto px-2 md:px-6 pt-4 mb-20 md:mb-32">
            <div className="max-w-4xl mx-auto text-center px-4 mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  MEP Trades
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>
              <h2 className="hvac-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-slate-900 leading-[1.05] mb-5">
                One platform,{" "}
                <span className="text-emerald-600">every MEP trade.</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Mechanical, electrical, and plumbing teams share one core system
                of jobs, customers, crews, and billing, with the trade-specific
                tools each one needs.
              </p>
            </div>

            {/* Trade selector */}
            <div
              role="tablist"
              className="grid grid-cols-3 border border-slate-200 mb-8 md:mb-12"
            >
              {trades.map((t, i) => {
                const on = i === activeTrade;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActiveTrade(i)}
                    className={`relative cursor-pointer flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 px-2 py-4 md:py-6 border-r last:border-r-0 border-slate-200 transition-colors duration-300 ${
                      on ? "bg-emerald-600 text-white" : "bg-white text-slate-600 hover:bg-emerald-50"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {t.icon}
                    </svg>
                    <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.12em] md:tracking-[0.18em] text-center">
                      {t.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Trade panel */}
            <div key={trade.key} className="hvac-trade-fade">
              <div className="grid lg:grid-cols-12 border border-slate-200 mb-8 md:mb-12">
                <div className="lg:col-span-5 bg-[#062c1b] text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4">
                    {trade.name}
                  </p>
                  <h3 className="hvac-serif text-3xl md:text-4xl leading-tight">
                    {trade.tagline}
                  </h3>
                </div>
                <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-slate-200">
                  {trade.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 bg-white p-6 md:p-8 text-slate-700 leading-relaxed hover:bg-emerald-50/60 transition-colors duration-300"
                    >
                      <svg
                        className="w-4 h-4 mt-1 shrink-0 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-lg font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Triptych for the selected trade */}
              <div
                className="grid items-center"
                style={{
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "clamp(4px, 1.5vw, 24px)",
                }}
              >
                {trade.labels.map((label, index) => {
                  const isMiddle = index === 1;
                  return (
                    <div
                      key={label}
                      className={`relative overflow-hidden border-[3px] border-slate-900 group transition-all duration-500
                        ${isMiddle ? "shadow-2xl z-10 aspect-[3/6.4] md:aspect-[3/5.2]" : "shadow-lg z-0 aspect-[3/6.1] md:aspect-3/5"}`}
                    >
                      <div
                        className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105"
                        style={{
                          backgroundImage: `url('${trade.image}')`,
                          backgroundSize: "300% 100%",
                          backgroundPosition: `${index * 50}% center`,
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                      <div
                        className={`absolute font-mono font-bold ${isMiddle ? "text-emerald-600" : "text-black/90"}`}
                        style={{
                          top: "clamp(4px, 6%, 16px)",
                          right: "clamp(4px, 8%, 24px)",
                          fontSize: "clamp(8px, 1.2vw, 12px)",
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── SERVICES ─────────────────────────────── */}
          <div
            id="hvac-services-section"
            className="max-w-7xl mx-auto px-6 lg:px-6 md:px-8 mb-20 md:mb-28"
          >
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-emerald-600" />
                  <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.2em]">
                    What We Offer
                  </span>
                </div>
                <h2 className="hvac-serif text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 leading-none">
                  Our <span className="text-emerald-600">Services.</span>
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-500 text-sm font-medium uppercase tracking-[0.15em]">
                <span> available solutions </span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard
                num="01"
                title="AI Assisted CRM"
                desc="Continuous follow-ups, churn prediction, and customer retention tools that keep your HVAC, electrical, and plumbing clients coming back."
                link="CRM"
              />
              <ValueCard
                num="02"
                title="Smart Job Scheduling & Dispatch"
                desc="Duration prediction, route optimisation, multi-crew dispatch, and emergency prioritisation so every job runs on time and on budget."
                link="Scheduling"
              />
              <ValueCard
                num="03"
                title="Compliance & Safety Records"
                desc="Certificates, inspection records, and permit tracking kept in one place so your business is always audit-ready."
                link="Compliance"
              />
              <ValueCard
                num="04"
                title="Quotes, Billing & Invoicing"
                desc="On-site mobile quotes, project milestone billing, and automatic invoices on job completion."
                link="Billing"
              />
              <ValueCard
                num="05"
                title="Parts & Inventory Management"
                desc="Van stock tracking, low-stock alerts, and supplier orders so technicians always arrive equipped for the job."
                link="Inventory"
              />
              <ValueCard
                num="06"
                title="Custom Software & AI Solutions"
                desc="Bespoke platforms and AI-powered tools designed entirely around your MEP business workflows and growth goals."
                link="Custom AI"
              />
            </div>
          </div>

          {/* ── INTELLIGENT OPERATIONS ───────────────── */}
          <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
            <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  AI-Powered Operations
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>
              <h2 className="hvac-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-slate-900 leading-[1.05] mb-5">
                Intelligent Operations for{" "}
                <span className="text-emerald-600">HVAC &amp; MEP</span>
              </h2>
              <p className="text-xl text-slate-700 font-medium mb-5">
                From reactive maintenance to intelligent, optimized building
                operations
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                HVAC and MEP operations involve thousands of interconnected
                decisions — equipment performance, energy consumption,
                technician availability, service requests, spare parts,
                schedules, building conditions, and customer requirements. We
                build AI-powered systems that help HVAC and MEP companies
                predict problems, optimize resources, simulate operational
                scenarios, and progressively automate decision-making.
              </p>
            </div>

            {/* The Challenge */}
            <div className="grid lg:grid-cols-12 border border-slate-200 mb-16 md:mb-24">
              <div className="lg:col-span-5 bg-[#062c1b] text-white p-8 md:p-12 flex flex-col justify-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4">
                  The Challenge
                </p>
                <h3 className="hvac-serif text-3xl md:text-4xl leading-tight mb-5">
                  Fragmented systems and manual coordination.
                </h3>
                <p className="text-emerald-100/80 leading-relaxed">
                  HVAC/MEP organizations often operate across fragmented systems
                  and rely heavily on manual coordination.
                </p>
              </div>
              <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-slate-200">
                {challenges.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 bg-white p-5 md:p-6 text-slate-700 leading-relaxed hover:bg-emerald-50/60 transition-colors duration-300"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span className="text-base font-medium">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Solutions */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-emerald-600" />
              <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.2em]">
                Our Solutions
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-24">
              {aiSolutions.map((s, i) => (
                <div
                  key={s.title}
                  className="group p-8 border border-slate-200 hover:border-emerald-400 hover:shadow-[0_24px_64px_rgba(0,0,0,0.06)] transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="hvac-serif text-2xl italic text-emerald-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-slate-200 group-hover:bg-emerald-300 transition-colors duration-500" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight mb-3">
                    {s.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-slate-700 text-sm leading-relaxed"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Advanced Capabilities */}
            <div className="bg-[#062c1b] text-white p-8 md:p-14 mb-16 md:mb-24">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4">
                Advanced Capabilities
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 mb-8">
                {capabilityPath.map((c, i) => (
                  <div key={c} className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:pr-4">
                    <div className="flex items-center md:w-full gap-3">
                      <span className="w-8 h-8 shrink-0 border border-emerald-400 flex items-center justify-center text-xs font-bold text-emerald-300">
                        {i + 1}
                      </span>
                      {i < capabilityPath.length - 1 && (
                        <div className="hidden md:block h-px flex-1 bg-emerald-700" />
                      )}
                    </div>
                    <span className="hvac-serif text-xl leading-snug">{c}</span>
                  </div>
                ))}
              </div>
              <p className="text-emerald-100/80 text-lg leading-relaxed max-w-3xl">
                We can progressively move systems from simply reporting problems
                to recommending, executing, and continuously improving
                operational decisions.
              </p>
            </div>

            {/* Use cases */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-emerald-600" />
              <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.2em]">
                Example Use Cases
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 mb-16 md:mb-24">
              {useCases.map((u) => (
                <div
                  key={u.title}
                  className="bg-white p-8 hover:bg-emerald-50/60 transition-colors duration-300"
                >
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">
                    {u.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {u.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Outcome */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700 mb-4">
                Outcome
              </p>
              <p className="hvac-serif text-3xl md:text-4xl text-slate-900 leading-snug">
                Lower operating costs. Faster service. Better asset utilization.{" "}
                <span className="text-emerald-600">
                  Reduced downtime. More intelligent building operations.
                </span>
              </p>
            </div>
          </div>

          {/* ── FAQ ──────────────────────────────────── */}
          <div className="max-w-7xl mx-auto px-6 pt-4">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  HVAC &amp; MEP Software
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <h2 className="hvac-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                Frequently Asked{" "}
                <span className="text-emerald-600">Q &amp; A</span>
              </h2>

              <p className="text-xl text-slate-500  max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about adopting custom software for
                your HVAC, electrical, or plumbing business.
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
        </div>
      </section>

      {/* ── INQUIRY FORM MODAL ── */}
      {showInquiryForm &&
        createPortal(
          <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
              onClick={() => setShowInquiryForm(false)}
            />
            <div
              data-lenis-prevent
              className="relative w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
            >
              <div className="p-6 sm:p-8 lg:p-14">
                <InquiryForm
                  inquiryType="solution"
                  topic="HVAC & MEP Services"
                  industry="HVAC & MEP Services"
                  onSuccess={() => setShowInquiryForm(false)}
                  onClose={() => setShowInquiryForm(false)}
                  showCloseButton={true}
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}