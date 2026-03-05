import { motion } from "framer-motion";

export default function WebKitSection() {
  const templateImages = [
    { id: 4, image: "/templates/img/res.png",    x: "-62%", y: "-8%",  rotateX: 8,  rotateY: 28,  z: -120, scale: 0.82 },
    { id: 2, image: "/templates/img/cons.png",   x: "-32%", y: "12%",  rotateX: 4,  rotateY: 14,  z: -60,  scale: 0.93 },
    { id: 1, image: "/templates/img/travel.png", x: "0%",   y: "0%",   rotateX: 0,  rotateY: 0,   z: 0,    scale: 1    },
    { id: 3, image: "/templates/img/medi.png",   x: "32%",  y: "12%",  rotateX: 4,  rotateY: -14, z: -60,  scale: 0.93 },
    { id: 5, image: "/templates/img/real.png",   x: "62%",  y: "-8%",  rotateX: 8,  rotateY: -28, z: -120, scale: 0.82 },
  ];

  return (
<section
      data-reveal
      className="relative overflow-hidden bg-emerald-700"
    >
      {/* ── Background atmosphere ── */}
        {/* Creative Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.1] md:opacity-[0.3] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-80" />
        </div>

      {/* ── MOBILE CARD STRIP (hidden on md+) ── */}
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
              <div className="relative w-full h-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/20 bg-emerald-950 group">
                <img
                  src={item.image}
                  alt="Template"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-8 bg-gradient-to-r from-emerald-800 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-8 bg-gradient-to-l from-emerald-800 to-transparent" />
      </div>

      {/* ── DESKTOP 3D CARD FAN (hidden on mobile) ── */}
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
            style={{
              position: "absolute",
              transformStyle: "preserve-3d",
            }}
            className="w-[600px] aspect-video cursor-pointer"
          >
            <div className="relative w-full h-full overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/20 bg-emerald-950 group">
              <img
                src={item.image}
                alt="Template"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── CONTENT — heading + body ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-8 sm:px-10 md:px-12 lg:px-16"
        style={{
          paddingTop: "clamp(28px, 5vw, 64px)",
          paddingBottom: "clamp(40px, 7vw, 96px)",
        }}
      >
        {/* Thin top rule */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent mb-6 sm:mb-8 md:mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 lg:gap-24 items-start">

          {/* ── LEFT: Heading ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] md:leading-[1.1]">
              Introducing <br /> WebKit
              <span className="text-[#ffffff]">
                <br /> by{" "}
                <span className="text-amber-400">LushWare</span>
              </span>
            </h2>
          </motion.div>

          {/* ── RIGHT: Body + CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-start gap-5 sm:gap-6 md:gap-8 md:pt-4 md:border-l-2 md:border-emerald-200/60 md:pl-10 lg:pl-14"
          >
            <p
              className="text-white leading-relaxed text-sm sm:text-base"
              style={{ fontSize: "clamp(0.875rem, 1.8vw, 1.15rem)" }}
            >
              WebKit is our curated collection of ready-to-use website
              templates, crafted for elite industries. Each template is
              designed to{" "}
              <span className="text-emerald-50 font-medium">
                elevate your digital presence
              </span>{" "}
              with the same precision and stability found in our bespoke
              solutions.
            </p>

            {/* CTA */}
            <a
              href="/solutions/websites"
              className="group relative self-start w-full sm:w-auto text-center sm:text-left px-6 sm:px-8 py-3.5 sm:py-4 bg-emerald-950/40 backdrop-blur-md border border-emerald-200/70 overflow-hidden transition-all duration-500 hover:border-emerald-300 hover:shadow-[0_0_36px_rgba(16,185,129,0.22)]"
              style={{ borderRadius: "40px" }}
            >
              <span className="relative z-10 text-emerald-50 font-medium tracking-wide flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
                Explore WebKit Templates
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300 group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7-7 7"
                  />
                </svg>
              </span>
              {/* shine sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}