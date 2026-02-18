import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

type HeroSlide = {
  id: string;
  titleTop: string;
  titleHighlight: string;
  titleOutline: string;
  description: string;
  image: string;
  maxWidthClass: string;
  aspectClass: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: "01",
    titleTop: "Customer ",
    titleHighlight: "Relationship",
    titleOutline: "Management.",
    description:
      "Powerful CRM platforms designed to strengthen customer engagement, automate workflows, and scale relationships.",
    image: "/hero3/crm2.jpg",
    maxWidthClass: "lg:max-w-md",
    aspectClass: "aspect-auto",
  },
  {
    id: "02",
    titleTop: "AI Agents &",
    titleHighlight: "AI Chatbots",
    titleOutline: "Solutions.",
    description:
      "Intelligent AI agents and chatbots that automate support, sales, and internal operations with precision.",
    image: "/hero3/ai2.jpg",
    maxWidthClass: "lg:max-w-md",
    aspectClass: "aspect-auto ",
  },
  {
    id: "03",
    titleTop: "Business",
    titleHighlight: "Process",
    titleOutline: "Management.",
    description:
      "Streamline operations with BPM systems built for efficiency, visibility, and long-term growth.",
    image: "/hero3/bpm3.jpg",
    maxWidthClass: "lg:max-w-md",
    aspectClass: "aspect-auto lg:pt-2",
  },
  {
    id: "04",
    titleTop: "Business &",
    titleHighlight: "Corporate",
    titleOutline: "Websites.",
    description:
      "High-end corporate websites crafted to communicate trust, clarity, and brand authority.",
    image: "/hero3/web3.jpg",
    maxWidthClass: "xl:max-w-2xl",
    aspectClass: "aspect-auto",
  },
  {
    id: "05",
    titleTop: "Mobile",
    titleHighlight: "Applications",
    titleOutline: "Development.",
    description:
      "Scalable iOS and Android applications engineered for performance and user experience.",
    image: "/hero3/app.jpg",
    maxWidthClass: "lg:max-w-lg",
    aspectClass: "aspect-auto",
  },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (_index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        className="h-full w-full hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full px-6 lg:px-20 flex flex-col justify-center z-10 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 md:mt-0 lg:mt-0 mt-64 flex flex-col">
                  <h1 className="flex flex-col gap-0 select-none mb-6">
                    <span
                      className="text-5xl md:text-7xl lg:text-[7rem] font-black text-transparent uppercase leading-[0.8] tracking-tighter hero-line"
                      style={{ WebkitTextStroke: "2px #1c1917" }}
                    >
                      {slide.titleTop}
                    </span>
                    <span className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-stone-900 uppercase leading-[0.8] mb-1 hero-line">
                      {slide.titleHighlight}
                    </span>

                    <span
                      className="text-5xl md:text-7xl lg:text-[7rem] font-black text-emerald-600 uppercase leading-[0.8] tracking-tighter hero-line"
                      style={{ WebkitTextStroke: "2px #1c1917" }}
                    >
                      {slide.titleOutline}
                    </span>
                  </h1>

                  <p className="text-xl font-medium text-stone-800 max-w-xl mb-8 mt-4 hero-line">
                    {slide.description}
                  </p>

                  <div className="flex flex-col md:flex-row lg:flex-col gap-6 w-full lg:w-max">
                    <button
                      onClick={() => navigate("/contact")}
                      className="group relative cursor-pointer rounded-full px-8 py-4 bg-stone-900 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105"
                    >
                      <span className="relative z-10 text-[14px] font-bold tracking-[0.2em] uppercase text-white">
                        Start Your Project
                      </span>
                      <div className="absolute inset-0 bg-emerald-600 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
                    </button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
                  <div
                    className={`relative w-full hero-image-container ${slide.maxWidthClass} ${slide.aspectClass}`}
                  >
                    <img
                      src={slide.image}
                      alt={`${slide.titleHighlight} ${slide.titleOutline}`}
                      className="w-full h-full object-cover hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="absolute bottom-12 left-6 lg:left-20 z-20 flex gap-4">
          <button className="custom-prev group cursor-pointer flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 hover:border-stone-900 transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="custom-next group cursor-pointer flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 hover:border-stone-900 transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </Swiper>

      <style>{`
        .hero-swiper .swiper-slide {
          opacity: 0;
          transition: opacity 600ms ease;
        }
        .hero-swiper .swiper-slide-active {
          opacity: 1;
        }
        .custom-pagination {
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 30;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .custom-pagination .swiper-pagination-bullet {
          background: #d6d3d1 !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 0 !important;
          border-radius: 999px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #065f46 !important;
          transform: scale(1.3);
        }
        .hero-image-container {
          animation: fadeInScale 1s ease-out;
        }
        .hero-image {
          transition: transform 6s ease-out;
        }
        .swiper-slide-active .hero-image {
          transform: scale(1.05);
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}