import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const solutionLinks = [
  { label: "Property Operations", to: "/real-estate-control" },
  { label: "Guest House Management", to: "/hotelcloud" },
  { label: "Marine Transport", to: "/viduvaru" },
  { label: "Travel Operations", to: "/travel-crm" },
];

const companyLinks = [
  { label: "Our Work", to: "/our-work" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
  { label: "Privacy Policy", to: "#" },
  { label: "Terms of Service", to: "#" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-on-primary-container text-white font-body overflow-hidden border-t border-[#bcc9cb]/20">
      {/* Deep Royal Ambient Light Layer */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.25] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#96f0ff] via-[#7bd0ff] to-transparent rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-2">
        {/* Main Grid Deck */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8 pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16 border-b border-[#bcc9cb]/10">
          {/* Identity & Mission Node */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-5 sm:mb-6">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-[#96f0ff] font-label">
                  Global Technology Grid
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight font-headline text-white">
                LUSHWARE<span className="text-[#96f0ff]">.</span>
              </h2>

              <p className="mt-4 sm:mt-5 max-w-md text-sm sm:text-base font-light text-[#f2f4f6]/90 leading-relaxed">
                Empowering businesses with{" "}
                <span className="text-white font-medium underline decoration-[#96f0ff] decoration-2 underline-offset-4">
                  Smart Solutions
                </span>
                . Delivering innovative software that drives growth across the
                Maldives and beyond.
              </p>
            </div>

            {/* Premium Social Dock */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-2.5">
              {[
                { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/lushware", label: "LinkedIn" },
                { Icon: FaInstagram, href: "https://www.instagram.com/lush_ware_org/", label: "Instagram" },
                { Icon: FaFacebookF, href: "https://web.facebook.com/lushware/", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-[#96f0ff] hover:text-[#001f24] hover:border-[#96f0ff] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#96f0ff]/20"
                >
                  <Icon className="text-base sm:text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Structured Directory Links */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-4">
            <div>
              <h5 className="mb-4 sm:mb-6 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#96f0ff] font-label">
                Solutions
              </h5>
              <ul className="space-y-3 sm:space-y-4 text-sm font-medium">
                {solutionLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-[#f2f4f6]/80 hover:text-white transition-colors duration-200 block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="mb-4 sm:mb-6 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#96f0ff] font-label">
                Company
              </h5>
              <ul className="space-y-3 sm:space-y-4 text-sm font-medium">
                {companyLinks.map(({ label, to }) => (
                  <li key={to}>
                    {to.startsWith("/") ? (
                      <Link
                        to={to}
                        className="text-[#f2f4f6]/80 hover:text-white transition-colors duration-200 block"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={to}
                        className="text-[#f2f4f6]/80 hover:text-white transition-colors duration-200 block"
                      >
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Premium Glassmorphic Newsletter Box */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl shadow-xl shadow-black/5">
              <h4 className="text-base font-semibold text-white font-headline mb-1">
                Island Insights
              </h4>
              <p className="text-xs text-[#f2f4f6]/70 mb-4">
                Receive curated enterprise tech updates directly from our hub.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Professional Email"
                  className="w-full bg-[#004f57]/50 border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white outline-none focus:border-[#96f0ff] focus:ring-1 focus:ring-[#96f0ff] transition-all placeholder-white/30"
                />
                <button className="w-full bg-[#96f0ff] text-[#001f24] py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#7bd0ff] hover:shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Utility Strip */}
        <div className="py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f2f4f6]/70 font-medium">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2 font-label tracking-wider text-center">
            <span>MALDIVES</span>
            <span className="hidden md:inline text-white/20">&bull;</span>
            <span>SRI LANKA</span>
          </div>

          <p className="font-label tracking-wide order-last md:order-none text-center">
            &copy; {currentYear} LUSHWARE MALDIVES
          </p>

          <div className="flex gap-4 sm:gap-6 uppercase font-bold tracking-widest text-[10px]">
            <a href="#" className="hover:text-[#96f0ff] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#96f0ff] transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
