import React from "react";
import { useNavigate } from "react-router-dom";

const WhyChooseLushWare: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&display=swap');

        .wlw-root * { font-family: 'DM Sans', sans-serif; }
        .wlw-serif { font-family: 'DM Serif Display', serif; }

        .wlw-grid-dot {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .wlw-hero-line {
          animation: wlw-fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .wlw-hero-line:nth-child(2) { animation-delay: 0.1s; }
        .wlw-hero-line:nth-child(3) { animation-delay: 0.2s; }
        .wlw-hero-line:nth-child(4) { animation-delay: 0.3s; }

        @keyframes wlw-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .wlw-tag {
          transition: background 0.25s, color 0.25s, border-color 0.25s;
        }
        .wlw-tag:hover {
          background: #ecfdf5;
          border-color: #6ee7b7;
          color: #065f46;
        }

        .wlw-sweep-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #059669;
          transform: translateX(-101%);
          transition: transform 0.45s cubic-bezier(0.85,0,0.15,1);
          z-index: 0;
        }
        .wlw-sweep-btn:hover::after { transform: translateX(0); }
      `}</style>

      <section className="wlw-root w-full bg-white py-16 md:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">

          {/* ── HEADER ─────────────────────────────────── */}
          <div className="mb-16 md:mb-24 text-center relative">
            <div className="wlw-grid-dot absolute inset-0 -z-10 opacity-60 pointer-events-none" />

            <div className="wlw-hero-line flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                Why LushWare?
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h2 className="wlw-hero-line wlw-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-slate-900 leading-[1.05]">
              A Technology Partner{" "}
              <span className="relative inline-block  text-emerald-600">
                Focused on Results
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
              .
            </h2>
          </div>

          {/* ── MAIN GRID ──────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0">

            {/* IMAGE — order-1 mobile, order-2 desktop */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] sm:aspect-[4/4] lg:aspect-square w-full">
                {/* Accent Glow */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-60 animate-pulse" />

                {/* Main Image Frame */}
                <div className="relative h-full w-full overflow-hidden shadow-[0_30px_60px_-10px_rgba(2,44,34,0.2)] lg:shadow-[0_50px_100px_-20px_rgba(2,44,34,0.2)]">
                  <img
                    src="/solution/customer.jpg"
                    alt="LushWare Business Outcomes"
                    className="h-full w-full object-cover grayscale-[20%] contrast-125 hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Gradient Glass Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-white/10" />

                  {/* Overlay Info Card */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-4 sm:p-6 bg-white/10 backdrop-blur-md border border-white/20">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest opacity-70">
                          Project Capacity
                        </p>
                        <p className="text-white text-base sm:text-xl font-bold ">
                          Enterprise Ready
                        </p>
                      </div>
                      <div className="h-8 w-8 sm:h-10 sm:w-10 border border-[#B89450] flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 bg-[#B89450]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Gold Corner */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-24 w-24 sm:h-32 sm:w-32 border-b-2 border-r-2 border-[#B89450] opacity-40" />
              </div>
            </div>

            {/* TEXT — order-2 mobile, order-1 desktop */}
            <div className="lg:col-span-6 lg:pr-16 z-10 order-2 lg:order-1">
              <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">

                {/* Section label */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-emerald-600" />
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">
                    The Platform
                  </span>
                </div>

                <h3 className="wlw-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.1]">
                  We don't just build software —{" "}
                  <span className=" text-emerald-600">
                    we solve business problems.
                  </span>
                </h3>

                <div className="relative pl-6 border-l-2 border-slate-900 text-left">
                  <p className="text-slate-500 leading-relaxed text-base md:text-lg font-light">
                    Our solutions are tailored to your{" "}
                    <span className="text-slate-900 font-medium">
                      goals, processes, and customers
                    </span>
                    , delivering measurable value through scalable, secure, and
                    future-ready technology.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {[
                    "Scalable Architecture",
                    "Customer-Centric Focus",
                    "Future-Ready Tech",
                  ].map((item) => (
                    <span
                      key={item}
                      className="wlw-tag px-4 py-2 bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => navigate("/contact")}
                    className="wlw-sweep-btn cursor-pointer group relative inline-flex items-center gap-3 px-10 py-4 bg-slate-900 overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
                  >
                    <span className="relative z-10 text-white text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300">
                      Book a Consultation
                    </span>
                    <svg
                      className="relative z-10 w-3.5 h-3.5 text-white transition-transform duration-500 group-hover:translate-x-1.5"
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
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseLushWare;