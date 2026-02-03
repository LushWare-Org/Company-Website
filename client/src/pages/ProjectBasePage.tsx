import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import InquiryForm from "../components/InquiryForm";

type Program = {
  title: string;
  subtitle: string; // Restored from data usage
  description: string;
};

const programs: Program[] = [
  {
    title: "Software Engineering", // Added title to match your mapping logic
    subtitle: "Software Development Project Base",
    description:
      "Join structured builds with mentors, code reviews, and delivery rituals. Perfect for engineers growing into product ownership.",
  },
  {
    title: "AI & Automation", // Added title to match your mapping logic
    subtitle: "AI & Automation Project Base",
    description:
      "Hands-on automation and agent projects: data pipelines, workflow orchestration, and LLM-powered copilots.",
  },
];

export default function ProjectBasePage() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [visiblePrograms, setVisiblePrograms] = useState<Set<number>>(new Set());
  const programRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = programRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisiblePrograms((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    programRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="project-base" className="scroll-mt-24 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-7xl mt-20 mx-auto px-6">


          {/* HEADER */}
          <div className="mb-20 text-center relative">
            <h2 className="text-5xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Become a{" "}
              <span className="relative inline-block text-emerald-600">
                Product Builder
                <svg className="absolute -bottom-1 left-0 w-full h-1 text-emerald-300" viewBox="0 0 100 2" preserveAspectRatio="none">
                  <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              ,
              <br className="hidden md:block" />
              not just a learner.
            </h2>

            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Choose a track and apply now. We align{" "}
              <span className="text-emerald-600 font-semibold">
                scope, timelines, and real outcomes
              </span>{" "}
              so your work actually ships.
            </p>
          </div>



          {/* PRIMARY CTA HERO */}
          <div className="grid lg:grid-cols-2 gap-14 items-center bg-emerald-50/60 border border-emerald-100 rounded-3xl p-10 md:p-16 text-slate-900 mb-28">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Build real products.{" "}
                <span className="text-emerald-600">
                  Work like an industry engineer.
                </span>
              </h3>

              <p className="mt-4 text-slate-600 max-w-xl">
                Collaborate with teams, solve real problems, and gain experience that
                actually matters.
              </p>

              <button 
                onClick={() => {
                  const element = document.getElementById('active-programs');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="mt-10 px-10 py-4 bg-emerald-600 text-white font-bold rounded-full transition-all duration-300 hover:bg-emerald-700 hover:scale-105 shadow-xl shadow-emerald-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
              >
                Start My Journey →
              </button>
            </div>

            <div className="border-l border-emerald-200 pl-10 hidden lg:block">
              <p className="text-slate-500 italic text-lg leading-relaxed">
                “You don’t learn by watching — you learn by building.  
                Here, your work becomes part of real products.”
              </p>
            </div>
          </div>

      <div className="grid md:grid-cols-2 gap-0 mb-20 border-y bg-white border-slate-200">

        {/* SECTION 1: THE CORE */}
        <div className="group relative py-16 pr-8 md:pr-16 border-b md:border-b-0 md:border-r border-slate-200">
          <div className="space-y-12">

            {/* Heading + Description */}
            <div className="space-y-6">
              <h4 className="text-4xl font-bold text-slate-900 tracking-tighter leading-[0.95]">
                What is <br />
                <span className="text-slate-400 group-hover:text-emerald-600 transition-colors duration-500">
                  Lush Project Base?
                </span>
              </h4>

              <p className="text-slate-500 leading-relaxed text-lg">
                Lush Project Base is a hands-on environment where you contribute directly
                to <span className="text-slate-900 font-medium">real software products</span>{" "}
                that we continuously build and improve.
              </p>

              <p className="text-slate-500 leading-relaxed text-lg">
                This is not traditional training. You learn by working on live projects,
                gaining practical experience in real-world production environments.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "Software Development Projects",
                "AI Research & Development",
                "Production-Level Experience",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-600 group-hover:border-emerald-200 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>


          </div>
        </div>

        {/* SECTION 2: THE LEGACY */}
        <div className="group/legacy relative py-16 md:pl-16 flex flex-col justify-between">
          <div className="space-y-14">

            <div className="space-y-8">
              <h4 className="text-4xl font-bold text-slate-900 tracking-tighter leading-tight">
                Make Partner Of <br />
                <span className="text-slate-900">A Legacy of Innovation & Success</span>
              </h4>

              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-slate-900 pl-8 group-hover/legacy:border-emerald-600 transition-colors duration-500">
                  As <strong className="text-slate-900 font-black">LushWare ORG</strong>, we
                  continuously create new platforms that help the general public simplify
                  their daily lives, while consistently pushing boundaries and embracing
                  emerging technologies.
                </p>

                <p className="text-slate-500 leading-relaxed pl-9 text-lg">
                  Our journey is driven by a commitment to excellence, a strong
                  customer-centric focus, and a passion for building cutting-edge
                  solutions that move both people and businesses forward.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

        </div>

        {/* PROGRAM PATHS */}
      <div id="active-programs" className="max-w-7xl mx-auto py-2 px-6">
        <div className="text-center mb-16">
          <div>
            <h1 className="text-5xl font-semibold tracking-tighter text-slate-900">
              Active Programs<span className="text-emerald-600">.</span>
            </h1>
          </div>
        </div>

        <div className="border-t border-slate-400">
          {programs.map((program, index) => (
            <div
              key={program.title}
              ref={(el) => { programRefs.current[index] = el; }}
              onClick={() => setSelectedProgram(program)}
              className={`group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-slate-400 cursor-pointer transition-all duration-700 ${
                visiblePrograms.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index % 2) * 150}ms` }}
            >
              {/* Left Side: Index & Title */}
              <div className="flex items-start gap-12 md:gap-20">
                <span className="font-mono text-md text-slate-400 group-hover:text-emerald-600 transition-colors duration-300 pt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-bold uppercase tracking-[0.2em] group-hover:text-slate-600 transition-colors">
                    {program.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Side: Description & Sweep Button */}
              <div className="mt-8 md:mt-0 flex items-center gap-12">
                <p className="hidden lg:block text-slate-700 text-md leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {program.description}
                </p>

                {/* Sweep Button */}
                <button className="relative rounded-3xl h-14 w-52 bg-slate-900 overflow-hidden transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                  {/* The Emerald Sweep (Going from left) */}
                  <div className="absolute inset-0 z-0 -translate-x-full bg-emerald-600 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:translate-x-0" />
                  
                  {/* Button Text & Icon */}
                  <div className="relative z-10  flex items-center justify-center gap-3 px-6">
                    <span className="text-white text-[11px] font-black uppercase tracking-[0.2em]">
                      Apply Now
                    </span>
                    <svg 
                      className="w-4 h-4 text-white transition-transform duration-500 group-hover:translate-x-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
      {selectedProgram && createPortal(
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-all duration-500" 
            onClick={() => setSelectedProgram(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl max-h-[94vh] overflow-y-scroll bg-white shadow-2xl rounded-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Form Content */}
            <div className="p-8 lg:p-14">
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
        document.body
      )}
    </section>
  );
}