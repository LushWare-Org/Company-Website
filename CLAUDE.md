# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository structure

This is a multi-app repo with **no root package.json** — each of the four apps below is installed, run, and built independently from its own directory. There is no shared workspace tooling (no npm/pnpm workspaces, no Turborepo).

| Dir | What it is | Stack |
|---|---|---|
| `client/` | Main LushWare marketing site (solutions pages, work/case studies, inquiry forms, admin dashboard) | React 19 + TypeScript + Vite + Tailwind v4 |
| `maldives/` | Separate brand/site — Maldives-focused offerings (Viduvaru Transport, Hotel Cloud, Travel CRM, Property Management) sharing the same inquiry backend | React 19 + TypeScript + Vite, hand-written CSS (no Tailwind) |
| `projects/` | "Service Specializations & Packages" micro-site — capability map (5 domains) + engagement packages | React 18 + JSX (not TS) + Vite, hand-written CSS |
| `server/` | Shared Express/MongoDB API backing `client` and `maldives` (inquiries + admin auth) | Express 5 + Mongoose, deployed as Vercel serverless function |

## Commands

Run these from inside the relevant app directory (`client/`, `maldives/`, `projects/`, or `server/`) — not from the repo root.

```bash
npm install        # per-app, run inside each directory you touch
npm run dev         # client, maldives, projects: Vite dev server (default port 5173)
npm run build        # client, maldives: `tsc -b && vite build` (type-checks then builds)
npm run build        # projects: `vite build` only (no TS project references)
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
- `maldives` is plain CSS (no Tailwind dependency at all). It's a single-brand landing site with a handful of routes (`/`, `/viduvaru`, `/hotelcloud`, `/our-work`, `/real-estate-control`, `/contact`, `/travel-crm`, `/services`) and a catch-all redirect to `/`.
- Both use Lenis for smooth scroll, wired through a local `useLenis` hook.

### Inquiry flow (client + maldives → server)
`inquiryService.ts` in each frontend POSTs to `${VITE_API_URL}/api/inquiries` with a shared `InquiryFormData` shape covering three `inquiryType` variants — `solution`, `project`, `consultation` — each with its own required/optional fields (see validation branches in `submitInquiry`). It has an in-flight de-dupe guard (keyed on `email::inquiryType`) and a 10s `AbortController` timeout. The server (`server/controllers/inquiryController.js` via `server/models/Inquiry.js`) persists to MongoDB and fires admin/user emails asynchronously — the API responds before email delivery finishes, so `emailStatus.adminNotification`/`userConfirmation` can be `"processing"` on a successful response, not just `"sent"`/`"failed"`.

### Admin auth
`client` has an admin dashboard (`/admin` login → `/admin/dashboard`, JWT-gated). `AdminLogin.tsx` stores the JWT in `localStorage` (`adminToken`, `adminUsername`); `ProtectedRoute.tsx` reads it to guard the dashboard route. Server-side, `server/middleware/adminAuth.js` verifies the bearer token via `verifyToken` (exported from `adminController.js`) and attaches `req.admin`. `maldives` has no admin surface.

### server
Single Express app (`server/index.js`) exporting the app for Vercel's Node serverless runtime (`app.listen` is skipped when `NODE_ENV === "production"`). Two route groups: `/api/inquiries` and `/api/admin`, each with a matching controller in `server/controllers/`. CORS is allow-listed explicitly in `index.js` (`localhost`, `*.lushware.net`, and specific `vercel.app` domains) rather than using a wildcard — extend `allowedOrigins`/`isAllowedOrigin` there when adding a new deployment domain.

### projects (Service Specializations micro-site)
Separate, simpler app — JSX not TSX, React 18 (older than client/maldives's React 19), no backend calls. `src/pages/Home.jsx` renders a tab-driven capability map: `TABS` from `src/data/specializations.js` drives `TabNav.jsx`, and the active tab renders either `DomainPanel.jsx` or `DeepTechPanel.jsx`. `src/pages/Packages.jsx` is the separate packages/pricing page. Content copy lives entirely in `src/data/`, kept separate from the presentational components in `src/components/`. Styling is one hand-written `src/index.css` using CSS custom properties for theming (`ThemeToggle.jsx` toggles light/dark), with shared "pill tab" styles (`.tabnav`/`.tab-btn`) reused for the top nav, subtabs, and audience switches.

### Deployment
`client`, `maldives`, and `server` each have their own `vercel.json` and deploy as separate Vercel projects (`server`'s uses the legacy `builds`/`routes` format for the serverless function; `client`/`maldives` just SPA-rewrite everything to `index.html`). `projects/` currently has no `vercel.json`.
