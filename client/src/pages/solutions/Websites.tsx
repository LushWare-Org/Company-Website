import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";

const Websites: React.FC = () => {
  const faqItems = [
    {
      question: "What is a corporate website?",
      answer:
        "A corporate website is a digital platform representing a business online, providing information, services, and engagement opportunities for clients, partners, and stakeholders.",
    },
    {
      question: "How does a business website benefit my company?",
      answer:
        "It increases brand visibility, strengthens credibility, generates leads, provides customer engagement channels, and allows your business to reach a global audience.",
    },
    {
      question: "Can my website be mobile-friendly?",
      answer:
        "Absolutely. All websites we design are responsive and optimized for mobile devices, ensuring an excellent user experience on smartphones and tablets.",
    },
    {
      question: "Do you provide SEO and performance optimization?",
      answer:
        "Yes. Our websites follow SEO best practices, fast loading speeds, and modern web standards to help your business rank higher and perform better online.",
    },
  ];

  const webkitTemplates = [
    {
      id: 1,
      title: "Healthcare Website",
      description:
        "A modern healthcare platform designed for clinics and medical centers, featuring appointment scheduling, doctor profiles, service pages, and patient-focused user experience.",
      image: "/templates/img/medi.png",
      link: "/templates/healthcare",
    },
    {
      id: 2,
      title: "Real Estate Website",
      description:
        "A high-performance real estate solution with dynamic property listings, advanced search filters, detailed property pages, and integrated lead capture forms for agents.",
      image: "/templates/img/real.png",
      link: "/templates/real-estate",
    },

    {
      id: 3,
      title: "TravelODB Management System",
      description:
        "A complete travel management platform with tour package displays, booking functionality, itinerary pages, and seamless user navigation for travel agencies.",
      image: "/templates/img/travel.png",
      link: "https://tour-eaz-travel-platform-mnrc.vercel.app/",
    },
    {
      id: 4,
      title: "Restaurant Website",
      description:
        "An elegant restaurant website featuring interactive menus, online reservations, event promotions, and a visually immersive dining experience.",
      image: "/templates/img/res.png",
      link: "https://blackpepper-five.vercel.app/",
    },
    {
      id: 5,
      title: "Consultancy Firm Website",
      description:
        "A professional corporate website tailored for consulting firms, designed to build authority, showcase expertise, highlight case studies, and convert visitors into clients.",
      image: "/templates/img/cons.png",
      link: "/templates/consultancy",
    },
  ];

  return (
// Apply this as the full section content — preserves all existing logic/structure.
// Matches DM Serif Display + DM Sans system. Image/device sections untouched.

<>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

    .cw-root * { font-family: 'DM Sans', sans-serif; }
    .cw-serif  { font-family: 'DM Serif Display', serif; }

    .cw-fadeUp {
      animation: cwFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .cw-fadeUp:nth-child(2) { animation-delay: 0.08s; }
    .cw-fadeUp:nth-child(3) { animation-delay: 0.16s; }

    @keyframes cwFadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .cw-dotgrid {
      background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
      background-size: 28px 28px;
    }

    @keyframes open-lid {
      from { transform: rotateX(-95deg); opacity: 0.8; }
      to   { transform: rotateX(0deg);   opacity: 1; }
    }
  `}</style>

  <section className="cw-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
    <div className="max-w-7xl pt-6 md:pt-12 mx-auto">

      {/* ── HERO ─────────────────────────────────── */}
      <div className="relative max-w-6xl mt-12 mx-auto text-center mb-10">
        <div className="cw-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

        <div className="cw-fadeUp flex items-center justify-center gap-3 mb-7">
          <div className="h-px w-8 bg-emerald-600" />
          <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
            Business & Corporate Websites
          </div>
          <div className="h-px w-8 bg-emerald-600" />
        </div>

        <h1 className="cw-fadeUp cw-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
          Build a Strong Digital Presence <br />
          <span className=" text-emerald-600">
            With Professional Websites
          </span>
        </h1>

        <p className="cw-fadeUp text-lg sm:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
          LushWare designs websites that not only look amazing but also drive
          engagement, convert visitors into leads, and represent your brand
          with excellence.
        </p>
      </div>

      {/* ── WEBKIT TEMPLATE LIST ─────────────────── */}
      <section className="py-20 selection:bg-emerald-900 selection:text-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="space-y-10 md:space-y-14">
            {webkitTemplates.map((template, index) => (
              <div
                key={template.id}
                className="group relative border border-slate-100 bg-white overflow-hidden transition-all duration-500 hover:border-emerald-300 hover:shadow-[0_24px_64px_rgba(16,185,129,0.08)]"
              >
                {/* Emerald top accent on hover */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 p-4 sm:px-6 sm:py-10">

                  {/* Image block — untouched */}
                  <div className="w-full lg:w-[90%]">
                    <div
                      onClick={() => window.open(template.link, "_blank")}
                      className="relative aspect-video cursor-pointer overflow-hidden bg-emerald-50 shadow-md transition-all duration-500 group-hover:shadow-[0_20px_48px_-12px_rgba(16,185,129,0.2)]"
                    >
                      <img
                        src={template.image}
                        alt={template.title}
                        className="w-full h-full transition-transform duration-[2500ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/5 transition-colors duration-500 flex items-center justify-center">
                        <div className="bg-gray-900 p-8 border-2 border-white shadow-2xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-4 text-[72px] font-black text-white/10 leading-none select-none pointer-events-none tracking-tighter">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Text block */}
                  <div className={`w-full lg:w-[42%] space-y-6 ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}>
                    {/* Meta row */}
                    <div className="flex items-center gap-3">
                      <div className="h-px w-6 bg-emerald-600" />
                      <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-emerald-700 border border-emerald-300 px-3 py-1.5">
                        Template
                      </span>
                      <div className="h-px flex-1 bg-slate-100" />
                      <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-slate-300 tabular-nums">
                        {String(index + 1).padStart(2, "0")} / {String(webkitTemplates.length).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="cw-serif text-3xl md:text-4xl font-normal text-slate-900 leading-[1.1] tracking-tight group-hover:text-emerald-900 transition-colors duration-400">
                      {template.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base leading-[1.8] text-slate-500 font-light">
                      {template.description}
                    </p>

                    {/* CTA */}
                    <div className="pt-1">
                      <button
                        onClick={() => window.open(template.link, "_blank")}
                        className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] active:scale-[0.98]"
                      >
                        <span className="relative z-10">Enter Experience</span>
                        <svg className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                        <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4" />
        </div>
      </section>

      {/* ── BENEFITS BENTO ───────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-0">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-emerald-600" />
                <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                  Enterprise Solutions
                </div>
              </div>
              <h3 className="cw-serif text-4xl md:text-6xl font-normal text-slate-900 tracking-tight leading-[1.0]">
                Modernizing{" "}
                <span className=" text-emerald-600">Digital Assets.</span>
              </h3>
            </div>

            <p className="text-slate-500 font-light text-lg max-w-sm pb-2 border-l-2 border-emerald-600 pl-6">
              Expertly crafted software solutions for London's most ambitious
              enterprises.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-12 gap-4 md:gap-5">

            {/* Card 1 — Hero */}
            <div className="col-span-12 md:col-span-8 bg-white p-8 md:p-12 border border-slate-200 hover:border-emerald-300 flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:shadow-[0_24px_64px_rgba(16,185,129,0.07)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-700" />

              <div className="w-14 h-14 border border-slate-200 group-hover:border-emerald-400 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 mb-8 transition-all duration-500">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <div>
                <h4 className="cw-serif text-4xl font-normal text-slate-900 mb-4 tracking-tight">
                  Institutional Credibility
                </h4>
                <p className="text-slate-500 font-light text-xl leading-relaxed max-w-xl">
                  We deliver the visual weight and technical stability
                  required by high-growth software firms in the UK market.
                </p>
              </div>
            </div>

            {/* Card 2 — Dark */}
            <div className="col-span-12 md:col-span-4 bg-emerald-800 p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="cw-serif text-4xl font-normal italic text-emerald-300 opacity-60">01.</div>
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold mb-3 tracking-tight">Global Uptime</h4>
                <p className="text-emerald-100 font-light leading-relaxed">
                  Deployment on elite edge networks ensuring 99.9%
                  availability for your global users.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-span-12 md:col-span-4 bg-white p-6 md:p-8 border border-slate-200 hover:border-emerald-300 group transition-all duration-500 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />
              <div className="text-slate-300 group-hover:text-emerald-600 mb-5 transition-colors duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Search Dominance</h4>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Strategic SEO frameworks designed for competitive software niches.
              </p>
            </div>

            {/* Card 4 */}
            <div className="col-span-12 md:col-span-4 bg-white p-6 md:p-8 border border-slate-200 hover:border-emerald-300 group transition-all duration-500 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />
              <div className="text-slate-300 group-hover:text-emerald-600 mb-5 transition-colors duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Mobile Perfection</h4>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Fluid, app-like experiences across every device and browser.
              </p>
            </div>

            {/* Card 5 */}
            <div className="col-span-12 md:col-span-4 bg-white p-6 md:p-8 border border-slate-200 hover:border-emerald-300 group transition-all duration-500 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />
              <div className="text-slate-300 group-hover:text-emerald-600 mb-5 transition-colors duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10m14 0v-4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Data Intelligence</h4>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Advanced analytics integration to track enterprise-level KPIs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── LAPTOP STICKY SECTION — FULLY UNTOUCHED ── */}
      <section className="bg-white py-20 px-6 relative lg:min-h-[160vh]">
        <div className="relative lg:sticky lg:top-20 max-w-7xl mx-auto overflow-visible">

          <div className="text-center mb-10 md:mb-16 relative z-30">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                Corporate Excellence
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>
            <h3 className="cw-serif text-4xl md:text-5xl lg:text-7xl font-normal text-slate-900 mb-4 tracking-tight leading-[1.05]">
              The Digital{" "}
              <span className=" text-emerald-600">Cornerstone.</span>
            </h3>
            <p className="text-slate-500 text-base md:text-lg font-light tracking-wide">
              Scroll to deconstruct the corporate advantage
            </p>
          </div>

          {/* Laptop rig — 100% untouched */}
          <div className="relative perspective-[2000px] w-full flex flex-col items-center">
            <div
              className="relative z-20 w-full max-w-[900px] aspect-[16/10] bg-[#020617] rounded-xl md:rounded-2xl p-1 md:p-2 shadow-2xl border border-slate-800 origin-bottom transition-all duration-100 ease-out"
              style={{
                transformStyle: "preserve-3d",
                animation: "open-lid linear both",
                animationTimeline: "view()",
                animationRange: "entry 10% cover 45%",
              }}
            >
              <div className="w-full h-full bg-[#fcfcfb] rounded-lg md:rounded-xl overflow-hidden relative border border-slate-900 flex flex-col font-sans">
                <div className="h-8 md:h-10 border-b border-stone-200 bg-white px-3 md:px-5 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className="font-serif italic text-[10px] md:text-xs text-stone-900">
                      Lushware{" "}
                      <span className="font-sans font-bold not-italic text-emerald-900 text-[8px] md:text-[9px] tracking-tighter">CORP</span>
                    </span>
                    <div className="h-3 w-[1px] bg-stone-200 hidden sm:block" />
                    <span className="hidden sm:block text-[8px] font-bold text-stone-400 uppercase tracking-widest">Global Solutions / Web Architecture</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-200" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                  </div>
                </div>
                <div className="flex-1 flex overflow-hidden">
                  <div className="flex-1 p-2 md:p-5 grid grid-cols-12 gap-2 md:gap-4 overflow-y-auto">
                    <div className="col-span-12 md:col-span-7 flex flex-col gap-2 md:gap-4">
                      <div className="bg-emerald-950 p-3 md:p-5 rounded-lg md:rounded-xl text-white relative overflow-hidden">
                        <p className="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-1 md:mb-2">Value Proposition</p>
                        <h4 className="text-sm md:text-xl font-serif italic mb-1.5 md:mb-3 leading-tight">Digital Presence as a Revenue Multiplier.</h4>
                        <p className="hidden sm:block text-[10px] text-emerald-100/60 leading-relaxed mb-4">Establishing authority in the London B2B market through high-fidelity engineering.</p>
                        <div className="grid grid-cols-2 gap-2 md:gap-4 pt-2 md:pt-4 border-t border-white/10">
                          <div>
                            <p className="text-base md:text-lg font-bold">94%</p>
                            <p className="text-[7px] md:text-[8px] text-emerald-400 uppercase font-bold tracking-tighter">First Impression Rating</p>
                          </div>
                          <div>
                            <p className="text-base md:text-lg font-bold">2.4x</p>
                            <p className="text-[7px] md:text-[8px] text-emerald-400 uppercase font-bold tracking-tighter">Inquiry Conversion</p>
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:block bg-white border border-stone-100 rounded-xl p-3 md:p-4 shadow-sm">
                        <h5 className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-4 text-stone-900">Strategic Business Benefits</h5>
                        <div className="space-y-2 md:space-y-4">
                          {[
                            { t: "Institutional Trust", d: "Premium digital aesthetics that validate high-ticket corporate offerings." },
                            { t: "Investor Transparency", d: "Scalable portals for real-time stakeholder and analyst communication." },
                            { t: "Lead Capture Funnels", d: "UX architecture designed to convert high-intent B2B traffic." },
                          ].map((b, i) => (
                            <div key={i} className="flex gap-2 md:gap-3 items-start border-b border-stone-50 pb-2 md:pb-3 last:border-0">
                              <span className="text-emerald-800 font-serif italic font-bold text-[10px] md:text-base">0{i + 1}</span>
                              <div>
                                <p className="text-[9px] md:text-[10px] font-bold text-stone-900 leading-none mb-1">{b.t}</p>
                                <p className="text-[8px] md:text-[9px] text-stone-500 leading-tight hidden md:block">{b.d}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex col-span-5 flex-col gap-4">
                      <div className="bg-white border border-stone-100 rounded-xl p-4 shadow-sm flex-1 flex flex-col items-center justify-center">
                        <p className="text-[8px] font-bold uppercase tracking-widest text-stone-400 mb-4">Retention Analytics</p>
                        <div className="relative h-28 w-28">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle cx="56" cy="56" r="52" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-stone-50" />
                            <circle cx="56" cy="56" r="52" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="327" strokeDashoffset="80" className="text-emerald-800" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-xl font-bold text-stone-900 leading-none">88%</span>
                            <span className="text-[7px] uppercase font-bold text-stone-400 mt-1">Growth Index</span>
                          </div>
                        </div>
                        <div className="w-full space-y-2 mt-6">
                          <div className="flex justify-between items-center bg-stone-50 px-2 py-1.5 rounded">
                            <span className="text-[8px] font-bold">SEO Rank</span>
                            <span className="text-[8px] text-emerald-800 font-black tracking-tighter">TOP 1%</span>
                          </div>
                          <div className="flex justify-between items-center bg-stone-50 px-2 py-1.5 rounded">
                            <span className="text-[8px] font-bold">Latency</span>
                            <span className="text-[8px] text-emerald-800 font-black tracking-tighter">0.62ms</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-stone-900 p-4 rounded-xl text-white relative overflow-hidden">
                        <p className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-40 mb-2">Governance</p>
                        <p className="text-[10px] italic font-serif leading-relaxed opacity-90">"Our architecture ensures global compliance and absolute data integrity."</p>
                        <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-emerald-500/10 rounded-full blur-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-32 h-4 md:h-6 bg-[#020617] rounded-b-xl flex items-center justify-center border-x border-b border-slate-800">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-slate-700 rounded-full" />
              </div>
            </div>
            <div className="relative z-10 w-full max-w-[920px] h-[14px] md:h-[20px] bg-gradient-to-b from-slate-800 to-black rounded-b-xl md:rounded-b-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] mt-[-2px]">
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-emerald-900/10 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </div>
        <div className="h-16 lg:h-[60vh]" />
      </section>

      {/* ── VALUE SECTION ────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center px-2 mb-14">
          <h3 className="cw-serif text-4xl md:text-6xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
            How We Add Value to Your{" "}
            <span className=" text-emerald-600">Website</span>
          </h3>
          <p className="text-xl text-slate-500 font-light mx-auto leading-relaxed">
            LushWare doesn't just build websites—we create digital experiences
            aligned with your business goals. Our approach ensures that your
            site not only looks great but also drives measurable outcomes such
            as lead generation, brand recognition, and user engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Mobile Friendly", desc: "All websites are fully responsive and optimized for devices of any size, ensuring a seamless user experience on smartphones and tablets." },
            { title: "UI/UX Design", desc: "Intuitive, modern, and visually appealing interfaces designed to engage users and improve conversion rates." },
            { title: "SEO Optimization", desc: "Websites built with SEO best practices to improve search engine visibility, attract organic traffic, and enhance online presence." },
          ].map((item, index) => (
            <ValueCard
              key={index}
              num={`0${index + 1}`}
              title={item.title}
              desc={item.desc}
              link={item.title}
            />
          ))}
        </div>
      </section>

      <WhyChooseLushWare />

      {/* ── FAQ ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto pt-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-emerald-600" />
            <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
              Web Solutions
            </span>
            <div className="h-px w-8 bg-emerald-600" />
          </div>

          <h2 className="cw-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
            Business & Corporate{" "}
            <span className=" text-emerald-600">Websites</span>
          </h2>

          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Modern, mobile-friendly websites designed to strengthen your
            brand, improve visibility, and convert visitors into customers.
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

export default Websites;
