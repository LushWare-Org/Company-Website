import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

function RollingCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  
  // Checks if the section is in view
  const isInView = useInView(ref, { amount: 0.5, once: false });

  useEffect(() => {
    if (isInView) {
      // Animate from 0 to the target value
      motionValue.set(0); 
      animate(motionValue, value, { duration: duration });
    }
  }, [isInView, value, motionValue, duration]);

  useEffect(() => {
    // Update the text content of the span directly for performance
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}


export default function JoinSection() {
  const navigate = useNavigate();

  return (
<section data-reveal className="px-4 py-28 overflow-hidden relative bg-white">

  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');
    .pi-serif { font-family: 'DM Serif Display', serif; }
    .pi-sans  { font-family: 'DM Sans', sans-serif; }
    .pi-grid-dot {
      background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
      background-size: 28px 28px;
    }
    .pi-sweep-btn::after {
      content: '';
      position: absolute;
      inset: 0;
      background: #059669;
      transform: translateX(-101%);
      transition: transform 0.45s cubic-bezier(0.85,0,0.15,1);
      z-index: 0;
    }
    .pi-sweep-btn:hover::after { transform: translateX(0); }
  `}</style>

  {/* Background blobs — untouched */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />
    <div
      className="absolute inset-0 opacity-[0.09] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23059669\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")',
      }}
    />
  </div>

  <div className="max-w-7xl mx-auto relative z-10 px-8">
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

      {/* ── LEFT SIDE: RESTYLED ── */}
      <div className="lg:w-5/12 text-center lg:text-left">

        {/* Dot grid accent */}
        <div className="relative">
          <div className="pi-grid-dot absolute inset-0 -z-10 opacity-40 pointer-events-none" />

          {/* Badge — Project Base flanking lines */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <div className="h-px w-8 bg-emerald-600" />
            <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em] pi-sans">
              Project Inventory
            </div>
            <div className="h-px w-8 bg-emerald-600" />
          </div>

          {/* Headline — DM Serif Display */}
          <h2 className="pi-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-slate-900 leading-[1.05] mb-7">
            Build real{" "}
            <span className=" text-slate-500">things</span>
            {" "}that
            <br />
            <span className="relative inline-block  text-emerald-600">
              actually ship.
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
          <p className="pi-sans text-slate-500 font-light text-base sm:text-lg max-w-md leading-relaxed mb-10 mx-auto lg:mx-0">
            Join our growing team and work on{" "}
            <span className="text-slate-900 font-medium">real-world projects</span>.
            Develop your skills, collaborate with talented professionals, and make a real impact.
          </p>

        </div>

        {/* Divider rows — Project Base style */}
        <div className="flex flex-col gap-0 mb-10 border-t border-slate-200">
          {[
            { num: "01", title: "Structured Mentorship", sub: "Code reviews · Delivery rituals · Real feedback" },
            { num: "02", title: "Ship Real Products", sub: "Live projects · Production environments · Ownership" },
          ].map((item) => (
            <div
              key={item.num}
              className="group relative flex items-center gap-8 py-5 px-4 border-b border-slate-200 overflow-hidden transition-all duration-500 cursor-default"
            >
              <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />
              <span className="pi-sans font-mono text-[11px] text-slate-300 group-hover:text-emerald-500 transition-colors duration-300 tabular-nums shrink-0">
                {item.num}
              </span>
              <div className="transition-transform duration-500 group-hover:translate-x-1">
                <h4 className="pi-sans text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
                  {item.title}
                </h4>
                <p className="pi-sans text-[10px] text-slate-400 font-mono mt-0.5 uppercase tracking-widest">
                  {item.sub}
                </p>
              </div>
              <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — Project Base sweep button */}
        <div className="flex justify-center lg:justify-start">
          <button
            onClick={() => navigate("/project-base")}
            className="pi-sweep-btn cursor-pointer pi-sans group relative overflow-hidden h-12 px-9 bg-slate-900 transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)]"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.18em] whitespace-nowrap">
                Join Now
              </span>
              <svg
                className="w-3.5 h-3.5 text-white transition-transform duration-500 group-hover:translate-x-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

      </div>

      {/* ── RIGHT SIDE: FLOATING CARDS — COMPLETELY UNTOUCHED ── */}
      <div className="lg:w-7/12 relative w-full h-[450px] sm:h-[500px] md:h-[600px] mt-10 lg:mt-0">
        <div className="absolute border-2 border-emerald-600 top-0 left-0 md:left-20 z-30 w-36 sm:w-44 md:w-56 p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-gray-200/40 transform -rotate-2 md:-rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-500">
          <p className="text-[10px] sm:text-[11px] md:text-[14px] font-black text-emerald-600 uppercase mb-1 sm:mb-2 tracking-[0.15em] sm:tracking-[0.2em]">Our Team</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tighter"><RollingCounter value={8} /></span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-500">+</span>
          </div>
          <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-700 font-medium leading-tight mt-1 sm:mt-2">Years of combined expertise</p>
        </div>

        <div className="absolute top-6 sm:top-8 md:top-10 right-0 z-10 w-40 sm:w-48 md:w-64 p-5 sm:p-6 md:p-10 bg-emerald-600 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-emerald-200/50 transform rotate-2 md:rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500">
          <div className="text-white">
            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 sm:mb-3 md:mb-4">Reliability</p>
            <div className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none"><RollingCounter value={98} />%</div>
            <div className="mt-3 sm:mt-4 md:mt-6 h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[98%]"></div>
            </div>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase mt-2 sm:mt-3 md:mt-4 opacity-80 italic underline underline-offset-2 sm:underline-offset-4">Standard uptime</p>
          </div>
        </div>

        <div className="absolute top-[48%] sm:top-[47%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-64 sm:w-72 md:w-80 p-6 sm:p-8 md:p-10 bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] sm:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] transform transition-transform hover:scale-105 duration-500 group">
          <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
            </div>
            <div className="text-right">
              <span className="block text-[10px] sm:text-[11px] md:text-[13px] font-black text-emerald-300 uppercase tracking-widest">Active Now</span>
              <span className="block text-[9px] sm:text-[10px] md:text-[11px] text-gray-200 font-mono italic">In Progress</span>
            </div>
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter mb-2"><RollingCounter value={14} /></div>
          <p className="text-[11px] sm:text-xs md:text-sm text-gray-200 font-medium">Active projects you can join today</p>
        </div>

        <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 right-1 sm:right-2 md:right-12 z-20 w-44 sm:w-52 md:w-64 p-5 sm:p-6 md:p-8 bg-white border-2 border-emerald-500 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-gray-200 rotate-4 sm:rotate-6 md:rotate-12 hover:rotate-0 transition-all duration-500">
          <p className="text-[11px] sm:text-[12px] md:text-[14px] font-bold text-gray-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1 sm:mb-2 md:mb-3">Live Projects</p>
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tighter"><RollingCounter value={52} /></span>
            <span className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-700 uppercase">Active</span>
          </div>
          <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-emerald-600 mt-2 sm:mt-3 md:mt-4 bg-emerald-50 px-2 py-1 rounded-md inline-block">
            Ready to Join
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
