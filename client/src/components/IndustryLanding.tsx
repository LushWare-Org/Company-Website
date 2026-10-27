import { useState } from "react";
import { createPortal } from "react-dom";
import InquiryForm from "@/components/InquiryForm";
import type { MarketRelated } from "@/components/MarketFitSection";
import { OutlineClose, OutlineProblems, WhoItsFor } from "@/components/PageOutline";
import type { PageOutline } from "@/data/outlines/types";

export type LandingContent = {
  eyebrow: string;
  /** H1 split into lines; `highlight` renders in emerald. */
  title: { lead: string; highlight: string; tail?: string };
  intro: string;
  tags: string[];
  image: { src: string; alt: string };
  capabilities: {
    heading: string;
    highlight: string;
    intro: string;
    items: { title: string; desc: string; points: string[] }[];
  };
  marketRelated?: MarketRelated;
  /** Standard SEO outline: who it's for, problems, features, proof, guide, FAQ, CTA. */
  outline: PageOutline;
};

const steps = [
  {
    title: "Discuss your requirements",
    desc: "Share your workflows, systems and goals. We map the process and define exactly what to build.",
  },
  {
    title: "We build — no upfront payment",
    desc: "We develop the solution around your operation. Nothing is payable until it is ready and approved by you.",
  },
  {
    title: "Pay-as-you-go, fully managed",
    desc: "If it fits, adopt it as a managed pay-as-you-go service. We handle hosting, updates and support.",
  },
];

const Check = ({ className = "text-emerald-600" }: { className?: string }) => (
  <svg
    className={`w-4 h-4 mt-0.5 shrink-0 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg className={`w-3.5 h-3.5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-3 mb-6">
    <div className="h-px w-8 bg-emerald-600" />
    <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
      {children}
    </span>
    <div className="h-px w-8 bg-emerald-600" />
  </div>
);

/** Data-driven industry / use-case landing page in the same visual language as the hand-built solution pages. */
export default function IndustryLanding({ content: c }: { content: LandingContent }) {
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');
        .il-root * { font-family: 'DM Sans', sans-serif; }
        .il-root .il-serif, .il-root .il-serif * { font-family: 'DM Serif Display', serif; }
        .il-fadeUp { animation: il-fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .il-fadeUp:nth-child(2) { animation-delay: 0.1s; }
        .il-fadeUp:nth-child(3) { animation-delay: 0.2s; }
        .il-fadeUp:nth-child(4) { animation-delay: 0.3s; }
        @keyframes il-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="il-root w-full py-16 md:py-32 bg-[#ffffff]">
        {/* ── HERO ─────────────────────────────────── */}
        <div className="px-4 sm:px-8 lg:px-24 mb-20 md:mb-28">
          <div className="relative min-h-[80vh] bg-[#FAFAFA] flex items-center rounded-lg overflow-hidden py-12 lg:py-0">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/[0.35] border-l border-slate-200/60 hidden lg:block" />
            <div className="relative max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10">
              <div className="lg:col-span-6 text-left">
                <div className="il-fadeUp flex items-center gap-4 mb-8">
                  <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.3em]">{c.eyebrow}</span>
                  <div className="h-[1px] w-12 bg-emerald-200" />
                </div>

                <h1 className="il-fadeUp il-serif text-5xl sm:text-6xl xl:text-7xl font-normal text-slate-950 leading-[0.95] mb-6">
                  {c.title.lead} <br />
                  <span className="text-emerald-600">{c.title.highlight}</span>
                  {c.title.tail && (
                    <>
                      <br />
                      <span className="text-slate-900">{c.title.tail}</span>
                    </>
                  )}
                </h1>

                <WhoItsFor text={c.outline.whoFor} className="il-fadeUp" />

                <div className="il-fadeUp flex gap-6 items-start">
                  <div className="w-1 h-20 bg-emerald-600 mt-2 hidden sm:block" />
                  <p className="text-lg text-slate-600 max-w-xl leading-relaxed">{c.intro}</p>
                </div>

                <div className="il-fadeUp mt-8 flex flex-wrap gap-3">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-400 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="il-fadeUp mt-8">
                  <button
                    onClick={() => setShowInquiryForm(true)}
                    className="group/btn relative cursor-pointer overflow-hidden px-8 py-4 bg-slate-950 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-slate-200 inline-flex items-center gap-2"
                  >
                    <span className="relative z-10">Send Requirements</span>
                    <Arrow className="relative z-10 transition-transform duration-500 group-hover/btn:translate-x-1.5" />
                    <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="absolute -inset-4 bg-white/40 backdrop-blur-md rounded-sm border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] -rotate-2" />
                <img
                  src={c.image.src}
                  alt={c.image.alt}
                  className="relative z-10 w-full aspect-[16/10] object-cover rounded-sm shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── PROBLEMS, IN THEIR WORDS ─────────────── */}
        <OutlineProblems outline={c.outline} />

        {/* ── CAPABILITIES ─────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-28">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <Badge>What We Build</Badge>
            <h2 className="il-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-slate-900 leading-[1.05] mb-5">
              {c.capabilities.heading} <span className="text-emerald-600">{c.capabilities.highlight}</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">{c.capabilities.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.capabilities.items.map((s, i) => (
              <div
                key={s.title}
                className="group p-8 border border-slate-200 hover:border-emerald-400 hover:shadow-[0_24px_64px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="il-serif text-2xl italic text-emerald-600">{String(i + 1).padStart(2, "0")}</span>
                  <div className="h-px flex-1 bg-slate-200 group-hover:bg-emerald-300 transition-colors duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight mb-3">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                      <Check />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOW WE WORK ──────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-28">
          <div className="text-center mb-12">
            <Badge>How We Work</Badge>
            <h2 className="il-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
              Built first. <span className="text-emerald-600">Paid when it fits.</span>
            </h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-white p-8 md:p-10">
                <span className="w-9 h-9 border border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-700 mb-6">
                  {i + 1}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* ── FEATURES, PROOF, GUIDE, FAQ, CTA ─────── */}
        <OutlineClose outline={c.outline} marketRelated={c.marketRelated} />
      </section>

      {/* ── INQUIRY FORM MODAL ── */}
      {showInquiryForm &&
        createPortal(
          <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={() => setShowInquiryForm(false)} />
            <div
              data-lenis-prevent
              className="relative w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
            >
              <div className="p-6 sm:p-8 lg:p-14">
                <InquiryForm
                  inquiryType="solution"
                  topic={c.outline.inquiry.topic}
                  industry={c.outline.inquiry.industry}
                  onSuccess={() => setShowInquiryForm(false)}
                  onClose={() => setShowInquiryForm(false)}
                  showCloseButton={true}
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
