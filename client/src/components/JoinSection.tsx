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
    <section data-reveal className=" px-4 py-16 overflow-hidden relative bg-white">
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
          <div className="lg:w-5/12 text-center lg:text-left">
            <h2 className="text-5xl font-semibold md:text-7xl text-gray-900 leading-[0.85] tracking-tighter mb-8">
              Project <br />
              <span className="bg-emerald-600 bg-clip-text text-transparent"> Inventory.</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-md leading-relaxed mb-12 mx-auto lg:mx-0 font-medium">
              Join our growing team and work on real-world projects. Develop your skills, collaborate with talented professionals, and make a real impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/project-base")}
                className="group cursor-pointer relative px-10 py-4 overflow-hidden bg-stone-900 text-white rounded-full font-bold transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]"
              >
                <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                <span className="relative z-10 text-[13px] font-bold tracking-[0.2em] uppercase">Join Now</span>
              </button>
            </div>
          </div>

          <div className="lg:w-7/12 relative w-full h-[450px] sm:h-[500px] md:h-[600px] mt-10 lg:mt-0">
            <div className="absolute border-2 border-emerald-600 top-0 left-0 md:left-20 z-30 w-36 sm:w-44 md:w-56 p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-gray-200/40 transform -rotate-2 md:-rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-500">
              <p className="text-[10px] sm:text-[11px] md:text-[14px] font-black text-emerald-600 uppercase mb-1 sm:mb-2 tracking-[0.15em] sm:tracking-[0.2em]">Our Team</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tighter"><RollingCounter value={8} /></span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-500">+</span>
              </div>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-700 font-medium leading-tight mt-1 sm:mt-2">Years of combined expertise</p>
            </div>

            <div className="absolute top-6 sm:top-8 md:top-10 right-0 z-10 w-40 sm:w-48 md:w-64 p-5 sm:p-6 md:p-10 bg-emerald-500 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-emerald-200/50 transform rotate-2 md:rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500">
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
