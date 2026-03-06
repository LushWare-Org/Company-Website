import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import { useNavigate } from "react-router-dom";

const BPM: React.FC = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "What is Business Process Management (BPM)?",
      answer:
        "BPM is a systematic approach to improving and automating business processes, ensuring efficiency, transparency, and alignment with organizational goals.",
    },
    {
      question: "How does BPM benefit my business?",
      answer:
        "BPM increases operational efficiency, reduces errors, enhances collaboration, and provides insights to continuously optimize workflows.",
    },
    {
      question: "Can BPM integrate with existing systems?",
      answer:
        "Yes. BPM platforms can seamlessly integrate with ERP, CRM, HR, and other enterprise systems to unify data and workflows.",
    },
    {
      question: "Is BPM suitable for small businesses?",
      answer:
        "Absolutely. BPM solutions are scalable and can be tailored to small businesses, growing startups, and large enterprises.",
    },
    {
      question: "How does BPM ensure process optimization?",
      answer:
        "BPM provides monitoring, analytics, and reporting tools that help identify bottlenecks, track KPIs, and continuously improve business processes.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .bpm-root * { font-family: 'DM Sans', sans-serif; }
        .bpm-serif  { font-family: 'DM Serif Display', serif; }

        .bpm-fadeUp {
          animation: bpmFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .bpm-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .bpm-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes bpmFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .bpm-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .bpm-card-sweep::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ecfdf5;
          transform: translateX(-101%);
          transition: transform 0.5s cubic-bezier(0.85,0,0.15,1);
          z-index: 0;
          border-radius: inherit;
        }
        .bpm-card-sweep:hover::before { transform: translateX(0); }
      `}</style>

      <section className="bpm-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
        <div className="max-w-7xl pt-6 md:pt-12 mx-auto">

          {/* ── HERO ─────────────────────────────────── */}
          <div className="relative max-w-6xl mt-12 mx-auto text-center mb-16 md:mb-20">
            <div className="bpm-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

            <div className="bpm-fadeUp flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                Business Process Management
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h1 className="bpm-fadeUp bpm-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
              Streamline Operations & <br />
              <span className=" text-emerald-600">
                Achieve Operational Excellence
              </span>
            </h1>

            <p className="bpm-fadeUp text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              Business Process Management (BPM) software helps organizations
              design, automate, monitor, and optimize workflows to improve
              efficiency, reduce costs, and ensure processes align with strategic
              objectives.
            </p>
          </div>

          {/* ── HERO IMAGE ───────────────────────────── */}
          <div className="relative mb-24">
            {/* Subtle glow backdrop */}
            <div className="absolute inset-0 bg-emerald-50 rounded-[2.5rem] blur-3xl transform scale-95 -z-10 opacity-80" />

            <div className="relative overflow-hidden border border-slate-200 shadow-[0_32px_80px_rgba(0,0,0,0.10)]">
              <img
                src="/hero/bm.jpg"
                alt="BPM Interface"
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />

              {/* Emerald top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600" />

              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-full px-6 flex justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="group cursor-pointer relative inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-900 font-semibold text-xs uppercase tracking-[0.18em] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] active:scale-[0.98]"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Discover the Platform
                  </span>
                  <svg
                    className="relative z-10 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-slate-900 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                </button>
              </div>
            </div>
          </div>

          {/* ── BUSINESS IMPACT + VALUE CARDS ────────── */}
          <div className="max-w-7xl mx-auto mb-20 md:mb-28">
            {/* Section label */}
            <div className="max-w-3xl mx-auto text-center mb-14 px-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  Business Impact
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <p className="bpm-serif text-2xl md:text-3xl text-slate-700 font-normal leading-snug ">
                BPM software empowers organizations to streamline operations,
                optimize workflows, and achieve measurable business results.
              </p>
            </div>

            {/* ValueCard grid — component untouched */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Process Automation",
                  desc: "Automate repetitive tasks to save time and reduce human error.",
                  link: "Automation",
                },
                {
                  num: "02",
                  title: "Workflow Optimization",
                  desc: "Identify bottlenecks and optimize workflows for better efficiency.",
                  link: "Optimization",
                },
                {
                  num: "03",
                  title: "Data-Driven Insights",
                  desc: "Use analytics to monitor performance and make informed decisions.",
                  link: "Analytics",
                },
                {
                  num: "04",
                  title: "Collaboration & Compliance",
                  desc: "Ensure smooth collaboration across teams while maintaining regulatory compliance.",
                  link: "Collaboration",
                },
              ].map((item, index) => (
                <ValueCard
                  key={index}
                  num={item.num}
                  title={item.title}
                  desc={item.desc}
                  link={item.link}
                />
              ))}
            </div>
          </div>

          {/* ── BPM OVERVIEW ─────────────────────────── */}
          <section className="bg-white py-16 md:py-24 px-0">
            <div className="max-w-7xl mx-auto">

              {/* Section header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-14 md:mb-24">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px w-8 bg-emerald-600" />
                    <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                      Operational Excellence
                    </div>
                  </div>
                  <h3 className="bpm-serif text-5xl sm:text-6xl md:text-7xl font-normal text-slate-900 tracking-tight leading-[1.0]">
                    Streamline, Optimize <br />
                    <span className=" text-emerald-600">&amp; Grow.</span>
                  </h3>
                </div>

                <div className="lg:pt-14">
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-6">
                    LushWare's BPM solutions enable organizations to manage their
                    processes more efficiently.
                  </p>
                  <div className="h-px w-20 bg-emerald-600" />
                </div>
              </div>

              {/* Architecture cards */}
              <div className="space-y-6 md:space-y-10">

                {/* Card 01 — Full-width */}
                <div className="group relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-slate-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)]">
                  {/* Left dark panel */}
                  <div className="lg:col-span-4 bg-emerald-800 p-8 md:p-12 flex flex-col justify-between text-white min-h-[160px]">
                    <span className="bpm-serif text-6xl md:text-8xl font-normal italic opacity-30 leading-none">
                      01
                    </span>
                    <h4 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
                      What is <br className="hidden md:block" /> Business Process
                      Management
                    </h4>
                  </div>

                  {/* Right content panel */}
                  <div className="lg:col-span-8 p-8 md:p-14 flex items-center bg-white group-hover:bg-slate-50 transition-colors duration-500">
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                      Business Process Management (BPM) is a{" "}
                      <span className="text-slate-900 font-medium italic">
                        structured approach
                      </span>{" "}
                      to analyzing, designing, automating, and improving your
                      business processes. It ensures that every workflow is
                      optimized to achieve strategic goals and operational
                      efficiency.
                    </p>
                  </div>

                  {/* Emerald left accent bar */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-400 group-hover:h-full transition-all duration-700" />
                </div>

                {/* Cards 02 + 03 — Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">

                  {/* Card 02 */}
                  <div className="relative group p-8 md:p-12 border border-slate-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.06)] overflow-hidden">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="bpm-serif text-2xl italic text-emerald-600">
                        02
                      </span>
                      <div className="h-px flex-1 bg-slate-200 group-hover:bg-emerald-300 transition-colors duration-500" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 tracking-tight">
                      How it Benefits Your Business
                    </h4>
                    <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
                      By implementing BPM, businesses can reduce process
                      bottlenecks, improve collaboration between departments, and
                      gain{" "}
                      <span className="text-emerald-700 font-semibold">
                        real-time visibility
                      </span>{" "}
                      into operations for faster, data-driven decisions.
                    </p>
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />
                  </div>

                  {/* Card 03 */}
                  <div className="relative group p-8 md:p-12 bg-emerald-800 text-white overflow-hidden">
                    {/* Subtle glow */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-400/15 blur-3xl pointer-events-none" />
                    {/* Grid lines */}
                    <div
                      className="absolute inset-0 opacity-[0.04] pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                        <span className="bpm-serif text-2xl italic text-emerald-300">
                          03
                        </span>
                        <div className="h-px flex-1 bg-emerald-600" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
                        How We Add Value
                      </h4>
                      <p className="text-base sm:text-lg text-emerald-100 leading-relaxed font-light">
                        LushWare customizes BPM solutions to align with your unique
                        business goals. We provide automation,{" "}
                        <span className="text-white font-medium">
                          integration with your existing systems
                        </span>
                        , monitoring dashboards, and continuous support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <WhyChooseLushWare />

          {/* ── FAQ ──────────────────────────────────── */}
          <div className="max-w-7xl mx-auto pt-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  BPM Solutions
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <h2 className="bpm-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                Business Process Management{" "}
                <span className=" text-emerald-600">Software</span>
              </h2>

              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Improve efficiency, optimize workflows, and gain visibility into
                your business processes with scalable BPM solutions.
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
    </>
  );
};

export default BPM;