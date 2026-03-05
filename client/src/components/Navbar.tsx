import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
      setMobileSolutionsOpen(false);
    }, 0);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
          ? "bg-white backdrop-blur-md py-3 shadow-lg shadow-emerald-200/30"
          : "bg-white py-4 lg:py-5"
      }`}
    >
      <div className="max-w-8xl px-5 sm:px-8 lg:px-14 xl:px-22 mx-auto flex lg:grid lg:grid-cols-3 justify-between items-center gap-4">

        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link
            to="/"
            className="flex items-center group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative h-10 w-12 sm:h-11 sm:w-14 lg:h-12 lg:w-18 rounded-xl mr-0 md:mr-2">
              <img
                src="/logo.jpeg"
                alt="LushWare ORG"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden sm:flex flex-col space-y-0.5 md:space-y-1">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-stone-700 leading-none">
                LUSH
                <span
                  style={{
                    WebkitTextStroke: "1px #1c1917",
                    color: "transparent",
                  }}
                >
                  WARE
                </span>
              </span>
              <span className="text-[7px] sm:text-[8px] lg:text-[10px] tracking-tight lg:tracking-tighter text-emerald-600 font-bold uppercase leading-none mt-0.5">
                Hoisting Your Life to The Next Level
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation — hidden on mobile & tablet, shown lg+ */}
        <div className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-11">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <div
              className={`flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors relative cursor-pointer ${
                location.pathname.startsWith("/solutions")
                  ? "text-emerald-900"
                  : "text-stone-800 hover:text-emerald-700"
              }`}
            >
              <span>Our Solutions</span>
              <svg
                className={`w-3 h-3 transition-transform duration-300 group-hover:rotate-180 ${
                  location.pathname.startsWith("/solutions")
                    ? "text-emerald-900"
                    : "text-stone-800"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
                  location.pathname.startsWith("/solutions") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </div>

            {/* Dropdown Panel */}
            <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 translate-y-8 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
              <div className="w-175 xl:w-210 overflow-hidden rounded-b-2xl bg-white border border-stone-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)]">
                <div className="p-10 xl:p-16">
                  <nav className="grid grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-8 xl:gap-y-10">
                    {solutionLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="group/item relative flex flex-col border-l border-transparent pl-5 xl:pl-6 transition-all duration-500 hover:border-stone-900"
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[15px] xl:text-[17px] tracking-wide font-medium transition-all duration-700 ${
                              location.pathname === item.to
                                ? "text-stone-950 underline underline-offset-8 decoration-emerald-700"
                                : "text-stone-900 group-hover/item:text-stone-950 group-hover/item:translate-x-1"
                            }`}
                          >
                            {item.name}
                          </span>
                          <svg
                            className="w-4 h-4 text-stone-800 opacity-0 -translate-x-4 transition-all duration-500 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
              className={`text-sm font-bold tracking-widest uppercase hover:text-emerald-700 transition-colors relative group ${
                location.pathname === link.to ? "text-emerald-700" : "text-stone-800"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
                  location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Right: CTA — hidden on mobile & tablet */}
        <div className="hidden lg:flex justify-end">
          <Link
            to="/contact"
            className="relative px-5 py-2 overflow-hidden group hover:scale-105 bg-stone-900 rounded-full transition-all duration-500"
          >
            <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
            <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white transition-colors duration-500">
              Free Tech Consultation
            </span>
          </Link>
        </div>

        {/* Tablet CTA (md only: between sm and lg) */}
        <div className="hidden md:flex lg:hidden items-center gap-3 ml-auto">
          <Link
            to="/contact"
            className="relative px-4 py-2 overflow-hidden group bg-stone-900 rounded-full transition-all duration-500"
          >
            <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
            <span className="relative z-10 text-[9px] font-bold tracking-[0.18em] uppercase text-white whitespace-nowrap">
              Free Consultation
            </span>
          </Link>
        </div>

        {/* Hamburger — shown on mobile & tablet (hidden lg+) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-lg transition-colors ml-1"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2.25" : ""}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.25" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile / Tablet Sidebar Menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 h-screen lg:hidden"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xl"></div>

          {/* Sidebar — wider on tablet */}
          <div
            className="absolute top-0 right-0 h-full w-[82%] max-w-xs sm:max-w-sm md:max-w-md bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">

              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-20 pl-1 flex items-center justify-center">
                    <img src="/logo.jpeg" alt="LushWare ORG" className="h-14 w-14 object-contain" />
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 rounded-full border border-stone-200 text-stone-700 hover:text-emerald-700 hover:border-emerald-200 transition-colors flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <span className="block text-xl leading-none">×</span>
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col px-4 py-6 space-y-2">
                {/* Solutions accordion */}
                <button
                  onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                  className="group px-4 py-3 text-stone-700 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-xl transition-all duration-300 font-semibold text-left"
                  style={{ animation: "slideIn 0.4s ease-out 0s backwards" }}
                >
                  <span className="flex items-center justify-between">
                    <span>Our Solutions</span>
                    <span className={`text-emerald-600 transition-transform duration-300 text-lg leading-none ${mobileSolutionsOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </span>
                </button>

                {mobileSolutionsOpen && (
                  <div className="flex flex-col gap-1 pl-4 pb-2">
                    {solutionLinks.map((item, i) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }}
                        className="px-4 py-2.5 text-sm font-medium text-stone-600 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-xl transition-all duration-300"
                        style={{ animation: `slideIn 0.4s ease-out ${0.05 + i * 0.06}s backwards` }}
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
                    onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }}
                    className="group px-4 py-3 text-stone-700 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-xl transition-all duration-300 font-semibold"
                    style={{ animation: `slideIn 0.4s ease-out ${0.15 + i * 0.1}s backwards` }}
                  >
                    <span className="flex items-center justify-between">
                      <span>{link.name}</span>
                      <span className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </span>
                  </Link>
                ))}
              </div>

              {/* Consultation CTA */}
              <div className="mt-auto px-6 pb-8 pt-4">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="group relative w-full overflow-hidden bg-stone-900 text-white rounded-full px-6 py-4 font-bold tracking-wide transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.35)] inline-flex items-center justify-center"
                >
                  <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                  <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase text-white leading-none">
                    Free Consultation
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
      `}</style>
    </nav>
  );
}