// String-based helpers for blog HTML, so they run the same during
// prerendering (no DOM) and in the browser.

export interface TocItem {
  id: string
  text: string
  level: number
}

const ENTITIES: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ' }

export const decodeEntities = (s: string) => s.replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (m) => ENTITIES[m])

export const stripTags = (html: string) =>
  decodeEntities(html.replace(/<\/(p|h\d|li|td|th|figcaption|blockquote|pre|div)>|<br\s*\/?>/gi, '$& ').replace(/<[^>]+>/g, ''))
    .replace(/\s+/g, ' ')
    .trim()

export const slugify = (value: string) =>
  value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100)
    .replace(/-+$/, '')

/** Adds stable ids to H2/H3 headings and returns the table of contents. */
export function withHeadingIds(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = []
  const used = new Map<string, number>()
  const out = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/g, (_, level: string, attrs: string, inner: string) => {
    const text = stripTags(inner)
    const base = slugify(text) || 'section'
    const n = used.get(base) ?? 0
    used.set(base, n + 1)
    const id = n ? `${base}-${n + 1}` : base
    toc.push({ id, text, level: Number(level) })
    return `<h${level}${attrs.replace(/\s+id="[^"]*"/, '')} id="${id}">${inner}</h${level}>`
  })
  return { html: out, toc }
}

export const formatDate = (iso: string | null | undefined) =>
  iso ? new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''

export const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Splits text into [plain, match, plain, ...] pieces for highlighting search terms. */
export function splitByTerms(text: string, terms: string[]): { text: string; match: boolean }[] {
  const clean = terms.map((t) => t.trim()).filter(Boolean)
  if (!clean.length) return [{ text, match: false }]
  const rx = new RegExp(`(${clean.map(escapeRegex).join('|')})`, 'gi')
  return text
    .split(rx)
    .filter(Boolean)
    .map((part) => ({ text: part, match: clean.some((t) => t.toLowerCase() === part.toLowerCase()) }))
}
