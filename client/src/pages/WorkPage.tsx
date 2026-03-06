import { useEffect, useRef, useState } from "react";
import WorkCard from "../components/WorkCard";

const projects = [
  {
    name: "Travel Booking Website",
    client: "Trip Sky Way",
    summary:
      "Trip Sky Way is a modern travel booking platform designed to help travelers discover destinations and plan seamless journeys.",
    description:
      "We developed a clean, responsive travel website focused on intuitive navigation, fast performance, and a streamlined booking experience tailored to modern travelers.",
    image: "/work/TripSkyWay.jpg",
    link: "https://tripskyway.com/",
  },
  {
    name: "Tour & Travel Website",
    client: "Holiday Vibes Tour",
    summary:
      "Holiday Vibes Tour is a travel website built to promote curated tours and immersive travel experiences.",
    description:
      "We crafted a vibrant and responsive platform that enables users to explore tour packages, view detailed itineraries, and make inquiries with ease.",
    image: "/work/HolidayVibesTour.jpg",
    link: "https://holidayvibestour.com/",
  },
  {
    name: "B2B Portal for Travel Agents",
    client: "Yomaldives",
    summary:
      "Yomaldives, a B2B portal designed to help travel agents boost their revenue.",
    description:
      "This platform is a perfect example of how our bespoke software solutions can empower businesses and drive success. This project highlights our ability to deliver tailored software solutions that meet our clients’ specific business needs.",
    image: "/work/yomaldives.png",
    link: "https://yomaldives.live/",
  },

  {
    name: "Speedboat Ticket Booking System",
    client: "Dream Speed",
    summary:
      "We’re thrilled to showcase our latest project, the Dream Speed Speedboat Booking System. We developed this platform to help travelers effortlessly search routes, check availability, and book their island journeys in the Maldives.",
    description:
      "This project is a perfect example of our commitment to creating bespoke software that solves real-world challenges and enhances user experiences.",
    image: "/work/dreamspeed.png",
    link: "https://www.dreamspeedmaldives.com/",
  },
  {
    name: "All-in-one Travel Agency Web Application",
    client: "Islekey Holidays",
    summary:
      "We’re excited to showcase a project close to our hearts: IsleKey Holdings, an all-in-one web application for a travel agency.",
    description:
      "We built a platform that not only manages bookings but truly helps users “Experience Paradise” from the moment they land on the site. This project is a perfect example of our ability to create seamless, user-friendly solutions that elevate businesses and delight their customers.",
    image: "/work/islekeyholidays.png",
    link: "https://islekeyholidays.com/",
  },
  {
    name: "Travel Agency Website",
    client: "Traveliccted",
    summary:
      "Traveliccted is a travel-focused website built to showcase curated travel experiences and destination packages.",
    description:
      "This project highlights our ability to design engaging travel platforms that combine strong visual storytelling with user-friendly booking flows and conversion-focused layouts.",
    image: "/work/Traveliccted.jpg",
    link: "https://traveliccted.com/",
  },
  {
    name: "Travel E-Commerce Platform",
    client: "Crown Voyages",
    summary:
      "Crown Voyages is a travel-focused e-commerce platform designed to showcase and sell curated travel products and services.",
    description:
      "This project demonstrates our expertise in building scalable e-commerce solutions with secure payments, dynamic product management, and a premium brand experience.",
    image: "/work/CrownVoyages.jpg",
    link: "https://crownvoyages.com/",
  },

  {
    name: "Travel Agency Websites",
    client: "Holiday Life",
    summary:
      "We’re proud to showcase Holiday Life, a custom web application we developed for a travel agency.",
    description:
      "Our team worked to create a seamless, user-friendly platform that helps users find their dream holiday. This project is a testament to our commitment to building high-quality, impactful software solutions.",
    image: "/work/holidaylife.jpg",
    link: "https://holidaylife.travel/",
  },
];

export default function WorkPage() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(
    new Set(),
  );
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) {
              setVisibleProjects((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (


<section id="work" className="py-24 md:py-32  selection:bg-emerald-50">
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

    .works-root * { font-family: 'DM Sans', sans-serif; }
    .works-serif  { font-family: 'DM Serif Display', serif; }

    .works-fadeUp {
      animation: wFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .works-fadeUp:nth-child(2) { animation-delay: 0.08s; }
    .works-fadeUp:nth-child(3) { animation-delay: 0.16s; }

    @keyframes wFadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Dot-grid background accent */
    .works-dotgrid {
      background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
      background-size: 28px 28px;
    }
  `}</style>

  <div className="works-root mx-auto max-w-7xl px-6">

    {/* ── HEADER ───────────────────────────────────── */}
    <div className="relative max-w-6xl mt-12 mx-auto text-center mb-20 md:mb-28">

      {/* Dot grid */}
      <div className="works-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

      {/* Label */}
      <div className="works-fadeUp flex items-center justify-center gap-3 mb-7">
        <div className="h-px w-8 bg-emerald-600" />
        <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
          Selected Works
        </div>
        <div className="h-px w-8 bg-emerald-600" />
      </div>

      {/* Headline */}
      <h1 className="works-fadeUp works-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
        Our Projects <br />
        <span className=" text-emerald-600">
          Showcasing Innovation
        </span>
      </h1>

      {/* Sub */}
      <p className="works-fadeUp text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
        A selection of our work demonstrating custom software solutions for
        real-world challenges.
      </p>
    </div>

    {/* ── PROJECT GRID ─────────────────────────────── */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-32">
      {projects.map((project, index) => (
        <div
          key={project.name}
          ref={(el) => {
            projectRefs.current[index] = el;
          }}
        >
          <WorkCard
            project={project}
            index={index}
            isVisible={visibleProjects.has(index)}
          />
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
