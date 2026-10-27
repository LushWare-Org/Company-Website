import { useState } from "react";
import { useLocation } from "react-router-dom";
import type { InquiryType, InquiryFormData } from "../services/inquiryService";
import {
  submitInquiry,
  validateEmail,
  validatePhone,
} from "../services/inquiryService";
import { getCode, getNames } from "country-list";
import { getRouteSeo } from "../seo/routes";
import Select from "react-select";

type InquiryFormProps = {
  inquiryType: InquiryType;
  topic: string;
  industry?: string;
  project?: string;
  ctaLabel?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  showCloseButton?: boolean;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  country: { value: string; label: string } | null;
  whatsappNumber: string;
  requirements?: string;
  teamMembers?: string;
  message?: string;
};

export default function InquiryForm({
  inquiryType,
  topic,
  industry,
  project,
  ctaLabel = "Submit",
  onSuccess,
  onClose,
  showCloseButton = false,
}: InquiryFormProps) {
  const { pathname } = useLocation();
  const countries = getNames();
  const countryOptions = countries.map((c) => ({ value: c, label: c }));

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    country: null,
    whatsappNumber: "",
    requirements: "",
    teamMembers: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (option: { value: string; label: string } | null) => {
    setFormData((prev) => ({ ...prev, country: option }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.whatsappNumber)) {
      setErrorMessage("Please enter a valid WhatsApp number");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (!formData.country) {
      setErrorMessage("Please select a country");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const inquiryData: InquiryFormData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        organization: formData.organization,
        country: formData.country.value,
        // Lead reporting: ISO country code, landing page and the page's target market.
        countryCode: getCode(formData.country.value),
        sourcePath: pathname,
        market: getRouteSeo(pathname).market,
        whatsapp: formData.whatsappNumber,
        inquiryType,
      };

      if (inquiryType === "solution") {
        inquiryData.industry = industry || topic;
        inquiryData.requirements = formData.requirements;
      } else if (inquiryType === "project") {
        inquiryData.project = project || topic;
        inquiryData.teamMembers = formData.teamMembers;
        inquiryData.message = formData.message;
      }

      const result = await submitInquiry(inquiryData);

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          organization: "",
          country: null,
          whatsappNumber: "",
          requirements: "",
          teamMembers: "",
          message: "",
        });
        if (onSuccess) {
          setTimeout(() => { onSuccess(); }, 2000);
        }
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to submit your inquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const heading =
    inquiryType === "project" ? "Project Base Application" : "Customer Requirement";

  const typeTag =
    inquiryType === "project" ? "Project Inquiry" : "Solution Inquiry";

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-100";

  const labelClass =
    "text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 group-focus-within:text-emerald-600 transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="w-full  bg-white font-sans">

      {/* ── Header ── */}
      <div className="flex items-start justify-between pb-7 mb-8 border-b border-slate-200">
        <div>
          {/* Eyebrow — matches page section labels */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-emerald-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-600">
              {typeTag}
            </span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 leading-none mb-2">
            {heading}
          </h3>
          <p className="text-[13px] text-slate-400">
            Topic: <span className="text-slate-600 font-medium">{topic}</span>
          </p>
        </div>

        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close form"
            className="group cursor-pointer relative flex-shrink-0 w-9 h-9 border border-slate-200 flex items-center justify-center overflow-hidden transition-colors duration-300 hover:border-slate-900 ml-4 mt-1"
          >
            <div className="absolute inset-0 bg-slate-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.85,0,0.15,1)]" />
            <svg
              className="relative z-10 w-[15px] h-[15px] text-slate-400 group-hover:text-white transition-colors duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Success Alert ── */}
      {submitStatus === "success" && (
        <div className="flex items-start gap-3 px-4 py-3 mb-6 bg-emerald-50 border-l-4 border-emerald-600 text-emerald-800 text-[13.5px] font-medium">
          <svg className="w-[17px] h-[17px] shrink-0 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Inquiry submitted successfully — we'll be in touch shortly.</span>
        </div>
      )}

      {/* ── Error Alert ── */}
      {submitStatus === "error" && (
        <div className="flex items-start gap-3 px-4 py-3 mb-6 bg-red-50 border-l-4 border-red-500 text-red-800 text-[13.5px] font-medium">
          <svg className="w-[17px] h-[17px] shrink-0 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

      {/* ── Row 1: Names ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>First Name</label>
          <input
            type="text" name="firstName" value={formData.firstName}
            onChange={handleInputChange} className={inputClass}
            placeholder="e.g. Alexander" disabled={isSubmitting} required
          />
        </div>
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>Last Name</label>
          <input
            type="text" name="lastName" value={formData.lastName}
            onChange={handleInputChange} className={inputClass}
            placeholder="e.g. Pierce" disabled={isSubmitting} required
          />
        </div>
      </div>

      {/* ── Row 2: Contact ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>Email Address</label>
          <input
            type="email" name="email" value={formData.email}
            onChange={handleInputChange} className={inputClass}
            placeholder="alex@organization.com" disabled={isSubmitting} required
          />
        </div>
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>Organization</label>
          <input
            type="text" name="organization" value={formData.organization}
            onChange={handleInputChange} className={inputClass}
            placeholder="Company or University" disabled={isSubmitting}
          />
        </div>
      </div>

      {/* ── Row 3: Region & Phone ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>Region</label>
          {/* Country select — COMPLETELY UNCHANGED */}
          <Select
            options={countryOptions}
            value={formData.country}
            onChange={handleCountryChange}
            isDisabled={isSubmitting}
            isClearable
            isSearchable
            className="react-select-container"
            classNamePrefix="react-select"
            styles={{
              control: (base) => ({
                ...base,
                borderBottom: "1px solid #e2e8f0",
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "0",
                padding: "8px 0",
                fontSize: "14px",
                cursor: "pointer",
                "&:hover": { borderBottomColor: "#10b981" },
                "&:focus-within": { borderBottomColor: "#10b981", boxShadow: "none" },
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#10B981" : "white",
                color: state.isFocused ? "white" : "#1f2937",
                cursor: "pointer",
              }),
              singleValue: (base) => ({ ...base, color: "#1f2937" }),
              input: (base) => ({ ...base, color: "#1f2937" }),
              placeholder: (base) => ({ ...base, color: "#d1d5db" }),
            }}
            placeholder="Select Country"
            required
          />
        </div>
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>WhatsApp Number</label>
          <input
            type="tel" name="whatsappNumber" value={formData.whatsappNumber}
            onChange={handleInputChange} className={inputClass}
            placeholder="+94 00 000 0000" disabled={isSubmitting} required
          />
        </div>
      </div>

      {/* ── Solution-specific ── */}
      {inquiryType === "solution" && (
        <>
          <div className="h-px bg-slate-200 my-5" />
          <div className="group flex flex-col gap-1.5 mb-5">
            <label className={labelClass}>Your Requirements</label>
            <textarea
              name="requirements"
              placeholder="Describe your software solution needs, challenges, and goals..."
              rows={4} value={formData.requirements} onChange={handleInputChange}
              className={`${inputClass} resize-none`}
              disabled={isSubmitting} required
            />
          </div>
        </>
      )}

      {/* ── Project-specific ── */}
      {inquiryType === "project" && (
        <>
          <div className="h-px bg-slate-200 my-5" />
          <div className="group flex flex-col gap-1.5 mb-5">
            <label className={labelClass}>Team Members</label>
            <input
              type="text" name="teamMembers"
              placeholder="Names of other team members (if any)"
              value={formData.teamMembers} onChange={handleInputChange}
              className={inputClass} disabled={isSubmitting}
            />
          </div>
          <div className="group flex flex-col gap-1.5 mb-5">
            <label className={labelClass}>Additional Details</label>
            <textarea
              name="message"
              placeholder="Tell us more about your project goals, scope, and expectations..."
              rows={4} value={formData.message} onChange={handleInputChange}
              className={`${inputClass} resize-none`}
              disabled={isSubmitting}
            />
          </div>
        </>
      )}

      {/* ── Submit Button ── */}
      <button
        type="submit"
        disabled={isSubmitting || submitStatus === "success"}
        className={`
          group relative w-full h-14 overflow-hidden mt-6
          flex items-center justify-center gap-3
          text-[10px] font-bold uppercase tracking-[0.2em]
          transition-shadow duration-300 active:scale-[0.99]
          disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
          ${submitStatus === "success"
            ? "bg-emerald-600 text-white"
            : "bg-slate-900 text-white hover:shadow-[0_16px_48px_rgba(5,150,105,0.2)]"
          }
        `}
      >
        {/* Emerald sweep — same animation as page's Apply Now button */}
        {submitStatus !== "success" && (
          <div className="absolute inset-0 bg-emerald-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.85,0,0.15,1)] z-0" />
        )}

        <div className="relative z-10 flex items-center gap-3">
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-[17px] h-[17px]" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" />
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing
            </>
          ) : submitStatus === "success" ? (
            <>
              <svg className="w-[17px] h-[17px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Application Received
            </>
          ) : (
            <>
              {ctaLabel}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </div>
      </button>

    </form>
  );
}