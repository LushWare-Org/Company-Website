"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function GlobalPresence() {
  return (
    <section className="relative py-24 bg-white overflow-hidden selection:bg-emerald-100">
      <div className="max-w-7xl mx-auto px-8 md:px-0 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: EDITORIAL TEXT */}
          <div className="space-y-12 z-5  order-2 lg:order-1">
            <div className="space-y-6">


                <div className="flex items-center gap-2 mb-4 ">
                  <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                    UK & Sri Lanka Operations
                  </div>
                </div>

              {/* Headline */}
              <h2 className="text-5xl md:text-7xl font-medium text-slate-950 leading-[0.9] tracking-tight">
                Working with the UK. <br />
                <span className="text-emerald-600">
                  Trusted in Sri Lanka.
                </span>
              </h2>

              {/* Core Message */}
              <p className="text-slate-800 font-medium leading-relaxed text-lg max-w-lg">
                We deliver high-quality software solutions for businesses in the
                <strong> United Kingdom</strong>, with a special focus on meeting UK
                commercial, security, and compliance standards.
              </p>

              <p className="text-slate-800 font-medium leading-relaxed text-lg max-w-lg">
                Alongside our UK work, we also partner closely with 
                <strong> Sri Lankan organizations</strong>, supporting local enterprises
                with the same level of engineering excellence and reliability.
              </p>
            </div>

            {/* Regional Focus */}
            <div className="flex flex-col gap-10">
              <div className="flex items-start gap-6">
                <span className="font-serif italic text-2xl text-emerald-900">01</span>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">
                    United Kingdom
                  </h4>
                  <p className="text-xs text-slate-800 font-mono mt-1">
                    Primary Market · Enterprise & SME Clients
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="font-serif italic text-2xl text-emerald-900">02</span>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">
                    Sri Lanka
                  </h4>
                  <p className="text-xs text-slate-800 font-mono mt-1">
                    Regional Clients · Product Development & Support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE INSTRUMENT MAP */}
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
                  <img src="https://flagcdn.com/w80/gb.png" className="w-full h-full object-cover" alt="UK" />
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
                  <img src="https://flagcdn.com/w80/lk.png" className="w-full h-full object-cover" alt="SL" />
                </motion.div>
                <div className="w-px h-3 bg-emerald-800/40" />
              </div>

              <WorldMap
                dots={[
                  {
                    start: { lat: 51.5074, lng: -0.1278 },
                    end: { lat: 6.9271, lng: 79.8612 },
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
