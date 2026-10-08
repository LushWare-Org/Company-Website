import React, { useState } from "react";

// Logos load from the Simple Icons CDN. If a logo is missing, a monogram is shown instead.
// To use your own files, replace `slug` with `src: "/logos/stm32.svg"` and use it in <img src>.
type Tech = { name: string; slug?: string; group: string };

const techs: Tech[] = [
  { name: "STM32", slug: "stmicroelectronics", group: "Embedded & Hardware" },
  { name: "Nordic nRF", slug: "nordicsemiconductor", group: "Embedded & Hardware" },
  { name: "Espressif ESP32", slug: "espressif", group: "Embedded & Hardware" },
  { name: "Microchip", slug: "microchip", group: "Embedded & Hardware" },
  { name: "Arduino", slug: "arduino", group: "Embedded & Hardware" },
  { name: "Raspberry Pi", slug: "raspberrypi", group: "Embedded & Hardware" },
  { name: "Altium", slug: "altium", group: "Design & Analysis" },
  { name: "MATLAB", slug: "mathworks", group: "Design & Analysis" },
  { name: "Python", slug: "python", group: "Design & Analysis" },
  { name: "MQTT", slug: "mqtt", group: "Connectivity" },
  { name: "Argos", group: "Connectivity" },
  { name: "Node.js", slug: "nodedotjs", group: "Cloud & Web" },
  { name: "FastAPI", slug: "fastapi", group: "Cloud & Web" },
  { name: "Django", slug: "django", group: "Cloud & Web" },
  { name: "React", slug: "react", group: "Cloud & Web" },
  { name: "Next.js", slug: "nextdotjs", group: "Cloud & Web" },
  { name: "PostgreSQL", slug: "postgresql", group: "Cloud & Web" },
  { name: "Docker", slug: "docker", group: "Cloud & Web" },
  { name: "Flutter", slug: "flutter", group: "Mobile" },
  { name: "React Native", slug: "react", group: "Mobile" },
  { name: "Android", slug: "android", group: "Mobile" },
  { name: "iOS", slug: "apple", group: "Mobile" },
];

const groups = ["Embedded & Hardware", "Design & Analysis", "Connectivity", "Cloud & Web", "Mobile"];

const Logo: React.FC<{ tech: Tech }> = ({ tech }) => {
  const [failed, setFailed] = useState(false);
  if (!tech.slug || failed) {
    return (
      <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 text-emerald-700 font-bold text-sm rounded-sm">
        {tech.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${tech.slug}`}
      alt={`${tech.name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="w-10 h-10 object-contain  opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
    />
  );
};

const TechnologiesSection: React.FC = () => (
  <section className="bg-white py-16 md:py-20 px-2">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center px-4 mb-14 md:mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-emerald-600" />
          <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
            Technologies
          </div>
          <div className="h-px w-8 bg-emerald-600" />
        </div>
        <h2 className="font-['DM_Serif_Display'] text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
          The Stack Behind{" "}
          <span className="text-emerald-600">Every Device</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
          From silicon and firmware to cloud and mobile, we work with proven
          tools across the whole product chain.
        </p>
      </div>

      <div className="border border-slate-100 divide-y divide-slate-100">
        {groups.map((g) => (
          <div key={g} className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-3 p-6 md:p-8 bg-slate-50/60 flex items-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{g}</span>
            </div>
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {techs
                .filter((t) => t.group === g)
                .map((t) => (
                  <div
                    key={t.name}
                    className="group flex flex-col items-center justify-center gap-3 p-6 border-l border-b border-slate-100 hover:bg-slate-50 transition-colors duration-500"
                  >
                    <Logo tech={t} />
                    <span className="text-sm font-semibold text-slate-700 text-center">{t.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSection;