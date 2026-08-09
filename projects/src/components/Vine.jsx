export default function Vine() {
  return (
    <svg className="vine" viewBox="0 0 1120 64" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="vineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a5c3c" />
          <stop offset="50%" stopColor="#34c77b" />
          <stop offset="100%" stopColor="#7fe3a8" />
        </linearGradient>
      </defs>
      <path
        className="line"
        d="M0,32 C120,4 200,60 340,32 C480,4 560,60 700,32 C840,4 920,60 1060,32 L1120,32"
      />
      <circle cx="0" cy="32" r="4" style={{ animationDelay: '0.3s' }} />
      <circle cx="340" cy="32" r="4" style={{ animationDelay: '0.9s' }} />
      <circle cx="700" cy="32" r="4" style={{ animationDelay: '1.5s' }} />
      <circle cx="1120" cy="32" r="4" style={{ animationDelay: '2.4s' }} />
    </svg>
  )
}
