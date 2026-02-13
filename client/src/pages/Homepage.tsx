import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import WorkCard, { type WorkProject } from "../components/WorkCard";
import ValueCard from "../components/ValueCard";
import GlobalPresence from "@/components/GlobalPresence";
import HeroSection from "@/components/HeroSection";
import JoinSection from "@/components/JoinSection";

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
    <div className="text-gray-800">

      {/* Hero Section */}
      <HeroSection />


      {/* Solutions Section */}
      <section className="relative px-10 py-24 bg-white overflow-hidden font-sans">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT SIDE: CRM TEXT CONTENT */}
            <div className="lg:col-span-6">
              <div className="space-y-10">

                {/* Badge */}
                <div className="flex items-center gap-2 mb-4 md:pl-2">
                  <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                    Customer Relationship Management
                  </div>
                </div>

                

                {/* Headline */}
                <h2 className="text-5xl md:text-7xl font-semibold text-stone-950 leading-[1.1] tracking-tight hero-line">
                  Transforming <br />
                  <span className=" text-emerald-600">
                    Client Relationships
                  </span>
                </h2>

                {/* Description */}
                <div className="space-y-6 text-slate-900 text-xl font-medium leading-relaxed max-w-xl lg:max-w-2xl hero-line">
                  <p>
                    Our Customer Relationship Management platform centralizes 
                    <span className="text-emerald-800 font-semibold"> client data</span>, 
                    interactions, and business intelligence into a single, secure ecosystem.
                  </p>

                  <p>
                    From first contact to long-term partnerships, we empower teams to 
                    build trust, improve engagement, and drive measurable growth through 
                    actionable insights.
                  </p>

                  {/* Quote */}
                  <div className="relative py-2 hero-line ">
                    <div className="absolute left-0 top-0 h-full w-[1px] bg-emerald-400"></div>
                    <p className="pl-8 serif text-slate-800 text-lg">
                      “One unified source of truth for every client, every interaction,
                      and every opportunity.”
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 flex items-center justify-center lg:justify-start gap-8">
                  {/* Primary Button → CRM Route */}
                  <Link
                    to="/solutions/crm"
                    className="px-10 py-5 bg-emerald-950 text-white rounded-full font-semibold text-xs tracking-[0.2em] uppercase hover:bg-emerald-600 transition-all duration-700 shadow-[20px_20px_60px_rgba(6,78,59,0.1)]"
                    style={{ color: "#ffffff" }}
                  >
                    Explore CRM Solution
                  </Link>


                </div>

              </div>
            </div>


            {/* RIGHT SIDE: THE "REAL" PHONE MOCKUP */}
            <div className="lg:col-span-6 flex justify-center lg:justify-center relative">
              <div className="relative">
                
                {/* Subtle Shadow & Glow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/20 blur-[50px] rounded-[100%]" />
                
                {/* PHYSICAL PHONE BODY (The Chassis) */}
                <div className="relative w-[300px] h-[610px] bg-[#d1d5db] rounded-[3rem] p-[3px] shadow-[inset_0_0_2px_2px_rgba(255,255,255,0.8),0_25px_50px_-12px_rgba(0,0,0,0.25)] border-b-[4px] border-r-[2px] border-slate-400">
                  
                  {/* Inner Black Bezel */}
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[2.8rem] p-[10px] relative overflow-hidden">
                    
                    {/* THE GLASS REFLECTION (Makes it look real) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent z-20 pointer-events-none" />

                    {/* Dynamic Island / Notch Area */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-end px-4 gap-2">
                      <div className="w-1 h-1 bg-blue-900/30 rounded-full border border-blue-400/20" /> {/* Camera Lens detail */}
                      <div className="w-2 h-2 bg-slate-900 rounded-full border border-slate-800" />
                    </div>

                    {/* THE SCREEN CONTENT */}
                    <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
                      
                      {/* App Header */}
                      <div className="bg-emerald-700 p-8 pt-14 text-white">
                        <p className="text-[10px] uppercase tracking-widest opacity-90 mb-1">Secure Dashboard</p>
                        <h4 className="text-xl font-serif">CRM Enterprise</h4>
                      </div>

                        {/* App Content */}
                        <div className="p-5 space-y-6">
                          {/* Search Bar Mockup */}
                          <div className="relative">
                            <div className="h-9 w-full bg-slate-50 border border-slate-200 rounded-xl flex items-center px-3 gap-2">
                              <div className="w-3 h-3 rounded-full border-2 border-slate-300" />
                              <span className="text-[10px] text-slate-400 font-medium">Search clients...</span>
                            </div>
                          </div>

                          {/* KPI Stats Cards */}
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

                          {/* Recent Interactions / Lead List */}
                          <div className="space-y-4">
                            <h5 className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-900 border-b border-slate-100 pb-2">
                              Recent Leads
                            </h5>
                            
                            <div className="space-y-3">
                              {[
                                { name: "Alexander Sterling", company: "Mayfair Holdings", status: "Negotiation" },
                                { name: "Sophia Chen", company: "Aura Tech Ltd", status: "Follow up" },
                                { name: "Julian Rossi", company: "Global Logistics", status: "Qualified" }
                              ].map((lead, i) => (
                                <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group">
                                  <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-[10px] text-white font-bold">
                                    {lead.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[11px] font-bold text-slate-900 truncate">{lead.name}</p>
                                    <p className="text-[9px] text-slate-400 truncate">{lead.company}</p>
                                  </div>
                                  <div className="text-right">
                                    <div className={`text-[8px] px-2 py-0.5 rounded-full inline-block ${
                                      i === 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                                    }`}>
                                      {lead.status}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Bottom Action Button */}
                          <button className="w-full py-3 bg-emerald-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-emerald-900/20">
                            + Add New Entry
                          </button>
                        </div>

                      {/* Home Indicator */}
                      <div className="mt-auto pb-2 flex justify-center">
                        <div className="w-20 h-1 bg-slate-200 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Hardware Buttons */}
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

      {/* Our Story Section */}
      <section data-reveal className="relative px-10 md:px-0 py-12 md:py-20 overflow-hidden bg-[#094a3b]">
        
        {/* Creative Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* 1. Primary Emerald Wash - The "Royal" Glow (Softened for Dark Mode) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

          {/* 2. Carbon Fibre Texture Overlay - Slightly more visible on dark backgrounds */}
          <div className="absolute inset-0 opacity-[0.9] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          {/* 4. Top Border Fade - Now using a sharper, more luxurious gradient */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
            <div className="text-left space-y-6">
              <div className="inline-flex items-center group cursor-default">
                <div className="relative flex items-center">
                {/* Adjusted Ring Colors for Dark Mode */}
\                <div className="w-6 h-6 rounded-full border border-emerald-300 flex items-center justify-center bg-emerald-950 group-hover:bg-emerald-900 transition-all">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
\                  
                  <div className="w-6 h-px bg-emerald-400 group-hover:w-10 group-hover:bg-emerald-500 transition-all duration-500" />
                </div>

                <div className="pl-4 flex flex-col justify-center">
                  <h4 className="text-[14px] font-bold text-emerald-50 uppercase tracking-wider flex items-center gap-2">
                    Our Story
                    <svg 
                      className="w-3 h-3 text-emerald-200 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                    </svg>
                  </h4>
                </div>
              </div>

              {/* Headline with a White-to-Emerald gradient */}
              <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                The Vision Behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100">
                  LushWare ORG.
                </span>
              </h2>

              <div className="pt-10 flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-px h-10 bg-gradient-to-b from-emerald-400 to-transparent" />
                </div>
                <div className="space-y-1">
                  <p className="text-[12px] font-bold text-emerald-100 uppercase tracking-[0.2em]">The Journey Continues</p>
                  <p className="text-md text-emerald-100  font-normal">Evolving the standard of digital simplicity since 2020.</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              {/* Deep Emerald Glow */}
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Card: Darkened background with Emerald border */}
              <div className="relative bg-[#064e3b]/40 backdrop-blur-xl border border-emerald-200 p-8 md:p-12 rounded-3xl shadow-2xl">
                <span className="absolute -top-8 -left-2 text-9xl text-emerald-200 font-serif select-none">“</span>
                
                <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                  At <span className="font-semibold text-white">LushWare ORG</span>, we design software that goes beyond solving problems—
                  it <span className="text-emerald-400 font-medium italic">transforms</span> how people experience technology. 
                  Our focus is on crafting stable, scalable solutions that empower the 
                  <span className="relative inline-block px-1 ml-1">
                    <span className="relative z-10 text-white font-medium">modern global community</span>
                    {/* Highlight bar: Dark Emerald green glow */}
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-500/20 -rotate-1" />
                  </span>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>




      <GlobalPresence />


      {/* Services */}
      <section data-reveal className=" bg-[#ffffff] px-6 py-20  relative">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-24">
            
            <div className="lg:w-1/3 lg:sticky lg:top-48 h-fit">
              <div className="flex flex-col pl-4 md:pl-0  ">
                <div className="flex items-center gap-2 mb-4 md:pl-2">
                  <div className="px-2 py-0.5 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                    Our Services
                  </div>
                </div>

                <h2 className="text-5xl md:text-7xl  font-semibold text-slate-900 tracking-tighter leading-[0.95] mb-8">
                  Our 
                  Specialized Software <br /> 
                  <span className="relative">
                    <span className="relative z-10 text-emerald-600">Solutions.</span>
                    <svg className="absolute -bottom-1 left-0 w-full h-0.5 text-emerald-300" viewBox="0 0 100 2" preserveAspectRatio="none">
                      <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </h2>
              <div className="mt-4">
                <button
                  onClick={() => navigate("/solutions")}
                  className="group relative cursor-pointer overflow-hidden px-10 py-4 rounded-full bg-stone-900 transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]"
                >
                  <span className="absolute inset-0 w-0 h-full bg-emerald-700 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="text-sm font-medium tracking-wide text-white transition-colors duration-500">
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
      <JoinSection />

      {/* Why Choose Us */}
      <section data-reveal className="bg-[#ffffff] px-6 pb-20 pt-10 relative overflow-hidden ">
        
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
                <p className="text-slate-700 font-medium text-lg leading-relaxed border-l-2 border-emerald-500/30 pl-6 py-2">
                  We prioritize stability and security at every layer, building 
                  software architectures that remain 
                  <span className="text-emerald-900 font-bold"> resilient as your business grows.</span>
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
              <ValueCard
                key={idx}
                num={card.num}
                title={card.title}
                desc={card.desc}
                link={card.link}
                offset={card.offset}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section data-reveal className="  bg-[#ffffff] px-6 py-8  relative ">
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Tech-Spec Header */}
          <div className="max-w-7xl mx-auto px-6 mb-28">
            {/* The "Blueprint" Grid Header */}
            <div className="border-t-2 border-slate-900 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">       
                {/* 1. Label Column */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                      Our Software Products
                    </div>
                  </div>
                </div>
                {/* 2. Massive Headline Column */}
                <div className="md:col-span-3">
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-[-0.06em] text-slate-900 leading-[0.8] ">
                    Systems We’re <br />
                    <span className="text-emerald-600">Building</span> Up.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* The Technical Grid */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
              {featuredProjects.map((project, index) => (
                <WorkCard
                  key={project.name}
                  project={project}
                  index={index}
                  ctaAlign="start"
                  ctaClassName="mt-8"
                />
              ))}
            </div>
          </div>

          {/* The Footer Bar */}
          <div className="mt-24 mb-2 flex flex-col items-center">
            <div className="text-center">
              {/* Call to Action Button */}
              <button 
                onClick={() => navigate("/work")}
                className="relative px-8 py-4 overflow-hidden group bg-stone-900 rounded-full transition-all duration-500 hover:border-emerald-600 flex items-center gap-2 justify-center"
              >
                {/* The color layer that slides in */}
                <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                
                {/* The Text */}
                <span className="relative z-10 text-[13px] font-bold tracking-[0.2em] uppercase text-white transition-colors duration-500">
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
      <section data-reveal className=" relative w-full bg-[#ffffff] py-24 sm:py-32 overflow-hidden">
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



