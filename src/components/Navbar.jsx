import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import img from "/Users/anandbahaduryadav/Documents/AthravAgricure/Landing-Page/src/assets/icons/AathravLogo _ COLOR.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">

      {/* Top strip */}
      <div className="h-2 bg-[#272861]"></div>

      {/* Navbar */}
      <div className="backdrop-blur-md bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

         {/* Logo */}
         <Link to="/" className="flex items-center">
            <img
              src={img}
              alt="Athrav Agricure Logo"
              className="h-20 w-30 object-contain"
            />
          </Link>

          {/* Contact Info */}
          <div className="flex items-center gap-6 text-sm md:text-base">

            {/* Phone */}
            <div className="flex items-center gap-2 text-black">
              <Phone size={18} />
              <span>+91 8948077154</span>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918948077154"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 font-medium hover:text-green-700"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;