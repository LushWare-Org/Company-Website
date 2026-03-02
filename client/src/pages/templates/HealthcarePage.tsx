import React, { useState } from "react";

export default function HealthcarePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="font-sans text-gray-800">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-[100] border-b border-gray-100">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* 1. BRAND MONOGRAM */}
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="w-10 h-10 bg-[#001B3A] flex items-center justify-center transition-transform duration-500 group-hover:scale-95">
              <span className="text-white font-black text-xl italic tracking-tighter">
                G
              </span>
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-[#001B3A] leading-none">
                Global Health
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-gray-300 mt-1">
                London Estate
              </span>
            </div>
          </div>

          {/* 2. THE CATEGORY STRIP (Simple & Flat) */}
          <div className="hidden xl:flex items-center gap-8">
            {[
              "Oncology",
              "Surgery",
              "Diagnostics",
              "Faculty",
              "Research",
              "Portal",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] font-black uppercase tracking-[0.3em] text-[#001B3A]/40 hover:text-[#001B3A] transition-all relative py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#001B3A] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* 3. THE SINGLE ACTION HUB */}
          <div className="flex items-center gap-6">
            {/* Subtle Search Icon */}
            <button className="opacity-20 hover:opacity-100 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#001B3A"
                strokeWidth="3"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* The "Royal" Button: No Background, just Border and Text */}
            <button className="border-2 border-[#001B3A] text-[#001B3A] px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#001B3A] hover:text-white transition-all duration-500">
              Book Appointment
            </button>

            {/* Minimalist Menu (Mobile) */}
            <button className="xl:hidden flex flex-col gap-1.5">
              <div className="w-6 h-[2px] bg-[#001B3A]"></div>
              <div className="w-4 h-[2px] bg-[#001B3A]"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col bg-white text-[#001B3A] overflow-hidden">
        {/* MAIN CONTENT GRID */}
        <div className="flex-grow flex items-center justify-center py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch h-full w-full">
            {/* LEFT: THE SERVICE TERMINAL (Authority - 6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center px-10 md:px-20 py-20 lg:py-32">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#001B3A] mb-10">
                The Future <br />
                <span className="text-gray-400 font-normal ">
                  of Clinical Care
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-500 font-medium max-w-xl leading-relaxed mb-14">
                Access world-leading surgical, diagnostic, and preventative
                medical care provided by the UK's most distinguished consultant
                faculty.
              </p>

              {/* SEARCH & DIRECT ACTION */}
              <div className="relative max-w-2xl group shadow-xl">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none z-10">
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#001B3A] transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M21 21l-6-6m2-5a7 7-0 11-14 0 7 7-0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="SEARCH CONDITIONS, CONSULTANTS, OR THEATERS..."
                  className="w-full bg-gray-50 border-2 border-gray-100 group-hover:border-[#001B3A]/10 p-9 pl-20 rounded-none focus:outline-none focus:border-[#001B3A] transition-all text-[11px] font-black uppercase tracking-[0.3em] text-[#001B3A]"
                />
                <button className="absolute right-4 top-4 bottom-4 bg-[#001B3A] text-white px-10 rounded-none font-black text-[11px] uppercase tracking-[0.4em] hover:bg-[#002B52] transition-all">
                  Find Now
                </button>
              </div>
            </div>

            {/* RIGHT: THE CLINICAL VISUAL (Valid Nurse Image - 6 cols) */}
            <div className="lg:col-span-6 relative overflow-hidden h-[50vh] lg:h-auto border-l border-gray-100 bg-gray-50">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                alt="GHI Clinical Nurse Specialist attending a patient"
                className="w-full h-full object-cover grayscale-[0.2] opacity-90 transition-all duration-[3000ms] hover:scale-105"
              />
              {/* Subtle Blue Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B3A]/20 via-transparent to-transparent"></div>
              {/* Corner Identification */}
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm p-5 border border-[#001B3A]/10 shadow-lg">
                <span className="block text-[9px] font-black text-[#001B3A]/40 uppercase tracking-[0.3em] mb-1 italic">
                  Clinical Theater
                </span>
                <span className="block text-[11px] font-bold text-[#001B3A] uppercase tracking-[0.2em]">
                  SUITE_04 / Central_LON
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION DOCK: DIRECT ACCESS PORTALS */}
        <div className="w-full border-t border-gray-100 z-10">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3">
            <button className="flex items-center justify-between p-12 bg-[#001B3A] text-white hover:bg-[#002B52] transition-all group">
              <div className="text-left">
                <span className="block text-[9px] font-black uppercase tracking-[0.5em] opacity-40 mb-1">
                  In-Person/Video
                </span>
                <span className="block text-[15px] font-black uppercase tracking-[0.3em]">
                  Book Appointment
                </span>
              </div>
              <svg
                className="w-7 h-7 group-hover:translate-x-3 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button className="flex items-center justify-between p-12 bg-white text-[#001B3A] border-r border-gray-100 hover:bg-gray-50 transition-all group">
              <div className="text-left">
                <span className="block text-[9px] font-black uppercase tracking-[0.5em] text-gray-300 mb-1">
                  Faculty Search
                </span>
                <span className="block text-[15px] font-black uppercase tracking-[0.3em]">
                  View Consultants
                </span>
              </div>
              <svg
                className="w-7 h-7 opacity-20 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4z" />
              </svg>
            </button>

            <button className="flex items-center justify-between p-12 bg-gray-50/50 text-[#001B3A] hover:bg-white transition-all group">
              <div className="text-left">
                <span className="block text-[9px] font-black uppercase tracking-[0.5em] text-gray-300 mb-1">
                  Patient Portal
                </span>
                <span className="block text-[15px] font-black uppercase tracking-[0.3em]">
                  Medical Records
                </span>
              </div>
              <svg
                className="w-7 h-7 opacity-20 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 px-10 bg-white text-[#001B3A]  rounded-none">
        <div className="max-w-7xl mx-auto">
          {/* FULL-WIDTH INTEGRATED HEADER */}
          <div className="w-full border-x border-t border-[#001B3A]/10 p-24 text-center bg-gray-50/20">
            <div className="flex justify-center items-center gap-10 mb-12">
              <span className="text-[10px] font-black uppercase tracking-[1em] text-[#001B3A]/30">
                Division Registry
              </span>
            </div>

            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.75] mb-14">
              Medical <br />
              <span className="text-gray-400 font-normal ">Infrastructure</span>
            </h2>

            <div className="max-w-5xl mx-auto border-t-2 border-[#001B3A] pt-12">
              <p className="text-[14px] font-bold text-gray-400 uppercase tracking-[0.4em] leading-loose">
                A definitive record of{" "}
                <span className="text-[#001B3A]">clinical theaters</span> and
                <span className="text-[#001B3A]"> diagnostic suites</span>{" "}
                authorized for 2026 operations.
              </p>
            </div>
          </div>

          {/* THE VERTICAL MATRIX GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-x border-b border-[#001B3A]/10">
            {[
              {
                title: "Internal Medicine",
                code: "TYPE_ALPHA",
                img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Pediatric Unit",
                code: "TYPE_BETA",
                img: "https://images.unsplash.com/photo-1581594658553-359bc97dca7a?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Dental Theater",
                code: "TYPE_GAMMA",
                img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Genomic Lab",
                code: "TYPE_DELTA",
                img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative flex flex-col border-r last:border-r-0 border-[#001B3A]/10 bg-white"
              >
                {/* PERMANENT IMAGE EXHIBIT */}
                <div className="relative aspect-[3/4] overflow-hidden   transition-all duration-[1200ms]">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms]"
                  />
                  {/* Navy Lens Overlay */}
                  <div className="absolute inset-0 bg-[#001B3A]/5 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>

                {/* TECHNICAL DATA PANEL */}
                <div className="p-10 border-t border-[#001B3A]/10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[9px] font-black text-[#001B3A]/20 uppercase tracking-[0.3em]">
                      {service.code}
                    </span>
                    <div className="w-4 h-4 border border-[#001B3A]/10 flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#001B3A]/20 group-hover:bg-[#001B3A] transition-colors"></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">
                    {service.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    <span className="text-[8px] font-black text-[#001B3A] uppercase tracking-[0.4em]">
                      Status: Verified
                    </span>
                    <div className="flex-grow h-[1px] bg-[#001B3A]/5"></div>
                  </div>
                </div>

                {/* INTERACTIVE HOVER SLIDE */}
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-[#001B3A] transition-all duration-500 flex flex-col justify-center items-center overflow-hidden z-20">
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-4">
                    Access Division
                  </span>
                  <div className="w-12 h-[1px] bg-white/30"></div>
                </div>
              </div>
            ))}
          </div>

          {/* FINAL FOOTER BORDER - THE ROYAL CAPSTONE */}
          <div className="w-full h-[12px] bg-[#001B3A]"></div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="relative py-32 px-10 bg-white text-[#001B3A] ">
        <div className="max-w-7xl mx-auto">
          {/* INSTITUTIONAL HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            {/* PRIMARY TITLES */}
            <div className="text-left group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#001B3A]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#001B3A]/40 italic">
                  GMC Registered Specialists
                </span>
              </div>

              <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.75] mb-0">
                Senior <br />
                <span className="text-gray-100 font-normal transition-colors duration-700 group-hover:text-[#001B3A]/10">
                  Consultants
                </span>
              </h2>
            </div>

            {/* TECHNICAL BRIEF */}
            <div className="md:text-right max-w-lg">
              <div className="border-r-[3px] border-[#001B3A] pr-8 py-2">
                <p className="text-[14px] font-bold text-gray-400 uppercase tracking-[0.3em] leading-loose">
                  Access to the UK's most distinguished medical minds,
                  specializing in{" "}
                  <span className="text-[#001B3A]">complex surgical</span> and
                  <span className="text-[#001B3A]">
                    {" "}
                    diagnostic pathways
                  </span>{" "}
                  across our London estate.
                </p>
              </div>

              {/* Registry Counter - Subtle Detail */}
              <div className="mt-6 flex justify-end items-center gap-3">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#001B3A]/20">
                  Active Registry
                </span>
                <span className="text-[10px] font-black text-[#001B3A]">
                  2026_VOL.I
                </span>
              </div>
            </div>
          </div>

          {/* THE CONSULTANT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#001B3A]/10">
            {[
              {
                name: "Prof. Alistair Vaughn",
                role: "Chief of Neurosurgery",
                id: "REG_0449",
              },
              {
                name: "Dr. Elena Moretti",
                role: "Oncology Specialist",
                id: "REG_0912",
              },
              {
                name: "Sir Richard Thorne",
                role: "Cardiac Consultant",
                id: "REG_0773",
              },
            ].map((doc, index) => (
              <div
                key={index}
                className="group relative border-r last:border-r-0 border-[#001B3A]/10 bg-white overflow-hidden"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? "1612349317150-e413f6a5b16d" : index === 1 ? "1594824476967-48c8b964273f" : "1537368910025-700350fe46c7"}?auto=format&fit=crop&q=80&w=800`}
                    alt={doc.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 opacity-90"
                  />
                  {/* Overlay Tag */}
                  <div className="absolute bottom-0 left-0 bg-[#001B3A] text-white px-6 py-2 text-[8px] font-black uppercase tracking-[0.4em]">
                    {doc.id}
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-10 transition-colors duration-500 group-hover:bg-[#001B3A]">
                  <h3 className="text-xl font-bold uppercase tracking-tighter mb-2 group-hover:text-white transition-colors duration-500">
                    {doc.name}
                  </h3>
                  <p className="text-[10px] font-black text-[#001B3A]/40 uppercase tracking-[0.3em] group-hover:text-white/60 transition-colors duration-500">
                    {doc.role}
                  </p>

                  {/* Hover Reveal: Technical Detail */}
                  <div className="mt-8 pt-8 border-t border-[#001B3A]/10 group-hover:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mb-4">
                      Focus: Complex Clinical Interventions
                    </span>
                    <button className="text-[9px] font-black text-white uppercase tracking-[0.5em] border-b border-white/30 pb-1 hover:border-white transition-all">
                      View Dossier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="relative py-32 px-10 bg-white text-[#001B3A] ">
        <div className="max-w-7xl mx-auto">
          {/* INSTITUTIONAL TITLE BAR */}
          <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 border-b border-[#001B3A]/10 pb-12">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
              The <span className="text-gray-200">Estate</span>
            </h2>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#001B3A]/40 max-w-xs leading-relaxed">
              Registry of specialized clinical environments and surgical theater
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* 01. THE PRIMARY HUB (7/12 Width) */}
            <div className="lg:col-span-7 group">
              <div className="relative aspect-[16/9] overflow-hidden border border-[#001B3A]/5">
                <img
                  src="http://googleusercontent.com/image_collection/image_retrieval/15642044501829346940_0"
                  alt="Institutional Reception"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-[#001B3A] text-white px-4 py-2 text-[9px] font-black uppercase tracking-[0.3em]">
                  Grand Lobby / Reception
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">
                    Patient Arrival Concierge
                  </h3>
                  <p className="text-[11px] font-medium text-gray-500 uppercase tracking-[0.2em] leading-relaxed">
                    Five-star clinical environment designed for complete patient
                    discretion and streamlined admission protocols.
                  </p>
                </div>
                <span className="text-[10px] font-black opacity-20 italic">
                  REF: ESTATE_01
                </span>
              </div>
            </div>

            {/* 02. SUPPORTING FACILITIES (5/12 Width) */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              {/* SURGICAL SUITE */}
              <div className="group">
                <div className="relative aspect-video overflow-hidden border border-[#001B3A]/5">
                  <img
                    src="http://googleusercontent.com/image_collection/image_retrieval/17719907336717547318_1"
                    alt="Surgical Theater"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#001B3A] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em]">
                    Robotic Surgical Theater
                  </h4>
                  <div className="w-12 h-[1px] bg-[#001B3A]/20"></div>
                </div>
              </div>

              {/* ADVANCED IMAGING */}
              <div className="group">
                <div className="relative aspect-video overflow-hidden border border-[#001B3A]/5">
                  <img
                    src="http://googleusercontent.com/image_collection/image_retrieval/10275412229951004303_2"
                    alt="MRI Suite"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#001B3A] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em]">
                    High-Res Neuro Imaging
                  </h4>
                  <div className="w-12 h-[1px] bg-[#001B3A]/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-20 px-10 bg-[#001B3A] text-white border-t-[12px] border-white overflow-hidden">
        {/* Institutional Header - Compressed */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-white/20"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/70 ">
              Quality Assurance Protocol
            </span>
            <div className="w-8 h-[1px] bg-white/20"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
            Clinical{" "}
            <span className="text-white/80  font-normal">Benchmarks</span>
          </h2>
        </div>

        {/* THE INTERACTIVE VALUE GRID - LOWER HEIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 max-w-7xl mx-auto border border-white/10">
          {[
            {
              title: "Senior Staff",
              desc: "Exclusively GMC-registered specialists with 15+ years experience.",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 11l-4 4 4 4" />
                </svg>
              ),
            },
            {
              title: "Diagnostics",
              desc: "Full-scale MRI, CT, and pathology results within 24 hours.",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              ),
            },
            {
              title: "Facility",
              desc: "Operating theaters equipped with robotic-assisted surgical arrays.",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 1v22M5 12h14M18 12l-4-4m4 4l-4 4" />
                </svg>
              ),
            },
            {
              title: "Aftercare",
              desc: "Bespoke nursing and recovery plans tailored to your lifestyle.",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-transparent border-r border-b md:border-b-0 last:border-r-0 border-white/10 hover:bg-white transition-all duration-500 cursor-default"
            >
              <div className="mb-6 text-white group-hover:text-[#001B3A] transition-colors duration-500 opacity-40 group-hover:opacity-100">
                {item.icon}
              </div>

              <h3 className="font-black text-[10px] uppercase tracking-[0.3em] mb-4 group-hover:text-[#001B3A] transition-colors duration-500">
                {item.title}
              </h3>

              <p className="text-[11px] font-medium text-white/40 leading-relaxed uppercase tracking-widest group-hover:text-[#001B3A]/60 transition-colors duration-500">
                {item.desc}
              </p>

              <div className="mt-8 w-0 h-[2px] bg-[#001B3A] group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 px-10 bg-white text-[#001B3A] ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* LEFT SIDE: THE FEATURED CASE (Static for Balance) */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[2px] bg-[#001B3A]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#001B3A]/40">
                Featured Case Study
              </span>
            </div>

            <div className="relative mb-12">
              <svg
                className="absolute -top-10 -left-10 opacity-[0.05] text-[#001B3A]"
                width="80"
                height="80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.9124 14 13.017 13.1046 13.017 12V5C13.017 3.89543 13.9124 3 15.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V12C23.017 15.866 19.883 19 16.017 19H14.017V21ZM1.017 21V18C1.017 16.8954 1.91243 16 3.017 16H6.017V14H2.017C0.912431 14 0.017 13.1046 0.017 12V5C0.017 3.89543 0.912431 3 2.017 3H8.017C9.12157 3 10.017 3.89543 10.017 5V12C10.017 15.866 6.883 19 3.017 19H1.017V21Z" />
              </svg>
              <h3 className="text-4xl md:text-5xl font-light  leading-tight text-[#001B3A]">
                "The diagnostic speed at BritHealth is unparalleled. I went from
                consultation to treatment in under 48 hours. A truly{" "}
                <span className="font-black uppercase not-italic tracking-tighter">
                  Elite experience.
                </span>
                "
              </h3>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-black uppercase tracking-widest">
                Lord Alistair P.
              </h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
                Harley Street Neurology Dept.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: THE CLINICAL FEED (Interactive Hover) */}
          <div className="lg:w-1/2 space-y-0 border-l border-[#001B3A]/10">
            {/* TESTIMONIAL 02 */}
            <div className="p-12 border-b border-[#001B3A]/10 group hover:bg-[#001B3A] transition-all duration-500 cursor-default">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest leading-loose mb-6 group-hover:text-white/80 transition-colors">
                "World-leading surgical team. The post-operative care was
                managed with absolute precision and human warmth."
              </p>
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                  Dr. Sarah Jenkins
                </span>
                <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest group-hover:text-white/40 transition-colors">
                  Surgical Unit • 2026
                </span>
              </div>
            </div>

            {/* TESTIMONIAL 03 */}
            <div className="p-12 border-b border-[#001B3A]/10 group hover:bg-[#001B3A] transition-all duration-500 cursor-default">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest leading-loose mb-6 group-hover:text-white/80 transition-colors">
                "Privacy and discretion were my primary concerns. BritHealth
                exceeded all expectations in a secure clinical environment."
              </p>
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                  Executive Patient 704
                </span>
                <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest group-hover:text-white/40 transition-colors">
                  Private Screening
                </span>
              </div>
            </div>

            {/* TESTIMONIAL 04 */}
            <div className="p-12 group hover:bg-[#001B3A] transition-all duration-500 cursor-default">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest leading-loose mb-6 group-hover:text-white/80 transition-colors">
                "The integrated approach to oncology care provides immense peace
                of mind during a difficult journey."
              </p>
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                  Mrs. Catherine Bell
                </span>
                <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest group-hover:text-white/40 transition-colors">
                  Oncology Institute
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT / CONTACT */}
      <section className="relative bg-white text-[#001B3A] ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[700px]">
          {/* LEFT SIDE: CLINICAL GUIDANCE */}
          <div className="flex-1 p-12 lg:p-24 bg-gray-50 flex flex-col justify-center border-r border-gray-200">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[2px] bg-[#001B3A]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#001B3A]/40 text-left">
                Internal Registry Protocol
              </span>
            </div>

            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] mb-10 text-left">
              Patient <br />
              <span className="text-gray-300">Intake</span> <br />
              Portal
            </h2>

            <div className="space-y-8 text-left max-w-sm">
              <div className="flex gap-6 items-start">
                <span className="text-xs font-black opacity-20 mt-1">01</span>
                <p className="text-sm font-medium leading-relaxed text-gray-500 uppercase tracking-widest">
                  Enter your official identification details for our secure
                  verification.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-xs font-black opacity-20 mt-1">02</span>
                <p className="text-sm font-medium leading-relaxed text-gray-500 uppercase tracking-widest">
                  Briefly describe your medical requirements for consultant
                  matching.
                </p>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-gray-200 flex items-center gap-4 opacity-30">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                End-to-End Encryption Active
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: THE SECURE ENTRY FORM */}
          <div className="flex-1 p-12 lg:p-24 flex flex-col justify-center bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                  Legal Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="SURNAME, FIRST NAME"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-6 bg-white border-b-2 border-[#001B3A]/10 rounded-none focus:outline-none focus:border-[#001B3A] transition-all text-sm font-bold tracking-widest placeholder:text-gray-200"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                  Contact Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="OFFICIAL@DOMAIN.COM"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-6 bg-white border-b-2 border-[#001B3A]/10 rounded-none focus:outline-none focus:border-[#001B3A] transition-all text-sm font-bold tracking-widest placeholder:text-gray-200"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                  Medical Enquiry
                </label>
                <textarea
                  name="message"
                  placeholder="SPECIFY SYMPTOMS OR CLINICAL CENTER"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full p-6 bg-white border-b-2 border-[#001B3A]/10 rounded-none focus:outline-none focus:border-[#001B3A] transition-all text-sm font-bold tracking-widest placeholder:text-gray-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full bg-[#001B3A] text-white font-black p-8 rounded-none uppercase tracking-[0.4em] text-xs hover:bg-[#002B52] transition-all overflow-hidden mt-8"
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  Initialize Request
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="group-hover:translate-x-2 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA SECTION WITH 3 BUTTONS */}
      <section className="relative py-32 px-10 bg-white text-[#001B3A] border-t-[12px] border-[#001B3A] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* TEXT CONTENT */}
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-none mb-6 text-[#001B3A]">
              Clinical Excellence <br />
              <span className="text-gray-500  font-light">
                Without Compromise
              </span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-lg leading-relaxed">
              Join over 150,000 patients who trust BritHealth for world-leading
              surgical, diagnostic, and preventative medical care.
            </p>
          </div>

          {/* THE 3-BUTTON ACTION GRID */}
          <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[320px]">
            {/* Primary Action - Now Navy with White Text */}
            <button className="group flex items-center justify-between bg-[#001B3A] text-white px-8 py-6 rounded-none font-black uppercase tracking-[0.2em] text-sm hover:bg-[#002B52] transition-all shadow-2xl">
              <span>Book Appointment</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            {/* Secondary Action - Light Blue-Gray Tint */}
            <button className="group flex items-center justify-between bg-gray-50 border border-[#001B3A]/10 text-[#001B3A] px-8 py-6 rounded-none font-bold uppercase tracking-[0.2em] text-sm hover:bg-gray-100 transition-all">
              <span>View Consultants</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </button>

            {/* Tertiary Action - Outlined Navy */}
            <button className="group flex items-center justify-between border-2 border-[#001B3A]/20 text-[#001B3A]/60 px-8 py-6 rounded-none font-bold uppercase tracking-[0.2em] text-sm hover:border-[#001B3A] hover:text-[#001B3A] transition-all">
              <span>Medical Records</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001B3A] text-white pt-24 pb-12 border-t-[12px] border-white">
        <div className="max-w-7xl mx-auto px-10">
          {/* 1. TOP SECTION: THE CONCIERGE BAR */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-24 pb-16 border-b border-white/10 gap-10">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold tracking-tighter mb-4 text-white uppercase">
                BritHealth
              </h2>
              <p className="text-blue-100/50 text-lg max-w-lg font-light">
                Providing world-leading clinical expertise and 24-hour private
                patient support.
              </p>
            </div>

            <div className="flex flex-col text-[#001B3A]  sm:flex-row gap-4">
              <a
                href="tel:+442079460000"
                className="flex items-center gap-4 bg-white text-[#001B3A] px-10 py-5 rounded-none font-black uppercase tracking-widest hover:bg-blue-50 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Emergency Concierge
              </a>
            </div>
          </div>

          {/* 2. MIDDLE SECTION: NAVIGATION GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-left">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8 border-l-4 border-white pl-4">
                Clinical Centers
              </h4>
              <ul className="space-y-4 text-sm font-medium text-blue-100/60 uppercase tracking-wider">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Heart & Vascular
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Neurology Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cancer Institute
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Orthopaedic Hub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8 border-l-4 border-white pl-4">
                Patient Portal
              </h4>
              <ul className="space-y-4 text-sm font-medium text-blue-100/60 uppercase tracking-wider">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    View Test Results
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Request Records
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Billing & Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Quality Reports
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8 border-l-4 border-white pl-4">
                For Doctors
              </h4>
              <ul className="space-y-4 text-sm font-medium text-blue-100/60 uppercase tracking-wider">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Submit Referral
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Clinical Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Grand Rounds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career Openings
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8 border-l-4 border-white pl-4">
                Headquarters
              </h4>
              <address className="not-italic text-sm font-medium text-blue-100/60 leading-loose uppercase tracking-tighter">
                1-10 Harley Street
                <br />
                London, Marylebone
                <br />
                W1G 9QL, UK
                <br />
                <span className="block mt-6 text-white font-black text-lg">
                  +44 (0) 20 8123 4567
                </span>
              </address>
            </div>
          </div>

          {/* 3. BOTTOM BAR: COMPLIANCE & SOCIAL */}
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest uppercase">
            <div className="flex gap-10 mb-8 md:mb-0 grayscale opacity-40">
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                CQC Inspected
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                NHS Accredited
              </div>
            </div>

            <div className="flex gap-8 text-blue-100/30">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Compliance
              </a>
              <a href="#" className="hover:text-white">
                Accessibility
              </a>
              <span>© 2026 BritHealth Group</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
