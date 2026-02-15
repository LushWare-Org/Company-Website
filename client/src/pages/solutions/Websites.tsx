import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import { useNavigate } from "react-router-dom";

const Websites: React.FC = () => {
  const navigate = useNavigate();
  const faqItems = [
    {
      question: "What is a corporate website?",
      answer:
        "A corporate website is a digital platform representing a business online, providing information, services, and engagement opportunities for clients, partners, and stakeholders."
    },
    {
      question: "How does a business website benefit my company?",
      answer:
        "It increases brand visibility, strengthens credibility, generates leads, provides customer engagement channels, and allows your business to reach a global audience."
    },
    {
      question: "Can my website be mobile-friendly?",
      answer:
        "Absolutely. All websites we design are responsive and optimized for mobile devices, ensuring an excellent user experience on smartphones and tablets."
    },
    {
      question: "Do you provide SEO and performance optimization?",
      answer:
        "Yes. Our websites follow SEO best practices, fast loading speeds, and modern web standards to help your business rank higher and perform better online."
    }
  ];

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="max-w-6xl mt-12 mx-auto text-center mb-5">
          <div className="flex items-center justify-center gap-2 mb-5 ">
            <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
              Business & Corporate Websites
            </div>
          </div>
          

          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6 hero-line">
            Build a Strong Digital Presence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800 hero-line">
              With Professional Websites
            </span>
          </h1>

          <p className="text-xl text-slate-600 font-medium max-w-7xl mx-auto hero-line">
            LushWare designs websites that not only look amazing but also drive engagement, convert visitors into leads, and represent your brand with excellence.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-blue-100/50 rounded-[3rem] blur-3xl transform scale-90 -z-10"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
            <img
              src="/hero/bc.jpg"
              alt="Corporate Website Interface"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent"></div>
              {/* Floating Action Button on Image */}
              <div className="
                absolute 
                bottom-4 sm:bottom-6 lg:bottom-8 
                left-1/2 -translate-x-1/2 
                w-full px-4 sm:px-0 
                flex justify-center
              ">
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

        {/* Benefits Section - Emerald Premium Style */}
        <section className="bg-white py-20 md:px-0 px-2 font-sans">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center  gap-2 mb-4 ">
                  <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                    Enterprise Solutions
                  </div>
                </div>
                <h3 className="text-4xl md:text-6xl font-medium text-emerald-950 tracking-tight">
                  Modernizing <span className="text-emerald-600">Digital Assets.</span>
                </h3>
              </div>
              <p className="text-slate-800 text-lg max-w-sm pb-2 border-l-2 border-emerald-300 pl-6">
                Expertly crafted software solutions for London’s most ambitious enterprises.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-12 gap-5">
              
              {/* Feature 1: The "Hero" Card */}
              <div className="col-span-12 md:col-span-8 bg-white md:p-10 p-6 rounded-[2.5rem] border border-emerald-300 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between min-h-[450px] hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all duration-500">
                <div className="w-16 h-16  rounded-2xl flex items-center justify-center text-emerald-700 mb-8  border-2 border-emerald-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <div>
                  <h4 className="text-4xl font-semibold text-emerald-950 mb-4 tracking-tight">Institutional Credibility</h4>
                  <p className="text-slate-700 font-medium text-xl leading-relaxed max-w-xl">
                    We deliver the visual weight and technical stability required by high-growth software firms in the UK market.
                  </p>
                </div>
              </div>

              {/* Feature 2: High Contrast Emerald Card */}
              <div className="col-span-12 md:col-span-4 bg-emerald-900 md:p-10 p-8 rounded-[2.5rem] text-white flex flex-col justify-between hover:bg-emerald-900 transition-colors">
                <div className="text-emerald-200 text-3xl font-light underline underline-offset-8">01.</div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3">Global Uptime</h4>
                  <p className="text-white leading-relaxed">
                    Deployment on elite edge networks ensuring 99.9% availability for your global users.
                  </p>
                </div>
              </div>

              {/* Feature 3: Small Card */}
              <div className="col-span-12 md:col-span-4 bg-emerald-50/50 p-6 md:p-8 rounded-[2rem] border border-emerald-300 group hover:bg-white transition-all">
                <div className="text-emerald-700 mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
                <h4 className="text-lg font-bold text-emerald-950 mb-2">Search Dominance</h4>
                <p className="text-slate-700 font-medium text-sm">Strategic SEO frameworks designed for competitive software niches.</p>
              </div>

              {/* Feature 4: Small Card */}
              <div className="col-span-12 md:col-span-4 bg-white p-6 md:p-8 rounded-[2rem] border border-emerald-300 shadow-sm">
                <div className="text-emerald-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                </div>
                <h4 className="text-lg font-bold text-emerald-950 mb-2">Mobile Perfection</h4>
                <p className="text-slate-700 font-medium text-sm">Fluid, app-like experiences across every device and browser.</p>
              </div>

              {/* Feature 5: Small Card */}
              <div className="col-span-12 md:col-span-4 bg-white p-6 md:p-8 rounded-[2rem] border border-emerald-300 shadow-sm">
                <div className="text-emerald-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10m14 0v-4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <h4 className="text-lg font-bold text-emerald-950 mb-2">Data Intelligence</h4>
                <p className="text-slate-700 font-medium text-sm">Advanced analytics integration to track enterprise-level KPIs.</p>
              </div>

            </div>
          </div>
        </section>

      <section className="bg-white py-20 px-6 min-h-[160vh] relative">
        {/* Sticky Container - Keeps the laptop in view while scrolling */}
        <div className="sticky top-20 max-w-7xl mx-auto overflow-visible">
          
          {/* Header Text - Sophisticated London Agency Style */}
          <div className="text-center mb-16 relative z-30">
            <div className="inline-block px-4 py-1 rounded-full border border-emerald-300 bg-white/50 backdrop-blur-md mb-6 ">
              <span className="text-emerald-800 font-bold tracking-[0.4em] text-[10px] uppercase">
                Corporate Excellence
              </span>
            </div>
            <h3 className="text-5xl md:text-7xl  text-slate-900 mb-4 tracking-tight">
              The Digital <span className=" text-emerald-700 ">Cornerstone.</span>
            </h3>
            <p className="text-slate-600 text-lg font-medium tracking-wide">Scroll to deconstruct the corporate advantage</p>
          </div>

          {/* The Laptop Rig */}
          <div className="relative perspective-[2000px] w-full flex flex-col items-center">
            
            {/* LID / SCREEN */}
            <div 
              className="relative z-20 w-full max-w-[900px] aspect-[16/10] bg-[#020617] rounded-2xl p-2 shadow-2xl border border-slate-800 origin-bottom transition-all duration-100 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                animation: 'open-lid linear both',
                animationTimeline: 'view()',
                animationRange: 'entry 10% cover 45%'
              }}
            >
              {/* INNER SCREEN CONTENT (High Density Business Architecture) */}
              <div className="w-full h-full bg-[#fcfcfb] rounded-xl overflow-hidden relative border border-slate-900 flex flex-col font-sans">
                
                {/* 1. TOP BRAND BAR */}
                <div className="h-10 border-b border-stone-200 bg-white px-5 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-4">
                    <span className="font-serif italic text-xs text-stone-900">Lushware <span className="font-sans font-bold not-italic text-emerald-900 text-[9px] tracking-tighter">CORP</span></span>
                    <div className="h-3 w-[1px] bg-stone-200"></div>
                    <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">Global Solutions / Web Architecture</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-200"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-700"></div>
                  </div>
                </div>

                <div className="flex-1 flex overflow-hidden">
                  
                  {/* 2. MAIN CONTENT GRID */}
                  <div className="flex-1 p-5 grid grid-cols-12 gap-4 overflow-y-auto">
                    
                    {/* Left Column: Strategic Value */}
                    <div className="col-span-7 flex flex-col gap-4">
                      <div className="bg-emerald-950 p-5 rounded-xl text-white relative overflow-hidden">
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-2">Value Proposition</p>
                        <h4 className="text-xl font-serif italic mb-3 leading-tight">Digital Presence as a Revenue Multiplier.</h4>
                        <p className="text-[10px] text-emerald-100/60 leading-relaxed mb-4">Establishing authority in the London B2B market through high-fidelity engineering.</p>
                        
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                          <div>
                            <p className="text-lg font-bold">94%</p>
                            <p className="text-[8px] text-emerald-400 uppercase font-bold tracking-tighter">First Impression Rating</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold">2.4x</p>
                            <p className="text-[8px] text-emerald-400 uppercase font-bold tracking-tighter">Inquiry Conversion</p>
                          </div>
                        </div>
                      </div>

                      {/* Benefit Ledger */}
                      <div className="bg-white border border-stone-100 rounded-xl p-4 shadow-sm">
                        <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-stone-900">Strategic Business Benefits</h5>
                        <div className="space-y-4">
                          {[
                            { t: "Institutional Trust", d: "Premium digital aesthetics that validate high-ticket corporate offerings." },
                            { t: "Investor Transparency", d: "Scalable portals for real-time stakeholder and analyst communication." },
                            { t: "Lead Capture Funnels", d: "UX architecture designed to convert high-intent B2B traffic." }
                          ].map((b, i) => (
                            <div key={i} className="flex gap-3 items-start border-b border-stone-50 pb-3 last:border-0">
                              <span className="text-emerald-800 font-serif italic font-bold">0{i+1}</span>
                              <div>
                                <p className="text-[10px] font-bold text-stone-900 leading-none mb-1">{b.t}</p>
                                <p className="text-[9px] text-stone-500 leading-tight">{b.d}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Performance Analytics */}
                    <div className="col-span-5 flex flex-col gap-4">
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
                        <p className="text-[10px] italic font-serif leading-relaxed opacity-90">
                          "Our architecture ensures global compliance and absolute data integrity."
                        </p>
                        <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-emerald-500/10 rounded-full blur-xl"></div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Glass Reflection Over Screen */}
                <div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
              </div>

              {/* Camera Notch Detail */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#020617] rounded-b-xl flex items-center justify-center border-x border-b border-slate-800">
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
              </div>
            </div>

            {/* BASE / KEYBOARD (Stays flat) */}
            <div className="relative z-10 w-full max-w-[920px] h-[20px] bg-gradient-to-b from-slate-800 to-black rounded-b-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] mt-[-2px]">
              {/* Ambient Reflection on desk */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-emerald-900/10 blur-3xl rounded-full -z-10"></div>
            </div>

          </div>
        </div>

        {/* Spacer to allow for scrolling room */}
        <div className="h-[60vh]"></div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes open-lid {
            from { transform: rotateX(-95deg); opacity: 0.8; }
            to { transform: rotateX(0deg); opacity: 1; }
          }
        `}} />
      </section>


        {/* Value Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h3 className="text-4xl  md:text-6xl font-semibold text-slate-900 mb-6">
              How We Add Value to Your <span className="text-emerald-600">Website</span>
            </h3>
            <p className="text-xl  mx-auto text-slate-800 leading-relaxed">
              LushWare doesn’t just build websites—we create digital experiences aligned with your business goals. Our approach ensures that your site not only looks great but also drives measurable outcomes such as lead generation, brand recognition, and user engagement.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Mobile Friendly",
                desc: "All websites are fully responsive and optimized for devices of any size, ensuring a seamless user experience on smartphones and tablets."
              },
              {
                title: "UI/UX Design",
                desc: "Intuitive, modern, and visually appealing interfaces designed to engage users and improve conversion rates."
              },
              {
                title: "SEO Optimization",
                desc: "Websites built with SEO best practices to improve search engine visibility, attract organic traffic, and enhance online presence."
              }
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


        
        {/* Why Choose LushWare */}
        <WhyChooseLushWare />

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-4">
              <span className="px-3 py-1 text-[11px] font-bold tracking-[0.35em] text-emerald-700 bg-emerald-50 rounded-full uppercase">
                Web Solutions
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4 hero-line">
              Business & Corporate Websites
            </h2>

            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Modern, mobile-friendly websites designed to strengthen your brand,
              improve visibility, and convert visitors into customers.
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

export default Websites;
