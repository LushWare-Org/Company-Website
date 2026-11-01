// GA4 (gtag.js) — browser only, and a no-op unless VITE_GA_MEASUREMENT_ID is set.
// Page views are sent manually from <Seo /> on every route change (SPA).
// Mark these as key events in GA4 → Admin → Events:
//   generate_lead      — an inquiry was saved (inquiryService.ts)
//   book_consultation  — a Calendly booking was made (/contact widget)
// Register `market`, `inquiry_type` and `form_page` as event-scoped custom dimensions.

const GA_ID: string | undefined = import.meta.env.VITE_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined' || window.gtag) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js expects the `arguments` object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  // Calendly widgets post their events to the parent window.
  window.addEventListener('message', (e) => {
    if (e.origin === 'https://calendly.com' && e.data?.event === 'calendly.event_scheduled') {
      trackEvent('book_consultation', { market: 'maldives', form_page: window.location.pathname })
    }
  })
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', name, params)
}

/** Call after the route's <title> is in place. */
export function trackPageView() {
  trackEvent('page_view', { page_location: window.location.href, page_title: document.title })
}
