import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* === Brand Section === */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            LandCo<span className="text-green-200">Kenya</span>
          </h2>
          <p className="text-sm text-green-100 leading-relaxed">
            We help Kenyans own genuine, affordable land with ready title deeds.
            Trusted by hundreds of property owners across Kenya.
          </p>
        </div>

        {/* === Quick Links === */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-green-100">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:text-white transition-colors">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* === Contact Info === */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-3 text-green-100 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-green-300 mt-1" />
              <span>LandCo Offices, 2nd Floor, ABC Plaza, Nairobi</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-green-300" />
              <span>+254 712 345 678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-green-300" />
              <span>info@landco.co.ke</span>
            </li>
          </ul>
        </div>

        {/* === Social Media === */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-green-200">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-green-700 mt-10 pt-4 text-center text-sm text-green-200">
        © {new Date().getFullYear()} LandCo Kenya. All rights reserved.
      </div>
    </footer>
  );
}

