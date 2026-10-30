import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

type Accent = "teal" | "ocean" | "emerald" | "lagoon";

const accentStyles: Record<
  Accent,
  { tag: string; dot: string; bar: string; icon: string }
> = {
  teal: {
    tag: "text-primary",
    dot: "bg-primary",
    bar: "from-primary via-primary-container to-transparent",
    icon: "apartment",
  },
  ocean: {
    tag: "text-secondary",
    dot: "bg-secondary",
    bar: "from-secondary via-secondary-container to-transparent",
    icon: "directions_boat",
  },
  emerald: {
    tag: "text-tertiary",
    dot: "bg-tertiary",
    bar: "from-tertiary via-tertiary-container to-transparent",
    icon: "cottage",
  },
  lagoon: {
    tag: "text-on-primary-fixed-variant",
    dot: "bg-primary-fixed-dim",
    bar: "from-[#004f57] via-secondary-container to-transparent",
    icon: "hub",
  },
};

const slides = [
  {
    id: 1,
    accent: "teal" as Accent,
    tagline: "Enterprise Property Management",
    title: "Property Management, Perfected for Travel Agencies",
    description:
      "A property management system for Maldivian travel agencies — unify reservations, villas and guest data in one command centre.",
    image: "/hero/property.webp",
    ctaLink: "/real-estate-control",
    ctaLabel: "Explore the PMS",
  },
  {
    id: 2,
    accent: "ocean" as Accent,
    tagline: "Speedboat Ticketing & Dispatch",
    title: "Modern Speedboat Ticketing & Operations for the Maldives",
    description:
      "Coordinate transfers, crews and island logistics in real time — purpose-built dispatch engineered for the Maldives' fastest-moving fleets.",
    image: "/hero/boat.webp",
    ctaLink: "/viduvaru",
    ctaLabel: "See Speedboat Dispatch",
  },
  {
    id: 3,
    accent: "emerald" as Accent,
    tagline: "Guest House Operations",
    title: "Simplify Every Aspect of Your Guest House Operations",
    description:
      "Sync front desk, housekeeping, invoicing and channel managers into one calm, cloud-hosted workspace built for multi-property teams.",
    image: "/hero/hotel.webp",
    ctaLink: "/hotelcloud",
    ctaLabel: "Explore Guest House Suite",
  },
  {
    id: 4,
    accent: "lagoon" as Accent,
    tagline: "Travel CRM & Tour Operations",
    title: "Manage Your Travel Business Intelligently",
    description:
      "Design bespoke itineraries, automate agent partnerships and grow inbound bookings with a single intelligent core.",
    image: "/hero/travel.jpg",
    ctaLink: "/travel-crm",
    ctaLabel: "Explore the CRM",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [_direction, setDirection] = useState(0);
  const isInteracted = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isInteracted.current) {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    isInteracted.current = true;
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    isInteracted.current = true;
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (idx: number) => {
    isInteracted.current = true;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const accent = accentStyles[slides[current].accent];

  // Pure opacity crossfade, same duration both ways, no scale/movement —
  // this is what makes it read as instant and smooth rather than a
  // "wipe" with perceptible lag.
  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  const elementVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.35, ease: "easeInOut" as const },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" as const },
    },
  };

  return (
    <section className="relative w-full pt-[88px] pb-20 px-3 sm:px-8 md:px-12 lg:px-16 bg-[#ffffff] overflow-hidden font-body">
      {/* 100% COVER LAYER IMAGE CONTAINER
          - min-h added only at the base (mobile) breakpoint so very narrow
            phones don't get squeezed by the aspect-ratio math; it's cleared
            again from sm: up, so tablet/desktop sizing is untouched. */}
      <div className="relative w-full max-w-[1680px] mx-auto min-h-[560px] sm:min-h-0 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] sm:rounded-[3rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-25px_rgba(0,45,50,0.18)] bg-surface-container border border-outline-variant/40">
        {/* Living Background Image Canvas — a solid base fill behind the
            crossfade so there is zero chance of a background-color flash,
            plus both slides stacked absolutely so they overlap while
            transitioning instead of leaving a gap. */}
        <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none bg-surface-container-highest">
          <AnimatePresence>
            <motion.img
              key={current}
              variants={backgroundVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              src={slides[current].image}
              alt={slides[current].title}
              className="absolute inset-0 w-full h-full object-cover object-center
        sm:object-center
        lg:object-left"
            />
          </AnimatePresence>
        </div>

        {/* Ambient Light Contrast Protection Layers — a deep-teal-to-lagoon wash instead of flat black */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00272b]/55 via-[#00272b]/10 to-transparent z-10 pointer-events-none mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/50 via-transparent to-transparent z-10 pointer-events-none" />

        {/* FOREGROUND INTERACTIVE CONTENT ARCHITECTURE */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 sm:p-10 md:p-14 lg:p-16">
          {/* Top Floating Utility Row — persistent brand line, not per-slide.
              flex-wrap + min-w-0/truncate keep the badge from forcing
              horizontal overflow on narrow phones; sm: and up are untouched. */}
          <div className="flex items-start sm:items-center justify-between gap-2 flex-wrap sm:flex-nowrap px-2 sm:px-4">
            <h1 className="inline-flex items-center gap-2 sm:gap-2.5 min-w-0 max-w-full bg-on-surface/40 backdrop-blur-md text-inverse-on-surface rounded-full pl-3 pr-4 py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-sm">
              <span className="truncate">
                Software for Maldives Guest Houses, Travel Agencies &amp; Transfer Operators
              </span>
            </h1>
            <div className="text-sm font-mono font-bold text-on-surface/50 tracking-widest bg-surface-container-lowest/60 backdrop-blur-md px-3 py-1 rounded-lg border border-outline-variant/40 hidden sm:block shrink-0">
              <span>0{current + 1}</span>{" "}
              <span className="text-outline">/</span> 0{slides.length}
            </div>
          </div>

          {/* Centered Glassmorphic Main Presentation Monolith */}
          <div className="max-w-full sm:max-w-[560px] lg:max-w-[620px] my-auto pt-6">
            <div className="relative bg-surface-container-lowest/30 backdrop-blur-2xl border border-white/50 rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-10 md:p-12 shadow-[0_30px_70px_-15px_rgba(0,45,50,0.22),0_0_1px_1px_rgba(255,255,255,0.5)_inset] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  variants={elementVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-3 sm:space-y-4 md:space-y-5"
                >
                  <span
                    className={`inline-flex items-center gap-1.5 font-extrabold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] md:text-xs ${accent.tag}`}
                  >
                    <span className="material-symbols-outlined text-[14px] leading-none">
                      {accent.icon}
                    </span>
                    {slides[current].tagline}
                  </span>

                  <h2 className="font-headline text-xl sm:text-3xl md:text-4xl font-black text-on-surface tracking-tight leading-[1.15]">
                    {slides[current].title}
                  </h2>

                  <p className="text-xs sm:text-sm text-on-surface-variant font-semibold leading-relaxed">
                    {slides[current].description}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={slides[current].ctaLink}
                      className="group inline-flex items-center gap-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-xs px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl shadow-md transition-all duration-300 transform active:scale-95"
                    >
                      {slides[current].ctaLabel}
                      <svg
                        className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Custom Navigation Strip */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-4 items-center justify-between pt-5 sm:pt-6 border-t border-white/25">
            {/* Minimalist Horizontal Dynamic Pill Tracks */}
            <div className="flex gap-3 items-center w-full sm:w-auto justify-center sm:justify-start flex-wrap">
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className="group py-2 focus:outline-none"
                  aria-label={`View ${slide.tagline}`}
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                      current === idx
                        ? `w-12 ${accentStyles[slide.accent].dot} shadow-sm`
                        : "w-3 bg-white/40 group-hover:bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Premium Directional Capsule Hub */}
            <div className="flex w-full justify-end">
              <div className="flex items-center rounded-xl sm:rounded-2xl bg-surface-container-lowest/45 backdrop-blur-xl p-1 sm:p-1.5 border border-white/50 gap-2 shadow-[0_10px_30px_-10px_rgba(0,45,50,0.12)]">
                <button
                  onClick={handlePrev}
                  className="flex h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-surface-container-lowest hover:bg-surface-container border border-outline-variant/60 text-on-surface transition-all active:scale-90 shadow-sm"
                  aria-label="Previous module"
                >
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  className="flex h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary transition-all hover:opacity-90 active:scale-90 shadow-sm"
                  aria-label="Next module"
                >
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
