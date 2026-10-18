import { useState } from "react";
import { Link } from "react-router-dom";
import { getNames } from "country-list";
import Select from "react-select";
import type { InquiryFormData } from "../services/inquiryService";
import {
  submitInquiry,
  validateEmail,
  validatePhone,
} from "../services/inquiryService";

type CountryOption = {
  value: string;
  label: string;
};

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  country: CountryOption | null;
  whatsappNumber: string;
  requirements: string;
};

const countries = getNames();
const countryOptions: CountryOption[] = countries.map((c) => ({
  value: c,
  label: c,
}));

function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    country: null,
    whatsappNumber: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (option: CountryOption | null) => {
    setFormData((prev) => ({ ...prev, country: option }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitStatus("idle");
    setErrorMessage("");

    if (!formData.country) {
      setSubmitStatus("error");
      setErrorMessage("Please select a country.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.whatsappNumber)) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid WhatsApp number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: InquiryFormData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        country: formData.country.value,
        whatsapp: formData.whatsappNumber,
        inquiryType: "consultation",
        message: formData.requirements,
      };

      const result = await submitInquiry(payload);

      if (!result.success) {
        throw new Error(result.message);
      }

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: null,
        whatsappNumber: "",
        requirements: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to submit your inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass =
    "block mb-2 text-sm font-semibold tracking-tight text-on-surface/80 group-focus-within:text-primary transition-colors duration-300";
  const fieldClass =
    "w-full bg-[#f8fafc] border border-outline-variant/50 rounded-2xl px-6 py-4 text-on-surface placeholder:text-slate-400 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 ease-out";
  return (
    <main className="bg-[#ffffff] pt-24 md:pt-20 font-body text-on-surface">
      {/* HERO */}
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#ffffff] px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        {/* Modern Background Accents */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[250px] w-full max-w-7xl bg-gradient-to-tr from-primary/5 via-primary-container/10 to-transparent blur-3xl opacity-70 sm:h-[320px] md:h-[400px]" />
        <div className="mx-auto max-w-5xl text-center">
          {/* Refined Modern Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-wider text-on-secondary-container backdrop-blur-sm border border-secondary-container/30 shadow-sm transition-all duration-300 hover:bg-secondary-container sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
            <span className="text-balance">Partner with us</span>
          </span>

          {/* Stronger, Cleaner Typographic Hierarchy */}
          <h1 className="mt-6 font-headline text-5xl font-extrabold tracking-tight text-on-surface leading-[1.2] xs:text-4xl sm:mt-8 sm:text-5xl sm:leading-[1.15] md:text-6xl lg:text-7xl">
            <span className="block text-balance">Let's Scale Your</span>
            <span className="mt-1 block sm:mt-2">
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary-container bg-clip-text text-transparent drop-shadow-sm">
                Island Business
              </span>{" "}
              <span className="text-on-surface">Together</span>
            </span>
          </h1>

          {/* Optimized Description Reading Width */}
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant font-medium xs:max-w-sm sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
            Transform your Maldivian hospitality experience with digital
            solutions designed for the horizon.
          </p>

          {/* Premium Split-Action Controller */}
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

      <section
        id="contact-form"
        className="mx-auto mb-24 max-w-8xl px-6 -mt-48 md:mt-0 md:px-12 lg:px-24"
      >
        <div className="grid  grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Main Container */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-outline-variant/20 bg-white p-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] lg:col-span-8">
            {/* Interior Padding Box */}
            <div className="px-2 py-12 md:px-8 lg:px-12 md:py-16">
              {/* Form Header */}
              <div className="mb-14 px-2 max-w-xl">
                <h2 className="font-headline text-4xl font-black tracking-tight text-on-surface sm:text-5xl">
                  Start a project
                </h2>
                <p className="mt-4 text-lg font-light leading-relaxed text-on-surface-variant/80">
                  Fill out the form below and our team will get back to you
                  within
                  <span className="font-semibold text-on-surface">
                    {" "}
                    24 hours.
                  </span>
                </p>
              </div>

              {/* Success/Error Toasts - Refined with Icons */}
              {submitStatus === "success" && (
                <div className="mb-10 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 text-sm font-medium text-primary">
                  <span className="material-symbols-outlined text-xl">
                    check_circle
                  </span>
                  Inquiry submitted successfully. Our team will reach out
                  shortly.
                </div>
              )}

              {submitStatus === "error" && errorMessage && (
                <div className="mb-10 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-sm font-medium text-red-700">
                  <span className="material-symbols-outlined text-xl">
                    error
                  </span>
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Row 1: Name Pair */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="group relative">
                    <label className={labelClass}>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="e.g. John"
                      className={fieldClass}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div className="group relative">
                    <label className={labelClass}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="e.g. Doe"
                      className={fieldClass}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Email & Country */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="group relative">
                    <label className={labelClass}>Business Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      className={fieldClass}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div className="group relative">
                    <label className={labelClass}>Geography</label>
                    <div className="relative">
                      <Select
                        options={countryOptions}
                        value={formData.country}
                        onChange={handleCountryChange}
                        isDisabled={isSubmitting}
                        placeholder="Select Country"
                        className="react-select-container"
                        styles={{
                          control: (base, state) => ({
                            ...base,
                            border: "1px solid",
                            borderColor: state.isFocused
                              ? "#26AEBF"
                              : "rgba(202, 213, 226, 0.5)",
                            backgroundColor: state.isFocused
                              ? "#ffffff"
                              : "#f8fafc",
                            borderRadius: "1.25rem",
                            minHeight: "60px",
                            padding: "0 12px",
                            fontSize: "15px",
                            boxShadow: state.isFocused
                              ? "0 0 0 4px rgba(38,174,191,0.1)"
                              : "none",
                            transition: "all 300ms ease-out",
                            "&:hover": { borderColor: "#26AEBF" },
                          }),
                          // ... include other styles as you had them, but use these rounded/bg updates
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: WhatsApp */}
                <div className="group relative">
                  <label className={labelClass}>WhatsApp Number</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-lg">
                      call
                    </span>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder="+44 000 000 0000"
                      className={`${fieldClass} pl-14`}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>

                {/* Row 4: Requirement */}
                <div className="group relative">
                  <label className={labelClass}>Requirement</label>
                  <textarea
                    name="requirements"
                    rows={5}
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project goals..."
                    className={`${fieldClass} resize-none`}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {/* Action Button */}
                <div className="pt-6 flex justify-center md:justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex w-full md:w-auto items-center justify-center gap-4 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary-container px-6 sm:px-10 py-3 md:py-4 lg:py-3 text-sm sm:text-base font-black uppercase tracking-[0.1em] sm:tracking-[0.1em] text-white transition-all hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] active:scale-[0.98] disabled:opacity-50"
                  >
                    {/* Button Text */}
                    <span className="relative z-10">
                      {isSubmitting ? "Processing..." : "Send Requirements"}
                    </span>

                    {/* Icon */}
                    <div className="relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:translate-x-2">
                      <span className="material-symbols-outlined text-lg sm:text-xl">
                        arrow_forward
                      </span>
                    </div>

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full pointer-events-none"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-4">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 text-on-primary">
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
              <h3 className="relative z-10 mb-6 font-headline text-2xl font-bold">
                Direct Contact
              </h3>
              <div className="relative z-10 space-y-6">
                <a
                  href="https://wa.me/94716430053"
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
                data-alt="stylized map of maldives atolls with glowing turquoise ocean and dark land masses, high contrast editorial aesthetic"
                data-location="Maldives"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmo2fABHlQGgzC0A8gqLBqWNaQ1oX7FZSVU0aZoy-JWBqwyL3yhXaVuMTnPkbKnm2HsGpBHlRR_mTjAkuh4QY-8HwtCuBoq8y-7UcWmOyKnHLPGiUgH41rZuYe_G2oauqJ_9K0kp3pFwHAx7H0V_MxkWXj6jFCdiqZuB7arPpUJ_Iop7fzdC9ltEztcTTbNpliAqpqufPLXQY_A2d1noVM5SQxIOsjj39w1Zl-BrWuzE3PmjDKICkmXKreMZOVwFMNum5JgBqXhoCV"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <div>
                  <h4 className="text-white font-headline font-bold text-xl">
                    LushWare, Maldives
                  </h4>
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

      <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
          <div
            className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-cover bg-center bg-no-repeat p-8 sm:p-12 md:p-16 lg:p-20"
            style={{ backgroundImage: `url('/cta.jpg')` }}
          >
            {/* Dark Overlay */}
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

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-white">
                  Ready to start your <br className="hidden sm:block" />
                  digital journey?
                </h2>

                <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
                  Join the leading resorts and businesses in the Maldives who
                  trust Viduvaru for their digital transformation. We deliver
                  precision-engineered solutions for the modern enterprise.
                </p>

                {/* Buttons */}
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

              {/* Empty column to preserve image composition */}
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
