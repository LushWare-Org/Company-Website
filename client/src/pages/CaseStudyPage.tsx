import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import InquiryForm from "@/components/InquiryForm";
import { getCaseStudy, type CaseStudySlug } from "@/data/caseStudies";
import { PAGE_LINKS } from "@/data/links";

// One case study page per project (/case-studies/<slug>); copy lives in
// src/data/caseStudies.ts.

const serif = { fontFamily: "'DM Serif Display', serif" };
const sans = { fontFamily: "'DM Sans', sans-serif" };
const section = "max-w-7xl mx-auto px-6 mb-20 md:mb-28";

const Badge = ({ children, center = false }: { children: React.ReactNode; center?: boolean }) => (
  <div className={`flex items-center gap-3 mb-6 ${center ? "justify-center" : ""}`}>
    <div className="h-px w-8 bg-emerald-600" />
    <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
      {children}
    </span>
    {center && <div className="h-px w-8 bg-emerald-600" />}
  </div>
);

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg className={`w-3.5 h-3.5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const External = ({ className = "" }: { className?: string }) => (
  <svg className={`w-3.5 h-3.5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function CaseStudyPage({ slug }: { slug: CaseStudySlug }) {
  const cs = getCaseStudy(slug);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const host = new URL(cs.link).host;

  return (
    <div style={sans} className="pt-32 md:pt-40 pb-24 selection:bg-emerald-50">
      {/* ── HERO ─────────────────────────────────── */}
      <header className="max-w-7xl mx-auto px-6 mb-14 md:mb-20">
        <nav aria-label="Breadcrumb" className="mb-10 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-emerald-700">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/work" className="hover:text-emerald-700">Our Work</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-600" aria-current="page">{cs.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-8">
            <Badge>Case study</Badge>
            <h1 style={serif} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-6">
              {cs.name}
              <span className="sr-only">: </span>
              <span className="block mt-3 text-3xl sm:text-4xl md:text-5xl text-emerald-600 leading-[1.1]">{cs.headline}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-3xl">{cs.intro}</p>
          </div>

          <div className="lg:col-span-4">
            <dl className="border-t border-slate-200 mb-8">
              {[
                ["Industry", cs.industry],
                ["Solution", cs.category],
              ].map(([term, value]) => (
                <div key={term} className="py-4 border-b border-slate-200">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-1">{term}</dt>
                  <dd className="text-slate-900 font-semibold">{value}</dd>
                </div>
              ))}
              <div className="py-4 border-b border-slate-200">
                <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-1">Website</dt>
                <dd>
                  <a href={cs.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-emerald-700">
                    {host} <External />
                  </a>
                </dd>
              </div>
            </dl>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={cs.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white! text-[11px] font-bold tracking-[0.2em] uppercase overflow-hidden"
              >
                <span className="relative z-10">Visit live platform</span>
                <External className="relative z-10" />
                <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-900 text-slate-900 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-slate-900 hover:text-white! transition-colors"
              >
                Discuss a similar project <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <figure className="max-w-7xl mx-auto px-6 mb-20 md:mb-28">
        <a href={cs.link} target="_blank" rel="noopener noreferrer" className="block border border-slate-200 overflow-hidden">
          <img src={cs.image.src} alt={cs.image.alt} className="w-full aspect-video object-cover" />
        </a>
      </figure>

      {/* ── OVERVIEW ─────────────────────────────── */}
      <section aria-labelledby="cs-overview" className={section}>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <Badge>Overview</Badge>
            <h2 id="cs-overview" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
              Project <span className="text-emerald-600">overview</span>
            </h2>
          </div>
          <div className="lg:col-span-8">
            {cs.overview.map((text) => (
              <p key={text} className="text-lg text-slate-600 leading-[1.8] mb-6">{text}</p>
            ))}
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-10 mb-4">What this project shows</p>
            <ul className="flex flex-wrap gap-2">
              {cs.strengths.map((s) => (
                <li key={s} className="px-4 py-2 border border-emerald-200 bg-emerald-50/60 text-sm font-semibold text-emerald-800">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CONTEXT & CHALLENGE ─────────── */}
      <section aria-labelledby="cs-challenge" className="bg-slate-50 border-y border-slate-100 py-20 md:py-28 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <Badge>The challenge</Badge>
            <h2 id="cs-challenge" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-8">
              {cs.challenge.heading}
            </h2>
            {cs.challenge.paragraphs.map((text) => (
              <p key={text} className="text-lg text-slate-600 leading-[1.8] mb-6">{text}</p>
            ))}
          </div>
          <ul className="lg:col-span-5 self-center border border-slate-200 bg-white divide-y divide-slate-200">
            {cs.challenge.points.map((point) => (
              <li key={point} className="flex gap-4 p-6">
                <span className="mt-2 w-2 h-2 shrink-0 bg-emerald-500" aria-hidden="true" />
                <span className="text-slate-800 font-semibold leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── OUR SOLUTION ─────────────────────────── */}
      <section aria-labelledby="cs-solution" className={section}>
        <div className="max-w-4xl mb-12">
          <Badge>Our solution</Badge>
          <h2 id="cs-solution" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-8">
            {cs.solution.heading}
          </h2>
          {cs.solution.paragraphs.map((text) => (
            <p key={text} className="text-lg text-slate-600 leading-[1.8] mb-6">{text}</p>
          ))}
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
          {cs.solution.flow.map((f, i) => (
            <li key={f.step} className="bg-white p-6 md:p-7">
              <span className="block text-[11px] font-bold tracking-[0.2em] text-emerald-600 tabular-nums mb-3">{String(i + 1).padStart(2, "0")}</span>
              <span className="block text-lg font-semibold text-slate-900 mb-2">{f.step}</span>
              <span className="block text-slate-500 leading-relaxed text-sm">{f.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── KEY TECHNOLOGY & CAPABILITIES ────────── */}
      <section aria-labelledby="cs-capabilities" className={section}>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <Badge>Key capabilities</Badge>
            <h2 id="cs-capabilities" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-6">
              {cs.capabilities.heading}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">{cs.capabilities.intro}</p>
          </div>
          <dl className="lg:col-span-8 border-t border-slate-200">
            {cs.capabilities.items.map((c) => (
              <div key={c.term} className="grid sm:grid-cols-12 gap-2 sm:gap-8 py-6 border-b border-slate-200">
                <dt className="sm:col-span-4 text-lg font-semibold text-slate-900">{c.term}</dt>
                <dd className="sm:col-span-8 text-slate-600 leading-relaxed">{c.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── SCREENS ──────────────────────────────── */}
      {cs.gallery && (
        <section aria-labelledby="cs-screens" className={section}>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <Badge>Responsive</Badge>
              <h2 id="cs-screens" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-6">
                Built for every <span className="text-emerald-600">screen</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Most travellers discover deals on their phones. The same personalized experience works on mobile, tablet and desktop.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 gap-4 md:gap-6 items-end">
              {cs.gallery.map((g) => (
                <figure key={g.src}>
                  <img src={g.src} alt={g.alt} loading="lazy" className={`w-full ${g.className} object-cover border border-slate-200`} />
                  <figcaption className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BUSINESS VALUE ───────────────────────── */}
      <section aria-labelledby="cs-value" className={section}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge center>Outcomes</Badge>
          <h2 id="cs-value" style={serif} className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
            {cs.value.heading}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cs.value.items.map((v) => (
            <div key={v.title} className="border border-slate-200 hover:border-emerald-400 transition-colors duration-300 p-7">
              <div className="h-px w-8 bg-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{v.title}</h3>
              <p className="text-slate-500 leading-relaxed">{v.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLIENT REVIEW ────────────────────────── */}
      <section aria-labelledby="cs-review" className={section}>
        <figure className="relative bg-emerald-50/60 border border-emerald-100 px-6 py-12 sm:px-12 md:px-20 md:py-16">
          <h2 id="cs-review" className="sr-only">Client review</h2>
          <span style={serif} aria-hidden="true" className="absolute top-2 left-4 md:left-8 text-8xl md:text-9xl leading-none text-emerald-200 select-none">
            &ldquo;
          </span>
          <blockquote style={serif} className="relative text-2xl md:text-3xl lg:text-[2.1rem] text-slate-900 leading-[1.4] max-w-5xl">
            {cs.testimonial.quote}
          </blockquote>
          <figcaption className="relative mt-10 flex items-center gap-4">
            <div className="h-px w-10 bg-emerald-600" />
            <div>
              <p className="font-semibold text-slate-900">{cs.testimonial.author}</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700">{cs.testimonial.company}</p>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* ── TECHNOLOGIES & PROJECT LINK ──────────── */}
      <section aria-labelledby="cs-tech" className={section}>
        <div className="grid lg:grid-cols-2 border border-slate-200">
          <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
            <h2 id="cs-tech" className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.2em] mb-6">Technologies used</h2>
            <ul className="flex flex-wrap gap-2 mb-5">
              {cs.technologies.names.map((t) => (
                <li key={t} className="px-4 py-2 border border-slate-200 text-sm font-semibold text-slate-800">{t}</li>
              ))}
            </ul>
            <p className="text-sm text-slate-400">{cs.technologies.note}</p>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.2em] mb-4">See it live</h2>
            <p style={serif} className="text-3xl md:text-4xl text-slate-900 mb-6 break-words">{host}</p>
            <a
              href={cs.link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-700"
            >
              Visit {cs.name} <External />
            </a>
          </div>
        </div>
      </section>

      {/* ── RELATED ──────────────────────────────── */}
      <section aria-labelledby="cs-related" className={section}>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-emerald-600" />
          <h2 id="cs-related" className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.2em]">
            Related solutions &amp; work
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {cs.related.map((to) => (
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

      {/* ── CALL TO ACTION ───────────────────────── */}
      <section aria-labelledby="cs-cta" className="max-w-7xl mx-auto px-6">
        <div className="bg-[#062c1b] text-white p-8 md:p-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 id="cs-cta" style={serif} className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-5">
              {cs.cta.heading}
            </h2>
            <p className="text-emerald-100/80 text-lg leading-relaxed">{cs.cta.text}</p>
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
                  topic={cs.inquiry.topic}
                  industry={cs.inquiry.industry}
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
