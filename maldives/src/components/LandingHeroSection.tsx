import { motion, useScroll, useTransform } from "framer-motion";

function LandingHeroSection() {
  const { scrollY } = useScroll();

  const textOpacity = useTransform(scrollY, [0, 400], [0.9, 0]);
  const brandMoveX = useTransform(scrollY, [0, 500], [0, 260]);
  const headingBlur = useTransform(
    scrollY,
    [0, 450],
    ["blur(0px)", "blur(6px)"],
  );

  // Lightweight parallax — only translates, doesn't scale a full image
  const fgY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#ffffff]">
      {/* TOP GRADIENT */}
      <div className="absolute top-0 left-0 w-full z-50 pointer-events-none">
        <div className="h-64 w-full bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* BACKGROUND — plain div, no motion, no scale */}
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover brightness-[0.85]"
          src="/bg222.webp"
          alt="Maldives Horizon"
          loading="eager"
        />
      </div>

      {/* BRAND TEXT */}
      <motion.div
        style={{
          opacity: textOpacity,
          x: brandMoveX,
          filter: "blur(3px)",
          willChange: "transform, opacity",
        }}
        className="absolute top-72 left-0 sm:top-32 sm:left-16 md:top-96 lg:top-36 md:left-2 lg:left-96 z-10 p-3 sm:p-4 md:p-6 pointer-events-none"
      >
        <motion.h1
          initial={{ letterSpacing: "1em", opacity: 0 }}
          animate={{ letterSpacing: "-0.05em", opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[16vw] sm:text-[10vw] md:text-[16vw] lg:text-[7vw] font-extrabold leading-none tracking-tighter text-white select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)]"
        >
          LUSHWARE
        </motion.h1>
      </motion.div>

      {/* FOREGROUND — translateY instead of scale, much cheaper */}
      <motion.div
        style={{ y: fgY, willChange: "transform" }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <img
          className="h-full w-full object-cover"
          src="/bgremoved22.avif"
          alt="Foreground villas"
          loading="eager"
        />
      </motion.div>

      {/* UI CONTENT CONTAINER */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end pb-24 px-6 lg:px-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-[60vh] pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="max-w-[1600px] w-full mx-auto relative z-10">
          <motion.h2
            style={{ filter: headingBlur, willChange: "filter" }}
            className="flex flex-col items-start select-none"
          >
            {/* LINE 1: SMART DIGITAL SOLUTIONS */}
            <div className="overflow-hidden mb-1 py-2">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1.2,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="block text-[11vw] md:text-8xl lg:text-8xl tracking-[-0.06em] leading-none"
              >
                <span
                  className="text-white font-bold"
                  style={{ textShadow: "0px 4px 10px rgba(0,0,0,0.6)" }}
                >
                  Smart Digital{" "}
                </span>
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                  Solutions
                </span>
              </motion.span>
            </div>

            {/* LINE 2: FOR MALDIVES */}
            <div className="relative flex flex-wrap items-end gap-x-6 gap-y-2 mt-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-[6vw] md:text-5xl lg:text-5xl text-white italic leading-none pb-2 [text-shadow:0_4px_12px_rgba(0,0,0,0.5)]"
              >
                for
              </motion.span>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1,
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ willChange: "transform, opacity" }}
                className="relative"
              >
                <div className="absolute -inset-x-10 inset-y-0 bg-emerald-500/15 blur-[100px] rounded-full opacity-60" />
                <h2
                  style={{
                    textShadow: `
                      0px 10px 30px rgba(0,0,0,0.8),
                      0px 20px 60px rgba(0,0,0,0.4),
                      0px 0px 100px rgba(0,0,0,0.3)
                    `,
                  }}
                  className="relative text-[19.5vw] sm:text-[12vw] md:text-[12rem] lg:text-[12rem] font-black tracking-[-0.08em] leading-[0.8] text-white"
                >
                  Maldives
                </h2>
              </motion.div>

              {/* LINE 3: HOSPITALITY CHIP */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 1.3,
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
                className="px-8 py-3 bg-gradient-to-b from-black/50 to-white/10 border-t border-white/10 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <span className="text-[9vw] sm:text-[5vw] md:text-7xl lg:text-7xl font-thin tracking-tighter text-amber-100/90">
                  Hospitality
                </span>
              </motion.div>
            </div>
          </motion.h2>
        </div>
      </div>

      {/* SIDE BORDERS */}
      <div className="absolute inset-0 pointer-events-none z-40 border-x border-white/5 mx-4 sm:mx-8 md:mx-16" />
    </section>
  );
}

export default LandingHeroSection;
