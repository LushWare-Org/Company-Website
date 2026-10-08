import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import TechnologiesSection from "../../components/TechnologiesSection";
import { useNavigate } from "react-router-dom";

const ProductEngineering: React.FC = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "What is End-to-End Product Engineering?",
      answer:
        "It covers the full journey of a physical product: concept, architecture, prototyping, PCB and firmware design, compliance, and the transition to mass manufacturing, all handled by one engineering team.",
    },
    {
      question: "Can you take our prototype to mass production?",
      answer:
        "Yes. We apply Design for Manufacturing (DFM), optimize your Bill of Materials, source components, and manage the hand-off from prototype to volume production so you keep your time to market.",
    },
    {
      question: "Will the hardware pass CE, FCC, and RoHS certification?",
      answer:
        "We design with compliance in mind from day one, including EMI/EMC mitigation, high-voltage isolation, and testing strategies, so the product is engineered to pass certification without costly redesign cycles.",
    },
    {
      question: "Can low-cost hardware deliver precise measurements?",
      answer:
        "Yes. By combining well-designed analog signal chains with Digital Signal Processing and sensor fusion, we reach high-precision results in noisy environments while keeping unit costs low.",
    },
    {
      question: "Which microcontrollers and wireless protocols do you work with?",
      answer:
        "We develop firmware for STM32, ESP32, and Nordic nRF platforms, with Wi-Fi, BLE, and LoRaWAN connectivity, and secure hardware-to-cloud communication over MQTT and IoT platforms.",
    },
    {
      question: "Do you also build the cloud and mobile apps?",
      answer:
        "Yes. We build the web backend, dashboards, and Android/iOS apps (including Bluetooth integration) so your device, cloud, and users work as one system.",
    },
  ];

  const capabilities = [
    {
      letter: "A",
      title: "Device Design & Product Engineering",
      intro:
        "Transform concepts into market-ready physical products with a focus on commercial viability and scalable manufacturing.",
      items: [
        "End-to-end physical product architecture",
        "Rapid prototyping and proof-of-concept development",
        "Manufacturing-ready designs (DFM)",
        "Component sourcing and BOM (Bill of Materials) optimization",
        "Transition management from prototype to mass production",
      ],
      question:
        "How do we turn this prototype into a scalable, mass-manufactured physical product without losing time to market?",
    },
    {
      letter: "B",
      title: "Custom PCB Design & Compliance Engineering",
      intro:
        "Design robust printed circuit boards optimized for yield and engineered to pass global regulatory certifications on the first run.",
      items: [
        "Complex multi-layer PCB layout and high-density interconnect (HDI) routing",
        "Impedance-controlled RF PCB design and antenna tuning (BLE, Wi-Fi, IoT networks)",
        "Power electronics design, thermal management, and high-current trace routing",
        "Ultra-low noise mixed-signal routing for precision sensors and biomedical acquisition",
        "EMI/EMC mitigation strategies and signal integrity analysis",
        "High-voltage isolation, testing, and industrial potting processes",
        "CE, FCC, RoHS, and ISO standards compliance engineering",
        "Design for Testing (DFT) and manufacturing hand-off",
      ],
      question:
        "How do we ensure this hardware passes international safety and emission certifications without costly redesign cycles, regardless of high-power requirements or complex RF constraints?",
      note: "The important distinction is that you aren't simply getting a working board.",
    },
    {
      letter: "C",
      title: "High-Precision Sensor Systems & DSP",
      intro:
        "Develop clinical-grade and industrial-grade sensor systems by combining low-cost hardware with advanced mathematical compensation algorithms.",
      items: [
        "Biomedical device engineering (e.g., non-invasive diagnostics)",
        "sEMG/ECG acquisition and signal conditioning",
        "Ultra-low noise analog signal chains",
        "Digital Signal Processing (DSP) for hardware limitations",
        "Sensor fusion and dynamic data filtration",
      ],
      question:
        "How do we achieve high-precision, reliable measurements in noisy environments while keeping unit hardware costs low?",
    },
  ];

  const iotItems = [
    "Microcontroller firmware development (STM32, ESP32, nRF)",
    "Wireless connectivity implementation (Wi-Fi, BLE, LoRaWAN)",
    "Edge computing and on-device data processing",
    "Real-time telemetry, power monitoring, and autonomous control",
    "Secure hardware-to-cloud communication (MQTT/IoT platforms)",
  ];

  const maturity = [
    "Isolated Sensors",
    "Connected Devices",
    "Edge Intelligence",
    "Cloud-Integrated Ecosystems",
    "Autonomous IoT Networks",
  ];

  const lifecycle = [
    { t: "Concept & Architecture", d: "Define requirements, system architecture, and feasibility." },
    { t: "Prototype & Proof of Concept", d: "Rapid builds to validate the idea with real hardware." },
    { t: "PCB, Firmware & Compliance", d: "Production-grade boards, code, and certification readiness." },
    { t: "Pilot & Mass Production", d: "DFM, sourcing, testing, and manufacturing hand-off." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .pe-root * { font-family: 'DM Sans', sans-serif; }
        .pe-serif  { font-family: 'DM Serif Display', serif !important; }

        .pe-fadeUp { animation: peFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .pe-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .pe-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes peFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pe-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .pe-circuit {
          background-image:
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <section className="pe-root w-full py-24 px-6 bg-white selection:bg-emerald-50">
        <div className="max-w-7xl pt-6 md:pt-12 mx-auto">
          {/* ── HERO ─────────────────────────────────── */}
          <div className="relative max-w-6xl mt-12 mx-auto text-center mb-16 md:mb-20">
            <div className="pe-dotgrid absolute inset-0 -z-10 opacity-50 pointer-events-none" />

            <div className="pe-fadeUp flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-8 bg-emerald-600" />
              <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                Product Engineering & Embedded Systems
              </div>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h1 className="pe-fadeUp pe-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-7">
              From Concept to <br />
              <span className="text-emerald-600">Market-Ready Hardware</span>
            </h1>

            <p className="pe-fadeUp text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              LushWare delivers end-to-end product engineering: device design,
              custom PCBs, precision sensor systems, and intelligent connected
              firmware, engineered to pass certification and scale to mass
              production.
            </p>
          </div>

          {/* ── HERO IMAGE ───────────────────────────── */}
          <div className="relative mb-10">
            <div className="relative overflow-hidden h-[250px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
              <img
                src="https://placehold.co/1600x900/064e3b/ecfdf5?text=Product+Engineering+Hero"
                alt="Product engineering and embedded hardware"
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
                    Start Your Product
                  </span>
                  <svg
                    className="relative z-20 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-300 group-hover:translate-x-2 group-hover:text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </button>
              </div>
            </div>
          </div>

          {/* ── BUSINESS IMPACT + VALUE CARDS ────────── */}
          <div className="max-w-7xl mx-auto pt-10 sm:pt-12 md:pt-16 lg:pt-20 mb-20 md:mb-28">
            <div className="max-w-3xl mx-auto text-center mb-14 px-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  Business Impact
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>
              <p className="text-2xl md:text-3xl text-slate-700 font-normal leading-snug">
                We help you build physical products that are{" "}
                <span className="text-emerald-700 font-medium">
                  certifiable, manufacturable, and connected
                </span>
                , reducing redesign cycles and protecting your time to market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Faster Time to Market",
                  desc: "Prototype-to-production planning and DFM keep launches on schedule.",
                  link: "Production",
                },
                {
                  num: "02",
                  title: "First-Run Compliance",
                  desc: "Hardware engineered to pass CE, FCC, RoHS, and ISO standards without costly redesigns.",
                  link: "Compliance",
                },
                {
                  num: "03",
                  title: "Precision at Low Cost",
                  desc: "DSP and sensor fusion deliver clinical-grade accuracy from affordable hardware.",
                  link: "Precision",
                },
                {
                  num: "04",
                  title: "Optimized Unit Economics",
                  desc: "BOM optimization and smart component sourcing reduce cost per unit at scale.",
                  link: "Cost",
                },
                {
                  num: "05",
                  title: "Connected Ecosystems",
                  desc: "Devices that talk securely to cloud platforms, dashboards, and mobile apps.",
                  link: "Connectivity",
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

          {/* ── LIFECYCLE ────────────────────────────── */}
          <section className="bg-white py-16 md:py-20 px-0">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-14 md:mb-20">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px w-8 bg-emerald-600" />
                    <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                      End-to-End
                    </div>
                  </div>
                  <h3 className="pe-serif text-5xl sm:text-6xl md:text-7xl font-normal text-slate-900 tracking-tight leading-[1.0]">
                    Idea to <br />
                    <span className="text-emerald-600">Mass Production.</span>
                  </h3>
                </div>
                <div className="lg:pt-14">
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-6">
                    One team across the whole product chain, so nothing is lost
                    between design, electronics, firmware, and manufacturing.
                  </p>
                  <div className="h-px w-20 bg-emerald-600" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-100">
                {lifecycle.map((s, i) => (
                  <div
                    key={s.t}
                    className="group p-8 md:p-10 border-b lg:border-b-0 lg:border-r last:border-r-0 border-slate-100 hover:bg-slate-50 transition-colors duration-500"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="pe-serif text-xl italic text-emerald-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-slate-200 group-hover:bg-emerald-300 transition-colors duration-500" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">{s.t}</h4>
                    <p className="text-slate-500 font-light leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CAPABILITIES A / B / C ───────────────── */}
          <section className="bg-white py-16 md:py-20 px-0">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14 md:mb-20">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-600" />
                  <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                    Core Capabilities
                  </div>
                  <div className="h-px w-8 bg-emerald-600" />
                </div>
                <h2 className="pe-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
                  Hardware Engineering,{" "}
                  <span className="text-emerald-600">Done Properly</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  Three disciplines that turn a concept into a reliable,
                  certifiable, and manufacturable product.
                </p>
              </div>

              <div className="space-y-6 md:space-y-10">
                {capabilities.map((c, idx) => {
                  const dark = idx % 2 === 0;
                  return (
                    <div
                      key={c.letter}
                      className="group relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-slate-200 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.07)]"
                    >
                      <div
                        className={`lg:col-span-4 p-8 md:p-12 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                          dark ? "bg-emerald-800 text-white" : "bg-[#062c1b] text-white"
                        }`}
                      >
                        <div className="pe-circuit absolute inset-0 opacity-[0.04] pointer-events-none" />
                        <span className="pe-serif relative text-7xl md:text-8xl italic opacity-30 leading-none">
                          {c.letter}
                        </span>
                        <h4 className="relative text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
                          {c.title}
                        </h4>
                      </div>

                      <div className="lg:col-span-8 p-8 md:p-12 bg-white group-hover:bg-slate-50 transition-colors duration-500">
                        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-8">
                          {c.intro}
                        </p>

                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                          Examples
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                          {c.items.map((it) => (
                            <li key={it} className="flex gap-3 text-slate-700 font-light leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              {it}
                            </li>
                          ))}
                        </ul>

                        <div className="relative border-l-2 border-emerald-600 pl-6">
                          {c.note && (
                            <p className="text-slate-500 font-light mb-2">{c.note}</p>
                          )}
                          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700 mb-2">
                            Business question
                          </p>
                          <p className="pe-serif text-xl md:text-2xl text-slate-900 leading-snug">
                            "{c.question}"
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── IoT & EMBEDDED SYSTEMS ───────────────── */}
          <section className="bg-white py-16 md:py-20 px-0">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-[#062c1b] relative shadow-[0_32px_80px_rgba(6,44,27,0.3)]">
                <div className="pe-circuit absolute inset-0 opacity-[0.035] pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/40" />

                <div className="relative z-10 lg:col-span-5 p-8 md:p-14 flex flex-col justify-end">
                  <div className="inline-flex self-start items-center gap-2 px-4 py-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    Intelligent Edge
                  </div>
                  <h3 className="pe-serif text-4xl md:text-5xl font-normal text-white mb-6 tracking-tight leading-[1.05]">
                    IoT & Embedded Systems Development
                  </h3>
                  <p className="text-emerald-100 text-lg md:text-xl font-light leading-relaxed">
                    Build intelligent edge devices and connected hardware
                    ecosystems that integrate seamlessly with cloud
                    infrastructure.
                  </p>
                </div>

                <div className="relative z-10 lg:col-span-7 p-8 md:p-14 lg:border-l border-emerald-900">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-6">
                    Examples
                  </p>
                  <ul className="space-y-4">
                    {iotItems.map((it) => (
                      <li
                        key={it}
                        className="flex gap-4 text-emerald-50 text-lg font-light leading-relaxed pb-4 border-b border-emerald-900 last:border-b-0"
                      >
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Maturity model */}
              <div className="mt-14 md:mt-20">
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <div className="h-px w-8 bg-emerald-600" />
                    <span className="text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                      IoT Maturity Model
                    </span>
                    <div className="h-px w-8 bg-emerald-600" />
                  </div>
                  <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto">
                    We meet you at your current stage and move your product up
                    the ladder.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 border border-slate-100">
                  {maturity.map((m, i) => (
                    <div
                      key={m}
                      className="group relative p-6 md:p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-slate-100 hover:bg-emerald-50 transition-colors duration-500"
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <span className="pe-serif text-xs italic text-slate-300 group-hover:text-emerald-600 transition-colors duration-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div
                          className="h-1 rounded-full bg-emerald-600"
                          style={{ width: `${(i + 1) * 20}%` }}
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 tracking-tight">{m}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── TECHNOLOGIES (with logos) ────────────── */}
          <TechnologiesSection />

          <WhyChooseLushWare />

          {/* ── FAQ ──────────────────────────────────── */}
          <div className="max-w-7xl mx-auto pt-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  Hardware Solutions
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>
              <h2 className="pe-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                Product Engineering &{" "}
                <span className="text-emerald-600">Embedded Systems</span>
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Answers to common questions about taking a physical product
                from concept to certified production.
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

export default ProductEngineering;