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
      [id]: value,
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
          <div className="lg:col-span-5 px-4 md:px-0">
            <h2 className="text-5xl font-medium tracking-tighter text-gray-900 sm:text-7xl leading-[1.05] hero-line">
              Book a free <br />
              <span className="text-emerald-600">consultancy.</span>
            </h2>
            
            <p className="mt-10 text-xl text-gray-700 leading-relaxed max-w-md hero-line">
              Connect with our team and get the support you need. Start your journey with LushWare ORG today.
            </p>


            <div className="mt-10 space-y-10">
              {/* Service List */}
              <div className="space-y-4">
                {['Client Support', 'Project Guidance', 'Quick Assistance'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <span className="text-md font-bold text-gray-800 tracking-tight hero-line">{item}</span>
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
            <div className="relative rounded-[2rem] bg-white p-1 shadow-[0_2px_10px_rgba(0,0,0,0.02)] ring-1 ring-emerald-500">
              
              <form className="p-10 lg:p-16" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
                  
                  {/* Field 01: First Name */}
                  <div className="relative space-y-3 group">
                    <label className="flex items-center gap-2 text-[16px] font-semibold uppercase tracking-widest text-gray-700 group-focus-within:text-emerald-600 transition-colors">
                      <span className="font-serif italic lowercase text-lg opacity-90">i.</span> First Name
                    </label>
                    <input 
                      id="firstName"
                      type="text" 
                      placeholder="Ex: Alistair"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-400 bg-transparent py-2 text-xl font-medium  text-gray-900 outline-none transition-all focus:border-emerald-600 placeholder:text-gray-300" 
                    />
                  </div>

                  {/* Field 02: Last Name */}
                  <div className="relative space-y-3 group">
                    <label className="flex items-center gap-2 text-[16px] font-semibold uppercase tracking-widest text-gray-700 group-focus-within:text-emerald-600 transition-colors">
                      <span className="font-serif italic lowercase text-lg opacity-90">ii.</span> Last Name
                    </label>
                    <input 
                      id="lastName"
                      type="text" 
                      placeholder="Ex: Montgomery"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-400 bg-transparent py-2 text-xl font-medium text-gray-900 outline-none transition-all focus:border-emerald-600 placeholder:text-gray-300" 
                    />
                  </div>

                  {/* Field 03: Corporate Email */}
                  <div className="sm:col-span-2 relative space-y-3 group">
                    <label className="flex items-center gap-2 text-[16px] font-semibold uppercase tracking-widest text-gray-700 group-focus-within:text-emerald-600 transition-colors">
                      <span className="font-serif italic lowercase text-lg opacity-90">iii.</span>  Business Email
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="director@firm.co.uk"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-400 bg-transparent py-2 text-xl font-medium text-gray-900 outline-none transition-all focus:border-emerald-600 placeholder:text-gray-300" 
                    />
                  </div>

                  {/* Field 04: Geography */}
                  <div className="relative space-y-3 group">
                    <label className="flex items-center gap-2  font-semibold uppercase tracking-widest text-gray-700 group-focus-within:text-emerald-600 transition-colors">
                      <span className="font-serif italic lowercase text-lg opacity-90">iv.</span> Geography
                    </label>
                    <Select
                        options={countryOptions}
                        value={formData.country}
                        onChange={handleCountryChange}
                        placeholder="Select a country"
                        className="mt-2 text-[16px] font-medium border-b border-gray-400"
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

                  {/* Field 05: WhatsApp */}
                  <div className="relative space-y-3 group">
                    <label className="flex items-center gap-2 text-[16px] font-semibold uppercase tracking-widest text-gray-700 group-focus-within:text-emerald-600 transition-colors">
                      <span className="font-serif italic lowercase text-lg opacity-90">v.</span> WhatsApp Number
                    </label>
                    <input 
                      id="whatsapp"
                      type="tel" 
                      placeholder="+94 71 643 0053"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-400 bg-transparent py-2 text-xl font-medium text-gray-900 outline-none transition-all focus:border-emerald-600 placeholder:text-gray-300" 
                    />
                  </div>

                  {/* Field 06: Requirement */}
                  <div className="sm:col-span-2 relative space-y-3 group">
                    <label className="flex items-center gap-2 text-[16px] font-semibold uppercase tracking-widest text-gray-700 group-focus-within:text-emerald-600 transition-colors">
                      <span className="font-serif italic lowercase text-lg opacity-90">vi.</span> Requirement
                    </label>
                    <textarea 
                      id="requirement"
                      rows={2}
                      placeholder="What problem are you looking to solve?"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-400 bg-transparent py-2 text-xl font-medium text-gray-900 outline-none transition-all focus:border-emerald-600 placeholder:text-gray-300 resize-none" 
                    />
                  </div>
                </div>

                {/* The Sovereign Button */}
                <div className="mt-20">
                  {submitStatus !== 'idle' && (
                    <div
                      className={`mb-6 rounded-2xl border px-5 py-4 text-sm font-semibold ${
                        submitStatus === 'success'
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                          : 'border-red-200 bg-red-50 text-red-700'
                      }`}
                      role="status"
                    >
                      {successMessage}
                    </div>
                  )}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      group relative w-full 
                      py-4 sm:py-5 lg:py-6 
                      px-6 sm:px-8 lg:px-10 
                      bg-gray-900 
                      rounded-full 
                      overflow-hidden 
                      transition-all duration-500 
                      hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)]
                    "
                  >
                    {/* Emerald Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    
                    <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      
                      <span className="
                        text-[10px] sm:text-xs lg:text-sm 
                        font-bold uppercase 
                        tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.3em] 
                        text-white text-center
                      ">
                        {isSubmitting ? 'Submitting...' : 'Start With LushWare'}
                      </span>

                      <ArrowUpRight 
                        size={16} 
                        className="sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] text-white transition-transform group-hover:rotate-45" 
                      />

                    </div>
                  </button>

                  

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}