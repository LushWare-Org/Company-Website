# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository structure

This is a multi-app repo with **no root package.json** — each of the four apps below is installed, run, and built independently from its own directory. There is no shared workspace tooling (no npm/pnpm workspaces, no Turborepo).

| Dir | What it is | Stack |
|---|---|---|
| `client/` | Main LushWare marketing site (solutions pages, work/case studies, inquiry forms, admin dashboard) | React 19 + TypeScript + Vite + Tailwind v4 |
| `maldives/` | Separate brand/site — Maldives-focused offerings (Viduvaru Transport, Hotel Cloud, Travel CRM, Property Management) sharing the same inquiry backend | React 19 + TypeScript + Vite + Tailwind v3 (PostCSS) + hand-written CSS |
| `projects/` | "Service Specializations & Packages" micro-site — capability map (5 domains) + engagement packages | React 18 + JSX (not TS) + Vite, hand-written CSS |
| `server/` | Shared Express/MongoDB API backing `client` and `maldives` (inquiries + admin auth) | Express 5 + Mongoose, deployed as Vercel serverless function |

## Commands

Run these from inside the relevant app directory (`client/`, `maldives/`, `projects/`, or `server/`) — not from the repo root.

```bash
npm install        # per-app, run inside each directory you touch
npm run dev         # client, maldives, projects: Vite dev server (default port 5173)
npm run build        # all three frontends: [tsc -b (client, maldives)] → vite build → SSR build → scripts/prerender.mjs
                     # (static HTML per route + 404.html, sitemap.xml, robots.txt)
npm run lint         # client, maldives: eslint . (flat config, TS + react-hooks + react-refresh)
npm run preview       # client, maldives, projects: preview the production build

# server
npm run dev         # nodemon index.js
npm start           # node index.js
```

There is no test suite configured in any app (no test runner/framework present) and `projects/` has no lint script.

Frontend apps read `VITE_API_URL` from a `.env` file (gitignored) to reach the backend; `server/` reads Mongo/JWT/SMTP config from its own `.env` (`MONGO_URI`, SMTP_HOST/USER/PASS, etc. — see startup warning in `server/index.js` if SMTP vars are missing).

## Architecture

### client and maldives share a pattern, not code
Both are independent Vite apps with parallel structure (`src/{components,pages,hooks,services,types}`), both call the same `server/` API via `VITE_API_URL`, and both implement their own `useLenis` hook and `inquiryService.ts` — these are duplicated per-app, not imported from a shared package. When fixing a bug in one (e.g. inquiry submission logic, smooth-scroll behavior), check whether the same fix is needed in the other.

- `client` is styled with Tailwind v4 (`@tailwindcss/vite` plugin, no separate `tailwind.config.js` content pipeline beyond the default). Route-based pages live in `src/pages`, with per-solution pages under `src/pages/solutions/` (CRM, AI Agents, BPM, Websites, Mobile Apps, IoT, HVAC/Plumbing/Electrical) and standalone HTML-template-style pages under `src/pages/templates/` (Consultancy, Healthcare, Real Estate) — template and admin routes (`/admin`, `/dashboard`, `/templates/*`) skip the shared `Navbar`/`Footer`/`WhatsAppButton` chrome (see the `isAdminPage`/`isTemplatePage` checks in `App.tsx`).
- `client` pages are organized by **target market** (SEO Phase 2): trades in US/CA/AU/NZ (`/industries/field-service` hub + `/solutions/hvac-mep-service-software`), commercial HVAC & MEP in EU/Middle East/Asia (`/industries/commercial-hvac-mep`, rendered by `CommercialMEP.tsx`), global manufacturing & supply chain (`/industries/manufacturing`, `/industries/logistics-supply-chain`, use-case pages `/solutions/predictive-maintenance|oee-monitoring|warehouse-management`), tourism in EU/Asia Pacific/GCC/South Asia (`/industries/tourism-hospitality`, rendered by `SolutionsPage.tsx`, + `/solutions/travel-agency-software`; old URLs `/solutions`, `/industries/hvac`, `/industries/commercial-mep` redirect), and global SMBs (`/custom-software-development` + `/solutions/websites|mobile-apps|ai-agents|bpm`; removed pages `/industries/plumbing`, `/industries/electrical` → field-service hub and `/solutions/crm` → custom software are in `REDIRECTS`). Market claims (regions, integrations, local practice, currencies) live only in `src/data/markets.ts`, rendered by `MarketFitSection.tsx` and used for schema.org `areaServed` (ISO 3166-1 alpha-2 codes, or `Worldwide`), the footer's market columns and admin lead reports. Newer landing pages are data-driven via `IndustryLanding.tsx` (copy object per page file). Every target-market page follows one SEO outline (H1 with main keyword → who it's for → problems in the buyer's words → features in their vocabulary + integrations/compliance → case study or demo → buyer guide on hubs → FAQ → time-zone CTA): copy lives in `src/data/outlines/<segment>.ts`, rendered by `WhoItsFor`/`OutlineProblems`/`OutlineClose` from `src/components/PageOutline.tsx`; per-market CTA time zones and the price/setup/data-location/integration FAQ live in `markets.ts`. Case studies may only cite real projects from `src/data/work.ts` (also rendered on `/work`); markets without one use a `demo` proof. Each outline's `related` paths are the industry ↔ solution internal links (names/descs in `src/data/links.ts`, also used by the footer). **FAQs have one source**: outline `faq` (plus the market buyer FAQ) or `src/data/pageFaqs.ts` for non-outline pages, served by `getRouteFaq(path)` in `src/data/faq.ts` — both the visible FAQ and the FAQPage JSON-LD in `routes.ts` call it, so never hard-code FAQ arrays in page components. No IP- or locale-based redirects or country pop-ups (Googlebot crawls mostly from the US).
- `maldives` uses compiled **Tailwind v3** (`tailwind.config.js` holds the Material-style color tokens `primary`, `on-surface`, `surface-container-*`, etc.; `src/tailwind.css` is imported after `index.css`) — it previously used the runtime `cdn.tailwindcss.com` script, so keep Tailwind on v3 and never build class names dynamically (e.g. `` `md:${x}` ``), since the compiler only sees literal class strings. It's a single-brand landing site with a handful of routes (`/`, `/viduvaru`, `/hotelcloud`, `/our-work`, `/real-estate-control`, `/contact`, `/travel-crm`, `/services`) and a 404 catch-all.
- Both use Lenis for smooth scroll, wired through a local `useLenis` hook.

### SEO / prerendering (all three frontends)
Each app's `src/seo/routes.(ts|js)` is the single source of truth for `SITE_URL` (overridable via `VITE_SITE_URL`), per-route title, description, noindex, sitemap and JSON-LD. **Adding a route to `App` requires adding it to `ROUTES` too**, or it builds as a 404. Moving a page: add `{ from, to }` to `REDIRECTS` (prerendered as an instant meta-refresh page) and a 301 in nginx. `<Seo />` swaps `[data-seo]` head tags on client navigation; `scripts/prerender.mjs` (identical copy in each app — keep them in sync) renders each route through `src/entry-server.(tsx|jsx)` (`renderToString` + `StaticRouter`) into `dist/<route>.html`. The browser still mounts with `createRoot` (not hydration), so code that reads `window` must do so in effects or behind `typeof window` checks. The always-mounted hidden contact page (client, maldives) is only prerendered on `/contact`. `scripts/optimize-images.mjs` (client, maldives) converts large referenced images in `public/` to WebP.

### Inquiry flow (client + maldives → server)
`inquiryService.ts` in each frontend POSTs to `${VITE_API_URL}/api/inquiries` with a shared `InquiryFormData` shape covering three `inquiryType` variants — `solution`, `project`, `consultation` — each with its own required/optional fields (see validation branches in `submitInquiry`). Both forms also send `countryCode` (ISO, via `country-list`), `sourcePath` and `market` (client: the page's `ROUTES` market; maldives: `"maldives"`) so the admin dashboard can filter/count leads by market. It has an in-flight de-dupe guard (keyed on `email::inquiryType`) and a 10s `AbortController` timeout. The server (`server/controllers/inquiryController.js` via `server/models/Inquiry.js`) persists to MongoDB and fires admin/user emails asynchronously — the API responds before email delivery finishes, so `emailStatus.adminNotification`/`userConfirmation` can be `"processing"` on a successful response, not just `"sent"`/`"failed"`.

### Admin auth
`client` has an admin dashboard (`/admin` login → `/admin/dashboard`, JWT-gated). `AdminLogin.tsx` stores the JWT in `localStorage` (`adminToken`, `adminUsername`); `ProtectedRoute.tsx` reads it to guard the dashboard route. Server-side, `server/middleware/adminAuth.js` verifies the bearer token via `verifyToken` (exported from `adminController.js`) and attaches `req.admin`. `maldives` has no admin surface.

### server
Single Express app (`server/index.js`) exporting the app for Vercel's Node serverless runtime (`app.listen` is skipped when `NODE_ENV === "production"`). Two route groups: `/api/inquiries` and `/api/admin`, each with a matching controller in `server/controllers/`. CORS is allow-listed explicitly in `index.js` (`localhost`, `*.lushware.net`, and specific `vercel.app` domains) rather than using a wildcard — extend `allowedOrigins`/`isAllowedOrigin` there when adding a new deployment domain.

### projects (Service Specializations micro-site)
Separate, simpler app — JSX not TSX, React 18 (older than client/maldives's React 19), no backend calls. `src/pages/Home.jsx` renders a tab-driven capability map: `TABS` from `src/data/specializations.js` drives `TabNav.jsx`, and the active tab renders either `DomainPanel.jsx` or `DeepTechPanel.jsx`. The active tab/subtab comes from the URL (`/specializations/:tabSlug/:subSlug`, slugs in the data file, path helpers `tabPath`/`subtabPath` in `src/seo/routes.js`); the first tab/subtab lives at its parent URL (`/`, `/specializations/deep-tech`) so content never has two URLs. `src/pages/Packages.jsx` is the separate packages/pricing page. Content copy lives entirely in `src/data/`, kept separate from the presentational components in `src/components/`. Styling is one hand-written `src/index.css` using CSS custom properties for theming (`ThemeToggle.jsx` toggles light/dark), with shared "pill tab" styles (`.tabnav`/`.tab-btn`) reused for the top nav, subtabs, and audience switches.

### Deployment
Each app has its own `vercel.json` (`server`'s uses the legacy `builds`/`routes` format for the serverless function; the three frontends use `cleanUrls` to serve prerendered `dist/<route>.html` files with a real `404.html`). Note the live `lushware.net` and `mv.lushware.net` are served by **nginx on an Ubuntu host**, not Vercel — there the equivalent is `try_files $uri $uri.html $uri/ =404;` plus `error_page 404 /404.html;`, never an SPA fallback to `/index.html`.
