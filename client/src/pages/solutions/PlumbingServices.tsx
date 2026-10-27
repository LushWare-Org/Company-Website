import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ValueCard from "@/components/ValueCard";
import InquiryForm from "@/components/InquiryForm";
import SolutionTopicStepper from "@/components/SolutionTopicStepper";
import { OutlineClose, OutlineProblems, WhoItsFor } from "@/components/PageOutline";
import { plumbingOutline } from "@/data/outlines/trades";

const faqItems = [
  {
    question: "How can software help plumbing service businesses?",
    answer:
      "Custom software helps plumbing companies streamline job dispatching, track service history per property, manage quotes and invoices, and maintain strong customer relationships — all in one platform.",
  },
  {
    question: "Do you work with plumbing businesses in the US, Canada, Australia and New Zealand?",
    answer:
      "Yes. We build for trade contractors in all four markets, with quotes, invoices and taxes in USD, CAD, AUD or NZD, and meetings scheduled in your local time zone.",
  },
  {
    question: "Does the system support job quoting and invoicing?",
    answer:
      "Yes. Technicians can generate quotes on-site from mobile devices, convert approved quotes to jobs, and issue invoices automatically on completion.",
  },
];

const benefits = [
  {
    title: "Perfect Fit for Business Processes",
    desc: "Built specifically around your plumbing workflows instead of forcing your team to adapt to a generic system.",
  },
  {
    title: "Higher Operational Efficiency",
    desc: "Eliminates unnecessary features and focuses only on functions that create real value for plumbing operations.",
  },
  {
    title: "Better Integration",
    desc: "Easily integrates with existing internal systems, databases, supplier tools, and accounting platforms.",
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
    desc: "The system evolves as your business grows, adds plumbers, or expands into new service territories.",
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
    desc: "Tell us how your plumbing business operates — job types, team size, pain points. We map your exact needs before writing a single line of code.",
  },
  {
    title: (
      <>
        We Build — <span className="text-emerald-600">No Upfront Payment</span>
      </>
    ),
    desc: "Our team develops your full custom platform. You review it, request changes, and only move forward when fully satisfied. Zero financial risk.",
    badge: "No Initial Payment",
  },
  {
    title: (
      <>
        <span className="text-emerald-600">Pay-as-You-Go</span>, Fully Managed
      </>
    ),
    desc: "Adopt the solution as a fully managed service — we handle hosting, updates, security, and support. You focus on the plumbing.",
  },
];

export default function PlumbingServices() {
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
        .pl-root * { font-family: 'DM Sans', sans-serif; }
        .pl-serif  { font-family: 'DM Serif Display', serif; }
        .pl-hero-left  { animation: pl-slideR 0.85s cubic-bezier(0.16,1,0.3,1) both; }
        .pl-hero-right { animation: pl-slideL 0.85s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pl-slideR { from { opacity:0; transform:translateX(-32px);} to { opacity:1; transform:translateX(0);} }
        @keyframes pl-slideL { from { opacity:0; transform:translateX(32px); } to { opacity:1; transform:translateX(0);} }
        .pl-dotgrid { background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px); background-size: 32px 32px; }
        .pl-img-card { opacity:0; transform:translateY(40px) scale(0.96); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s; }
        .pl-img-card.visible { opacity:1; transform:translateY(0) scale(1); }
        .pl-img-card:hover { transform:translateY(-6px) scale(1.02) !important; box-shadow:0 28px 64px rgba(5,150,105,0.18); z-index:10; }
        .pl-img-card img { transition:transform 0.7s cubic-bezier(0.16,1,0.3,1); }
        .pl-img-card:hover img { transform:scale(1.06); }
        .pl-step-card { opacity:0; transform:translateY(32px); transition:opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1); }
        .pl-step-card.visible { opacity:1; transform:translateY(0); }
        .pl-cover { opacity:0; transform:translateX(-24px); transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
        .pl-cover.visible { opacity:1; transform:translateX(0); }
        .pl-benefit { opacity:0; transform:translateX(-16px); transition:opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1); }
        .pl-benefit.visible { opacity:1; transform:translateX(0); }
        .pl-tag { transition:background 0.25s,color 0.25s,border-color 0.25s; }
        .pl-tag:hover { background:#ecfdf5; border-color:#6ee7b7; color:#065f46; }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <section className="pl-root w-full py-16 md:py-32 lg:py-32 bg-[#ffffff]">
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
                <div className="pl-hero-left lg:col-span-6 xl:col-span-5 text-left md:text-center lg:text-left">
                  <div className="flex items-center gap-4 mb-8 overflow-hidden justify-start md:justify-center lg:justify-start">
                    <span className="lg:text-[12px] text-[12px] md:text-[16px] font-bold text-emerald-700 uppercase tracking-[0.3em] whitespace-nowrap">
                      Industry Solutions
                    </span>
                    <div className="h-[1px] w-12 bg-emerald-200" />
                  </div>

                  <h1 className="pl-serif text-5xl sm:text-6xl md:text-8xl xl:text-7xl font-normal text-slate-950 leading-[0.8]  mb-8">
                    Plumbing <br />
                    <span className="text-emerald-600">Business</span>
                    <br />
                    <span className="text-slate-900 pl-serif">
                      Software.
                    </span>
                  </h1>

                  <WhoItsFor text={plumbingOutline.whoFor} className="text-center lg:text-left" />

                  <div className="flex gap-6 items-start justify-center lg:justify-start">
                    <div className="w-1 h-20 bg-emerald-600 mt-2 hidden sm:block lg:block" />
                    <p className="text-lg md:text-3xl lg:text-lg text-slate-600 lg:max-w-md max-w-xl leading-relaxed">
                      Purpose-built software for plumbing contractors in the
                      US, Canada, Australia and New Zealand. Seamlessly manage{" "}
                      <span className="text-emerald-700 font-medium">
                        jobs, quotes, inventory, and customers
                      </span>{" "}
                      from a single, high-performance platform.
                    </p>
                  </div>

                  {/* REFINED TAGS */}
                  <div className="mt-8 flex flex-wrap gap-3 justify-start md:justify-center lg:justify-start">
                    {[
                      "Emergency Dispatch",
                      "Quote & Invoice",
                      "Parts Tracking",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="pl-tag text-[9px] lg:text-[10px] md:text-[14px] font-bold text-slate-500 uppercase tracking-widest border border-slate-400 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 lg:mt-4 flex items-center gap-8 justify-start md:justify-center lg:justify-start">
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

                {/* RIGHT SIDE: THE EXECUTIVE SHOWCASE */}
                <div className=" lg:col-span-6 xl:col-span-7 relative">
                  <div className="relative group">
                    {/* THE "PLATFORM" */}
                    <div className="absolute -inset-4 bg-white/40 backdrop-blur-md rounded-sm border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] -rotate-2 transition-transform duration-700 group-hover:rotate-0" />

                    {/* MAIN IMAGE CONTAINER */}
                    <div className="relative z-20 pt-4 px-0 lg:px-14 md:px-16 sm:px-4 animate-float">
                      <img
                        src="/Industry/plumbhero-Photoroom.webp"
                        alt="Plumbing services software"
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

          {/* STEPS */}
          <div className="-mt-38 sm:mt-0 md:-mt-38 lg:mt-0">
            <SolutionTopicStepper steps={steps} threshold={0.4} />
          </div>

          {/* ── PROBLEMS, IN THEIR WORDS ─────────────── */}
          <OutlineProblems outline={plumbingOutline} />

          {/*  COVER IMAGE BANNER  */}
          <div
            ref={coverRef}
            className={`elec-cover w-full bg-gray-50 mb-12 md:mb-20 ${coverVisible ? "visible" : ""}`}
          >
            <div className="relative overflow-hidden">
              <img
                src="/Industry/plumb2.jpg"
                alt="Electrician working on panel"
                className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[680px] object-cover lg:pl-108 md:pl-32 pl-32  object-top"
              />

              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-5 sm:px-8 md:px-12 lg:px-24">
                  <div className="flex flex-col items-start gap-5 max-w-xl">
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-white/20 border border-black/70 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        <span className="text-black text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">
                          Plumbing Software
                        </span>
                      </div>

                      <h3 className="pl-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal text-black leading-[1.1] mb-5">
                        Every job tracked.
                        <br />
                        <span className="text-emerald-600">
                          Every customer retained.
                        </span>
                      </h3>

                      <p className="text-black/90 text-sm sm:text-base md:text-lg leading-relaxed mb-7 max-w-md">
                        From emergency call-outs to annual maintenance contracts
                        — your entire plumbing operation in one intelligent
                        platform.
                      </p>

                      <button
                        onClick={() =>
                          document
                            .getElementById("pl-services-section")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            })
                        }
                        className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white font-semibold text-[11px] sm:text-xs uppercase tracking-[0.18em] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] active:scale-[0.98]"
                      >
                        <span className="relative z-10 transition-colors duration-300">
                          Explore Services
                        </span>

                        <svg
                          className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300 group-hover:translate-x-1"
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
          </div>

          {/* TAILORED SOFTWARE */}
          <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-28">
            <div className="mb-12 md:mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.2em]">
                  Why Custom
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>
              <h2 className="pl-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-slate-900 leading-[1.05] mb-5">
                We provide tailored software services
                <br className="hidden md:block" />
                <span className="text-emerald-600">
                  {" "}
                  for your trades business.
                </span>
              </h2>
              <p className="text-xl text-slate-500  max-w-2xl mx-auto leading-relaxed">
                Generic SaaS is built for everyone. Your plumbing business
                deserves a system built around your workflows.
              </p>
            </div>
            <div
              ref={benefitsRef}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className={`pl-benefit group/b border border-slate-300 hover:border-emerald-300 p-6 transition-all duration-300 hover:bg-emerald-50/40 hover:shadow-[0_8px_32px_rgba(5,150,105,0.08)] cursor-default ${benefitsVisible ? "visible" : ""} ${i === 0 ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""}`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="w-8 h-0.5 bg-emerald-500 mb-5  transition-all duration-500" />
                  <p className="text-lg font-semibold text-slate-900 mb-2">
                    {b.title}
                  </p>
                  <p className="text-slate-500 text-md leading-relaxed ">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* THREE IMAGES */}
          {/* ── TRIPTYCH SPLIT IMAGE SECTION ──────────────────── */}
          <div className="max-w-7xl mx-auto px-2 md:px-6 pt-12 mb-20 md:mb-32">
            <div
              className="grid items-center"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr", // Always 3 cols — never collapse
                gap: "clamp(4px, 1.5vw, 24px)", // Gap scales with viewport
              }}
            >
              {[
                { index: 0, label: "Leak Detection" },
                { index: 1, label: "Pipe Installation" },
                { index: 2, label: "Routine Servicing" },
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
                        backgroundImage: "url('/Industry/plum.jpg')",
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

          {/* SERVICES */}
          <div
            id="pl-services-section"
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
                <h2 className="pl-serif text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 leading-none">
                  Our <span className="text-emerald-600">Services.</span>
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-500 text-sm font-medium uppercase tracking-[0.15em]">
                <span>available solutions </span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard
                num="01"
                title="AI Assisted CRM"
                desc="Continuous follow-ups, churn prediction, and customer retention tools that keep your plumbing clients loyal and returning."
                link="CRM"
              />
              <ValueCard
                num="02"
                title="Smart Job Scheduling & Dispatch"
                desc="Duration prediction, route optimisation, and real-time technician assignment so every plumbing job runs on time."
                link="Scheduling"
              />
              <ValueCard
                num="03"
                title="Custom Software & AI Solutions"
                desc="Bespoke platforms and AI-powered tools designed entirely around your plumbing business workflows and growth goals."
                link="Custom AI"
              />
            </div>
          </div>

          {/* ── FEATURES, PROOF, GUIDE, FAQ, CTA ─────── */}
          <OutlineClose
            outline={plumbingOutline}
            faq={faqItems}
            marketRelated={{
              text: "Running plumbing alongside HVAC or electrical crews?",
              links: [{ label: "Field service software", to: "/industries/field-service" }],
            }}
          />
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
                  topic="Plumbing Services"
                  industry="Plumbing Services"
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
