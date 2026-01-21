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
        <Link to="/" className="flex items-center group">
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

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[-1] transition-transform duration-700 ease-in-out md:hidden ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
        {links
          .concat({ name: "Free Consultation", to: "/contact" })
          .map((link, i) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-3xl font-light tracking-widest text-stone-800 hover:text-emerald-600 transition-colors
                ${link.name === "Free Consultation" ? "border-2 border-emerald-400 px-4 py-2 rounded-full  shadow-[0_0_20px_rgba(16,185,129,0.35)]  hover:shadow-[0_0_35px_rgba(16,185,129,0.55)]" : ""}`}
              style={{ transitionDelay: `${i * 100}s` }}
            >
              {link.name}
            </Link>
          ))}
      </div>

      </div>
    </nav>
  );
}