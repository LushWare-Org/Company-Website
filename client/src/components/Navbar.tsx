import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Our Solutions", to: "/solutions" },
    { name: "Our Work", to: "/work" },
    { name: "Project Base", to: "/project-base" },
    { name: "Free Tech Consultation", to: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.jpeg"   // image in public folder
            alt="LushWare ORG Logo"
            className="h-12 w-auto"
          />
          <span className="text-2xl font-bold text-green-500">
            LushWare ORG
          </span>
        </Link>

        {/* Desktop Links */}
        <div className=" md:flex space-x-6 items-center">
          {links.map((link) => (
            <Link key={link.name} to={link.to} className="hover:text-blue-600 transition">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
