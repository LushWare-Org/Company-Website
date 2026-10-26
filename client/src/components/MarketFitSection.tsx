import { Link } from "react-router-dom";
import type { Market } from "@/data/markets";

const serif = { fontFamily: "'DM Serif Display', serif" };

export type MarketRelated = { text: string; links: { label: string; to: string }[] };

type MarketFitSectionProps = {
  market: Market;
  /** Optional cross-links, e.g. to the commercial MEP page from a trades page. */
  related?: MarketRelated;
};

const Check = () => (
  <svg
    className="w-4 h-4 mt-1 shrink-0 text-emerald-400"
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

/** "Who we build for" block: regions, integrations, local practice and hours for one target market. */
export default function MarketFitSection({ market, related }: MarketFitSectionProps) {
  const columns = [
    { label: "Integrations we build", items: market.integrations },
    { label: "Local practice built in", items: market.localPractice },
    { label: "Currency, language & hours", items: market.currencyAndHours },
  ];

  return (
    <section aria-labelledby={`market-${market.id}`} className="max-w-7xl mx-auto px-6 mb-20 md:mb-28">
      <div className="bg-[#062c1b] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />

        <div className="p-8 md:p-14 grid lg:grid-cols-12 gap-10 border-b border-emerald-900">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                {market.badge}
              </span>
            </div>
            <h2 id={`market-${market.id}`} style={serif} className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-6">
              {market.heading}
            </h2>
            <p className="text-emerald-100/80 text-lg leading-relaxed">{market.intro}</p>
          </div>

          <div className="lg:col-span-5 lg:pl-10 lg:border-l border-emerald-900">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-5">Where we work</p>
            <ul className="flex flex-wrap gap-2">
              {market.regions.map((r) => (
                <li key={r} className="px-3 py-1.5 border border-emerald-700 text-sm text-emerald-50">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-emerald-900">
          {columns.map((col) => (
            <div key={col.label} className="bg-[#062c1b] p-8 md:p-10">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-6">{col.label}</h3>
              <ul className="space-y-4">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-3 text-emerald-50/90 leading-relaxed">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {related && (
          <div className="p-6 md:px-14 md:py-8 border-t border-emerald-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-emerald-100/80">{related.text}</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 shrink-0">
              {related.links.map((l) => {
                const className =
                  "inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-emerald-300 hover:text-white transition-colors";
                const inner = (
                  <>
                    {l.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                );
                return /^https?:\/\//.test(l.to) ? (
                  <a key={l.to} href={l.to} className={className}>
                    {inner}
                  </a>
                ) : (
                  <Link key={l.to} to={l.to} className={className}>
                    {inner}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
