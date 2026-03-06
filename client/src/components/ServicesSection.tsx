import { useNavigate } from "react-router-dom";

interface Service {
  number: string;
  title: string;
  desc: string;
  tags: string[];
  color: string;
}

const servicesData: Service[] = [
  {
    number: "01",
    title: "Product Development",
    desc: "We build strong software products from idea to launch, designed to grow with your business and users.",
    tags: ["SaaS Architecture", "Product Strategy"],
    color: "group-hover:text-emerald-600",
  },
  {
    number: "02",
    title: "Custom Development",
    desc: "Custom software solutions made for your company, helping you save time, reduce cost, and work smarter.",
    tags: ["Enterprise Solutions", "Legacy Migration"],
    color: "group-hover:text-emerald-600",
  },
  {
    number: "03",
    title: "Mobile App Development",
    desc: "High-quality mobile apps for iOS and Android, built for smooth performance and great user experience.",
    tags: ["React Native", "Native Performance"],
    color: "group-hover:text-emerald-600",
  },
  {
    number: "04",
    title: "Web Development",
    desc: "Modern websites and web apps that look great, load fast, and help your business attract more customers.",
    tags: ["Fullstack JS", "SEO Optimized"],
    color: "group-hover:text-emerald-600",
  },
  {
    number: "05",
    title: "Cloud System Development",
    desc: "Secure cloud-based systems that manage your data, improve operations, and support business automation.",
    tags: ["AWS/Azure", "Process Automation"],
    color: "group-hover:text-emerald-600",
  },
  {
    number: "06",
    title: "AI Based Development",
    desc: "AI-powered tools and smart systems that help automate tasks, improve decisions, and boost efficiency.",
    tags: ["Gen AI", "Neural Workflows"],
    color: "group-hover:text-emerald-600",
  },
];

const ProductDevIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect
      x="4"
      y="8"
      width="56"
      height="40"
      rx="4"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <rect
      x="4"
      y="8"
      width="56"
      height="10"
      rx="4"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <circle cx="13" cy="13" r="2" fill="currentColor" />
    <circle cx="21" cy="13" r="2" fill="currentColor" />
    <circle cx="29" cy="13" r="2" fill="currentColor" />
    <path
      d="M20 32L27 25L34 32L44 22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="44" cy="22" r="3" fill="currentColor" />
    <path
      d="M12 56H52"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M24 48V56"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M40 48V56"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M14 35H18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M50 35H46"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 39H22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M50 39H38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CustomDevIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M22 20L10 32L22 44"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 20L54 32L42 44"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 14L28 50"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="10" cy="32" r="3" fill="currentColor" />
    <circle cx="54" cy="32" r="3" fill="currentColor" />
    <path
      d="M4 8H60"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.3"
    />
    <path
      d="M4 56H60"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.3"
    />
  </svg>
);

const MobileDevIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect
      x="16"
      y="4"
      width="32"
      height="56"
      rx="6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M16 14H48"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 50H48"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="32" cy="55" r="2" fill="currentColor" />
    <path
      d="M25 8H39"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <rect
      x="22"
      y="20"
      width="20"
      height="14"
      rx="3"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M26 38H38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M26 42H34"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M29 24L27 27H30L28 31"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34 24V31"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M34 27H37"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const WebDevIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2.5" />
    <path
      d="M32 6C32 6 22 18 22 32C22 46 32 58 32 58"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M32 6C32 6 42 18 42 32C42 46 32 58 32 58"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6 32H58"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 20H55"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M9 44H55"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    <circle cx="32" cy="32" r="4" fill="currentColor" />
  </svg>
);

const CloudDevIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M48 38C52.4183 38 56 34.4183 56 30C56 25.5817 52.4183 22 48 22C47.5868 22 47.1809 22.0299 46.784 22.0878C45.4469 17.4197 41.1441 14 36 14C29.3726 14 24 19.3726 24 26C24 26.3381 24.0143 26.6728 24.0423 27.0034C21.7186 27.5854 20 29.5935 20 32C20 34.7614 22.2386 37 25 37"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M16 38C12.6863 38 10 40.6863 10 44C10 47.3137 12.6863 50 16 50H50C53.3137 50 56 47.3137 56 44C56 40.6863 53.3137 38 50 38H48"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 38V28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M27 33L32 28L37 33"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="44" r="2" fill="currentColor" />
    <circle cx="28" cy="44" r="2" fill="currentColor" />
    <circle cx="36" cy="44" r="2" fill="currentColor" />
  </svg>
);

const AIDevIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="32" cy="32" r="4" fill="currentColor" />
    <path
      d="M32 8V16"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M32 48V56"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M8 32H16"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M48 32H56"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M15.5147 15.5147L21.1716 21.1716"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M42.8284 42.8284L48.4853 48.4853"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M48.4853 15.5147L42.8284 21.1716"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M21.1716 42.8284L15.5147 48.4853"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="32" cy="8" r="3" fill="currentColor" />
    <circle cx="32" cy="56" r="3" fill="currentColor" />
    <circle cx="8" cy="32" r="3" fill="currentColor" />
    <circle cx="56" cy="32" r="3" fill="currentColor" />
    <circle cx="15" cy="15" r="2.5" fill="currentColor" />
    <circle cx="49" cy="49" r="2.5" fill="currentColor" />
    <circle cx="49" cy="15" r="2.5" fill="currentColor" />
    <circle cx="15" cy="49" r="2.5" fill="currentColor" />
  </svg>
);

const iconMap = {
  "01": ProductDevIcon,
  "02": CustomDevIcon,
  "03": MobileDevIcon,
  "04": WebDevIcon,
  "05": CloudDevIcon,
  "06": AIDevIcon,
};

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section
      data-reveal
      className="bg-[#ffffff] px-6 sm:px-6 py-12 sm:py-16 lg:py-28 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 ">
          {/* ── Sidebar / Header ── */}
<div className="lg:w-1/3 lg:sticky lg:top-48 h-fit">
  {/* Inject fonts to match Project Base theme */}
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');
    .svc-serif { font-family: 'DM Serif Display', serif; }
    .svc-sans  { font-family: 'DM Sans', sans-serif; }
    .svc-grid-dot {
      background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
      background-size: 28px 28px;
    }
    .svc-sweep-btn::after {
      content: '';
      position: absolute;
      inset: 0;
      background: #059669;
      transform: translateX(-101%);
      transition: transform 0.45s cubic-bezier(0.85,0,0.15,1);
      z-index: 0;
    }
    .svc-sweep-btn:hover::after { transform: translateX(0); }
  `}</style>

  <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">

    {/* Dot grid background accent */}
    <div className="svc-grid-dot absolute inset-0 -z-10 opacity-50 pointer-events-none rounded-xl" />

    {/* Badge — matches Project Base pill style */}
    <div className="flex items-center gap-3 mb-7">
      <div className="h-px w-8 bg-emerald-600" />
      <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em] svc-sans">
        Our Services
      </div>
      <div className="h-px w-8 bg-emerald-600" />
    </div>

    {/* Heading — DM Serif Display like Project Base */}
    <h2 className="svc-serif text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-slate-900  mb-6 lg:mb-10">
      Our Specialized{" "}
      <span className=" text-slate-400">Software</span>
      <br />
      <span className="relative inline-block  text-emerald-600">
        Solutions.
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

    {/* Subtle descriptor line */}
    <p className="svc-sans text-slate-500 text-md font-light leading-relaxed mb-4 max-w-xs lg:max-w-none">
      Tailored software built to move your business forward.
    </p>

    {/* CTA Button — sweep animation like Project Base */}
    <button
      onClick={() => navigate("/solutions")}
      className="svc-sweep-btn svc-sans cursor-pointer group relative overflow-hidden h-12 px-9 bg-slate-900 transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)]"
    >
      <span className="relative z-10 flex items-center gap-2.5">
        <span className="text-white text-[10px] font-bold uppercase tracking-[0.18em] whitespace-nowrap transition-colors duration-300">
          View All Solutions
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

          {/* ── Service Cards ── */}
          <div className="lg:w-2/3 space-y-8 sm:space-y-6 lg:mt-0 md:mt-8 mt-4 px-0 md:px-12 lg:px-0 lg:space-y-14">
            {servicesData.map((service) => {
              const IconComponent =
                iconMap[service.number as keyof typeof iconMap];
              return (
                <div
                  key={service.number}
                  className="group relative bg-white border border-slate-300 rounded-2xl sm:rounded-3xl transition-all  duration-500 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden"
                >
                  <div className="p-8 sm:p-8 md:p-10 relative z-10">
                    {/* Mobile: stack icon + text vertically; md+: side by side */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 lg:gap-14">
                      {/* Icon + number row on mobile */}
                      <div className="flex sm:flex-col items-center gap-4 sm:gap-0 flex-shrink-0">
                        {/* Service number — visible on all sizes */}
                        <span className="text-xs font-bold text-slate-300 tracking-widest sm:hidden">
                          {service.number}
                        </span>

                        {IconComponent && (
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            {/* Smaller icon on mobile */}
                            <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 text-emerald-600 transition-transform duration-500 group-hover:scale-110">
                              <IconComponent />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Text content */}
                      <div className="space-y-3 sm:space-y-4 flex-1 min-w-0">
                        <div className="space-y-1">
                          {/* Number badge — hidden on mobile (shown inline above), visible sm+ */}
                          <span className="hidden sm:block text-xs font-bold text-slate-300 tracking-widest mb-1">
                            {service.number}
                          </span>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                          {service.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-1 sm:pt-3">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 sm:px-4 py-1 sm:py-1.5 text-[9px] sm:text-[10px] uppercase tracking-wider rounded-full font-bold bg-slate-50 text-slate-500 border border-slate-200 transition-all duration-300 group-hover:bg-emerald-50 group-hover:border-emerald-100 group-hover:text-emerald-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Arrow — desktop only */}
                      <div className="hidden lg:block self-center opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
