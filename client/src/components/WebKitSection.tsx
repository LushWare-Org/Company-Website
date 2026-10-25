import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WebKitSection() {
  const navigate = useNavigate();

  const templateImages = [
    {
      id: 4,
      image: "/templates/img/res.webp",
      x: "-62%",
      y: "-8%",
      rotateX: 8,
      rotateY: 28,
      z: -120,
      scale: 0.82,
    },
    {
      id: 2,
      image: "/templates/img/cons.webp",
      x: "-32%",
      y: "12%",
      rotateX: 4,
      rotateY: 14,
      z: -60,
      scale: 0.93,
    },
    {
      id: 1,
      image: "/templates/img/travel.webp",
      x: "0%",
      y: "0%",
      rotateX: 0,
      rotateY: 0,
      z: 0,
      scale: 1,
    },
    {
      id: 3,
      image: "/templates/img/medi.webp",
      x: "32%",
      y: "12%",
      rotateX: 4,
      rotateY: -14,
      z: -60,
      scale: 0.93,
    },
    {
      id: 5,
      image: "/templates/img/real.webp",
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
                  "Built by LushWare",
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
          paddingTop: "clamp(64px, 8vw, 110px)",
          paddingBottom: "clamp(64px, 8vw, 110px)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── LEFT: Brand Identity ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <span
                className="wk-sans font-semibold uppercase tracking-[0.2em]"
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Enterprise Solutions
              </span>

              <h2
                className="wk-serif text-white font-medium leading-tight tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)" }}
              >
                WebKit
              </h2>

              <p
                className="wk-sans font-light "
                style={{
                  fontSize: "1.45rem",
                  color: "rgba(255,255,255,0.9)",
                  marginTop: "-8px",
                }}
              >
                by LushWare
              </p>
            </div>

            <div className="h-[2px] w-16 bg-white/20" />
          </motion.div>

          {/* ── RIGHT: Value Proposition ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <p
              className="wk-sans font-normal leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Experience a curated collection of high-performance website
              templates, precisely engineered for{" "}
              <span className="text-white font-medium">industry leaders</span>.
              Our frameworks deliver bespoke-level quality with
              <span className="text-white font-medium">
                {" "}
                accelerated deployment
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-5">
              <button
                type="button"
                onClick={() => navigate("/solutions/websites")}
                className="cursor-pointer transition-all duration-300 border-2 backdrop-blur-sm border-white/50 hover:border-white hover:bg-white hover:text-black px-10 py-4 text-white uppercase tracking-widest text-xs font-bold active:scale-95"
              >
                View Collection
              </button>

              <button
                type="button"
                className="px-6 py-4 text-white/80 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
              >
                Technical Specs
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
