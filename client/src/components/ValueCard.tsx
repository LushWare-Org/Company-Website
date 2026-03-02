import React from "react";

type ValueCardProps = {
  num: string;
  title: string;
  desc: string;
  link: string;
  offset?: boolean;
};

const ValueCard: React.FC<ValueCardProps> = ({
  num,
  title,
  desc,
  link,
  offset = false,
}) => {
  return (
    <div
      className={`group relative h-[380px] rounded-[2.5rem] bg-white border-2 border-emerald-400 overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/20 ${
        offset ? "md:translate-y-8" : ""
      }`}
    >
      {/* THE BG FILL: Expands from the top-left circle on hover */}
      <div className="absolute top-10 left-10 w-15 h-15 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full scale-0 group-hover:scale-[12] transition-transform duration-700 ease-in-out z-0" />

      {/* Content Layer */}
      <div className="relative z-10 h-full p-8 md:p-10 flex flex-col">
        {/* Top Area */}
        <div className="mb-8 flex justify-between items-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-500">
            <span className="text-emerald-600 group-hover:text-white font-bold transition-colors">
              {num}
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-500 tracking-tight">
            {title}
          </h4>
          <p className="text-slate-600 group-hover:text-white leading-relaxed text-md transition-colors duration-500">
            {desc}
          </p>
        </div>

        {/* Bottom Interaction */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs font-bold text-slate-900 group-hover:text-white uppercase tracking-widest transition-colors">
              {link}
            </span>
            <div className="w-8 h-[2px] bg-emerald-500 group-hover:bg-white transition-all duration-500" />
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-2 group-hover:translate-x-0">
            <span className="text-white text-lg">→</span>
          </div>
        </div>
      </div>

      {/* Glass Glare Overlay for extra depth in light mode */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ValueCard;
