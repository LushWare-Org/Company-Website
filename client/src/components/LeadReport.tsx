import { useMemo, useState } from 'react';
import { X, Download } from 'lucide-react';

/** The fields the monthly SEO report needs from an inquiry. */
export interface ReportInquiry {
  createdAt: string;
  country?: string;
  countryCode?: string | null;
  sourcePath?: string | null;
  market?: string | null;
  attribution?: { source: string; medium: string; campaign?: string } | null;
}

interface LeadReportProps {
  inquiries: ReportInquiry[];
  marketLabel: (id?: string | null) => string;
  onClose: () => void;
}

const monthKey = (iso: string) => iso.slice(0, 7); // YYYY-MM
const monthName = (key: string) =>
  new Date(`${key}-01T00:00:00`).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
const countryOf = (i: ReportInquiry) => i.countryCode || i.country || '??';
const pageOf = (i: ReportInquiry) => i.sourcePath || '(not recorded)';
const sourceOf = (i: ReportInquiry) =>
  i.attribution ? `${i.attribution.source} / ${i.attribution.medium}${i.attribution.campaign ? ` · ${i.attribution.campaign}` : ''}` : '(not recorded)';

type PageRow = { page: string; market: string; total: number; countries: [string, number][] };

/** Monthly SEO report: inquiries by landing page and by country (Phase 4 measurement). */
export default function LeadReport({ inquiries, marketLabel, onClose }: LeadReportProps) {
  const months = useMemo(
    () => [...new Set(inquiries.map((i) => monthKey(i.createdAt)))].sort().reverse(),
    [inquiries],
  );
  const [month, setMonth] = useState(months[0] ?? monthKey(new Date().toISOString()));

  const monthInquiries = useMemo(
    () => inquiries.filter((i) => monthKey(i.createdAt) === month),
    [inquiries, month],
  );

  const pageRows = useMemo<PageRow[]>(() => {
    const byPage = new Map<string, { market: string; countries: Map<string, number> }>();
    for (const i of monthInquiries) {
      const row = byPage.get(pageOf(i)) ?? { market: marketLabel(i.market), countries: new Map() };
      row.countries.set(countryOf(i), (row.countries.get(countryOf(i)) ?? 0) + 1);
      byPage.set(pageOf(i), row);
    }
    return [...byPage]
      .map(([page, { market, countries }]) => ({
        page,
        market,
        total: [...countries.values()].reduce((a, b) => a + b, 0),
        countries: [...countries].sort((a, b) => b[1] - a[1]),
      }))
      .sort((a, b) => b.total - a.total);
  }, [monthInquiries, marketLabel]);

  const countryRows = useMemo(() => {
    const counts = new Map<string, number>();
    for (const i of monthInquiries) counts.set(countryOf(i), (counts.get(countryOf(i)) ?? 0) + 1);
    return [...counts].sort((a, b) => b[1] - a[1]);
  }, [monthInquiries]);

  const sourceRows = useMemo(() => {
    const counts = new Map<string, number>();
    for (const i of monthInquiries) counts.set(sourceOf(i), (counts.get(sourceOf(i)) ?? 0) + 1);
    return [...counts].sort((a, b) => b[1] - a[1]);
  }, [monthInquiries]);

  const downloadCsv = () => {
    const lines = [['month', 'landing_page', 'market', 'country', 'source', 'inquiries']];
    const rows = new Map<string, { cells: string[]; n: number }>();
    for (const i of monthInquiries) {
      const cells = [month, pageOf(i), marketLabel(i.market), countryOf(i), sourceOf(i)];
      const key = cells.join('\u0000');
      rows.set(key, { cells, n: (rows.get(key)?.n ?? 0) + 1 });
    }
    for (const { cells, n } of rows.values()) lines.push([...cells, String(n)]);
    const csv = lines.map((l) => l.map((v) => `"${v.replace(/"/g, '""')}"`).join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = `leads-${month}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4" onClick={onClose}>
      <div
        className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex flex-wrap items-center gap-3 px-6 py-4 border-b border-emerald-100">
          <h2 className="text-xl font-bold text-slate-800 mr-auto">Monthly Lead Report</h2>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
          >
            {(months.length ? months : [month]).map((m) => (
              <option key={m} value={m}>{monthName(m)}</option>
            ))}
          </select>
          <button
            onClick={downloadCsv}
            disabled={!pageRows.length}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-40"
          >
            <Download size={16} /> CSV
          </button>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:bg-slate-100" title="Close">
            <X size={18} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <p className="text-sm text-slate-500">
            {monthInquiries.length} inquiries in {monthName(month)}. Compare with Search Console → Pages / Countries
            and GA4 key events (generate_lead, book_consultation) for the same month.
          </p>

          <section>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">By landing page</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500 border-b border-slate-200">
                  <th className="py-2 pr-4 font-medium">Landing page</th>
                  <th className="py-2 pr-4 font-medium">Market</th>
                  <th className="py-2 pr-4 font-medium">Countries</th>
                  <th className="py-2 font-medium text-right">Inquiries</th>
                </tr>
              </thead>
              <tbody>
                {pageRows.map((r) => (
                  <tr key={r.page} className="border-b border-slate-100 align-top">
                    <td className="py-2 pr-4 font-mono text-xs text-slate-800 break-all">{r.page}</td>
                    <td className="py-2 pr-4 text-slate-600">{r.market}</td>
                    <td className="py-2 pr-4 text-slate-600">{r.countries.map(([c, n]) => `${c} ${n}`).join(' · ')}</td>
                    <td className="py-2 text-right font-semibold">{r.total}</td>
                  </tr>
                ))}
                {!pageRows.length && (
                  <tr><td colSpan={4} className="py-6 text-center text-slate-400">No inquiries this month.</td></tr>
                )}
              </tbody>
            </table>
          </section>

          <section>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">By source / medium · campaign</h3>
            <div className="flex flex-wrap gap-2">
              {sourceRows.map(([s, n]) => (
                <span key={s} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-sm">
                  <span className="font-semibold text-slate-800">{s}</span> <span className="text-slate-500">{n}</span>
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">By country</h3>
            <div className="flex flex-wrap gap-2">
              {countryRows.map(([c, n]) => (
                <span key={c} className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-sm">
                  <span className="font-semibold text-emerald-800">{c}</span> <span className="text-slate-500">{n}</span>
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
