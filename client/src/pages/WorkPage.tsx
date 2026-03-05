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
    <section id="work" className="py-24 md:py-28 selection:bg-emerald-50 ">

      
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-6xl mt-12 mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
              Selected Works
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6 hero-line">
            Our Projects <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800 hero-line">
              Showcasing Innovation
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-4xl mx-auto hero-line">
            A selection of our work demonstrating custom software solutions for
            real-world challenges.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
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
