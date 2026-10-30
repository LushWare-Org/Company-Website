import FAQSection from "../components/FAQSection";
import { getRouteFaq } from "../data/faq";
import WhyChooseUs from "../components/WhyChooseUs.tsx";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "94716430053";
const WHATSAPP_SERVICES_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi LushWare! I'm interested in your digital services for my business. Could we schedule a free consultation to discuss my needs?")}`;


function ServicesPage() {
  return (
    <main className="bg-[#ffffff] pb-24 pt-24  text-on-surface antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#ffffff] px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        {/* Modern Background Accents */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[250px] w-full max-w-7xl bg-gradient-to-tr from-primary/5 via-primary-container/10 to-transparent blur-3xl opacity-70 sm:h-[320px] md:h-[400px]" />

        <div className="mx-auto max-w-5xl text-center">
          {/* Refined Modern Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-wider text-on-secondary-container backdrop-blur-sm border border-secondary-container/30 shadow-sm transition-all duration-300 hover:bg-secondary-container sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
            <span className="text-balance">
              Elevating Hospitality & Enterprise
            </span>
          </span>

          {/* Stronger, Cleaner Typographic Hierarchy */}
          <h1 className="mt-6 font-headline text-5xl font-extrabold tracking-tight text-on-surface leading-[1.2] xs:text-4xl sm:mt-8 sm:text-5xl sm:leading-[1.15] md:text-6xl lg:text-7xl">
            <span className="block text-balance">
              Expert Digital Services for
            </span>
            <span className="mt-1 block bg-gradient-to-r from-primary via-primary/90 to-primary-container bg-clip-text text-transparent drop-shadow-sm py-1 sm:mt-2">
              Island Businesses
            </span>
          </h1>

          {/* Optimized Description Reading Width */}
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant font-medium xs:max-w-sm sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
            Transforming the Maldivian business landscape with tailored software
            solutions, automated intelligence, and premium digital experiences.
          </p>

          {/* Premium Split-Action Controller */}
          <div className="mt-8 inline-flex w-full max-w-xs flex-col items-center justify-center gap-2.5 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:bg-surface-container-low/60 sm:p-2 sm:rounded-full sm:border sm:border-surface-variant/30 sm:backdrop-blur-md">
            <a
              href={WHATSAPP_SERVICES_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[180px] flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary to-primary-container px-6 py-3 font-bold text-on-primary shadow-md shadow-primary/5 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:py-3.5"
            >
              <span className="material-symbols-outlined text-xl leading-none">chat</span>
              Get Started
            </a>

            <Link
              to="/our-work"
              className="w-full sm:w-auto sm:min-w-[180px] rounded-full px-6 py-3 text-center text-sm font-bold text-on-surface transition-all duration-200 hover:bg-surface-container-high hover:text-primary active:scale-[0.98] sm:py-3.5 md:text-base"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] px-6 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            {/* FEATURED CARD: CRM - Large Bento */}
            <div className="md:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-3xl  border border-outline-variant/20 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative group transition-all hover:shadow-[0_20px_50px_rgba(0,104,116,0.08)]">
              <div className="flex-1 z-10">
                <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-8 border border-primary/10">
                  <span className="material-symbols-outlined text-5xl text-primary">
                    groups
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4 tracking-tight">
                  Advanced CRM Systems
                </h3>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed max-w-md">
                  Centralize guest experiences and property management with a
                  suite designed for the unique demands of high-end hospitality
                  and global operations.
                </p>
                <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3.5 rounded-full font-headline font-bold flex items-center gap-2 transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95">
                  Explore Features
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="flex-1 w-full h-full min-h-[300px] rounded-2xl  relative  border border-outline-variant/10">
                <img
                  alt="CRM Dashboard"
                  className="w-full h-full object-contain transform scale-110 transition-transform duration-1000"
                  src="https://www.power-crm.net/wp-content/uploads/2022/09/Power-CRM-Laptop-Sales-Dashboard-sm2.png"
                />
              </div>
            </div>

            {/* SECONDARY CARD: AI - Vertical Accent */}
            <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-container text-on-primary p-8 md:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group ">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl transition-all group-hover:bg-white/20"></div>
              <div>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-12 border border-white/30">
                  <span className="material-symbols-outlined text-3xl text-white">
                    psychology
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-4">
                  AI Agents & Chatbots
                </h3>
                <p className="text-white mb-8 leading-relaxed">
                  24/7 intelligent concierges that speak multiple languages and
                  handle bookings instantly across all digital channels.
                </p>
              </div>
              <button className="text-white font-headline font-bold flex items-center gap-2 hover:gap-4 transition-all group/btn">
                Deploy Intelligence
                <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                  chevron_right
                </span>
              </button>
            </div>

            {/* TERTIARY CARD: BPM - Clean Square */}
            <div className="md:col-span-4  bg-surface-container-lowest p-8 md:p-10 rounded-3xl border border-outline-variant/60 flex flex-col justify-between hover:bg-surface-container-lowest transition-colors">
              <div>
                <div className="w-14 h-14  rounded-xl flex items-center justify-center mb-8 border border-secondary/10">
                  <span className="material-symbols-outlined text-4xl text-secondary">
                    schema
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">
                  BPM Automation
                </h3>
                <p className="text-on-surface-variant mb-10 leading-relaxed">
                  Optimize logistics, supply chains, and staff workflows with
                  powerful distributed process automation.
                </p>
              </div>
              <button className="w-full py-4 rounded-2xl border-2 border-outline-variant text-on-surface font-headline font-bold hover:bg-gradient-to-br from-primary to-primary-container hover:text-on-primary hover:border-primary duration-500 transition-all">
                Streamline Workflows
              </button>
            </div>

            {/* QUATERNARY CARD: Web - Inverted Horizontal */}
            <div className="md:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20 flex flex-col md:flex-row-reverse gap-8 items-center overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex-1">
                <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-8 border border-tertiary/10">
                  <span className="material-symbols-outlined text-4xl text-tertiary">
                    language
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">
                  Corporate Design
                </h3>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                  Premium, editorial-grade web experiences that reflect the
                  luxury of your brand. Optimized for global visibility.
                </p>
                <button className="inline-flex items-center gap-2 font-headline font-bold text-primary group/link">
                  View Portfolio
                  <span className="material-symbols-outlined text-xl transition-transform group-hover/link:translate-x-1">
                    open_in_new
                  </span>
                </button>
              </div>
              <div className="flex-1 w-full h-full min-h-[300px] rounded-2xl overflow-hidden  border border-outline-variant/10">
                <img
                  alt="Web Design Project"
                  className="w-full h-full object-contain scale-110 transition-all duration-700"
                  src="https://img.freepik.com/premium-vector/responsive-website-design-with-laptop-computer-mobile-phone-tablet-pc-screen-illustration_47012-91.jpg"
                />
              </div>
            </div>

            {/* CTA CARD: Mobile App - Full Width Impact */}
            <div className="md:col-span-12 bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,104,116,0.2),transparent)] pointer-events-none"></div>
              <div className="md:w-1/2 z-10">
                <span className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
                  Native & Cross-Platform
                </span>
                <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">
                  Mobile Excellence
                </h3>
                <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                  High-performance mobile apps for bookings, internal
                  communications, and digital concierge services.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-10 border-2 border-outline-variant py-4 rounded-full font-headline font-extrabold shadow-xl hover:bg-primary hover:text-white transition-all active:scale-95">
                    Start Building
                  </button>
                </div>
              </div>
              <div className="md:w-1/3 z-10">
                <div className="relative group">
                  <img
                    alt="Mobile App Preview"
                    className="relative z-10 rounded-[2.5rem]  scale-110 transition-transform duration-700"
                    src="https://woictech.in/wp-content/uploads/2024/04/Mobile-Apps-Development-2.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={getRouteFaq("/services")}
        title="Services FAQs"
        subtitle="Common questions about our digital services and solutions"
      />

      <WhyChooseUs />

      <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
          <div
            className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-cover bg-center bg-no-repeat p-8 sm:p-12 md:p-16 lg:p-20"
            style={{ backgroundImage: `url('/cta.jpg')` }}
          >
            {/* Dark Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r
          from-slate-950/90 via-slate-950/85 to-slate-950/70
          lg:from-slate-950/90 lg:via-slate-950/40 lg:to-transparent"
            />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-3 lg:gap-12">
              {/* Content */}
              <div className="lg:col-span-2 max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-inset ring-white/30 backdrop-blur-md shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  <span>Digital Transformation</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
                  Ready to start your
                  <br className="hidden sm:block" />
                  digital journey?
                </h2>

                <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
                  Join the leading resorts and businesses in the Maldives who
                  trust Viduvaru for their digital transformation. Our solutions
                  currently power operations for over 45 luxury island
                  destinations.
                </p>

                {/* Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
                  <a
                    href={WHATSAPP_SERVICES_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 sm:justify-between overflow-hidden rounded-xl bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-primary/90 hover:shadow-[0_0_35px_rgba(0,112,243,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[260px]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">chat</span>
                      Schedule a Free Consultation
                    </span>

                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>

                    <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-0" />
                  </a>

                  <Link
                    to="/our-work"
                    className="group flex items-center justify-center gap-3 sm:justify-between rounded-xl border border-white/20 bg-slate-900/40 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-950 hover:border-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:min-w-[220px]"
                  >
                    <span>View Case Studies</span>

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-slate-300 transition-all duration-300 group-hover:text-slate-950 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Empty right column to preserve image composition */}
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

export default ServicesPage;
