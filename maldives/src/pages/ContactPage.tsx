import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
// primary_color matches the brand teal (#26AEBF) used across the site
const CALENDLY_URL =
  "https://calendly.com/lushware-net?hide_gdpr_banner=1&primary_color=26AEBF";
const CALENDLY_PUBLIC_URL = "https://calendly.com/lushware-net";



function ContactPage() {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(true);

  useEffect(() => {
    const container = calendlyRef.current;
    let cancelled = false;

    const initWidget = () => {
      if (cancelled || !container || !window.Calendly) return;
      container.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: container,
      });
      // Give the iframe a moment to paint before removing the skeleton
      window.setTimeout(() => {
        if (!cancelled) setIsCalendlyLoading(false);
      }, 800);
    };

    if (window.Calendly) {
      initWidget();
    } else {
      let script = document.querySelector<HTMLScriptElement>(
        `script[src="${CALENDLY_SCRIPT_SRC}"]`,
      );
      if (!script) {
        script = document.createElement("script");
        script.src = CALENDLY_SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener("load", initWidget);
      script.addEventListener("error", () => {
        if (!cancelled) setIsCalendlyLoading(false);
      });
    }

    return () => {
      cancelled = true;
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <main className="bg-[#ffffff] pt-24 md:pt-20 font-body text-on-surface">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#ffffff] px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        {/* Modern Background Accents */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[250px] w-full max-w-7xl bg-gradient-to-tr from-primary/5 via-primary-container/10 to-transparent blur-3xl opacity-70 sm:h-[320px] md:h-[400px]" />
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-wider text-on-secondary-container backdrop-blur-sm border border-secondary-container/30 shadow-sm transition-all duration-300 hover:bg-secondary-container sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
            <span className="text-balance">Partner with us</span>
          </span>

          <h1 className="mt-6 font-headline text-5xl font-extrabold tracking-tight text-on-surface leading-[1.2] xs:text-4xl sm:mt-8 sm:text-5xl sm:leading-[1.15] md:text-6xl lg:text-7xl">
            <span className="block text-balance">Let's Scale Your</span>
            <span className="mt-1 block sm:mt-2">
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary-container bg-clip-text text-transparent drop-shadow-sm">
                Island Business
              </span>{" "}
              <span className="text-on-surface">Together</span>
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant font-medium xs:max-w-sm sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
            Transform your Maldivian hospitality experience with digital
            solutions designed for the horizon.
          </p>

          <div className="mt-8 inline-flex w-full max-w-xs flex-col items-center justify-center gap-2.5 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:bg-surface-container-low/60 sm:p-2 sm:rounded-full sm:border sm:border-surface-variant/30 sm:backdrop-blur-md">
            <a
              href="#contact-form"
              className="w-full sm:w-auto sm:min-w-[180px] rounded-full bg-gradient-to-br from-primary to-primary-container px-6 py-3 text-center font-bold text-on-primary shadow-md shadow-primary/5 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:py-3.5"
            >
              Schedule a Demo
            </a>
            <Link
              to="/services"
              className="w-full sm:w-auto sm:min-w-[180px] rounded-full px-6 py-3 text-center text-sm font-bold text-on-surface transition-all duration-200 hover:bg-surface-container-high hover:text-primary active:scale-[0.98] sm:py-3.5 md:text-base"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section
        id="contact-form"
        className="mx-auto mb-24 max-w-8xl scroll-mt-28 px-4 -mt-48 sm:px-6 md:mt-0 md:px-12 lg:px-24"
      >
        <div className="grid grid-cols-1 gap-10 lg:gap-12 lg:grid-cols-12">
          {/* Main Booking Container */}
          <div className="relative overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] sm:rounded-[2.5rem] lg:col-span-8">
            {/* Header */}
            <div className="border-b border-outline-variant/20 bg-gradient-to-b from-[#f8fafc] to-white px-6 py-10 md:px-10 md:py-12 lg:px-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-base">
                  calendar_month
                </span>
                Free Consultation
              </span>
              <h2 className="mt-5 font-headline text-3xl font-black tracking-tight text-on-surface sm:text-4xl md:text-5xl">
                Book your strategy call
              </h2>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-on-surface-variant/80 sm:text-lg">
                Select a date and time that works for you. Our team will walk
                you through tailored digital solutions for your
                <span className="font-semibold text-on-surface">
                  {" "}
                  resort or business.
                </span>
              </p>


            </div>

            {/* Calendly Widget */}
            <div className="relative px-2 py-4 sm:px-4 md:px-6 md:py-6">
              {isCalendlyLoading && (
                <div
                  className="absolute inset-4 z-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white"
                  role="status"
                  aria-live="polite"
                >
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
                  <p className="text-sm font-medium text-on-surface-variant">
                    Loading available times...
                  </p>
                </div>
              )}

              <div
                ref={calendlyRef}
                className="w-full"
                style={{ minWidth: "320px", height: "720px" }}
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col items-start justify-between gap-3 border-t border-outline-variant/20 bg-[#f8fafc] px-6 py-5 text-sm text-on-surface-variant sm:flex-row sm:items-center md:px-10 lg:px-12">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-primary">
                  verified_user
                </span>
                Your details are only used to arrange your meeting.
              </p>
              <a
                href={CALENDLY_PUBLIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Open in a new tab
                <span className="material-symbols-outlined text-base">
                  open_in_new
                </span>
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:col-span-4">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 text-on-primary">
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
              <h3 className="relative z-10 mb-2 font-headline text-2xl font-bold">
                Prefer to reach out directly?
              </h3>
              <p className="relative z-10 mb-6 text-sm text-white/80">
                Message us any time and we'll respond within 24 hours.
              </p>
              <div className="relative z-10 space-y-4">
                <a
                  href="https://wa.me/94716430053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center rounded-lg bg-white/10 p-4 transition-colors hover:bg-white/20"
                >
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-container shadow-lg">
                    <span
                      className="material-symbols-outlined text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      chat
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold uppercase text-white/90">
                      WhatsApp
                    </p>
                    <p className="font-headline font-semibold">
                      +94 71 643 0053
                    </p>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-white/90 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>

                <a
                  href="mailto:info@lushware.net"
                  className="group flex items-center rounded-lg bg-white/10 p-4 transition-colors hover:bg-white/20"
                >
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container shadow-lg">
                    <span
                      className="material-symbols-outlined text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      alternate_email
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold uppercase text-white/90">
                      Email Us
                    </p>
                    <p className="font-headline font-semibold">
                      info@lushware.net
                    </p>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-white/90 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl overflow-hidden h-[340px] relative">
              <img
                className="w-full h-full object-cover opacity-80"
                alt="Stylized map of the Maldives atolls"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmo2fABHlQGgzC0A8gqLBqWNaQ1oX7FZSVU0aZoy-JWBqwyL3yhXaVuMTnPkbKnm2HsGpBHlRR_mTjAkuh4QY-8HwtCuBoq8y-7UcWmOyKnHLPGiUgH41rZuYe_G2oauqJ_9K0kp3pFwHAx7H0V_MxkWXj6jFCdiqZuB7arPpUJ_Iop7fzdC9ltEztcTTbNpliAqpqufPLXQY_A2d1noVM5SQxIOsjj39w1Zl-BrWuzE3PmjDKICkmXKreMZOVwFMNum5JgBqXhoCV"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <div>
                  <h4 className="text-white font-headline font-bold text-xl">
                    Male', Maldives
                  </h4>
                  <p className="text-white/80 text-sm">
                    Hulhumale' Innovation Park, Phase II
                  </p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-secondary-container animate-ping opacity-75"></div>
                  <div className="relative bg-secondary-container w-4 h-4 rounded-full border-4 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
          <div
            className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-cover bg-center bg-no-repeat p-8 sm:p-12 md:p-16 lg:p-20"
            style={{ backgroundImage: `url('/cta.jpg')` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r
          from-slate-950/90 via-slate-950/85 to-slate-950/70
          lg:from-slate-950/90 lg:via-slate-950/40 lg:to-transparent"
            />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2 max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-inset ring-white/30 backdrop-blur-md shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  <span>Digital Transformation</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-white">
                  Ready to start your <br className="hidden sm:block" />
                  digital journey?
                </h2>

                <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
                  Join the leading resorts and businesses in the Maldives who
                  trust Viduvaru for their digital transformation. We deliver
                  precision-engineered solutions for the modern enterprise.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
                  <a
                    href="/our-work"
                    className="group relative flex items-center justify-center gap-3 sm:justify-between overflow-hidden rounded-xl bg-primary px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-primary/90 hover:shadow-[0_0_35px_rgba(0,112,243,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[220px]"
                  >
                    <span className="relative z-10">Explore Portfolio</span>
                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                    <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-0" />
                  </a>

                  <a
                    href="#contact-form"
                    className="group flex items-center justify-center gap-3 sm:justify-between rounded-xl border border-white/20 bg-slate-900/40 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-950 hover:border-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[220px]"
                  >
                    <span>Request Consultation</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-slate-300 transition-all duration-300 group-hover:text-slate-950 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

              <div
                className="hidden lg:block lg:col-span-1 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;