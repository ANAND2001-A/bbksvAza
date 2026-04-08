import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const phone = "+91 8948077154";
  const whatsapp = "918948077154";

  return (
    <footer className="bg-[#1f1f3a] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start gap-3">

          {/* Phone */}
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <Phone size={18} />
            {phone}
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <MessageCircle size={18} />
            WhatsApp Chat
          </a>

          {/* Social Media */}
          <div className="flex gap-4 mt-2">

            <a
              href="https://www.facebook.com/atharvagricure"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-pink-500 transition"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-400 transition"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="https://www.youtube.com/@athravagricurepvtltd730"
              className="p-2 rounded-full bg-white/10 hover:bg-red-500 transition"
            >
              <FaYoutube size={16} />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="text-sm text-gray-300 text-center md:text-right">
          © {new Date().getFullYear()} Athrav Agricure Pvt. Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;