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
    <>
      {/* Inject Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&display=swap');

        .pb-root * { font-family: 'DM Sans', sans-serif; }
        .pb-serif { font-family: 'DM Serif Display', serif; }

        .pb-hero-line {
          animation: pb-fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .pb-hero-line:nth-child(2) { animation-delay: 0.1s; }
        .pb-hero-line:nth-child(3) { animation-delay: 0.2s; }
        .pb-hero-line:nth-child(4) { animation-delay: 0.3s; }

        @keyframes pb-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pb-grid-dot {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .pb-program-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0;
          background: #059669;
          opacity: 0.06;
          transition: width 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .pb-program-row:hover::before { width: 100%; }

        .pb-sweep-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #059669;
          transform: translateX(-101%);
          transition: transform 0.45s cubic-bezier(0.85,0,0.15,1);
          z-index: 0;
        }
        .pb-program-row:hover .pb-sweep-btn::after { transform: translateX(0); }

        .pb-modal-animate {
          animation: pb-modalIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes pb-modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .pb-tag {
          transition: background 0.25s, color 0.25s, border-color 0.25s;
        }
        .pb-tag:hover {
          background: #ecfdf5;
          border-color: #6ee7b7;
          color: #065f46;
        }
      `}</style>

      <section
        id="project-base"
        className="pb-root scroll-mt-28 py-16 "
      >
        <div className="mx-auto">
          <div className="mt-10 md:mt-20 mx-auto">
            {/* ── HEADER ─────────────────────────────────── */}
            <div className="mb-12 md:mb-20 max-w-7xl mx-auto px-6 text-center relative">
              {/* Dot grid accent */}
              <div className="pb-grid-dot absolute inset-0 -z-10 opacity-60 pointer-events-none" />

              <div className="pb-hero-line flex items-center justify-center gap-3 mb-7 md:mb-9">
                <div className="h-px w-8 bg-emerald-600" />
                <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                  Project Base
                </div>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <h2 className="pb-hero-line pb-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-slate-900 leading-[1.05]">
                Become a{" "}
                <span className="relative inline-block  text-emerald-600">
                  Product Builder
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 4"
                    preserveAspectRatio="none"
                    height="4"
                  >
                    <path
                      d="M0,2 Q50,0 100,2 T200,2"
                      stroke="#059669"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                ,
                <br className="hidden md:block" />
                not just a learner.
              </h2>

              <p className="pb-hero-line mt-7 text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                Choose a track and apply now. We align{" "}
                <span className="text-emerald-600 font-semibold">
                  scope, timelines, and real outcomes
                </span>{" "}
                so your work actually ships.
              </p>
            </div>
          </div>

          {/* ── PRIMARY CTA HERO ───────────────────────── */}
          <div className="w-full mb-16 md:mb-28">
            <div className="relative overflow-hidden bg-emerald-600">
              {/* Geometric accent lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/10" />
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/10" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
                <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
                {/* Subtle grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />
              </div>

              <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-14 py-16 sm:py-20 md:py-24 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full bg-white/10 border border-white/50 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                  <span className="text-white/90 text-[10px] font-semibold uppercase tracking-[0.2em]">
                    Now Accepting Applications
                  </span>
                </div>

                <h3 className="pb-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
                  Build real products.{" "}
                  <span className=" text-emerald-50 block md:inline">
                    Work like an industry engineer.
                  </span>
                </h3>

                <p className="mt-6 text-emerald-50 text-base sm:text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
                  Collaborate with teams, solve real problems, and gain
                  experience that actually matters.
                </p>

                <div className="mt-9 max-w-lg mx-auto border-l-2 border-white/30 pl-5 text-left">
                  <p className="text-white/90 text-sm sm:text-base font-light  leading-relaxed">
                    "You don't learn by watching — you learn by building. Here,
                    your work becomes part of real products."
                  </p>
                </div>

                <div className="mt-12 md:mt-14">
                  <button
                    onClick={() => {
                      const element =
                        document.getElementById("active-programs");
                      element?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="group relative  cursor-pointer inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-800 font-semibold text-sm uppercase tracking-[0.18em] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] active:scale-[0.98]"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Start My Journey
                    </span>
                    <svg
                      className="relative z-10 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-slate-900 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── TWO-COLUMN INFO ────────────────────────── */}
          <div className="max-w-7xl mx-auto bg-[#ffffff] px-6 sm:px-8">
            <div className="grid md:grid-cols-2 gap-0 mb-16 md:mb-24">
              {/* Col 1 */}
              <div className="group py-12 md:py-16 md:pr-16 border-b md:border-b-0 md:border-r border-slate-200">
                <div className="space-y-8">
                  {/* Section label */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-emerald-600" />
                    <span className="text-[12px] font-bold text-emerald-600 uppercase tracking-[0.2em]">
                      The Platform
                    </span>
                  </div>

                  <div className="space-y-5">
                    <h4 className="pb-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.1]">
                      What is{" "}
                      <span className=" text-slate-500 group-hover:text-emerald-600 transition-colors duration-500">
                        Lush Project Base?
                      </span>
                    </h4>

                    <p className="text-slate-500 leading-relaxed text-base md:text-lg font-light">
                      Lush Project Base is a hands-on environment where you
                      contribute directly to{" "}
                      <span className="text-slate-900 font-medium">
                        real software products
                      </span>{" "}
                      that we continuously build and improve.
                    </p>

                    <p className="text-slate-500 leading-relaxed text-base md:text-lg font-light">
                      This is not traditional training. You learn by working on
                      live projects, gaining practical experience in real-world
                      production environments.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Software Development Projects",
                      "AI Research & Development",
                      "Production-Level Experience",
                    ].map((item) => (
                      <span
                        key={item}
                        className="pb-tag px-4 py-2 bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 2 */}
              <div className="group/legacy py-12 md:py-16 md:pl-16">
                <div className="space-y-8">
                  {/* Section label */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-slate-300" />
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                      Our Mission
                    </span>
                  </div>

                  <h4 className="pb-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.1]">
                    Make Partner Of{" "}
                    <span className="">A Legacy of Innovation & Success</span>
                  </h4>

                  <div className="space-y-5">
                    <div className="relative pl-6 border-l-2 border-slate-900 group-hover/legacy:border-emerald-600 transition-colors duration-500">
                      <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light">
                        As{" "}
                        <strong className="text-slate-900 font-semibold">
                          LushWare ORG
                        </strong>
                        , we continuously create new platforms that help the
                        general public simplify their daily lives, while
                        consistently pushing boundaries and embracing emerging
                        technologies.
                      </p>
                    </div>

                    <p className="text-slate-500 leading-relaxed pl-8 text-base md:text-lg font-light">
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

          {/* ── ACTIVE PROGRAMS ────────────────────────── */}
          <div
            id="active-programs"
            className="max-w-7xl mx-auto py-2 bg-[#ffffff] px-6 sm:px-8"
          >
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <h2 className="pb-serif text-5xl sm:text-6xl font-normal tracking-tight text-slate-900 leading-none">
                Active <span className=" text-emerald-600">Programs.</span>
              </h2>

              <div className="hidden sm:flex items-center gap-2 text-slate-400 text-sm font-medium uppercase tracking-[0.15em]">
                <span>{programs.length} tracks available</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            <div className="border-t border-slate-200">
              {programs.map((program, index) => (
                <div
                  key={program.title}
                  ref={(el) => {
                    programRefs.current[index] = el;
                  }}
                  onClick={() => setSelectedProgram(program)}
                  className={`pb-program-row group relative px-6 flex flex-col md:flex-row md:items-center justify-between py-9 sm:py-12 border-b border-slate-200 cursor-pointer transition-all duration-700 ${
                    visiblePrograms.has(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${(index % 2) * 150}ms` }}
                >
                  {/* Left */}
                  <div className="flex items-start gap-8 sm:gap-14 md:gap-10 lg:gap-14">
                    <span className="font-mono text-[11px] text-slate-300 group-hover:text-emerald-500 transition-colors duration-300 pt-1.5 shrink-0 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                        {program.title}
                      </h3>
                      <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                        {program.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="mt-6 md:mt-0 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10 ml-14 sm:ml-0">
                    <p className="block lg:hidden text-slate-600 text-md leading-relaxed max-w-sm font-light">
                      {program.description}
                    </p>
                    <p className="hidden lg:block text-slate-600 text-md leading-relaxed max-w-[300px] font-light opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                      {program.description}
                    </p>

                    {/* CTA Button */}
                    <button className="pb-sweep-btn cursor-pointer relative shrink-0 h-12 sm:h-13 px-7 sm:px-9 bg-slate-900 overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
                      <div className="relative z-10 flex items-center gap-2.5">
                        <span className="text-white text-[10px] font-bold uppercase tracking-[0.18em] whitespace-nowrap">
                          Apply Now
                        </span>
                        <svg
                          className="w-3.5 h-3.5 text-white transition-transform duration-500 group-hover:translate-x-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
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

        {/* ── MODAL ──────────────────────────────────── */}
        {selectedProgram &&
          createPortal(
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
              <div
                className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
                onClick={() => setSelectedProgram(null)}
              />
              <div className="pb-modal-animate relative w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-emerald-600" />
                <div className="p-7 sm:p-10 lg:p-14">
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
    </>
  );
}
