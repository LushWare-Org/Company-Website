export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#Ffffff] z-50 overflow-hidden">
      
      {/* Container for the Reveal */}
      <div className="relative overflow-hidden px-4 py-2">
        
        {/* The Main Brand Name */}
        <h1 className="text-[12vw] md:text-[8vw]  uppercase font-semibold text-stone-900 leading-none tracking-tight animate-slide-up">
          Lush<span className="text-emerald-600">ware</span> 
        </h1>

        {/* The Luxury Reveal Bar - This creates the "Premium" motion */}
        <div className="absolute inset-0 bg-[#FDFDFD] animate-reveal-wipe" />
        
      </div>

      <style>{`
        @keyframes reveal-wipe {
          0% { transform: translateX(0); }
          100% { transform: translateX(101%); }
        }

        @keyframes slide-up {
          0% { transform: translateY(10%) scale(0.98); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        .animate-reveal-wipe {
          /* A slow, sophisticated wipe from left to right */
          animation: reveal-wipe 1.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .animate-slide-up {
          /* Subtle emergence of the text */
          animation: slide-up 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
}