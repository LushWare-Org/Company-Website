import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import QuestionItem from "@/components/QuestionItem";
import ValueCard from "@/components/ValueCard";
import InquiryForm from "@/components/InquiryForm";
import SolutionTopicStepper from "@/components/SolutionTopicStepper";
import MarketFitSection from "@/components/MarketFitSection";
import { MARKETS } from "@/data/markets";

const faqItems = [
  {
    question: "How can software help electrical service businesses?",
    answer:
      "Custom software helps electrical contractors manage service calls, electrician scheduling, compliance documentation, and customer relationships — all in one place without manual admin overhead.",
  },
  {
    question: "Do you work with electrical businesses in the US, Canada, Australia and New Zealand?",
    answer:
      "Yes. We build for trade contractors in all four markets, with quotes, invoices and taxes in USD, CAD, AUD or NZD, and meetings scheduled in your local time zone.",
  },
  {
    question: "Can it sync with QuickBooks, Xero or MYOB?",
    answer:
      "Yes. We build two-way accounting integrations so customers, invoices and payments flow into the accounting system you already use, without double entry.",
  },
  {
    question:
      "Can the system handle electrical job compliance and safety records?",
    answer:
      "Yes. The platform can store and manage compliance certificates, safety inspection records, and permit tracking so your business stays audit-ready at all times.",
  },
  {
    question: "Does the system support quoting and project-based work?",
    answer:
      "Yes. From small residential callouts to large commercial projects, the system handles digital quoting, scope tracking, milestone billing, and final invoicing.",
  },
  {
    question: "Can electrical companies manage multiple crews and job sites?",
    answer:
      "Yes. Multi-crew dispatch, job site assignment, and real-time status updates are all supported — giving project managers complete visibility across every active site.",
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
    desc: "Built specifically around your electrical workflows instead of forcing your team to adapt to a generic system.",
  },
  {
    title: "Higher Operational Efficiency",
    desc: "Eliminates unnecessary features and focuses only on functions that create real value for electrical operations.",
  },
  {
    title: "Better Integration",
    desc: "Easily integrates with existing systems, supplier portals, compliance databases, and accounting tools.",
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
    desc: "The system evolves as your business grows, adds electricians, or expands into new service territories.",
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
    desc: "Tell us about your electrical business — crew size, job types, compliance needs. We map the exact system you need.",
  },
  {
    title: (
      <>
        We Build It — <span className="text-emerald-600">No Upfront Cost</span>
      </>
    ),
    desc: "Our team builds your solution from scratch. No templates. No payment until you've seen and approved the result.",
    badge: "No Initial Payment",
  },
  {
    title: (
      <>
        Go Live, <span className="text-emerald-600">Pay as You Grow</span>
      </>
    ),
    desc: "Adopt it as a fully managed pay-as-you-go service. We handle infrastructure, updates, and support — you focus on the work.",
  },
];

export default function ElectricServices() {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [coverVisible, setCoverVisible] = useState(false);
  const coverRef = useRef<HTMLDivElement | null>(null);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const benefitsRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .elec-root * { font-family: 'DM Sans', sans-serif; }
        .elec-serif  { font-family: 'DM Serif Display', serif; }

        /* ── HERO LINES ── */
        .elec-hero-line {
          animation: elec-fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
        }
        .elec-hero-line:nth-child(1) { animation-delay: 0s; }
        .elec-hero-line:nth-child(2) { animation-delay: 0.1s; }
        .elec-hero-line:nth-child(3) { animation-delay: 0.2s; }
        .elec-hero-line:nth-child(4) { animation-delay: 0.3s; }
        @keyframes elec-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── DOT GRID ── */
        .elec-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* ── ROTATING IMAGES ── */
        .elec-img-wrap {
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s;
        }
        .elec-img-wrap:hover {
          transform: rotate(0deg) scale(1.04) !important;
          box-shadow: 0 32px 72px rgba(5,150,105,0.22);
          z-index: 10;
        }
        .elec-img-inner { transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .elec-img-wrap:hover .elec-img-inner { transform: rotate(0deg) scale(1) !important; }

        /* ── STEP CARDS ── */
        .elec-step-card {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
        }
        .elec-step-card.visible { opacity: 1; transform: translateY(0); }
        .elec-step-card:nth-child(1) { transition-delay: 0s; }
        .elec-step-card:nth-child(2) { transition-delay: 0.15s; }
        .elec-step-card:nth-child(3) { transition-delay: 0.3s; }

        /* ── STAT BAR ── */
        .elec-stat {
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .elec-stat.visible { opacity: 1; transform: translateY(0); }
        .elec-stat:nth-child(1) { transition-delay: 0s; }
        .elec-stat:nth-child(2) { transition-delay: 0.1s; }
        .elec-stat:nth-child(3) { transition-delay: 0.2s; }
        .elec-stat:nth-child(4) { transition-delay: 0.3s; }

        /* ── COVER ── */
        .elec-cover {
          opacity: 0; transform: scale(0.98);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .elec-cover.visible { opacity: 1; transform: scale(1); }

        /* ── BENEFITS ── */
        .elec-benefit {
          opacity: 0; transform: translateX(-16px);
          transition: opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1);
        }
        .elec-benefit.visible { opacity: 1; transform: translateX(0); }

        .elec-tag {
          transition: background 0.25s, color 0.25s, border-color 0.25s;
        }
        .elec-tag:hover { background:#ecfdf5; border-color:#6ee7b7; color:#065f46; }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }
      `}</style>

      <section className="elec-root w-full py-16 md:py-32 lg:py-32 bg-[#ffffff] ">
        <div className="mx-auto">
          <div className="max-w-8xl px-4 sm:px-8 lg:px-24">
            {/* ──  HERO ───────────────────────────────── */}
            <div className="relative min-h-[90vh] lg:px-6 px-0 lg:py-0 sm:py-8 py-8 bg-[#FAFAFA] flex items-center rounded-lg overflow-hidden font-sans selection:bg-emerald-100 selection:text-emerald-900">
              {/* ARCHITECTURAL BACKGROUND ELEMENTS */}
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/[0.35] border-l border-slate-200/60 hidden lg:block" />
                <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[60%] bg-emerald-50/50 blur-[120px] rounded-full" />
              </div>

              <div className="relative max-w-[1400px] mx-auto w-full px-8 p-8 lg:px-10 grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center z-10">
                {/* LEFT SIDE: EDITORIAL CONTENT */}
                <div className="lg:col-span-6 xl:col-span-5 text-left md:text-center lg:text-left">
                  <div className="elec-hero-line flex items-center gap-4 mb-8 overflow-hidden justify-start md:justify-center lg:justify-start">
                    <span className="lg:text-[12px] text-[12px] md:text-[16px] font-bold text-emerald-700 uppercase tracking-[0.3em] whitespace-nowrap">
                      Industry Solutions
                    </span>
                    <div className="h-[1px] w-12 bg-emerald-200" />
                  </div>

                  <h1 className="elec-hero-line elec-serif text-5xl sm:text-6xl md:text-8xl xl:text-7xl font-normal text-slate-950 leading-[0.8] tracking-wide mb-8">
                    Electrical <br />
                    <span className="text-emerald-600">Contractor</span>
                    <br />
                    <span className="text-slate-900 elec-serif">Software.</span>
                  </h1>

                  <div className="elec-hero-line flex gap-6 items-start justify-center lg:justify-start">
                    <div className="w-1 h-20 bg-emerald-600 mt-2 hidden sm:block lg:block" />
                    <p className="text-lg md:text-3xl lg:text-lg text-slate-600 lg:max-w-md max-w-xl leading-relaxed">
                      Purpose-built software for electrical contractors in the US,
                      Canada, Australia and New Zealand. Master{" "}
                      <span className="text-emerald-700 font-medium">
                        crew management, compliance, and cash flow
                      </span>{" "}
                      with a single, intelligent platform.
                    </p>
                  </div>

                  {/* REFINED TAGS */}
                  <div className="elec-hero-line mt-8 flex flex-wrap gap-3 justify-start md:justify-center lg:justify-start">
                    {[
                      "Compliance Tracking",
                      "Multi-Crew Dispatch",
                      "Project Billing",
                      "Safety Records",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="elec-tag text-[9px] lg:text-[10px] md:text-[14px] font-bold text-slate-500 uppercase tracking-widest border border-slate-400 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="elec-hero-line mt-8 flex items-center gap-8 justify-start md:justify-center lg:justify-start">
                    <button
                      onClick={() => setShowInquiryForm(true)}
                      className="group/btn relative cursor-pointer overflow-hidden px-8 py-4 bg-slate-950 text-white lg:text-xs text-xs md:text-lg font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-slate-200 flex items-center gap-2"
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

                {/* RIGHT SIDE: THE EXECUTIVE SHOWCASE */}
                <div className="lg:col-span-6 xl:col-span-7 relative">
                  <div className="relative group">
                    {/* THE "PLATFORM" */}
                    <div className="absolute -inset-4 bg-white/40 backdrop-blur-md rounded-sm border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] -rotate-2 transition-transform duration-700 group-hover:rotate-0" />

                    {/* MAIN IMAGE CONTAINER */}
                    <div className="relative z-20 pt-4 px-0 lg:px-14 md:px-16 sm:px-4 animate-float">
                      <img
                        src="/Industry/elechero-Photoroom.webp"
                        alt="Electrical services software"
                        className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] brightness-[1.01] contrast-[1.01]"
                      />
                    </div>

                    {/* DESIGN ACCENTS */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 border-t border-r border-emerald-200/50 -z-10" />
                    <div className="absolute bottom-0 right-20 w-32 h-px bg-emerald-600/30 z-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="-mt-38 sm:mt-0 md:-mt-38 lg:mt-0">
            {/* STEPS */}
            <SolutionTopicStepper steps={steps} threshold={0.5} />
          </div>

          {/*  COVER IMAGE BANNER  */}
          <div
            ref={coverRef}
            className={`elec-cover w-full bg-gray-50 mb-16 md:mb-28 ${coverVisible ? "visible" : ""}`}
          >
            <div className="relative lg:pl-96 pl-0 md:pl-32 overflow-hidden">
              <img
                src="/Industry/electrical.jpg"
                alt="Electrician working on panel"
                className="w-full h-[300px] sm:h-[420px] md:h-[560px] lg:h-[520px] object-cover object-top"
              />

              <div className="absolute inset-0 flex items-center bg-black/20 sm:bg-transparent pb-4 sm:pb-0">
                <div className="w-full px-4 sm:px-10 md:pl-12 lg:pl-32">
                  <div className="flex flex-col items-start gap-3 sm:gap-5 max-w-xl">
                    <h3 className="elec-serif text-2xl sm:text-5xl md:text-6xl font-normal text-white sm:text-black leading-[1.1]">
                      Wired for growth.
                      <br />
                      <span className="text-emerald-400 sm:text-emerald-600">
                        Built for electricians.
                      </span>
                    </h3>
                    <p className="hidden sm:block text-slate-800 text-md sm:text-xl leading-relaxed">
                      Compliance, crew management, invoicing, and customer
                      retention — all connected, all automated.
                    </p>
                    <button
                      onClick={() =>
                        document
                          .getElementById("elec-services-section")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                      }
                      className="group cursor-pointer shrink-0 relative inline-flex items-center gap-2 sm:gap-3 
                      px-6 sm:px-8 lg:px-10 
                      py-3 sm:py-3.5 lg:py-4 
                      bg-emerald-600 text-white 
                      text-[10px] sm:text-xs md:text-sm lg:text-xs 
                      font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] 
                      overflow-hidden transition-all duration-300 
                      hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] active:scale-[0.98]"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                        Explore Services
                      </span>

                      <svg
                        className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
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

          {/* ── TAILORED SOFTWARE + BENEFITS ─────────── */}
          <div className="max-w-7xl mx-auto px-6 md:px-10  lg:px-6 mb-20 bg-[#ffffff] md:mb-28">
            <div className="mb-12 md:mb-16">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.15em]">
                  Our Approach
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="elec-serif text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 tracking-tight leading-[1.05] max-w-2xl">
                  We provide tailored software for your{" "}
                  <span className="text-emerald-600">trades business.</span>
                </h2>
                <p className="text-slate-500 text-lg  max-w-sm leading-relaxed md:text-right">
                  Generic platforms are built for everyone. Your electrical
                  business deserves software designed around how you actually
                  operate.
                </p>
              </div>
            </div>

            {/* Benefits — numbered list with large counters */}
            <div
              ref={benefitsRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-slate-200"
            >
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className={`elec-benefit group/b flex items-start gap-6 py-7 px-4 border-b border-slate-200 md:odd:border-r md:odd:pr-12 md:even:pl-12 hover:bg-slate-50/60 transition-colors duration-300 cursor-default ${benefitsVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="elec-serif text-4xl font-normal text-slate-300 group-hover/b:text-emerald-600 transition-colors duration-300 leading-none shrink-0 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <p className="text-lg font-semibold text-slate-900 mb-1">
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

          {/* ── TRIPTYCH SPLIT IMAGE SECTION ──────────────────── */}
          <div className="max-w-7xl mx-auto px-2 md:px-6 pt-12 mb-32">
            <div
              className="grid items-center"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr", // Always 3 cols — never collapse
                gap: "clamp(4px, 1.5vw, 24px)", // Gap scales with viewport
              }}
            >
              {[
                { index: 0, label: "Site Inspection" },
                { index: 1, label: "System Installation" },
                { index: 2, label: "Ongoing Maintenance" },
              ].map(({ index, label }) => {
                const isMiddle = index === 1;

                return (
                  <div
                    key={index}
                    className={`relative overflow-hidden border-[3px] border-slate-900 group transition-all duration-500
                      ${isMiddle ? "shadow-2xl z-10 aspect-[3/6.4] md:aspect-[3/5.2]" : "shadow-lg z-0 aspect-[3/6.1] md:aspect-3/5"}`}
                  >
                    <div
                      className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105"
                      style={{
                        backgroundImage: "url('/Industry/elec.jpg')",
                        backgroundSize: "300% 100%",
                        backgroundPosition: `${index * 50}% center`,
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <div
                      className={`absolute font-mono text-lg font-bold ${isMiddle ? "text-emerald-600" : "text-black/90"}`}
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

          {/*  SERVICES  */}
          <div
            id="elec-services-section"
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
                <h2 className="elec-serif text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 leading-none">
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
                desc="Continuous follow-ups, churn prediction, and customer retention tools that keep your electrical clients coming back for every project."
                link="CRM"
              />
              <ValueCard
                num="02"
                title="Smart Job Scheduling & Dispatch"
                desc="Duration prediction, multi-crew routing, and real-time site assignment so every electrician is in the right place at the right time."
                link="Scheduling"
              />
              <ValueCard
                num="03"
                title="Custom Software & AI Solutions"
                desc="Bespoke platforms and AI-powered tools designed entirely around your electrical contracting workflows and compliance requirements."
                link="Custom AI"
              />
            </div>
          </div>

          {/* TARGET MARKET */}
          <MarketFitSection
            market={MARKETS.trades}
            related={{
              text: "Running electrical alongside HVAC or plumbing crews?",
              links: [{ label: "Field service software", to: "/industries/field-service" }],
            }}
          />

          {/*  FAQ  */}
          <div className="max-w-7xl mx-auto px-6 pt-4">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  Electrical Software
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>
              <h2 className="elec-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                Frequently Asked{" "}
                <span className="text-emerald-600">Q &amp; A</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about custom software for your
                electrical contracting business.
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
                  topic="Electrical Services"
                  industry="Electrical Services"
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
