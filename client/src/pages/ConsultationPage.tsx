import { useState } from 'react';
import { ArrowUpRight, Linkedin, Twitter, CheckCircle2, Instagram, Facebook } from 'lucide-react';
import { getNames } from "country-list";
import Select from "react-select";
import { submitInquiry, validateEmail, validatePhone } from '../services/inquiryService';

export default function ConsultationPageV15() {
  const countries = getNames();
  const countryOptions = countries.map((c) => ({ value: c, label: c }));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: null as { value: string; label: string } | null,
    whatsapp: '',
    requirement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'fname' ? 'firstName' : id === 'lname' ? 'lastName' : id === 'email' ? 'email' : id === 'whatsapp' ? 'whatsapp' : 'requirement']: value,
    }));
  };

  const handleCountryChange = (option: { value: string; label: string } | null) => {
    setFormData(prev => ({
      ...prev,
      country: option,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.country || !formData.whatsapp) {
      setSubmitStatus('error');
      setSuccessMessage('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus('error');
      setSuccessMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.whatsapp)) {
      setSubmitStatus('error');
      setSuccessMessage('Please enter a valid WhatsApp number');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitInquiry({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        country: formData.country.value,
        whatsapp: formData.whatsapp,
        message: formData.requirement,
        inquiryType: 'consultation',
      });

      if (result.success) {
        setSubmitStatus('success');
        setSuccessMessage('Thank you! Your consultation request has been submitted. We\'ll get back to you soon.');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          country: null,
          whatsapp: '',
          requirement: '',
        });

        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSuccessMessage(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="consultation" className="scroll-mt-24 px-6 py-24 lg:py-40">
      <div className="mx-auto max-w-7xl">


        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          
          {/* LEFT: The Proposition (Column Span 5) */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl font-medium tracking-tighter text-gray-900 sm:text-7xl leading-[1.05]">
              Book a free <br />
              <span className="text-emerald-600">consultancy.</span>
            </h2>
            
            <p className="mt-10 text-xl text-gray-500 leading-relaxed max-w-md">
              Connect with our team and get the support you need. Start your journey with LushWare ORG today.
            </p>


            <div className="mt-10 space-y-10">
              {/* Service List */}
              <div className="space-y-4">
                {['Client Support', 'Project Guidance', 'Quick Assistance'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <span className="text-md font-bold text-gray-800 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* Contact Bar */}
            <div className="pt-10 border-t border-gray-300 flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email</p>
                <a href="mailto:info@lushware.org" className="group flex items-center gap-2 text-xl font-medium text-gray-900 hover:text-green-600 transition-colors underline decoration-gray-200 underline-offset-8 decoration-1 hover:decoration-green-600">
                  info@lushware.org <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>

              {/* Phone Section */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</p>
                <a href="tel:+94716430053" className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors">
                  +94 71 643 0053
                </a>
              </div>

              <div >
                <div className="flex items-center gap-5">
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors p-1" aria-label="LinkedIn">
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors p-1" aria-label="Twitter">
                    <Twitter size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors p-1" aria-label="Instagram">
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors p-1" aria-label="Facebook">
                    <Facebook size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] bg-gray-50/50 p-2 ring-1 ring-gray-800/20">
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                
                <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-green-50 to-transparent opacity-50" />

                <form className="relative space-y-12" onSubmit={handleSubmit}>
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <div className="flex items-center gap-2 text-emerald-700">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="font-medium text-sm">{successMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 text-red-700">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <p className="font-medium text-sm">{successMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
                    {/* First Name */}
                    <div className="group relative border-b border-gray-500 pb-1 focus-within:border-green-600 transition-all duration-300">
                      <input 
                        type="text" 
                        id="fname"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="peer w-full bg-transparent py-2 text-sm outline-none border-none focus:ring-0 placeholder-transparent disabled:opacity-50" 
                        placeholder="First Name" 
                        required
                      />
                      <label 
                        htmlFor="fname"
                        className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-700 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-green-600"
                      >
                        01. First Name
                      </label>
                    </div>

                    {/* Last Name */}
                    <div className="group relative border-b border-gray-500 pb-1 focus-within:border-green-600 transition-all duration-300">
                      <input 
                        type="text" 
                        id="lname"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="peer w-full bg-transparent py-2 text-sm outline-none border-none focus:ring-0 placeholder-transparent disabled:opacity-50" 
                        placeholder="Last Name" 
                        required
                      />
                      <label 
                        htmlFor="lname"
                        className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-700 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-green-600"
                      >
                        02. Last Name
                      </label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group relative border-b border-gray-500 pb-1 focus-within:border-green-600 transition-all duration-300">
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="peer w-full bg-transparent py-2 text-sm outline-none border-none focus:ring-0 placeholder-transparent disabled:opacity-50" 
                      placeholder="Email" 
                      required
                    />
                    <label 
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-700 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-green-600"
                    >
                      03. Business Email
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
                    {/* Country Selection */}
                    <div className="group relative border-b border-gray-500 pb-1">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700">04. Geography</label>
                      <Select
                        options={countryOptions}
                        value={formData.country}
                        onChange={handleCountryChange}
                        placeholder="Select a country"
                        className="mt-2 text-sm"
                        classNamePrefix="react-select"
                        isDisabled={isSubmitting}
                        
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "none",
                            boxShadow: "none",
                            padding: "2px",
                            opacity: isSubmitting ? 0.5 : 1,
                          }),
                          menu: (provided) => ({
                            ...provided,
                            zIndex: 50,
                            maxHeight: 400,
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isFocused ? "#10B981" : "white",
                            color: state.isFocused ? "white" : "black",
                            cursor: "pointer",
                          }),
                        }}
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="group relative border-b border-gray-500 pb-1 focus-within:border-green-600 transition-all duration-300">
                      <input 
                        type="tel" 
                        id="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="peer w-full bg-transparent py-2 text-sm outline-none border-none focus:ring-0 placeholder-transparent disabled:opacity-50" 
                        placeholder="WhatsApp" 
                        required
                      />
                      <label 
                        htmlFor="whatsapp"
                        className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-700 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-green-600"
                      >
                        05. WhatsApp Number
                      </label>
                    </div>
                  </div>

                  {/* Requirement */}
                  <div className="group relative border-b border-gray-500 pb-4 focus-within:border-green-600 transition-all duration-300">
                    <textarea 
                      id="requirement"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      rows={4} 
                      className="peer w-full bg-transparent py-2 text-sm outline-none border-none focus:ring-0 resize-none placeholder-transparent disabled:opacity-50" 
                      placeholder="Requirement"
                    ></textarea>
                    <label 
                      htmlFor="requirement"
                      className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-700 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-green-600"
                    >
                      06. Requirement
                    </label>
                  </div>

                  <div className="pt-8 group">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gray-900 px-10 py-5 text-[13px] font-black uppercase tracking-[0.3em] text-white transition-all shadow-xl shadow-gray-200/50 group-hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Submitting...' : 'Start With LushWare'}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="relative z-10 transition-transform duration-500 group-hover:rotate-45 group-hover:translate-x-1"
                      />

                      {/* Emerald Hover Sweep */}
                      {!isSubmitting && <div className="absolute inset-0 z-0 h-full w-0 bg-emerald-600 transition-all duration-500 ease-out group-hover:w-full"></div>}
                    </button>

                    {/* Trust Label */}
                    <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-widest text-gray-500 transition-colors group-hover:text-emerald-600">
                      Trusted Communication
                    </p>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}