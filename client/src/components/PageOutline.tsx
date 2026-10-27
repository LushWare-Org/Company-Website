import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import QuestionItem from "@/components/QuestionItem";
import InquiryForm from "@/components/InquiryForm";
import MarketFitSection, { type MarketRelated } from "@/components/MarketFitSection";
import { getRouteFaq } from "@/data/faq";
import { PAGE_LINKS } from "@/data/links";
import { MARKETS } from "@/data/markets";
import { getWorkProject } from "@/data/work";
import type { PageOutline } from "@/data/outlines/types";

// Sections of the standard page outline (src/data/outlines/types.ts), shared by
// IndustryLanding and the hand-built solution pages.

const serif = { fontFamily: "'DM Serif Display', serif" };
const sans = { fontFamily: "'DM Sans', sans-serif" };
const section = "max-w-7xl mx-auto px-6 mb-20 md:mb-28";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-3 mb-6">
    <div className="h-px w-8 bg-emerald-600" />
    <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
      {children}
    </span>
    <div className="h-px w-8 bg-emerald-600" />
  </div>
);

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg className={`w-3.5 h-3.5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/** "Who it's for" line — sits directly under the page H1. */
export function WhoItsFor({ text, className = "" }: { text: string; className?: string }) {
  return (
    <p style={sans} className={`text-sm sm:text-base font-semibold text-emerald-700 leading-relaxed mb-8 ${className}`}>
      {text}
    </p>
  );
}

/** The buyer's problems, phrased the way they describe them. */
export function OutlineProblems({ outline: o }: { outline: PageOutline }) {
  return (
    <section style={sans} aria-labelledby="outline-problems" className={section}>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Badge>Sound familiar?</Badge>
        <h2 id="outline-problems" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-5">
          {o.problems.heading}
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed">{o.problems.intro}</p>
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
        {o.problems.items.map((p) => (
          <li key={p.quote} className="bg-white p-8 hover:bg-emerald-50/60 transition-colors duration-300">
            <span style={serif} className="block text-5xl leading-none text-emerald-600 mb-2" aria-hidden="true">
              &ldquo;
            </span>
            <p style={serif} className="text-xl md:text-2xl text-slate-900 leading-snug mb-4">
              {p.quote}
            </p>
            <p className="text-slate-500 leading-relaxed">{p.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

type OutlineCloseProps = {
  outline: PageOutline;
  marketRelated?: MarketRelated;
};

/** Features → integrations & compliance → proof → guide → related pages → FAQ → time-zone CTA. */
export function OutlineClose({ outline: o, marketRelated }: OutlineCloseProps) {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const market = MARKETS[o.market];
  // Same lookup as the FAQPage JSON-LD in src/seo/routes.ts.
  const questions = getRouteFaq(o.path);

  return (
    <div style={sans}>
      {/* ── FEATURES IN THEIR VOCABULARY ─────────── */}
      <section aria-labelledby="outline-features" className={section}>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700">Features</span>
            </div>
            <h2 id="outline-features" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-5">
              {o.features.heading}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">{o.features.intro}</p>
          </div>
          <dl className="lg:col-span-8 border-t border-slate-200">
            {o.features.items.map((f) => (
              <div key={f.term} className="grid sm:grid-cols-12 gap-2 sm:gap-8 py-6 border-b border-slate-200">
                <dt className="sm:col-span-4 text-lg font-semibold text-slate-900">{f.term}</dt>
                <dd className="sm:col-span-8 text-slate-600 leading-relaxed">{f.feature}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── INTEGRATIONS & COMPLIANCE ────────────── */}
      <MarketFitSection market={market} related={marketRelated} />

      {/* ── CASE STUDY / DEMO ────────────────────── */}
      <section aria-labelledby="outline-proof" className={section}>
        {o.proof.kind === "caseStudy" ? (
          <>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge>Case studies</Badge>
              <h2 id="outline-proof" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-5">
                {o.proof.heading}
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">{o.proof.intro}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {o.proof.projects.map((id) => {
                const p = getWorkProject(id);
                return (
                  <article key={id} className="group border border-slate-200 hover:border-emerald-400 transition-colors duration-300 flex flex-col">
                    <img src={p.image} alt={`${p.name} built by LushWare for ${p.client}`} loading="lazy" className="w-full aspect-[16/10] object-cover" />
                    <div className="p-7 flex flex-col flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700 mb-2">{p.client}</p>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{p.name}</h3>
                      <p className="text-slate-500 leading-relaxed mb-6 flex-1">{p.summary}</p>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-700"
                      >
                        View live project <Arrow />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="text-center mt-10">
              <Link to="/work" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-emerald-700 hover:text-slate-900">
                See all our work <Arrow />
              </Link>
            </p>
          </>
        ) : (
          <div className="grid lg:grid-cols-12 border border-slate-200">
            <div className="lg:col-span-5 bg-[#062c1b] text-white p-8 md:p-12 flex flex-col justify-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4">Live demo</p>
              <h2 id="outline-proof" style={serif} className="text-3xl md:text-4xl leading-tight mb-5">
                {o.proof.heading}
              </h2>
              <p className="text-emerald-100/80 leading-relaxed mb-8">{o.proof.intro}</p>
              <Link
                to="/contact"
                className="self-start inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-[#062c1b] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
              >
                Book a demo <Arrow />
              </Link>
            </div>
            <ol className="lg:col-span-7 divide-y divide-slate-200">
              {o.proof.steps.map((step, i) => (
                <li key={step} className="flex gap-5 p-6 md:p-8">
                  <span className="w-9 h-9 shrink-0 border border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-700">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 leading-relaxed pt-1.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>

      {/* ── BUYER GUIDE ──────────────────────────── */}
      {o.guide && (
        <section aria-labelledby="outline-guide" className="max-w-3xl mx-auto px-6 mb-20 md:mb-28">
          <Badge>Buyer's guide</Badge>
          <h2 id="outline-guide" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-6 text-center">
            {o.guide.heading}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">{o.guide.intro}</p>
          {o.guide.sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">{s.heading}</h3>
              {s.paragraphs.map((text) => (
                <p key={text} className="text-slate-600 leading-relaxed mb-4">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </section>
      )}

      {/* ── RELATED: INDUSTRIES ↔ SOLUTIONS ──────── */}
      <section aria-labelledby="outline-related" className={section}>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-emerald-600" />
          <h2 id="outline-related" className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.2em]">
            Related industries &amp; solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {o.related.map((to) => (
            <Link key={to} to={to} className="group bg-white p-8 hover:bg-emerald-50/60 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center justify-between gap-3">
                {PAGE_LINKS[to].name}
                <Arrow className="text-emerald-600 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">{PAGE_LINKS[to].desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section aria-labelledby="outline-faq" className="max-w-7xl mx-auto px-6 mb-20 md:mb-28">
        <div className="text-center mb-14">
          <Badge>FAQ</Badge>
          <h2 id="outline-faq" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
        </div>
        <div>
          {questions.map((q) => (
            <QuestionItem key={q.question} question={q.question} answer={q.answer} />
          ))}
        </div>
      </section>

      {/* ── CALL TO ACTION ───────────────────────── */}
      <section aria-labelledby="outline-cta" className="max-w-7xl mx-auto px-6">
        <div className="bg-[#062c1b] text-white p-8 md:p-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 id="outline-cta" style={serif} className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-5">
              {o.cta.heading}
            </h2>
            <p className="text-emerald-100/80 text-lg leading-relaxed mb-4">{o.cta.text}</p>
            <p className="text-emerald-300 font-semibold">Book a call — we cover {market.hours} hours.</p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-[#062c1b] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Book a call <Arrow />
            </Link>
            <button
              type="button"
              onClick={() => setShowInquiryForm(true)}
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 border border-emerald-500 text-emerald-100 text-xs font-bold uppercase tracking-widest hover:bg-emerald-500/10 transition-colors"
            >
              Send requirements
            </button>
          </div>
        </div>
      </section>

      {showInquiryForm &&
        createPortal(
          <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={() => setShowInquiryForm(false)} />
            <div data-lenis-prevent className="relative w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
              <div className="p-6 sm:p-8 lg:p-14">
                <InquiryForm
                  inquiryType="solution"
                  topic={o.inquiry.topic}
                  industry={o.inquiry.industry}
                  onSuccess={() => setShowInquiryForm(false)}
                  onClose={() => setShowInquiryForm(false)}
                  showCloseButton={true}
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
