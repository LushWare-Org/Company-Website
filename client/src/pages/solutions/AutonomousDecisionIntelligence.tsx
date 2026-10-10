import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import CapabilityBlock, { type Capability } from "../../components/CapabilityBlock";
import { useNavigate } from "react-router-dom";

const AutonomousDecisionIntelligence: React.FC = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "What is Autonomous Decision Intelligence?",
      answer:
        "It is a set of intelligent systems that continuously evaluate operational conditions, determine the best course of action, and execute decisions within predefined business objectives, constraints, and approval policies.",
    },
    {
      question: "Will AI simply run my business on its own?",
      answer:
        "No. Autonomy is introduced progressively and kept constrained. You can start with AI recommendations, move to human-approved actions, and only then allow automatic execution within explicitly defined boundaries.",
    },
    {
      question: "How do you keep autonomous decisions safe and accountable?",
      answer:
        "Through governance: approval workflows, confidence thresholds, escalation, audit logs, role-based permissions, decision explanations, action limits, and continuous AI monitoring.",
    },
    {
      question: "How is this different from conventional automation?",
      answer:
        "Conventional automation repeats the same rules. Self-optimizing systems learn from operational feedback and continuously search for better ways to operate, while staying within safety limits.",
    },
    {
      question: "Why use multiple agents instead of one large AI agent?",
      answer:
        "Specialized agents, such as planning, scheduling, dispatch, and technician agents, are easier to control, test, and audit than one giant agent, and they coordinate through a clear hierarchy.",
    },
    {
      question: "Where does Autonomous Decision Intelligence fit with Process Optimization?",
      answer:
        "Operational AI provides insights, Optimization Engineering identifies suitable decisions, and Autonomous Decision Making turns those decisions into controlled, executable actions that adapt to changing conditions.",
    },
  ];

  const capabilities: Capability[] = [
    {
      letter: "A",
      title: "Autonomous Decision Making",
      intro:
        "Design intelligent systems that continuously evaluate operational conditions, determine the best course of action, and execute decisions within predefined business objectives, constraints, and approval policies.",
      items: [
        "Real-time operational decision engines",
        "AI-driven dynamic scheduling and dispatch",
        "Autonomous resource allocation",
        "Self-optimizing production and logistics",
        "Adaptive inventory and replenishment decisions",
        "Dynamic pricing and revenue management",
        "Real-time energy and capacity control",
        "Multi-agent coordination across business operations",
        "Closed-loop optimization with continuous feedback",
        "Goal-driven decision automation with human oversight",
      ],
      question:
        "Given the current situation, our objectives, and operational constraints, what action should the system take, and how can it verify that the action achieved the intended result?",
    },
    {
      letter: "B",
      title: "AI Governance & Human-in-the-Loop",
      intro:
        "Enterprise-grade controls that keep AI decisions transparent and accountable as you move from recommendations toward autonomous execution.",
      items: [
        "Approval workflows",
        "Confidence thresholds",
        "Escalation",
        "Audit logs",
        "Role-based permissions",
        "Decision explanations",
        "Action limits",
        "AI monitoring",
      ],
      extra:
        "This becomes increasingly important as you move from AI recommendations toward autonomous execution.",
    },
    {
      letter: "C",
      title: "AI-Driven Control & Closed-Loop Optimization",
      intro:
        "Systems that adjust operations continuously based on what actually happened, moving beyond conventional enterprise AI into self-optimizing operations.",
      items: [
        "Closed-loop optimization",
        "Adaptive control",
        "Model predictive control",
        "AI-assisted control",
        "Reinforcement learning",
        "Real-time optimization",
        "Feedback-driven decision systems",
        "Self-adjusting operational parameters",
        "Simulation-to-real optimization",
      ],
      question: "Can the system continuously adjust the operation based on observed outcomes?",
    },
    {
      letter: "D",
      title: "Agentic & Autonomous Operations",
      intro:
        "The longer-term, high-value layer: AI systems that can observe, understand, plan, simulate, decide, execute, and verify, with autonomy that is progressive and constrained.",
      items: [
        "Logistics coordination agents",
        "Maintenance agents",
        "Revenue-management agents",
        "Dispatch agents",
        "Supply-chain agents",
        "Hospitality operations agents",
        "Production coordination agents",
      ],
      extra:
        "We position autonomy as progressive and constrained, rather than claiming that AI will simply run a company.",
    },
    {
      letter: "E",
      title: "Multi-Agent Systems",
      intro:
        "Specialized agents that coordinate with each other, organized in a clear hierarchy rather than one giant AI agent.",
      items: [
        "Multi-agent coordination",
        "Agent-based operational planning",
        "Logistics agents",
        "Maintenance agents",
        "Procurement agents",
        "Scheduling agents",
        "Negotiation agents",
        "Resource allocation agents",
        "Hierarchical agent architectures",
      ],
    },
    {
      letter: "F",
      title: "Self-Optimization Systems",
      intro:
        "Operational systems that continuously monitor their environment, evaluate performance, identify opportunities for improvement, and automatically adjust decisions or parameters to achieve defined business objectives. Unlike conventional automation, they learn from operational feedback and keep searching for better ways to operate.",
      items: [
        "Self-optimizing production systems",
        "Adaptive scheduling and dispatch",
        "Dynamic resource allocation",
        "Autonomous inventory replenishment",
        "Energy consumption optimization",
        "Adaptive HVAC/building optimization",
        "Dynamic fleet and logistics optimization",
        "Continuous supply-chain optimization",
        "AI-driven process parameter optimization",
        "Reinforcement-learning-based optimization",
        "Simulation-driven optimization",
        "Closed-loop operational optimization",
      ],
      question:
        "Can our operation continuously learn from its results and automatically adjust itself to achieve better performance?",
    },
  ];

  const decisionLoop = ["Observe", "Evaluate", "Decide", "Act", "Measure", "Adapt"];
  const agentLoop = ["Observe", "Understand", "Plan", "Simulate", "Decide", "Execute", "Verify"];
  const selfLoop = ["Observe", "Analyze", "Predict", "Optimize", "Act", "Measure", "Learn", "Re-optimize"];

  const optimizationPath = [
    "Manual optimization",
    "AI-assisted optimization",
    "Automated optimization",
    "Continuously self-optimizing operations",
  ];
  const agentChain = ["Planning Agent", "Scheduling Agent", "Dispatch Agent", "Technician Agent"];
  const verticals = [
    ["HVAC & MEP", "Building digital twins, predictive maintenance, energy optimization, technician dispatch, MEP project intelligence"],
    ["Manufacturing", "Predictive maintenance, production optimization, quality intelligence, energy optimization, supply/production coordination"],
    ["Logistics & Supply Chain", "Route optimization, fleet intelligence, warehouse optimization, inventory prediction, disruption management"],
    ["Tourism & Hospitality", "Revenue optimization, demand forecasting, guest operations, transport/excursion optimization, resort operations"],
  ];

const LoopRow: React.FC<{ steps: string[]; dark?: boolean }> = ({ steps, dark }) => (
  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
    {steps.map((s, i) => (
      <React.Fragment key={s}>
        <div
          className={`group relative flex items-center gap-3.5 px-4.5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
            dark
              ? "bg-[#141414] text-neutral-100 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-white/[0.18] hover:bg-[#1a1a1a]"
              : "bg-white text-neutral-900 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-neutral-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
          }`}
        >
          {/* Subtle top inner highlight for depth */}
          <div
            className={`absolute inset-x-0 top-0 h-[1px] rounded-t-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              dark ? "bg-gradient-to-r from-transparent via-white/20 to-transparent" : "bg-gradient-to-r from-transparent via-neutral-400/30 to-transparent"
            }`}
          />

          <span
            className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold transition-transform duration-300 group-hover:scale-105 ${
              dark
                ? "bg-white/[0.08] text-white border border-white/10"
                : "bg-neutral-900 text-white shadow-sm"
            }`}
          >
            {i + 1}
          </span>
          <span className="relative z-10 tracking-tight">{s}</span>
        </div>

        {i < steps.length - 1 && (
          <div
            className={`flex items-center px-1 transition-opacity duration-300 ${
              dark ? "text-neutral-400" : "text-neutral-800"
            }`}
          >
            <div className={`h-[1px] w-3 sm:w-4 ${dark ? "bg-neutral-400" : "bg-neutral-800"}`} />
            <svg
              className="w-3.5 h-3.5 -ml-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .adi-root * { font-family: 'DM Sans', sans-serif; }
        .adi-serif  { font-family: 'DM Serif Display', serif !important; }

        .adi-fadeUp { animation: adiFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .adi-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .adi-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes adiFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .adi-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .adi-pulse { animation: adiPulse 2.4s ease-in-out infinite; }
        @keyframes adiPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
      `}</style>

      <section className="adi-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
        <div className="max-w-7xl pt-6 md:pt-12 mx-auto">
          {/* ── HERO ─────────────────────────────────── */}
          <div className="relative max-w-6xl mt-12 mx-auto text-center mb-16 md:mb-20">
            <div className="adi-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

            <div className="adi-fadeUp flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                Autonomous Decision Intelligence
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h1 className="adi-fadeUp adi-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
              Operations That Decide, <br />
              <span className="text-emerald-600">Act & Keep Improving</span>
            </h1>

            <p className="adi-fadeUp text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              LushWare designs intelligent systems that evaluate conditions,
              choose the best action, execute it within your rules, and verify
              the result, with human oversight at every level of autonomy.
            </p>
          </div>

          {/* ── HERO IMAGE ───────────────────────────── */}
          <div className="relative mb-10">
            <div className="relative overflow-hidden h-[250px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
              <img
                src="/hero4/autonomous-decision-intelligence.jpg"
                alt="Autonomous decision intelligence"
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
                    Plan Your Autonomy
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
                Insight becomes{" "}
                <span className="text-emerald-700 font-medium">
                  controlled, executable action
                </span>
                , adapting to changing conditions while staying inside your
                limits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Faster, Better Decisions",
                  desc: "Real-time engines evaluate conditions and act in seconds, not meeting cycles.",
                  link: "Speed",
                },
                {
                  num: "02",
                  title: "Progressive Autonomy",
                  desc: "Start with recommendations, add approvals, then automate within defined boundaries.",
                  link: "Autonomy",
                },
                {
                  num: "03",
                  title: "Governed by Design",
                  desc: "Audit logs, permissions, action limits, and escalation keep every decision accountable.",
                  link: "Governance",
                },
                {
                  num: "04",
                  title: "Self-Improving Operations",
                  desc: "Systems learn from outcomes and keep searching for better ways to operate.",
                  link: "Learning",
                },
                {
                  num: "05",
                  title: "Coordinated Agents",
                  desc: "Specialized agents plan, schedule, dispatch, and verify as one coordinated system.",
                  link: "Agents",
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

          {/* ── DECISION LOOP FEATURE ────────────────── */}
          <section className="bg-white py-12 md:py-16 px-0">
            <div className="max-w-7xl mx-auto bg-[#062c1b] relative overflow-hidden p-8 md:p-16 shadow-[0_32px_80px_rgba(6,44,27,0.3)]">
              <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 adi-pulse" />
                  The Decision Loop
                </div>
                <h3 className="adi-serif text-4xl md:text-5xl font-normal text-white mb-6 tracking-tight leading-[1.05]">
                  A Loop That Never Stops Learning
                </h3>
                <p className="text-emerald-100 text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-10">
                  Operational AI provides insights, Optimization Engineering
                  identifies suitable decisions, and Autonomous Decision Making
                  turns those decisions into controlled, executable actions that
                  adapt to changing conditions.
                </p>
                <LoopRow steps={decisionLoop} dark />
                <p className="text-emerald-200/80 font-light leading-relaxed max-w-3xl mt-8">
                  Simulation, optimization, operational feedback, and governance
                  mechanisms help ensure that decisions remain aligned with
                  business objectives and safety requirements.
                </p>
              </div>
            </div>
          </section>

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
                <h2 className="adi-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  Six Pillars of{" "}
                  <span className="text-emerald-600">Autonomous Operations</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  From decision engines and governance to multi-agent
                  coordination and self-optimizing systems.
                </p>
              </div>

              <div className="space-y-6 md:space-y-10">
                {capabilities.map((c, i) => (
                  <CapabilityBlock key={c.letter} c={c} dark={i % 2 === 0} />
                ))}
              </div>
            </div>
          </section>

          {/* ── LOOPS, AGENTS & MATURITY ─────────────── */}
          <section className="bg-white py-16 md:py-20 px-0">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    How Autonomy Works
                  </div>
                  <div className="h-px w-8 bg-emerald-600" />
                </div>
                <h2 className="adi-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  Autonomy, <span className="text-emerald-600">Step by Step</span>
                </h2>
              </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
    <div className="group relative p-8 md:p-12 rounded-[2rem] bg-slate-100/40 dark:bg-slate-900/80 backdrop-blur-3xl border border-slate-200/60 dark:border-slate-800/60 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-700 flex flex-col justify-between overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700" />
      <div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
            Operations
          </span>
          <span className="text-xs font-medium text-slate-400 font-mono">01</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3">
          Agentic operations loop.
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal tracking-tight mb-8 max-w-md">
          Continuous contextual analysis and execution tracking engineered for high-precision throughput.
        </p>
      </div>
      <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
        <LoopRow steps={agentLoop} />
      </div>
    </div>

    <div className="group relative p-8 md:p-12 rounded-[2rem] bg-slate-100/40 dark:bg-slate-900/80 backdrop-blur-3xl border border-slate-200/60 dark:border-slate-800/60 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-700 flex flex-col justify-between overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700" />
      <div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
            Adaptation
          </span>
          <span className="text-xs font-medium text-slate-400 font-mono">02</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3">
          Self-optimization loop.
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal tracking-tight mb-8 max-w-md">
          Dynamic parameter tuning driven by real-time behavioral feedback models.
        </p>
      </div>
      <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
        <LoopRow steps={selfLoop} />
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
    <div className="relative p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950 text-white border border-emerald-800/40 shadow-2xl flex flex-col justify-between overflow-hidden">
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/20">
            Architecture
          </span>
          <span className="text-xs font-medium text-emerald-400/60 font-mono">03</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
          Hierarchy, not one giant agent.
        </h3>
        <p className="text-emerald-100/90 text-sm md:text-base font-normal tracking-tight mb-8 max-w-md">
          Structured modular delegation framework designed to prevent cognitive bottlenecks.
        </p>
      </div>
      <div className="pt-6 border-t border-emerald-400/50 relative z-10">
        <div className="flex flex-wrap items-center gap-y-3">
          {agentChain.map((a, i) => (
            <React.Fragment key={a}>
              <span className="px-4 py-2.5 rounded-xl border border-emerald-200/30 bg-emerald-900/40 backdrop-blur-md text-sm font-medium tracking-wide shadow-sm text-emerald-50 hover:bg-emerald-800/60 transition-all duration-300">
                {a}
              </span>
              {i < agentChain.length - 1 && (
                <span className="mx-3 text-emerald-200/60 font-light text-lg">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>

    <div className="group relative p-8 md:p-12 rounded-[2rem] bg-slate-100/40 dark:bg-slate-900/80 backdrop-blur-3xl border border-slate-200/60 dark:border-slate-800/60 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-700 flex flex-col justify-between overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700" />
      <div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
            Progression
          </span>
          <span className="text-xs font-medium text-slate-400 font-mono">04</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3">
          Optimization progression.
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal tracking-tight mb-8 max-w-md">
          Step-by-step milestones mapping out refinement cycles across system iterations.
        </p>
      </div>
      <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
        <LoopRow steps={optimizationPath} />
      </div>
    </div>
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
                <h2 className="adi-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  Applied Across <span className="text-emerald-600">Four Industries</span>
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100 border-y border-slate-100">
                {verticals.map(([name, sol], i) => (
                  <div
                    key={name}
                    className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-10 px-4 sm:px-8 hover:bg-slate-50 hover:shadow-xl transition-all duration-700"
                  >
                    <div className="flex items-center gap-6 md:w-96 shrink-0">
                      <span className="adi-serif text-xs italic text-slate-300 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-500">
                        {name}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed flex-1">{sol}</p>
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
                  Decision Intelligence FAQ
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>
              <h2 className="adi-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                Autonomous{" "}
                <span className="text-emerald-600">Decision Intelligence</span>
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Clear answers about autonomy, governance, and agent-based
                operations.
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

export default AutonomousDecisionIntelligence;