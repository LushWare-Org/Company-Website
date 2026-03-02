import React, { useState } from "react";

export default function ConsultancyPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="font-sans text-gray-800">
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="bg-white/70 backdrop-blur-xl border border-slate-200/50 px-8 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex justify-between items-center rounded-sm">
          {/* The Crest Branding */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <div className="w-8 h-8 border border-slate-900 rotate-45 group-hover:bg-slate-900 transition-all duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-900 group-hover:text-white transition-colors duration-500">
                GC
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-slate-900 text-sm font-bold tracking-[0.2em] leading-none uppercase">
                Growth<span className="text-orange-600">Crest</span>
              </h1>
              <p className="text-[7px] text-slate-400 font-bold uppercase tracking-[0.4em] mt-1">
                Strategic Alliance
              </p>
            </div>
          </div>

          {/* Architectural Nav Links */}
          <div className="flex items-center gap-10">
            {[
              { name: "Disciplines", link: "#services" },
              { name: "Archive", link: "#portfolio" },
              { name: "Insights", link: "#blog" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 hover:text-orange-600 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Vertical Action Button */}
          <div className="flex items-center gap-6">
            <div className="h-8 w-px bg-slate-100 hidden md:block" />
            <button className="group relative overflow-hidden">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-900 group-hover:text-orange-600 transition-colors">
                Contact Desk
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#ffffff] px-6 py-20 overflow-hidden">
        
        {/* Elegant Background elements */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-50/50 rounded-full blur-[120px]" />
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/fine-print.png')]" />
        </div>

        <div className="container max-w-5xl mx-auto text-center relative z-10 space-y-12">
            
            {/* Top Label */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in-down">
            <div className="w-1 h-12 bg-gradient-to-b from-transparent to-orange-600" />
            <span className="text-orange-600 text-[10px] md:text-xs font-black uppercase tracking-[0.6em] pl-2">
                A New Standard of Excellence
            </span>
            </div>

            {/* The Power Headline */}
            <div className="space-y-6">
            <h1 className="text-slate-900 text-5xl md:text-7xl lg:text-[100px] font-extrabold tracking-tighter leading-[0.9] inline-block">
                Strategy. <br />
                Execution. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                Result.
                </span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                BlackPepper Consultancy Group partners with global leaders to solve 
                the world's most critical business challenges through precision and insight.
            </p>
            </div>

            {/* Minimalist Button Set */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button className="relative px-12 py-5 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] overflow-hidden group transition-all hover:bg-orange-600">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center gap-3 text-slate-900 text-xs font-bold uppercase tracking-[0.2em] py-5 px-8 border border-slate-200 hover:border-orange-600 transition-all">
                View Portfolio
                <span className="w-6 h-[1px] bg-slate-400 group-hover:w-10 group-hover:bg-orange-600 transition-all" />
            </button>
            </div>

            {/* Metric Bar (Royal/Professional Touch) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-24 border-t border-slate-100">
            <div className="space-y-1">
                <p className="text-2xl font-bold text-slate-900">$2.4B+</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Capital Managed</p>
            </div>
            <div className="space-y-1">
                <p className="text-2xl font-bold text-slate-900">14</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Global Offices</p>
            </div>
            <div className="hidden md:block space-y-1">
                <p className="text-2xl font-bold text-slate-900">98%</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Client Retention</p>
            </div>
            </div>

        </div>



        </section>

      {/* SERVICES */}
      <section className="bg-white py-32 px-8 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-32 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-orange-600" />
              <span className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.6em]">
                Professional Disciplines
              </span>
              <div className="w-12 h-[1px] bg-orange-600" />
            </div>
            <h2 className="text-slate-900 text-6xl md:text-7xl font-bold tracking-tighter leading-none">
              Strategic{" "}
              <span className="text-slate-500 font-normal ">Pillars.</span>
            </h2>
          </div>

          {/* Vertical Service Stack */}
          <div className="space-y-40">
            {[
              {
                id: "01",
                title: "M&A Advisory & Strategy",
                desc: "Driving high-value mergers and strategic realignments for the London financial sector. We provide the foresight required to navigate complex global markets.",
                img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop",
                align: "flex-row",
              },
              {
                id: "02",
                title: "Digital Engineering Hub",
                desc: "Harnessing elite Colombo-based engineering talent to build bespoke CRM, BPM, and AI-driven ecosystems that redefine business velocity.",
                img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
                align: "flex-row-reverse",
              },
              {
                id: "03",
                title: "Tax & Financial Architecture",
                desc: "Sophisticated tax advisory and operational framework design, ensuring compliance and efficiency across multiple international jurisdictions.",
                img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop",
                align: "flex-row",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:${service.align} items-center gap-16 lg:gap-32 group`}
              >
                {/* Visual Canvas */}
                <div className="w-full lg:w-3/5 relative">
                  <div className="aspect-[16/9] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm transition-shadow duration-700 group-hover:shadow-2xl">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                    />
                  </div>
                  {/* The Floating Index */}
                  <div
                    className={`absolute -top-10 ${service.align === "flex-row" ? "-right-6" : "-left-6"} hidden lg:block`}
                  >
                    <span className="text-slate-100 text-[180px] font-bold leading-none select-none tracking-tighter">
                      {service.id}
                    </span>
                  </div>
                </div>

                {/* Narrative Block */}
                <div className="w-full lg:w-2/5 space-y-8 relative z-10">
                  <div className="space-y-4">
                    <span className="text-orange-600 text-[11px] font-bold uppercase tracking-[0.4em]">
                      Expertise // Global
                    </span>
                    <h3 className="text-slate-900 text-4xl font-bold tracking-tight leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-lg font-light leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="pt-8">
                    <button className="flex items-center gap-6 group/btn">
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-900 group-hover/btn:text-orange-600 transition-colors">
                        Inquire Now
                      </span>
                      <div className="relative w-16 h-px bg-slate-200 overflow-hidden">
                        <div className="absolute inset-0 bg-orange-600 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-32 px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Clean, Non-centered Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div className="max-w-xl space-y-4">
              <h4 className="text-orange-600 text-xs font-bold uppercase tracking-[0.6em]">
                Sectoral Expertise
              </h4>
              <h2 className="text-slate-900 text-5xl md:text-6xl font-bold tracking-tighter leading-none">
                Industries{" "}
                <span className="text-slate-500 font-light ">
                  We Influence.
                </span>
              </h2>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm max-w-xs mb-4">
                Navigating complex regulatory changes and market disruption
                across global financial and municipal cores.
              </p>
              <button className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-orange-600 pb-1 hover:text-orange-600 transition-colors">
                Download Firm Profile
              </button>
            </div>
          </div>

          {/* Vertically Biased Industry Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Financial Services",
                desc: "Helping institutions in the London financial core navigate volatility and optimize M&A.",
                tag: "Optimizing Capital",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Public Sector",
                desc: "Strategic foresight and digital infrastructure planning for government bodies and municipalities.",
                tag: "Achieving Resilience",
                img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Technology & Media",
                desc: "Engineering data-driven growth for scale-ups and enterprises in both UK and Asian tech hubs.",
                tag: "Scaling Innovation",
                img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Energy & Utilities",
                desc: "Operational excellence and transformation strategies for a sustainable energy transition.",
                tag: "Engineering Sustainability",
                img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((industry, idx) => (
              <div key={idx} className="group cursor-pointer">
                {/* Permanent Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-8 border border-slate-100 shadow-sm">
                  <img
                    src={industry.img}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle Overlay to ensure readability */}
                  <div className="absolute inset-0 bg-slate-900/10" />

                  {/* Minimal Numbering */}
                  <div className="absolute top-6 left-6 text-white text-5xl font-light tracking-tighter tabular-nums opacity-60">
                    0{idx + 1}
                  </div>
                </div>

                {/* Text Content Area */}
                <div className="space-y-4">
                  <span className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:tracking-[0.6em] transition-all duration-300">
                    {industry.tag}
                  </span>
                  <h3 className="text-slate-900 text-2xl font-bold tracking-tight border-b border-slate-100 pb-4 group-hover:border-orange-600 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-2">
                    {industry.desc}
                  </p>
                  <div className="pt-2">
                    <span className="text-slate-900 text-xs font-bold uppercase tracking-widest border-l-2 border-orange-600 pl-3">
                      Case Study
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-white py-32 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="border-l-4 border-orange-600 pl-8 mb-24">
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-[0.6em] mb-4">
              Strategic Archive
            </h4>
            <h2 className="text-slate-900 text-5xl md:text-6xl font-bold tracking-tighter">
              Impact <span className="text-slate-300 font-light italic">&</span>{" "}
              Results.
            </h2>
          </div>

          <div className="space-y-32">
            {[
              {
                company: "London Asset Management",
                tag: "Fiscal Optimization",
                desc: "We redesigned the digital operational flow for a Mayfair-based investment firm, bridging their leadership strategy with our Colombo engineering hub for a seamless global expansion.",
                stat: "34% Revenue Velocity",
                img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop",
                flex: "flex-col lg:flex-row",
              },
              {
                company: "Euro-Tech Logistics",
                tag: "Supply Chain Intelligence",
                desc: "Leveraging predictive analytics to optimize cross-continental trade routes. Our methodology focused on reducing latency between UK decision-making and regional execution centers.",
                stat: "2.4x Efficiency Gains",
                img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
                flex: "flex-col lg:flex-row-reverse",
              },
            ].map((study, idx) => (
              <div
                key={idx}
                className={`flex ${study.flex} gap-16 items-center group`}
              >
                {/* Image Frame */}
                <div className="lg:w-3/5 relative overflow-hidden bg-slate-100 aspect-[16/10]">
                  <img
                    src={study.img}
                    alt={study.company}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Minimalist Overlay */}
                  <div className="absolute inset-0 border-[24px] border-white/10 group-hover:border-white/0 transition-all duration-700" />
                </div>

                {/* Content Block */}
                <div className="lg:w-2/5 space-y-8">
                  <div className="space-y-3">
                    <span className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                      {study.tag}
                    </span>
                    <h3 className="text-slate-900 text-4xl font-bold tracking-tight leading-tight">
                      {study.company}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-lg font-light leading-relaxed">
                    {study.desc}
                  </p>

                  <div className="pt-8 flex flex-col sm:flex-row gap-8 sm:items-center">
                    <div className="bg-slate-50 border border-slate-100 px-6 py-4">
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                        Key Performance
                      </p>
                      <p className="text-slate-900 text-xl font-bold tabular-nums">
                        {study.stat}
                      </p>
                    </div>
                    <button className="text-xs font-bold uppercase tracking-[0.3em] text-slate-900 flex items-center gap-4 group/btn">
                      Read Briefing
                      <div className="w-8 h-[1px] bg-orange-600 group-hover/btn:w-16 transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#0A0C0E] py-32 px-8 relative overflow-hidden">
        {/* Geometric Background Detail */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Label & Title Block */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-orange-600" />
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.5em]">
                  The Firm
                </span>
              </div>
              <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                Global Insight. <br />
                <span className="text-slate-500 font-light">Local Impact.</span>
              </h2>

              {/* Years of Experience Badge */}
              <div className="pt-8 flex items-baseline gap-4">
                <span className="text-orange-600 text-7xl font-light tracking-tighter tabular-nums">
                  12+
                </span>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                  Years of Strategic <br /> Operational Excellence
                </div>
              </div>
            </div>

            {/* Content Block */}
            <div className="lg:col-span-7 space-y-10 lg:pt-4">
              <div className="space-y-6">
                <p className="text-slate-300 text-xl md:text-2xl font-light leading-relaxed border-l-2 border-slate-800 pl-8">
                  GrowthCrest is a premier consultancy firm bridging the
                  strategic foresight of{" "}
                  <span className="text-white font-semibold">
                    London’s financial core
                  </span>{" "}
                  with the high-velocity engineering talent of{" "}
                  <span className="text-white font-semibold">Colombo</span>.
                </p>
                <p className="text-slate-500 text-lg leading-relaxed pl-8">
                  We specialize in transforming complex market signals into
                  actionable growth. By combining deep industry expertise with
                  modern data-driven methodologies, we help global enterprises
                  navigate volatility and optimize operations for a sustainable,
                  tech-forward future.
                </p>
              </div>

              {/* Core Pillars Mini-Grid */}
              <div className="grid sm:grid-cols-2 gap-8 pl-8 pt-8 border-t border-slate-800/50">
                <div className="space-y-2">
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest">
                    Our Vision
                  </h4>
                  <p className="text-slate-500 text-sm font-light">
                    To be the primary architectural force behind the world's
                    most resilient digital enterprises.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest">
                    Our Mission
                  </h4>
                  <p className="text-slate-500 text-sm font-light">
                    Delivering measurable competitive advantage through
                    data-driven precision and global synergy.
                  </p>
                </div>
              </div>

              <div className="pl-8 pt-4">
                <button className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-4 group">
                  Our Full History
                  <span className="w-8 h-[1px] bg-orange-600 group-hover:w-16 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white py-32 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <h2 className="text-slate-900 text-5xl md:text-6xl font-bold tracking-tighter">
              Why <span className="text-orange-600">GrowthCrest?</span>
            </h2>
            <div className="border-l-4 border-slate-900 pl-8">
              <p className="text-slate-500 text-lg font-light leading-relaxed italic">
                "We don't just provide solutions; we engineer the strategic
                frameworks that define market leaders."
              </p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
            {[
              {
                title: "The Elite Collective",
                label: "Expert Team",
                desc: "A bespoke assembly of industry veterans dedicated to high-stakes problem solving.",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="0.75"
                      d="M12 4v16m8-8H4m15.5-7.5l-15 15m15 0l-15-15"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Architectural Precision",
                label: "Proven Methodology",
                desc: "Our 'Crest-Framework' ensures every pivot is backed by rigorous structural analysis.",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="0.75"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10V11a1 1 0 011-1h2a1 1 0 011 1v10"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Quantum Analytics",
                label: "Data-Driven",
                desc: "Leveraging proprietary AI models to predict market shifts before they manifest.",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="0.75"
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      strokeLinecap="round"
                    />
                    <path
                      strokeWidth="0.75"
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Cross-Border Synergy",
                label: "Global Experience",
                desc: "Bridging the London financial district with Colombo's burgeoning tech hub.",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="0.75"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-12 group hover:bg-slate-900 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="text-slate-900 group-hover:text-orange-500 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 tracking-[0.3em] uppercase group-hover:text-slate-600">
                    {item.label}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-slate-900 group-hover:text-white text-2xl font-bold tracking-tight transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-slate-400 text-sm font-light leading-relaxed transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                    Learn More
                  </span>
                  <div className="h-[1px] w-8 bg-orange-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-white py-24 px-8 border-y border-slate-100 relative overflow-hidden">
        {/* Subtle Background Accent - Light Version */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50 skew-x-12 translate-x-20 -z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left space-y-4">
              <h4 className="text-orange-600 text-xs font-bold uppercase tracking-[0.4em]">
                Strategic Intelligence
              </h4>
              <h2 className="text-slate-900 text-4xl md:text-5xl font-bold tracking-tight">
                Latest <span className="text-slate-400">Insights</span>
              </h2>
            </div>
            <button className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-colors pb-2 border-b-2 border-slate-100 hover:border-orange-600">
              Explore All Reports —
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="group bg-white p-8 border border-slate-100 hover:border-orange-200 transition-all duration-300 relative"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-orange-600 transition-all duration-300" />

                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.2em]">
                    Market Analysis
                  </span>
                  <h3 className="text-slate-900 text-xl font-bold leading-snug group-hover:text-orange-700 transition-colors">
                    Business Strategy Tips for Global Expansion
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    How to optimize your business performance and navigate
                    complex market shifts in a competitive global landscape.
                  </p>
                  <div className="pt-4 flex items-center text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                    Read Briefing{" "}
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1c1e] py-32 px-8 relative overflow-hidden">
        {/* The Signature "Royal" Top Border */}

        <div className="max-w-7xl mx-auto border border-slate-800 p-12 md:p-24 shadow-2xl relative bg-[#16181a]">
          {/* Background Decorative Element - Soft blue/gray glow instead of light blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-10">
            {/* Strategic Tag */}
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-orange-500"></div>
              <span className="text-orange-500 text-xs font-black uppercase tracking-[0.5em]">
                Phase One
              </span>
              <div className="h-[1px] w-8 bg-orange-500"></div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-white text-4xl md:text-7xl font-bold tracking-tighter leading-none">
                Ready to reach your <br />
                <span className="text-slate-400 font-light ">highest </span>
                <span className="relative inline-block">
                  CREST?
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-orange-500/20"></span>
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-slate-400 text-lg font-light leading-relaxed">
                Partner with our London leadership and Colombo technical hub to
                accelerate your enterprise's global potential.
              </p>
            </div>

            {/* High-Impact Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center pt-6">
              <button className="w-full sm:w-auto bg-orange-600 text-white hover:bg-white hover:text-[#1a1c1e] px-12 py-5 text-sm font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-xl group flex items-center justify-center gap-4">
                Schedule Consultation
                <span className="group-hover:translate-x-2 transition-transform duration-500">
                  →
                </span>
              </button>

              <button className="w-full sm:w-auto border border-slate-700 text-slate-300 hover:border-orange-600 hover:text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all bg-[#1a1c1e]">
                View Case Studies
              </button>
            </div>

            {/* Verification Detail */}
            <div className="pt-8 flex items-center gap-3 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Direct Advisory: London • Colombo • NYC
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#fcfcfc] py-32 px-8 border-y border-slate-100 relative">
        {/* Prestige Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-600 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 border border-slate-200 shadow-2xl overflow-hidden">
            {/* Panel 1: The Global Network (London & Colombo) */}
            <div className="bg-[#1a1c1e] p-12 lg:p-20 text-white relative">
              <div className="space-y-12 relative z-10">
                <div>
                  <h4 className="text-orange-500 text-[10px] uppercase tracking-[0.5em] font-black mb-6">
                    Connect
                  </h4>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none mb-8">
                    GLOBAL <br />
                    <span className="text-slate-500 italic font-light">
                      OPERATIONS.
                    </span>
                  </h2>
                  <div className="w-12 h-1 bg-orange-600" />
                </div>

                <div className="space-y-10">
                  {/* Office 01 */}
                  <div className="group cursor-pointer">
                    <span className="text-orange-500 text-[10px] font-bold tracking-widest block mb-2">
                      UNITED KINGDOM
                    </span>
                    <h5 className="text-xl font-bold group-hover:text-orange-400 transition-colors">
                      London Leadership
                    </h5>
                    <p className="text-slate-400 text-sm mt-2 font-light">
                      Mayfair Executive Suite, W1K
                    </p>
                    <p className="text-slate-500 text-xs mt-1 italic">
                      +44 (0) 20 7946 0000
                    </p>
                  </div>

                  {/* Office 02 */}
                  <div className="group cursor-pointer">
                    <span className="text-orange-500 text-[10px] font-bold tracking-widest block mb-2">
                      SRI LANKA
                    </span>
                    <h5 className="text-xl font-bold group-hover:text-orange-400 transition-colors">
                      Colombo Hub
                    </h5>
                    <p className="text-slate-400 text-sm mt-2 font-light">
                      World Trade Center, West Tower
                    </p>
                    <p className="text-slate-500 text-xs mt-1 italic">
                      +94 11 234 5678
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Graphic Element */}
              <div className="absolute bottom-[-10%] right-[-10%] text-[12rem] font-black text-white/[0.03] select-none italic">
                GC
              </div>
            </div>

            {/* Panel 2: The Executive Inquiry Form */}
            <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-[#1a1c1e] tracking-tight">
                    Initiate Engagement
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Please provide your corporate credentials below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="relative group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full py-4 bg-transparent border-b border-slate-200 text-[#1a1c1e] focus:border-orange-600 outline-none transition-all placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest placeholder:font-bold"
                    />
                  </div>

                  <div className="relative group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Corporate Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full py-4 bg-transparent border-b border-slate-200 text-[#1a1c1e] focus:border-orange-600 outline-none transition-all placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest placeholder:font-bold"
                    />
                  </div>

                  <div className="relative group">
                    <textarea
                      name="message"
                      placeholder="Strategic Requirements"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full py-4 bg-transparent border-b border-slate-200 text-[#1a1c1e] focus:border-orange-600 outline-none transition-all resize-none placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest placeholder:font-bold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-[#1a1c1e] text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-orange-600 transition-all duration-700 shadow-xl flex justify-center items-center gap-4 group"
                >
                  Submit Brief
                  <span className="group-hover:translate-x-2 transition-transform duration-500">
                    →
                  </span>
                </button>

                {submitted && (
                  <p className="text-center text-orange-600 text-[10px] font-bold uppercase tracking-widest mt-4">
                    Transmission successful. An advisor will review your brief.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION WITH 3 BUTTONS */}
      <section className="bg-[#1a1c1e] py-24 px-8 border-y border-slate-800 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 skew-x-12 translate-x-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-left space-y-6">
              <h4 className="text-orange-500 text-xs font-bold uppercase tracking-[0.4em]">
                The Next Step
              </h4>
              <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Ready to reach <br />
                <span className="text-slate-500">your highest </span>
                <span className="relative">
                  Crest?
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-600"></span>
                </span>
              </h2>
              <p className="max-w-md text-slate-400 text-lg font-light leading-relaxed">
                Our global partners are ready to help you navigate complex
                market shifts with strategic foresight and creative capital.
              </p>
            </div>

            {/* Button Action Grid */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
              {/* Primary Action - Spans 2 cols on desktop if you want, or keeps grid */}
              <button className="sm:col-span-2 bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-widest py-5 px-8 transition-all flex justify-between items-center group">
                Start Strategic Consultation
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>

              {/* Secondary Action */}
              <button className="bg-transparent border border-slate-700 text-white hover:border-orange-500 font-bold uppercase tracking-widest py-4 px-6 text-xs transition-all text-center">
                View Case Studies
              </button>

              {/* Tertiary Action */}
              <button className="bg-slate-800/50 hover:bg-slate-800 text-slate-300 font-bold uppercase tracking-widest py-4 px-6 text-xs transition-all text-center">
                Our Methodology
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1c1e] text-slate-300 pt-20 pb-10 border-t-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-8">
          {/* Global Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-white text-2xl font-bold tracking-tight">
                GROWTH<span className="text-orange-500">CREST</span>
                <span className="ml-2 text-[10px] font-light tracking-[0.3em] text-slate-500 uppercase">
                  Consultancy Group
                </span>
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-slate-400">
                Providing strategic foresight and operational excellence to
                global enterprises. Headquartered in London with regional
                expertise in Colombo.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="border border-slate-700 hover:border-orange-500 hover:text-white px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all">
                Global Offices
              </button>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all">
                Contact Us
              </button>
            </div>
          </div>

          {/* Structured Sitemap Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-800">
            {/* Services */}
            <div className="space-y-5">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-orange-500 pl-3">
                Industries
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Financial Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Technology & Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Energy & Utilities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Public Sector
                  </a>
                </li>
              </ul>
            </div>

            {/* Capabilities */}
            <div className="space-y-5">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-orange-500 pl-3">
                Capabilities
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Strategy & M&A
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Risk & Compliance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Digital Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Tax Advisory
                  </a>
                </li>
              </ul>
            </div>

            {/* Insights */}
            <div className="space-y-5">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-orange-500 pl-3">
                Insights
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Global Outlook 2026
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    AI Ethics Report
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Executive Briefing
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="space-y-5">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-orange-500 pl-3">
                The Firm
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    About GrowthCrest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Our Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Inclusion & Diversity
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter - Only on Desktop */}
            <div className="hidden lg:block space-y-5">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-orange-500 pl-3">
                Subscribe
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Get the latest strategic insights delivered to your inbox.
              </p>
              <input
                type="text"
                placeholder="Corporate Email"
                className="bg-slate-800 border-none w-full text-xs p-3 focus:ring-1 focus:ring-orange-500 outline-none"
              />
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-8 text-[11px] font-medium text-slate-500 uppercase tracking-tighter">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Statement
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Notice
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Accessibility
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
            <p className="text-[11px] text-slate-600 font-bold uppercase tracking-[0.2em]">
              © 2026 GrowthCrest International Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
