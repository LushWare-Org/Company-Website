import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import { useNavigate } from "react-router-dom";

const MobileApps: React.FC = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "What is Mobile App Development?",
      answer:
        "Mobile app development involves designing, building, and deploying applications for mobile devices on iOS and Android platforms, ensuring seamless user experiences and business value.",
    },
    {
      question: "How can mobile apps benefit my business?",
      answer:
        "Mobile apps increase accessibility for customers, improve engagement, streamline business processes, and enable data-driven decisions through real-time interactions.",
    },
    {
      question: "Can LushWare build apps for both iOS and Android?",
      answer:
        "Yes, we create native and cross-platform mobile applications tailored to your business needs, ensuring high performance and security across devices.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .mob-root * { font-family: 'DM Sans', sans-serif; }
        .mob-serif  { font-family: 'DM Serif Display', serif; }

        .mob-fadeUp {
          animation: mobFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .mob-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .mob-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes mobFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mob-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .mob-line-sweep::after {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          background: #059669;
          margin-top: 1rem;
          transition: width 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .group:hover .mob-line-sweep::after { width: 4rem; }
      `}</style>

      <section className="mob-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
        <div className="max-w-7xl pt-6 md:pt-12 mx-auto">
          {/* ── HERO ─────────────────────────────────── */}
          <div className="relative max-w-6xl mt-12 mx-auto text-center mb-16">
            <div className="mob-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

            <div className="mob-fadeUp flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                Mobile Applications
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h1 className="mob-fadeUp mob-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
              Transform Your Business <br />
              <span className=" text-emerald-600">
                With Intelligent Mobile Apps
              </span>
            </h1>

            <p className="mob-fadeUp text-lg sm:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              LushWare delivers mobile apps designed to optimize business
              processes, engage customers, and provide measurable impact across
              iOS and Android devices.
            </p>
          </div>

          {/* ── HERO IMAGE ───────────────────────────── */}
          <div className="relative max-w-7xl mx-auto mb-20 md:mb-28">
            <div className="absolute inset-0 bg-emerald-50 rounded-[2.5rem] blur-3xl transform scale-95 -z-10 opacity-80" />

            <div className="relative overflow-hidden border border-slate-200 shadow-[0_32px_80px_rgba(0,0,0,0.10)]">
              <img
                src="/hero/app2.jpg"
                alt="Mobile App Interface"
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
                    Discover the Platform
                  </span>
                  <svg
                    className="relative z-10 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
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

          {/* ── MOBILE SOVEREIGNTY SECTION ───────────── */}
          <section className="bg-white py-16 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              {/* Editorial header */}
              <div className="relative mb-12 md:mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-px w-8 bg-emerald-600" />
                      <span className="text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                        Our Approach
                      </span>
                    </div>
                    <h3 className="mob-serif text-5xl md:text-7xl font-normal text-slate-900 tracking-tight leading-[0.9]">
                      Mobile <br />
                      <span className=" text-emerald-600">Sovereignty.</span>
                    </h3>
                  </div>

                  <div className="flex-1 md:max-w-md lg:max-w-lg">
                    <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                      We build{" "}
                      <span className="text-slate-900 font-medium">
                        high-performance apps
                      </span>{" "}
                      that work perfectly across all devices and platforms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Device stack — layout/structure unchanged, styling refined */}
              <div className="relative flex flex-col lg:pl-32 lg:flex-row items-center md:gap-38 lg:gap-24 gap-32">
                {/* ── PHONE MOCKUPS ─────────────────────────────────────────────────────── */}

                {/* 1. iPhone 16 Pro — Titanium finish */}
                <div className="relative z-30 transform lg:-rotate-4 transition-transform duration-1000 group">
                  {/* Outer titanium frame */}
                  <div
                    className="relative w-[320px] h-[660px] rounded-[3.2rem] p-[3px]"
                    style={{
                      background:
                        "linear-gradient(145deg, #c8c8c8 0%, #a8a8a8 25%, #d4d4d4 50%, #9a9a9a 75%, #c0c0c0 100%)",
                      boxShadow:
                        "-24px 48px 96px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.2)",
                    }}
                  >
                    {/* Inner matte black layer */}
                    <div
                      className="h-full w-full rounded-[3rem] overflow-hidden"
                      style={{
                        background: "#0a0a0a",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                      }}
                    >
                      {/* Screen */}
                      <div
                        className="relative h-full w-full bg-white overflow-hidden"
                        style={{ borderRadius: "2.85rem" }}
                      >
                        {/* Dynamic Island */}
                        <div
                          className="absolute top-[14px] left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2"
                          style={{
                            width: "108px",
                            height: "32px",
                            background: "#000",
                            borderRadius: "20px",
                          }}
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
                          </div>
                          <div className="w-5 h-5 rounded-full bg-[#111] border border-[#2a2a2a]" />
                        </div>

                        {/* Status bar */}
                        <div className="absolute top-0 inset-x-0 h-14 px-8 flex items-end justify-between pb-1 z-40">
                          <span
                            className="text-[11px] font-semibold text-slate-900"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            9:41
                          </span>
                          <div className="flex items-center gap-1.5">
                            {/* Signal */}
                            <div className="flex items-end gap-[2px] h-3">
                              {[3, 5, 7, 9].map((h, i) => (
                                <div
                                  key={i}
                                  className="w-[3px] bg-slate-900 rounded-sm"
                                  style={{ height: `${h}px` }}
                                />
                              ))}
                            </div>
                            {/* Wifi */}
                            <svg
                              width="14"
                              height="10"
                              viewBox="0 0 24 17"
                              fill="none"
                            >
                              <path
                                d="M12 5.5C14.8 5.5 17.3 6.6 19.1 8.4L21 6.5C18.7 4.2 15.5 2.8 12 2.8S5.3 4.2 3 6.5L4.9 8.4C6.7 6.6 9.2 5.5 12 5.5Z"
                                fill="#0f172a"
                              />
                              <path
                                d="M12 9.5C13.7 9.5 15.2 10.2 16.3 11.3L18.2 9.4C16.6 7.8 14.4 6.8 12 6.8S7.4 7.8 5.8 9.4L7.7 11.3C8.8 10.2 10.3 9.5 12 9.5Z"
                                fill="#0f172a"
                              />
                              <circle
                                cx="12"
                                cy="14.5"
                                r="2.5"
                                fill="#0f172a"
                              />
                            </svg>
                            {/* Battery */}
                            <div className="flex items-center gap-[1px]">
                              <div className="w-6 h-3 border border-slate-900 rounded-[3px] p-[2px] relative">
                                <div
                                  className="h-full bg-slate-900 rounded-[1px]"
                                  style={{ width: "75%" }}
                                />
                              </div>
                              <div className="w-[2px] h-1.5 bg-slate-900 rounded-r-sm" />
                            </div>
                          </div>
                        </div>

                        {/* Screen content */}
                        <div
                          className="h-full w-full pt-16 px-7 pb-8 flex flex-col"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          <div className="flex-1">
                            <span className="text-emerald-600 font-bold text-[9px] tracking-[0.28em] uppercase mb-5 block">
                              Module 01
                            </span>
                            <h4
                              className="text-[26px] font-black text-slate-900 leading-tight mb-4"
                              style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontStyle: "italic",
                              }}
                            >
                              How Mobile
                              <br />
                              Benefits Business
                            </h4>
                            <p
                              className="text-[11px] text-slate-500 leading-relaxed mb-6"
                              style={{ fontWeight: 300 }}
                            >
                              Essential tools that enhance engagement and
                              streamline operations.
                            </p>
                            <div className="space-y-2.5">
                              <div className="h-11 bg-emerald-50 rounded-xl flex items-center px-4 gap-3 border border-emerald-100">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-300" />
                                <span className="text-[10px] font-bold text-emerald-800 tracking-wide">
                                  Engagement Metrics
                                </span>
                              </div>
                              <div className="h-11 bg-slate-50 rounded-xl flex items-center px-4 gap-3 border border-slate-100">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                <span className="text-[10px] font-bold text-slate-500 tracking-wide">
                                  Operational Flow
                                </span>
                              </div>
                              <div className="h-11 bg-slate-50 rounded-xl flex items-center px-4 gap-3 border border-slate-100">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                <span className="text-[10px] font-bold text-slate-500 tracking-wide">
                                  Revenue Tracking
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Home indicator */}
                          <div className="flex flex-col gap-4 items-stretch">
                            <div className="h-12 w-full bg-slate-900 rounded-2xl flex items-center justify-center text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                              View Case Study →
                            </div>
                            <div className="flex justify-center">
                              <div className="w-28 h-1 bg-slate-200 rounded-full" />
                            </div>
                          </div>
                        </div>

                        {/* Screen glare */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 40%)",
                            borderRadius: "2.85rem",
                          }}
                        />
                      </div>
                    </div>

                    {/* Side buttons — volume */}
                    <div
                      className="absolute top-28 -left-[4px] w-[4px] h-10 rounded-l-md"
                      style={{
                        background:
                          "linear-gradient(180deg, #c0c0c0, #999, #c0c0c0)",
                        boxShadow: "-2px 0 4px rgba(0,0,0,0.2)",
                      }}
                    />
                    <div
                      className="absolute top-44 -left-[4px] w-[4px] h-10 rounded-l-md"
                      style={{
                        background:
                          "linear-gradient(180deg, #c0c0c0, #999, #c0c0c0)",
                        boxShadow: "-2px 0 4px rgba(0,0,0,0.2)",
                      }}
                    />
                    {/* Action button */}
                    <div
                      className="absolute top-20 -left-[4px] w-[4px] h-7 rounded-l-md"
                      style={{
                        background:
                          "linear-gradient(180deg, #c0c0c0, #999, #c0c0c0)",
                        boxShadow: "-2px 0 4px rgba(0,0,0,0.2)",
                      }}
                    />
                    {/* Power button */}
                    <div
                      className="absolute top-32 -right-[4px] w-[4px] h-14 rounded-r-md"
                      style={{
                        background:
                          "linear-gradient(180deg, #c0c0c0, #999, #c0c0c0)",
                        boxShadow: "2px 0 4px rgba(0,0,0,0.2)",
                      }}
                    />
                  </div>
                </div>

                {/* 2. Android Flagship — Gloss Black */}
                <div className="relative z-20 mt-[-100px] lg:mt-32 lg:ml-[-100px] transform lg:rotate-4 transition-transform duration-1000 group">
                  {/* Outer glass frame */}
                  <div
                    className="relative w-[320px] h-[660px] rounded-[2.6rem] p-[2.5px]"
                    style={{
                      background:
                        "linear-gradient(145deg, #3a3a3a 0%, #1a1a1a 40%, #2e2e2e 60%, #111 100%)",
                      boxShadow:
                        "24px 48px 96px rgba(6,78,59,0.18), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.5)",
                    }}
                  >
                    {/* Inner black layer */}
                    <div
                      className="h-full w-full rounded-[2.45rem] overflow-hidden"
                      style={{
                        background: "#050505",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
                      }}
                    >
                      {/* Screen */}
                      <div
                        className="relative h-full w-full overflow-hidden"
                        style={{ borderRadius: "2.3rem" }}
                      >
                        {/* Punch-hole camera */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-4 h-4 bg-black rounded-full border border-[#1a1a1a] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#0d0d0d] border border-[#222]">
                            <div className="w-1 h-1 rounded-full bg-[#151515] m-auto mt-[2px]" />
                          </div>
                        </div>

                        {/* Status bar */}
                        <div className="absolute top-0 inset-x-0 h-12 px-7 flex items-end justify-between pb-1 z-40 bg-emerald-950">
                          <span
                            className="text-[11px] font-semibold text-white/80"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            9:41
                          </span>
                          <div className="flex items-center gap-1.5">
                            <div className="flex items-end gap-[2px] h-3">
                              {[3, 5, 7, 9].map((h, i) => (
                                <div
                                  key={i}
                                  className="w-[3px] bg-white/70 rounded-sm"
                                  style={{ height: `${h}px` }}
                                />
                              ))}
                            </div>
                            <svg
                              width="13"
                              height="10"
                              viewBox="0 0 24 17"
                              fill="none"
                            >
                              <path
                                d="M12 5.5C14.8 5.5 17.3 6.6 19.1 8.4L21 6.5C18.7 4.2 15.5 2.8 12 2.8S5.3 4.2 3 6.5L4.9 8.4C6.7 6.6 9.2 5.5 12 5.5Z"
                                fill="rgba(255,255,255,0.7)"
                              />
                              <path
                                d="M12 9.5C13.7 9.5 15.2 10.2 16.3 11.3L18.2 9.4C16.6 7.8 14.4 6.8 12 6.8S7.4 7.8 5.8 9.4L7.7 11.3C8.8 10.2 10.3 9.5 12 9.5Z"
                                fill="rgba(255,255,255,0.7)"
                              />
                              <circle
                                cx="12"
                                cy="14.5"
                                r="2.5"
                                fill="rgba(255,255,255,0.7)"
                              />
                            </svg>
                            <div className="flex items-center gap-[1px]">
                              <div className="w-6 h-3 border border-white/50 rounded-[3px] p-[2px]">
                                <div
                                  className="h-full bg-white/70 rounded-[1px]"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="w-[2px] h-1.5 bg-white/50 rounded-r-sm" />
                            </div>
                          </div>
                        </div>

                        {/* Hero dark section */}
                        <div className="h-[52%] bg-emerald-950 pt-12 px-7 pb-7 flex flex-col justify-between">
                          <div
                            className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center"
                            style={{
                              boxShadow: "0 8px 24px rgba(16,185,129,0.5)",
                            }}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-emerald-400 text-[9px] font-bold tracking-[0.3em] uppercase mb-2">
                              Universal Delivery
                            </p>
                            <h4
                              className="text-[26px] font-bold text-white leading-tight"
                              style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontStyle: "italic",
                              }}
                            >
                              Android + iOS
                            </h4>
                          </div>
                        </div>

                        {/* Bottom white section */}
                        <div
                          className="px-7 pt-6 pb-6 bg-white flex flex-col gap-4"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          <p
                            className="text-[11px] text-slate-500 leading-relaxed"
                            style={{ fontWeight: 300 }}
                          >
                            LushWare builds for both platforms — reach the
                            largest audience with native-grade performance.
                          </p>
                          <div className="flex flex-col gap-2">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span className="text-[10px] font-bold text-slate-700">
                                Premium iOS Integration
                              </span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span className="text-[10px] font-bold text-slate-700">
                                Scalable Android Markets
                              </span>
                            </div>
                          </div>
                          {/* Android nav bar */}
                          <div className="flex justify-center items-center gap-6 pt-1">
                            <div className="w-5 h-5 border-2 border-slate-300 rounded-sm" />
                            <div className="w-5 h-5 border-2 border-slate-300 rounded-full" />
                            <svg
                              width="18"
                              height="14"
                              viewBox="0 0 20 16"
                              fill="none"
                            >
                              <path
                                d="M10 1L1 8h4v7h10V8h4L10 1z"
                                stroke="#cbd5e1"
                                strokeWidth="2"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Screen glare */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)",
                            borderRadius: "2.3rem",
                          }}
                        />
                      </div>
                    </div>

                    {/* Power button */}
                    <div
                      className="absolute top-32 -right-[3.5px] w-[3.5px] h-14 rounded-r-md"
                      style={{
                        background:
                          "linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)",
                        boxShadow: "2px 0 4px rgba(0,0,0,0.4)",
                      }}
                    />
                    {/* Volume buttons */}
                    <div
                      className="absolute top-24 -left-[3.5px] w-[3.5px] h-10 rounded-l-md"
                      style={{
                        background:
                          "linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)",
                        boxShadow: "-2px 0 4px rgba(0,0,0,0.4)",
                      }}
                    />
                    <div
                      className="absolute top-40 -left-[3.5px] w-[3.5px] h-10 rounded-l-md"
                      style={{
                        background:
                          "linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)",
                        boxShadow: "-2px 0 4px rgba(0,0,0,0.4)",
                      }}
                    />
                  </div>
                </div>

                {/* Side content card — refined */}
                <div className="lg:max-w-md space-y-10">
                  <div className="p-8 md:p-10 border border-emerald-200 hover:border-emerald-400 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-600" />
                    <h4 className="text-2xl font-semibold text-slate-900 mb-5 tracking-tight pl-4">
                      Enterprise Connectivity
                    </h4>
                    <p className="text-lg text-slate-500 font-light leading-relaxed pl-4">
                      Mobile apps improve productivity by enabling employees to
                      complete tasks, communicate, and manage workflows on the
                      go.
                    </p>
                  </div>

                  <p className="text-xl text-slate-500 font-light leading-relaxed pl-6 border-l-2 border-emerald-600">
                    Together, Android and iOS development ensures that your
                    business is accessible, reliable, and engaging for all
                    users, wherever they are.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── iOS + ANDROID PANELS ─────────────────── */}
          <section className="md:py-12 border-y border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-0">
              <div className="flex flex-col lg:flex-row items-stretch gap-0">
                {/* iOS Native */}
                <div className="group flex-1 w-full flex items-center justify-between p-8 md:p-10 bg-white border border-slate-100 hover:border-emerald-300 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />

                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="mob-serif text-xs italic text-slate-300">
                        01
                      </span>
                      <div className="h-px w-8 bg-slate-100 group-hover:bg-emerald-300 transition-colors duration-500" />
                    </div>
                    <h3 className="mob-serif text-4xl font-normal tracking-tight text-slate-900">
                      iOS{" "}
                      <span className="italic text-slate-400 group-hover:text-emerald-600 transition-colors duration-500">
                        Native
                      </span>
                    </h3>
                    <p className="text-base text-slate-500 font-light max-w-[200px] leading-relaxed mt-1">
                      Optimized Swift engineering for Apple's premium ecosystem.
                    </p>
                  </div>

                  <div className="opacity-100 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 384 512"
                      fill="currentColor"
                      className="text-emerald-500 group-hover:text-emerald-600 transition-colors duration-500"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                  </div>
                </div>

                {/* Android OS */}
                <div className="group flex-1 w-full flex items-center justify-between p-8 md:p-10 bg-white border border-slate-100 hover:border-emerald-300 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />

                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="mob-serif text-xs italic text-slate-300">
                        02
                      </span>
                      <div className="h-px w-8 bg-slate-100 group-hover:bg-emerald-300 transition-colors duration-500" />
                    </div>
                    <h3 className="mob-serif text-4xl font-normal tracking-tight text-slate-900">
                      Android{" "}
                      <span className="italic text-slate-400 group-hover:text-emerald-600 transition-colors duration-500">
                        OS
                      </span>
                    </h3>
                    <p className="text-base text-slate-500 font-light max-w-[200px] leading-relaxed mt-1">
                      High-performance Kotlin builds for the global mobile
                      market.
                    </p>
                  </div>

                  <div className="opacity-100 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
                    <svg
                      width="80"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-emerald-500 group-hover:text-emerald-600 transition-colors duration-500"
                    >
                      <path d="M17.523 15.3414C17.0209 15.3414 16.6139 14.9344 16.6139 14.4323C16.6139 13.9302 17.0209 13.5232 17.523 13.5232C18.0251 13.5232 18.4321 13.9302 18.4321 14.4323C18.4321 14.9344 18.0251 15.3414 17.523 15.3414ZM6.477 15.3414C5.9749 15.3414 5.5679 14.9344 5.5679 14.4323C5.5679 13.9302 5.9749 13.5232 6.477 13.5232C6.9791 13.5232 7.3861 13.9302 7.3861 14.4323C7.3861 14.9344 6.9791 15.3414 6.477 15.3414ZM17.915 10.3785L19.7835 7.1422C19.9231 6.9004 19.8403 6.5921 19.5985 6.4525C19.3567 6.3129 19.0484 6.3957 18.9088 6.6375L17.0094 9.9275C15.5494 9.2638 13.8863 8.892 12 8.892C10.1137 8.892 8.4506 9.2638 6.9906 9.9275L5.0912 6.6375C4.9516 6.3957 4.6433 6.3129 4.4015 6.4525C4.1597 6.5921 4.0769 6.9004 4.2165 7.1422L6.085 10.3785C3.5186 11.7702 1.8322 14.3995 1.7003 17.4545H22.2997C22.1678 14.3995 20.4814 11.7702 17.915 10.3785Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <WhyChooseLushWare />

          {/* ── FAQ ──────────────────────────────────── */}
          <div className="max-w-7xl mx-auto mt-16 pt-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  Mobile Solutions
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <h2 className="mob-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                Mobile Application{" "}
                <span className=" text-emerald-600">Development</span>
              </h2>

              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Build powerful, user-friendly mobile applications for Android
                and iOS that engage users and drive business growth.
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

export default MobileApps;
