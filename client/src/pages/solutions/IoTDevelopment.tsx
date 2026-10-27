import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import { useNavigate } from "react-router-dom";
import { getRouteFaq } from "../../data/faq";

const IoTProductDevelopment: React.FC = () => {
  const navigate = useNavigate();

  const faqItems = getRouteFaq("/solutions/iot-product-development");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .iot-root * { font-family: 'DM Sans', sans-serif; }
        .iot-serif  { font-family: 'DM Serif Display', serif; }

        .iot-fadeUp {
          animation: iotFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .iot-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .iot-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes iotFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .iot-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .iot-card-sweep::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ecfdf5;
          transform: translateX(-101%);
          transition: transform 0.5s cubic-bezier(0.85,0,0.15,1);
          z-index: 0;
          border-radius: inherit;
        }
        .iot-card-sweep:hover::before { transform: translateX(0); }

        .iot-pulse-dot {
          animation: iotPulse 2.4s ease-in-out infinite;
        }
        @keyframes iotPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
      `}</style>

      <section className="iot-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
        <div className="max-w-7xl pt-6 md:pt-12 mx-auto">
          {/* ── HERO ─────────────────────────────────── */}
          <div className="relative max-w-6xl mt-12 mx-auto text-center mb-16 md:mb-20">
            <div className="iot-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

            <div className="iot-fadeUp flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                IoT Product Development
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h1 className="iot-fadeUp iot-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
              Connect Devices &amp; <br />
              <span className=" text-emerald-600">
                Achieve Operational Excellence
              </span>
            </h1>

            <p className="iot-fadeUp text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              Internet of Things (IoT) projects help organizations connect
              physical devices, automate data collection, monitor hardware, and
              integrate seamlessly with tailored software to improve efficiency,
              reduce costs, and ensure systems align with strategic objectives.
            </p>
          </div>

          {/* ── HERO IMAGE ───────────────────────────── */}
          <div className="relative mb-10">
            <div className="relative overflow-hidden h-[250px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
              <img
                src="/hero4/iot2.jpg"
                alt="Enterprise Interface"
                className="w-full h-full object-cover object-top"
              />

              <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 w-full px-4 sm:px-6 flex justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="group relative rounded-sm border-2 border-emerald-600 cursor-pointer inline-flex items-center gap-2 sm:gap-3 md:gap-4 
        px-6 sm:px-8 md:px-10 lg:px-12 
        py-3 sm:py-4 md:py-5 
        bg-emerald-600 text-white font-bold 
        text-xs sm:text-sm 
        uppercase tracking-[0.15em] sm:tracking-[0.2em] 
        overflow-hidden transition-all duration-300 
        hover:shadow-[0_10px_40px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-[0.98]"
                >
                  <span className="relative z-20 transition-colors duration-300 group-hover:text-emerald-600 whitespace-nowrap">
                    Start Your Project
                  </span>

                  <svg
                    className="relative z-20 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-300 group-hover:translate-x-2 group-hover:text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>

                  {/* Animated Background Slide on Hover */}
                  <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </button>
              </div>
            </div>
          </div>

          {/* ── BUSINESS IMPACT + VALUE CARDS ────────── */}
          <div className="max-w-7xl mx-auto pt-10 sm:pt-12 md:pt-16 lg:pt-20 mb-20 md:mb-28">
            {/* Section label */}
            <div className="max-w-3xl mx-auto text-center mb-14 px-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  Business Impact
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <p className=" text-2xl md:text-3xl text-slate-700 font-normal leading-snug ">
                IoT solutions empower organizations to streamline physical
                operations, optimize hardware workflows, and achieve measurable
                business results through smart, connected ecosystems.
              </p>
            </div>

            {/* ValueCard grid — component untouched */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Device Connectivity",
                  desc: "Connect your physical assets to the digital world to gather real-time data and reduce human error.",
                  link: "Connectivity",
                },
                {
                  num: "02",
                  title: "Software Integration",
                  desc: "Bridge the gap between hardware and software with customized interfaces, ensuring seamless control of your physical systems.",
                  link: "Integration",
                },
                {
                  num: "03",
                  title: "Data-Driven Insights",
                  desc: "Use analytics to monitor device performance, predict maintenance needs, and make informed decisions.",
                  link: "Analytics",
                },
                {
                  num: "04",
                  title: "Remote Control & Monitoring",
                  desc: "Ensure smooth oversight of remote physical assets across teams while maintaining regulatory compliance.",
                  link: "Monitoring",
                },
                {
                  num: "05",
                  title: "Security & Device Management",
                  desc: "Secure devices with encrypted communication and centralized management.",
                  link: "Security",
                },
              ].map((item, index) => (
                <ValueCard
                  key={index}
                  num={item.num}
                  title={item.title}
                  desc={item.desc}
                  link={item.link}
                />
              ))}
            </div>
          </div>

          {/* ── IOT OVERVIEW ─────────────────────────── */}
          <section className="bg-white py-16 md:py-24 px-0">
            <div className="max-w-7xl mx-auto">
              {/* Section header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-14 md:mb-24">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px w-8 bg-emerald-600" />
                    <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                      Operational Excellence
                    </div>
                  </div>
                  <h3 className="iot-serif text-5xl sm:text-6xl md:text-7xl font-normal text-slate-900 tracking-tight leading-[1.0]">
                    Connect, Optimize <br />
                    <span className=" text-emerald-600">&amp; Grow.</span>
                  </h3>
                </div>

                <div className="lg:pt-14">
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-6">
                    LushWare's IoT solutions enable organizations to manage
                    their physical processes and hardware integrations more
                    efficiently.
                  </p>
                  <div className="h-px w-20 bg-emerald-600" />
                </div>
              </div>

              {/* Architecture cards */}
              <div className="space-y-6 md:space-y-10">
                {/* Card 01 — Full-width */}
                <div className="group relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-slate-200  transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)]">
                  {/* Left dark panel */}
                  <div className="lg:col-span-4 bg-emerald-800 p-8 md:p-12 flex flex-col justify-between text-white min-h-[160px]">
                    <span className="iot-serif text-6xl md:text-8xl font-normal italic opacity-30 leading-none">
                      01
                    </span>
                    <h4 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
                      What are <br className="hidden md:block" /> IoT Projects
                    </h4>
                  </div>

                  {/* Right content panel */}
                  <div className="lg:col-span-8 p-8 md:p-14 flex items-center bg-white group-hover:bg-slate-50 transition-colors duration-500">
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                      IoT projects represent a{" "}
                      <span className="text-slate-900 font-medium italic">
                        structured approach
                      </span>{" "}
                      to analyzing, designing, automating, and improving your
                      physical hardware processes. It ensures that every device
                      workflow is optimized and connected to a robust software
                      backend to achieve strategic goals and operational
                      efficiency.
                    </p>
                  </div>
                </div>

                {/* Cards 02 + 03 — Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                  {/* Card 02 */}
                  <div className="relative group p-8 md:p-12 border border-slate-200  transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.06)] overflow-hidden">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="iot-serif text-2xl italic text-emerald-600">
                        02
                      </span>
                      <div className="h-px flex-1 bg-slate-200 group-hover:bg-emerald-300 transition-colors duration-500" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 tracking-tight">
                      How it Benefits Your Business
                    </h4>
                    <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
                      By connecting hardware to our tailored, custom-built
                      software solutions, your business gains unprecedented{" "}
                      <span className="text-emerald-700 font-semibold">
                        visibility into real-world operations
                      </span>
                      , allowing for automated responses, preventative
                      maintenance, and complete control from a single dashboard.
                    </p>
                  </div>

                  {/* Card 03 */}
                  <div className="relative group p-8 md:p-12 bg-emerald-800 text-white overflow-hidden">
                    {/* Subtle glow */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-400/15 blur-3xl pointer-events-none" />
                    {/* Grid lines */}
                    <div
                      className="absolute inset-0 opacity-[0.04] pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                        <span className="iot-serif text-2xl italic text-emerald-300">
                          03
                        </span>
                        <div className="h-px flex-1 bg-emerald-600" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
                        How We Add Value
                      </h4>
                      <p className="text-base sm:text-lg text-emerald-100 leading-relaxed font-light">
                        LushWare customizes IoT solutions to align with your
                        unique business goals. We provide hardware automation,{" "}
                        <span className="text-white font-medium">
                          integration with your existing systems
                        </span>
                        , monitoring dashboards, and continuous support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── THE PLATFORM ─────────────────────────── */}
          <section className="bg-white py-16 md:py-20 px-2">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14 md:mb-20">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    The Platform
                  </div>
                  <div className="h-px w-8 bg-emerald-600" />
                </div>

                <h2 className="iot-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  We don't just build software —{" "}
                  <span className=" text-emerald-600">
                    we solve business problems.
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  Our solutions are tailored to your goals, processes, and
                  customers, delivering measurable value through scalable,
                  secure, and future-ready technology.
                </p>
              </div>

              {/* Four horizontal feature blocks */}
              <div className="flex flex-col divide-y divide-slate-100 border-y border-slate-100">
                {[
                  {
                    num: "01",
                    title: "Scalable Architecture",
                    desc: "Systems engineered to grow with your device fleet, from a single pilot deployment to enterprise-wide rollouts.",
                    svg: (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
                      </svg>
                    ),
                  },
                  {
                    num: "02",
                    title: "Hardware-Software Integration",
                    desc: "Custom interfaces and APIs that unify physical devices with your digital systems, without relying on generic platforms.",
                    svg: (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="18"
                          height="11"
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                        />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    ),
                  },
                  {
                    num: "03",
                    title: "Future-Ready Tech",
                    desc: "Architectures built to accommodate new devices, protocols, and integrations as your operations evolve.",
                    svg: (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                        <path d="M22 12A10 10 0 0 0 12 2v10z" />
                      </svg>
                    ),
                  },
                  {
                    num: "04",
                    title: "Predictive Analytics",
                    desc: "Advanced data parsing that monitors machine telemetry in real time to spot performance anomalies before failure occurs.",
                    svg: (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m19 11-4-7-5 13-4-6-3 4" />
                        <circle cx="19" cy="11" r="1" />
                        <circle cx="15" cy="4" r="1" />
                        <circle cx="10" cy="17" r="1" />
                        <circle cx="6" cy="11" r="1" />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col md:flex-row md:items-start lg:items-center gap-6 md:gap-10 py-10 md:py-12 px-4 sm:px-8 hover:bg-slate-50 hover:shadow-xl transition-all duration-700 ease-in-out"
                  >
                    <div className="flex items-center gap-6 md:w-80 lg:w-96 shrink-0">
                      <span className="iot-serif text-xs italic text-slate-300 tabular-nums">
                        {item.num}
                      </span>
                      <div className="w-14 h-14 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors duration-400 shrink-0">
                        {item.svg}
                      </div>
                      <h4 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed flex-1 md:pt-1 lg:pt-0">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <WhyChooseLushWare />

          {/* ── FAQ ──────────────────────────────────── */}
          <div className="max-w-7xl mx-auto pt-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  IoT Solutions
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <h2 className="iot-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                IoT Product{" "}
                <span className=" text-emerald-600">Development</span>
              </h2>

              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Connect physical devices, automate data collection, and gain
                complete visibility into your hardware with scalable IoT
                solutions.
              </p>
            </div>

            <div>
              {faqItems.map((item, index) => (
                <QuestionItem
                  key={`${item.question}-${index}`}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IoTProductDevelopment;
