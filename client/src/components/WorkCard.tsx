import { Link } from "react-router-dom";

export type WorkProject = {
  name: string;
  client: string;
  summary: string;
  description: string;
  image: string;
  /** Public website; omitted for projects we don't link to. */
  link?: string;
};

type WorkCardProps = {
  project: WorkProject;
  index: number;
  isVisible?: boolean;
  ctaAlign?: "start" | "center";
  className?: string;
  ctaClassName?: string;
  /** Path of the project's case study page, if it has one. */
  caseStudy?: string;
};

const dmSans = "'DM Sans', sans-serif";
const dmSerif = "'DM Serif Display', serif";

// White overlay on the image edges (sits on top of the image, no border, no gap)
export default function WorkCard({
  project,
  index,
  isVisible = true,
  ctaAlign = "start",
  className,
  ctaClassName,
  caseStudy,
}: WorkCardProps) {
  // "#" is a placeholder link: the button shows but goes nowhere.
  const openLink = () => {
    if (project.link && project.link !== "#") window.open(project.link, "_blank");
  };

  return (
    <div
      style={{ transitionDelay: `${(index % 2) * 150}ms`, fontFamily: dmSans }}
      className={`group relative border border-slate-100 bg-white overflow-hidden transition-all duration-500  ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className ?? ""}`}
    >
      <div className="flex flex-col gap-1">
        {/* Image block */}
        <div className="w-full">
          <div
            onClick={project.link ? openLink : undefined}
            className={`relative aspect-video overflow-hidden ${project.link ? "cursor-pointer" : ""}`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-[2500ms] ease-out"
            />

            {project.link && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gray-900 p-8 border-2 border-white shadow-2xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            )}
          </div>
        </div>

        {/* Text block — 2 columns */}
        <div className="w-full p-4 sm:px-6 sm:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Left column: meta + title + CTA */}
          <div className="flex flex-col space-y-6">
            {/* Meta row */}
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-emerald-600" />
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-emerald-700 border border-emerald-300 px-3 py-1.5">
                {project.client}
              </span>
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-slate-300 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Title — DM Serif Display */}
            <h3
              style={{ fontFamily: dmSerif }}
              className="text-3xl md:text-4xl font-normal text-slate-900 leading-[1.1] tracking-tight group-hover:text-emerald-900 transition-colors duration-300"
            >
              {project.name}
            </h3>

            {/* CTA (unchanged) */}
            <div
              className={`pt-1 flex flex-wrap gap-3 md:mt-auto ${ctaAlign === "center" ? "justify-center" : "justify-start"} ${ctaClassName ?? ""}`}
            >
              {caseStudy && (
                <Link
                  to={caseStudy}
                  className="inline-flex items-center gap-3 px-8 py-4 border border-slate-900 text-slate-900 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-slate-900 hover:text-white! transition-colors duration-300"
                >
                  Read Case Study
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
              {project.link && (
              <button
                onClick={openLink}
                className="group/btn relative cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] active:scale-[0.98]"
              >
                <span className="relative z-10">Visit Platform</span>
                <svg
                  className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
                <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
              </button>
              )}
            </div>
          </div>

          {/* Right column: summary + description */}
          <div className="space-y-6">
            <p className="text-base leading-[1.8] text-slate-700 font-normal">
              {project.summary}
            </p>
            <p className="text-base leading-[1.8] text-slate-500 font-light">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
