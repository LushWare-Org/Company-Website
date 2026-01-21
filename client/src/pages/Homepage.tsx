import { useNavigate } from "react-router-dom";


export default function Homepage() {

  const navigate = useNavigate();
  const services = [
    {
      number: "01",
      title: "Product Development",
      desc: "Innovative Software Products that serve as powerful platforms, designed for scalability and market impact.",
      tags: ["SaaS Architecture", "Product Strategy"],
      color: "group-hover:text-blue-600"
    },
    {
      number: "02",
      title: "Custom Development",
      desc: "Bespoke software systems tailored to your unique business needs, eliminating inefficiencies and technical debt.",
      tags: ["Enterprise Solutions", "Legacy Migration"],
      color: "group-hover:text-indigo-600"
    },
    {
      number: "03",
      title: "Mobile App Development",
      desc: "Cutting-edge mobile applications providing seamless user experiences across iOS and Android platforms.",
      tags: ["React Native", "Native Performance"],
      color: "group-hover:text-emerald-600"
    },
    {
      number: "04",
      title: "Web Development",
      desc: "Modern, responsive websites and web applications built to elevate your digital presence and conversion rates.",
      tags: ["Fullstack JS", "SEO Optimized"],
      color: "group-hover:text-amber-600"
    },
    {
      number: "05",
      title: "Cloud System Development",
      desc: "Enterprise-grade systems to automate complex business processes and secure data in the cloud.",
      tags: ["AWS/Azure", "Process Automation"],
      color: "group-hover:text-purple-600"
    },
    {
      number: "06",
      title: "AI Based Development",
      desc: "Intelligent AI agents and advanced workflows designed for modern task automation and data insights.",
      tags: ["Gen AI", "Neural Workflows"],
      color: "group-hover:text-rose-600"
    }
  ];

  return (
    <div className="text-gray-800">

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mt-12 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          
          {/* LEFT SIDE — TEXT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* 2. High-Impact Typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-stone-900 leading-[0.85]">
              Innovative <br />
              <span className="text-green-600">Software</span>
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #1c1917" }}
              >
                Solutions.
              </span>
            </h1>

            {/* 3. Elegant Description */}
            <p className="mt-8 text-lg md:text-xl text-stone-600 max-w-xl font-light leading-relaxed">
              We develop{" "}
              <span className="text-emerald-900 font-semibold italic">bespoke software platforms</span>
              under new concepts for global businesses, prioritizing quality, reliability, and customer satisfaction.
            </p>

            {/* 4. Professional CTA Section */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-8">
              <button 
                    onClick={() => navigate("/contact")}  
                    className="relative px-12 py-4 overflow-hidden group bg-stone-900 rounded-full transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(5,150,105,0.3)]">
                <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                  Start Your Project
                </span>
              </button>
              
              {/* Trust Indicator */}
              <div className="flex flex-col items-start gap-1 mt-2">
                <div className="flex -space-x-2">
                  <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Executive Partner"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Tech Lead"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Product Director"
                />
                <div className="flex items-center justify-center h-8 w-8 rounded-full ring-1 ring-gray-300 bg-gray-100 text-[10px] font-bold text-emerald-700">
                  +50
                </div>
                </div>
                <p className="text-[11px] font-medium text-stone-600 uppercase tracking-widest">
                  <span className="text-emerald-700">Fortune</span> Partners
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative group">
            
            {/* Soft organic glow (no square edges) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/30 blur-[120px] rounded-full z-0" />
            <div className="relative">
              <img
                src="/hero/hero4.png"
                alt="Software Graphics"
                className="
                  w-full
                  max-w-2xl
                  md:max-w-4xl
                  lg:max-w-5xl
                  xl:max-w-6xl
                  object-contain
                  brightness-110
                  relative z-10
                  drop-shadow-[20px_30px_20px_rgba(0,0,0,0.2)]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative px-6 py-20  overflow-hidden">

        <div className="max-w-6xl mx-auto relative">
          {/* Grid Container for 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="text-left space-y-6">
              <div className="inline-flex items-center group cursor-default">
                <div className="relative flex items-center">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors duration-500">
                    <div className="w-6 h-6 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50 group-hover:bg-emerald-50 transition-all">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="w-6 h-px bg-slate-200 group-hover:w-10 group-hover:bg-emerald-300 transition-all duration-500" />
                </div>

                <div className="pl-4 flex flex-col justify-center">

                  <h4 className="text-[14px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    Our Story
                    <svg 
                      className="w-3 h-3 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                    </svg>
                  </h4>
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                The Vision Behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-emerald-600 to-slate-900">
                  LushWare ORG.
                </span>
              </h2>
              <div className="pt-10 flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-px h-10 bg-gradient-to-b from-emerald-500 to-transparent" />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em]">The Journey Continues</p>
                  <p className="text-sm text-slate-500 font-light">Evolving the standard of digital simplicity since 2020.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & CTA */}
              <div className="relative group">
                {/* Decorative Quote Mark */}
                <span className="absolute -top-6 -left-4 text-8xl text-emerald-100 font-serif select-none">“</span>
                <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-light px-4">
                  At <span className="font-semibold text-slate-900">LushWare ORG</span>, we design software that goes beyond solving problems—
                  it transforms how people and businesses experience technology. 
                  Our focus is on crafting stable, scalable, and intuitive solutions that empower progress and meet the evolving 
                  needs of the 
                  <span className="underline decoration-emerald-200 decoration-4 underline-offset-4">
                    modern global community
                  </span>.
                </p>

              </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20  relative">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-24">
            
            <div className="lg:w-1/3 lg:sticky lg:top-48 h-fit">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                  <span className="text-[12px] font-bold tracking-[0.3em] text-slate-600 uppercase">Our Services</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-[1.1] mb-8">
                  Our 
                  Specialized Software <br /> 
                  <span className="relative">
                    <span className="relative z-10 text-emerald-600">Solutions.</span>
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-emerald-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                </h2>
              <div className="mt-8">
                <button
                  onClick={() => navigate("/solutions")}
                  className="group relative overflow-hidden px-10 py-4 rounded-full border-2 border-emerald-800/60 bg-white transition-all duration-500 hover:border-emerald-600 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]"
                >
                  <span className="absolute inset-0 w-0 bg-emerald-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                  
                  <span className="relative flex items-center justify-center gap-3">
                    <span className="text-sm font-semibold tracking-wider text-emerald-900 transition-colors duration-500 group-hover:text-white">
                      VIEW ALL SOLUTIONS
                    </span>

                    <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                      <svg 
                        className="h-4 w-4 transform transition-all duration-500 text-emerald-700 group-hover:text-white group-hover:translate-x-5" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <svg 
                        className="absolute h-4 w-4 -translate-x-5 transform transition-all duration-500 text-white group-hover:translate-x-0" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>

              </div>
            </div>

            <div className="lg:w-2/3 space-y-6">
              {services.map((service) => (
                <div 
                  key={service.number}
                  className="group relative px-4 bg-white border-2 border-slate-200 group-hover:border-transparent  transition-all duration-500 rounded-3xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)]  shadow-[0_20px_50px_rgba(0,0,0,0.1)] " >
                <span className="absolute bottom-2 right-4 text-8xl font-black text-slate-100 transition-all duration-1000 group-hover:text-emerald-100 group-hover:-translate-y-4 select-none">
                  {service.number}
                </span>
                  {/* Top-Left Path */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-emerald-500 rounded-tl-3xl opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-700 ease-in-out z-10" />

                  {/* Bottom-Right Path */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-emerald-500 rounded-br-3xl opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-700 ease-in-out z-10" />

                  <div className="p-10 md:p-14 border border-slate-50 transition-all duration-500 group-hover:bg-slate-50/50">
                    <div className="flex flex-col gap-12">
                      

                      {/* Main Content */}
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter group-hover:tracking-wide transition-all duration-500">
                          {service.title}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed font-normal max-w-lg border-l-2 border-slate-100 pl-6 group-hover:border-emerald-500 transition-all duration-500">
                          {service.desc}
                        </p>
                      </div>

                      {/* Tags: Technical Chips */}
                      <div className="flex flex-wrap gap-3">
                        {service.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 bg-slate-100 text-[11px] rounded-md font-mono font-bold text-slate-500 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Join */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto border bg-white border-gray-300 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-100/40">
          
          {/* Grid Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-14 bg-white border-b border-gray-300 relative overflow-hidden">
            
            {/* Background Detail - Subtle Grid Pattern (Common in Big Tech) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}>
            </div>

            {/* Left: System Identity */}
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-md border border-green-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[13px] font-mono font-bold text-green-700 uppercase tracking-widest">JOIN Now</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-[0.9] mb-6">
                Project <span className="text-gray-500 font-light">Inventory.</span>
              </h2>
              
              <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed font-medium">
                Contribute to our software projects and smoothen your skills with professional experience.
              </p>
            </div>
            
            {/* Right: Technical Metadata & Action */}
            <div className="relative z-10 mt-12 lg:mt-0 flex flex-col items-center lg:items-end">

              <button 
                onClick={() => navigate("/project-base")}
                className="group relative px-10 py-4 bg-gray-900 text-white text-[14px] font-bold tracking-[0.2em] rounded-md transition-all duration-300 hover:bg-green-600 hover:translate-y-[-2px] active:translate-y-[0px] shadow-xl shadow-gray-200"
              >
                <span className="relative z-10">Learn More</span>
                {/* Subtle bottom-glow effect on hover */}
                <div className="absolute inset-0 rounded-md bg-green-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
              </button>
              
            </div>

          </div>

          {/* The Metric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
            
            {/* Metric 01 */}
            <div className="p-12 group hover:bg-green-50/20 transition-all duration-500">
              <p className="text-[14px]  text-gray-600 uppercase tracking-widest mb-4 group-hover:text-green-600 transition-colors">
                Deployed
              </p>
              <div className="flex items-baseline">
                <span className="text-6xl font-black text-gray-900 tracking-tighter tabular-nums">52</span>
                <span className="ml-2 w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
              <p className="mt-4 text-xs font-medium text-gray-400">Verified production repos</p>
            </div>

            {/* Metric 02 */}
            <div className="p-12 group hover:bg-green-50/20 transition-all duration-500">
              <p className="text-[14px]  text-gray-600 uppercase tracking-widest mb-4 group-hover:text-green-600 transition-colors">
                Active
              </p>
              <div className="flex items-baseline">
                <span className="text-6xl font-black text-gray-900 tracking-tighter tabular-nums">14</span>
              </div>
              <p className="mt-4 text-xs font-medium text-gray-400">Concurrent sprint cycles</p>
            </div>

            {/* Metric 03 */}
            <div className="p-12 group hover:bg-green-50/20 transition-all duration-500">
              <p className="text-[14px]  text-gray-600 uppercase tracking-widest mb-4 group-hover:text-green-600 transition-colors">
                Years Of Experience
              </p>
              <div className="flex items-baseline">
                <span className="text-6xl font-black  tracking-tighter tabular-nums text-emerald-600">8</span>
                <span className="text-2xl text-gray-500 font-light ml-1">+</span>
              </div>
              <p className="mt-4 text-xs font-medium text-gray-400">Global open-source talent</p>
            </div>

            {/* Metric 04 */}
            <div className="p-12 group hover:bg-green-50/20 transition-all duration-500">
              <p className="text-[14px]  text-gray-600 uppercase tracking-widest mb-4 group-hover:text-green-600 transition-colors">
                Reliability
              </p>
              <div className="flex items-baseline">
                <span className="text-6xl font-black text-gray-900 tracking-tighter tabular-nums">98</span>
                <span className="text-2xl font-light text-gray-500 ml-1">%</span>
              </div>
              <p className="mt-4 text-xs font-medium text-gray-400">Uptime across all builds</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-28  relative overflow-hidden">

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="max-w-6xl mx-auto mb-20 border-b border-slate-200 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="px-2 py-0.5 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                   Why Choose Us
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-[0.95]">
                  Our Unique <br />
                  <span className="text-emerald-600">Value Proposition.</span>
                </h2>
              </div>

              <div className="max-w-sm">
                <p className="text-slate-500 font-medium leading-relaxed border-l-2 border-emerald-500/30 pl-6 py-2">
                  We prioritize stability and security at every layer, building 
                  software architectures that remain 
                  <span className="text-slate-900"> resilient as your business grows.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="group relative p-px bg-gradient-to-b from-emerald-300 to-transparent rounded-[2.5rem] hover:from-emerald-500 transition-all duration-500">
              <div className="h-full p-12 bg-white rounded-[2.4rem] flex flex-col shadow-sm group-hover:shadow-2xl group-hover:shadow-emerald-900/5 transition-all">
                <div className="mb-6">
                  <div className="text-4xl font-black text-emerald-400 group-hover:text-emerald-600 transition-colors duration-500 italic">
                    01
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Innovation</h4>
                <p className="text-slate-500 leading-relaxed text-sm mb-4">
                  We constantly innovate and push boundaries to develop revolutionary software platforms that set new industry standards.
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Read Case Study <span className="text-lg">→</span>
                </div>
              </div>
            </div>

            <div className="group relative p-px bg-gradient-to-b from-emerald-300 to-transparent rounded-[2.5rem] hover:from-emerald-500 transition-all duration-500 translate-y-0 md:translate-y-8">
              <div className="h-full p-12 bg-white rounded-[2.4rem] flex flex-col shadow-md shadow-emerald-900/10 ring-1 ring-emerald-100">
                <div className="mb-6">
                  <div className="text-4xl font-black text-emerald-400 group-hover:text-emerald-600 transition-colors duration-500 italic">
                    02
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Reliability</h4>
                <p className="text-slate-500 leading-relaxed text-sm mb-4">
                  Count on us for reliable software solutions that meet the highest standards of quality and performance.
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Infrastructure Specs <span className="text-lg">→</span>
                </div>
              </div>
            </div>

            <div className="group relative p-px bg-gradient-to-b from-emerald-300 to-transparent rounded-[2.5rem] hover:from-emerald-500 transition-all duration-500">
              <div className="h-full p-12 bg-white rounded-[2.4rem] flex flex-col shadow-sm group-hover:shadow-2xl group-hover:shadow-emerald-900/5 transition-all">
                <div className="mb-6">
                  <div className="text-4xl font-black text-emerald-400 group-hover:text-emerald-600 transition-colors duration-500 italic">
                    03
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Customer Focus</h4>
                <p className="text-slate-500 leading-relaxed text-sm mb-4">
                  Customer satisfaction is our top priority, and we strive to exceed expectations in every project we undertake.
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Our Methods <span className="text-lg">→</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="px-6 py-24  relative">

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Tech-Spec Header */}
          <div className="max-w-7xl mx-auto px-6 mb-28">
            {/* The "Blueprint" Grid Header */}
            <div className="border-t-2 border-slate-900 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">       
                {/* 1. Label Column */}
                <div className="md:col-span-1">
                  <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-slate-400 mb-4">
                    // Works
                  </p>
                  <div className="inline-flex items-center px-2 py-1 bg-slate-100 rounded text-[14px] font-bold text-slate-600 uppercase tracking-tighter">
                    Our Software Products
                  </div>
                </div>
                {/* 2. Massive Headline Column */}
                <div className="md:col-span-3">
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-[-0.06em] text-slate-900 leading-[0.8] ">
                    Systems We’re <br />
                    <span className="text-emerald-500">Building</span> Up.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* The Technical Grid */}
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            
            <div className="group border border-slate-300 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-6 py-3 border-b border-slate-300 bg-slate-50/50">
                <div className="flex gap-2 group/controls">
                  {/* Red / Close */}
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] relative flex items-center justify-center">
                    <div className="opacity-0 group-hover/controls:opacity-100 transition-opacity w-[6px] h-[0.5px] bg-[#4c0000] rotate-45 absolute"></div>
                    <div className="opacity-0 group-hover/controls:opacity-100 transition-opacity w-[6px] h-[0.5px] bg-[#4c0000] -rotate-45 absolute"></div>
                  </div>
                  
                  {/* Yellow / Minimize */}
                  <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d8a124] relative flex items-center justify-center">
                    <div className="opacity-0 group-hover/controls:opacity-100 transition-opacity w-[6px] h-[1px] bg-[#9a5700]"></div>
                  </div>
                  
                  {/* Green / Maximize */}
                  <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] relative flex items-center justify-center">
                    <div className="opacity-0 group-hover/controls:opacity-100 transition-opacity w-[4px] h-[4px] border-t border-l border-[#006500] rotate-[-45deg] absolute translate-x-[-1px] translate-y-[-1px]"></div>
                    <div className="opacity-0 group-hover/controls:opacity-100 transition-opacity w-[4px] h-[4px] border-b border-r border-[#006500] rotate-[-45deg] absolute translate-x-[1px] translate-y-[1px]"></div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2">
                {/* Content Side */}
                <div className="px-10 lg:px-16 py-14 border-r border-slate-100">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-tighter mb-6">
                    System Core
                  </div>
                  
                  <h4 className="text-5xl font-bold tracking-tighter text-slate-900 mb-2">Islekey Holidays</h4>
                  <h1 className="text-slate-500 text-md font-medium mb-8">All-in-one Travel Agency Web Application</h1>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-12 border-l-4 border-emerald-500 pl-6">
                    An enterprise-grade orchestration layer for travel agencies. 
                    Centralizing B2B/B2C logic into a high-availability API.
                  </p>

                  <button 
                    onClick={() => window.open("https://islekeyholidays.com/", "_blank")}
                    className="group/link flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-slate-900"
                  >
                    <span className="bg-slate-900 text-white px-6 py-3 group-hover/link:bg-emerald-600 transition-colors">
                      View Live
                    </span>
                    <span className="p-3 border border-slate-200 group-hover/link:border-slate-900 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </span>
                  </button>
                </div>

                {/* Visual Side */}
                <div className="relative bg-slate-50 flex items-center justify-center p-1 lg:p-2">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative h-full aspect-video rounded overflow-hidden border border-slate-200">
                    <img 
                      src="/islekeyholidays.png" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt="System UI"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Block 02 */}
            <div className="group border border-slate-300 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-6 py-3 border-b border-slate-300 bg-slate-50/50">
                <div className="flex gap-2 group/controls">
                  {/* Red / Close */}
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] relative flex items-center justify-center">
                    <div className="opacity-0 group-hover/controls:opacity-100 transition-opacity w-[6px] h-[0.5px] bg-[#4c0000] rotate-45 absolute"></div>
                    <div className="opacity-0 group-hover/controls:opacity-100 transition-opacity w-[6px] h-[0.5px] bg-[#4c0000] -rotate-45 absolute"></div>
                  </div>
                  
                  {/* Yellow / Minimize */}
                  <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d8a124] relative flex items-center justify-center">
                    <div className="opacity-0 group-hover/controls:opacity-100 transition-opacity w-[6px] h-[1px] bg-[#9a5700]"></div>
                  </div>
                  
                  {/* Green / Maximize */}
                  <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] relative flex items-center justify-center">
                    <div className="opacity-0 group-hover/controls:opacity-100 transition-opacity w-[4px] h-[4px] border-t border-l border-[#006500] rotate-[-45deg] absolute translate-x-[-1px] translate-y-[-1px]"></div>
                    <div className="opacity-0 group-hover/controls:opacity-100 transition-opacity w-[4px] h-[4px] border-b border-r border-[#006500] rotate-[-45deg] absolute translate-x-[1px] translate-y-[1px]"></div>
                  </div>
                </div>

              </div>

              <div className="grid lg:grid-cols-2">
                {/* Visual Side (Reversed) */}
                <div className="relative bg-slate-50 flex items-center justify-center p-1 lg:p-2 order-2 lg:order-1">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative w-full aspect-video rounded   overflow-hidden border border-slate-200">
                    <img 
                      src="/dreamspeed.png" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt="System UI"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="px-10 lg:px-16 py-14 border-l border-slate-100 order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-tighter mb-6">
                    Real-time Engine
                  </div>
                  
                  <h4 className="text-5xl font-bold tracking-tighter text-slate-900 mb-2">Dream Speed</h4>
                  <h1 className="text-slate-500 text-md font-medium mb-8">Speedboat Ticket Booking System</h1>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-12 border-l-4 border-emerald-500 pl-6">
                    Logistics automation for maritime ticketing. Handling real-time 
                    vessel capacity and instantaneous passenger validation.
                  </p>

                  <button 
                    onClick={() => window.open("https://www.dreamspeedmaldives.com/", "_blank")}
                    className="group/link flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-slate-900"
                  >
                    <span className="bg-slate-900 text-white px-6 py-3 group-hover/link:bg-emerald-600 transition-colors">
                      View Live
                    </span>
                    <span className="p-3 border border-slate-200 group-hover/link:border-slate-900 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* The Footer Bar */}
          <div className="mt-16 mb-8 flex flex-col items-center">
            <div className="text-center">
              {/* The Premium Architect Button */}
              <button 
                onClick={() => navigate("/work")}
                className="group relative flex items-center gap-0 overflow-hidden rounded-sm border border-slate-900 transition-all duration-500"
              >
                {/* Left Side: Label */}
                <span className="px-8 py-4 text-[14px] font-black tracking-[0.3em] text-slate-900 group-hover:bg-slate-950 group-hover:text-white transition-all duration-500 uppercase">
                  VIEW_ALL_WORKS
                </span>
                
                {/* Right Side: Icon with Accent Color */}
                <span className="bg-emerald-500 px-6 py-5 border-l border-slate-900 group-hover:bg-slate-900 transition-colors duration-500">
                  <svg 
                    className="w-5 h-5 text-white transition-transform duration-500 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Lush Web Designers */}
<section className="relative px-6 py-28  overflow-hidden selection:bg-emerald-100">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px]" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* TEXT CONTENT: The "Authority" Column */}
          <div className="w-full lg:w-1/2 space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              {/* Premium Label */}
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Verified Partner</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9] lg:max-w-md">
                Modernizing <br />
                <span className="text-slate-400 font-light">The Web.</span>
              </h2>

              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-xl">
                LushWare ORG is proud to integrate with <span className="text-slate-900 font-medium">Lush Web Designers</span>—fusing technical architecture with world-class digital aesthetics.
              </p>
            </div>

            {/* Interactive CTA Section */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => window.open("https://lushwebdesigners.com/", "_blank")}
                className="group relative flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-emerald-600 hover:-translate-y-1 active:scale-95 shadow-xl shadow-slate-200"
              >
                Launch Experience
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inquiry</span>
                <span className="text-sm font-bold text-slate-900 border-b border-slate-200 hover:border-emerald-500 cursor-pointer transition-colors">
                  View Full Suite
                </span>
              </div>
            </div>

            {/* Micro-Stats Footer */}
            <div className="pt-10 border-t border-slate-100 flex gap-10">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Reach</span>
                <span className="text-sm font-bold text-slate-900">Global Focus</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Stack</span>
                <span className="text-sm font-bold text-slate-900">Next-Gen UX</span>
              </div>
            </div>
          </div>

          {/* VISUAL CONTENT: The "Stage" Column */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              {/* Architectural Framing Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32  rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Main Image Stage */}
              <div className="relative p-3    rounded-[3rem]  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="rounded-[2.2rem] overflow-hidden  ">
                  <img 
                    src="/hero/hero1.png" // Replace with your link
                    alt="Collaboration Highlight" 
                    className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    </div>
  );
}



