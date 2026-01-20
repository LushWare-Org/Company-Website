export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* 1. The Background Glow (The 'Sunlight through Trees' vibe) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-800/10 blur-[100px] rounded-full"></div>

      <div className="relative flex flex-col items-center">
        {/* 2. The High-End Logo Treatment */}
        <div className="relative overflow-hidden group">
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] text-emerald-950">
            LUSHWARE ORG
          </h1>
          
          {/* This is the 'Light Beam' that sweeps across the text */}
          <div className="absolute inset-0 text-6xl md:text-8xl font-light tracking-[0.2em] text-emerald-400/90 [mask-image:linear-gradient(to_right,transparent,white,transparent)] [mask-size:200%_100%] animate-[shimmer_2.5s_infinite]">
            LUSHWARE ORG
          </div>
        </div>

        {/* 3. The Minimalist Progress Indicator */}
        <div className="mt-12 w-64 h-[1px] bg-emerald-900/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-1/2 animate-[slide_2s_infinite_ease-in-out]"></div>
        </div>

        <p className="mt-6 text-[9px] font-medium tracking-[0.6em] text-emerald-800 uppercase">
          Hosting Your Life to The Next Level
        </p>
      </div>
    </div>
  );
}

// Keyframes for your Tailwind/CSS:
/*
@keyframes shimmer {
  0% { mask-position: -150%; }
  100% { mask-position: 150%; }
}
@keyframes slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}
*/