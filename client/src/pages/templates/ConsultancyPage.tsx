import { useState, useEffect, useRef } from "react";

// ─── Intersection Observer Hook ───────────────────────────────────────────────
const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView] as const;
};

// ─── FadeIn Component ─────────────────────────────────────────────────────────
type Direction = "up" | "down" | "left" | "right" | "none";
const FadeIn = ({
  children,
  delay = 0,
  className = "",
  direction = "up" as Direction,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
}) => {
  const [ref, inView] = useInView();
  const transforms: Record<Direction, string> = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : transforms[direction],
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// ─── Animated Counter ─────────────────────────────────────────────────────────
const Counter = ({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};



// ─── Main Component ───────────────────────────────────────────────────────────
export default function GrowthCrest() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/templates/consultancy/slide1.jpg",
    "/templates/consultancy/slide2.jpg",
    "/templates/consultancy/slide3.jpg",
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div
      className="text-[#1a1c1e] overflow-x-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #d97706; }
        @keyframes pulse2 { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideIn { from{transform:translateX(100%)} to{transform:translateX(0)} }
        @keyframes kenBurns { from{transform:scale(1)} to{transform:scale(1.1)} }
        .hero-t1 { animation: fadeUp 1.2s ease forwards; }
        .hero-t2 { animation: fadeUp 1.2s ease 0.25s both; }
        .hero-t3 { animation: fadeUp 1.2s ease 0.5s both; }
        .hero-t4 { animation: fadeUp 1.2s ease 0.75s both; }
        .hero-slider-img { animation: kenBurns 20s ease-out forwards; }
        .img-zoom img { transition: transform 1.2s ease, filter 1.2s ease; }
        .img-zoom:hover img { transform: scale(1.06); filter: grayscale(0%) !important; }
        .team-card:hover .team-overlay { opacity: 1 !important; }
        .team-card:hover .team-img { transform: scale(1.05); }
        .team-img { transition: transform 0.8s ease; }
        .process-item:hover .proc-dot { background: #d97706 !important; transform: scale(1.3); }
        .process-item:hover .proc-title { color: #d97706; }
        .card-dark:hover { background: #0a0c0e !important; }
        .card-dark:hover .card-t { color: white !important; }
        .card-dark:hover .card-d { color: #94a3b8 !important; }
        .testimonial-card:hover { border-color: #d97706 !important; transform: translateY(-4px); }
        .insight-card:hover { transform: translateY(-8px); box-shadow: 0 32px 64px rgba(0,0,0,0.1); }
        input:focus, textarea:focus { border-color: #d97706 !important; }
        .footer-link:hover { color: #fb923c; padding-left: 6px; }
        .btn-cta:hover { background: #d97706 !important; letter-spacing: 0.25em !important; }
        @media (max-width: 768px) {
          .hide-md { display: none !important; }
          .hero-h1 { font-size: 52px !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
          .mobile-ham { display: flex !important; }
          .mobile-menu { animation: slideIn 0.3s ease; }
        }
      `}</style>

      {/* NAVIGATION  */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-3 md:py-4"
            : "bg-white/5 backdrop-blur-md py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex flex-col items-start bg-transparent border-0 cursor-pointer p-0 group"
          >
            <div
              className={`font-black tracking-[0.1em] text-slate-900 leading-none transition-colors duration-300`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(15px, 4vw, 20px)", // ← shrinks gracefully on phones
              }}
            >
              GROWTH
              <span className="text-amber-600 group-hover:text-amber-500">
                CREST
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {(
              ["Services", "Process", "Portfolio", "Team", "Insights"] as const
            ).map((label) => (
              <button
                key={label}
                onClick={() => scrollTo(label.toLowerCase())}
                className={`font-bold tracking-[0.2em] text-slate-800 uppercase bg-transparent border-0 cursor-pointer transition-all hover:text-amber-600 ${
                  scrolled ? "text-[11px]" : "text-[13px]"
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <button
              className="hidden cursor-pointer md:block text-[11px] bg-slate-900 text-white hover:bg-amber-700 font-bold tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              onClick={() => scrollTo("contact")}
            >
              Contact Desk
            </button>

            {/* Mobile Hamburger — fixed transform strings */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 bg-transparent border-0 cursor-pointer p-1"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  scrolled || menuOpen ? "bg-slate-900" : "bg-white"
                }`}
                style={{
                  width: "24px",
                  transform: menuOpen
                    ? "rotate(45deg) translate(4px, 6px)"
                    : "none",
                }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  scrolled || menuOpen ? "bg-slate-900" : "bg-white"
                }`}
                style={{ width: "24px", opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  scrolled || menuOpen ? "bg-slate-900" : "bg-white"
                }`}
                style={{
                  width: "24px",
                  transform: menuOpen
                    ? "rotate(-45deg) translate(4px, -6px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 animate-fadeIn">
            {[
              "Services",
              "Process",
              "Portfolio",
              "Team",
              "Insights",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollTo(item.toLowerCase());
                  setMenuOpen(false);
                }}
                className="w-full text-center py-4 text-[11px] font-bold tracking-[0.3em] uppercase text-slate-700 bg-transparent border-0 hover:text-amber-600 transition-colors cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item}
              </button>
            ))}
            {/* Mobile CTA inside menu */}
            <div className="px-8 pt-4 pb-2">
              <button
                onClick={() => {
                  scrollTo("contact");
                  setMenuOpen(false);
                }}
                className="w-full text-[11px] bg-slate-900 text-white hover:bg-amber-700 font-bold tracking-[0.2em] uppercase px-6 py-4 transition-all duration-300 cursor-pointer border-0"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Contact Desk
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO - LIGHT MODE ROYAL VIBE  */}
      <section
        id="hero"
        className="h-screen flex items-center relative overflow-hidden bg-white"
      >
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: currentSlide === index ? 1 : 0 }}
            >
              <img
                src={slide}
                alt="Excellence"
                className="w-full h-full object-cover md:pl-58"
                style={{
                  filter: "brightness(0.9) contrast(1.1)",
                }}
              />
              {/* Low opacity overlay for mobile only */}
              <div className="absolute inset-0 bg-white/70 md:hidden" />
            </div>
          ))}
        </div>

        {/* The "Royal" White Overlay - Slides in from left — large screens only */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 to-transparent hidden md:block md:w-[75%]" />

        {/* Content Overlay */}
        <div className="max-w-7xl mx-auto mt-16 md:mt-20 w-full relative z-20 px-6 md:px-0">
          <div className="max-w-3xl">
            <h1
              className="font-black leading-[0.85] tracking-wide text-slate-900 mb-12 md:mb-8"
              style={{
                fontSize: "clamp(48px, 8vw, 108px)",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Strategy.
              <br />
              Execution.
              <br />
              <span className="italic text-amber-600 font-semibold">
                Result.
              </span>
            </h1>

            <p
              className="text-slate-800 text-lg md:text-2xl font-black leading-relaxed max-w-xl mb-16 md:mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              GrowthCrest partners with forward-thinking leaders to architect
              their competitive advantage — blending London's financial
              precision with Colombo's engineering excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 items-start sm:items-center">
              <button
                className="text-[12px] font-semibold tracking-[0.3em] uppercase bg-slate-900 text-white px-8 py-5 border-0 cursor-pointer transition-all duration-300 hover:bg-amber-700 shadow-lg shadow-slate-200"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                onClick={() => scrollTo("contact")}
              >
                Begin Your Journey
              </button>
              <button
                className="group flex items-center gap-3 text-[12px] md:pl-0 pl-4 font-bold tracking-[0.3em] uppercase bg-transparent text-slate-900 border-0 cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                onClick={() => scrollTo("portfolio")}
              >
                <span className="border-b-2 border-slate-200 group-hover:border-amber-600 pb-1 transition-all">
                  View Portfolio
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Modern Slider Indicators (Vertical on Right) */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group flex items-center gap-4 bg-transparent border-0 cursor-pointer"
            >
              <span
                className={`text-[10px] font-bold transition-all ${currentSlide === index ? "text-amber-600 opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-100"}`}
              >
                0{index + 1}
              </span>
              <div
                className={`h-px transition-all duration-500 ${currentSlide === index ? "w-12 bg-amber-600" : "w-6 bg-slate-300"}`}
              />
            </button>
          ))}
        </div>
      </section>

      {/*  SERVICES  */}
      <section
        id="services"
        className="bg-white py-16 lg:py-32 px-6 md:px-8 border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center text-center mb-14 lg:mb-24">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 md:w-12 h-px bg-amber-600" />
                <span
                  className="text-[11px] font-bold text-amber-600 tracking-[0.35em] md:tracking-[0.45em] uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Professional Disciplines
                </span>
                <div className="w-8 md:w-12 h-px bg-amber-600" />
              </div>
              <h2
                className="font-bold tracking-tight text-[#0a0c0e] leading-none"
                style={{
                  fontSize: "clamp(36px, 8vw, 64px)", // was fixed 64px
                  letterSpacing: "-1px",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Strategic{" "}
                <span className="text-slate-500 font-light italic">
                  Pillars.
                </span>
              </h2>
              <p
                className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed max-w-lg mt-5 px-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Three integrated disciplines. One unified vision. Designed to
                accelerate your enterprise from where it is to where it must be.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-16 md:gap-24 lg:gap-28">
            {[
              {
                id: "01",
                title: "M&A Advisory & Strategy",
                desc: "We guide senior leadership through the full lifecycle of mergers, acquisitions, and corporate restructuring. From rigorous due diligence to seamless post-merger integration, our advisors have navigated over $2.4B in capital realignment across the London financial market.",
                bullets: [
                  "Transaction Structuring",
                  "Due Diligence",
                  "Post-Merger Integration",
                  "Board-Level Advisory",
                ],
                img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=900&auto=format&fit=crop",
                reverse: false,
              },
              {
                id: "02",
                title: "Digital Engineering Hub",
                desc: "Our Colombo-based engineering collective designs and deploys bespoke technology ecosystems — from AI-driven CRMs to enterprise BPM platforms. We bridge executive strategy with technical execution, delivering systems that scale.",
                bullets: [
                  "Custom CRM & BPM Systems",
                  "AI & Data Architecture",
                  "Cloud Infrastructure",
                  "Tech-Enabled Transformation",
                ],
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
                reverse: true,
              },
              {
                id: "03",
                title: "Tax & Financial Architecture",
                desc: "Operating across jurisdictions requires precision. Our tax and financial architects design compliant, efficient structures that protect your capital and position your enterprise for sustainable cross-border growth.",
                bullets: [
                  "International Tax Planning",
                  "Regulatory Compliance",
                  "Financial Restructuring",
                  "Multi-Jurisdiction Advisory",
                ],
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop",
                reverse: false,
              },
            ].map((svc, i) => (
              <FadeIn
                key={i}
                delay={0.1}
                direction={svc.reverse ? "right" : "left"}
              >
                {/*
            Mobile:  single column, image always on top
            md:      2-col equal, reverse respected
            lg:      original 3fr/2fr layout
          */}
                <div
                  className={`
              grid grid-cols-1 gap-8
              md:grid-cols-2 md:gap-12 md:items-center
              lg:gap-20
            `}
                  style={{
                    // Only apply original asymmetric columns on lg+
                    gridTemplateColumns: undefined, // overridden by Tailwind above
                  }}
                >
                  {/* On mobile: image always first (top). On md+: respect reverse. */}
                  <div
                    className={`relative overflow-hidden img-zoom ${
                      svc.reverse ? "md:order-2" : "md:order-1"
                    } order-1`}
                    style={{ aspectRatio: "16/10" }}
                  >
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: "grayscale(20%)",
                        transition: "all 0.8s ease",
                      }}
                    />
                    <div
                      className="absolute top-4 bg-amber-600 px-4 py-2"
                      style={{ left: 16 }} // always left on mobile; md can override via inline
                    >
                      <span
                        className="font-black text-2xl md:text-3xl"
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {svc.id}
                      </span>
                    </div>
                  </div>

                  {/* Text content */}
                  <div
                    className={`${svc.reverse ? "md:order-1" : "md:order-2"} order-2`}
                  >
                    <ServiceContent svc={svc} scrollTo={scrollTo} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  INDUSTRIES  */}
      <section className="bg-slate-50 py-16 lg:py-32 px-6 md:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-20 gap-6 lg:gap-8">
            <FadeIn direction="left">
              <div>
                <span
                  className="text-[11px] font-bold text-amber-600 tracking-[0.45em] uppercase block mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Sectoral Expertise
                </span>
                <h2
                  className="font-bold tracking-tight text-[#0a0c0e] leading-none"
                  style={{
                    fontSize: "clamp(36px, 7vw, 56px)",
                    letterSpacing: "-1.5px",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Industries{" "}
                  <span className="text-slate-500 font-light italic">
                    We Influence.
                  </span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              {/* text-left on mobile, text-right on lg */}
              <div className="lg:text-right max-w-xs">
                <p
                  className="text-slate-800 text-lg md:text-xl font-light leading-relaxed mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Deep domain expertise across the sectors shaping tomorrow's
                  global economy.
                </p>
                <button
                  className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#0a0c0e] bg-transparent border-0 border-b-2 border-amber-600 pb-1 cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Download Firm Profile
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Cards grid: 1 → 2 → 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                name: "Financial Services",
                tag: "Optimising Capital",
                desc: "Navigating volatility, M&A complexity, and regulatory shifts for London-based institutions.",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
              },
              {
                name: "Public Sector",
                tag: "Building Resilience",
                desc: "Digital infrastructure and strategic foresight for government bodies and municipalities.",
                img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600&auto=format&fit=crop",
              },
              {
                name: "Technology & Media",
                tag: "Scaling Innovation",
                desc: "Data-driven growth engineering for scale-ups and enterprise tech across UK and Asian hubs.",
                img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
              },
              {
                name: "Energy & Utilities",
                tag: "Engineering Sustainability",
                desc: "Operational transformation and strategic roadmaps for a sustainable energy transition.",
                img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
              },
            ].map((ind, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="insight-card cursor-pointer bg-white border border-slate-100 overflow-hidden transition-all duration-500">
                  <div
                    className="img-zoom overflow-hidden relative ac"
                    style={{
                      // Shorter on mobile (landscape-ish), tall portrait on sm+
                      aspectRatio: "3/4",
                    }}
                  >
                    {/* On sm+ restore the tall 3/4 portrait */}
                    <style>{`.portrait-img { aspect-ratio: 3/4; } @media (max-width: 639px) { .portrait-img { aspect-ratio: 4/3; } }`}</style>
                    <img
                      src={ind.img}
                      alt={ind.name}
                      className="w-full h-full object-cover"
                      style={{
                        filter: "grayscale(20%)",
                        transition: "all 0.8s ease",
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,12,14,0.55) 0%, transparent 50%)",
                      }}
                    />
                    <div
                      className="absolute top-4 left-4 text-4xl md:text-5xl font-semibold"
                      style={{
                        color: "rgba(255,255,255,0.9)",
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      0{i + 1}
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <span
                      className="text-[11px] font-bold text-amber-600 tracking-[0.15em] uppercase block mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {ind.tag}
                    </span>
                    <h3
                      className="text-xl md:text-2xl font-bold text-[#0a0c0e] border-b border-slate-100 pb-2 mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {ind.name}
                    </h3>
                    <p
                      className="text-slate-600 text-base md:text-lg font-semibold leading-relaxed mb-4"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {ind.desc}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-0.5 h-4 bg-amber-600" />
                      <span
                        className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#0a0c0e]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Case Study
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  PROCESS  */}
      <section
        id="process"
        className="bg-[#0a0c0e] py-16 lg:py-32 px-6 md:px-8 relative overflow-hidden"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-12 lg:mb-20">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-8 md:w-10 h-px bg-amber-600" />
                <span
                  className="text-[11px] font-bold text-amber-600 tracking-[0.45em] uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Our Methodology
                </span>
                <div className="w-8 md:w-10 h-px bg-amber-600" />
              </div>
              <h2
                className="font-bold text-white tracking-tight leading-none"
                style={{
                  fontSize: "clamp(36px, 8vw, 64px)",
                  letterSpacing: "-2px",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                How We{" "}
                <span className="text-white/80 font-light italic">
                  Deliver.
                </span>
              </h2>
              <p
                className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-md mx-auto mt-5 px-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                A proven, disciplined framework that transforms complex
                challenges into measurable competitive advantage.
              </p>
            </div>
          </FadeIn>

          {/* Steps — mobile: vertical list | lg: horizontal 5-col */}
          <div className="relative">
            {/* Horizontal connector — desktop only */}
            <div
              className="absolute top-8 pointer-events-none h-px hidden lg:block"
              style={{
                left: "10%",
                right: "10%",
                background:
                  "linear-gradient(to right, transparent, #d97706, #d97706, #d97706, transparent)",
              }}
            />

            {/* Vertical connector — mobile only */}
            <div
              className="absolute left-8 top-8 bottom-8 w-px lg:hidden pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #d97706, #d97706, #d97706, transparent)",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-0">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  desc: "Deep-dive diagnostics and stakeholder interviews to map your current state, goals, and constraints.",
                },
                {
                  num: "02",
                  title: "Strategy Design",
                  desc: "Bespoke strategic architecture crafted by senior advisors using our proprietary Crest-Framework.",
                },
                {
                  num: "03",
                  title: "Blueprint",
                  desc: "Detailed operational and financial roadmaps with clear milestones and accountability structures.",
                },
                {
                  num: "04",
                  title: "Execution",
                  desc: "Hands-on implementation led by our London and Colombo teams working in close partnership.",
                },
                {
                  num: "05",
                  title: "Elevation",
                  desc: "Continuous performance reviews and strategic recalibrations to sustain and maximise your growth.",
                },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  {/*
              Mobile:  flex-row — dot on left, text on right
              lg:      flex-col centered (original layout)
            */}
                  <div className="process-item flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center pl-4 lg:pl-0 lg:px-4 cursor-default gap-5 lg:gap-0">
                    <div
                      className="proc-dot w-14 h-14 lg:w-16 lg:h-16 shrink-0 rounded-full flex items-center justify-center lg:mb-7 relative z-10 transition-all duration-300"
                      style={{
                        border: "1px solid #374151",
                        background: i === 0 || i === 4 ? "#d97706" : "#1a1c1e",
                      }}
                    >
                      <span
                        className="font-black text-[15px] lg:text-[18px] tracking-wide"
                        style={{
                          color: i === 0 || i === 4 ? "white" : "#d97706",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {step.num}
                      </span>
                    </div>

                    <div className="pt-1 lg:pt-0">
                      <h4
                        className="proc-title font-bold text-[12px] text-white tracking-[0.15em] uppercase mb-2 lg:mb-3 transition-colors duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-white/90 text-base lg:text-lg font-light leading-relaxed"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn>
            <div className="text-center mt-12 lg:mt-16">
              <button
                className="btn-cta text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase bg-amber-600 text-white px-8 md:px-12 py-4 md:py-5 border-0 cursor-pointer transition-all duration-300 w-full sm:w-auto"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                onClick={() => scrollTo("contact")}
              >
                Start the Discovery Process →
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
      {/*  METRICS  */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-slate-300">
            {[
              {
                val: 500,
                suffix: "+",
                label: "Engagements Completed",
                sub: "Since 2013",
              },
              {
                val: 98,
                suffix: "%",
                label: "Client Retention Rate",
                sub: "Year on Year",
              },
              {
                val: 14,
                suffix: "",
                label: "Global Offices",
                sub: "London · Colombo · NYC",
              },
              {
                val: 2400,
                suffix: "M+",
                label: "Capital Advised",
                sub: "USD Equivalent",
              },
            ].map((m, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="py-8 md:py-12 px-5 md:px-10 text-center"
                  style={{
                    // Mobile 2×2: right border on col 0, bottom border on row 0
                    // md+ 4-col: right border on cols 0-2 only
                    borderRight:
                      // md+ handled by Tailwind below via style override not possible inline,
                      // so we use a simple rule: border right on items 0,1,2 always,
                      // but on mobile col 1 (i=1) and col 3 (i=3) have no right border
                      i % 2 === 0 ? "1px solid #f1f5f9" : "none",
                    borderBottom: i < 2 ? "1px solid #f1f5f9" : "none",
                  }}
                >
                  <div
                    className="font-bold leading-none text-amber-600 tracking-tight"
                    style={{
                      fontSize: "clamp(36px, 6vw, 60px)",
                      letterSpacing: "-2px",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    <Counter end={m.val} suffix={m.suffix} />
                  </div>
                  <div
                    className="text-[10px] md:text-[12px] font-bold text-[#0a0c0e] tracking-widest uppercase mt-2 md:mt-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {m.label}
                  </div>
                  <div
                    className="text-[10px] md:text-[11px] text-slate-600 tracking-[0.2em] md:tracking-[0.3em] uppercase mt-1 md:mt-1.5 font-medium"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {m.sub}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  PORTFOLIO  */}
      <section
        id="portfolio"
        className="bg-[#fcfcfc] py-16 lg:py-32 px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="border-l-4 border-amber-600 pl-6 md:pl-8 mb-14 lg:mb-24">
              <span
                className="text-[11px] font-bold text-slate-400 tracking-[0.45em] uppercase block mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Strategic Archive
              </span>
              <h2
                className="font-bold tracking-tight text-[#0a0c0e] leading-none"
                style={{
                  fontSize: "clamp(38px, 8vw, 64px)",
                  letterSpacing: "-2px",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Impact{" "}
                <span className="text-slate-500 italic font-light">&amp;</span>{" "}
                Results.
              </h2>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-14 md:gap-20 lg:gap-24">
            {[
              {
                company: "Mayfair Capital Partners",
                tag: "M&A Advisory",
                year: "2024",
                desc: "Guided a £180M cross-border acquisition of a European fintech platform for one of London's foremost asset management firms. Our advisory team managed every phase — from initial valuation to regulatory clearance — ensuring a seamless transition that expanded their AUM by 34%.",
                stat: "£180M",
                statLabel: "Deal Value",
                result: "+34% AUM Growth",
                img: "https://images.unsplash.com/photo-1583052840820-a88204753e18?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=900&auto=format&fit=crop",
                reverse: false,
              },
              {
                company: "NovaTech Sri Lanka",
                tag: "Digital Engineering",
                year: "2023",
                desc: "Designed and deployed a custom AI-powered CRM ecosystem for a rapidly scaling telecom provider operating across Southeast Asia. Our Colombo engineering hub delivered the full stack in 6 months — cutting operational latency by 60% and reducing manual processing costs significantly.",
                stat: "60%",
                statLabel: "Latency Reduction",
                result: "6-Month Delivery",
                img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=900&auto=format&fit=crop",
                reverse: true,
              },
              {
                company: "Euro-Logistics Group",
                tag: "Supply Chain Intelligence",
                year: "2023",
                desc: "Leveraged predictive analytics and process reengineering to optimise cross-continental trade routes for a UK-based logistics conglomerate. The result: a 2.4x efficiency gain across their European distribution network within the first operating year.",
                stat: "2.4x",
                statLabel: "Efficiency Gains",
                result: "Year-1 Operational",
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop",
                reverse: false,
              },
            ].map((cs, i) => (
              <FadeIn
                key={i}
                delay={0.1}
                direction={cs.reverse ? "right" : "left"}
              >
                {/*
            Mobile:  single column — image on top, content below
            lg+:     original asymmetric 3fr/2fr or 2fr/3fr grid with reverse
          */}
                <div
                  className="grid grid-cols-1 gap-8 items-center lg:gap-16"
                  style={
                    {
                      // Applied only on lg+ via a wrapper approach below
                    }
                  }
                >
                  {/* We use a CSS-grid trick: on lg+ restore the asymmetric columns */}
                  <style>{`
              .cs-grid-${i} {
                grid-template-columns: 1fr;
              }
              @media (min-width: 1024px) {
                .cs-grid-${i} {
                  grid-template-columns: ${cs.reverse ? "2fr 3fr" : "3fr 2fr"};
                }
              }
            `}</style>
                  <div
                    className={`grid items-center gap-8 lg:gap-16 cs-grid-${i}`}
                  >
                    {/* Image — always first (top) on mobile; lg+ obeys reverse */}
                    <div
                      className={`img-zoom overflow-hidden relative ${
                        cs.reverse ? "lg:order-2" : "lg:order-1"
                      } order-1`}
                      style={{ aspectRatio: "16/10" }}
                    >
                      <img
                        src={cs.img}
                        alt={cs.company}
                        className="w-full h-full object-cover"
                        style={{
                          filter: "grayscale(20%)",
                          transition: "all 0.8s ease",
                        }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ border: "20px solid rgba(255,255,255,0.06)" }}
                      />
                    </div>

                    {/* Text content */}
                    <div
                      className={`${cs.reverse ? "lg:order-1" : "lg:order-2"} order-2`}
                    >
                      <CaseStudyContent cs={cs} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  ABOUT  */}
      <section className="bg-[#0a0c0e] py-16 lg:py-32 px-6 md:px-8 relative overflow-hidden">
        <div
          className="absolute top-1/5 -right-5 w-[500px] h-[500px] bg-amber-600/5 rounded-full pointer-events-none"
          style={{ filter: "blur(80px)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Inject responsive grid columns for about section */}
          <style>{`
      .about-grid {
        grid-template-columns: 1fr;
      }
      @media (min-width: 1024px) {
        .about-grid {
          grid-template-columns: 5fr 7fr;
        }
      }
    `}</style>

          <div className="about-grid grid gap-12 lg:gap-20 items-start">
            {/* Left: identity block */}
            <FadeIn direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-amber-600" />
                  <span
                    className="text-[11px] font-bold text-amber-600 tracking-[0.45em] uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    The Firm
                  </span>
                </div>
                <h2
                  className="font-bold text-white leading-[1.05]"
                  style={{
                    fontSize: "clamp(36px, 7vw, 56px)",
                    letterSpacing: "-1.5px",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Global Insight.
                  <br />
                  <span className="text-white/70 font-light italic">
                    Local Impact.
                  </span>
                </h2>
                <div className="flex items-baseline gap-4 mt-8 lg:mt-10">
                  <span
                    className="text-amber-600 font-bold leading-none"
                    style={{
                      fontSize: "clamp(56px, 10vw, 80px)",
                      letterSpacing: "-3px",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    12+
                  </span>
                  <div
                    className="text-[11px] font-bold text-[#a3a6ac] tracking-[0.2em] uppercase leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Years of Strategic
                    <br />
                    Operational Excellence
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: content */}
            <FadeIn direction="right">
              <div className="pt-0 lg:pt-2">
                <p
                  className="font-light text-white/90 leading-[1.7] border-l-2 border-[#808997] pl-4 md:pl-8 mb-8"
                  style={{
                    fontSize: "clamp(17px, 2.5vw, 22px)",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  GrowthCrest is a premier consultancy bridging the strategic
                  foresight of{" "}
                  <strong className="text-white font-semibold">
                    London's financial core
                  </strong>{" "}
                  with the high-velocity engineering excellence of{" "}
                  <strong className="text-white font-semibold">Colombo</strong>.
                </p>
                <p
                  className="text-lg md:text-xl text-[#c1c3c6] font-normal leading-[1.75] pl-4 md:pl-8 mb-8 lg:mb-10"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Founded in 2013, we have spent over a decade transforming
                  complex market signals into actionable growth strategies —
                  combining deep industry expertise with modern, data-driven
                  methodologies.
                </p>

                {/* Vision / Mission — 1 col mobile, 2 col md+ */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pl-4 md:pl-8 pt-8 lg:pt-10 mt-2"
                  style={{ borderTop: "1px solid #1f2937" }}
                >
                  {[
                    {
                      title: "Our Vision",
                      text: "To be the defining architectural force behind the world's most resilient and innovative digital enterprises.",
                    },
                    {
                      title: "Our Mission",
                      text: "To deliver measurable competitive advantage through precision strategy, data intelligence, and global operational synergy.",
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <h4
                        className="font-bold text-[11px] text-white tracking-[0.3em] uppercase mb-3"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-base md:text-[18px] text-white font-light leading-relaxed"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/*  WHY US  */}
      <section className="bg-white py-16 lg:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 lg:mb-20">
            <FadeIn direction="left">
              <h2
                className="font-bold tracking-tight text-[#0a0c0e] leading-none"
                style={{
                  fontSize: "clamp(38px, 8vw, 64px)",
                  letterSpacing: "-2px",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Why <span className="text-amber-600">GrowthCrest?</span>
              </h2>
            </FadeIn>
            <FadeIn direction="right">
              <div className="border-l-2 md:border-l-4 border-[#0a0c0e] pl-6 md:pl-8">
                <p
                  className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "We don't simply provide recommendations — we build the
                  strategic frameworks that define market leaders and protect
                  their position for years to come."
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Feature cards — 1 col mobile, 2 col md+ */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px border border-slate-100"
            style={{ background: "#f1f5f9" }}
          >
            {[
              {
                title: "The Elite Collective",
                label: "Expert Team",
                desc: "A bespoke assembly of C-suite advisors, ex-investment bankers, and senior technologists dedicated entirely to your high-stakes challenges.",
                path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                title: "Architectural Precision",
                label: "Proven Methodology",
                desc: "Our proprietary Crest-Framework ensures every strategy is backed by rigorous structural analysis, competitive intelligence, and measurable milestones.",
                path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10V11a1 1 0 011-1h2a1 1 0 011 1v10",
              },
              {
                title: "Quantum Analytics",
                label: "Data-Driven Insight",
                desc: "Proprietary AI and predictive modelling capabilities that translate complex market data into clear, actionable intelligence — before your competitors react.",
                path: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055zM20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
              },
              {
                title: "Cross-Border Synergy",
                label: "Global Experience",
                desc: "Twelve years of operating at the intersection of London's financial district and Colombo's engineering hub gives us a perspective no single-market firm can match.",
                path: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-dark bg-white p-7 md:p-10 lg:p-12 cursor-default transition-all duration-500">
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-[#0a0c0e] transition-all duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={0.75}
                        d={item.path}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <h3
                    className="card-t text-xl md:text-2xl font-bold text-[#0a0c0e] mb-3 md:mb-4 transition-colors duration-500"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="card-d text-slate-900 text-base md:text-lg font-normal leading-relaxed transition-colors duration-500"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  TEAM  */}
      <section
        id="team"
        className="bg-slate-50 py-16 lg:py-32 px-6 md:px-8 border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-20 gap-5 lg:gap-8">
              <div>
                <span
                  className="text-[11px] font-bold text-amber-600 tracking-[0.45em] uppercase block mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Leadership
                </span>
                <h2
                  className="font-bold tracking-tight text-[#0a0c0e] leading-none"
                  style={{
                    fontSize: "clamp(36px, 7vw, 56px)",
                    letterSpacing: "-1.5px",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  The Minds{" "}
                  <span className="text-slate-500 font-light italic">
                    Behind the Work.
                  </span>
                </h2>
              </div>
              <p
                className="text-slate-800 text-lg md:text-xl font-normal leading-relaxed lg:max-w-xs"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Senior practitioners who have led transformations at the world's
                most demanding organisations.
              </p>
            </div>
          </FadeIn>

          {/* Grid: 1 col → 2 col sm → 4 col xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                name: "James Harrington",
                role: "Managing Director, London",
                bio: "Former Goldman Sachs VP. 20 years in M&A and corporate strategy across EMEA.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Priya Mendis",
                role: "Head of Digital Engineering",
                bio: "Ex-McKinsey technologist. Led 40+ enterprise digital transformations across Asia-Pacific.",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Oliver Whitfield",
                role: "Tax & Compliance Partner",
                bio: "International tax architect with 18 years structuring cross-jurisdiction frameworks.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Anjali Rodrigo",
                role: "Strategy Director, Colombo",
                bio: "Led digital infrastructure for Sri Lanka's top three banking institutions. MIT MBA.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
              },
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="team-card bg-white border border-slate-100 overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "4/5" }} // was 3/4 — slightly less tall on all screens, fine at 2-col+
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="team-img w-full h-full object-cover"
                      style={{ filter: "grayscale(20%)" }}
                    />

                    {/* Hover overlay — hidden on touch (md:opacity-0 triggers on hover) */}
                    <div
                      className="team-overlay absolute inset-0 items-end p-6 opacity-0 transition-opacity duration-300 hidden md:flex"
                      style={{ background: "rgba(10,12,14,0.75)" }}
                    >
                      <p
                        className="text-lg text-white font-medium leading-relaxed"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {member.bio}
                      </p>
                    </div>

                    <div
                      className="absolute bottom-0 left-0 right-0 h-2/5"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,12,14,0.4), transparent)",
                      }}
                    />
                  </div>

                  <div className="px-5 md:px-6 py-4 md:py-5">
                    <h4
                      className="text-xl md:text-2xl font-bold text-[#0a0c0e] mb-0.5"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {member.name}
                    </h4>
                    <span
                      className="text-[11px] font-bold text-amber-600 tracking-[0.1em] uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {member.role}
                    </span>

                    {/* Bio visible on mobile (no hover on touch devices) */}
                    <p
                      className="md:hidden text-slate-600 text-sm font-normal leading-relaxed mt-3"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  TESTIMONIALS   */}
      <section className="bg-[#0a0c0e] py-16 lg:py-32 px-6 md:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(217,119,6,0.05) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(217,119,6,0.05) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-12 lg:mb-16">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-8 md:w-10 h-px bg-amber-600" />
                <span
                  className="text-[10px] font-bold text-amber-600 tracking-[0.6em] uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Client Voices
                </span>
                <div className="w-8 md:w-10 h-px bg-amber-600" />
              </div>
              <h2
                className="font-bold text-white tracking-tight"
                style={{
                  fontSize: "clamp(34px, 7vw, 56px)",
                  letterSpacing: "-1.5px",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                What Our Clients{" "}
                <span className="text-[#e1e1e3] font-light italic">Say.</span>
              </h2>
            </div>
          </FadeIn>

          {/* Grid: 1 → 2 → 3 col */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                quote:
                  "GrowthCrest didn't just advise us — they became an extension of our leadership team. The M&A process they managed was precise, strategic, and completely transformed our market position.",
                name: "Richard Pemberton",
                title: "CEO, Mayfair Capital Partners",
                location: "London, UK",
              },
              {
                quote:
                  "The engineering hub they set up in Colombo is nothing short of extraordinary. We delivered a complex CRM in six months at a fraction of the market cost, without compromising on quality.",
                name: "Senaka Perera",
                title: "CTO, NovaTech Sri Lanka",
                location: "Colombo, LK",
              },
              {
                quote:
                  "Their tax and compliance team gave us the structural clarity we needed to expand into three new European markets confidently. They think three moves ahead — every time.",
                name: "Claire Hoffmann",
                title: "CFO, Euro-Logistics Group",
                location: "Frankfurt, DE",
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="testimonial-card bg-[#111316] border border-[#a2a2a5]/70 p-7 md:p-10 cursor-default transition-all duration-300">
                  <div
                    className="text-amber-600 font-bold mb-4 md:mb-5 opacity-60 leading-none"
                    style={{
                      fontSize: "clamp(36px, 6vw, 48px)",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    "
                  </div>
                  <p
                    className="text-[#e1e1e3] font-light leading-[1.75] mb-6 md:mb-8 italic"
                    style={{
                      fontSize: "clamp(16px, 2vw, 19px)",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {t.quote}
                  </p>
                  <div className="border-t border-[#1f2937] pt-5 md:pt-6">
                    <div
                      className="font-bold text-[12px] text-white mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-[10px] text-amber-600 font-semibold tracking-[0.2em] uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {t.title}
                    </div>
                    <div
                      className="text-[10px] text-[#e1e1e3]/80 font-medium mt-0.5"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {t.location}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  INSIGHTS  */}
      <section
        id="insights"
        className="bg-white py-16 lg:py-32 px-6 md:px-8 border-t border-slate-100 relative overflow-hidden"
      >
        {/* Decorative shape — only visible on larger screens */}
        <div
          className="absolute top-0 right-0 w-1/4 h-full bg-amber-50 pointer-events-none hidden lg:block"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            {/* Header row: stacks on mobile, row on md+ */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-6 mb-12 lg:mb-16">
              <div>
                <span
                  className="text-[11px] font-bold text-amber-600 tracking-[0.35em] uppercase block mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Strategic Intelligence
                </span>
                <h2
                  className="font-bold tracking-tight text-[#0a0c0e] leading-none"
                  style={{
                    fontSize: "clamp(34px, 7vw, 52px)",
                    letterSpacing: "-1.5px",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Latest{" "}
                  <span className="text-slate-500 font-light">Insights.</span>
                </h2>
              </div>
              <button
                className="self-start md:self-auto text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 bg-transparent border-0 border-b-2 border-slate-300 pb-1 cursor-pointer whitespace-nowrap"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Explore All Reports →
              </button>
            </div>
          </FadeIn>

          {/* Cards: 1 → 2 → 3 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {[
              {
                tag: "M&A Strategy",
                title:
                  "The 2026 Cross-Border M&A Landscape: What London Dealmakers Must Know",
                date: "February 2026",
                read: "8 min read",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
              },
              {
                tag: "Digital Engineering",
                title:
                  "Why Asia's Engineering Talent Is Reshaping Global Enterprise Tech",
                date: "January 2026",
                read: "6 min read",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
              },
              {
                tag: "Tax Advisory",
                title:
                  "Multi-Jurisdiction Structures in 2026: Balancing Efficiency and Compliance",
                date: "December 2025",
                read: "10 min read",
                img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=600&auto=format&fit=crop",
              },
            ].map((post, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="insight-card bg-white border border-slate-100 overflow-hidden cursor-pointer transition-all duration-500 relative">
                  <div
                    className="absolute top-0 left-0 w-0.5 bg-amber-600 transition-all duration-500"
                    style={{ height: "0%", bottom: "auto" }}
                  />
                  <div
                    className="img-zoom overflow-hidden"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: "grayscale(20%)",
                        transition: "all 0.8s ease",
                      }}
                    />
                  </div>
                  <div className="p-5 md:p-7">
                    <span
                      className="text-[11px] font-bold text-amber-600 tracking-[0.3em] uppercase block mb-3"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {post.tag}
                    </span>
                    <h3
                      className="text-lg md:text-xl font-bold text-[#0a0c0e] leading-snug mb-4 md:mb-5"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span
                          className="text-[11px] text-slate-500 font-medium block"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {post.date}
                        </span>
                        <span
                          className="text-[11px] text-slate-400 font-medium"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {post.read}
                        </span>
                      </div>
                      <span
                        className="text-[14px] font-bold text-[#0a0c0e] tracking-wider"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  CTA BANNER  */}
      <section className="bg-[#1a1c1e] py-16 lg:py-32 px-6 md:px-8 relative overflow-hidden">
        {/* Decorative amber shard — hidden on mobile, shown on lg+ */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full pointer-events-none hidden lg:block"
          style={{
            background: "rgba(217,119,6,1)",
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="border border-[#7c7d7f] bg-[#161819] relative overflow-hidden px-6 py-10 sm:px-14 sm:py-16 lg:p-24">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "rgba(217,119,6,0.05)",
                filter: "blur(80px)",
                transform: "translate(50%,-50%)",
              }}
            />
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-6 md:gap-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-amber-600" />
                  <span
                    className="text-[11px] font-black text-amber-600 tracking-[0.45em] uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Phase One
                  </span>
                  <div className="w-8 h-px bg-amber-600" />
                </div>

                <h2
                  className="font-bold text-white leading-none"
                  style={{
                    fontSize: "clamp(38px, 8vw, 72px)",
                    letterSpacing: "-2px",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Ready to reach your <br className="hidden sm:block" />
                  <span className="text-[#e1e1e3] font-light italic">
                    highest{" "}
                  </span>
                  <span className="relative inline-block">
                    Crest?
                    <span className="absolute -bottom-1 left-0 w-full h-1.5 md:h-2 bg-amber-600" />
                  </span>
                </h2>

                <p
                  className="text-[#e1e1e3] text-lg md:text-xl font-normal leading-relaxed max-w-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Partner with our London leadership and Colombo technical hub
                  to accelerate your enterprise's global potential. First
                  consultation is complimentary.
                </p>

                {/* Buttons: full-width stacked on mobile, auto-width row on sm+ */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center mt-2 md:mt-4">
                  <button
                    className="btn-cta text-[11px] md:text-[12px] font-black tracking-[0.2em] uppercase bg-amber-600 text-white px-8 md:px-12 py-4 md:py-5 border-0 cursor-pointer transition-all duration-300 w-full sm:w-auto"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    onClick={() => scrollTo("contact")}
                  >
                    Schedule Consultation →
                  </button>
                  <button
                    className="text-[11px] md:text-[12px] font-black tracking-[0.25em] uppercase bg-transparent text-slate-400 border border-[#374151] px-8 md:px-10 py-4 md:py-5 cursor-pointer hover:border-amber-600 hover:text-amber-600 transition-all duration-300 w-full sm:w-auto"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    onClick={() => scrollTo("portfolio")}
                  >
                    View Case Studies
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/*  CONTACT  */}
      <section
        id="contact"
        className="bg-[#fcfcfc] py-16 lg:py-32 px-6 md:px-8 relative"
      >
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(to right, #d97706, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          {/* Inject responsive grid */}
          <style>{`
      .contact-grid {
        grid-template-columns: 1fr;
      }
      @media (min-width: 1024px) {
        .contact-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
    `}</style>

          <div className="contact-grid grid border border-slate-200 shadow-xl overflow-hidden">
            {/* Left — Office Info */}
            <div className="bg-[#0a0c0e] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <FadeIn direction="left">
                <div className="relative z-10">
                  <span
                    className="text-[11px] font-black text-amber-600 tracking-[0.45em] uppercase block mb-5"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Connect
                  </span>
                  <h2
                    className="font-bold text-white leading-none mb-3"
                    style={{
                      fontSize: "clamp(34px, 6vw, 52px)",
                      letterSpacing: "-1.5px",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    GLOBAL
                    <br />
                    <span className="text-[#e1e1e3] font-light italic">
                      OPERATIONS.
                    </span>
                  </h2>
                  <div className="w-12 h-0.5 bg-amber-600 mb-8 lg:mb-12" />

                  <div className="flex flex-col gap-7 lg:gap-10">
                    {[
                      {
                        region: "UNITED KINGDOM",
                        city: "London Leadership",
                        address: "Mayfair Executive Suite, W1K",
                        phone: "+44 (0) 20 7946 0000",
                      },
                      {
                        region: "SRI LANKA",
                        city: "Colombo Hub",
                        address: "World Trade Center, West Tower",
                        phone: "+94 11 234 5678",
                      },
                      {
                        region: "UNITED STATES",
                        city: "New York Office",
                        address: "330 Madison Avenue, NY 10017",
                        phone: "+1 212 946 0000",
                      },
                    ].map((office, i) => (
                      <div key={i} className="cursor-pointer group">
                        <span
                          className="text-[10px] font-bold text-amber-600 tracking-[0.4em] uppercase block mb-1.5 group-hover:text-amber-400 transition-colors"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {office.region}
                        </span>
                        <h5
                          className="text-lg md:text-xl font-bold text-white mb-1"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {office.city}
                        </h5>
                        <p
                          className="text-[14px] md:text-[15px] text-[#e1e1e3]"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {office.address}
                        </p>
                        <p
                          className="text-[11px] text-[#c7c8cb] font-medium mt-1"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {office.phone}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — Form */}
            <div className="bg-white flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <FadeIn direction="right">
                <div className="mb-8 lg:mb-10">
                  <h3
                    className="font-bold text-[#0a0c0e] mb-2"
                    style={{
                      fontSize: "clamp(24px, 4vw, 32px)",
                      letterSpacing: "-0.5px",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    Initiate Engagement
                  </h3>
                  <p
                    className="text-slate-700 text-base md:text-lg"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Share your brief and a senior advisor will be in touch
                    within 24 hours.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 md:gap-7"
                >
                  {[
                    { name: "name" as const, type: "text", label: "Full Name" },
                    {
                      name: "company" as const,
                      type: "text",
                      label: "Company / Organisation",
                    },
                    {
                      name: "email" as const,
                      type: "email",
                      label: "Corporate Email",
                    },
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <label
                        className="absolute -top-3 left-0 text-[11px] font-bold text-slate-500 tracking-[0.3em] uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {field.label}
                      </label>
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.label}
                        value={form[field.name]}
                        onChange={(e) =>
                          setForm({ ...form, [e.target.name]: e.target.value })
                        }
                        required
                        className="w-full py-4 bg-transparent text-[#0a0c0e] outline-none text-base border-0 border-b border-slate-400 transition-colors duration-300 focus:border-amber-600"
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                        }}
                      />
                    </div>
                  ))}

                  <div className="relative">
                    <label
                      className="absolute -top-3 left-0 text-[11px] font-bold text-slate-500 tracking-[0.3em] uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Strategic Requirements
                    </label>
                    <textarea
                      name="message"
                      placeholder="Briefly describe your strategic requirements"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      required
                      className="w-full py-4 bg-transparent text-[#0a0c0e] outline-none text-base border-0 border-b border-slate-400 resize-none transition-colors duration-300 focus:border-amber-600"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-cta text-[11px] md:text-[12px] font-black tracking-[0.4em] uppercase bg-[#0a0c0e] text-white py-4 md:py-5 border-0 cursor-pointer transition-all duration-300 mt-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Submit Brief →
                  </button>

                  {submitted && (
                    <div
                      className="text-center py-4 px-5 border"
                      style={{
                        background: "rgba(217,119,6,0.05)",
                        borderColor: "rgba(217,119,6,0.2)",
                      }}
                    >
                      <span
                        className="text-[9px] font-bold text-amber-600 tracking-[0.4em] uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        ✓ Transmission Received — An advisor will review your
                        brief within 24 hours.
                      </span>
                    </div>
                  )}
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/*  FOOTER  */}
      <footer
        className="bg-[#0a0c0e] text-slate-400 pt-14 lg:pt-20 pb-8 lg:pb-10"
        style={{ borderTop: "4px solid #d97706" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Top block: brand + CTAs */}
          <style>{`
      .footer-top-grid {
        grid-template-columns: 1fr;
      }
      @media (min-width: 768px) {
        .footer-top-grid {
          grid-template-columns: 2fr 1fr;
        }
      }
    `}</style>

          <div className="footer-top-grid grid gap-8 md:gap-16 mb-12 md:mb-16 items-start">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div>
                  <div
                    className="font-black text-xl md:text-2xl tracking-[0.2em] text-white"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    GROWTH<span className="text-amber-600">CREST</span>
                  </div>
                  <div
                    className="text-[9px] tracking-[0.5em] font-bold mt-0.5 uppercase text-slate-400"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Strategic Alliance
                  </div>
                </div>
              </div>
              <p
                className="text-base md:text-lg text-[#c7c8cb] max-w-md leading-relaxed mb-7"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Providing strategic foresight and operational excellence to
                global enterprises since 2013. Headquartered in London with
                delivery hubs in Colombo and New York.
              </p>
              <div className="flex gap-3">
                {["L", "T", "I"].map((s, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 border border-[#c7c8cb] flex items-center justify-center cursor-pointer hover:border-amber-600 transition-colors duration-200"
                  >
                    <span
                      className="text-[12px] font-bold text-[#c7c8cb]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons — stack on mobile, row on md+ */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:justify-end md:items-start">
              <button
                className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-200 bg-transparent border border-[#c7c8cb] px-5 py-2.5 cursor-pointer hover:border-amber-600 hover:text-amber-600 transition-all duration-200 text-center"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Global Offices
              </button>
              <button
                className="text-[11px] font-bold tracking-[0.3em] uppercase text-white bg-amber-600 border-0 px-5 py-2.5 cursor-pointer hover:bg-amber-700 transition-all duration-200 text-center"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                onClick={() => scrollTo("contact")}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Sitemap: 2 col → 3 col → 5 col */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 pb-10 md:pb-14 border-b border-[#2a2c2e]">
            {[
              {
                head: "Industries",
                links: [
                  "Financial Services",
                  "Technology & Media",
                  "Energy & Utilities",
                  "Public Sector",
                ],
              },
              {
                head: "Capabilities",
                links: [
                  "Strategy & M&A",
                  "Risk & Compliance",
                  "Digital Engineering",
                  "Tax Advisory",
                ],
              },
              {
                head: "Portfolio",
                links: [
                  "Case Studies",
                  "Client Outcomes",
                  "Impact Reports",
                  "Firm Profile",
                ],
              },
              {
                head: "The Firm",
                links: [
                  "About GrowthCrest",
                  "Our Leadership",
                  "Careers",
                  "Inclusion & Diversity",
                ],
              },
              {
                head: "Insights",
                links: [
                  "Global Outlook 2026",
                  "AI Ethics Report",
                  "Executive Briefing",
                  "Market Pulse",
                ],
              },
            ].map((col) => (
              <div key={col.head}>
                <h4
                  className="text-[11px] md:text-[13px] font-bold text-white uppercase tracking-[0.3em] border-l-2 border-amber-600 pl-3 mb-4 md:mb-5"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {col.head}
                </h4>
                <ul className="flex flex-col gap-2.5 md:gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="footer-link text-[12px] md:text-[13px] text-[#c7c8cb] font-semibold no-underline block transition-all duration-200 hover:text-amber-600"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-6 md:pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-5">
            {/* Legal links: 2-col grid on mobile, flex row on md+ */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 md:flex md:gap-8 md:flex-wrap">
              {[
                "Privacy Statement",
                "Terms of Use",
                "Cookie Notice",
                "Accessibility",
                "Sitemap",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[11px] text-[#c7c8cb] no-underline font-medium tracking-wide hover:text-amber-600 transition-colors duration-200"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link}
                </a>
              ))}
            </div>
            <p
              className="text-[11px] text-[#c7c8cb] font-bold tracking-[0.2em] md:shrink-0"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              © 2026 GrowthCrest International Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

//  Sub-components
function ServiceContent({
  svc,
  scrollTo,
}: {
  svc: { title: string; desc: string; bullets: string[] };
  scrollTo: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <span
        className="text-[12px] font-bold text-amber-600 tracking-[0.4em] uppercase"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Expertise // Global
      </span>
      <h3
        className="font-bold text-[#0a0c0e] leading-tight"
        style={{
          fontSize: 42,
          letterSpacing: "-1px",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        {svc.title}
      </h3>
      <p
        className="text-slate-600 text-xl font-normal leading-relaxed"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {svc.desc}
      </p>
      <div className="grid grid-cols-2 gap-2.5 mt-2">
        {svc.bullets.map((b) => (
          <div key={b} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-amber-600 flex-shrink-0" />
            <span
              className="text-[13px] text-slate-600 font-semibold tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {b}
            </span>
          </div>
        ))}
      </div>
      <button
        className="flex items-center gap-3 bg-transparent border-0 cursor-pointer text-[11px] font-bold tracking-[0.4em] uppercase text-[#0a0c0e] mt-2 w-fit hover:text-amber-600 transition-colors duration-200"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        onClick={() => scrollTo("contact")}
      >
        Inquire Now <div className="w-10 h-px bg-amber-600" />
      </button>
    </div>
  );
}

function CaseStudyContent({
  cs,
}: {
  cs: {
    tag: string;
    year: string;
    company: string;
    desc: string;
    stat: string;
    statLabel: string;
    result: string;
  };
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span
          className="text-[12px] font-bold text-amber-600 tracking-[0.4em] uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {cs.tag}
        </span>
        <span
          className="text-[10px] text-slate-600 font-medium"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          // {cs.year}
        </span>
      </div>
      <h3
        className="font-bold text-[#0a0c0e] leading-tight"
        style={{
          fontSize: 40,
          letterSpacing: "-1px",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        {cs.company}
      </h3>
      <p
        className="text-slate-700 text-xl font-semibold leading-relaxed"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {cs.desc}
      </p>
      <div className="flex gap-4 mt-3 flex-wrap">
        <div className="bg-slate-50 border border-slate-100 px-6 py-4">
          <div
            className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase mb-1.5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {cs.statLabel}
          </div>
          <div
            className="text-3xl font-bold text-amber-600"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {cs.stat}
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-100 px-6 py-4">
          <div
            className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase mb-1.5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Outcome
          </div>
          <div
            className="text-2xl font-bold text-[#0a0c0e]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {cs.result}
          </div>
        </div>
      </div>
    </div>
  );
}
