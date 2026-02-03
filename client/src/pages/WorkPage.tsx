import { useEffect, useRef, useState } from "react";

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

              <h1 className="text-4xl md:text-6xl font-bold text-gray-950 tracking-tighter leading-none">
                Our Projects <span className="text-gray-500 font-light mx-1">— </span> 
                <span className="relative inline-block text-emerald-600">
                  Showcasing Innovation
                </span>
              </h1>

              <p className="mt-5 text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
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
              ref={(el) => { projectRefs.current[index] = el; }}
              className={`group flex flex-col bg-white transition-all duration-700 ${
                visibleProjects.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index % 2) * 150}ms` }}
            >
              
              {/* Project Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-50 rounded-t-2xl border border-gray-100 mb-10 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-emerald-100 group-hover:border-emerald-200">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/5 transition-colors duration-500 flex items-center justify-center">
                    <div className="bg-gray-900 p-5 border-2 border-white rounded-full shadow-2xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-12 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest bg-gray-800 text-white px-3 py-1 rounded-sm">
                      {project.client}
                    </span>
                    <span className="text-gray-600 font-mono text-[10px]">/ 0{index + 1}</span>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-950 tracking-tight transition-colors group-hover:text-emerald-700">
                    {project.name}
                  </h4>
                  <p className="text-gray-900 text-base leading-relaxed ">
                    {project.summary}
                  </p>
                  <p className="text-gray-500 text-md leading-relaxed  ">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="
                        group/link 
                        inline-flex items-center gap-3 
                        text-[10px] font-bold uppercase tracking-[0.2em] 
                        /* Added ! (important) to ensure white text overrides defaults */
                        !text-white bg-slate-800 
                        px-8 py-4
                        relative overflow-hidden
                        transition-all duration-300
                        /* Added a slight lift effect on hover */
                        hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/20
                        rounded-3xl
                      "
                    >
                      {/* Background Slide Overlay */}
                      <span className="absolute inset-0 w-0 bg-emerald-600 transition-all duration-500 ease-out group-hover/link:w-full"></span>
                      
                      {/* Text Label - Wrapped in a span with relative z-index */}
                      <span className="relative z-10 block">
                        Visit Platform
                      </span>
                      
                      {/* Globe Icon */}
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="relative z-10 transition-transform duration-700 group-hover/link:rotate-[360deg]"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
