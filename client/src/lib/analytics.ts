// GA4 (gtag.js) — browser only, and a no-op unless VITE_GA_MEASUREMENT_ID is set.
// Page views are sent manually from <Seo /> on every route change (SPA).
// Mark these as key events in GA4 → Admin → Events:
//   generate_lead      — an inquiry was saved (inquiryService.ts)
//   book_consultation  — a Calendly booking was made (any embedded widget)
//   contact_click      — a WhatsApp, email or phone link was clicked (`method`)
// Every event after a page view also carries that page's `service` and the
// built-in `content_group` (see trackPageView).
// Register `market`, `inquiry_type`, `form_page`, `service`, `method` and
// `lead_source` as event-scoped custom dimensions.
// Consent Mode v2 defaults are set before `config` (consent.ts).

import { applyConsentDefaults } from './consent'

const GA_ID: string | undefined = import.meta.env.VITE_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/** Admin pages are never tracked. */
const isTracked = (path: string) => !path.startsWith('/admin')

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined' || window.gtag) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js expects the `arguments` object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  applyConsentDefaults()
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  // Calendly widgets post their events to the parent window.
  window.addEventListener('message', (e) => {
    if (e.origin === 'https://calendly.com' && e.data?.event === 'calendly.event_scheduled') {
      trackEvent('book_consultation', { form_page: window.location.pathname })
    }
  })

  // WhatsApp, email and phone links anywhere on the site (button, footer, blog posts).
  document.addEventListener('click', (e) => {
    const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
    if (!link) return
    const href = link.getAttribute('href') || ''
    const method = /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)
      ? 'whatsapp'
      : href.startsWith('mailto:')
        ? 'email'
        : href.startsWith('tel:')
          ? 'phone'
          : null
    if (method) trackEvent('contact_click', { method, form_page: window.location.pathname })
  })
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || !window.gtag || !isTracked(window.location.pathname)) return
  window.gtag('event', name, params)
}

/**
 * Call after the route's <title> is in place. `service` and `content_group`
 * are also set for every later event on the page, so leads and contact clicks
 * are attributed to the service page they happened on.
 */
export function trackPageView(context: { service: string; contentGroup: string }) {
  if (typeof window === 'undefined' || !window.gtag || !isTracked(window.location.pathname)) return
  window.gtag('set', { service: context.service, content_group: context.contentGroup })
  trackEvent('page_view', { page_location: window.location.href, page_title: document.title })
}
