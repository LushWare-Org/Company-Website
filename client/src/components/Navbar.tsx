import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type MenuKey = "services" | "solutions";

type MenuItem = { name: string; to: string; desc: string; icon: ReactNode };
type MenuGroup = { label: string; items: MenuItem[] };
type Featured = {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  to: string;
  secondary?: { label: string; to: string };
};
type MegaMenu = { groups: MenuGroup[]; featured?: Featured };

/* ── Icons (inline, no extra dependency) ───────────────────────── */
const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const icons = {
  optimize: (
    <Icon>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 5-6" />
    </Icon>
  ),
  loop: (
    <Icon>
      <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
      <path d="M21 3v5h-5" />
    </Icon>
  ),
  bot: (
    <Icon>
      <path d="M12 8V4H8" />
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
    </Icon>
  ),
  workflow: (
    <Icon>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </Icon>
  ),
  globe: (
    <Icon>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </Icon>
  ),
  phone: (
    <Icon>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </Icon>
  ),
  wifi: (
    <Icon>
      <path d="M5 13a10 10 0 0 1 14 0" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M2 8.8a15 15 0 0 1 20 0" />
      <path d="M12 20h.01" />
    </Icon>
  ),
  cpu: (
    <Icon>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
    </Icon>
  ),
  wind: (
    <Icon>
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </Icon>
  ),
  factory: (
    <Icon>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1M12 18h1M7 18h1" />
    </Icon>
  ),
  truck: (
    <Icon>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.7a1 1 0 0 0-.2-.6l-3.5-4.4A1 1 0 0 0 17.5 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </Icon>
  ),
  pin: (
    <Icon>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  ),
};

/* ── Menu content ──────────────────────────────────────────────── */
const menus: Record<MenuKey, MegaMenu> = {
  services: {
    groups: [
      {
        label: "AI & Intelligence",
        items: [
          {
            name: "AI-Driven Process Optimization",
            to: "/solutions/ai-process-optimization",
            desc: "Forecast, simulate, and optimize operations.",
            icon: icons.optimize,
          },
          {
            name: "Autonomous Decision Intelligence",
            to: "/solutions/autonomous-decision-intelligence",
            desc: "Governed systems that decide and act.",
            icon: icons.loop,
          },
          {
            name: "AI Agents & AI Chatbots",
            to: "/solutions/ai-agents",
            desc: "Automate tasks and customer conversations.",
            icon: icons.bot,
          },
        ],
      },
      {
        label: "Software & Digital",
        items: [
          {
            name: "Business Process Management",
            to: "/solutions/bpm",
            desc: "Design and automate business workflows.",
            icon: icons.workflow,
          },
          {
            name: "Business & Corporate Websites",
            to: "/solutions/websites",
            desc: "Fast, modern sites that convert.",
            icon: icons.globe,
          },
          {
            name: "Mobile Apps",
            to: "/solutions/mobile-apps",
            desc: "Native and cross-platform iOS and Android.",
            icon: icons.phone,
          },
        ],
      },
      {
        label: "Hardware & IoT",
        items: [
          {
            name: "IoT Product Development",
            to: "/solutions/iot-product-development",
            desc: "Connect devices and monitor them remotely.",
            icon: icons.wifi,
          },
          {
            name: "Product Engineering",
            to: "/solutions/product-engineering",
            desc: "Device design, custom PCBs, and embedded systems.",
            icon: icons.cpu,
          },
        ],
      },
    ],
  },
  solutions: {
    groups: [
      {
        label: "Industries We Serve",
        items: [
          {
            name: "HVAC & MEP Solutions",
            to: "/industries/hvac",
            desc: "Building twins, predictive maintenance, technician dispatch.",
            icon: icons.wind,
          },
          {
            // NOTE: keep your own route paths here if they differ
            name: "Manufacturing",
            to: "/industries/manufacturing",
            desc: "Production optimization and quality intelligence.",
            icon: icons.factory,
          },
          {
            name: "Logistics & Supply Chain",
            to: "/industries/logistics-supply-chain",
            desc: "Route, fleet, and warehouse optimization.",
            icon: icons.truck,
          },
          {
            name: "Tourism & Hospitality",
            to: "/solutions",
            desc: "Revenue, demand forecasting, and resort operations.",
            icon: icons.pin,
          },
        ],
      },
    ],
  },
};

const links = [
  { name: "Projects", to: "/work" },
  { name: "Products", to: "/products" },
];

/* ── Component ─────────────────────────────────────────────────── */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
      setMobileSection(null);
      setActiveMenu(null);
    }, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mega menu with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setActiveMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const flat = (k: MenuKey) => menus[k].groups.flatMap((g) => g.items);
  const isActive = (k: MenuKey) =>
    flat(k).some((i) => i.to === location.pathname);

  const openMenu = (k: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
    setActiveMenu(k);
  };
  const closeMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 200);
  };

  const trigger = (k: MenuKey, label: string) => {
    const on = activeMenu === k;
    return (
      <button
        type="button"
        aria-expanded={on}
        aria-haspopup="true"
        onMouseEnter={() => openMenu(k)}
        onClick={() => (on ? setActiveMenu(null) : openMenu(k))}
        className={`relative flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer ${
          on || isActive(k)
            ? "text-emerald-800"
            : "text-stone-800 hover:text-emerald-700"
        }`}
      >
        <span>{label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${on ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span
          className={`absolute -bottom-1.5 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
            on || isActive(k) ? "w-full" : "w-0"
          }`}
        />
      </button>
    );
  };

  /* Desktop mega panel — drops from the top edge of the navbar downwards */
  const panel = (k: MenuKey) => {
    const menu = menus[k];
    const on = activeMenu === k;
    const cols = menu.groups.length;
    return (
      <div
        key={k}
        aria-hidden={!on}
        onMouseEnter={() => openMenu(k)}
        onMouseLeave={closeMenu}
        className={`absolute left-0 right-0 top-full hidden lg:block ${
          on ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          clipPath: on
            ? "inset(0 -60px -80px -60px)"
            : "inset(0 -60px 100% -60px)",
          opacity: on ? 1 : 0,
          willChange: "clip-path, opacity",
          transition: on
            ? "clip-path 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease-out"
            : "clip-path 380ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease-in 80ms",
        }}
      >
        <div className="bg-white border-t border-stone-100 shadow-[0_30px_60px_-20px_rgba(28,25,23,0.35)]">
          <div className="max-w-[1200px] mx-auto px-8 xl:px-12 pt-10 pb-16">
            <div
              className="grid gap-x-10 gap-y-8"
              style={{
                gridTemplateColumns: menu.featured
                  ? `repeat(${cols}, minmax(0, 1fr)) 300px`
                  : `repeat(${cols}, minmax(0, 1fr))`,
              }}
            >
              {menu.groups.map((group, gi) => (
                <div
                  key={group.label}
                  className="motion-reduce:!transition-none"
                  style={{
                    opacity: on ? 1 : 0,
                    transform: on ? "translateY(0)" : "translateY(-14px)",
                    transition: on
                      ? `opacity 600ms ease-out ${160 + gi * 70}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${160 + gi * 70}ms`
                      : "opacity 200ms ease-in, transform 200ms ease-in",
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px w-12 bg-emerald-100" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                      {group.label}
                    </span>
                  </div>
                  <ul
                    className={
                      cols === 1
                        ? "grid grid-cols-3 gap-x-6 gap-y-6"
                        : "space-y-6"
                    }
                  >
                    {group.items.map((item) => {
                      const current = location.pathname === item.to;
                      return (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            tabIndex={on ? 0 : -1}
                            className={`group/item flex items-start gap-4 p-3 -mx-3 rounded-sm transition-colors duration-300 ${
                              current
                                ? "border-emerald-300 border-2"
                                : "hover:bg-stone-50"
                            }`}
                          >
                            <span
                              className={`mt-0.5 w-10 h-10 shrink-0 flex rounded-lg items-center justify-center border transition-all duration-300 ${
                                current
                                  ? "text-emerald-600 border-stone-100 font-black"
                                  : "border-stone-100 text-emerald-600 "
                              }`}
                            >
                              {item.icon}
                            </span>
                            <span className="flex flex-col">
                              <span className="text-[15px] font-semibold text-stone-900 leading-snug group-hover/item:text-emerald-800 transition-colors">
                                {item.name}
                              </span>
                              <span className="text-[13px] text-stone-500  leading-snug mt-1">
                                {item.desc}
                              </span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              {/* Featured card (optional per menu) */}
              {menu.featured && (
                <div
                  className="relative overflow-hidden bg-[#062c1b] p-7 flex flex-col motion-reduce:!transition-none"
                  style={{
                    opacity: on ? 1 : 0,
                    transform: on ? "translateY(0)" : "translateY(-14px)",
                    transition: on
                      ? `opacity 600ms ease-out ${160 + cols * 70}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${160 + cols * 70}ms`
                      : "opacity 200ms ease-in, transform 200ms ease-in",
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/50" />
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
                  <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                    {menu.featured.eyebrow}
                  </p>
                  <h4 className="relative font-['DM_Serif_Display'] text-2xl text-white leading-tight mb-3">
                    {menu.featured.title}
                  </h4>
                  <p className="relative text-sm text-emerald-100/80 font-light leading-relaxed mb-6">
                    {menu.featured.text}
                  </p>
                  <Link
                    to={menu.featured.to}
                    tabIndex={on ? 0 : -1}
                    className="relative mt-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-3 transition-colors"
                  >
                    {menu.featured.cta}
                    <span aria-hidden>→</span>
                  </Link>
                  {menu.featured.secondary && (
                    <Link
                      to={menu.featured.secondary.to}
                      tabIndex={on ? 0 : -1}
                      className="relative mt-4 text-center text-xs text-emerald-200/80 hover:text-white underline-offset-4 hover:underline transition-colors"
                    >
                      {menu.featured.secondary.label}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const closeMobile = () => {
    setOpen(false);
    setMobileSection(null);
  };

  return (
    <nav
      onMouseLeave={closeMenu}
      className={`fixed w-full z-50 transition-[padding,background-color] duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-md py-3 shadow-[0_1px_2px_rgba(16,185,129,0.08)] sm:shadow-[0_4px_8px_rgba(16,185,129,0.1)] lg:shadow-[0_10px_18px_rgba(16,185,129,0.12)]"
          : "bg-white border-b-2 border-emerald-50 py-4 lg:py-3"
      }`}
    >
      {/* Page dim while a mega menu is open */}
      <div
        aria-hidden
        className={`hidden lg:block absolute left-0 top-full w-full h-screen bg-stone-950/25 backdrop-blur-[2px] pointer-events-none transition-opacity duration-700 ease-out ${
          activeMenu ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative z-10 w-[98%] max-w-[1800px] px-5 sm:px-8 lg:px-14 xl:px-20 mx-auto flex lg:grid lg:grid-cols-3 justify-between items-center gap-4 bg-white">
        <div className="flex justify-start">
          <Link
            to="/"
            className="flex flex-col items-start group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative h-10 w-12 sm:h-11 sm:w-14 lg:h-12 lg:w-26">
              <img
                src="/logo2.jpg"
                alt="LushWare"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-11">
          {trigger("services", "Services")}
          {trigger("solutions", "Industries")}
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onMouseEnter={closeMenu}
              className={`text-sm font-bold tracking-widest uppercase whitespace-nowrap hover:text-emerald-700 transition-colors relative group ${
                location.pathname === link.to
                  ? "text-emerald-700"
                  : "text-stone-800"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
                  location.pathname === link.to
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex justify-end">
          <Link
            to="/contact"
            onMouseEnter={closeMenu}
            className="relative px-5 py-2 overflow-hidden group hover:scale-105 bg-stone-900 rounded-xs transition-all duration-500"
          >
            <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full" />
            <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white">
              Free Tech Consultation
            </span>
          </Link>
        </div>

        <div className="hidden md:flex lg:hidden items-center gap-3 ml-auto">
          <Link
            to="/contact"
            className="relative px-4 py-2 overflow-hidden group bg-stone-900 rounded-sm transition-all duration-500"
          >
            <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full" />
            <span className="relative z-10 text-[9px] font-bold tracking-[0.18em] uppercase text-white whitespace-nowrap">
              Free Consultation
            </span>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-lg transition-colors ml-1"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2.25" : ""}`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.25" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Desktop mega panels (sit under the bar, above the dim layer) */}
      {panel("services")}
      {panel("solutions")}

      {/* ── MOBILE DRAWER ─────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-50 h-screen lg:hidden"
          onClick={closeMobile}
        >
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" />
          <div
            className="absolute top-0 right-0 h-full w-[82%] max-w-xs sm:max-w-sm md:max-w-xl sm:p-4 bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 pt-5 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-emerald-600" />
                  <span className="nb-sans text-[9px] sm:text-lg font-bold text-emerald-600 uppercase tracking-[0.25em]">
                    Navigation
                  </span>
                </div>
                <button
                  onClick={closeMobile}
                  className="h-9 w-9 border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-300 transition-colors flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <span className="block text-lg leading-none">x</span>
                </button>
              </div>

              <div className="flex flex-col px-4 py-5 space-y-1">
                {(["services", "solutions"] as MenuKey[]).map((k, idx) => (
                  <div key={k}>
                    <button
                      onClick={() =>
                        setMobileSection((p) => (p === k ? null : k))
                      }
                      className="nb-sans w-full group px-4 py-3.5 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 transition-all duration-300 font-bold text-[10px] sm:text-lg uppercase tracking-[0.18em] text-left"
                      style={{
                        animation: `slideIn 0.4s ease-out ${idx * 0.08}s backwards`,
                      }}
                    >
                      <span className="flex items-center justify-between">
                        <span>
                          {k === "services" ? "Services" : "Solutions"}
                        </span>
                        <span
                          className={`text-emerald-600 transition-transform duration-300 text-base leading-none ${
                            mobileSection === k ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </span>
                    </button>

                    {mobileSection === k && (
                      <div className="ml-4 pl-4 pb-2 border-l border-emerald-100">
                        {menus[k].groups.map((g) => (
                          <div key={g.label} className="mb-2">
                            <p className="nb-sans px-4 pt-3 pb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                              {g.label}
                            </p>
                            {g.items.map((item, i) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={closeMobile}
                                className="nb-sans group/sub px-4 py-3 text-[11px] sm:text-lg font-medium text-slate-500 hover:text-emerald-700 hover:bg-emerald-50/40 transition-all duration-300 flex items-center gap-3"
                                style={{
                                  animation: `slideIn 0.4s ease-out ${0.05 + i * 0.06}s backwards`,
                                }}
                              >
                                <span className="text-emerald-600 shrink-0">
                                  {item.icon}
                                </span>
                                <span>{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex items-center gap-3 px-4 py-2">
                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                {links.map((link, i) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={closeMobile}
                    className={`nb-sans group px-4 py-3.5 font-bold text-[10px] sm:text-lg uppercase tracking-[0.18em] transition-all duration-300 ${
                      location.pathname === link.to
                        ? "text-emerald-700 bg-emerald-50/60"
                        : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60"
                    }`}
                    style={{
                      animation: `slideIn 0.4s ease-out ${0.15 + i * 0.1}s backwards`,
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto px-6 pb-8 pt-4 border-t border-slate-100">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-6 bg-emerald-600" />
                  <span className="nb-sans text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    Get Started
                  </span>
                </div>
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="nb-sans group relative w-full overflow-hidden bg-slate-900 px-6 py-4 font-bold tracking-wide transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] inline-flex items-center justify-center"
                >
                  <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white leading-none">
                    Free Consultation
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </nav>
  );
}
