import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import WorkCard, { type WorkProject } from "../components/WorkCard";
import ValueCard from "../components/ValueCard";
import GlobalPresence from "@/components/GlobalPresence";
import HeroSection from "@/components/HeroSection";
import JoinSection from "@/components/JoinSection";
import ServicesSection from "@/components/ServicesSection";
import WebKitSection from "@/components/WebKitSection";

export default function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featuredProjects: WorkProject[] = [
    {
      name: "All-in-one Travel Agency Web Application",
      client: "Islekey Holidays",
      summary:
        "Islekey Holidays is a unified platform for travel agencies to manage bookings, inventory, and customer journeys.",
      description:
        "We delivered a scalable system that centralizes B2B/B2C workflows, improving operations and customer experiences.",
      image: "/work/islekeyholidays.png",
      link: "https://islekeyholidays.com/",
    },
    {
      name: "Speedboat Ticket Booking System",
      client: "Dream Speed",
      summary:
        "A real-time ticketing platform for maritime travel with live route availability and instant booking.",
      description:
        "Built to handle vessel capacity, passenger validation, and fast checkouts across busy routes.",
      image: "/work/dreamspeed.png",
      link: "https://www.dreamspeedmaldives.com/",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .hp-root * { font-family: 'DM Sans', sans-serif; }
        .hp-serif  { font-family: 'DM Serif Display', serif; }
        .lwd-root * { font-family: 'DM Sans', sans-serif; }
        .lwd-serif  { font-family: 'DM Serif Display', serif; }

        .hp-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      {/* Hero keeps its own typography and is not wrapped by hp-root font override */}
      <HeroSection />

      <div className="hp-root text-gray-800">
        {/* ── CRM SOLUTIONS SECTION ────────────────── */}
        <section className="relative px-6 sm:px-10 py-24 md:py-28 bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* LEFT: Text */}
              <div className="lg:col-span-6">
                <div className="space-y-6 md:space-y-8">

                  {/* Label */}
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="h-px w-8 bg-emerald-600" />
                    <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                      Customer Relationship Management
                    </div>
                  </div>

                  {/* Headline */}
                  <h2 className="hp-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-normal text-slate-900 leading-[1.05] tracking-tight text-center lg:text-left">
                    Transforming <br />
                    <span className=" text-emerald-600">Client Relationships</span>
                  </h2>

                  {/* Body */}
                  <div className="space-y-4 text-slate-500 text-base sm:text-lg font-light leading-relaxed max-w-xl lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                    <p>
                      Our Customer Relationship Management platform centralizes{" "}
                      <span className="text-slate-900 font-medium">client data</span>,
                      interactions, and business intelligence into a single, secure ecosystem.
                    </p>
                    <p>
                      From first contact to long-term partnerships, we empower teams to build
                      trust, improve engagement, and drive measurable growth through actionable insights.
                    </p>

                    {/* Quote */}
                    <div className="relative py-2 border-l-2 border-emerald-600 pl-6 text-left">
                      <p className="hp-serif text-slate-600 text-sm sm:text-base md:text-lg italic font-normal">
                        "One unified source of truth for every client, every interaction, and every opportunity."
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center lg:justify-start">
                    <Link
                      to="/solutions/crm"
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.18em] overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] active:scale-[0.98]"
                      style={{ color: "#ffffff" }}
                    >
                      <span className="relative z-10">Explore CRM Solution</span>
                      <svg className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT: Phone mockup — 100% untouched */}
              <div className="lg:col-span-6 flex justify-center lg:justify-center relative">
                <div className="relative">
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/20 blur-[50px] rounded-[100%]" />
                  <div className="relative w-[300px] h-[610px] bg-[#d1d5db] rounded-[3rem] p-[3px] shadow-[inset_0_0_2px_2px_rgba(255,255,255,0.8),0_25px_50px_-12px_rgba(0,0,0,0.25)] border-b-[4px] border-r-[2px] border-slate-400">
                    <div className="w-full h-full bg-[#0a0a0a] rounded-[2.8rem] p-[10px] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent z-20 pointer-events-none" />
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-end px-4 gap-2">
                        <div className="w-1 h-1 bg-blue-900/30 rounded-full border border-blue-400/20" />
                        <div className="w-2 h-2 bg-slate-900 rounded-full border border-slate-800" />
                      </div>
                      <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
                        <div className="bg-emerald-700 p-8 pt-14 text-white">
                          <p className="text-[10px] uppercase tracking-widest opacity-90 mb-1">Secure Dashboard</p>
                          <h4 className="text-xl font-serif">CRM Enterprise</h4>
                        </div>
                        <div className="p-5 space-y-6">
                          <div className="relative">
                            <div className="h-9 w-full bg-slate-50 border border-slate-200 rounded-xl flex items-center px-3 gap-2">
                              <div className="w-3 h-3 rounded-full border-2 border-slate-300" />
                              <span className="text-[10px] text-slate-400 font-medium">Search clients...</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white rounded-2xl border border-slate-100 p-3 shadow-sm">
                              <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Revenue</p>
                              <p className="text-lg font-serif text-emerald-900 leading-tight mt-1">£124,500</p>
                              <div className="mt-2 flex items-center gap-1">
                                <span className="text-[8px] text-emerald-500 font-bold">+12%</span>
                                <div className="h-[2px] w-8 bg-emerald-100 rounded-full" />
                              </div>
                            </div>
                            <div className="bg-white rounded-2xl border border-slate-100 p-3 shadow-sm">
                              <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Active Deals</p>
                              <p className="text-lg font-serif text-slate-800 leading-tight mt-1">42</p>
                              <div className="mt-2 flex items-center gap-1">
                                <span className="text-[8px] text-amber-500 font-bold">High Priority</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <h5 className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-900 border-b border-slate-100 pb-2">Recent Leads</h5>
                            <div className="space-y-3">
                              {[
                                { name: "Alexander Sterling", company: "Mayfair Holdings", status: "Negotiation" },
                                { name: "Sophia Chen", company: "Aura Tech Ltd", status: "Follow up" },
                                { name: "Julian Rossi", company: "Global Logistics", status: "Qualified" },
                              ].map((lead, i) => (
                                <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group">
                                  <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-[10px] text-white font-bold">
                                    {lead.name.split(" ").map((n) => n[0]).join("")}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[11px] font-bold text-slate-900 truncate">{lead.name}</p>
                                    <p className="text-[9px] text-slate-400 truncate">{lead.company}</p>
                                  </div>
                                  <div className="text-right">
                                    <div className={`text-[8px] px-2 py-0.5 rounded-full inline-block ${i === 0 ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                                      {lead.status}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <button className="w-full py-3 bg-emerald-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-emerald-900/20">
                            + Add New Entry
                          </button>
                        </div>
                        <div className="mt-auto pb-2 flex justify-center">
                          <div className="w-20 h-1 bg-slate-200 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-[#94a3b8] rounded-l-sm" />
                    <div className="absolute -left-[3px] top-40 w-[3px] h-14 bg-[#94a3b8] rounded-l-sm" />
                    <div className="absolute -left-[3px] top-56 w-[3px] h-14 bg-[#94a3b8] rounded-l-sm" />
                    <div className="absolute -right-[3px] top-36 w-[3px] h-20 bg-[#94a3b8] rounded-r-sm" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <WebKitSection />
        <GlobalPresence />
        <ServicesSection />

        {/* ── OUR STORY ────────────────────────────── */}
        <section
          data-reveal
          className="relative px-6 sm:px-10 md:px-8 py-10 sm:py-12 md:py-20 overflow-hidden bg-emerald-700"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.1] md:opacity-[0.3] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-80" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

              {/* Left */}
              <div className="text-center md:text-left space-y-5 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-white/40" />
                  <div className="px-3 py-1 border border-white/30 text-[10px] font-bold text-white uppercase tracking-[0.22em]">
                    Why Choose Us
                  </div>
                </div>

                <h2 className="hp-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.05]">
                  The Vision Behind <br />
                  <span className=" text-amber-300">LushWare.</span>
                </h2>

                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-white/60 uppercase tracking-[0.2em]">
                    The Journey Continues
                  </p>
                  <p className="text-base sm:text-lg text-white font-light">
                    Evolving the standard of digital simplicity since 2020.
                  </p>
                </div>
              </div>

              {/* Right: Quote card */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#064e3b]/40 backdrop-blur-xl border border-emerald-200/30 p-8 md:p-10 lg:p-12 shadow-2xl">
                  <span className="hp-serif absolute -top-6 sm:-top-8 -left-2 text-7xl sm:text-9xl text-emerald-200/40 select-none italic">“</span>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-light">
                    At{" "}
                    <span className="font-semibold text-white">LushWare ORG</span>
                    , we design software that goes beyond solving problems — it{" "}
                    <span className="text-emerald-300 italic">transforms</span>{" "}
                    how people experience technology. Our focus is on crafting stable, scalable solutions that empower the{" "}
                    <span className="relative inline-block px-1 ml-1">
                      <span className="relative z-10 text-white font-medium">modern global community</span>
                      <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-500/20 -rotate-1" />
                    </span>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <JoinSection />

        {/* ── WHY CHOOSE US ────────────────────────── */}
        <section
          data-reveal
          className="bg-white px-4 sm:px-6 py-16 sm:py-20 md:py-28 pt-8 sm:pt-10 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto relative z-10">

            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12 md:mb-20 border-b border-slate-100 pb-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">

                <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                    <div className="h-px w-8 bg-emerald-600" />
                    <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                      Why Choose Us
                    </div>
                  </div>
                  <h2 className="hp-serif text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 tracking-tight leading-[1.05]">
                    Our Unique <br />
                    <span className=" text-emerald-600">Value Proposition.</span>
                  </h2>
                </div>

                <div className="max-w-sm mx-auto md:mx-0">
                  <p className="text-slate-500 font-light text-base sm:text-lg leading-relaxed border-l-2 border-emerald-600 pl-5 py-2 text-center md:text-left">
                    We prioritize stability and security at every layer, building software architectures that remain{" "}
                    <span className="text-slate-900 font-semibold">resilient as your business grows.</span>
                  </p>
                </div>

              </div>
            </div>

            {/* ValueCards — untouched */}
            <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-0 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {[
                { num: "01", title: "Innovation", desc: "We constantly innovate and push boundaries to develop revolutionary software platforms that set new industry standards.", link: "Read Case Study" },
                { num: "02", title: "Reliability", desc: "Count on us for reliable software solutions that meet the highest standards of quality and performance.", link: "Infrastructure Specs", offset: true },
                { num: "03", title: "Customer Focus", desc: "Customer satisfaction is our top priority, and we strive to exceed expectations in every project we undertake.", link: "Our Methods" },
              ].map((card, idx) => (
                <ValueCard key={idx} num={card.num} title={card.title} desc={card.desc} link={card.link} offset={card.offset} />
              ))}
            </div>

          </div>
        </section>

        {/* ── SOFTWARE PRODUCTS ────────────────────── */}
        <section data-reveal className="bg-white px-4 md:px-0 py-24 relative">
          <div className="max-w-7xl mx-auto relative z-10">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
              <div className="pt-8">
                <div className="max-w-5xl mx-auto text-center px-4">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="h-px w-8 bg-emerald-600" />
                    <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                      Our Software Products
                    </div>
                    <div className="h-px w-8 bg-emerald-600" />
                  </div>

                  <h3 className="hp-serif text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 tracking-tight leading-[1.0]">
                    Systems We&apos;re{" "}
                    <span className=" text-emerald-600">Building</span> Up.
                  </h3>
                </div>
              </div>
            </div>

            {/* WorkCards — untouched */}
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                {featuredProjects.map((project, index) => (
                  <WorkCard key={project.name} project={project} index={index} ctaAlign="start" ctaClassName="mt-8" />
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="mt-24 mb-2 flex flex-col items-center">
              <button
                onClick={() => navigate("/work")}
                className="group cursor-pointer relative inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white text-[11px] font-bold tracking-[0.2em] uppercase overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] active:scale-[0.98]"
              >
                <span className="relative z-10">View All Works</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
              </button>
            </div>

          </div>
        </section>

      </div>

      {/* ── LUSH WEB DESIGNERS ───────────────────── */}
      <section data-reveal className="lwd-root relative w-full bg-white py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.19] grayscale hover:opacity-30 hover:grayscale-0 transition-all duration-1000"
          style={{
            backgroundImage: "url('/bg6.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">

              {/* Label */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-8 bg-slate-300" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-slate-400 uppercase">
                  Sister Brand
                </span>
                <div className="h-px w-8 bg-slate-300" />
              </div>

              <h2 className="lwd-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-slate-900 leading-[1.0]">
                Lush{" "}
                <span className="italic text-emerald-600">Web</span>{" "}
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px #1c1917" }}
                >
                  Designers.
                </span>
              </h2>

              <p className="mx-auto max-w-xl mt-5 text-lg sm:text-xl text-slate-500 font-light leading-relaxed">
                Professional{" "}
                <span className="text-slate-900 font-medium">website design</span>{" "}
                and{" "}
                <span className="text-slate-900 font-medium">social media promotion</span>{" "}
                services for your business.
              </p>

              <div className="mt-10">
                <button
                  onClick={() => window.open("https://lushwebdesigners.com/", "_blank")}
                  className="group cursor-pointer relative inline-flex items-center gap-3 px-12 py-4 bg-slate-900 text-white text-[11px] font-bold tracking-[0.2em] uppercase overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] active:scale-[0.98]"
                >
                  <span className="relative z-10">Explore Services</span>
                  <span className="relative z-10 h-5 w-5 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50">
              <span className="lwd-serif text-slate-900 italic text-2xl">Design.</span>
              <span className="lwd-serif text-slate-900 italic text-2xl">Build.</span>
              <span className="lwd-serif text-slate-900 italic text-2xl">Scale.</span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}