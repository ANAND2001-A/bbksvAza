import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsappToggle = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "918948077154";
  const message = "Hello, I want to know more about your services";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-20 right-3 sm:right-5 z-50">

      {/* Chat Box */}
      {open && (
        <div className="mb-3 w-[260px] sm:w-72 max-w-[90vw] bg-white text-black rounded-xl shadow-lg p-4">
          
          <h3 className="font-semibold text-lg mb-1">
            Chat with us 👋
          </h3>

          <p className="text-sm text-gray-600 mb-3">
            We usually reply instantly on WhatsApp
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="block bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition"
          >
            Start Chat
          </a>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

    </div>
  );
};

export default WhatsappToggle;