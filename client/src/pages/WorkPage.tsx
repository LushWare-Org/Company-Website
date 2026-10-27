import { useEffect, useRef, useState } from "react";
import WorkCard from "../components/WorkCard";
import { WORK_PROJECTS as projects } from "../data/work";



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
    <section id="work" className="py-24 md:py-32  bg-[#ffffff] selection:bg-emerald-50">
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

      <div className="works-root mx-auto max-w-7xl px-6 lg:px-0">
        {/* ── HEADER ───────────────────────────────────── */}
<div className="relative w-full max-w-6xl mt-12 mx-auto text-center mb-16 sm:mb-20 md:mb-28 px-4 sm:px-6">
  {/* Dot grid */}
  <div className="works-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

  {/* Label */}
  <div className="works-fadeUp flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-7">
    <div className="h-px w-5 sm:w-8 bg-emerald-600 shrink-0" />

    <div className="px-2 sm:px-3 py-1 border border-emerald-600 text-[9px] sm:text-[10px] font-bold text-emerald-700 uppercase tracking-[0.16em] sm:tracking-[0.22em] whitespace-nowrap">
      Selected Works
    </div>

    <div className="h-px w-5 sm:w-8 bg-emerald-600 shrink-0" />
  </div>

  {/* Headline */}
  <h1 className="works-fadeUp works-serif text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-slate-900 tracking-tight leading-tight sm:leading-[1.05] mb-5 sm:mb-7">
    Our Projects{" "}
    <span className="text-emerald-600">
      Showcasing Innovation
    </span>
  </h1>

  {/* Sub */}
  <p className="works-fadeUp text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 font-light max-w-4xl mx-auto leading-relaxed">
    A selection of our work demonstrating custom software solutions for
    real-world challenges.
  </p>
</div>

        {/* ── PROJECT GRID ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-16 gap-y-24 md:gap-y-32">
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
