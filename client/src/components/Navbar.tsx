import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for a modern "Glass" feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutionLinks = [
    { name: "Customer Relationship Management Software", to: "/solutions/crm" },
    { name: "AI Agents & AI Chatbots", to: "/solutions/ai-agents" },
    { name: "Business Process Management Software", to: "/solutions/bpm" },
    { name: "Business & Corporate Websites", to: "/solutions/websites" },
    { name: "Mobile Apps", to: "/solutions/mobile-apps" },
    { name: "Travel Solutions", to: "/solutions" },
  ];

  const links = [
    { name: "Our Work", to: "/work" },
    { name: "Project Base", to: "/project-base" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white backdrop-blur-md py-3 shadow-md" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-8xl md:px-22 px-9 mx-auto  flex justify-between items-center">
        
        {/* Logo Section */}
        <Link 
          to="/" 
          className="flex items-center group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative h-12 w-15  rounded-xl  mr-3 ">
            <img
              src="/logo.jpeg"
              alt="LushWare ORG"
              className="h-full w-full object-cover  "
            />
          </div>
          <div className="flex flex-col ">
            <span className="text-2xl font-black tracking-wider text-stone-700 leading-none">
              LUSH<span style={{ WebkitTextStroke: '0.5px #1c1917', color: 'transparent' }}>WARE</span>
            </span>
            <span className="text-[8.5px] tracking-tighter text-emerald-600 font-bold uppercase leading-none mt-0.5">
              Hoisting Your Life to The Next Level
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            <div className="relative group">
              <div
                className={`text-md font-medium cursor-pointer tracking-wide transition-all duration-300 hover:text-emerald-900 flex items-center gap-2 relative ${
                  location.pathname.startsWith("/solutions") ? "text-emerald-900" : "text-stone-800"
                }`}
              >
                Our Solutions
                {/* Elegant Chevron Icon */}
                <svg 
                  className={`w-3 h-3 transition-transform duration-300 group-hover:rotate-180 ${
                    location.pathname.startsWith("/solutions") ? "text-emerald-900" : "text-stone-800"
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>

                <span className={`absolute -bottom-1 left-0 h-0.5  bg-emerald-500 transition-all duration-300 ${
                  location.pathname.startsWith("/solutions") ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </div>
              <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 translate-y-8">
                <div className="w-[840px] overflow-hidden rounded-b-2xl bg-white border border-stone-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)]">
                  

                  <div className="p-16">


                    {/* Grid Layout for 10-12 Categories */}
                    <nav className="grid grid-cols-2 gap-x-16 gap-y-10">
                      {solutionLinks.map((item, index) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="group/item relative flex flex-col space-y-2 border-l border-transparent pl-6 transition-all duration-500 hover:border-stone-900"
                        >
                          {/* Index Numbering - creates a 'Catalogue' feel */}
                          <span className="text-[10px] font-medium text-stone-600 uppercase tracking-widest group-hover/item:text-stone-900 transition-colors duration-500">
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <div className="flex items-center justify-between">
                            <span className={` text-[17px] tracking-wide font-medium transition-all duration-700 ${
                              location.pathname === item.to 
                                ? "text-stone-950 underline underline-offset-8 decoration-emerald-700" 
                                : "text-stone-900 group-hover/item:text-stone-950 group-hover/item:translate-x-1"
                            }`}>
                              {item.name}
                            </span>
                            
                            {/* Minimalist leaf-style or chevron icon */}
                            <svg 
                              className="w-4 h-4 text-stone-800 opacity-0 -translate-x-4 transition-all duration-500 group-hover/item:opacity-100 group-hover/item:translate-x-0" 
                              fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                              <path  strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                          

                        </Link>
                      ))}
                    </nav>


                  </div>
                </div>
              </div>
            </div>

            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                className={`text-md font-medium tracking-wide transition-all duration-300 hover:text-emerald-600 relative group ${
                  location.pathname === link.to ? "text-emerald-700" : "text-stone-800"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
                  location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Call to Action Button */}
          <Link 
            to="/contact" 
            className="relative px-5 py-2 overflow-hidden group  hover:scale-105 bg-stone-900  rounded-full transition-all duration-500 hover:border-emerald-600"
          >
            {/* The color layer that slides in */}
            <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
            
            {/* The Text */}
            <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase  text-white transition-colors duration-500 ">
              Free Tech Consultation
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      {open && (
        <div 
          className="fixed inset-0 z-50 md:hidden" 
          onClick={() => setOpen(false)}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
          
          {/* Sidebar */}
          <div 
            className={`absolute top-0 right-0 w-[82%] max-w-sm h-screen rounded-bl-3xl bg-white shadow-2xl transform transition-all duration-500 ease-out ${
              open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full border border-stone-200 flex items-center justify-center">
                    <img
                      src="/logo.jpeg"
                      alt="LushWare ORG"
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-tight text-stone-800">LUSHWARE</span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 rounded-full border border-stone-200 text-stone-700 hover:text-emerald-700 hover:border-emerald-200 transition-colors"
                  aria-label="Close menu"
                >
                  <span className="block text-lg leading-none">×</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col px-4 py-6 space-y-6">
                <button
                  onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                  className="group px-4 py-3 text-stone-700 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-xl transition-all duration-300 font-semibold relative overflow-hidden text-left"
                  style={{ animation: "slideIn 0.5s ease-out 0s backwards" }}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    <span className="flex items-center">Our Solutions</span>
                    <span className="text-emerald-600 transition-transform duration-300">
                      {mobileSolutionsOpen ? "−" : "+"}
                    </span>
                  </span>
                </button>

                {mobileSolutionsOpen && (
                  <div className="flex flex-col gap-2 pl-4">
                    {solutionLinks.map((item, i) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => {
                          setOpen(false);
                          setMobileSolutionsOpen(false);
                        }}
                        className="px-4 py-2 text-sm font-semibold text-stone-700 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-xl transition-all duration-300"
                        style={{
                          animation: `slideIn 0.5s ease-out ${0.1 + i * 0.08}s backwards`
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}

                {links.map((link, i) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => {
                      setOpen(false);
                      setMobileSolutionsOpen(false);
                    }}
                    className="group px-4 py-3 text-stone-700 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-xl transition-all duration-300 font-semibold relative overflow-hidden"
                    style={{ 
                      animation: `slideIn 0.5s ease-out ${0.2 + i * 0.1}s backwards`
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      <span className="flex items-center">
                        {link.name}
                      </span>
                      <span className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </span>
                  </Link>
                ))}
              </div>

              {/* Consultation Button */}
              <div className="mt-auto px-6 pb-6">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="group relative w-full overflow-hidden bg-stone-900 text-white rounded-full px-6 py-4 text-center font-bold tracking-wide transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.35)] inline-flex items-center justify-center"
                >
                  <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                  <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase text-white leading-none">Free Consultation</span>
                </Link>
              </div>
            </div>

            <style>{`
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateX(20px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
            `}</style>
          </div>
        </div>
      )}
    </nav>
  );
}