import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for a modern "Glass" feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Our Solutions", to: "/solutions" },
    { name: "Our Work", to: "/work" },
    { name: "Project Base", to: "/project-base" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md py-3 shadow-sm" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link 
          to="/" 
          className="flex items-center group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative h-12 w-14  rounded-xl  mr-3 ">
            <img
              src="/logo.jpeg"
              alt="LushWare ORG"
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col ">
            <span className="text-xl font-black tracking-tighter text-stone-700 leading-none">
              LUSH<span style={{ WebkitTextStroke: '0.5px #1c1917', color: 'transparent' }}>WARE</span>
            </span>
            <span className="text-[8px] tracking-[0.4em] text-emerald-600 font-bold uppercase leading-none mt-1">
              Organization
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                className={`text-md font-medium tracking-wide transition-all duration-300 hover:text-emerald-600 relative group ${
                  location.pathname === link.to ? "text-emerald-700" : "text-stone-600"
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
            className="relative px-5 py-2 overflow-hidden group  bg-stone-900  rounded-full transition-all duration-500 hover:border-emerald-600"
          >
            {/* The color layer that slides in */}
            <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
            
            {/* The Text */}
            <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase  text-white transition-colors duration-500">
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
                {links.map((link, i) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="group px-4 py-3 text-stone-700 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-xl transition-all duration-300 font-semibold relative overflow-hidden"
                    style={{ 
                      animation: `slideIn 0.5s ease-out ${i * 0.1}s backwards`
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