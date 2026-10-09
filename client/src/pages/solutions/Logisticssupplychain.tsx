import React, { useState } from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import { useNavigate } from "react-router-dom";

const LogisticsSupplyChain: React.FC = () => {
  const navigate = useNavigate();
  const [activeSolution, setActiveSolution] = useState(0);

  const faqItems = [
    {
      question: "How is this different from our existing planning tools?",
      answer:
        "Traditional planning is static. We add prediction, optimization under real-world constraints, and continuous re-optimization, so routes, inventory and priorities adapt as conditions change.",
    },
    {
      question: "Can you optimize routes under real-world constraints?",
      answer:
        "Yes. We model vehicle capacity, time windows, driver and resource availability, and live events, and support real-time rerouting.",
    },
    {
      question: "How do you reduce stockouts and excess inventory?",
      answer:
        "Through SKU-level and probabilistic forecasting combined with safety-stock and replenishment optimization across multiple locations.",
    },
    {
      question: "What is a supply chain digital twin used for?",
      answer:
        "To test scenarios such as a delayed supplier, a demand spike, reduced transport capacity, a new warehouse or higher fuel costs, before committing real resources.",
    },
    {
      question: "Can the system act on its own?",
      answer:
        "Autonomy is progressive and constrained. It can start with recommendations and approvals, then automate dispatch and re-optimization within limits you define.",
    },
  ];

  const challenges = [
    "Demand volatility",
    "Inventory imbalance",
    "Delivery delays",
    "Poor route planning",
    "Vehicle underutilization",
    "Warehouse bottlenecks",
    "Supplier disruptions",
    "Stockouts and excess inventory",
    "Unpredictable ETAs",
    "Rising transportation costs",
    "Limited end-to-end visibility",
  ];

  const solutions = [
    {
      title: "Demand & Supply Forecasting",
      intro: "Predict future demand and supply conditions.",
      items: [
        "Demand forecasting",
        "SKU-level prediction",
        "Supply forecasting",
        "Lead-time prediction",
        "Seasonal modeling",
        "Probabilistic forecasting",
      ],
    },
    {
      title: "Inventory Optimization",
      intro:
        "Balance inventory availability against working-capital and storage costs.",
      items: [
        "Safety-stock optimization",
        "Replenishment optimization",
        "Stockout prediction",
        "Excess inventory detection",
        "Multi-location inventory optimization",
      ],
    },
    {
      title: "Intelligent Routing & Dispatch",
      intro: "Optimize transportation decisions under real-world constraints.",
      items: [
        "Vehicle routing",
        "Dynamic dispatch",
        "Delivery sequencing",
        "Capacity constraints",
        "Time-window optimization",
        "Driver/resource allocation",
        "Real-time rerouting",
      ],
    },
    {
      title: "ETA & SLA Intelligence",
      intro: "Predict delivery performance before failures occur.",
      items: [
        "ETA prediction",
        "Delay prediction",
        "SLA risk prediction",
        "Bottleneck detection",
        "Exception management",
        "Proactive intervention recommendations",
      ],
    },
  ];

  const twinQuestions = [
    "What happens if a supplier is delayed?",
    "What if demand increases 30%?",
    "What if transportation capacity falls?",
    "What if we open another warehouse?",
    "What happens if fuel costs increase?",
  ];

  const autoLoop = [
    "Observe",
    "Predict",
    "Optimize",
    "Dispatch",
    "Monitor",
    "Re-optimize",
  ];

  const advanced = [
    "Multi-agent logistics systems",
    "Network optimization",
    "Discrete-event simulation",
    "Monte Carlo risk simulation",
    "Vehicle routing optimization",
    "Inventory optimization",
    "Reinforcement learning",
    "Real-time event processing",
  ];

  const useCases = [
    {
      name: "Transportation & Fleet",
      desc: "Optimize routes, vehicles, drivers and delivery schedules.",
    },
    {
      name: "Warehousing",
      desc: "Optimize inventory, picking, capacity and workforce allocation.",
    },
    {
      name: "Distribution Networks",
      desc: "Simulate network changes and optimize facility allocation.",
    },
    {
      name: "Supply Chain Management",
      desc: "Predict disruptions and continuously optimize supply-demand decisions.",
    },
  ];

  const outcomes = [
    "Lower logistics costs.",
    "Fewer delays.",
    "Better inventory utilization.",
    "Higher fleet efficiency.",
    "More resilient supply chains.",
  ];

  const Chain = ({ steps, dark }: { steps: string[]; dark?: boolean }) => (
    <div className="flex flex-wrap items-center gap-y-3">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <span
            className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-[0.12em] border ${
              dark
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                : "border-emerald-600 text-emerald-700 bg-white"
            }`}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <span
              className={`mx-2 ${dark ? "text-emerald-500" : "text-emerald-600"}`}
            >
              →
            </span>
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

        .lsc-root * { font-family: 'DM Sans', sans-serif; }
        .lsc-serif  { font-family: 'DM Serif Display', serif !important; }

        .lsc-fadeUp { animation: lscFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .lsc-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .lsc-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes lscFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .lsc-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <section className="lsc-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
        <div className="max-w-7xl pt-6 md:pt-12 mx-auto">
          {/* ── HERO ─────────────────────────────────── */}
          <div className="relative max-w-6xl mt-12 mx-auto text-center mb-16 md:mb-20">
            <div className="lsc-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

            <div className="lsc-fadeUp flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                Logistics & Supply Chain
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h1 className="lsc-fadeUp lsc-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
              Intelligent Operations for <br />
              <span className="text-emerald-600">Logistics & Supply Chain</span>
            </h1>

            <p className="lsc-fadeUp text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              Make supply chains predictive, adaptive and continuously
              optimized. We build AI and optimization systems that help
              organizations predict disruptions, optimize logistics decisions
              and continuously adapt operations to changing conditions.
            </p>
          </div>

          {/* ── HERO IMAGE ───────────────────────────── */}
          <div className="relative mb-10">
            <div className="relative overflow-hidden h-[250px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[700px] w-full">
              {/* Dummy image, replace src later */}
              <img
                src="/hero4/logistics-supply-chain.jpg"
                alt="Intelligent logistics and supply chain operations"
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
                    Optimize Your Supply Chain
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
                Turn a supply chain that reacts to uncertainty into one that{" "}
                <span className="text-emerald-700 font-medium">
                  predicts, adapts and re-optimizes
                </span>{" "}
                as real-world conditions change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Lower Logistics Costs",
                  desc: "Smarter routing, loading and network decisions reduce transportation spend.",
                  link: "Cost",
                },
                {
                  num: "02",
                  title: "Fewer Delays",
                  desc: "Predict delays and SLA risks early, then intervene before customers feel them.",
                  link: "Reliability",
                },
                {
                  num: "03",
                  title: "Better Inventory Utilization",
                  desc: "Balance availability against working capital and storage cost across locations.",
                  link: "Inventory",
                },
                {
                  num: "04",
                  title: "Higher Fleet Efficiency",
                  desc: "Optimize vehicles, drivers and delivery sequences under real-world constraints.",
                  link: "Fleet",
                },
                {
                  num: "05",
                  title: "More Resilient Supply Chains",
                  desc: "Simulate disruptions and network changes before they hit your operation.",
                  link: "Resilience",
                },
                {
                  num: "06",
                  title: "Real-Time Adaptation",
                  desc: "Dynamically adjust routes, resources and priorities as conditions change.",
                  link: "Adaptation",
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
                  <h3 className="lsc-serif text-5xl sm:text-6xl md:text-7xl font-normal text-slate-900 tracking-tight leading-[1.0]">
                    Highly Sensitive <br />
                    <span className="text-emerald-600">to Uncertainty.</span>
                  </h3>
                </div>

                <div className="lg:pt-14">
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-6">
                    Supply chains are highly sensitive to uncertainty. Small
                    disruptions ripple across suppliers, inventory,
                    transportation and delivery commitments.
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

                <h2 className="lsc-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  Intelligence Across{" "}
                  <span className="text-emerald-600">
                    the Entire Supply Chain
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  From forecasting and inventory to routing and delivery
                  performance, connected into one decision layer.
                </p>
              </div>

```jsx
<div className="border border-emerald-600/20 bg-[#ffffff] shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
  {/* Tab Rail */}
  <div className="bg-[#ffffff] border-b border-emerald-600/10 p-4">
    <div
      role="tablist"
      className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-stretch gap-2"
    >
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
      <h3 className="lsc-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-[1.1] mb-4">
        {sol.title}
      </h3>

      <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
        {sol.intro}
      </p>

      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700 mt-6">
        What we deliver
      </p>
    </div>

    {/* Deliverables */}
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
```

            </div>
          </section>

          {/* ── SUPPLY CHAIN DIGITAL TWINS ───────────── */}
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
                    Test Before It Happens
                  </div>
                  <h4 className="lsc-serif text-3xl md:text-5xl font-normal text-white mb-6 tracking-tight leading-[1.05]">
                    Supply Chain Digital Twins
                  </h4>
                  <p className="text-emerald-100 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                    Create computational models of the supply chain and test
                    potential scenarios before they happen in the real world.
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 group relative border border-slate-200 hover:border-emerald-400 p-8 md:p-10 flex flex-col transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)] overflow-hidden">
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />
                <div className="flex items-center gap-3 mb-6">
                  <span className="lsc-serif text-xl italic text-emerald-600">
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

          {/* ── AUTONOMOUS LOGISTICS ─────────────────── */}
          <section className="bg-white py-16 md:py-24 px-0">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-slate-200 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)]">
                <div className="lg:col-span-4 bg-emerald-800 p-8 md:p-12 flex flex-col justify-between text-white min-h-[200px] relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={gridBg}
                  />
                  <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                    Always Adapting
                  </p>
                  <h4 className="relative lsc-serif text-3xl md:text-4xl font-normal tracking-tight leading-snug mt-8">
                    Autonomous Logistics
                  </h4>
                </div>

                <div className="lg:col-span-8 p-8 md:p-14 bg-white">
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-8">
                    Move from static planning toward{" "}
                    <span className="text-slate-900 font-medium italic">
                      continuously adaptive operations.
                    </span>
                  </p>
                  <Chain steps={autoLoop} />
                  <p className="text-slate-500 font-light leading-relaxed mt-8 pl-5 border-l-2 border-emerald-600">
                    Systems can dynamically adjust routes, resources and
                    priorities as real-world conditions change.
                  </p>
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
                <h2 className="lsc-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.05]">
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
                <h2 className="lsc-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.05]">
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
                      <span className="lsc-serif text-xs italic text-slate-300 tabular-nums">
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
                      className="lsc-serif text-3xl md:text-4xl text-white tracking-tight py-5 border-b border-emerald-900 hover:text-emerald-300 transition-colors duration-500"
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
                  Logistics FAQ
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <h2 className="lsc-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                Intelligent Operations for{" "}
                <span className="text-emerald-600">
                  Logistics & Supply Chain
                </span>
              </h2>

              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Common questions about forecasting, routing, inventory
                optimization and adaptive logistics.
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

export default LogisticsSupplyChain;
