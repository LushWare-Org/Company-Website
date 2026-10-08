import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import CapabilityBlock, { type Capability } from "../../components/CapabilityBlock";
import { useNavigate } from "react-router-dom";

const AIProcessOptimization: React.FC = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "What is AI-Driven Process Optimization?",
      answer:
        "It uses operational AI, simulation, and mathematical optimization to help you understand what is happening across your operations, predict what is likely to happen, and decide what to do next.",
    },
    {
      question: "How is this different from building a machine learning model?",
      answer:
        "A model only predicts. We go further and solve for the best feasible operational decision given your objectives and constraints, using optimization techniques such as constraint programming, MILP/LP, scheduling, and routing.",
    },
    {
      question: "What is a digital twin and why would I need one?",
      answer:
        "A digital twin is a computational representation of your real operation. It lets management test 'what if' scenarios, such as a machine failure, a demand spike, or a delayed shipment, before they happen in the real world.",
    },
    {
      question: "Can this connect to the systems we already use?",
      answer:
        "Yes. We integrate AI with ERP, CRM, PMS, WMS, CMMS, BMS, SCADA/MES, IoT platforms, fleet systems, and booking platforms, so you get AI connected to your operations rather than another isolated demo.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "Our initial verticals are HVAC & MEP, Manufacturing, Logistics & Supply Chain, and Tourism & Hospitality, all built on the same operational-AI capability.",
    },
    {
      question: "How do you keep models reliable after launch?",
      answer:
        "We build the data and AI infrastructure behind the models: telemetry pipelines, data quality checks, MLOps, model monitoring, drift detection, and AI observability.",
    },
  ];

  const capabilities: Capability[] = [
    {
      letter: "A",
      title: "Operational AI",
      intro:
        "Help companies understand what is happening across their operations and what they should do next.",
      items: [
        "Demand forecasting",
        "Predictive maintenance",
        "Operational risk prediction",
        "Revenue intelligence",
        "Inventory prediction",
        "ETA/SLA prediction",
        "Energy optimization",
        "Capacity forecasting",
        "Anomaly detection",
        "AI-generated operational recommendations",
      ],
      question: "What is happening, what is likely to happen, and what should we do?",
    },
    {
      letter: "B",
      title: "Digital Twins & Simulation",
      intro:
        "Build computational representations of real-world operations, then allow management to ask what happens if we change this.",
      items: [
        "Factory digital twins",
        "HVAC/building digital twins",
        "Warehouse & logistics networks",
        "Tourism/resort operations",
        "Fleet and transportation models",
        "Supply-chain simulations",
      ],
      question: "What happens if we change this?",
    },
    {
      letter: "C",
      title: "Optimization Engineering",
      intro:
        "Turn operational decisions into mathematical and AI optimization problems.",
      items: [
        "Constraint programming",
        "MILP/LP",
        "Vehicle routing",
        "Scheduling",
        "Resource allocation",
        "Inventory optimization",
        "Production optimization",
        "Workforce optimization",
        "Reinforcement learning",
      ],
      note: "The important distinction is that you aren't simply building an ML model.",
      question:
        "Given our objectives and constraints, what is the best feasible operational decision?",
    },
    {
      letter: "D",
      title: "AI Engineering & Enterprise Integration",
      intro: "Connect AI to the systems companies already use.",
      items: [
        "ERP",
        "CRM",
        "PMS",
        "WMS",
        "CMMS",
        "BMS",
        "SCADA/MES",
        "IoT platforms",
        "Fleet systems",
        "Booking platforms",
      ],
      extra:
        "Companies generally don't want another isolated AI demo. They want AI connected to their existing operations.",
    },
    {
      letter: "E",
      title: "Operational Data & AI Infrastructure",
      intro: "The foundation behind the AI layer that keeps it fast, accurate, and trustworthy.",
      items: [
        "IoT/telemetry pipelines",
        "Event-driven architecture",
        "MQTT/Kafka",
        "Time-series databases",
        "Data quality",
        "Streaming analytics",
        "Model serving",
        "MLOps",
        "Model monitoring",
        "Drift detection",
        "AI observability",
      ],
    },
  ];

  const whatIf = [
    "What if a critical machine fails?",
    "What if demand increases 30%?",
    "What if a shipment is delayed?",
    "What if energy prices rise?",
    "What if we add another technician?",
    "What if we change the production schedule?",
  ];

  const verticals = [
    {
      name: "HVAC & MEP",
      sol: "Building digital twins, predictive maintenance, energy optimization, technician dispatch, MEP project intelligence",
    },
    {
      name: "Manufacturing",
      sol: "Predictive maintenance, production optimization, quality intelligence, energy optimization, supply/production coordination",
    },
    {
      name: "Logistics & Supply Chain",
      sol: "Route optimization, fleet intelligence, warehouse optimization, inventory prediction, disruption management",
    },
    {
      name: "Tourism & Hospitality",
      sol: "Revenue optimization, demand forecasting, guest operations, transport/excursion optimization, resort operations",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .apo-root * { font-family: 'DM Sans', sans-serif; }
        .apo-serif  { font-family: 'DM Serif Display', serif !important; }

        .apo-fadeUp { animation: apoFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .apo-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .apo-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes apoFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .apo-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <section className="apo-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
        <div className="max-w-7xl pt-6 md:pt-12 mx-auto">
          {/* ── HERO ─────────────────────────────────── */}
          <div className="relative max-w-6xl mt-12 mx-auto text-center mb-16 md:mb-20">
            <div className="apo-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

            <div className="apo-fadeUp flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                AI-Driven Process Optimization
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h1 className="apo-fadeUp apo-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
              See What's Happening. <br />
              <span className="text-emerald-600">Know What to Do Next.</span>
            </h1>

            <p className="apo-fadeUp text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              LushWare combines operational AI, digital twins, and optimization
              engineering to help your business understand its operations,
              predict outcomes, and choose the best feasible decision.
            </p>
          </div>

          {/* ── HERO IMAGE ───────────────────────────── */}
          <div className="relative mb-10">
            <div className="relative overflow-hidden h-[250px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
              <img
                src="https://placehold.co/1600x900/064e3b/ecfdf5?text=AI+Process+Optimization+Hero"
                alt="AI-driven process optimization"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 w-full px-4 sm:px-6 flex justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="group relative rounded-sm border-2 border-emerald-600 cursor-pointer inline-flex items-center gap-2 sm:gap-3 md:gap-4 
        px-6 sm:px-8 md:px-10 lg:px-12 
        py-3 sm:py-4 md:py-5 
        bg-emerald-600 text-white font-bold 
        text-xs sm:text-sm 
        uppercase tracking-[0.15em] sm:tracking-[0.2em] 
        overflow-hidden transition-all duration-300 
        hover:shadow-[0_10px_40px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-[0.98]"
                >
                  <span className="relative z-20 transition-colors duration-300 group-hover:text-emerald-600 whitespace-nowrap">
                    Optimize Your Operations
                  </span>
                  <svg
                    className="relative z-20 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-300 group-hover:translate-x-2 group-hover:text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </button>
              </div>
            </div>
          </div>

          {/* ── BUSINESS IMPACT + VALUE CARDS ────────── */}
          <div className="max-w-7xl mx-auto pt-10 sm:pt-12 md:pt-16 lg:pt-20 mb-20 md:mb-28">
            <div className="max-w-3xl mx-auto text-center mb-14 px-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  Business Impact
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>
              <p className="text-2xl md:text-3xl text-slate-700 font-normal leading-snug">
                Move from reporting the past to{" "}
                <span className="text-emerald-700 font-medium">
                  deciding the best next action
                </span>
                , with AI connected to the systems you already run on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Operational Foresight",
                  desc: "Forecast demand, failures, risks, and delays before they affect your business.",
                  link: "Forecasting",
                },
                {
                  num: "02",
                  title: "Risk-Free Experimentation",
                  desc: "Test changes in a digital twin before committing real money, machines, or people.",
                  link: "Simulation",
                },
                {
                  num: "03",
                  title: "Best Feasible Decisions",
                  desc: "Optimization engines find the best action within your objectives and constraints.",
                  link: "Optimization",
                },
                {
                  num: "04",
                  title: "Connected to Your Systems",
                  desc: "Integrates with ERP, CMMS, WMS, SCADA and more, with no isolated AI demos.",
                  link: "Integration",
                },
                {
                  num: "05",
                  title: "Reliable in Production",
                  desc: "MLOps, monitoring, and drift detection keep models accurate over time.",
                  link: "Reliability",
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

          {/* ── CAPABILITIES ─────────────────────────── */}
          <section className="bg-white py-16 md:py-20 px-0">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14 md:mb-20">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    Core Service Portfolio
                  </div>
                  <div className="h-px w-8 bg-emerald-600" />
                </div>
                <h2 className="apo-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  Five Layers of{" "}
                  <span className="text-emerald-600">Operational Intelligence</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  From insight and simulation to optimization, integration, and
                  the data foundation underneath.
                </p>
              </div>

              <div className="space-y-6 md:space-y-10">
                {capabilities.map((c, i) => (
                  <CapabilityBlock key={c.letter} c={c} dark={i % 2 === 0} />
                ))}
              </div>
            </div>
          </section>

          {/* ── WHAT-IF BAND ─────────────────────────── */}
          <section className="bg-white py-16 md:py-20 px-0">
            <div className="max-w-7xl mx-auto bg-[#062c1b] relative overflow-hidden p-8 md:p-16 shadow-[0_32px_80px_rgba(6,44,27,0.3)]">
              <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                  <div className="w-1 h-1 rounded-full bg-emerald-400" />
                  Digital Twin Scenarios
                </div>
                <h3 className="apo-serif text-4xl md:text-5xl font-normal text-white mb-10 tracking-tight leading-[1.05]">
                  Ask "What happens <br className="hidden md:block" /> if we change this?"
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-emerald-900">
                  {whatIf.map((q) => (
                    <div
                      key={q}
                      className="bg-[#062c1b] p-6 md:p-8 text-emerald-50 text-lg font-light leading-snug hover:bg-emerald-900/60 transition-colors duration-500"
                    >
                      {q}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── VERTICALS ────────────────────────────── */}
          <section className="bg-white py-16 md:py-20 px-0">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    Target Industries
                  </div>
                  <div className="h-px w-8 bg-emerald-600" />
                </div>
                <h2 className="apo-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  One Capability, <span className="text-emerald-600">Four Industries</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  The same operational-AI foundation, applied to the specific
                  problems of each vertical.
                </p>
              </div>

              <div className="flex flex-col divide-y divide-slate-100 border-y border-slate-100">
                {verticals.map((v, i) => (
                  <div
                    key={v.name}
                    className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-10 px-4 sm:px-8 hover:bg-slate-50 hover:shadow-xl transition-all duration-700"
                  >
                    <div className="flex items-center gap-6 md:w-96 shrink-0">
                      <span className="apo-serif text-xs italic text-slate-300 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-500">
                        {v.name}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed flex-1">
                      {v.sol}
                    </p>
                  </div>
                ))}
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
                  Process Optimization FAQ
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>
              <h2 className="apo-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                AI-Driven{" "}
                <span className="text-emerald-600">Process Optimization</span>
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Common questions about operational AI, digital twins, and
                optimization engineering.
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

export default AIProcessOptimization;