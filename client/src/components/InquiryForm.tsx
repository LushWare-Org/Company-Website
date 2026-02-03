import { useState } from "react";
import type { InquiryType, InquiryFormData } from "../services/inquiryService";
import { submitInquiry, validateEmail, validatePhone } from "../services/inquiryService";
import { getNames } from "country-list";
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
  // Solution fields
  requirements?: string;
  // Project fields
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
  showCloseButton = false 
}: InquiryFormProps) {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (option: { value: string; label: string } | null) => {
    setFormData(prev => ({
      ...prev,
      country: option,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Validation
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
      // Build inquiry data based on type
      const inquiryData: InquiryFormData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        organization: formData.organization,
        country: formData.country.value,
        whatsapp: formData.whatsappNumber,
        inquiryType,
      };

      // Add type-specific fields
      if (inquiryType === 'solution') {
        inquiryData.industry = industry || topic;
        inquiryData.requirements = formData.requirements;
      } else if (inquiryType === 'project') {
        inquiryData.project = project || topic;
        inquiryData.teamMembers = formData.teamMembers;
        inquiryData.message = formData.message;
      }

      const result = await submitInquiry(inquiryData);

      if (result.success) {
        setSubmitStatus("success");
        
        // Reset form after successful submission
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

        // Call onSuccess callback after a brief delay to show success message
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // Shared styles for inputs to keep code clean
  const heading = inquiryType === "project" ? "Project Base Application" : "Customer Requirement";

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white w-full px-6 md:px-8 lg:px-12">
      {/* Header with optional close button */}
        <div className="relative pb-2">
          <div className="flex justify-between items-start">
            <div>

              <h3 className="text-4xl font-bold tracking-tighter text-slate-900 leading-none">
                {heading}
              </h3>
              <p className="mt-2 text-md text-slate-500 font-medium">Topic: <span className="text-slate-900">{topic}</span></p>
            </div>
            
            {showCloseButton && (
              <button
                type="button"
                onClick={handleClose}
                className="group relative h-10 w-10 flex items-center justify-center overflow-hidden rounded-full border border-slate-400 transition-colors duration-300 hover:border-red-600"
                aria-label="Close form"
              >
                {/* Red Background - Slides from left to right */}
                <div className="absolute inset-0 z-0 -translate-x-full bg-red-600 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                
                {/* Close Icon */}
                <svg 
                  className="relative z-10 w-5 h-5 text-slate-500 transition-all duration-300 group-hover:text-white group-hover:rotate-90" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            )}
          </div>
        </div>


      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg">
          <div className="flex items-center gap-2 text-emerald-700">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-medium">Inquiry submitted successfully! We'll get back to you soon.</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="p-2 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2 text-red-700">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p className="font-medium">{errorMessage}</p>
          </div>
        </div>
      )}

{/* Row 1: Names */}
    <div className="grid grid-cols-2 gap-6">
      <div className="group space-y-1">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-emerald-600 transition-colors">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full border-b border-slate-200 bg-transparent py-2 text-slate-900 placeholder:text-slate-300 focus:border-emerald-600 focus:outline-none transition-all"
          placeholder="e.g. Alexander"
          disabled={isSubmitting}
          required
        />
      </div>
      <div className="group space-y-1">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-emerald-600 transition-colors">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="w-full border-b border-slate-200 bg-transparent py-2 text-slate-900 placeholder:text-slate-300 focus:border-emerald-600 focus:outline-none transition-all"
          placeholder="e.g. Pierce"
          disabled={isSubmitting}
          required
        />
      </div>
    </div>

{/* Row 2: Contact Info */}
    <div className="grid grid-cols-2 gap-6">
      <div className="group space-y-1">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full border-b border-slate-200 bg-transparent py-2 text-slate-900 placeholder:text-slate-300 focus:border-emerald-600 focus:outline-none transition-all"
          placeholder="alex@organization.com"
          disabled={isSubmitting}
          required
        />
      </div>
      <div className="group space-y-1">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">Organization</label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          className="w-full border-b border-slate-200 bg-transparent py-2 text-slate-900 placeholder:text-slate-300 focus:border-emerald-600 focus:outline-none transition-all"
          placeholder="Company or Uni"
          disabled={isSubmitting}
        />
      </div>
    </div>

{/* Row 3: Location & Phone */}
    <div className="grid grid-cols-2 gap-6">
      <div className="group space-y-1">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">Region</label>
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
              "&:hover": {
                borderBottomColor: "#10b981",
              },
              "&:focus-within": {
                borderBottomColor: "#10b981",
                boxShadow: "none",
              },
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#10B981" : "white",
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
              color: "#d1d5db",
            }),
          }}
          placeholder="Select Country"
          required
        />
      </div>
      <div className="group space-y-1">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">WhatsApp Number</label>
        <input
          type="tel"
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={handleInputChange}
          className="w-full border-b border-slate-200 bg-transparent py-2 text-slate-900 placeholder:text-slate-300 focus:border-emerald-600 focus:outline-none transition-all"
          placeholder="+94 00 000 0000"
          disabled={isSubmitting}
          required
        />
      </div>
    </div>

      {/* Solution-specific fields */}
      {inquiryType === 'solution' && (
        <div className="group space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">Your Requirements</label>
          <textarea
            name="requirements"
            placeholder="Describe your software solution needs, challenges, and goals..."
            rows={4}
            value={formData.requirements}
            onChange={handleInputChange}
            className="w-full border-b border-slate-200 bg-transparent py-2 text-slate-900 placeholder:text-slate-300 focus:border-emerald-600 focus:outline-none transition-all resize-none"
            disabled={isSubmitting}
            required
          />
        </div>
      )}

      {/* Project-specific fields */}
      {inquiryType === 'project' && (
        <>
          <div className="group space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">Team Members</label>
            <input
              type="text"
              name="teamMembers"
              placeholder="Names of other team members (if any)"
              value={formData.teamMembers}
              onChange={handleInputChange}
              className="w-full border-b border-slate-200 bg-transparent py-2 text-slate-900 placeholder:text-slate-300 focus:border-emerald-600 focus:outline-none transition-all"
              disabled={isSubmitting}
            />
          </div>
          <div className="group space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-focus-within:text-emerald-600 transition-colors">Additional Details</label>
            <textarea
              name="message"
              placeholder="Tell us more about your project goals, scope, and expectations..."
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border-b border-slate-200 bg-transparent py-2 text-slate-900 placeholder:text-slate-300 focus:border-emerald-600 focus:outline-none transition-all resize-none"
              disabled={isSubmitting}
            />
          </div>
        </>
      )}


          <button
            type="submit"
            disabled={isSubmitting || submitStatus === "success"}
            className="group relative w-full overflow-hidden h-16 bg-slate-900 text-white rounded-xl transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] active:scale-[0.99] disabled:opacity-50"
          >
            {/* Emerald Sweep Layer */}
            <div className={`absolute inset-0 bg-emerald-600 -translate-x-full transition-transform duration-500 ease-out ${!isSubmitting && submitStatus !== "success" ? 'group-hover:translate-x-0' : ''}`} />
            
            <div className="relative z-10 flex items-center justify-center gap-4">
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-[13px] font-black uppercase tracking-[0.2em]">Processing...</span>
                </div>
              ) : submitStatus === "success" ? (
                <span className="text-[13px] font-black uppercase tracking-[0.2em]">Application Received</span>
              ) : (
                <>
                  <span className="text-[13px] font-black uppercase tracking-[0.2em]">{ctaLabel}</span>
                  <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </div>
          </button>
    </form>
  );
}
