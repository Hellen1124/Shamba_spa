import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* === Brand / Logo === */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-green-700 tracking-tight"
        >
          LandCo<span className="text-gray-700">Kenya</span>
        </Link>

        {/* === Desktop Navigation === */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-green-700 font-semibold" : "hover:text-green-700"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                isActive ? "text-green-700 font-semibold" : "hover:text-green-700"
              }
            >
              Properties
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-green-700 font-semibold" : "hover:text-green-700"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* === Contact CTA (Desktop) === */}
        <a
          href="https://wa.me/254712345678"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
        >
          <Phone size={18} />
          WhatsApp
        </a>

        {/* === Mobile Menu Toggle === */}
        <button
          onClick={handleToggle}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* === Mobile Dropdown Menu === */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="hover:text-green-700 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/properties"
                onClick={closeMenu}
                className="hover:text-green-700 transition-colors"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="hover:text-green-700 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/254712345678"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
              >
                <Phone size={18} />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}