import { useEffect, useRef, useState } from "react";
import WorkCard from "../components/WorkCard";

const projects = [
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
    name: "Job Listing Platform",
    client: "Jobszzy",
    summary:
      "Jobszzy is an online job board platform that aggregates current employment listings across various industries, helping both job seekers and employers connect efficiently.",
    description:
      "It features categorized job searches and provides tools for users to filter roles by location, type, or industry to simplify finding relevant opportunities.",
    image: "/work/jobszzy.jpg",
    link: "https://jobszzy.com/",
  },
  {
    name: "Travel Agency Website",
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
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleProjects((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
<section id="work" className="py-24 md:py-28 selection:bg-emerald-50 ">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="relative w-full py-16 mb-16 overflow-hidden border-b border-gray-300 group">
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-10">
            
            {/* Headline Section */}
            <div className="flex-1">
              {/* Small Category Label */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-[1px] bg-emerald-600"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600">
                  Selected Works
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-950 tracking-tighter leading-none hero-line">
                Our Projects <span className="text-gray-500 font-light mx-1">— </span> 
                <span className="relative inline-block text-emerald-600">
                  Showcasing Innovation
                </span>
              </h1>

              <p className="mt-5 text-gray-800 text-lg md:text-xl max-w-2xl leading-relaxed">
                A selection of our work demonstrating custom software solutions for real-world challenges.
              </p>
            </div>

          </div>
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
