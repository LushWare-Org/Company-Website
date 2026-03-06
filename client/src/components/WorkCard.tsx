export type WorkProject = {
  name: string;
  client: string;
  summary: string;
  description: string;
  image: string;
  link: string;
};

type WorkCardProps = {
  project: WorkProject;
  index: number;
  isVisible?: boolean;
  ctaAlign?: "start" | "center";
  className?: string;
  ctaClassName?: string;
};

const dmSans = "'DM Sans', sans-serif";
const dmSerif = "'DM Serif Display', serif";

export default function WorkCard({
  project,
  index,
  isVisible = true,
  ctaAlign = "start",
  className,
  ctaClassName,
}: WorkCardProps) {
  return (
    <div
      style={{ transitionDelay: `${(index % 2) * 150}ms`, fontFamily: dmSans }}
      className={`group relative border border-slate-100 bg-white overflow-hidden transition-all duration-500 hover:border-emerald-300 hover:shadow-[0_24px_64px_rgba(16,185,129,0.08)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className ?? ""}`}
    >
      {/* Emerald top accent on hover */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />

      <div className="flex flex-col  gap-8">

        {/* Image block */}
        <div className="w-full">
          <div
            onClick={() => window.open(project.link, "_blank")}
            className="relative aspect-video cursor-pointer overflow-hidden bg-emerald-50 shadow-md transition-all duration-500 group-hover:shadow-[0_20px_48px_-12px_rgba(16,185,129,0.2)]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-[2500ms] ease-out"
            />
            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/5 transition-colors duration-500 flex items-center justify-center">
              <div className="bg-gray-900 p-8 border-2 border-white shadow-2xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-3 right-4 text-[72px] font-black text-white/10 leading-none select-none pointer-events-none tracking-tighter">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Text block */}
        <div className="w-full p-4 sm:px-6 sm:py-10 space-y-6">

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
            className="text-3xl md:text-4xl font-normal text-slate-900 leading-[1.1] tracking-tight group-hover:text-emerald-900 transition-colors duration-400"
          >
            {project.name}
          </h3>

          {/* Summary */}
          <p className="text-base leading-[1.8] text-slate-700 font-normal">
            {project.summary}
          </p>

          {/* Description */}
          <p className="text-base leading-[1.8] text-slate-500 font-light">
            {project.description}
          </p>

          {/* CTA */}
          <div className={`pt-1 flex  ${ctaAlign === "center" ? "justify-center" : "justify-start"} ${ctaClassName ?? ""}`}>
            <button
              onClick={() => window.open(project.link, "_blank")}
              className="group/btn relative cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] active:scale-[0.98]"
            >
              <span className="relative z-10">Visit Platform</span>
              <svg
                className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
              <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}