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
        "Mobile app development involves designing, building, and deploying applications for mobile devices on iOS and Android platforms, ensuring seamless user experiences and business value."
    },
    {
      question: "How can mobile apps benefit my business?",
      answer:
        "Mobile apps increase accessibility for customers, improve engagement, streamline business processes, and enable data-driven decisions through real-time interactions."
    },
    {
      question: "Can LushWare build apps for both iOS and Android?",
      answer:
        "Yes, we create native and cross-platform mobile applications tailored to your business needs, ensuring high performance and security across devices."
    }
  ];

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-8xl mx-auto">

        {/* Hero Section */}
        <div className="max-w-6xl mt-12 mx-auto text-center mb-16">

          <div className="flex items-center justify-center gap-2 mb-5 ">
            <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
              Mobile Applications
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6 hero-line">
            Transform Your Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800 hero-line">
              With Intelligent Mobile Apps
            </span>
          </h1>

          <p className="text-xl text-slate-600 font-medium max-w-7xl mx-auto hero-line">
            LushWare delivers mobile apps designed to optimize business processes, engage customers, and provide measurable impact across iOS and Android devices.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-7xl mx-auto mb-12">
          <div className="absolute inset-0 bg-blue-100/50 rounded-[3rem] blur-3xl transform scale-90 -z-10"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
            <img
              src="/hero/app2.jpg"
              alt="Mobile App Interface"
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

        {/* Ultra-Premium 3D Mobile Presentation */}
        <section className="bg-white py-20 px-6 overflow-hidden">
          <div className="max-w-8xl mx-auto">
            
        {/* Section Header - London Editorial Style */}
        <div className="relative max-w-7xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-12">
            
            {/* Left Side: Bold Branding */}
            <div className="flex-1">

              <h3 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tighter leading-[0.8]">
                Mobile <br/>
                <span className="text-emerald-600 font-serif  font-normal">Sovereignty.</span>
              </h3>
            </div>

            {/* Right Side: Simple Client-Friendly Text */}
            <div className="flex-1 md:max-w-md lg:max-w-lg">
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed ">
                We build <span className="text-slate-900 font-medium text-emerald-900">high-performance apps</span> that work perfectly across all devices and platforms.
              </p>
            </div>

          </div>
        </div>

            {/* The Isometric Device Stack */}
            <div className="relative flex flex-col lg:pl-32 lg:flex-row items-center md:gap-24 gap-32">
              
              {/* 1. iPhone 16 Pro - Left Angle */}
              <div className="relative z-30 transform  lg:-rotate-4 transition-transform duration-1000 group">
                <div className="relative w-[320px] h-[640px] bg-[#f2f2f2] rounded-[3.8rem] p-[3px] shadow-[-20px_40px_80px_rgba(0,0,0,0.15)] border border-slate-300">
                  
                  {/* Inner Screen Chassis */}
                  <div className="h-full w-full bg-slate-950 rounded-[3.6rem] p-[8px] overflow-hidden">
                    <div className="relative h-full w-full bg-white rounded-[3rem] overflow-hidden">
                      
                      {/* Hardware Detail: Dynamic Island */}
                      <div className="absolute top-0 inset-x-0 h-10 flex justify-center items-center pt-2 z-50">
                        <div className="w-24 h-6 bg-black rounded-full"></div>
                      </div>

                      {/* Screen Content: Benefits */}
                      <div className="h-full w-full pt-16 p-8 flex flex-col">
                        <div className="flex-1">
                          <span className="text-emerald-600 font-bold text-[10px] tracking-widest uppercase mb-6 block">Module 01</span>
                          <h4 className="text-3xl font-black text-slate-900 leading-tight mb-6">How Mobile <br/>Benefits Business</h4>
                          <p className="text-sm text-slate-500 leading-relaxed mb-8">
                            Essential tools that enhance engagement and streamline operations. Instant access to services and support.
                          </p>
                          
                          <div className="space-y-3">
                            <div className="h-12 bg-emerald-50 rounded-xl flex items-center px-4 gap-3 border border-emerald-100">
                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                <span className="text-[11px] font-bold text-emerald-800">Engagement Metrics</span>
                            </div>
                            <div className="h-12 bg-slate-50 rounded-xl flex items-center px-4 gap-3 border border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                <span className="text-[11px] font-bold text-slate-600">Operational Flow</span>
                            </div>
                          </div>
                        </div>

                        <div className="h-14 w-full bg-slate-900 rounded-2xl flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest">
                          View Case Study
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Physical Buttons */}
                  <div className="absolute top-28 -left-[4px] w-[4px] h-14 bg-slate-400 rounded-l-md shadow-sm"></div>
                  <div className="absolute top-44 -left-[4px] w-[4px] h-14 bg-slate-400 rounded-l-md shadow-sm"></div>
                </div>
              </div>

              {/* 2. Android Flagship - Right Angle Overlap */}
              <div className="relative z-20 mt-[-100px] lg:mt-32 lg:ml-[-100px] transform lg:rotate-6 lg:rotate-0 transition-transform duration-1000 group">
                <div className="relative w-[320px] h-[640px] bg-white rounded-[2.5rem] p-[2px] shadow-[20px_40px_80px_rgba(6,78,59,0.12)] border border-emerald-100">
                  
                  {/* Symmetrical Bezel Chassis */}
                  <div className="h-full w-full bg-slate-900 rounded-[2.4rem] p-[6px] overflow-hidden">
                    <div className="relative h-full w-full bg-white rounded-[2.2rem] overflow-hidden">
                        
                        {/* Punch Hole Camera */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-50"></div>

                        {/* Screen Content: OS */}
                        <div className="h-full w-full flex flex-col">
                          <div className="h-1/2 bg-emerald-950 p-8 flex flex-col justify-between">
                              <div className="w-10 h-10 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/50"></div>
                              <div>
                                <h4 className="text-3xl font-bold text-white mb-2">Android + iOS</h4>
                                <p className="text-emerald-300 text-[10px] font-bold tracking-[0.3em] uppercase">Universal Delivery</p>
                              </div>
                          </div>
                          <div className="p-8">
                              <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                                LushWare builds apps for both platforms, reach the largest audience possible with native-grade performance.
                              </p>
                              <div className="flex flex-col gap-2">
                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] font-bold text-slate-700">Premium iOS Integration</div>
                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] font-bold text-slate-700">Scalable Android Markets</div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content (Floating Side Card) */}
              <div className="lg:max-w-md space-y-12">
                <div className="md:p-10 p-6 bg-emerald-50 rounded-[3rem] border border-emerald-400">
                  <h4 className="text-2xl font-bold text-emerald-900 mb-6 tracking-tight">Enterprise Connectivity</h4>
                  <p className="text-lg text-emerald-800/70  leading-relaxed">
                    Mobile apps improve productivity by enabling employees to complete tasks, communicate, and manage workflows on the go. 
                  </p>
                </div>
                <p className="text-xl text-slate-700  leading-relaxed md:pl-10 pl-4 border-l-2 border-slate-400">
                  Together, Android and iOS development ensures that your business is accessible, reliable, and engaging for all users, wherever they are.
                </p>
              </div>

            </div>

          </div>
        </section>


      {/* Engineering Excellence - Compact High-Density Section */}
      <section className="md:py-12 border-y border-stone-100 bg-[#fdfdfb]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-12">
            
            {/* 01 - iOS NATIVE SECTION */}
            <div className="group flex-1 w-full flex items-center justify-between p-4 md:p-8 bg-white border border-stone-100 rounded-sm hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-700 cursor-pointer overflow-hidden">
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-4xl font-extralight tracking-tight text-slate-900">
                  iOS <span className="font-serif italic text-stone-700 group-hover:text-emerald-700 transition-colors">Native</span>
                </h3>
                <p className="text-md text-slate-500 max-w-[200px] leading-relaxed">
                  Optimized Swift engineering for Apple's premium ecosystem.
                </p>
                <div className="w-16 h-[1px] bg-stone-100 mt-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </div>
              </div>

              <div className="relative opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110 ">
                <svg width="100" height="100" viewBox="0 0 384 512" fill="currentColor" className="text-slate-900 group-hover:text-emerald-900 transition-colors">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              </div>
            </div>

            {/* 02 - ANDROID OS SECTION */}
            <div className="group flex-1 w-full flex items-center justify-between p-4 md:p-8 bg-white border border-stone-100 rounded-sm hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-700 cursor-pointer overflow-hidden">
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-4xl font-extralight tracking-tight text-slate-900">
                  Android <span className="font-serif italic text-stone-700 group-hover:text-emerald-700 transition-colors">OS</span>
                </h3>
                <p className="text-md text-slate-500 max-w-[200px] leading-relaxed">
                  High-performance Kotlin builds for the global mobile market.
                </p>
                <div className="w-16 h-[1px] bg-stone-100 mt-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </div>
              </div>

              <div className="relative opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110 ">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-slate-900 group-hover:text-emerald-900 transition-colors">
                    <path d="M17.523 15.3414C17.0209 15.3414 16.6139 14.9344 16.6139 14.4323C16.6139 13.9302 17.0209 13.5232 17.523 13.5232C18.0251 13.5232 18.4321 13.9302 18.4321 14.4323C18.4321 14.9344 18.0251 15.3414 17.523 15.3414ZM6.477 15.3414C5.9749 15.3414 5.5679 14.9344 5.5679 14.4323C5.5679 13.9302 5.9749 13.5232 6.477 13.5232C6.9791 13.5232 7.3861 13.9302 7.3861 14.4323C7.3861 14.9344 6.9791 15.3414 6.477 15.3414ZM17.915 10.3785L19.7835 7.1422C19.9231 6.9004 19.8403 6.5921 19.5985 6.4525C19.3567 6.3129 19.0484 6.3957 18.9088 6.6375L17.0094 9.9275C15.5494 9.2638 13.8863 8.892 12 8.892C10.1137 8.892 8.4506 9.2638 6.9906 9.9275L5.0912 6.6375C4.9516 6.3957 4.6433 6.3129 4.4015 6.4525C4.1597 6.5921 4.0769 6.9004 4.2165 7.1422L6.085 10.3785C3.5186 11.7702 1.8322 14.3995 1.7003 17.4545H22.2997C22.1678 14.3995 20.4814 11.7702 17.915 10.3785Z"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

        <WhyChooseLushWare/>

        <div className="max-w-7xl mx-auto mt-16">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-4">
              <span className="px-3 py-1 text-[11px] font-bold tracking-[0.35em] text-emerald-700 bg-emerald-50 rounded-full uppercase">
                Mobile Solutions
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4 hero-line">
              Mobile Application Development
            </h2>

            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Build powerful, user-friendly mobile applications for Android and iOS that
              engage users and drive business growth.
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

export default MobileApps;
