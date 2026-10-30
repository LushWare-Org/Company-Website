import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "94716430053";
const WHATSAPP_LANDING_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi LushWare! I'd like to learn more about your software solutions and see how they can help my business. Could we schedule a quick chat?")}`;
import { motion } from "framer-motion";
import HowItWorksSection from "../components/HowItWorksSection";
import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import PageOutline from "../components/PageOutline";
import FAQSection from "../components/FAQSection";
import { getRouteFaq } from "../data/faq";

const ecosystemCards = [
  {
    icon: "directions_boat",
    title: "Viduvaru Speedboat Ticketing",
    description:
      "Booking and ticketing software for speedboat, ferry and water taxi operators.",
    route: "/viduvaru",
    textColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: "holiday_village",
    title: "Lush Hotel Cloud",
    description:
      "Guest house management software for guest houses and small hotels on local islands.",
    route: "/hotelcloud",
    textColor: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: "apartment",
    title: "Property Management",
    description:
      "Property management system for agencies managing properties across many islands.",
    route: "/real-estate-control",
    textColor: "text-tertiary",
    bgColor: "bg-tertiary/10",
  },
  {
    icon: "diversity_3",
    title: "Travel Agency CRM",
    description:
      "Enquiries, packages, quotations and invoices for travel agencies, tour operators and DMCs.",
    route: "/travel-crm",
    textColor: "text-primary-container",
    bgColor: "bg-primary-container/10",
  },
];

const industries = [
  {
    label: "Resorts",
    icon: "hotel",
    hoverDescription:
      "Streamline villas, experiences, and guest journeys with one luxury-ready operations core.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvmEcra37Tlk_kQTdctZ4DD9TZy4YNi_D64JQikv4lwyzXFQJEooM-Gi-V0XAFDA6bJ7iof3pH8wuBvsWXq7b6ypoPfwukDNYVUs6l5905NpnzFilj_tSrCVBm57V39GYhdymrz_LEAKopOVSp32cY7IpSEgx__Ta2tdZJnJwNXvCOF4yX9eYnBLjfgKnsU5JcHfXWqrULS1iUA8iWa6du-Bh07RDTPO1KH3UOHHhogiU1bSvS2xF8OZKVbcgOly_bjVCz2emMPAmr",
    alt: "Luxury Maldives resort with overwater villas and ocean sunset views",
    className: "md:col-span-6 md:row-span-2",
  },
  {
    label: "Hotels",
    icon: "apartment",
    hoverDescription:
      "Unify front office, housekeeping, and revenue decisions across every room and rate.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern tropical hotel facade with warm evening lights",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    label: "Guesthouses",
    icon: "holiday_village",
    hoverDescription:
      "Run lean operations with smart bookings, digital check-in, and automated guest messaging.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLj_OFbebQ4esMM7NMJLh8mMmYFGJSqsPMkXcCsEllNzY58xwZh_nj0Ert7Hg4tdFOE1ELJN6F60s1dz_QATdXHM3yf2a2S5xwI9_rLs45V0wYvHO4w2V7_bptUFFNO_gyHNgM74GV5F6gXPDXHFyTrcaY8kujcTdHwpTYNbP_XYpBJskVdRkqUOBqL07tq6UqbYjCPzylF6us5s37W7QM9WYJrgPRnZK1gEntndAzth7toH84US_zZZHmOlp5MmhNfBQJar4b07jI",
    alt: "Colorful island guesthouse with tropical garden path",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    label: "Liveaboards",
    icon: "directions_boat",
    hoverDescription:
      "Coordinate cabins, dives, manifests, and onboard billing from one marine command view.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6l6Fu-RiA5fN4IPFL7i0-YV7MjCLTEDysJg9U00MTgNT9lizzJb7rbGPqsDdWFUaQVSOFvSEjh0Kg_NlQ3Fen8xPL8pwMJsCUnWz-l73GJ-yWiwcK05lCejRQgIBiOpo5XfDHhA8dZuc3BOZ0flGtFzaOQRwTuCKUyDILGlc8RGAuEvLer5RoR8bNHtayXupDCHZgl46sKxu1Kp6Hu_jThw4X_E3HVAsw41SLyYJH4PcHHlJKTK4PddR-6JsNKO2ARll75QiSiJZt",
    alt: "Luxury liveaboard yacht cruising through deep blue Maldivian waters",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    label: "Yacht Marina",
    icon: "sailing",
    hoverDescription:
      "Manage berths, fueling, maintenance slots, and owner services with precision scheduling.",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80",
    alt: "Premium marina with yachts docked along a calm waterfront",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    label: "Bareboat",
    icon: "kayaking",
    hoverDescription:
      "Automate charter handovers, compliance checks, and fleet utilization in real time.",
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1600&q=80",
    alt: "Bareboat charter vessel anchored in crystal clear lagoon",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    label: "Homestay",
    icon: "home_work",
    hoverDescription:
      "Deliver personal island hospitality with simple tools for hosts, bookings, and payments.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    alt: "Cozy island homestay interior with warm local design touches",
    className: "md:col-span-12 md:row-span-1",
  },
];

const whyChooseItems = [
  {
    icon: "public",
    title: "Built for Islands",
    description:
      "Infrastructure designed to work across distributed islands with optimized sync and low-latency connectivity.",
    color: "bg-primary",
  },
  {
    icon: "cloud_sync",
    title: "Cloud-based",
    description:
      "Access your entire operation from anywhere in the world. Real-time updates and effortless synchronization.",
    color: "bg-secondary",
  },
  {
    icon: "psychology",
    title: "AI-Powered",
    description:
      "Predictive analytics and intelligent automation that handles repetitive tasks so your team can focus on the guest.",
    color: "bg-tertiary",
  },
  {
    icon: "trending_up",
    title: "Scalable",
    description:
      "From a single guest house to a portfolio of luxury resorts, our system grows with your ambition.",
    color: "bg-primary-container",
  },
  {
    icon: "security",
    title: "Secure",
    description:
      "Enterprise-grade security with data encryption, access control, and reliable backups to keep your data safe.",
    color: "bg-secondary-container",
  },
  {
    icon: "support_agent",
    title: "24/7 Support",
    description:
      "Dedicated support team available anytime to assist you and ensure your operations run smoothly.",
    color: "bg-tertiary-container",
  },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < breakpoint,
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}

function LandingPage() {
  const isMobile = useIsMobile();

  return (
    <div className="overflow-x-hidden bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="overflow-x-hidden">
        {/* <LandingHeroSection /> */}
        <HeroSection />

        <section className="bg-[#ffffff] px-6 py-16 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="relative mb-6 md:mb-12 w-full overflow-hidden py-8 sm:py-10 md:overflow-visible md:py-12">
              {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
              <div className="absolute top-2 -left-2 select-none font-headline font-black text-[8rem] tracking-tighter leading-none text-primary-container/[0.14] dark:text-white/[0.01] xs:text-[6rem] sm:-top-4 sm:-left-3 sm:text-[9rem] md:-top-2 md:-left-4 lg:top-2 lg:-left-4 md:text-[16rem] lg:text-[16rem]">
                OUR
              </div>

              {/* Main Content Layout Container */}
              <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-start pt-8 sm:pt-12 md:pt-16 lg:pt-20 lg:flex-row lg:items-end lg:justify-between lg:gap-32">
                {/* Left Side: Headline with Minimalist Category Kicker */}
                <div className="relative flex flex-col items-start gap-0 md:gap-2 lg:max-w-xl">
                  <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
                    Architecture & Vision
                  </span>
                  <h2 className="text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-8xl dark:text-white">
                    Ecosystem
                  </h2>
                </div>

                {/* Right Side: High-End Editorial Layout Block */}
                <div className="relative mt-8 max-w-xl sm:mt-10 lg:ml-auto lg:mt-0 lg:text-right flex flex-col items-start lg:items-end gap-4">
                  <p className="text-balance text-base font-light font-body leading-relaxed tracking-wide text-on-surface-variant sm:text-lg md:text-xl dark:text-zinc-400">
                    Integrated tools designed to seamlessly orchestrate every
                    digital touchpoint of the{" "}
                    <span className="relative inline-block font-bold text-on-background dark:text-white pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary-container transition-all duration-350 hover:after:h-[4px]">
                      guest journey
                    </span>{" "}
                    and predictive back-office operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 [perspective:1000px]">
              {ecosystemCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{
                    y: isMobile ? 30 : 0,
                    x: isMobile ? 0 : 120,
                    opacity: 0,
                  }}
                  whileInView={{ y: 0, x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: isMobile ? 0.45 : 0.7,
                    delay: isMobile ? index * 0.06 : index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  <div className="group relative h-[310px] w-full [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)] rounded-xl shadow-md">
                    {/* Front Face */}
                    <div className="glass-card absolute inset-0 flex flex-col justify-center rounded-xl p-8 [backface-visibility:hidden]">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full text-primary-container">
                        <span className="material-symbols-outlined text-5xl">
                          {card.icon}
                        </span>
                      </div>
                      <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                      <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                        {card.description}
                      </p>
                      <div
                        className={`flex items-center text-xs font-bold uppercase tracking-widest ${card.textColor}`}
                      >
                        Learn More
                        <span className="material-symbols-outlined ml-2 text-sm">
                          arrow_forward
                        </span>
                      </div>
                    </div>

                    {/* Back Face (Hover State) */}
                    <div className="absolute inset-0 flex flex-col bg-gradient-to-br from-primary to-primary-container items-center justify-center rounded-xl p-8 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <h3 className="mb-4 text-2xl font-bold">
                        Explore {card.title}
                      </h3>
                      <p className="mb-6 text-sm opacity-90">
                        Discover how our software solutions can transform your
                        business workflow.
                      </p>
                      <Link
                        to={card.route}
                        className="rounded-full mt-6 border-2 border-white px-6 py-2 text-sm font-bold transition-colors hover:bg-white hover:text-[#1A7A88]"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#ffffff] px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="relative mb-6 md:mb-12 w-full  py-8 sm:py-10 overflow-visible md:py-12">
              {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
              <div className="absolute top-14 left-1/2   -translate-x-1/2 select-none font-headline font-black text-[4.5rem] tracking-tighter leading-none text-primary-container/[0.15] dark:text-white/[0.01] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-20 md:text-[10rem] lg:top-16 lg:text-[12rem]">
                INDUSTRIES
              </div>

              {/* Main Content Layout Container */}
              <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
                {/* Minimalist Category Kicker */}
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
                  Reach & Scale
                </span>

                {/* Headline */}
                <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-8xl dark:text-white">
                  We Serve
                </h2>

                {/* Editorial Description */}
                <p className="mt-8 sm:mt-10 max-w-xl text-balance text-base font-light font-body leading-relaxed tracking-wide text-on-surface-variant sm:text-lg md:text-xl dark:text-zinc-400">
                  From luxury private islands to intimate homestays, our{" "}
                  <span className="relative inline-block font-bold text-on-background dark:text-white pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary-container transition-all duration-350 hover:after:h-[4px]">
                    technology adapts
                  </span>{" "}
                  to your scale.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={`icon-${industry.label}`}
                  initial={{
                    y: isMobile ? 30 : 0,
                    x: isMobile ? 0 : 100,
                    opacity: 0,
                  }}
                  whileInView={{ y: 0, x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: isMobile ? 0.45 : 0.65,
                    delay: isMobile ? index * 0.05 : index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div className="cursor-default rounded-lg border border-transparent p-6 text-center transition-all duration-500 ease-out transform-gpu hover:scale-[1.1] hover:border-primary/5">
                    <span className="material-symbols-outlined mb-4 block text-8xl text-[#1F8FA0]">
                      {industry.icon}
                    </span>
                    <span className="text-lg font-bold uppercase tracking-widest text-on-surface">
                      {industry.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-50 px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="relative mb-6 md:mb-12 w-full  py-8 sm:py-10 overflow-visible md:py-12">
              {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
              <div className="absolute top-11 left-1/2 -translate-x-1/2 select-none font-headline font-black text-[5.5rem] tracking-tighter leading-none text-primary-container/[0.16] dark:text-white/[0.01] whitespace-nowrap xs:text-[8rem] sm:-top-4 sm:text-[9rem] md:top-20 md:text-[10rem] lg:top-9 lg:text-[14rem]">
                HORIZON
              </div>

              {/* Main Content Layout Container */}
              <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
                {/* Minimalist Category Kicker */}
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
                  Scale & Ambition
                </span>

                {/* Headline */}
                <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-8xl dark:text-white">
                  Designed for Every Horizon
                </h2>

                {/* Editorial Description */}
                <p className="mt-8 sm:mt-10 max-w-3xl text-balance text-base font-light font-body leading-relaxed tracking-wide text-on-surface-variant sm:text-lg md:text-xl dark:text-zinc-400">
                  From boutique guesthouses to sprawling{" "}
                  <span className="relative inline-block font-bold text-on-background dark:text-white pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary-container transition-all duration-350 hover:after:h-[4px]">
                    private island resorts
                  </span>
                  , our platform scales with your ambition.
                </p>
              </div>
            </div>

            <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 px-4 py-8 bg-stone-50">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.label}
                  initial={{
                    y: isMobile ? 30 : 0,
                    x: isMobile ? 0 : 120,
                    opacity: 0,
                  }}
                  whileInView={{ y: 0, x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: isMobile ? 0.45 : 0.7,
                    delay: isMobile ? index * 0.05 : index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div className="group relative break-inside-avoid overflow-hidden rounded-md bg-stone-100 transition-all duration-500 hover:shadow-2xl">
                    <div
                      className={`relative w-full overflow-hidden 
          aspect-[1] 
          sm:aspect-[3/4] 
          ${
            index % 3 === 0
              ? "md:aspect-[3/4]"
              : index % 2 === 0
                ? "md:aspect-square"
                : "md:aspect-[4/5]"
          }`}
                    >
                      {/* Base Image: Grayscale to Color Transition */}
                      <img
                        className="h-full w-full object-cover grayscale-[50%] brightness-90 transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                        src={industry.image}
                        alt={industry.alt}
                      />

                      {/* 1. Minimalist Header */}
                      <div className="absolute top-0 left-0 p-6 hidden md:flex items-center gap-3 transition-opacity duration-500 group-hover:opacity-0">
                        <span className="material-symbols-outlined text-[#26AEBF] text-2xl font-light leading-none">
                          {industry.icon || "star"}
                        </span>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wide drop-shadow-md">
                          {industry.label}
                        </h3>
                      </div>

                      {/* 2. The "Royal Reveal" Overlay (Centered Hover State) */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 md:opacity-0 transition-all duration-700 ease-out md:group-hover:opacity-100 bg-stone-900/40 backdrop-blur-[3px]">
                        <div className="text-center p-6 transform translate-y-0 md:translate-y-8 transition-transform duration-500 ease-out md:group-hover:translate-y-0">
                          {/* Elegant Icon or Symbol */}
                          <span className="material-symbols-outlined text-white text-7xl mb-3 block font-extralight">
                            {industry.icon || "star"}
                          </span>

                          <h3 className="text-3xl text-white mb-2 tracking-tight">
                            {industry.label}
                          </h3>

                          <p className="text-stone-200 text-md leading-relaxed max-w-[180px] mx-auto opacity-100 md:opacity-0 transition-opacity duration-700 delay-100 md:group-hover:opacity-100">
                            {industry.hoverDescription}
                          </p>
                        </div>
                      </div>

                      {/* 3. Royal Framing: Thin Interior Border */}
                      <div className="absolute inset-4 border border-white/0 transition-all duration-700 group-hover:border-white/20 pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorksSection />

        <PageOutline path="/" />

        <FAQSection
          items={getRouteFaq("/")}
          title="Frequently Asked Questions"
          subtitle="About LushWare software for Maldives tourism businesses"
        />

        <section className="bg-[#Ffffff]  px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-32">
          <div className="relative mb-6 md:mb-12 w-full  py-8 sm:py-10 overflow-visible md:py-12">
            {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
            <div className="absolute top-9 left-1/2 -translate-x-1/2 select-none font-headline font-black text-[6rem] tracking-tighter leading-none text-primary-container/[0.16] dark:text-white/[0.01] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-20 md:text-[10rem] lg:top-4 lg:text-[14rem]">
              TRUSTED
            </div>

            {/* Main Content Layout Container */}
            <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
              {/* Minimalist Category Kicker */}
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
                Trusted by the Best
              </span>

              {/* Headline */}
              <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-7xl dark:text-white">
                Why Industry Leaders{" "}
                <span className="text-primary">
                  Choose <br className="hidden sm:block" /> LUSHWARE
                </span>
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 mt-20 overflow-hidden">
            {" "}
            {/* Added overflow-hidden to prevent horizontal scroll during animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-100">
              {whyChooseItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    y: isMobile ? 30 : 0,
                    x: isMobile ? 0 : 120,
                    opacity: 0,
                  }}
                  whileInView={{ y: 0, x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: isMobile ? 0.45 : 0.7,
                    delay: isMobile ? index * 0.06 : index * 0.12,
                    ease: "easeOut",
                  }}
                  className="group relative p-8 md:p-12 border-r border-b border-gray-200 transition-colors duration-300 hover:bg-gray-50/50"
                >
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-primary transition-transform duration-300 group-hover:scale-110">
                      <span className="material-symbols-outlined !text-3xl ">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed text-md md:text-base">
                    {item.description}
                  </p>

                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
            <div
              className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-cover bg-center bg-no-repeat p-8 sm:p-12 md:p-16 lg:p-20"
              style={{ backgroundImage: `url('/cta.jpg')` }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r
          from-slate-950/90 via-slate-950/85 to-slate-950/70
          lg:from-slate-950/90 lg:via-slate-950/40 lg:to-transparent"
              />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-3 lg:gap-12">
                {/* Content panel */}
                <div className="lg:col-span-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-inset ring-white/30 backdrop-blur-md mb-6 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    <span>Next Generation Platform</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
                    Ready to transform your <br className="hidden sm:block" />
                    software experience?
                  </h2>

                  <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200 font-normal">
                    Join the growing network of companies leading the digital
                    revolution with LushWare's enterprise solutions.
                  </p>

                  {/* Action Panel */}
                  <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
                    <a
                      href={WHATSAPP_LANDING_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center gap-3 sm:justify-between overflow-hidden rounded-xl bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-primary/90 hover:shadow-[0_0_35px_rgba(0,112,243,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[220px]"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">chat</span>
                        Get Started Now
                      </span>
                      <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                      <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-0" />
                    </a>

                    <Link
                      to="/contact"
                      className="group flex items-center justify-center gap-3 sm:justify-between rounded-xl border border-white/20 bg-slate-900/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-950 hover:border-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[220px]"
                    >
                      <span>Schedule a Demo</span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center text-slate-300 transition-all duration-300 group-hover:text-slate-950 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Empty column preserving the image on large screens */}
                <div
                  className="hidden lg:block lg:col-span-1 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
