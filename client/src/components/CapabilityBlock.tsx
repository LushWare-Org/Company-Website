import React, { useState } from "react";

export type Capability = {
  letter: string;
  title: string;
  intro: string;
  items: string[];
  question?: string;
  note?: string;
  extra?: string;
};

const CapabilityBlock: React.FC<{ c: Capability; dark?: boolean; defaultOpen?: boolean }> = ({ c, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
  <div className="group relative rounded-3xl bg-[#f5f5f7]/50 border border-transparent p-6 md:p-8 transition-all duration-300 hover:bg-[#e8e8ed]/20">
    
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
    >
      <div>
        <span className="block text-sm font-semibold uppercase tracking-[0.15em] text-[#6e6e73] mb-2">
          Phase {c.letter}
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f] leading-snug">
          {c.title}
        </h3>
      </div>
      <svg
        className={`w-6 h-6 shrink-0 text-[#1d1d1f] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
    >
    <div className="overflow-hidden">
    <div className="pt-6">
    <div className="mb-8">
      <p className="text-base md:text-lg text-[#515154] font-normal leading-relaxed">
        {c.intro}
      </p>
    </div>

    {/* Apple-style Clean Spaced Pill Chips */}
    <div className="mb-8">
      <div className="flex flex-wrap gap-2.5">
        {c.items.map((it) => (
          <span 
            key={it} 
            className="px-4 py-2 rounded-full bg-[#ffffff] text-sm md:text-base text-[#1d1d1f] font-medium shadow-2xs transition-transform duration-200 group-hover:scale-[1.02]"
          >
            {it}
          </span>
        ))}
      </div>
    </div>

    {c.extra && (
      <p className="text-sm md:text-base text-[#6e6e73] font-normal leading-relaxed mb-8">
        {c.extra}
      </p>
    )}

    {/* Clean White Frosted Callout Card */}
    {(c.question || c.note) && (
      <div className="pt-5 border-t border-[#d2d2d7]/60">
        {c.note && (
          <p className="text-sm md:text-base text-[#6e6e73] font-normal mb-3 leading-relaxed">
            {c.note}
          </p>
        )}
        {c.question && (
          <div className="p-5 rounded-2xl bg-white shadow-2xs">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#6e6e73] mb-1.5">
              Insight
            </span>
            <p className="text-base md:text-lg text-[#1d1d1f] font-medium leading-snug">
              "{c.question}"
            </p>
          </div>
        )}
      </div>
    )}

    </div>
    </div>
    </div>
  </div>
  );
};

export default CapabilityBlock;