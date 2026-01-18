import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    { name: "Our Solutions", to: "/solutions" },
    { name: "Our Work", to: "/work" },
    { name: "Project Base", to: "/project-base" },
    { name: "Free Tech Consultation", to: "/contact" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between">
        {/* Logo */}
        <div className="mb-6 md:mb-0 text-white font-bold text-xl">
          LushWare ORG
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
        Copyright © 2026 LushWare ORG
      </div>
    </footer>
  );
}
