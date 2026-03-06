"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function GlobalPresence() {
  return (
    <section className="relative py-28 bg-white overflow-hidden selection:bg-emerald-100">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');
        .gp-serif { font-family: 'DM Serif Display', serif; }
        .gp-sans  { font-family: 'DM Sans', sans-serif; }
        .gp-grid-dot {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-8 md:px-0 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT SIDE: EDITORIAL TEXT ── */}
          <div className="space-y-10 md:space-y-12 z-5 order-2 lg:order-1 text-center lg:text-left">

            <div className="relative space-y-6">

              {/* Dot grid accent */}
              <div className="gp-grid-dot absolute inset-0 -z-10 opacity-40 pointer-events-none" />

              {/* Badge — Project Base flanking lines style */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-7">
                <div className="h-px w-8 bg-emerald-600" />
                <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em] gp-sans">
                  UK & Sri Lanka Operations
                </div>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              {/* Headline */}
              <h2 className="gp-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-slate-900 leading-[1.05]">
                Working with{" "}
                <span className=" text-slate-500">the UK.</span>
                <br />
                <span className="relative inline-block  text-emerald-600">
                  Trusted in Sri Lanka.
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 4"
                    preserveAspectRatio="none"
                    height="4"
                  >
                    <path
                      d="M0,2 Q50,0 100,2 T200,2"
                      stroke="#059669"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              {/* Body copy */}
              <p className="gp-sans text-slate-500 font-light leading-relaxed text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
                We deliver high-quality software solutions for businesses in the{" "}
                <span className="text-slate-900 font-medium">United Kingdom</span>,
                with a special focus on meeting UK commercial, security, and compliance standards.
              </p>

              <p className="gp-sans text-slate-500 font-light leading-relaxed text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
                Alongside our UK work, we also partner closely with{" "}
                <span className="text-slate-900 font-medium">Sri Lankan organizations</span>,
                supporting local enterprises with the same level of engineering excellence and reliability.
              </p>

            </div>

            {/* Regional Focus Rows */}
            <div className="flex flex-col gap-0 pt-4 border-t border-slate-200">
              {[
                {
                  num: "01",
                  title: "United Kingdom",
                  sub: "Primary Market · Enterprise & SME Clients",
                },
                {
                  num: "02",
                  title: "Sri Lanka",
                  sub: "Regional Clients · Product Development & Support",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="group relative flex items-center gap-8 px-4 py-6 border-b border-slate-200 overflow-hidden transition-all duration-500 cursor-default"
                >
                  {/* Hover sweep bg */}
                  <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />

                  {/* Number */}
                  <span className="gp-sans font-mono text-[11px] text-slate-300 group-hover:text-emerald-500 transition-colors duration-300 tabular-nums shrink-0">
                    {item.num}
                  </span>

                  {/* Text */}
                  <div className="transition-transform duration-500 group-hover:translate-x-1">
                    <h4 className="gp-sans text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="gp-sans text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5 uppercase tracking-widest">
                      {item.sub}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <svg
                      className="w-4 h-4 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT SIDE: THE INSTRUMENT MAP — UNTOUCHED ── */}
          <div className="relative order-1 pr-4 lg:order-2">
            {/* TOP LEFT METADATA */}
            <div className="absolute top-8 left-8 z-30">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-emerald-900 uppercase tracking-tighter">
                  Live Connection
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                LON — CMB Axis
              </p>
            </div>

            {/* WORLD MAP WITH PINS */}
            <div
              className="relative w-full h-full flex items-center justify-center
                         scale-150 lg:scale-[1.8]
                         -translate-x-8 lg:-translate-x-32"
            >
              {/* London Pin */}
              <div className="absolute top-[32%] left-[46.5%] z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-10 h-10 rounded-lg border-2 border-white shadow-lg overflow-hidden bg-white"
                >
                  <img
                    src="https://flagcdn.com/w80/gb.png"
                    className="w-full h-full object-cover"
                    alt="UK"
                  />
                </motion.div>
                <div className="w-px h-3 bg-emerald-800/40" />
              </div>

              {/* Sri Lanka Pin */}
              <div className="absolute top-[68%] left-[72.5%] z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-10 h-10 rounded-lg border-2 border-white shadow-lg overflow-hidden bg-white"
                >
                  <img
                    src="https://flagcdn.com/w80/lk.png"
                    className="w-full h-full object-cover"
                    alt="SL"
                  />
                </motion.div>
                <div className="w-px h-3 bg-emerald-800/40" />
              </div>

              <WorldMap
                dots={[
                  {
                    start: { lat: 51.5074, lng: -0.1278 },
                    end: { lat: -5.9271, lng: 79.8612 },
                  },
                ]}
              />
            </div>

            {/* BOTTOM RIGHT DECORATIVE COORDINATES */}
            <div className="absolute bottom-8 right-8 text-right opacity-30">
              <p className="text-[8px] font-mono text-emerald-900">
                LAT: 51.5074 / 6.9271
              </p>
              <p className="text-[8px] font-mono text-emerald-900">
                LNG: -0.1278 / 79.8612
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}