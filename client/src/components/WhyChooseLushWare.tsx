import React from "react";
import { useNavigate } from "react-router-dom";

const WhyChooseLushWare: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#ffffff] py-16 md:py-38 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* Main Grid: 12-Column System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0">

          {/* IMAGE SECTION — order-1 on mobile (shows first), order-2 on desktop (shows second) */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] sm:aspect-[4/4] lg:aspect-square w-full">
              {/* Accent Glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>

              {/* Main Image Frame */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-[0_30px_60px_-10px_rgba(2,44,34,0.2)] lg:shadow-[0_50px_100px_-20px_rgba(2,44,34,0.2)]">
                <img
                  src="/solution/customer.jpg"
                  alt="LushWare Business Outcomes"
                  className="h-full w-full object-cover grayscale-[20%] contrast-125 hover:scale-105 transition-transform duration-1000"
                />

                {/* Gradient Glass Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-white/10"></div>

                {/* Overlay Info Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-4 sm:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl lg:rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest opacity-70">
                        Project Capacity
                      </p>
                      <p className="text-white text-base sm:text-xl font-bold italic">Enterprise Ready</p>
                    </div>
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-[#B89450] flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 bg-[#B89450] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Gold Corner */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-24 w-24 sm:h-32 sm:w-32 border-b-2 border-r-2 border-[#B89450] opacity-40"></div>
            </div>
          </div>

{/* TEXT CONTENT — order-2 on mobile (shows second), order-1 on desktop (shows first) */}
          <div className="lg:col-span-6 lg:pr-12 z-10 order-2 lg:order-1">
            <div className="space-y-10 sm:space-y-8 md:space-y-14 lg:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                  Why LushWare?
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-emerald-950 leading-[0.9] tracking-tighter">
                A Technology Partner <br />
                <span className="text-emerald-600">Focused on Results.</span>
              </h2>

              <p className="max-w-xl text-base sm:text-xl lg:text-xl text-stone-700 leading-relaxed border-l-2 border-[#B89450] pl-4 text-left">
                At LushWare, we don't just build software — we solve business problems.
                Our solutions are tailored to your goals, processes, and customers,
                delivering measurable value through scalable, secure, and future-ready technology.
              </p>

              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 sm:px-10 py-4 sm:py-5 bg-emerald-950 text-white text-[11px] sm:text-[12px] font-black uppercase rounded-full tracking-[0.15em] transition-all hover:bg-emerald-600 duration-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,44,34,0.15)]"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseLushWare;