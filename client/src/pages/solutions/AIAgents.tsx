import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import { useNavigate } from "react-router-dom";

const AIAgents: React.FC = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "What are AI Agents?",
      answer:
        "AI Agents are autonomous software programs that can perform tasks, make decisions, and interact with users or systems based on artificial intelligence algorithms.",
    },
    {
      question: "What are AI Chatbots?",
      answer:
        "AI Chatbots are intelligent conversational agents that understand user inputs and provide automated responses, improving engagement and customer support.",
    },
    {
      question: "How do AI solutions benefit my business?",
      answer:
        "AI Agents and Chatbots help streamline operations, enhance customer experience, automate repetitive tasks, and provide insights through data-driven intelligence.",
    },
    {
      question: "Can AI Agents integrate with existing systems?",
      answer:
        "Yes. Our AI solutions can integrate seamlessly with CRM platforms, websites, mobile apps, and other business tools to enhance your workflows.",
    },
    {
      question: "Is my data secure with AI solutions?",
      answer:
        "Absolutely. We implement strict security protocols and compliance measures to protect all business and customer data handled by our AI systems.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .ai-root * { font-family: 'DM Sans', sans-serif; }
        .ai-serif  { font-family: 'DM Serif Display', serif; }

        .ai-fadeUp {
          animation: aiFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .ai-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .ai-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes aiFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ai-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .ai-bento-glow {
          background: radial-gradient(ellipse 60% 50% at 80% 20%, rgba(16,185,129,0.12) 0%, transparent 70%);
        }
      `}</style>

      <section className="ai-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
        <div className="max-w-7xl pt-6 md:pt-12 mx-auto">

          {/* ── HERO ─────────────────────────────────── */}
          <div className="relative max-w-6xl mt-12 mx-auto text-center mb-16 md:mb-20">
            <div className="ai-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

            <div className="ai-fadeUp flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                AI Agents & AI Chatbots
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h1 className="ai-fadeUp ai-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
              Automate, Engage, <br />
              <span className=" text-emerald-600">
                & Optimize with AI
              </span>
            </h1>

            <p className="ai-fadeUp text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              Harness the power of AI Agents and Chatbots to automate tasks,
              enhance customer interactions, and gain actionable insights through
              intelligent systems.
            </p>
          </div>

          {/* ── HERO IMAGE ───────────────────────────── */}
          <div className="relative mb-20 md:mb-28">
            <div className="absolute inset-0 bg-emerald-50 rounded-[2.5rem] blur-3xl transform scale-95 -z-10 opacity-80" />

            <div className="relative overflow-hidden border border-slate-200 shadow-[0_32px_80px_rgba(0,0,0,0.10)]">
              <img
                src="/hero/chat.jpg"
                alt="AI Agents Dashboard"
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600" />

              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-full px-6 flex justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="group cursor-pointer relative inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-900 font-semibold text-xs uppercase tracking-[0.18em] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] active:scale-[0.98]"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Learn How AI Can Help
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
          <div className="max-w-7xl py-4 pb-20 md:pb-28 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-14 px-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  Business Impact
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <p className="ai-serif text-2xl md:text-3xl text-slate-700 font-normal leading-snug ">
                Our AI solutions help automate business operations, enhance
                engagement, and deliver intelligent insights for smarter
                decision-making.
              </p>
            </div>

            {/* ValueCard grid — component untouched */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Automated Operations",
                  desc: "AI Agents handle repetitive tasks, freeing up your team to focus on higher-value work.",
                  link: "Automation",
                },
                {
                  num: "02",
                  title: "Intelligent Customer Engagement",
                  desc: "Chatbots provide instant, personalized responses to improve customer satisfaction.",
                  link: "Engagement",
                },
                {
                  num: "03",
                  title: "Data-Driven Insights",
                  desc: "Analyze patterns and predict outcomes with AI-powered analytics.",
                  link: "Insights",
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

          {/* ── HOW WE ADD VALUE ─────────────────────── */}
          <section className="py-12 md:py-16 px-0">
            <div className="max-w-7xl mx-auto">

              {/* Section header */}
              <div className="mb-12 md:mb-20 text-center md:text-left">
                <div className="flex items-center md:justify-start justify-center gap-3 mb-5">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    AI Agents & AI Chatbots
                  </div>
                </div>

                <h3 className="ai-serif text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 tracking-tight mb-6 leading-[1.05]">
                  How{" "}
                  <span className=" text-emerald-600">AI Agents</span> &
                  Chatbots <br className="hidden md:block" />
                  Drive Your Enterprise
                </h3>

                <p className="text-lg sm:text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
                  Understand the role of AI Agents and Chatbots, and see how they
                  deliver real business value through automation and intelligent
                  insights.
                </p>
              </div>

              {/* Bento grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(280px,_auto)]">

                {/* Card 01 — Large dark feature */}
                <div className="md:col-span-8 group relative overflow-hidden bg-[#062c1b] p-8 md:p-12 flex flex-col justify-end shadow-[0_32px_80px_rgba(6,44,27,0.3)]">
                  {/* Glow */}
                  <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/18 transition-all duration-1000 pointer-events-none" />
                  {/* Subtle grid */}
                  <div
                    className="absolute inset-0 opacity-[0.035] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                      <div className="w-1 h-1 rounded-full bg-emerald-400" />
                      Autonomous Excellence
                    </div>
                    <h4 className="ai-serif text-3xl md:text-4xl font-normal  text-white mb-6 tracking-tight">
                      About AI Agents
                    </h4>
                    <p className="text-emerald-100 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                      AI Agents are autonomous software programs capable of
                      performing tasks, making decisions, and interacting with
                      systems or users intelligently. They reduce manual workload,
                      automate repetitive processes, and help teams focus on
                      strategic activities.
                    </p>
                  </div>
                </div>

                {/* Card 02 — Chatbots light card */}
                <div className="md:col-span-4 group relative border border-slate-200 hover:border-emerald-400 p-8 md:p-10 flex flex-col transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)] overflow-hidden">
                  {/* Bottom accent on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />

                  <div className="mb-auto">
                    <div className="w-14 h-14 border border-slate-200 group-hover:border-emerald-400 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 mb-8 transition-all duration-500">
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center gap-3 mb-5">
                      <span className="ai-serif text-xl italic text-emerald-600">02</span>
                      <div className="h-px flex-1 bg-slate-200 group-hover:bg-emerald-300 transition-colors duration-500" />
                    </div>

                    <h4 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-5">
                      About AI Chatbots
                    </h4>
                    <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light">
                      AI Chatbots are intelligent conversational agents that
                      communicate with users in real-time. They enhance customer
                      support and provide personalized experiences.
                    </p>
                  </div>
                </div>

                {/* Card 03 — Full-width value banner */}
                <div className="md:col-span-12 group relative border border-slate-200 hover:border-emerald-400 p-8 md:p-14 overflow-hidden transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.06)]">
                  {/* Left accent bar */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-700" />

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
                    <div className="md:max-w-2xl">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="ai-serif text-xl italic text-emerald-600">03</span>
                        <div className="h-px w-12 bg-slate-200 group-hover:bg-emerald-300 transition-colors duration-500" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          How We Add Value
                        </span>
                      </div>
                      <h4 className="ai-serif text-3xl md:text-4xl font-normal text-slate-900 mb-5 tracking-tight leading-snug">
                        How We{" "}
                        <span className=" text-emerald-600">Add Value</span>
                      </h4>
                      <p className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                        By combining AI Agents and Chatbots with your business
                        systems, we deliver automation, actionable insights, and
                        improved customer interactions.
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <span className="ai-serif text-6xl md:text-7xl font-normal italic text-slate-100 group-hover:text-emerald-100 transition-colors duration-700 leading-none select-none">
                        Growth.
                      </span>
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
                  AI Solutions
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <h2 className="ai-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                AI Agents &{" "}
                <span className=" text-emerald-600">AI Chatbots</span>
              </h2>

              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Automate customer interactions, enhance support, and streamline
                operations using intelligent AI-powered agents and chatbots.
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

export default AIAgents;