import React from "react";
import InquiryForm from "./form/InquiryForm";
import { AppProvider } from "../components/context/AppContext";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <AppProvider>
      <div className="pt-20 md:pt-24 bg-[#272861] text-white min-h-screen">

        {/* HERO */}
        <section className="text-center px-6 mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Let’s <span className="text-green-400">Connect</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-300 text-sm">
            Reach out and our team will guide you step by step.
          </p>
        </section>

        {/* MAIN */}
        <section className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div className="space-y-4">

            {[
              { 
                icon: <Phone size={18} />, 
                title: "Mobile", 
                value: "+91 8948077154" 
              },
              { 
                icon: <Phone size={18} />, 
                title: "Landline", 
                value: "0522-4249025" 
              },
              { 
                icon: <Mail size={18} />, 
                title: "Email", 
                value: "info@athravagricure.com" 
              },
              { 
                icon: <MapPin size={18} />, 
                title: "Office Address", 
                value: "405, Prime Plaza, 3rd floor, Munshipuliya Chauraha, Lucknow (UP), 226016" 
              },
              { 
                icon: <Clock size={18} />, 
                title: "Working Hours", 
                value: "Mon-Sat: 9:30 AM - 6:30 PM" 
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white shrink-0">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs text-gray-400">{item.title}</p>
                  <p className="text-sm font-medium leading-snug">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* MAP */}
            <div className="rounded-xl overflow-hidden border border-white/10 h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.8851486846356!2d80.99043988003031!3d26.88564131649122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a82c7ebdcd%3A0xb747211bc2212e46!2sPrime%20Plaza!5e1!3m2!1sen!2sin!4v1775639469542!5m2!1sen!2sin"
                className="w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">

            <h2 className="text-xl md:text-2xl font-semibold mb-5">
              Send an Inquiry
            </h2>

            <InquiryForm />

          </div>

        </section>
      </div>
    </AppProvider>
  );
};

export default Contact;