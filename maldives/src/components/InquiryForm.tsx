import { useState } from "react";
import { useLocation } from "react-router-dom";
import type { InquiryFormData } from "../services/inquiryService";
import {
  submitInquiry,
  validateEmail,
  validatePhone,
} from "../services/inquiryService";
import { getCode, getNames } from "country-list";
import Select from "react-select";

type InquiryFormProps = {
  topic: string;
  ctaLabel?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  showCloseButton?: boolean;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  country: { value: string; label: string } | null;
  whatsappNumber: string;
  requirements: string;
};

export default function InquiryForm({
  topic,
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

  const handleCountryChange = (
    option: { value: string; label: string } | null,
  ) => {
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
        country: formData.country.value,
        // Lead reporting (shared admin dashboard): ISO country code, landing page, site.
        countryCode: getCode(formData.country.value),
        sourcePath: pathname,
        market: "maldives",
        whatsapp: formData.whatsappNumber,
        inquiryType: "solution",
        industry: topic,
        requirements: formData.requirements,
      };

      const result = await submitInquiry(inquiryData);

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

      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 1200);
      }
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

  const inputClass =
    "w-full bg-surface border rounded-2xl border-outline-variant px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-container-low";

  const labelClass =
    "text-[10px] font-bold  uppercase tracking-[0.18em] text-on-surface-variant group-focus-within:text-primary transition-colors duration-200";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-xl  p-6 font-sans md:p-8"
    >
      <div className="mb-8 flex items-start justify-between border-b border-outline-variant pb-7">
        <div>
          <h3 className="mb-2  text-3xl font-normal leading-none tracking-tight text-on-surface sm:text-4xl">
            Customer Requirement
          </h3>
          <p className="text-[13px] text-on-surface-variant">
            Topic: <span className="font-medium text-on-surface">{topic}</span>
          </p>
        </div>

        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close form"
            className="group relative ml-4 mt-1 flex h-9 w-9 rounded-2xl flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden border border-outline-variant transition-colors duration-300 hover:border-primary"
          >
            <div className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:translate-x-0" />
            <svg
              className="relative z-10 h-[15px] w-[15px] text-on-surface-variant transition-colors duration-300 group-hover:text-on-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 flex items-start gap-3 border-l-4 border-primary bg-primary-container/25 px-4 py-3 text-[13.5px] font-medium text-on-surface">
          <span>
            Inquiry submitted successfully - we'll be in touch shortly.
          </span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 flex items-start gap-3 border-l-4 border-error bg-error-container/25 px-4 py-3 text-[13.5px] font-medium text-on-surface">
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={inputClass}
            placeholder="e.g. Alexander"
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={inputClass}
            placeholder="e.g. Pierce"
            disabled={isSubmitting}
            required
          />
        </div>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={inputClass}
            placeholder="alex@organization.com"
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>WhatsApp Number</label>
          <input
            type="tel"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleInputChange}
            className={inputClass}
            placeholder="+94 00 000 0000"
            disabled={isSubmitting}
            required
          />
        </div>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-5">
        <div className="group flex flex-col gap-1.5">
          <label className={labelClass}>Country</label>
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
              control: (base, state) => ({
                ...base,
                borderBottom: "1px solid #cbd5e1",
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "0",
                padding: "8px 0",
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "none",
                borderBottomColor: state.isFocused ? "#26AEBF" : "#cbd5e1",
                "&:hover": { borderBottomColor: "#26AEBF" },
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#26AEBF" : "white",
                color: state.isFocused ? "white" : "#1f2937",
                cursor: "pointer",
              }),
              singleValue: (base) => ({
                ...base,
                color: "#1f2937",
              }),
              input: (base) => ({
                ...base,
                color: "#1f2937",
              }),
              placeholder: (base) => ({
                ...base,
                color: "#9ca3af",
              }),
            }}
            placeholder="Select Country"
            required
          />
        </div>
      </div>

      <div className="my-5 h-px bg-outline-variant" />
      <div className="mb-5 group flex flex-col gap-1.5">
        <label className={labelClass}>Your Requirements</label>
        <textarea
          name="requirements"
          placeholder="Describe your software solution needs, challenges, and goals..."
          rows={4}
          value={formData.requirements}
          onChange={handleInputChange}
          className={`${inputClass} resize-none`}
          disabled={isSubmitting}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || submitStatus === "success"}
        className={`
          group relative mt-6 flex h-14 w-full rounded-2xl cursor-pointer items-center justify-center gap-3 overflow-hidden
          text-[10px] font-bold uppercase tracking-[0.2em]
          transition-shadow duration-300 active:scale-[0.99]
          disabled:cursor-not-allowed disabled:opacity-50
          ${
            submitStatus === "success"
              ? "bg-primary text-on-primary"
              : "bg-gradient-to-br from-primary to-primary-container text-on-primary hover:shadow-[0_16px_48px_rgba(0,104,116,0.2)]"
          }
        `}
      >
        <div className="relative z-10 flex items-center gap-3">
          {isSubmitting
            ? "Processing"
            : submitStatus === "success"
              ? "Application Received"
              : ctaLabel}
        </div>
      </button>
    </form>
  );
}
