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
    <section className="w-full  py-24 px-6">
      <div className="max-w-7xl pt-6 md:pt-12 mx-auto">
        <div className="max-w-6xl mt-12 mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-5 ">
            <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
              Customer Relationship Management
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6 hero-line">
            Build Stronger Relationships <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800 hero-line">
              With Intelligent CRM Solutions
            </span>
          </h1>

          <p className=" text-lg md:text-xl text-slate-600 font-medium max-w-6xl mx-auto hero-line">
            Customer Relationship Management (CRM) is a centralized system that
            enables businesses to manage customer data, track interactions, and
            optimize sales, marketing, and service processes across the entire
            customer lifecycle.
          </p>
        </div>

        {/* Middle Section: The Product Window */}
        <div className="relative mb-10">
          {/* Subtle "Royal Glow" behind image */}
          <div className="absolute inset-0 bg-blue-100/50 rounded-[3rem] blur-3xl transform scale-90 -z-10"></div>

          <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
            <img
              src="/hero/crm.jpg"
              alt="Enterprise Interface"
              className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
            />
            {/* Dark Gradient Overlay for the Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent"></div>

            {/* Floating Action Button on Image */}
            <div
              className="
                absolute 
                bottom-4 sm:bottom-6 lg:bottom-8 
                left-1/2 -translate-x-1/2 
                w-full px-4 sm:px-0 
                flex justify-center
              "
            >
              <button
                onClick={() => navigate("/contact")}
                className="
                    w-full sm:w-auto
                    max-w-xs sm:max-w-none
                    
                    bg-white text-[#1A1A1A]
                    px-6 sm:px-8 lg:px-12
                    py-3 sm:py-4
                    
                    text-xs sm:text-sm lg:text-base
                    font-bold tracking-wide
                    
                    rounded-full
                    shadow-xl
                    
                    transition-all duration-500
                    hover:bg-emerald-600 hover:text-white
                    hover:scale-105
                  "
              >
                DISCOVER THE PLATFORM
              </button>
            </div>
          </div>
        </div>

        {/* CRM Value & Benefits Section */}
        <div className="max-w-8xl mx-auto  lg:px-0">
          {/* Section Intro */}
          <div className="max-w-5xl mx-auto text-center py-16">
            <div className="flex items-center justify-center gap-2 mb-4 ">
              <div className="px-2 py-1 bg-emerald-600 text-[12px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                Business Impact
              </div>
            </div>

            {/* Modern Serif for a 'Royal' London vibe */}
            <p className="text-2xl md:text-3xl text-slate-900  leading-snug tracking-tight">
              Our CRM platform is designed to{" "}
              <span className="text-emerald-800 font-medium">
                improve operational efficiency
              </span>
              , strengthen customer relationships, and drive{" "}
              <span className="underline decoration-emerald-200 decoration-2 underline-offset-8">
                sustainable business growth.
              </span>
            </p>
          </div>

          {/* 4 Pillars: Benefits & Value */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Unified Customer View",
                desc: "Centralize customer data across departments to gain a complete, real-time view of every interaction.",
                link: "Integration",
              },
              {
                num: "02",
                title: "Revenue Growth Enablement",
                desc: "Enhance lead conversion, pipeline management, and forecasting accuracy through structured sales workflows.",
                link: "Growth",
              },
              {
                num: "03",
                title: "Operational Efficiency",
                desc: "Automate routine processes, reduce manual effort, and enable teams to focus on high-value activities.",
                link: "Automation",
              },
              {
                num: "04",
                title: "Data-Driven Decisions",
                desc: "Leverage advanced reporting and analytics to identify trends, measure performance, and plan with confidence.",
                link: "Analytics",
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

          <section className="bg-white py-32 px-6 relative lg:min-h-[150vh]">
            {/* Sticky Container */}
            <div className="relative lg:sticky lg:top-20 max-w-7xl mx-auto overflow-visible">
              {/* Header Text */}
              <div className="text-center mb-10 md:mb-20 relative z-30">
                <div className="inline-block px-4 py-1 rounded-full border border-emerald-300 bg-white/50 backdrop-blur-md mb-6">
                  <span className="text-emerald-800 font-bold tracking-[0.4em] text-[10px] uppercase">
                    Precision Engineering
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-7xl text-slate-900 mb-4 tracking-tight">
                  Experience the{" "}
                  <span className="font-light text-emerald-700">
                    Interface.
                  </span>
                </h3>
                <p className="text-slate-600 text-base md:text-xl font-medium">
                  Scroll to engage the system
                </p>
              </div>

              {/* The Laptop Rig */}
              <div className="relative perspective-[2000px] w-full flex flex-col items-center">
                {/* LID / SCREEN */}
                <div
                  className="relative z-20 w-full max-w-[900px] aspect-[16/10] bg-[#020617] rounded-xl md:rounded-2xl p-1 md:p-2 shadow-2xl border border-slate-800 origin-bottom transition-all duration-100 ease-out"
                  style={{
                    transformStyle: "preserve-3d",
                    animation: "open-lid linear both",
                    animationTimeline: "view()",
                    animationRange: "entry 10% cover 40%",
                  }}
                >
                  {/* INNER SCREEN CONTENT (The "Real" Site Mockup) */}
                  <div className="w-full h-full bg-[#f1f5f9] rounded-lg md:rounded-xl overflow-hidden relative border border-slate-900 flex flex-col font-sans">
                    {/* 1. COMPACT TOP NAV */}
                    <div className="h-8 md:h-10 border-b border-slate-200 bg-emerald-950 px-2 md:px-4 flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-3 md:gap-6">
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-sm flex items-center justify-center">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-950 rounded-full"></div>
                          </div>
                          <span className="font-bold text-white tracking-tighter text-[8px] md:text-[10px]">
                            LUSHWARE{" "}
                            <span className="text-emerald-400">PREMIUM</span>
                          </span>
                        </div>
                        {/* Hide nav links on mobile */}
                        <div className="hidden sm:flex gap-3 text-[8px] font-bold uppercase tracking-[0.2em] text-emerald-200/60">
                          <span className="text-white bg-white/10 px-2 py-1 rounded">
                            Terminal
                          </span>
                          <span className="px-2 py-1">Markets</span>
                          <span className="px-2 py-1">Custodians</span>
                          <span className="px-2 py-1">Flows</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-16 md:h-4 md:w-24 bg-emerald-900/50 rounded-full border border-emerald-800 flex items-center px-1.5 md:px-2">
                          <div className="h-1 w-1 bg-emerald-400 rounded-full animate-pulse mr-1 md:mr-2"></div>
                          <span className="text-[6px] md:text-[7px] text-emerald-400 uppercase font-bold tracking-widest">
                            Live
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 overflow-hidden">
                      {/* 2. DENSE LEFT SIDEBAR — hidden on mobile */}
                      <div className="hidden sm:flex w-8 md:w-10 border-r border-slate-200 bg-white flex-col items-center py-3 md:py-4 gap-3 md:gap-4 shrink-0">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center ${i === 0 ? "bg-emerald-900 text-white" : "text-slate-300 hover:bg-slate-50"}`}
                          >
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 border border-current rounded-sm"></div>
                          </div>
                        ))}
                      </div>

                      {/* 3. MULTI-COLUMN DATA GRID */}
                      <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Top Ribbon Stats — 2 cols on mobile, 4 on larger */}
                        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200 bg-white shrink-0">
                          {[
                            {
                              label: "Portfolio Value",
                              val: "£8,421,090",
                              change: "+0.42%",
                            },
                            {
                              label: "Daily Volume",
                              val: "£1.2M",
                              change: "-0.12%",
                            },
                            {
                              label: "Active Nodes",
                              val: "1,024",
                              change: "Stable",
                            },
                            {
                              label: "Risk Index",
                              val: "0.02",
                              change: "Minimal",
                            },
                          ].map((s, i) => (
                            <div
                              key={i}
                              className={`p-1.5 md:p-3 border-r border-slate-100 last:border-r-0 ${i >= 2 ? "hidden md:block" : ""}`}
                            >
                              <p className="text-[6px] md:text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 md:mb-1">
                                {s.label}
                              </p>
                              <div className="flex items-baseline gap-1 md:gap-2">
                                <span className="text-[10px] md:text-sm font-bold text-slate-900 leading-none">
                                  {s.val}
                                </span>
                                <span
                                  className={`text-[6px] md:text-[7px] font-bold ${s.change.startsWith("+") ? "text-emerald-600" : "text-slate-400"}`}
                                >
                                  {s.change}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex-1 flex overflow-hidden">
                          {/* Main Feed (High Density Table) */}
                          <div className="flex-[2] bg-white border-r border-slate-200 overflow-y-auto p-2 md:p-4">
                            <div className="flex items-center justify-between mb-2 md:mb-4">
                              <h5 className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900">
                                Transaction Ledger
                              </h5>
                              <div className="hidden sm:flex gap-2">
                                <div className="h-5 w-16 bg-slate-50 border border-slate-200 rounded"></div>
                                <div className="h-5 w-16 bg-emerald-900 rounded"></div>
                              </div>
                            </div>
                            <table className="w-full text-left border-collapse">
                              <thead>
                                <tr className="border-b border-slate-100">
                                  {[
                                    "Entity",
                                    "Status",
                                    "Allocation",
                                    "Rating",
                                  ].map((h, hi) => (
                                    <th
                                      key={h}
                                      className={`pb-1 md:pb-2 text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-tighter ${hi >= 3 ? "hidden sm:table-cell" : ""}`}
                                    >
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-50">
                                {[
                                  {
                                    n: "Blackfriars Ltd",
                                    s: "Verified",
                                    a: "£450k",
                                    r: "AAA",
                                  },
                                  {
                                    n: "Mayfair Equity",
                                    s: "Pending",
                                    a: "£1.2M",
                                    r: "AA+",
                                  },
                                  {
                                    n: "Canary Global",
                                    s: "Verified",
                                    a: "£890k",
                                    r: "A+",
                                  },
                                  {
                                    n: "Kensington PI",
                                    s: "Escrow",
                                    a: "£210k",
                                    r: "AAA",
                                  },
                                  {
                                    n: "Sloane Asset",
                                    s: "Verified",
                                    a: "£3.4M",
                                    r: "AAA",
                                  },
                                  {
                                    n: "Chelsea Wealth",
                                    s: "Review",
                                    a: "£150k",
                                    r: "B+",
                                  },
                                  {
                                    n: "City Brokers",
                                    s: "Verified",
                                    a: "£670k",
                                    r: "AA",
                                  },
                                ].map((row, i) => (
                                  <tr
                                    key={i}
                                    className="group hover:bg-slate-50 transition-colors"
                                  >
                                    <td className="py-1 md:py-2 text-[8px] md:text-[9px] font-bold text-slate-700 truncate max-w-[60px] md:max-w-none">
                                      {row.n}
                                    </td>
                                    <td className="py-1 md:py-2">
                                      <span className="text-[6px] md:text-[7px] px-1 md:px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold uppercase">
                                        {row.s}
                                      </span>
                                    </td>
                                    <td className="py-1 md:py-2 text-[8px] md:text-[9px] font-mono text-slate-500">
                                      {row.a}
                                    </td>
                                    {/* Rating hidden on mobile */}
                                    <td className="py-1 md:py-2 text-[8px] md:text-[9px] font-bold text-slate-900 hidden sm:table-cell">
                                      {row.r}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Sidebar Analytics — hidden on mobile */}
                          <div className="hidden sm:flex flex-1 bg-slate-50/50 p-2 md:p-4 flex-col space-y-2 md:space-y-4">
                            <div className="bg-white p-2 md:p-3 rounded-lg border border-slate-100 shadow-sm">
                              <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase mb-2 md:mb-3">
                                Revenue Flux
                              </p>
                              <div className="flex items-end gap-0.5 md:gap-1 h-8 md:h-12">
                                {[
                                  40, 60, 30, 80, 90, 50, 70, 100, 60, 40, 80,
                                ].map((h, i) => (
                                  <div
                                    key={i}
                                    className="flex-1 bg-emerald-900/10 rounded-t-[1px]"
                                    style={{ height: `${h}%` }}
                                  ></div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-white p-2 md:p-3 rounded-lg border border-slate-100 shadow-sm">
                              <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase mb-2 md:mb-3">
                                Asset Distribution
                              </p>
                              <div className="space-y-1.5 md:space-y-2">
                                {[
                                  { l: "Real Estate", p: "45%" },
                                  { l: "Equities", p: "30%" },
                                  { l: "Bonds", p: "25%" },
                                ].map((item, i) => (
                                  <div key={i}>
                                    <div className="flex justify-between text-[6px] md:text-[7px] font-bold mb-0.5 md:mb-1">
                                      <span>{item.l}</span>
                                      <span>{item.p}</span>
                                    </div>
                                    <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-emerald-900"
                                        style={{ width: item.p }}
                                      ></div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-emerald-900 rounded-lg p-2 md:p-3 text-white">
                              <p className="text-[6px] md:text-[7px] font-bold uppercase tracking-[0.2em] opacity-60 mb-1 md:mb-2">
                                Security Hash
                              </p>
                              <p className="text-[7px] md:text-[8px] font-mono break-all opacity-90 leading-tight">
                                0x4F2A...9B21...88C1...E4A2
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Glass Reflection Layer */}
                    <div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                  </div>

                  {/* Camera Notch Detail */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-32 h-4 md:h-6 bg-[#020617] rounded-b-xl flex items-center justify-center border-x border-b border-slate-800">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-slate-700 rounded-full"></div>
                  </div>
                </div>

                {/* BASE / KEYBOARD */}
                <div className="relative z-10 w-full max-w-[940px] h-[16px] md:h-[24px] bg-gradient-to-b from-slate-800 to-black rounded-b-xl md:rounded-b-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] mt-[-2px]">
                  {/* Reflection on the desk surface */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-emerald-900/10 blur-3xl rounded-full -z-10"></div>
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="h-16 lg:h-[50vh]"></div>

            <style
              dangerouslySetInnerHTML={{
                __html: `
              @keyframes open-lid {
                from { transform: rotateX(-95deg); opacity: 0.8; }
                to { transform: rotateX(0deg); opacity: 1; }
              }
            `,
              }}
            />
          </section>
        </div>
        {/* How We Add Value - LushWare Premium Edition */}
        <section className="bg-white md:py-16 py-0 pb-16 md:pb-0  px-2">
          <div className="max-w-8xl mx-auto">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
              {/* Tag / Badge */}
              <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                <div className="px-2 py-1 bg-emerald-600 text-[8px] sm:text-[9px] md:text-[10px] font-bold text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-sm">
                  How We Add Value to Your CRM
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 sm:mb-8 md:mb-8">
                Strategic Excellence in{" "}
                <span className="text-emerald-600">CRM</span> Engineering
              </h2>

              {/* Paragraph */}
              <p className="text-lg md:text-xl text-slate-800 leading-relaxed sm:leading-relaxed md:leading-loose">
                At{" "}
                <span className="font-semibold text-slate-800">LushWare</span>,
                we go beyond software delivery. We align CRM technology with
                your business strategy, ensuring measurable outcomes and
                long-term scalability.
              </p>
            </div>

            {/* The Value Grid - 1px border separator look */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  overflow-hidden">
              {[
                {
                  title: "Custom CRM Architecture",
                  desc: "Tailored CRM platforms built to fit your unique business processes and workflows.",
                  svg: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
                    </svg>
                  ),
                },
                {
                  title: "Seamless Integrations",
                  desc: "Connect your CRM with existing tools like email, ERP, and marketing automation.",
                  svg: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  ),
                },
                {
                  title: "Secure Infrastructure",
                  desc: "Cloud-ready and enterprise-grade solutions designed for growth and compliance.",
                  svg: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  ),
                },
                {
                  title: "Support & Optimization",
                  desc: "Dedicated guidance and improvements to ensure your CRM remains aligned.",
                  svg: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9.09 9 1.24 5.11 1.24-5.11 1.24 5.11 1.24-5.11" />
                    </svg>
                  ),
                },
                {
                  title: "Data-Driven Insights",
                  desc: "Advanced analytics and reporting tools to identify trends and forecast growth.",
                  svg: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                      <path d="M22 12A10 10 0 0 0 12 2v10z" />
                    </svg>
                  ),
                },
                {
                  title: "User Adoption",
                  desc: "Guided onboarding and intuitive interfaces to ensure your team embraces the platform.",
                  svg: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
<div
  key={index}
  className="group relative bg-white p-8 md:p-10 border border-slate-400 rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden"
>
  {/* Subtle Accent Line - Only visible on hover */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

  {/* Icon - Minimalist & Refined */}
  <div className="relative z-10 mb-8 inline-flex items-center justify-center text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
    <div className="w-12 h-12 flex items-center justify-center">
      {item.svg}
    </div>
  </div>

  {/* Content */}
  <div className="relative z-10">
    <h4 className="text-xl font-medium text-slate-900 mb-3 tracking-wide uppercase">
      {item.title}
    </h4>
    
    <p className="text-slate-500 text-md leading-relaxed max-w-[90%] group-hover:text-slate-700 transition-colors duration-300">
      {item.desc}
    </p>
  </div>

  {/* Decorative "Arrow" or Link Indicator */}
  <div className="mt-6 flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 group-hover:text-slate-900 transition-all duration-500">
    <span>View Details</span>
    <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
  </div>
</div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseLushWare />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-4">
              <span className="px-3 py-1 text-[11px] font-bold tracking-[0.35em] text-emerald-700 bg-emerald-50 rounded-full uppercase">
                CRM FAQ
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4 hero-line">
              Frequently Asked Questions
            </h3>

            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
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
  );
};

export default CRM;
