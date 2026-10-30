import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { WORK_PROJECTS } from "../data/work";

const projects = WORK_PROJECTS;
const featured = WORK_PROJECTS[0];

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
            <span className="block text-balance">Booking Systems &amp; Travel</span>
            <span className="mt-1 block sm:mt-2">
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary-container bg-clip-text text-transparent drop-shadow-sm">
                Platforms Built for the
              </span>{" "}
              <span className="text-on-surface">Maldives</span>
            </span>
          </h1>

          {/* Optimized Description Reading Width */}
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant font-medium xs:max-w-sm sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
            Booking systems, agency platforms and travel websites we have
            built for speedboat operators and travel businesses in the Maldives
            and beyond — all live today.
          </p>

          {/* Premium Split-Action Controller */}
          <div className="mt-8 inline-flex w-full max-w-xs flex-col items-center justify-center gap-2.5 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:bg-surface-container-low/60 sm:p-2 sm:rounded-full sm:border sm:border-surface-variant/30 sm:backdrop-blur-md">
            <a
              href="#projects"
              className="w-full sm:w-auto sm:min-w-[180px] rounded-full bg-gradient-to-br from-primary to-primary-container px-6 py-3 text-center font-bold text-on-primary shadow-md shadow-primary/5 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:py-3.5"
            >
              View Projects
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto sm:min-w-[180px] rounded-full px-6 py-3 text-center text-sm font-bold text-on-surface transition-all duration-200 hover:bg-surface-container-high hover:text-primary active:scale-[0.98] sm:py-3.5 md:text-base"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-9 lg:px-0 pb-8 sm:pb-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Featured project */}
          <div className="md:col-span-8 group relative aspect-[16/9]  overflow-hidden rounded-xl bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-500">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={featured.image}
              alt={`${featured.client} — ${featured.name}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 text-white p-4 lg:p-0 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10">
              <div className="flex items-center gap-2 mb-2 sm:mb-3 md:mb-4">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold tracking-tight uppercase font-label">
                  Transport
                </span>
                <span className="text-white text-xs sm:text-sm font-medium">
                  Featured Project
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline font-bold mb-1 sm:mb-2 leading-tight">
                {featured.client}
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md">
                {featured.name}
              </p>
            </div>
          </div>

          {/* Featured project summary */}
          <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-container rounded-xl p-8 sm:p-8 md:p-8 lg:p-10 flex flex-col justify-between text-on-primary-container relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-white/95 font-bold tracking-widest text-xs uppercase font-label">
                What we built
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                Online speedboat ticketing in the Maldives.
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                {featured.summary} {featured.description}
              </p>
            </div>
            <div className="relative z-10 mt-6 sm:mt-8 flex flex-col gap-3">
              <Link
                to="/viduvaru"
                className="w-full py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white text-center text-sm sm:text-base rounded-lg font-headline font-bold transition-colors border border-white/10"
              >
                See Viduvaru
              </Link>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs font-bold uppercase tracking-widest text-white/90 hover:text-white"
              >
                Visit live site ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-7xl overflow-x-hidden mx-auto px-6 md:px-6 lg:px-0 py-12 scroll-mt-24">
        <div className="flex flex-col gap-6 mb-8 sm:flex-row sm:items-center sm:justify-between sm:mb-10 md:mb-12">
          <h2 className="text-2xl font-headline font-extrabold text-primary tracking-tight sm:text-3xl md:text-4xl">
            Recent Deployments
          </h2>
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
                  Ready to build your
                  <br className="hidden sm:block" />
                  next system?
                </h2>

                <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
                  Tell us how your business runs today. We work Maldives hours
                  (MVT, UTC+5) and reply on WhatsApp, phone or email.
                </p>

                {/* Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
                  <Link
                    to="/contact"
                    className="group relative flex items-center justify-center gap-3 sm:justify-between overflow-hidden rounded-xl bg-primary px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-primary/90 hover:shadow-[0_0_35px_rgba(0,112,243,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[220px]"
                  >
                    <span className="relative z-10">Start a Project</span>

                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>

                    <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-0" />
                  </Link>

                  <Link
                    to="/services"
                    className="group flex items-center justify-center gap-3 sm:justify-between rounded-xl border border-white/20 bg-slate-900/40 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-950 hover:border-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[220px]"
                  >
                    <span>View all Services</span>

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-slate-300 transition-all duration-300 group-hover:text-slate-950 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
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
