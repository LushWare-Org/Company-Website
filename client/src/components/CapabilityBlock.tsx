import React from "react";

export type Capability = {
  letter: string;
  title: string;
  intro: string;
  items: string[];
  question?: string;
  note?: string;
  extra?: string; // optional extra paragraph shown after the examples
};

const CapabilityBlock: React.FC<{ c: Capability; dark?: boolean }> = ({ c, dark }) => (
  <div className="group relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-slate-200 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)]">
    <div
      className={`lg:col-span-4 p-8 md:p-12 flex flex-col justify-between min-h-[220px] relative overflow-hidden text-white ${
        dark ? "bg-emerald-800" : "bg-[#062c1b]"
      }`}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <span className="relative font-['DM_Serif_Display'] text-7xl md:text-8xl italic opacity-30 leading-none">
        {c.letter}
      </span>
      <h4 className="relative text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
        {c.title}
      </h4>
    </div>

    <div className="lg:col-span-8 p-8 md:p-12 bg-white group-hover:bg-slate-50 transition-colors duration-500">
      <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-8">{c.intro}</p>

      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Examples</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
        {c.items.map((it) => (
          <li key={it} className="flex gap-3 text-slate-700 font-light leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            {it}
          </li>
        ))}
      </ul>

      {c.extra && <p className="text-slate-500 font-light leading-relaxed mb-8">{c.extra}</p>}

      {(c.question || c.note) && (
        <div className="border-l-2 border-emerald-600 pl-6">
          {c.note && <p className="text-slate-500 font-light mb-3 leading-relaxed">{c.note}</p>}
          {c.question && (
            <>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700 mb-2">
                Business question
              </p>
              <p className="font-['DM_Serif_Display'] text-xl md:text-2xl text-slate-900 leading-snug">
                "{c.question}"
              </p>
            </>
          )}
        </div>
      )}
    </div>
  </div>
);

export default CapabilityBlock;