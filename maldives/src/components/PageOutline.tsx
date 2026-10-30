import { Link } from "react-router-dom";
import { getOutline } from "../data/outlines";
import { getWork } from "../data/work";

const WHATSAPP_NUMBER = "94716430053";

/**
 * SEO outline sections for a page (copy in src/data/outlines.ts):
 * Maldives fit → proof from real projects → buyer guide → time-zone CTA.
 * Rendered just above each page's FAQ.
 */
export default function PageOutline({ path }: { path: string }) {
  const outline = getOutline(path);
  if (!outline) return null;
  const { fit, proof, guide, cta } = outline;
  const projects = getWork(proof.workIds);
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi LushWare! I'd like a demo of ${outline.product}.`,
  )}`;

  return (
    <div className="bg-[#ffffff]">
      {fit ? (
        <section className="px-6 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Built for the Maldives
            </span>
            <h2 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl md:text-5xl">
              {fit.heading}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
              {fit.intro}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {fit.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm sm:p-8"
                >
                  <h3 className="font-headline text-xl font-bold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant sm:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-stone-50 px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Proof
          </span>
          <h2 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl md:text-5xl">
            {proof.heading}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
            {proof.intro}
          </p>
          {projects.length ? (
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col rounded-2xl border border-outline-variant/20 bg-white p-6 shadow-sm sm:p-8"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                    {project.client}
                  </span>
                  <h3 className="mt-2 font-headline text-xl font-bold text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant sm:text-base">
                    {project.summary} {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-5 text-sm font-bold text-primary hover:underline"
                  >
                    {project.link.replace("https://", "").replace(/\/$/, "")} ↗
                  </a>
                </article>
              ))}
            </div>
          ) : null}
          <Link
            to="/our-work"
            className="mt-8 inline-block text-sm font-bold uppercase tracking-widest text-primary hover:underline"
          >
            See all our work →
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
            {guide.heading}
          </h2>
          <div className="mt-6 space-y-5">
            {guide.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-base leading-relaxed text-on-surface-variant sm:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-primary to-primary-container p-8 text-white sm:p-12">
          <h2 className="font-headline text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            {cta.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            {cta.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-white/90"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              WhatsApp us
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
