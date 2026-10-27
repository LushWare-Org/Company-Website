// Standard SEO outline shared by every target-market page (src/seo/routes.ts):
// H1 with the main keyword → who it's for → problems in the buyer's words →
// features in their vocabulary (+ integrations & compliance from markets.ts) →
// case study or demo → buyer guide (hubs) → related pages → FAQ → time-zone call to action.

import type { Faq } from '../faq'
import type { PagePath } from '../links'
import type { MarketId } from '../markets'
import type { WorkProjectId } from '../work'

export type Proof =
  /** Real delivered projects from src/data/work.ts — never invented clients. */
  | { kind: 'caseStudy'; heading: string; intro: string; projects: WorkProjectId[] }
  /** Guided demo of a sample workflow, for markets without a published case study yet. */
  | { kind: 'demo'; heading: string; intro: string; steps: string[] }

export type PageOutline = {
  /** Route the outline belongs to; keys the FAQPage JSON-LD in src/seo/routes.ts. */
  path: PagePath
  market: MarketId
  /** Product name used in the buyer FAQ, e.g. "HVAC service software". */
  product: string
  /** One line naming the buyer and region, shown directly under the H1. */
  whoFor: string
  problems: { heading: string; intro: string; items: { quote: string; detail: string }[] }
  /** Features named the way the buyer names them. */
  features: { heading: string; intro: string; items: { term: string; feature: string }[] }
  proof: Proof
  /** Long-form buyer guide; hub pages use it to reach 1,200–2,000 words. */
  guide?: { heading: string; intro: string; sections: { heading: string; paragraphs: string[] }[] }
  /** Internal links: industry pages ↔ the solutions they use. */
  related: PagePath[]
  /** Page-specific questions; the market's price/setup/data/integration answers are appended (see pageFaq). */
  faq: Faq[]
  cta: { heading: string; text: string }
  inquiry: { topic: string; industry: string }
}
