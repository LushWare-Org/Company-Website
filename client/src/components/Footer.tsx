import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, ArrowUpRight, Globe, Fingerprint, Instagram } from "lucide-react";

const AnimatedLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="group flex items-center gap-4 text-sm font-medium tracking-wide text-zinc-500 hover:text-emerald-950 transition-all duration-300"
  >
    <span className="flex items-center gap-2">
      {children}
      <ArrowUpRight 
        size={12} 
        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-500" 
      />
    </span>
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-white text-zinc-900 pt-16 pb-8 font-sans border-t border-emerald-50 relative overflow-hidden">
      

      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] opacity-[0.08] md:opacity-[0.1]">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-emerald-600">
            {[...Array(8)].map((_, i) => (
              <rect
                key={i}
                x={100 - (i * 12)}
                y={100 - (i * 12)}
                width={i * 24}
                height={i * 24}
                rx={i * 2}
                strokeWidth="0.5"
                transform={`rotate(${i * 5} 100 100)`}
              />
            ))}
          </svg>
        </div>

        {/* Soft Radial Vignette - makes the corners feel deep */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.03)_0%,transparent_50%)]" />
        
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pl-8 md:pl-0">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-10">
          <div className="max-w-xl space-y-8">
            <Link to="/" className="group flex items-center gap-3">
              <div className="h-10 w-10 border border-zinc-900 rounded-full flex items-center justify-center group-hover:bg-emerald-800 group-hover:border-emerald-800 group-hover:text-white transition-all duration-500">
                <Fingerprint size={20} strokeWidth={1.5} />
              </div>
              <span className="text-3xl font-light tracking-tighter uppercase">LushWare</span>
            </Link>
            <h2 className="text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-emerald-950 font-display">
              We believe in software that{' '}
              <span className="font-serif italic text-emerald-600 relative inline-block">
                feels
                <span className="absolute bottom-1 left-0 w-full h-px bg-emerald-200/50 -rotate-1"></span>
              </span>{' '}
              as good as it works.
            </h2>
          </div>
          
          <div className="flex flex-col gap-4 lg:items-end">

            {/* The Smart Link Section */}
            <div className="group relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-700/80 mb-4 lg:text-right">
                Inquiries
              </p>
              <a 
                href="mailto:studio@lushware.org" 
                className="block text-3xl font-extralight tracking-tighter text-emerald-950 transition-all duration-700 hover:opacity-40"
              >
                info@lushware.org
              </a>
              <div className="mt-4 h-px w-full bg-emerald-900/10 overflow-hidden">
                <div className="h-full w-0 bg-emerald-500 transition-all duration-700 group-hover:w-full" />
              </div>
            </div>

            {/* The Minimalist Action */}
          <Link 
            to="/contact" 
            className="group relative flex items-center gap-6 px-8 py-3 text-[12px] font-bold uppercase tracking-[0.4em] text-emerald-950 transition-all"
          >
            <div className="absolute inset-0 rounded-full p-[1.5px] overflow-hidden">
              <div className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite] 
                bg-[conic-gradient(from_0deg,#10b981_0deg,transparent_90deg,#34d399_180deg,transparent_270deg,#059669_360deg)] 
                blur-[1px]" 
              />
            </div>

            {/* Outer Track (Visible as a very faint guide) */}
            <div className="absolute inset-0 rounded-full border border-emerald-900/5 group-hover:border-emerald-500/10 transition-colors duration-500" />
            
            {/* The Main Button Body (The "Glass" layer) */}
            <div className="absolute inset-[1.5px] rounded-full bg-white z-0" />

            {/* Inner Glow - Only visible on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[inset_0_0_12px_rgba(16,185,129,0.05)] transition-all duration-500" />

            <span className="relative z-10 transition-colors duration-500 group-hover:text-emerald-800">
              Start a project
            </span>

            <div className="relative z-10 h-10 w-10 flex items-center justify-center">
              {/* Your existing Dashed/Active Icon Logic */}
              <div className="absolute inset-0 border-2 border-dashed border-emerald-500/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000" />
              
              <div className="h-8 w-8 bg-emerald-800 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                <ArrowUpRight size={14} strokeWidth={2} className="text-white" />
              </div>
              
              <ArrowUpRight 
                size={18} 
                strokeWidth={1} 
                className="absolute text-emerald-950 group-hover:opacity-0 transition-opacity duration-300" 
              />
            </div>
          </Link>
          </div>
        </div>

        {/* The Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 pb-8">

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Services</h4>
            <ul className="space-y-4">
              <li><AnimatedLink to="/solutions">Our Solutions</AnimatedLink></li>
              <li><AnimatedLink to="/solutions">Web Development</AnimatedLink></li>
              <li><AnimatedLink to="/solutions">Mobile Apps</AnimatedLink></li>
              <li><AnimatedLink to="/solutions">Custom Software</AnimatedLink></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Company</h4>
            <ul className="space-y-4">
              <li><AnimatedLink to="/">About Us</AnimatedLink></li>
              <li><AnimatedLink to="/work">Our Work</AnimatedLink></li>
              <li><AnimatedLink to="/project-base">Join Our Team</AnimatedLink></li>
              <li><AnimatedLink to="/contact">Contact Us</AnimatedLink></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Support</h4>
            <ul className="space-y-4">
              <li><AnimatedLink to="/contact">Get in Touch</AnimatedLink></li>
              <li><AnimatedLink to="/contact">Request a Quote</AnimatedLink></li>
              <li><AnimatedLink to="/contact">Free Consultation</AnimatedLink></li>
              <li><AnimatedLink to="/contact">Help Center</AnimatedLink></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Connect</h4>
            <ul className="space-y-4">
              {[
                { name: "Instagram", icon: Instagram, href: "#" },
                { name: "Twitter / X", icon: Twitter, href: "#" },
                { name: "LinkedIn", icon: Linkedin, href: "#" },
                { name: "Facebook", icon: Facebook, href: "#" },
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href} 
                    className="group flex items-center gap-4 text-sm font-medium tracking-wide text-zinc-500 hover:text-emerald-950 transition-all duration-300"
                  >
                    {/* Kinetic Icon Container */}
                    <div className="flex items-center justify-center w-5 h-5 overflow-hidden">
                      <social.icon 
                        size={18} 
                        strokeWidth={1.2} 
                        className="transform transition-all duration-500 group-hover:text-emerald-500 group-hover:scale-110 " 
                      />
                    </div>
                    
                    {/* Label with a sliding arrow reveal */}
                    <span className="flex items-center gap-2">
                      {social.name}
                      <ArrowUpRight 
                        size={12} 
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-500" 
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>


        {/* Minimalist Bottom Utility */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-300 gap-6">
          <div className="flex items-center gap-8 text-[12px] font-medium uppercase tracking-widest text-zinc-900">
            <span>&copy; {new Date().getFullYear()} LushWare ORG</span>
            <Link to="/privacy" className="hover:text-emerald-700 transition">Privacy</Link>
            <Link to="/terms" className="hover:text-emerald-700 transition">Terms</Link>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="h-3 w-px bg-zinc-100"></div>
             <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-900">
               <Globe size={12} strokeWidth={1.5} className="text-emerald-600" />
               <span>LK / GLOBAL</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}