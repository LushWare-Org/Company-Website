import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Travel Booking Website",
    client: "Trip Sky Way",
    summary:
      "Trip Sky Way is a modern travel booking platform designed to help travelers discover destinations and plan seamless journeys.",
    description:
      "We built a responsive travel platform with intuitive navigation, fast performance, and seamless booking experiences tailored for modern travelers worldwide.",
    image: "/work/TripSkyWay.webp",
    link: "https://tripskyway.com/",
  },
  {
    name: "Tour & Travel Website",
    client: "Holiday Vibes Tour",
    summary:
      "Holiday Vibes Tour is a travel website built to promote curated tours and immersive travel experiences.",
    description:
      "We created a vibrant platform enabling users to explore curated tour packages, detailed itineraries, and easily connect with travel experts seamlessly.",
    image: "/work/HolidayVibesTour.webp",
    link: "https://holidayvibestour.com/",
  },
  {
    name: "B2B Portal for Travel Agents",
    client: "Yomaldives",
    summary:
      "Yomaldives, a B2B portal designed to help travel agents boost their revenue.",
    description:
      "We delivered a tailored B2B platform empowering travel agents to streamline operations, increase revenue, and efficiently manage bookings with ease daily.",
    image: "/work/yomaldives.webp",
    link: "https://yomaldives.live/",
  },

  {
    name: "Speedboat Ticket Booking System",
    client: "Dream Speed",
    summary:
      "We're thrilled to showcase our latest project, the Dream Speed Speedboat Booking System. We developed this platform to help travelers effortlessly search routes, check availability, and book their island journeys in the Maldives.",
    description:
      "This project reflects our commitment to building bespoke platforms that simplify bookings, optimize operations, and deliver seamless experiences for travelers globally.",
    image: "/work/dreamspeed.webp",
    link: "https://www.dreamspeedmaldives.com/",
  },
  {
    name: "All-in-one Travel Agency Web Application",
    client: "Islekey Holidays",
    summary:
      "We're excited to showcase a project close to our hearts: IsleKey Holdings, an all-in-one web application for a travel agency.",
    description:
      "We developed a comprehensive platform that streamlines bookings, enhances user experiences, and empowers travel agencies to manage operations efficiently and grow.",
    image: "/work/islekeyholidays.webp",
    link: "https://islekeyholidays.com/",
  },
  {
    name: "Travel Agency Website",
    client: "Traveliccted",
    summary:
      "Traveliccted is a travel-focused website built to showcase curated travel experiences and destination packages.",
    description:
      "This project highlights our ability to create engaging platforms with strong storytelling, seamless navigation, and conversion-focused designs for travel businesses worldwide.",
    image: "/work/Traveliccted.webp",
    link: "https://traveliccted.com/",
  },
  {
    name: "Travel Agency Management System",
    client: "Crown Voyages",
    summary:
      "Crown Voyages is a powerful travel agency management system with automatic quotation generation designed to streamline operations.",
    description:
      "We developed a comprehensive management platform that enables travel agencies to handle bookings, generate quotations automatically, manage clients, and optimize daily operations efficiently through a centralized system.",
    image: "/work/CrownVoyages.jpg",
    link: "https://portal.crownvoyages.com/",
  },

  {
    name: "Travel Agency Websites",
    client: "Holiday Life",
    summary:
      "We're proud to showcase Holiday Life, a custom web application we developed for a travel agency.",
    description:
      "We created a seamless platform helping users discover ideal holidays while enabling businesses to deliver exceptional services and manage operations effectively every day.",
    image: "/work/holidaylife.jpg",
    link: "https://holidaylife.travel/",
  },
];

function OurWorkPage() {
  return (
    <main className="bg-[#ffffff] pb-24 pt-24 md:pt-12  text-on-background selection:bg-primary-container selection:text-on-primary-container">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#ffffff] px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        {/* Modern Background Accents */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[250px] w-full max-w-7xl bg-gradient-to-tr from-primary/5 via-primary-container/10 to-transparent blur-3xl opacity-70 sm:h-[320px] md:h-[400px]" />

        <div className="mx-auto max-w-5xl text-center">
          {/* Refined Modern Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-wider text-on-secondary-container backdrop-blur-sm border border-secondary-container/30 shadow-sm transition-all duration-300 hover:bg-secondary-container sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
            <span className="text-balance">Case Studies</span>
          </span>

          {/* Stronger, Cleaner Typographic Hierarchy */}
          <h1 className="mt-6 font-headline text-5xl font-extrabold tracking-tight text-on-surface leading-[1.2] xs:text-4xl sm:mt-8 sm:text-5xl sm:leading-[1.15] md:text-6xl lg:text-7xl">
            <span className="block text-balance">Empowering the</span>
            <span className="mt-1 block sm:mt-2">
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary-container bg-clip-text text-transparent drop-shadow-sm">
                Maldives Hospitality
              </span>{" "}
              <span className="text-on-surface">Ecosystem</span>
            </span>
          </h1>

          {/* Optimized Description Reading Width */}
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant font-medium xs:max-w-sm sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
            We partner with the world's most prestigious island resorts and
            marine conservationists to redefine digital operations in paradise.
          </p>

          {/* Premium Split-Action Controller */}
          <div className="mt-8 inline-flex w-full max-w-xs flex-col items-center justify-center gap-2.5 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:bg-surface-container-low/60 sm:p-2 sm:rounded-full sm:border sm:border-surface-variant/30 sm:backdrop-blur-md">
            <Link
              to="/case-studies"
              className="w-full sm:w-auto sm:min-w-[180px] rounded-full bg-gradient-to-br from-primary to-primary-container px-6 py-3 text-center font-bold text-on-primary shadow-md shadow-primary/5 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:py-3.5"
            >
              View Case Studies
            </Link>

            <button
              type="button"
              className="w-full sm:w-auto sm:min-w-[180px] rounded-full px-6 py-3 text-center text-sm font-bold text-on-surface transition-all duration-200 hover:bg-surface-container-high hover:text-primary active:scale-[0.98] sm:py-3.5 md:text-base"
            >
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-9 lg:px-0 pb-8 sm:pb-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Main image card */}
          <div className="md:col-span-8 group relative aspect-[16/9]  overflow-hidden rounded-xl bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-500">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://cdn.home-designing.com/wp-content/uploads/2011/12/maldives-resort-villa-1024x724.jpg"
              alt="Luxurious overwater bungalows in a Maldivian turquoise lagoon"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 text-white p-4 lg:p-0 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10">
              <div className="flex items-center gap-2 mb-2 sm:mb-3 md:mb-4">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold tracking-tight uppercase font-label">
                  Resort
                </span>
                <span className="text-white text-xs sm:text-sm font-medium">
                  Flagship Implementation
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline font-bold mb-1 sm:mb-2 leading-tight">
                Velana Sapphire Estate
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md">
                Full-stack operational automation across 120 villas and private
                yacht concierge.
              </p>
            </div>
          </div>

          {/* Stats card */}
          <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-container rounded-xl p-8 sm:p-8 md:p-8 lg:p-10 flex flex-col justify-between text-on-primary-container relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-white/95 font-bold tracking-widest text-xs uppercase font-label">
                The Impact
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                Digital transformation beyond expectations.
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl sm:text-2xl flex-shrink-0">
                    verified
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      99.8% Uptime
                    </p>
                    <p className="text-on-primary-container text-xs sm:text-sm">
                      Critical hospitality infrastructure reliability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl sm:text-2xl flex-shrink-0">
                    speed
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      35% Efficiency Gain
                    </p>
                    <p className="text-on-primary-container text-xs sm:text-sm">
                      Reduced manual guest service overhead.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 sm:mt-8">
              <button className="w-full py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base rounded-lg font-headline font-bold transition-colors border border-white/10">
                Read Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl overflow-x-hidden mx-auto px-6 md:px-6 lg:px-0 py-12">
        <div className="flex flex-col gap-6 mb-8 sm:flex-row sm:items-center sm:justify-between sm:mb-10 md:mb-12">
          <h2 className="text-2xl font-headline font-extrabold text-primary tracking-tight sm:text-3xl md:text-4xl">
            Recent Deployments
          </h2>
          <div className="flex gap-2 flex-wrap">
            <span className="px-4 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base bg-surface-container-highest text-primary font-bold rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">
              All
            </span>
            <span className="px-4 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base bg-surface-container-low text-on-surface-variant font-medium rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">
              Resorts
            </span>
            <span className="px-4 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base bg-surface-container-low text-on-surface-variant font-medium rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">
              Marine
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.client || index}
              initial={{ x: 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="flex flex-col group"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl  bg-surface-container shadow-sm group-hover:shadow-lg transition-all">
                <img
                  className="w-full h-full aspect-video min-h-[350px]  transition-transform duration-500"
                  src={project.image}
                  alt={project.name}
                />
                <div className="absolute inset-x-4 bottom-4 glass-card p-4 rounded-lg flex items-center justify-between border border-white/30">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-bold uppercase tracking-widest text-black font-label hover:text-primary-container transition-colors"
                  >
                    Live Project
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-secondary text-xs font-bold uppercase tracking-widest font-label">
                  Travel
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-on-surface-variant text-xs">
                  {project.client}
                </span>
              </div>
              <h4 className="text-2xl font-headline font-bold mb-3 text-primary">
                {project.name}
              </h4>
              <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
                {project.description}
              </p>
              <div className="mt-auto border-t border-surface-container-highest pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      language
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-primary font-label uppercase tracking-tighter">
                      Live Website
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {project.link.replace("https://", "").replace(/\/$/, "")}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
          <div
            className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-cover bg-center bg-no-repeat p-8 sm:p-12 md:p-16 lg:p-20"
            style={{ backgroundImage: `url('/cta.jpg')` }}
          >
            {/* Dark Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r
          from-slate-950/90 via-slate-950/85 to-slate-950/70
          lg:from-slate-950/90 lg:via-slate-950/40 lg:to-transparent"
            />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-3 lg:gap-12">
              {/* Content */}
              <div className="lg:col-span-2 max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-inset ring-white/30 backdrop-blur-md shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  <span>Hospitality Solutions</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
                  Ready to transform your
                  <br className="hidden sm:block" />
                  resort experience?
                </h2>

                <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
                  Join the Maldives&apos; leading hospitality brands in the
                  digital future.
                </p>

                {/* Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
                  <button
                    type="button"
                    className="group relative flex items-center justify-center gap-3 sm:justify-between overflow-hidden rounded-xl bg-primary px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-primary/90 hover:shadow-[0_0_35px_rgba(0,112,243,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[220px]"
                  >
                    <span className="relative z-10">Start a Project</span>

                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>

                    <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-0" />
                  </button>

                  <button
                    type="button"
                    className="group flex items-center justify-center gap-3 sm:justify-between rounded-xl border border-white/20 bg-slate-900/40 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-950 hover:border-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[220px]"
                  >
                    <span>View all Services</span>

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-slate-300 transition-all duration-300 group-hover:text-slate-950 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>

              {/* Empty column to preserve the right-side image composition */}
              <div
                className="hidden lg:block lg:col-span-1 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OurWorkPage;
