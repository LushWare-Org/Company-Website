import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WebKitSection() {
  const navigate = useNavigate();

  const templateImages = [
    {
      id: 4,
      image: "/templates/img/res.png",
      x: "-62%",
      y: "-8%",
      rotateX: 8,
      rotateY: 28,
      z: -120,
      scale: 0.82,
    },
    {
      id: 2,
      image: "/templates/img/cons.png",
      x: "-32%",
      y: "12%",
      rotateX: 4,
      rotateY: 14,
      z: -60,
      scale: 0.93,
    },
    {
      id: 1,
      image: "/templates/img/travel.png",
      x: "0%",
      y: "0%",
      rotateX: 0,
      rotateY: 0,
      z: 0,
      scale: 1,
    },
    {
      id: 3,
      image: "/templates/img/medi.png",
      x: "32%",
      y: "12%",
      rotateX: 4,
      rotateY: -14,
      z: -60,
      scale: 0.93,
    },
    {
      id: 5,
      image: "/templates/img/real.png",
      x: "62%",
      y: "-8%",
      rotateX: 8,
      rotateY: -28,
      z: -120,
      scale: 0.82,
    },
  ];

  return (
    <section
      data-reveal
      className="relative overflow-hidden"
      style={{ background: "#059669" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');

        .wk-serif     { font-family: 'DM Serif Display', serif; }
        .wk-cormorant { font-family: 'Cormorant Garamond', serif; }
        .wk-sans      { font-family: 'DM Sans', sans-serif; }

        /* ── Noise grain ── */
        .wk-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }
        .wk-grain::after {
          content: '';
          position: absolute;
          inset: -50%;
          width: 200%;
          height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.055;
        }

        /* ── Card shine ── */
        .wk-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%);
          z-index: 3;
          pointer-events: none;
        }

        /* ── Primary CTA ── */
        .wk-cta {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .wk-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #022c22;
          transform: translateX(-101%);
          transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
          z-index: -1;
        }
        .wk-cta:hover::after              { transform: translateX(0); }
        .wk-cta:hover .wk-cta-text        { color: #6ee7b7; }
        .wk-cta:hover .wk-cta-icon        { transform: translateX(5px); color: #6ee7b7; }
        .wk-cta-text { transition: color 0.4s ease; }
        .wk-cta-icon { transition: transform 0.4s ease, color 0.4s ease; }

        /* ── Ghost link ── */
        .wk-ghost-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .wk-ghost-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: rgba(255,255,255,0.5);
          transition: width 0.4s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .wk-ghost-link:hover::after { width: 100%; }
        .wk-ghost-link:hover { color: rgba(255,255,255,0.9); }
        .wk-ghost-link:hover .wk-ghost-icon { transform: translateX(4px); }
        .wk-ghost-icon { transition: transform 0.4s ease; }

        /* ── Stat block ── */
        .wk-stat-block {
          transition: background 0.4s ease;
        }
        .wk-stat-block:hover {
          background: rgba(0,0,0,0.06);
        }

        /* ── Tags ── */
        .wk-pill {
          transition: background 0.3s, border-color 0.3s, color 0.3s;
        }
        .wk-pill:hover {
          background: rgba(0,0,0,0.15);
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.9);
        }

        /* ── Scroll ticker ── */
        @keyframes wk-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .wk-ticker-track {
          animation: wk-ticker 22s linear infinite;
          display: flex;
          width: max-content;
        }
        .wk-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Grain ── */}
      <div className="wk-grain" />

      {/* ── Background layers ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Dark vignette corners */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, transparent 40%, rgba(0,0,0,0.18) 100%)",
          }}
        />

        {/* Top-left geometric light leak */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, transparent 65%)",
          }}
        />

        {/* Bottom-right deep shadow */}
        <div
          style={{
            position: "absolute",
            bottom: "-5%",
            right: "-5%",
            width: "500px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Diagonal rule lines — engineering precision feel */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.04 }}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="wk-diag"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="60"
                x2="60"
                y2="0"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wk-diag)" />
        </svg>

        {/* Top edge bright line */}
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
          }}
        />
        {/* Bottom edge line */}
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent)",
          }}
        />
      </div>

      {/* ════════════════════════════════
          MOBILE CARD STRIP — UNTOUCHED
      ════════════════════════════════ */}
      <div className="relative z-10 mt-8 sm:mt-10 md:hidden">
        <div
          className="flex gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {templateImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-none w-[78vw] sm:w-[68vw] max-w-[320px] snap-center aspect-video cursor-pointer"
            >
              <div className="wk-card relative w-full h-full overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)] border border-white/15 bg-emerald-950 group">
                <img
                  src={item.image}
                  alt="Template"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-100 opacity-100 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-emerald-600 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-emerald-600 to-transparent" />
      </div>

      {/* ════════════════════════════════
          DESKTOP 3D FAN — UNTOUCHED
      ════════════════════════════════ */}
      <div className="relative hidden md:flex h-[400px] mt-32 items-center justify-center [perspective:2000px] [transform-style:preserve-3d]">
        {templateImages.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 56, scale: 0.94 }}
            whileInView={{
              opacity: 1,
              x: item.x,
              y: item.y,
              rotateX: item.rotateX,
              rotateY: item.rotateY,
              z: item.z,
              scale: item.scale,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.0,
              rotateX: 0,
              rotateY: 0,
              z: 100,
              transition: { duration: 0.4, ease: "circOut" },
            }}
            style={{ position: "absolute", transformStyle: "preserve-3d" }}
            className="w-[600px] aspect-video cursor-pointer"
          >
            <div className="wk-card relative w-full h-full overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.55)] border border-white/15 bg-emerald-950 group">
              <img
                src={item.image}
                alt="Template"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-100 opacity-100 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ════════════════════════════════
          SCROLLING TICKER STRIP
      ════════════════════════════════ */}
      <div
        className="relative z-10 overflow-hidden border-t border-b mt-16"
        style={{ borderColor: "rgba(255,255,255,0.12)" }}
      >
        <div className="py-3 bg-black/10">
          <div className="wk-ticker-track">
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex items-center gap-0">
                {[
                  "Production Ready Templates",
                  "Elite Industry Design",
                  "Built by LushWare ORG",
                  "Fully Customizable",
                  "Rapid Deployment",
                  "Enterprise Grade",
                ].map((item, i) => (
                  <div
                    key={`${rep}-${i}`}
                    className="flex items-center gap-6 px-8"
                  >
                    <span
                      className="wk-sans font-bold uppercase whitespace-nowrap"
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.28em",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {item}
                    </span>
                    <div
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: "rgba(255,255,255,0.85)" }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════ */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-8 sm:px-10 md:px-12 lg:px-16"
        style={{
          paddingTop: "clamp(52px, 7vw, 96px)",
          paddingBottom: "clamp(64px, 9vw, 128px)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-14 md:gap-16 lg:gap-24 items-start">
          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div
                className="h-px w-10"
                style={{ background: "rgba(255,255,255,0.85)" }}
              />
              <span
                className="wk-sans font-bold uppercase"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.32em",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Website Templates
              </span>
            </div>

            {/* Headline stack */}
            <div className="space-y-2">
              <div
                className="wk-sans font-medium uppercase"
                style={{
                  fontSize: "14px",
                  letterSpacing: "0.38em",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Introducing
              </div>

              {/* "WebKit" — the hero word */}
              <h2
                className="wk-serif text-white font-normal leading-[0.88] tracking-[-0.02em]"
                style={{ fontSize: "clamp(4rem, 8.5vw, 7rem)" }}
              >
                WebKit
              </h2>

              {/* Brand line — Cormorant italic, large, white outline */}
              <div
                className="wk-cormorant  font-light leading-none"
                style={{
                  fontSize: "clamp(1.6rem, 3.8vw, 3rem)",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.9)",
                  letterSpacing: "0.02em",
                }}
              >
                by LushWare{" "}
                <span
                  className="wk-serif not-italic"
                  style={{
                    WebkitTextStroke: "0px",
                    color: "#fde68a",
                    fontSize: "0.78em",
                    fontWeight: 400,
                  }}
                >
                  ORG
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              className="w-12 h-px"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "Production Ready",
                "Elite Industries",
                "Fully Customizable",
              ].map((tag) => (
                <span
                  key={tag}
                  className="wk-pill wk-sans font-bold uppercase cursor-default"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.16em",
                    padding: "6px 14px",
                    border: "1px solid rgba(255,255,255,0.48)",
                    color: "rgba(255,255,255,0.85)",
                    background: "rgba(0,0,0,0.1)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
            style={{
              paddingLeft: "clamp(0px, 4vw, 56px)",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Body copy with accent line */}
            <div className="flex gap-5">
              <div
                className="shrink-0 w-px mt-1"
                style={{
                  height: "90px",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
                }}
              />
              <p
                className="wk-sans font-light leading-[1.9]"
                style={{
                  fontSize: "clamp(0.9rem, 1.6vw, 1.075rem)",
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                A curated collection of ready-to-deploy website templates
                engineered for{" "}
                <span
                  style={{ color: "rgba(255,255,255,0.95)", fontWeight: 500 }}
                >
                  elite industries
                </span>
                . Every template is built to the same standards as our bespoke
                solutions —{" "}
                <span
                  style={{ color: "rgba(255,255,255,0.95)", fontWeight: 500 }}
                >
                  without the timeline
                </span>
                .
              </p>
            </div>

            {/* Stats — 3 columns, bordered */}
            <div
              className="grid grid-cols-3"
              style={{ border: "1px solid rgba(255,255,255,0.52)" }}
            >
              {[
                { value: "12+", label: "Templates" },
                { value: "5★", label: "Rated" },
                { value: "48h", label: "Delivery" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="wk-stat-block px-5 py-6"
                  style={{
                    borderRight:
                      i < 2 ? "1px solid rgba(255,255,255,0.52)" : "none",
                  }}
                >
                  <div
                    className="wk-serif text-white font-normal leading-none mb-2"
                    style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="wk-sans font-bold uppercase"
                    style={{
                      fontSize: "8px",
                      letterSpacing: "0.22em",
                      color: "rgba(255,255,255,0.52)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-7">
              {/* Primary: white fill, dark sweep */}
              <button
                type="button"
                onClick={() => navigate("/solutions/websites")}
                className="wk-cta cursor-pointer wk-sans group inline-flex items-center gap-3 bg-white active:scale-[0.97] transition-transform duration-150"
                style={{
                  padding: "14px 32px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#064e3b",
                }}
              >
                <span className="wk-cta-text">Explore WebKit</span>
                <svg
                  className="wk-cta-icon w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
