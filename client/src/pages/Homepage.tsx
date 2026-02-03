import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const services = [
    {
      number: "01",
      title: "Product Development",
      desc: "We build strong software products from idea to launch, designed to grow with your business and users.",
      tags: ["SaaS Architecture", "Product Strategy"],
      color: "group-hover:text-blue-600"
    },
    {
      number: "02",
      title: "Custom Development",
      desc: "Custom software solutions made for your company, helping you save time, reduce cost, and work smarter.",
      tags: ["Enterprise Solutions", "Legacy Migration"],
      color: "group-hover:text-indigo-600"
    },
    {
      number: "03",
      title: "Mobile App Development",
      desc: "High-quality mobile apps for iOS and Android, built for smooth performance and great user experience.",
      tags: ["React Native", "Native Performance"],
      color: "group-hover:text-emerald-600"
    },
    {
      number: "04",
      title: "Web Development",
      desc: "Modern websites and web apps that look great, load fast, and help your business attract more customers.",
      tags: ["Fullstack JS", "SEO Optimized"],
      color: "group-hover:text-amber-600"
    },
    {
      number: "05",
      title: "Cloud System Development",
      desc: "Secure cloud-based systems that manage your data, improve operations, and support business automation.",
      tags: ["AWS/Azure", "Process Automation"],
      color: "group-hover:text-purple-600"
    },
    {
      number: "06",
      title: "AI Based Development",
      desc: "AI-powered tools and smart systems that help automate tasks, improve decisions, and boost efficiency.",
      tags: ["Gen AI", "Neural Workflows"],
      color: "group-hover:text-rose-600"
    }
  ];


  return (
    <div className="text-gray-800">

      {/* Hero Section */}
      <section  className=" relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mt-12 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          
          {/* LEFT SIDE — TEXT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* 2. High-Impact Typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-stone-900 leading-[0.85]">
              Innovative <br />
              <span className="text-emerald-600">Software</span>
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/25 blur-[120px] rounded-full z-0" />
              <div className="absolute -top-6 left-0 w-28 h-28 rounded-full z-0 
                  bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-900 
                  shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.4),_0_20_40px_rgba(16,185,129,0.3)] " 
                />
              <div className="absolute top-1/2 -right-10 w-18 h-18 rounded-full z-0 
                bg-emerald-600 
                shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.5)] " 
              />
              <div className="absolute -bottom-10 left-1/3 w-12 h-12 rounded-full z-0 
                bg-emerald-600 shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.5)] 
                 opacity-100" 
              />

            <div className="relative">
              <img
                src="/hero/hero6.png"
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
                  drop-shadow-[20px_30px_20px_rgba(0,0,0,0.4)]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section data-reveal className="reveal-section relative px-10 md:px-2 py-12 md:py-20 overflow-hidden bg-white ">
        
        {/* Creative Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Primary Emerald Wash - Softer for light mode */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Secondary Accent Orb */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Subtle Grid Pattern Overlay - Darkened for visibility on light bg */}
          <div className="absolute inset-0 opacity-[0.09] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" 
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23059669\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")' }} 
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
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

            <div className="relative">
              {/* Soft shadow instead of dark glow */}
              <div className="absolute -inset-4 bg-emerald-600/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white backdrop-blur-md border border-emerald-100 p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <span className="absolute -top-8 -left-2 text-9xl text-emerald-600/10 font-serif select-none">“</span>
                
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                  At <span className="font-semibold text-slate-950">LushWare ORG</span>, we design software that goes beyond solving problems—
                  it <span className="text-emerald-600 font-medium">transforms</span> how people experience technology. 
                  Our focus is on crafting stable, scalable solutions that empower the 
                  <span className="relative inline-block px-1 ml-1">
                    <span className="relative z-10 text-slate-900 font-medium">modern global community</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-200/50 -rotate-1" />
                  </span>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Services */}
      <section data-reveal className="reveal-section px-6 py-20  relative">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-24">
            
            <div className="lg:w-1/3 lg:sticky lg:top-48 h-fit">
              <div className="flex flex-col pl-4 md:pl-0  ">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                  <span className="text-[12px] font-bold tracking-[0.3em] text-slate-600 uppercase">Our Services</span>
                </div>

                <h2 className="text-4xl md:text-6xl  font-bold text-slate-900 tracking-tighter leading-[1.1] mb-8">
                  Our 
                  Specialized Software <br /> 
                  <span className="relative">
                    <span className="relative z-10 text-emerald-600">Solutions.</span>
                    <svg className="absolute -bottom-1 left-0 w-full h-0.5 text-emerald-300" viewBox="0 0 100 2" preserveAspectRatio="none">
                      <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </h2>
              <div className="mt-8">
                <button
                  onClick={() => navigate("/solutions")}
                  className="group relative overflow-hidden px-10 py-4 rounded-full bg-stone-900 transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]"
                >
                  <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="text-sm font-semibold tracking-wider text-white transition-colors duration-500">
                      VIEW ALL SOLUTIONS
                    </span>

                    <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                      <svg 
                        className="h-4 w-4 transform transition-all duration-500 text-white group-hover:translate-x-5" 
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

            <div className="lg:w-1/2 space-y-6">
              {services.map((service) => (
                <div 
                  key={service.number}
                  className="group relative px-4 bg-white border-2 border-slate-200 group-hover:border-transparent  transition-all duration-500 rounded-3xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)]  shadow-[0_20px_50px_rgba(0,0,0,0.1)] " >
                <span className="hidden md:block absolute bottom-2 right-4 text-8xl font-black text-slate-100 transition-all duration-1000 group-hover:text-emerald-100 group-hover:-translate-y-4 select-none">
                  {service.number}
                </span>
                  {/* Top-Left Path */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-emerald-500 rounded-tl-3xl opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-700 ease-in-out z-10" />

                  {/* Bottom-Right Path */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-emerald-500 rounded-br-3xl opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-700 ease-in-out z-10" />

                  <div className="p-10 md:p-14 border border-slate-50 transition-all duration-500 group-hover:bg-slate-50/50">
                    <div className="flex flex-col gap-10">
                      

                      {/* Main Content */}
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter group-hover:tracking-wide transition-all duration-500">
                          {service.title}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed font-normal max-w-lg border-l-2 border-slate-100 md:pl-6 pl-0 group-hover:border-emerald-500 transition-all duration-500">
                          {service.desc}
                        </p>
                      </div>

                      {/* Tags: Technical Chips */}
                      <div className="flex flex-wrap gap-3">
                        {service.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 bg-emerald-50 border border-emerald-400 text-[11px] rounded-lg font-mono font-bold text-emerald-700 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white transition-all duration-300"
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
      <section data-reveal className="reveal-section px-4 py-16  overflow-hidden relative bg-white">
        <div className="absolute inset-0 z-0">
          {/* Primary Emerald Wash - Softer for light mode */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Secondary Accent Orb */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Subtle Grid Pattern Overlay - Darkened for visibility on light bg */}
          <div className="absolute inset-0 opacity-[0.09] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" 
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23059669\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")' }} 
          />
        </div>


        <div className="max-w-7xl mx-auto relative z-10 px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Column: Mission & CTA */}
            <div className="lg:w-5/12 text-center lg:text-left">

              
              <h2 className="text-5xl font-bold md:text-7xl  text-gray-900 leading-[0.85] tracking-tighter mb-8">
                Project <br />
                <span className="bg-emerald-600 bg-clip-text text-transparent"> Inventory.</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-md leading-relaxed mb-12 mx-auto lg:mx-0 font-medium">
                Join our growing team and work on real-world projects. Develop your skills, collaborate with talented professionals, and make a real impact.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button 
                  onClick={() => navigate("/project-base")}
                  className="group relative px-10 py-4 overflow-hidden bg-stone-900 text-white rounded-full font-bold transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]"
                >
                  <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                  <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase">Join Now</span>
                </button>
                

              </div>
            </div>

            {/* Right Column: The "Stats Galaxy" */}
            <div className="lg:w-7/12 relative w-full h-[450px] sm:h-[500px] md:h-[600px] mt-10 lg:mt-0">
              
              {/* Experience Card (The 8+ Years) */}
              <div className="absolute border-2 border-emerald-600 top-0 left-0 md:left-20 z-30 w-36 sm:w-44 md:w-56 p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-gray-200/40 transform -rotate-2 md:-rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-500">
                <p className="text-[10px] sm:text-[11px] md:text-[14px] font-black text-emerald-600 uppercase mb-1 sm:mb-2 tracking-[0.15em] sm:tracking-[0.2em]">Our Team</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">8</span>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-500">+</span>
                </div>
                <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-700 font-medium leading-tight mt-1 sm:mt-2">Years of combined expertise</p>
              </div>

              {/* Reliability Card (The 98%) */}
              <div className="absolute top-6 sm:top-8 md:top-10 right-0 z-10 w-40 sm:w-48 md:w-64 p-5 sm:p-6 md:p-10 bg-emerald-500 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-emerald-200/50 transform rotate-2 md:rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500">
                <div className="text-white">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 sm:mb-3 md:mb-4">Reliability</p>
                  <div className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none">98%</div>
                  <div className="mt-3 sm:mt-4 md:mt-6 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-[98%]"></div>
                  </div>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase mt-2 sm:mt-3 md:mt-4 opacity-80 italic underline underline-offset-2 sm:underline-offset-4">Standard uptime</p>
                </div>
              </div>

              {/* Active Sprints Card (The 14) */}
              <div className="absolute top-[48%] sm:top-[47%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-64 sm:w-72 md:w-80 p-6 sm:p-8 md:p-10 bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] sm:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] transform transition-transform hover:scale-105 duration-500 group">
                <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <polyline points="13 2 13 9 20 9" />
                      </svg>
                  </div>
                  <div className="text-right">
                      <span className="block text-[10px] sm:text-[11px] md:text-[13px] font-black text-emerald-300 uppercase tracking-widest">Active Now</span>
                      <span className="block text-[9px] sm:text-[10px] md:text-[11px] text-gray-200 font-mono italic">In Progress</span>
                  </div>
                </div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter mb-2">14</div>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-200 font-medium">Active projects you can join today</p>
              </div>

              {/* Deployed Apps Card (The 52) */}
              <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 right-1 sm:right-2 md:right-12 z-20 w-44 sm:w-52 md:w-64 p-5 sm:p-6 md:p-8 bg-white border-2 border-emerald-500 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-gray-200 rotate-4 sm:rotate-6 md:rotate-12 hover:rotate-0 transition-all duration-500">
                <p className="text-[11px] sm:text-[12px] md:text-[14px] font-bold text-gray-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1 sm:mb-2 md:mb-3">Live Projects</p>
                <div className="flex items-baseline gap-1 sm:gap-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">52</span>
                  <span className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-700 uppercase">Active</span>
                </div>
                <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-emerald-600 mt-2 sm:mt-3 md:mt-4 bg-emerald-50 px-2 py-1 rounded-md inline-block">
                  Ready to Join
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section data-reveal className="reveal-section px-6 pb-20 pt-10 relative overflow-hidden ">
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="max-w-6xl mx-auto mb-20 border-b border-slate-300 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl pl-4 md:pl-0">
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
                <p className="text-slate-500 font-medium text-lg leading-relaxed border-l-2 border-emerald-500/30 pl-6 py-2">
                  We prioritize stability and security at every layer, building 
                  software architectures that remain 
                  <span className="text-slate-900"> resilient as your business grows.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                num: '01', 
                title: 'Innovation', 
                desc: 'We constantly innovate and push boundaries to develop revolutionary software platforms that set new industry standards.',
                link: 'Read Case Study'
              },
              { 
                num: '02', 
                title: 'Reliability', 
                desc: 'Count on us for reliable software solutions that meet the highest standards of quality and performance.',
                link: 'Infrastructure Specs',
                offset: true 
              },
              { 
                num: '03', 
                title: 'Customer Focus', 
                desc: 'Customer satisfaction is our top priority, and we strive to exceed expectations in every project we undertake.',
                link: 'Our Methods'
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className={`group relative h-[380px] rounded-[2.5rem] bg-white border-2 border-emerald-400 overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/20 ${card.offset ? 'md:translate-y-8' : ''}`}
              >
                {/* THE BG FILL: Expands from the top-left circle on hover */}
                <div className="absolute top-10 left-10 w-15 h-15 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full scale-0 group-hover:scale-[12] transition-transform duration-700 ease-in-out z-0" />

                {/* Content Layer */}
                <div className="relative z-10 h-full p-10 flex flex-col">
                  
                  {/* Top Area */}
                  <div className="mb-8 flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-500">
                      <span className="text-emerald-600 group-hover:text-white font-bold transition-colors">
                        {card.num}
                      </span>
                    </div>

                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-500 tracking-tight">
                      {card.title}
                    </h4>
                    <p className="text-slate-600 group-hover:text-white leading-relaxed text-md transition-colors duration-500">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom Interaction */}
                  <div className="mt-auto pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-white uppercase tracking-widest transition-colors">
                        {card.link}
                      </span>
                      <div className="w-8 h-[2px] bg-emerald-500 group-hover:bg-white transition-all duration-500" />
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-2 group-hover:translate-x-0">
                      <span className="text-white text-lg">→</span>
                    </div>
                  </div>
                </div>

                {/* Glass Glare Overlay for extra depth in light mode */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section data-reveal className="reveal-section px-6 py-8  relative">

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
            
            <div className="group border border-slate-300 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
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
                    className="relative px-6 py-3 overflow-hidden group bg-stone-900 rounded-full transition-all duration-500 hover:border-emerald-600 flex items-center gap-2"
                  >
                    {/* The color layer that slides in */}
                    <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                    
                    {/* The Text */}
                    <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase text-white transition-colors duration-500">
                      View Live
                    </span>
                    
                    {/* Globe Icon */}
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="relative z-10 transition-transform duration-700 group-hover:rotate-[360deg]"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </button>
                </div>

                {/* Visual Side */}
                <div className="relative bg-slate-50 flex items-center justify-center p-1 lg:p-2">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative h-full aspect-video rounded-r-lg overflow-hidden border border-slate-200">
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
            <div className="group border border-slate-300 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
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
                  <div className="relative w-full aspect-video rounded-l-lg   overflow-hidden border border-slate-200">
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
                    className="relative px-6 py-3 overflow-hidden group bg-stone-900 rounded-full transition-all duration-500 hover:border-emerald-600 flex items-center gap-2"
                  >
                    {/* The color layer that slides in */}
                    <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                    
                    {/* The Text */}
                    <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase text-white transition-colors duration-500">
                      View Live
                    </span>
                    
                    {/* Globe Icon */}
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="relative z-10 transition-transform duration-700 group-hover:rotate-[360deg]"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* The Footer Bar */}
          <div className="mt-16 mb-8 flex flex-col items-center">
            <div className="text-center">
              {/* Call to Action Button */}
              <button 
                onClick={() => navigate("/work")}
                className="relative px-8 py-4 overflow-hidden group bg-stone-900 rounded-full transition-all duration-500 hover:border-emerald-600 flex items-center gap-2 justify-center"
              >
                {/* The color layer that slides in */}
                <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                
                {/* The Text */}
                <span className="relative z-10 text-[12px] font-bold tracking-[0.2em] uppercase text-white transition-colors duration-500">
                  View All Works
                </span>
                
                {/* Arrow Icon */}
                <svg className="relative z-10 w-4 h-4 text-white transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Lush Web Designers */}
      <section data-reveal className="reveal-section relative w-full bg-white/60 py-24 sm:py-32 overflow-hidden">
        {/* The Image as a subtle 'Background Mask' */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.19] grayscale hover:opacity-30 hover:grayscale-0 transition-all duration-1000"
          style={{ 
            backgroundImage: "url('/bg6.jpg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
                <h2
                  className="
                    text-4xl 
                    sm:text-5xl 
                    md:text-6xl 
                    lg:text-7xl 
                    font-extrabold 
                    tracking-tight 
                    text-stone-900 
                    leading-tight
                  "
                >
                  Lush{" "}
                  <span className="text-emerald-600 drop-shadow-sm">Web</span>{" "}
                  <span
                    className="text-transparent drop-shadow-sm"
                    style={{ WebkitTextStroke: "1.5px #1c1917" }}
                  >
                    Designers.
                  </span>
                </h2>
                <p className="mx-auto max-w-xl mt-2 text-lg sm:text-xl text-slate-500 leading-relaxed tracking-wide">
                  Professional <span className="text-slate-900 font-semibold">website design</span> and 
                  <span className="text-slate-900 font-semibold"> social media promotion</span> services for your business.
                </p>
              <div className="mt-8">
                <button
                  onClick={() => window.open("https://lushwebdesigners.com/", "_blank")}
                  className="
                    relative px-12 py-4 overflow-hidden group 
                    bg-stone-900 rounded-full 
                    transition-all duration-300 
                    hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)]
                  "
                >
                  {/* Hover Fill Animation */}
                  <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-out group-hover:w-full"></span>

                  {/* Text + Arrow */}
                  <span className="relative z-10 flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                    Explore Services

                    <span className="h-5 w-5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center">
                      <svg
                        className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={4}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </span>
                </button>

              </div>
            </div>

        {/* Bottom Logotypes / Social Proof (Clean slate look) */}
              <div className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-30">
                <span className="text-slate-900 font-black text-xl tracking-tighter">DESIGN.</span>
                <span className="text-slate-900 font-black text-xl tracking-tighter">BUILD.</span>
                <span className="text-slate-900 font-black text-xl tracking-tighter">SCALE.</span>
              </div>
          </div>
        </div>
      </section>

    </div>
  );
}



