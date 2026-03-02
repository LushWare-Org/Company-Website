import { useState, useEffect } from "react";

export default function HealthcarePage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const NAV_LINKS = ["Services", "Specialists", "Facilities", "Research", "Patient Portal"];

  return (
    <div className="font-sans text-gray-800 antialiased">

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-5"} border-b border-gray-100`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">

            <div>
              <span className="block text-[16px] font-black uppercase tracking-[0.18em] text-[#003366] leading-none">MedVantage</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500 mt-0.5">Clinical Centre · London</span>
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <a key={item} href="#" className="text-[12px] font-bold uppercase tracking-[0.18em] text-gray-500 hover:text-[#003366] transition-colors relative group py-1">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
  
            <button className="bg-[#003366] text-white px-7 py-3 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#00254d] transition-all duration-300">
              Book Appointment
            </button>
            <button className="xl:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-[2px] bg-[#003366]" />
                <div className="w-4 h-[2px] bg-[#003366]" />
                <div className="w-5 h-[2px] bg-[#003366]" />
              </div>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4">
            {NAV_LINKS.map((item) => (
              <a key={item} href="#" className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-[#003366]">{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative w-full min-h-screen flex flex-col bg-white text-[#003366] overflow-hidden pt-[70px]">
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <div className="flex flex-col justify-center px-10 md:px-20 xl:px-20 py-24 lg:py-0 bg-white">
            <div className="inline-flex items-center gap-3 mb-10 w-fit">
              <div className="w-2 h-2 rounded-full bg-[#0066CC]" />
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#0066CC]">London's Premier Medical Centre</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] text-[#003366] mb-8">
              Your Health.<br />
              <span className="text-[#0066CC]">Our Priority.</span>
            </h1>

            <p className="text-base md:text-xl text-gray-500 font-medium max-w-lg leading-relaxed mb-12">
              Experience world-class medical care delivered by the UK's most distinguished consultants — from complex diagnostics to advanced surgical procedures, all under one roof.
            </p>

            <div className="flex flex-wrap gap-6 mb-14">
              {[
                { label: "CQC Outstanding", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "NHS Accredited", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { label: "GMC Registered", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2"><path d={b.icon} /></svg>
                  <span className="text-[12px] font-black uppercase tracking-widest text-[#003366]/80">{b.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex cursor-pointer items-center justify-center gap-3 bg-[#003366] text-white px-8 py-5 font-black uppercase tracking-[0.3em] text-[12px] hover:bg-[#00254d] transition-all duration-300 group">
                Book Appointment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <button className="flex cursor-pointer items-center justify-center gap-3 border-2 border-[#003366] text-[#003366] px-8 py-5 font-black uppercase tracking-[0.3em] text-[12px] hover:bg-[#003366] hover:text-white transition-all duration-300">
                Our Specialists
              </button>
            </div>


          </div>

          <div className="relative overflow-hidden  aspect-[1] w-full lg:h-screen">
            <img
              src="/templates/healthcare/hero.jpg"
              alt="Medical professionals at MedVantage"
              className="absolute inset-0 w-full h-full object-cover scale-90 "
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#003366]/8" />

            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 bg-white shadow-2xl p-6 max-w-[220px] border-l-4 border-[#0066CC]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-black text-[#003366] uppercase tracking-wide">
                    Next Available
                  </div>
                  <div className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">
                    Today · 2:30 PM
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                Prof. Elena Moretti · Cardiology
              </p>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", label: "Find a Specialist", sub: "Browse our consultant faculty", dark: false },
              { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Book Appointment", sub: "In-Person / Video Consult", dark: true },
              { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z", label: "Patient Records", sub: "Secure access to your files", dark: false },
            ].map((item) => (
              <button key={item.label} className={`flex items-center cursor-pointer justify-between px-12 py-10 transition-all group ${item.dark ? "bg-[#003366] text-white hover:bg-[#00254d]" : "bg-white text-[#003366] border-r border-gray-100 hover:bg-gray-50"}`}>
                <div className="flex items-center gap-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={item.dark ? "white" : "#0066CC"} strokeWidth="1.8"><path d={item.icon} /></svg>
                  <div className="text-left">
                    <div className={`text-[14px] font-bold uppercase tracking-[0.2em] ${item.dark ? "text-white" : "text-[#003366]"}`}>{item.label}</div>
                    <div className={`text-[12px] font-medium uppercase tracking-widest mt-1 ${item.dark ? "text-white/50" : "text-gray-400"}`}>{item.sub}</div>
                  </div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={item.dark ? "white" : "#003366"} strokeWidth="2.5" className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-10 bg-[#f7f9fc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1000" alt="Doctor consulting with patient" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#003366] text-white p-8 w-52">
              <div className="text-4xl font-black mb-1">30+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">Years of Clinical Excellence</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#0066CC]" />
              <span className="text-[12px] font-black uppercase tracking-[0.45em] text-[#0066CC]">About MedVantage</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] text-[#003366] mb-8">
              Medicine Built on<br /><span className="text-gray-500 font-normal">Trust &amp; Precision</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-lg">
              Since 1994, MedVantage has stood at the forefront of private healthcare in the United Kingdom. Our approach is simple: provide every patient with the same level of care we would want for our own families.
            </p>
            <p className="text-md text-gray-500 leading-relaxed mb-10 max-w-lg">
              From routine health screenings to highly complex surgical interventions, our multidisciplinary teams work collaboratively to ensure the best possible outcomes — with compassion and clinical rigour.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Holistic Care", "Treating the whole person, not just the condition"],
                ["Same-Day Results", "Rapid diagnostics with reports within 24 hours"],
                ["Multilingual Staff", "Support available in over 18 languages"],
                ["Transparent Pricing", "Clear, upfront costs — no hidden fees"],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-3 items-start">
                  <div className="w-5 h-5 flex-shrink-0 bg-[#0066CC]/10 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-[#0066CC] rounded-full" />
                  </div>
                  <div>
                    <div className="text-[12px] font-black uppercase tracking-widest text-[#003366] mb-1">{title}</div>
                    <div className="text-[12px] text-gray-400 font-medium leading-snug">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-[#0066CC]" />
                <span className="text-[12px] font-black uppercase tracking-[0.45em] text-[#0066CC]">Clinical Services</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] text-[#003366]">
                Our Medical<br /><span className="text-gray-500 font-normal">Specialties</span>
              </h2>
            </div>
            <p className="max-w-sm text-md text-gray-500 font-medium uppercase tracking-widest leading-relaxed border-r-2 border-[#003366] pr-6">
              Eight dedicated clinical divisions covering every aspect of your health.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#003366]/10">
            {[
              { title: "Cardiology", desc: "Advanced heart & vascular diagnostics, intervention, and prevention.", img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=600" },
              { title: "Oncology", desc: "Comprehensive cancer care with cutting-edge immunotherapy protocols.", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" },
              { title: "Neurology", desc: "Specialist neurological assessments, imaging, and surgical pathways.", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600" },
              { title: "Orthopaedics", desc: "Joint, spine, and sports injury treatment by leading surgeons.", img: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&q=80&w=600" },
              { title: "Diagnostics", desc: "Full MRI, CT, PET, and pathology with same-day reporting.", img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600" },
              { title: "Paediatrics", desc: "Gentle, expert child healthcare from infancy through adolescence.", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600" },
              { title: "Women's Health", desc: "Obstetrics, gynaecology, and reproductive medicine by specialists.", img: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?auto=format&fit=crop&q=80&w=600" },
              { title: "Mental Health", desc: "Confidential psychiatric, psychological, and therapeutic support.", img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=600" },
            ].map((s, i) => (
              <div key={i} className="group relative border-r last:border-r-0 border-b lg:border-b-0 border-[#003366]/10 bg-white overflow-hidden cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-[#003366]/5 group-hover:bg-transparent transition-all" />
                </div>
                <div className="p-6 border-t border-[#003366]/8">
                  <h3 className="text-[14px] font-black uppercase tracking-[0.2em] text-[#003366] mb-1">{s.title}</h3>
                  <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <span className="text-[11px] font-black text-[#0066CC] uppercase tracking-widest">Learn More</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-28 px-10 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-[#0066CC]" />
                <span className="text-[12px] font-black uppercase tracking-[0.45em] text-[#0066CC]">Our Faculty</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] text-[#003366]">
                Senior<br /><span className="text-gray-500 font-normal">Consultants</span>
              </h2>
            </div>
            <div className="border-r-2 border-[#003366] pr-8">
              <p className="text-md text-gray-500 font-medium uppercase tracking-widest leading-relaxed max-w-xs">
                Every consultant holds full GMC registration with a minimum of 15 years specialist clinical experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#003366]/10">
            {[
              { name: "Prof. Alistair Vaughn", role: "Chief of Neurosurgery", exp: "22 years", id: "REG·0449", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=700" },
              { name: "Dr. Elena Moretti", role: "Head of Cardiology", exp: "18 years", id: "REG·0912", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=700" },
              { name: "Mr. Richard Thorne", role: "Consultant Oncologist", exp: "20 years", id: "REG·0773", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=700" },
            ].map((doc, i) => (
              <div key={i} className="group relative border-r last:border-r-0 border-[#003366]/10 bg-white overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover grayscale-75 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute top-5 right-5 bg-white text-[#003366] px-3 py-1.5 text-[8px] font-black uppercase tracking-widest">{doc.id}</div>
                </div>
                <div className="p-10 group-hover:bg-[#003366] transition-all duration-500">
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#003366] group-hover:text-white transition-colors mb-1">{doc.name}</h3>
                  <p className="text-[12px] font-bold text-[#0066CC] uppercase tracking-widest group-hover:text-[#66aaff] transition-colors mb-3">{doc.role}</p>
                  <p className="text-[12px] text-gray-500 uppercase tracking-widest group-hover:text-white/50 transition-colors">{doc.exp} Clinical Experience</p>
                  <div className="mt-6 pt-6 border-t border-[#003366]/10 group-hover:border-white/10 opacity-0 group-hover:opacity-100 transition-all translate-y-3 group-hover:translate-y-0">
                    <button className="text-[12px] cursor-pointer font-black uppercase tracking-[0.4em] text-white border-b border-white/30 pb-1 hover:border-white transition-all">View Full Profile →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 cursor-pointer border-[#003366] text-[#003366] px-10 py-4 text-[12px] font-black uppercase tracking-[0.4em] hover:bg-[#003366] hover:text-white transition-all duration-300">
              View All 200+ Consultants
            </button>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-28 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-[#003366]/60 pb-14 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#0066CC]" />
              <span className="text-[12px] font-black uppercase tracking-[0.45em] text-[#0066CC]">Our Estate</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-[#003366]">
                World-Class <span className="text-gray-500 font-normal">Facilities</span>
              </h2>
              <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-gray-500 max-w-xs leading-relaxed">
                State-of-the-art infrastructure built to deliver precision medicine in a patient-centred environment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 group">
              <div className="relative overflow-hidden aspect-[16/9] border border-[#003366]/8">
                <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200" alt="Private patient suite" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1500ms]" />
                <div className="absolute top-6 left-6 bg-[#003366] text-white px-4 py-2 text-[12px] font-black uppercase tracking-[0.2em]">Private Patient Suites</div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#003366] mb-2">Luxury Patient Concierge</h3>
                  <p className="text-[14px] font-medium text-gray-500 uppercase tracking-[0.2em] leading-relaxed max-w-md">Hotel-grade private rooms with individual climate control, en-suite facilities, and dedicated nursing staff 24/7.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              {[
                { label: "Robotic Surgical Theatre", img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=800", desc: "Da Vinci Xi robotic system for minimally invasive surgery." },
                { label: "Advanced Imaging Suite", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800", desc: "3T MRI, 128-slice CT, and PET scanning with same-day reporting." },
              ].map((f) => (
                <div key={f.label} className="group">
                  <div className="relative aspect-video overflow-hidden border border-[#003366]/8">
                    <img src={f.img} alt={f.label} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1500ms]" />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-[16px] font-black uppercase tracking-[0.15em] text-[#003366] mb-1">{f.label}</h4>
                    <p className="text-[14px] text-gray-500 font-medium uppercase tracking-wider">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-10 bg-[#003366] text-white border-t-[10px] border-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-white/80" />
              <span className="text-[12px] font-black uppercase tracking-[0.45em] text-white/80">Why Patients Choose Us</span>
              <div className="w-8 h-[1px] bg-white/80" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              The <span className="text-white/80 font-normal">MedVantage</span> Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10">
            {[
              { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", title: "Expert Consultants", desc: "200+ GMC-registered specialists across all major disciplines, each averaging 17 years of clinical experience." },
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Rapid Diagnostics", desc: "Full imaging and pathology results delivered within 24 hours, with same-day appointments often available." },
              { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0H9", title: "Premium Facilities", desc: "State-of-the-art surgical theatres, imaging suites, and luxury patient rooms — in the heart of London." },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Personalised Aftercare", desc: "Dedicated care coordinators and bespoke recovery plans that continue long after you leave our hospital." },
            ].map((item) => (
              <div key={item.title} className="group p-10 border-r last:border-r-0 border-white/10 hover:bg-white transition-all duration-500">
                <div className="mb-6 text-white group-hover:text-[#003366] transition-colors">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={item.icon} /></svg>
                </div>
                <h3 className="text-[13px] font-black uppercase tracking-[0.25em] mb-4 group-hover:text-[#003366] transition-colors">{item.title}</h3>
                <p className="text-[12px] text-white/70 font-semibold leading-relaxed uppercase tracking-wider group-hover:text-[#003366]/60 transition-colors">{item.desc}</p>
                <div className="mt-8 w-0 h-[2px] bg-[#003366] group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-t-0 border-white/10">
            {[["98%", "Patient Satisfaction"], ["48hrs", "Average Diagnosis"], ["150K+", "Patients Annually"], ["0.2%", "Complication Rate"]].map(([num, label]) => (
              <div key={label} className="p-10 border-r last:border-r-0 border-white/10 text-center">
                <div className="text-4xl font-black text-white mb-2">{num}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-[2px] bg-[#0066CC]" />
            <span className="text-[12px] font-black uppercase tracking-[0.45em] text-[#0066CC]">Patient Stories</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-5/12 flex flex-col justify-center">
              <div className="mb-8 text-[#003366] opacity-[0.06]">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.966z" /></svg>
              </div>
              <blockquote className="text-3xl md:text-4xl font-light text-[#003366] leading-tight mb-8">
                "From my very first consultation to the follow-up calls weeks after surgery, I felt truly <span className="font-black uppercase tracking-tighter">cared for</span> as a person — not just a patient."
              </blockquote>
              <div>
                <div className="text-base font-black uppercase tracking-widest text-[#003366]">Lady Charlotte A.</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">Cardiac Surgery · 2025</div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#0066CC"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>
            </div>

            <div className="lg:w-7/12 border-l border-[#003366]/10">
              {[
                { quote: "The robotic surgical team was extraordinary. I was walking within 24 hours of my procedure and back to work in two weeks.", name: "Mr. Thomas H.", dept: "Orthopaedic Surgery · 2025" },
                { quote: "Privacy, discretion, and professionalism at every stage. The level of care here truly sets a global benchmark.", name: "Executive Patient 704", dept: "Health Screening Programme" },
                { quote: "My oncology team felt like family. The integrated care pathway gave me the confidence I needed during my toughest year.", name: "Mrs. Catherine Bell", dept: "Cancer Institute · 2024" },
              ].map((t, i) => (
                <div key={i} className="p-10 border-b last:border-b-0 border-[#003366]/10 group hover:bg-[#003366] transition-all duration-500 cursor-default">
                  <p className="text-md text-gray-500 uppercase tracking-widest leading-loose mb-6 group-hover:text-white/70 transition-colors font-medium">"{t.quote}"</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="block text-[12px] font-black uppercase tracking-[0.25em] text-[#003366] group-hover:text-white transition-colors">{t.name}</span>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white/40 transition-colors">{t.dept}</span>
                    </div>
                    <div className="flex gap-0.5 opacity-20 group-hover:opacity-50 transition-opacity">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-[#f7f9fc] border-t border-gray-100">
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row min-h-[700px]">
          <div className="flex-1 p-12 lg:p-24 bg-[#003366] text-white flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[2px] bg-white/30" />
              <span className="text-[12px] font-black uppercase tracking-[0.45em] text-white/70">Patient Intake</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-10">
              Start Your<br /><span className="text-white/70">Journey</span><br />Today
            </h2>
            <p className="text-md text-white/70 font-medium leading-relaxed mb-10 max-w-sm uppercase tracking-wide">
              Complete the form and our patient coordinators will be in touch within two working hours to confirm your appointment.
            </p>
            <div className="space-y-6">
              {[["01", "Fill in your contact details and briefly describe your medical concern."], ["02", "We match you with the most appropriate consultant for your needs."], ["03", "Confirm your appointment — same-day slots are often available."]].map(([n, txt]) => (
                <div key={n} className="flex gap-5 items-start">
                  <span className="text-[12px] font-black text-white/70 mt-1 w-5 flex-shrink-0">{n}</span>
                  <p className="text-[14px] font-medium text-white/80 uppercase tracking-widest leading-relaxed">{txt}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="flex-1 p-12 lg:p-24 bg-white flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#003366] flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-[#003366] mb-3">Request Submitted</h3>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">Our care team will contact you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-3xl font-black uppercase tracking-tighter text-[#003366] mb-8">Request an Appointment</h3>
                {[
                  { name: "name", label: "Full Name", placeholder: "e.g. John Smith", type: "text" },
                  { name: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
                  { name: "phone", label: "Phone Number", placeholder: "+44 7700 000000", type: "tel" },
                ].map((f) => (
                  <div key={f.name} className="space-y-2">
                    <label className="text-[12px] font-black uppercase tracking-[0.3em] text-[#003366]/60">{f.label}</label>
                    <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange} required className="w-full p-5 bg-white border-b-2 border-gray-400 focus:border-[#003366] outline-none transition-all text-sm font-medium tracking-wider placeholder:text-gray-500" />
                  </div>
                ))}
                <div className="space-y-2">
                  <label className="text-[12px] font-black uppercase tracking-[0.3em] text-[#003366]/60">Medical Concern</label>
                  <textarea name="message" rows={4} placeholder="Briefly describe your symptoms or the type of appointment you require." value={form.message} onChange={handleChange} required className="w-full p-5 bg-white border-b-2 border-gray-400 focus:border-[#003366] outline-none transition-all text-sm font-medium tracking-wider placeholder:text-gray-500 resize-none" />
                </div>
                <button type="submit" className="group cursor-pointer w-full bg-[#003366] text-white p-6 font-black uppercase tracking-[0.4em] text-[13px] hover:bg-[#00254d] transition-all flex items-center justify-center gap-4">
                  Request Appointment
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-10 bg-white ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4 text-[#003366]">
              Your Health<br /><span className="text-gray-500 font-light">Deserves the Best.</span>
            </h2>
            <p className="text-xl text-gray-500 font-semibold max-w-lg leading-relaxed">
              Join over 150,000 patients who trust MedVantage for world-leading surgical, diagnostic, and preventative medical care in London.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[300px]">
            <button className="group cursor-pointer flex items-center justify-between bg-gray-50 border border-[#003366]/50 text-[#003366] px-8 py-6 font-bold uppercase tracking-[0.15em] text-[13px] hover:bg-gray-100 transition-all">
              <span>View Consultants</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 108 0 4 4 0 00-8 0z" /></svg>
            </button>

            <button className="group cursor-pointer flex items-center justify-between bg-[#003366] text-white px-8 py-6 font-black uppercase tracking-[0.15em] text-[13px] hover:bg-[#00254d] transition-all">
              <span>Book Appointment</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>

            <button className="group cursor-pointer flex items-center justify-between border-2 border-[#003366]/60 text-[#003366]/60 px-8 py-6 font-bold uppercase tracking-[0.15em] text-[13px] hover:border-[#003366] hover:text-[#003366] transition-all">
              <span>Emergency Line</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 13a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#002855] text-white pt-24 pb-10 ">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 pb-16 border-b border-white/40 gap-12">
            <div className="max-w-sm text-[#003366]">
              <div className="flex items-center gap-3 mb-5">

                <div>
                  <span className="block text-[18px] font-black uppercase tracking-[0.2em] text-white">MedVantage</span>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.3em] text-white/70">Clinical Centre · London</span>
                </div>
              </div>
              <p className="text-md text-white/80 font-light leading-relaxed mb-6">
                Providing world-leading clinical expertise with compassionate, patient-centred care since 1994.
              </p>
              <a href="tel:+442081234567" className="inline-flex items-center  gap-3 bg-white text-[#003366] px-6 py-4 font-black uppercase tracking-widest text-[12px] hover:bg-blue-50 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 13a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                24/7 Emergency Concierge
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { head: "Clinical Services", links: ["Cardiology", "Oncology", "Neurology", "Orthopaedics"] },
                { head: "Patient Portal", links: ["Test Results", "Medical Records", "Billing", "Appointments"] },
                { head: "For Clinicians", links: ["Submit Referral", "Clinical Research", "Grand Rounds", "Vacancies"] },
                { head: "Company", links: ["About Us", "Our Faculty", "News & Press", "Contact"] },
              ].map(({ head, links }) => (
                <div key={head}>
                  <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6 border-l-2 border-[#0066CC] pl-3">{head}</h4>
                  <ul className="space-y-3">
                    {links.map((l) => (
                      <li key={l}><a href="#" className="text-[12px] text-white/60 font-medium uppercase tracking-wider hover:text-white transition-colors">{l}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>



          <div className="flex flex-col md:flex-row justify-between items-center text-[12px] font-bold tracking-widest uppercase gap-4">
            <span className="text-white/60">© 2026 MedVantage Group Ltd. All Rights Reserved.</span>
            <div className="flex gap-8 text-white/60">
              {["Privacy Policy", "Terms of Use", "Cookie Policy", "Accessibility"].map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}