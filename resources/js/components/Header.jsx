import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white fixed top-0 w-full z-50 shadow-md">
      <div className="w-full px-8 py-4 flex items-center justify-between gap-4">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-2 mt-2 mb-2">
          <div className="w-6 h-6 bg-[#6B55D9] rotate-45"></div>
          <div className="w-6 h-6 bg-[#A3DB74] rotate-45 -ml-3"></div>
          <span className="text-2xl font-bold">PO</span>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex text-[#605e69] flex-1 justify-center space-x-12 text-base font-semibold">
          {[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: "Projects", to: "/projects" },
            { label: "Testimonials", to: "/testimonials" },
            { label: "FAQs", to: "/faqs" },
          ].map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#5840ba] font-semibold"
                  : "hover:text-[#5840ba] hover:underline hover:[text-decoration-color:#5840ba] transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Contact Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            to="/contact"
            className="border-[#c0b4de] bg-[#5840ba] rounded-full px-8 py-4 font-semibold text-[#f5f0fd] hover:text-[#8172b9] transition"
          >
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
}
