
export default function MinimalistWhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-10 lg:right-10 z-50">
      <a
        href="https://wa.me/94716430053"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-white border border-gray-200 rounded-full p-1.5 md:pl-3 shadow-lg md:shadow-sm transition-all duration-300 hover:shadow-xl md:hover:shadow-md hover:border-emerald-200"
        aria-label="Chat on WhatsApp"
      >
        {/* Icon Container */}
        <div className="bg-emerald-600 p-2.5 md:p-2.5 rounded-full text-white transition-transform duration-300 group-hover:scale-95">
          <svg
            className="w-6 h-6 md:w-5 md:h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>

        {/* Text Area - Hidden on mobile, visible on md and above */}
        <div className="hidden md:flex px-4 py-1 flex-col items-start leading-none">
          <span className="text-xs text-gray-500 font-medium mb-1">Available Now</span>
          <span className="text-sm text-gray-700 font-semibold group-hover:text-emerald-600 transition-colors">
            Contact Support
          </span>
        </div>

        {/* Arrow element - Hidden on mobile, visible on md and above */}
        <div className="hidden md:block pr-3 pl-1 transform transition-transform duration-300 group-hover:translate-x-1">
          <svg className="w-4 h-4 text-gray-300 group-hover:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
    </div>
  );
}