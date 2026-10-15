import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Linkedin,
  Twitter,
  CheckCircle2,
  Instagram,
  Facebook,
  Mail,
  Phone,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/lushware-net";
const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const socials = [
  {
    href: "https://www.linkedin.com/company/lushware",
    icon: <Linkedin size={20} strokeWidth={1.5} />,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/lush_ware_org/",
    icon: <Instagram size={20} strokeWidth={1.5} />,
    label: "Instagram",
  },
  {
    href: "https://web.facebook.com/lushware/?_rdc=1&_rdr#",
    icon: <Facebook size={20} strokeWidth={1.5} />,
    label: "Facebook",
  },
];

function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const init = () => {
      // Avoid duplicate iframes (React StrictMode runs effects twice in dev)
      container.innerHTML = "";
      window.Calendly?.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: container,
      });
    };

    if (window.Calendly) {
      init();
      return () => {
        container.innerHTML = "";
      };
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);

    return () => {
      script?.removeEventListener("load", init);
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

export default function ConsultationPageV15() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .consult-root * { font-family: 'DM Sans', sans-serif; }
        .consult-serif { font-family: 'DM Serif Display', serif; }

        .consult-fadeUp {
          animation: consultFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .consult-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .consult-fadeUp:nth-child(3) { animation-delay: 0.16s; }
        .consult-fadeUp:nth-child(4) { animation-delay: 0.24s; }

        @keyframes consultFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .consult-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <section
        id="consultation"
        className="consult-root relative scroll-mt-24 overflow-hidden px-6 md:px-8 lg:px-0 py-24 md:py-32 lg:py-40 bg-white selection:bg-emerald-50"
      >
        <div className="consult-dotgrid absolute inset-0 -z-10 opacity-40 pointer-events-none" />

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:gap-20 lg:grid-cols-12">
            {/* LEFT: The Proposition */}
            <div className="lg:col-span-5 px-4 md:px-8 lg:px-0">
              <div className="consult-fadeUp flex items-center gap-3 mb-7">
                <div className="h-px w-8 bg-emerald-600" />
                <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                  Free Consultation
                </div>
              </div>

              <h2 className="consult-fadeUp consult-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05]">
                Book a free <br />
                <span className="text-emerald-600">consultancy.</span>
              </h2>

              <p className="consult-fadeUp mt-8 text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-md">
                Pick a time that suits you and talk with our team directly.
                Start your journey with{" "}
                <span className="font-semibold text-slate-800">LushWare</span>{" "}
                today.
              </p>

              <div className="consult-fadeUp mt-10 space-y-4">
                {[
                  "Custom Software Development — end-to-end MVP and product builds for startups.",
                  "Advanced AI Integration — machine learning woven directly into your workflows.",
                  "Fractional CTO Services — senior technical strategy and dedicated engineering teams.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-600 mt-0.5 shrink-0"
                    />
                    <span className="text-[15px] font-medium text-slate-700 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact block */}
              <div className="consult-fadeUp mt-10 pt-10 border-t border-slate-200 space-y-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:info@lushware.net"
                    className="group inline-flex items-center gap-2 text-xl font-medium text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    <Mail size={18} className="text-emerald-600" />
                    info@lushware.net
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Contact
                  </p>
                  <a
                    href="tel:+94716430053"
                    className="group inline-flex items-center gap-2 text-xl font-medium text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    <Phone size={18} className="text-emerald-600" />
                    +94 71 643 0053
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative p-2.5 rounded-full transition-all duration-500 hover:bg-emerald-50 target:_blank"
                    >
                      <div className="relative z-10 text-slate-500 group-hover:text-emerald-600 transition-colors duration-300 target:_blank">
                        {social.icon}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-emerald-600/0 opacity-0 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 ease-out" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-[10px] font-bold text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest whitespace-nowrap">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Calendly booking */}
            <div className="lg:col-span-7">
              <div className="relative bg-white shadow-[0_2px_30px_rgba(15,23,42,0.07)] ring-1 ring-slate-200 overflow-hidden">
                <div className="h-0.25 w-full bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400" />

                <div className="px-6 md:px-10 pt-8 pb-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-1">
                    Schedule a Call
                  </p>
                  <h3 className="consult-serif text-2xl text-slate-900">
                    Choose a time that works for you
                  </h3>
                </div>

                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}