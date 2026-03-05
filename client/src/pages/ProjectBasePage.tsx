import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import InquiryForm from "../components/InquiryForm";

type Program = {
  title: string;
  subtitle: string;
  description: string;
};

const programs: Program[] = [
  {
    title: "Software Engineering",
    subtitle: "Software Development Project Base",
    description:
      "Join structured builds with mentors, code reviews, and delivery rituals. Perfect for engineers growing into product ownership.",
  },
  {
    title: "AI & Automation",
    subtitle: "AI & Automation Project Base",
    description:
      "Hands-on automation and agent projects: data pipelines, workflow orchestration, and LLM-powered copilots.",
  },
];

export default function ProjectBasePage() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [visiblePrograms, setVisiblePrograms] = useState<Set<number>>(
    new Set(),
  );
  const programRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = programRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) {
              setVisiblePrograms((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    programRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="project-base" className="scroll-mt-28 py-16">
      <div className="mx-auto">
        <div className="mt-10 md:mt-20 mx-auto">
          {/* HEADER */}
          <div className="mb-12 md:mb-20 max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
            <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
              <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                Project Base
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 hero-line">
              Become a{" "}
              <span className="relative inline-block text-emerald-600">
                Product Builder
                <svg
                  className="absolute -bottom-1 left-0 w-full h-1 text-emerald-300"
                  viewBox="0 0 100 2"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="1"
                    x2="100"
                    y2="1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              ,
              <br className="hidden md:block" />
              not just a learner.
            </h2>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-800 max-w-3xl mx-auto leading-relaxed">
              Choose a track and apply now. We align{" "}
              <span className="text-emerald-600 font-semibold">
                scope, timelines, and real outcomes
              </span>{" "}
              so your work actually ships.
            </p>
          </div>
        </div>

        {/* PRIMARY CTA HERO - FULL WIDTH */}
        <div className="w-full mb-16 md:mb-28">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 border-t-4 border-emerald-400 p-8 sm:p-10 md:p-14 shadow-2xl flex flex-col items-center text-center">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-50 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>

            <div className="relative z-10 max-w-5xl w-full">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-medium tracking-tight text-white hero-line">
                Build real products.{" "}
                <span className="text-emerald-50 block md:inline">
                  Work like an industry engineer.
                </span>
              </h3>

              <p className="mt-5 text-white text-base sm:text-lg md:text-xl tracking-wide max-w-2xl mx-auto hero-line">
                Collaborate with teams, solve real problems, and gain experience
                that actually matters.
              </p>

              <div className="mt-8 md:mt-10 hero-line">
                <p className="text-white text-base sm:text-lg font-serif">
                  "You don't learn by watching — you learn by building. Here,
                  your work becomes part of real products."
                </p>
              </div>

              <div className="mt-10 md:mt-16 flex justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById("active-programs");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="group relative px-8 sm:px-14 py-4 sm:py-5 bg-white text-emerald-900 hero-line font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:bg-emerald-50 hover:tracking-[0.3em] shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
                >
                  <span className="relative z-10">Start My Journey →</span>
                  <div className="absolute inset-0 translate-x-2 translate-y-2 border border-emerald-400/50 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* TWO-COLUMN INFO SECTION */}
        <div className="max-w-7xl mx-auto px-7 sm:px-6">
          <div className="grid md:grid-cols-2 gap-0 mb-16 md:mb-20 border-y bg-white border-slate-200">
            {/* SECTION 1: THE CORE */}
            <div className="group relative py-10 md:py-16 md:pr-16 border-b md:border-b-0 md:border-r border-slate-400">
              <div className="space-y-8 md:space-y-12">
                <div className="space-y-5 md:space-y-6">
                  <h4 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tighter leading-[0.95]">
                    What is <br />
                    <span className="text-slate-400 group-hover:text-emerald-600 transition-colors duration-500">
                      Lush Project Base?
                    </span>
                  </h4>

                  <p className="text-slate-500 leading-relaxed text-base md:text-xl">
                    Lush Project Base is a hands-on environment where you
                    contribute directly to{" "}
                    <span className="text-slate-900 font-medium">
                      real software products
                    </span>{" "}
                    that we continuously build and improve.
                  </p>

                  <p className="text-slate-500 leading-relaxed text-base md:text-xl">
                    This is not traditional training. You learn by working on
                    live projects, gaining practical experience in real-world
                    production environments.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "Software Development Projects",
                    "AI Research & Development",
                    "Production-Level Experience",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-600 group-hover:border-emerald-200 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* SECTION 2: THE LEGACY */}
            <div className="group/legacy relative py-10 md:py-16 md:pl-16 flex flex-col justify-between">
              <div className="space-y-10 md:space-y-14">
                <div className="space-y-6 md:space-y-8">
                  <h4 className="text-3xl md:text-5xl  text-slate-900 tracking-tighter leading-tight">
                    Make Partner Of <br />
                    <span className="text-slate-900">
                      A Legacy of Innovation & Success
                    </span>
                  </h4>

                  <div className="space-y-5 md:space-y-6">
                    <p className="text-slate-600 leading-relaxed text-base md:text-xl border-l-4 border-slate-900 pl-6 md:pl-8 group-hover/legacy:border-emerald-600 transition-colors duration-500">
                      As{" "}
                      <strong className="text-slate-900 font-black">
                        LushWare ORG
                      </strong>
                      , we continuously create new platforms that help the
                      general public simplify their daily lives, while
                      consistently pushing boundaries and embracing emerging
                      technologies.
                    </p>

                    <p className="text-slate-500 leading-relaxed pl-7 md:pl-9 text-base md:text-xl">
                      Our journey is driven by a commitment to excellence, a
                      strong customer-centric focus, and a passion for building
                      cutting-edge solutions that move both people and
                      businesses forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAM PATHS */}
        <div
          id="active-programs"
          className="max-w-7xl mx-auto py-2 px-4 sm:px-6"
        >
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-4xl sm:text-6xl  tracking-tighter text-slate-900">
              Active <span className="text-emerald-600">Programs.</span>
            </h1>
          </div>

          <div className="border-t border-slate-400">
            {programs.map((program, index) => (
              <div
                key={program.title}
                ref={(el) => {
                  programRefs.current[index] = el;
                }}
                onClick={() => setSelectedProgram(program)}
                className={`group relative flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-12 border-b border-slate-400 cursor-pointer transition-all duration-700 ${
                  visiblePrograms.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index % 2) * 150}ms` }}
              >
                {/* Left Side: Index & Title */}
                <div className="flex items-start gap-6 sm:gap-12 md:gap-8 lg:gap-20">
                  <span className="font-mono text-sm text-slate-400 group-hover:text-emerald-600 transition-colors duration-300 pt-1 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] group-hover:text-slate-600 transition-colors">
                      {program.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right Side: Description & Button */}
                <div className="mt-6 md:mt-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12 ml-12 sm:ml-0">
                  {/* Show description inline on mobile, hover on lg+ */}
                  <p className="block lg:hidden text-slate-600 text-sm leading-relaxed max-w-xs">
                    {program.description}
                  </p>
                  <p className="hidden lg:block text-slate-700 text-md leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {program.description}
                  </p>

                  {/* Sweep Button */}
                  <button className="relative rounded-3xl h-12 sm:h-14 w-40 sm:w-52 bg-slate-900 overflow-hidden transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] shrink-0">
                    <div className="absolute inset-0 z-0 -translate-x-full bg-emerald-600 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:translate-x-0" />
                    <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6">
                      <span className="text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                        Apply Now
                      </span>
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform duration-500 group-hover:translate-x-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedProgram &&
        createPortal(
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-all duration-500"
              onClick={() => setSelectedProgram(null)}
            />

            {/* Modal — fixed overflow-y-scroll + overflow-hidden conflict */}
            <div className="relative w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-white shadow-2xl rounded-3xl animate-in fade-in zoom-in-95 duration-300">
              <div className="p-6 sm:p-8 lg:p-14">
                <InquiryForm
                  inquiryType="project"
                  topic={selectedProgram.title}
                  project={selectedProgram.subtitle}
                  onSuccess={() => setSelectedProgram(null)}
                  onClose={() => setSelectedProgram(null)}
                  showCloseButton={true}
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
