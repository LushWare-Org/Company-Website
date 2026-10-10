import React, { useState } from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import { useNavigate } from "react-router-dom";

const Manufacturing: React.FC = () => {
  const navigate = useNavigate();
  const [activeSolution, setActiveSolution] = useState(0);

  const faqItems = [
    {
      question: "What does AI for manufacturing actually do?",
      answer:
        "It predicts machine failures, optimizes production schedules and resources, detects quality problems early, and reduces energy and material waste, all using your real production data.",
    },
    {
      question: "Can this work with our existing MES, SCADA, and ERP?",
      answer:
        "Yes. We integrate through IoT, edge, and streaming layers such as MQTT/Kafka with MES, SCADA, and ERP, so AI operates as part of the factory rather than as an isolated analytics application.",
    },
    {
      question: "What is a factory digital twin?",
      answer:
        "A computational representation of your manufacturing operation. It combines real-time production data with simulation and optimization so you can evaluate decisions, like a machine failure or a new line, before they affect the physical operation.",
    },
    {
      question: "Will AI take control of production on its own?",
      answer:
        "Only within the limits you define. Autonomy is progressive: from recommendations, to human-approved actions, to automated decisions inside defined constraints and human oversight.",
    },
    {
      question: "Which types of manufacturing do you support?",
      answer:
        "Discrete manufacturing, process manufacturing, industrial facilities, and smart factory programs, each with solutions tailored to its environment.",
    },
  ];

  const challenges = [
    "Unplanned machine downtime",
    "Production bottlenecks",
    "Inefficient scheduling",
    "Quality defects",
    "Scrap and rework",
    "Energy inefficiency",
    "Material shortages",
    "Production variability",
    "Poor resource utilization",
    "Complex maintenance requirements",
  ];

  const solutions = [
    {
      title: "Predictive Maintenance",
      intro:
        "Predict equipment behavior and identify potential failures before they disrupt production.",
      items: [
        "Machine health monitoring",
        "Failure prediction",
        "Anomaly detection",
        "Remaining useful life estimation",
        "Maintenance optimization",
        "Condition-based maintenance",
      ],
    },
    {
      title: "Production Optimization",
      intro:
        "Determine how production resources should be allocated to maximize performance.",
      items: [
        "Production scheduling",
        "Machine allocation",
        "Workforce allocation",
        "Batch optimization",
        "Changeover optimization",
        "Capacity planning",
      ],
    },
    {
      title: "Quality Intelligence",
      intro: "Identify the factors that contribute to quality problems.",
      items: [
        "Defect prediction",
        "Quality anomaly detection",
        "Root-cause analysis",
        "Process parameter optimization",
        "Computer vision",
        "Yield prediction",
      ],
    },
    {
      title: "Energy & Resource Optimization",
      intro:
        "Optimize energy, materials, machine utilization and production capacity.",
      items: [
        "Energy forecasting",
        "Consumption optimization",
        "Capacity optimization",
        "Material utilization",
        "Waste reduction",
        "Production efficiency",
      ],
    },
  ];

  const twinQuestions = [
    "What happens if a machine goes down?",
    "What happens if production demand increases?",
    "What if we change the production sequence?",
    "What if we add another production line?",
    "Where is the next bottleneck likely to occur?",
  ];

  const selfLoop = [
    "Sense",
    "Understand",
    "Predict",
    "Simulate",
    "Optimize",
    "Execute",
    "Measure",
    "Adapt",
  ];
  const infra = [
    "IoT",
    "Edge",
    "MQTT/Kafka",
    "Time-Series Data",
    "MES/SCADA/ERP",
    "AI",
    "Optimization",
    "Decision Layer",
  ];

  const advanced = [
    "Industrial IoT",
    "Digital twins",
    "Discrete-event simulation",
    "Reinforcement learning",
    "Constraint optimization",
    "Production scheduling",
    "Predictive maintenance",
    "Computer vision",
    "Edge AI",
    "Real-time optimization",
    "Multi-agent systems",
    "Self-optimization",
  ];

  const useCases = [
    {
      name: "Discrete Manufacturing",
      desc: "Optimize production schedules, machines, materials and quality.",
    },
    {
      name: "Process Manufacturing",
      desc: "Optimize process parameters, energy and production yield.",
    },
    {
      name: "Industrial Facilities",
      desc: "Combine predictive maintenance, energy optimization and operational intelligence.",
    },
    {
      name: "Smart Factories",
      desc: "Build interconnected AI systems capable of progressively autonomous decision-making.",
    },
  ];

  const outcomes = [
    "Higher OEE.",
    "Less downtime.",
    "Lower waste.",
    "Better quality.",
    "Improved capacity utilization.",
    "More adaptive manufacturing operations.",
  ];

const Chain: React.FC<{ steps: string[]; dark?: boolean }> = ({ steps, dark }) => (
  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
    {steps.map((s, i) => (
      <React.Fragment key={s}>
        <div
          className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${
            dark
              ? "bg-[#141414] text-emerald-300 border border-emerald-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-emerald-500/50 hover:bg-[#1a1a1a]"
              : "bg-white text-emerald-700 border border-emerald-600/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-emerald-600/60 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
          }`}
        >
          {/* Subtle top inner highlight for depth */}
          <div
            className={`absolute inset-x-0 top-0 h-[1px] rounded-t-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              dark ? "bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" : "bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent"
            }`}
          />

          <span
            className={`relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold transition-transform duration-300 group-hover:scale-105 ${
              dark
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                : "bg-emerald-600 text-white shadow-sm"
            }`}
          >
            {i + 1}
          </span>
          <span className="relative z-10">{s}</span>
        </div>

        {i < steps.length - 1 && (
          <div
            className={`flex items-center px-1 transition-opacity duration-300 ${
              dark ? "text-emerald-500/70" : "text-emerald-600/70"
            }`}
          >
            <div className={`h-[1px] w-3 sm:w-4 ${dark ? "bg-emerald-500/40" : "bg-emerald-600/40"}`} />
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
);

  const gridBg = {
    backgroundImage:
      "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const sol = solutions[activeSolution];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .mfg-root * { font-family: 'DM Sans', sans-serif; }
        .mfg-serif  { font-family: 'DM Serif Display', serif !important; }

        .mfg-fadeUp { animation: mfgFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .mfg-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .mfg-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes mfgFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mfg-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <section className="mfg-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
        <div className="max-w-7xl pt-6 md:pt-12 mx-auto">
          {/* ── HERO ─────────────────────────────────── */}
          <div className="relative max-w-6xl mt-12 mx-auto text-center mb-16 md:mb-20">
            <div className="mfg-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

            <div className="mfg-fadeUp flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                Manufacturing
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h1 className="mfg-fadeUp mfg-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
              Intelligent Operations <br />
              <span className="text-emerald-600">for Manufacturing</span>
            </h1>

            <p className="mfg-fadeUp text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              Build factories that can predict, optimize and continuously
              improve themselves. We build AI-powered industrial systems that
              help manufacturers understand production in real time, predict
              failures, optimize decisions and create progressively
              self-optimizing operations.
            </p>
          </div>

          {/* ── HERO IMAGE ───────────────────────────── */}
          <div className="relative mb-10">
            <div className="relative overflow-hidden h-[250px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[700px] w-full">
              {/* Dummy image, replace src later */}
              <img
                src="/hero4/manufacturing.jpg"
                alt="Intelligent manufacturing operations"
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
                    Optimize Your Factory
                  </span>

                  <svg
                    className="relative z-20 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-300 group-hover:translate-x-2 group-hover:text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>

                  {/* Animated Background Slide on Hover */}
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
                Increase productivity while controlling cost, quality and
                downtime, with{" "}
                <span className="text-emerald-700 font-medium">
                  AI that operates as part of the factory
                </span>
                , not as an isolated analytics application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Less Unplanned Downtime",
                  desc: "Predict machine failures and maintain equipment before it disrupts production.",
                  link: "Reliability",
                },
                {
                  num: "02",
                  title: "Higher OEE",
                  desc: "Optimize schedules, machine allocation and changeovers to maximize throughput.",
                  link: "Productivity",
                },
                {
                  num: "03",
                  title: "Better Quality, Less Waste",
                  desc: "Detect defects early, find root causes and cut scrap and rework.",
                  link: "Quality",
                },
                {
                  num: "04",
                  title: "Lower Energy & Material Cost",
                  desc: "Forecast and optimize energy, materials and capacity utilization.",
                  link: "Efficiency",
                },
                {
                  num: "05",
                  title: "Connected to Your Systems",
                  desc: "Integrates with IoT, MES, SCADA and ERP so intelligence runs inside the factory.",
                  link: "Integration",
                },
                {
                  num: "06",
                  title: "Progressively Self-Optimizing",
                  desc: "Move from insight to governed, continuously improving production decisions.",
                  link: "Autonomy",
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

          {/* ── THE CHALLENGE ────────────────────────── */}
          <section className="bg-white py-16 md:py-24 px-0">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-14 md:mb-24">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px w-8 bg-emerald-600" />
                    <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                      The Challenge
                    </div>
                  </div>
                  <h3 className="mfg-serif text-5xl sm:text-6xl md:text-7xl font-normal text-slate-900 tracking-tight leading-[1.0]">
                    Pressure to Produce <br />
                    <span className="text-emerald-600">More, With Less.</span>
                  </h3>
                </div>

                <div className="lg:pt-14">
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-6">
                    Manufacturers face constant pressure to increase
                    productivity while controlling cost, quality and downtime.
                  </p>
                  <div className="h-px w-20 bg-emerald-600" />
                </div>
              </div>

              <div className="border-t border-stone-300 bg-[#F5F5F7]/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-300 border-b border-stone-300">
                  {challenges.map((item, i) => (
                    <div
                      key={item}
                      className="group p-8 md:p-10 bg-[#F5F5F7] hover:bg-white transition-all duration-300 flex flex-col justify-between"
                    >
                      <span className="mfg-serif text-[11px] italic text-stone-400 group-hover:text-stone-900 transition-colors duration-300 mb-6 block tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <p className="text-lg md:text-xl font-semibold text-stone-900 tracking-tight leading-snug">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── OUR SOLUTIONS (tabs) ─────────────────── */}
          <section className="bg-white py-16 md:py-20 px-2">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14 md:mb-20">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    Our Solutions
                  </div>
                  <div className="h-px w-8 bg-emerald-600" />
                </div>

                <h2 className="mfg-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  Intelligence for{" "}
                  <span className="text-emerald-600">
                    Every Stage of Production
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  From machine health to production planning, quality and
                  energy, built on one connected intelligence layer.
                </p>
              </div>

<div className="border border-emerald-600/20 bg-[#ffffff] shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
  {/* Tab Rail */}
  <div className="bg-[#ffffff] border-b border-emerald-600/10 p-4">
    <div role="tablist" className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-stretch gap-2">
      {solutions.map((s, i) => {
        const on = i === activeSolution;
        return (
          <button
            key={s.title}
            role="tab"
            aria-selected={on}
            onClick={() => setActiveSolution(i)}
            className={`lg:flex-1 lg:min-w-0 text-left px-4 py-3 transition-all duration-300 cursor-pointer flex items-center gap-3 ${
              on 
                ? "bg-emerald-600 text-white shadow-sm" 
                : "bg-[#ffffff] hover:bg-emerald-50/50 text-slate-600 border border-emerald-600/10"
            }`}
          >
            <span className={`text-xs md:text-sm font-mono tabular-nums shrink-0 ${on ? "text-emerald-100" : "text-slate-400"}`}>
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

  {/* Compact Asymmetric Content Panel */}
  <div role="tabpanel" className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#ffffff]">
    <div className="lg:col-span-4 lg:pr-8 lg:border-r border-emerald-600/10">
      <h3 className="mfg-serif text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
        {sol.title}
      </h3>
      <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
        {sol.intro}
      </p>
    </div>

    <div className="lg:col-span-8 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {sol.items.map((it, idx) => (
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
            </div>
          </section>

          {/* ── FACTORY DIGITAL TWINS ────────────────── */}
          <section className="py-12 md:py-16 px-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
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
                    Simulate Before You Act
                  </div>
                  <h4 className="mfg-serif text-3xl md:text-5xl font-normal text-white mb-6 tracking-tight leading-[1.05]">
                    Factory Digital Twins
                  </h4>
                  <p className="text-emerald-100 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl mb-4">
                    Build computational representations of manufacturing
                    operations and simulate decisions before they reach the shop
                    floor.
                  </p>
                  <p className="text-emerald-200/80 font-light leading-relaxed max-w-2xl">
                    Digital twins can combine real-time production data with
                    simulation and optimization to evaluate decisions before
                    they affect the physical operation.
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 group relative border border-slate-200 hover:border-emerald-400 p-8 md:p-10 flex flex-col transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)] overflow-hidden">
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />
                <div className="flex items-center gap-3 mb-6">
                  <span className="mfg-serif text-xl italic text-emerald-600">
                    What if
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

          {/* ── SELF-OPTIMIZING MANUFACTURING ────────── */}
          <section className="bg-white py-16 md:py-24 px-0">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-slate-200 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)]">
                <div className="lg:col-span-4 bg-emerald-800 p-8 md:p-12 flex flex-col justify-between text-white min-h-[200px] relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={gridBg}
                  />
                  <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                    The Long-Term Objective
                  </p>
                  <h4 className="relative mfg-serif text-3xl md:text-4xl font-normal tracking-tight leading-snug mt-8">
                    Self-Optimizing Manufacturing
                  </h4>
                </div>

                <div className="lg:col-span-8 p-8 md:p-14 bg-white">
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-8">
                    The long-term objective is to create manufacturing systems
                    capable of{" "}
                    <span className="text-slate-900 font-medium italic">
                      continuously improving their operational decisions.
                    </span>
                  </p>
                  <Chain steps={selfLoop} />
                  <p className="text-slate-500 font-light leading-relaxed mt-8 pl-5 border-l-2 border-emerald-600">
                    Within defined constraints and human oversight, AI systems
                    can continuously search for better production strategies as
                    demand, machine conditions and operational conditions
                    change.
                  </p>
                </div>
              </div>

              <div className="mt-6 md:mt-10 relative overflow-hidden bg-[#062c1b] p-8 md:p-14 shadow-[0_32px_80px_rgba(6,44,27,0.3)]">
                <div
                  className="absolute inset-0 opacity-[0.035] pointer-events-none"
                  style={gridBg}
                />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />
                <div className="relative z-10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4">
                    Integration Architecture
                  </p>
                  <h4 className="mfg-serif text-3xl md:text-5xl font-normal text-white mb-5 tracking-tight leading-[1.05]">
                    Industrial AI Infrastructure
                  </h4>
                  <p className="text-emerald-100 text-lg font-light leading-relaxed max-w-3xl mb-8">
                    We integrate intelligence with the systems manufacturers
                    already use. This enables AI to operate as part of the
                    factory rather than as an isolated analytics application.
                  </p>
                  <Chain steps={infra} dark />
                </div>
              </div>
            </div>
          </section>

          {/* ── ADVANCED CAPABILITIES ────────────────── */}
          <section className="bg-white py-16 md:py-20 px-0">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto text-center px-4 mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    Advanced Capabilities
                  </div>
                  <div className="h-px w-8 bg-emerald-600" />
                </div>
                <h2 className="mfg-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.05]">
                  Deep Engineering,{" "}
                  <span className="text-emerald-600">Under the Hood</span>
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {advanced.map((a) => (
                  <span
                    key={a}
                    className="px-5 py-3 border border-slate-200 text-slate-700 font-medium hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-800 transition-all duration-300"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── USE CASES ────────────────────────────── */}
          <section className="bg-white py-16 md:py-20 px-2">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14 md:mb-20">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    Example Use Cases
                  </div>
                  <div className="h-px w-8 bg-emerald-600" />
                </div>
                <h2 className="mfg-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.05]">
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
                      <span className="mfg-serif text-xs italic text-slate-300 tabular-nums">
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
            </div>
          </section>

          {/* ── OUTCOME ──────────────────────────────── */}
          <section className="py-12 md:py-16 px-0">
            <div className="max-w-7xl mx-auto bg-[#062c1b] relative overflow-hidden p-8 md:p-16 shadow-[0_32px_80px_rgba(6,44,27,0.3)]">
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={gridBg}
              />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />
              <div className="relative z-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-8">
                  The Outcome
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {outcomes.map((o) => (
                    <p
                      key={o}
                      className="mfg-serif text-3xl md:text-4xl text-white tracking-tight py-5 border-b border-emerald-900 hover:text-emerald-300 transition-colors duration-500"
                    >
                      {o}
                    </p>
                  ))}
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
                  Manufacturing FAQ
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <h2 className="mfg-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                Intelligent Operations for{" "}
                <span className="text-emerald-600">Manufacturing</span>
              </h2>

              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Common questions about predictive maintenance, production
                optimization and self-optimizing factories.
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

export default Manufacturing;
