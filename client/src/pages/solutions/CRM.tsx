import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import { useNavigate } from "react-router-dom";

const CRM: React.FC = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "What is CRM software?",
      answer:
        "CRM (Customer Relationship Management) software is a centralized platform that helps businesses manage customer data, track interactions, and maintain strong customer relationships across sales, marketing, and support teams.",
    },
    {
      question: "How does CRM benefit my business?",
      answer:
        "CRM improves sales efficiency, enhances customer retention, streamlines processes, and provides actionable insights through real-time data and reporting.",
    },
    {
      question: "Is CRM suitable for small businesses?",
      answer:
        "Yes. CRM systems are scalable and can be tailored to suit small businesses, growing startups, and large enterprises.",
    },
    {
      question: "Can the CRM be customized and integrated with other systems?",
      answer:
        "Yes. CRM solutions can be customized to match business workflows and integrate seamlessly with existing tools such as email, accounting, and marketing platforms.",
    },
    {
      question: "Is customer data secure in the CRM?",
      answer:
        "Yes. CRM platforms use industry-standard security measures, including access control, encryption, and compliance practices, to ensure customer data protection.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .crm-root * { font-family: 'DM Sans', sans-serif; }
        .crm-serif  { font-family: 'DM Serif Display', serif; }

        .crm-fadeUp {
          animation: crmFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .crm-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .crm-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes crmFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .crm-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        @keyframes open-lid {
          from { transform: rotateX(-95deg); opacity: 0.8; }
          to   { transform: rotateX(0deg);   opacity: 1; }
        }
      `}</style>

      <section className="crm-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
        <div className="max-w-7xl pt-6 md:pt-12 mx-auto">

          {/* ── HERO ─────────────────────────────────── */}
          <div className="relative max-w-6xl mt-12 mx-auto text-center mb-16">
            <div className="crm-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

            <div className="crm-fadeUp flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                Customer Relationship Management
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h1 className="crm-fadeUp crm-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
              Build Stronger Relationships <br />
              <span className=" text-emerald-600">
                With Intelligent CRM Solutions
              </span>
            </h1>

            <p className="crm-fadeUp text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              Customer Relationship Management (CRM) is a centralized system that
              enables businesses to manage customer data, track interactions, and
              optimize sales, marketing, and service processes across the entire
              customer lifecycle.
            </p>
          </div>

          {/* ── HERO IMAGE ───────────────────────────── */}
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-emerald-50 rounded-[2.5rem] blur-3xl transform scale-95 -z-10 opacity-80" />

            <div className="relative overflow-hidden border border-slate-200 shadow-[0_32px_80px_rgba(0,0,0,0.10)]">
              <img
                src="/hero/crm.jpg"
                alt="Enterprise Interface"
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600" />

              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-full px-6 flex justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="group relative cursor-pointer inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-900 font-semibold text-xs uppercase tracking-[0.18em] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] active:scale-[0.98]"
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

          {/* ── VALUE CARDS ──────────────────────────── */}
          <div className="max-w-7xl mx-auto lg:px-0">

            {/* Section intro */}
            <div className="max-w-3xl mx-auto text-center py-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  Business Impact
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <p className="crm-serif text-2xl md:text-3xl text-slate-700 font-normal  leading-snug">
                Our CRM platform is designed to{" "}
                <span className="not-italic text-emerald-700 font-medium">
                  improve operational efficiency
                </span>
                , strengthen customer relationships, and drive sustainable business growth.
              </p>
            </div>

            {/* ValueCards — untouched */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Unified Customer View", desc: "Centralize customer data across departments to gain a complete, real-time view of every interaction.", link: "Integration" },
                { num: "02", title: "Revenue Growth Enablement", desc: "Enhance lead conversion, pipeline management, and forecasting accuracy through structured sales workflows.", link: "Growth" },
                { num: "03", title: "Operational Efficiency", desc: "Automate routine processes, reduce manual effort, and enable teams to focus on high-value activities.", link: "Automation" },
                { num: "04", title: "Data-Driven Decisions", desc: "Leverage advanced reporting and analytics to identify trends, measure performance, and plan with confidence.", link: "Analytics" },
              ].map((item, index) => (
                <ValueCard key={index} num={item.num} title={item.title} desc={item.desc} link={item.link} />
              ))}
            </div>

            {/* ── LAPTOP STICKY — 100% UNTOUCHED ── */}
            <section className="bg-white py-32 px-6 relative lg:min-h-[150vh]">
              <div className="relative lg:sticky lg:top-20 max-w-7xl mx-auto overflow-visible">

                {/* Header — updated to match system */}
                <div className="text-center mb-10 md:mb-20 relative z-30">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-px w-8 bg-emerald-600" />
                    <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                      Precision Engineering
                    </div>
                    <div className="h-px w-8 bg-emerald-600" />
                  </div>
                  <h3 className="crm-serif text-4xl md:text-5xl lg:text-7xl font-normal text-slate-900 mb-4 tracking-tight leading-[1.05]">
                    Experience the{" "}
                    <span className=" text-emerald-600">Interface.</span>
                  </h3>
                  <p className="text-slate-500 text-base md:text-xl font-light">
                    Scroll to engage the system
                  </p>
                </div>

                {/* Laptop rig — pixel-identical */}
                <div className="relative perspective-[2000px] w-full flex flex-col items-center">
                  <div
                    className="relative z-20 w-full max-w-[900px] aspect-[16/10] bg-[#020617] rounded-xl md:rounded-2xl p-1 md:p-2 shadow-2xl border border-slate-800 origin-bottom transition-all duration-100 ease-out"
                    style={{
                      transformStyle: "preserve-3d",
                      animation: "open-lid linear both",
                      animationTimeline: "view()",
                      animationRange: "entry 10% cover 40%",
                    }}
                  >
                    <div className="w-full h-full bg-[#f1f5f9] rounded-lg md:rounded-xl overflow-hidden relative border border-slate-900 flex flex-col font-sans">
                      <div className="h-8 md:h-10 border-b border-slate-200 bg-emerald-950 px-2 md:px-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3 md:gap-6">
                          <div className="flex items-center gap-1 md:gap-2">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-sm flex items-center justify-center">
                              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-950 rounded-full"></div>
                            </div>
                            <span className="font-bold text-white tracking-tighter text-[8px] md:text-[10px]">
                              LUSHWARE <span className="text-emerald-400">PREMIUM</span>
                            </span>
                          </div>
                          <div className="hidden sm:flex gap-3 text-[8px] font-bold uppercase tracking-[0.2em] text-emerald-200/60">
                            <span className="text-white bg-white/10 px-2 py-1 rounded">Terminal</span>
                            <span className="px-2 py-1">Markets</span>
                            <span className="px-2 py-1">Custodians</span>
                            <span className="px-2 py-1">Flows</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-3 w-16 md:h-4 md:w-24 bg-emerald-900/50 rounded-full border border-emerald-800 flex items-center px-1.5 md:px-2">
                            <div className="h-1 w-1 bg-emerald-400 rounded-full animate-pulse mr-1 md:mr-2"></div>
                            <span className="text-[6px] md:text-[7px] text-emerald-400 uppercase font-bold tracking-widest">Live</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-1 overflow-hidden">
                        <div className="hidden sm:flex w-8 md:w-10 border-r border-slate-200 bg-white flex-col items-center py-3 md:py-4 gap-3 md:gap-4 shrink-0">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className={`w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center ${i === 0 ? "bg-emerald-900 text-white" : "text-slate-300 hover:bg-slate-50"}`}>
                              <div className="w-2.5 h-2.5 md:w-3 md:h-3 border border-current rounded-sm"></div>
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 flex flex-col overflow-hidden">
                          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200 bg-white shrink-0">
                            {[
                              { label: "Portfolio Value", val: "£8,421,090", change: "+0.42%" },
                              { label: "Daily Volume", val: "£1.2M", change: "-0.12%" },
                              { label: "Active Nodes", val: "1,024", change: "Stable" },
                              { label: "Risk Index", val: "0.02", change: "Minimal" },
                            ].map((s, i) => (
                              <div key={i} className={`p-1.5 md:p-3 border-r border-slate-100 last:border-r-0 ${i >= 2 ? "hidden md:block" : ""}`}>
                                <p className="text-[6px] md:text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 md:mb-1">{s.label}</p>
                                <div className="flex items-baseline gap-1 md:gap-2">
                                  <span className="text-[10px] md:text-sm font-bold text-slate-900 leading-none">{s.val}</span>
                                  <span className={`text-[6px] md:text-[7px] font-bold ${s.change.startsWith("+") ? "text-emerald-600" : "text-slate-400"}`}>{s.change}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="flex-1 flex overflow-hidden">
                            <div className="flex-[2] bg-white border-r border-slate-200 overflow-y-auto p-2 md:p-4">
                              <div className="flex items-center justify-between mb-2 md:mb-4">
                                <h5 className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900">Transaction Ledger</h5>
                                <div className="hidden sm:flex gap-2">
                                  <div className="h-5 w-16 bg-slate-50 border border-slate-200 rounded"></div>
                                  <div className="h-5 w-16 bg-emerald-900 rounded"></div>
                                </div>
                              </div>
                              <table className="w-full text-left border-collapse">
                                <thead>
                                  <tr className="border-b border-slate-100">
                                    {["Entity", "Status", "Allocation", "Rating"].map((h, hi) => (
                                      <th key={h} className={`pb-1 md:pb-2 text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-tighter ${hi >= 3 ? "hidden sm:table-cell" : ""}`}>{h}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                  {[
                                    { n: "Blackfriars Ltd", s: "Verified", a: "£450k", r: "AAA" },
                                    { n: "Mayfair Equity", s: "Pending", a: "£1.2M", r: "AA+" },
                                    { n: "Canary Global", s: "Verified", a: "£890k", r: "A+" },
                                    { n: "Kensington PI", s: "Escrow", a: "£210k", r: "AAA" },
                                    { n: "Sloane Asset", s: "Verified", a: "£3.4M", r: "AAA" },
                                    { n: "Chelsea Wealth", s: "Review", a: "£150k", r: "B+" },
                                    { n: "City Brokers", s: "Verified", a: "£670k", r: "AA" },
                                  ].map((row, i) => (
                                    <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                      <td className="py-1 md:py-2 text-[8px] md:text-[9px] font-bold text-slate-700 truncate max-w-[60px] md:max-w-none">{row.n}</td>
                                      <td className="py-1 md:py-2"><span className="text-[6px] md:text-[7px] px-1 md:px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold uppercase">{row.s}</span></td>
                                      <td className="py-1 md:py-2 text-[8px] md:text-[9px] font-mono text-slate-500">{row.a}</td>
                                      <td className="py-1 md:py-2 text-[8px] md:text-[9px] font-bold text-slate-900 hidden sm:table-cell">{row.r}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            <div className="hidden sm:flex flex-1 bg-slate-50/50 p-2 md:p-4 flex-col space-y-2 md:space-y-4">
                              <div className="bg-white p-2 md:p-3 rounded-lg border border-slate-100 shadow-sm">
                                <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase mb-2 md:mb-3">Revenue Flux</p>
                                <div className="flex items-end gap-0.5 md:gap-1 h-8 md:h-12">
                                  {[40, 60, 30, 80, 90, 50, 70, 100, 60, 40, 80].map((h, i) => (
                                    <div key={i} className="flex-1 bg-emerald-900/10 rounded-t-[1px]" style={{ height: `${h}%` }}></div>
                                  ))}
                                </div>
                              </div>
                              <div className="bg-white p-2 md:p-3 rounded-lg border border-slate-100 shadow-sm">
                                <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase mb-2 md:mb-3">Asset Distribution</p>
                                <div className="space-y-1.5 md:space-y-2">
                                  {[{ l: "Real Estate", p: "45%" }, { l: "Equities", p: "30%" }, { l: "Bonds", p: "25%" }].map((item, i) => (
                                    <div key={i}>
                                      <div className="flex justify-between text-[6px] md:text-[7px] font-bold mb-0.5 md:mb-1"><span>{item.l}</span><span>{item.p}</span></div>
                                      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-900" style={{ width: item.p }}></div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="bg-emerald-900 rounded-lg p-2 md:p-3 text-white">
                                <p className="text-[6px] md:text-[7px] font-bold uppercase tracking-[0.2em] opacity-60 mb-1 md:mb-2">Security Hash</p>
                                <p className="text-[7px] md:text-[8px] font-mono break-all opacity-90 leading-tight">0x4F2A...9B21...88C1...E4A2</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-32 h-4 md:h-6 bg-[#020617] rounded-b-xl flex items-center justify-center border-x border-b border-slate-800">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  <div className="relative z-10 w-full max-w-[940px] h-[16px] md:h-[24px] bg-gradient-to-b from-slate-800 to-black rounded-b-xl md:rounded-b-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] mt-[-2px]">
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-emerald-900/10 blur-3xl rounded-full -z-10"></div>
                  </div>
                </div>
              </div>
              <div className="h-16 lg:h-[50vh]" />
            </section>
          </div>

          {/* ── HOW WE ADD VALUE ─────────────────────── */}
          <section className="bg-white py-16 md:py-20 px-2">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14 md:mb-20">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    How We Add Value to Your CRM
                  </div>
                  <div className="h-px w-8 bg-emerald-600" />
                </div>

                <h2 className="crm-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  Strategic Excellence in{" "}
                  <span className=" text-emerald-600">CRM</span>{" "}
                  Engineering
                </h2>

                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  At{" "}
                  <span className="font-semibold text-slate-800">LushWare</span>,
                  we go beyond software delivery. We align CRM technology with
                  your business strategy, ensuring measurable outcomes and
                  long-term scalability.
                </p>
              </div>

              {/* Value grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100">
                {[
                  {
                    title: "Custom CRM Architecture",
                    desc: "Tailored CRM platforms built to fit your unique business processes and workflows.",
                    svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" /></svg>),
                  },
                  {
                    title: "Seamless Integrations",
                    desc: "Connect your CRM with existing tools like email, ERP, and marketing automation.",
                    svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>),
                  },
                  {
                    title: "Secure Infrastructure",
                    desc: "Cloud-ready and enterprise-grade solutions designed for growth and compliance.",
                    svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>),
                  },
                  {
                    title: "Support & Optimization",
                    desc: "Dedicated guidance and improvements to ensure your CRM remains aligned.",
                    svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9.09 9 1.24 5.11 1.24-5.11 1.24 5.11 1.24-5.11" /></svg>),
                  },
                  {
                    title: "Data-Driven Insights",
                    desc: "Advanced analytics and reporting tools to identify trends and forecast growth.",
                    svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>),
                  },
                  {
                    title: "User Adoption",
                    desc: "Guided onboarding and intuitive interfaces to ensure your team embraces the platform.",
                    svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white p-8 md:p-10 border-b border-r border-slate-100 transition-all duration-500 cursor-pointer overflow-hidden hover:bg-slate-50"
                  >
                    {/* Top accent sweep */}
                    <div className="absolute top-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />

                    {/* Index */}
                    <div className="flex items-center gap-3 mb-7">
                      <span className="crm-serif text-xs italic text-slate-300 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-slate-100 group-hover:bg-emerald-200 transition-colors duration-500" />
                    </div>

                    {/* Icon */}
                    <div className="mb-6 text-slate-300 group-hover:text-emerald-600 transition-colors duration-400">
                      <div className="w-10 h-10 flex items-center justify-center">
                        {item.svg}
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-md font-light leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Arrow */}
                    <div className="mt-7 flex items-center text-[12px] font-bold tracking-[0.18em] uppercase text-slate-500 group-hover:text-emerald-600 transition-all duration-500">
                      <span>View Details</span>
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
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
                  CRM FAQ
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <h3 className="crm-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                Frequently Asked{" "}
                <span className=" text-emerald-600">Questions</span>
              </h3>

              <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Clear answers to the most common questions about CRM platforms and
                how they help your business grow.
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

export default CRM;