// Single source for every page FAQ. The same list renders the visible FAQ
// (OutlineClose / page components) and the FAQPage JSON-LD (src/seo/routes.ts),
// so the two can't drift apart.

import { MARKETS } from './markets'
import { OUTLINES } from './outlines'
import type { PageOutline } from './outlines/types'
import { PAGE_FAQS } from './pageFaqs'

export type Faq = { question: string; answer: string }

/** Outline FAQ: page questions first, then the market's price/setup/data/integration answers, de-duplicated. */
export function pageFaq(o: PageOutline): Faq[] {
  const seen = new Set<string>()
  return [...o.faq, ...MARKETS[o.market].buyerFaq(o.product)].filter((q) => {
    const key = q.question.toLowerCase()
    return seen.has(key) ? false : (seen.add(key), true)
  })
}

const ROUTE_FAQ: Record<string, Faq[]> = {
  ...PAGE_FAQS,
  ...Object.fromEntries(OUTLINES.map((o) => [o.path, pageFaq(o)])),
}

export const getRouteFaq = (path: string): Faq[] => ROUTE_FAQ[path] ?? []

/** schema.org FAQPage for a list of questions. */
export const faqPageJsonLd = (faq: Faq[]) => ({
  '@type': 'FAQPage',
  mainEntity: faq.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer },
  })),
})
