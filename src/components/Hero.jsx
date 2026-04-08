import React from "react";
import { motion } from "framer-motion";
import brochure from "../assets/6__Athrav-Brochure-2022-Hindi-Final-CMP-5_compressed.pdf";
import { Download } from "lucide-react";

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative mt-[120px] md:mt-[80px] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] flex items-center bg-[#272861] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#272861] via-[#23245a] to-[#1e1f4a] opacity-95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div initial="hidden" animate="visible">
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-6xl font-bold text-white leading-tight"
          >
            Build Your Future With{" "}
            <span className="text-green-400">
              India’s Fastest Growing
            </span>{" "}
            Fertilizer Brand
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 md:mt-6 text-gray-300 max-w-lg text-sm md:text-base"
          >
            Join a powerful distribution network with strong ROI, complete
            support, and access to premium agricultural products.
          </motion.p>

          {/* FEATURES */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-10"
          >
            {[
              "High ROI Growth",
              "Zero Extra Investment",
              "Marketing Support",
              "Strong Supply Chain",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg md:rounded-xl p-3 md:p-4 text-white text-xs md:text-sm hover:bg-white/20 transition"
              >
                ✔ {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl w-full max-w-md mx-auto md:ml-auto mt-8 md:mt-0"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-5 md:mb-6">
            Become a Partner
          </h2>

          <form className="space-y-3 md:space-y-4">
            {["Name", "Mobile", "Email", "Pincode"].map((item, i) => (
              <input
                key={i}
                placeholder={item}
                className="w-full p-2.5 md:p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              />
            ))}

            <select className="w-full p-2.5 md:p-3 rounded-lg bg-white/20 text-white border border-white/30 text-sm">
              <option>State</option>
            </select>

            <select className="w-full p-2.5 md:p-3 rounded-lg bg-white/20 text-white border border-white/30 text-sm">
              <option>City</option>
            </select>

            <button className="w-full bg-green-500 text-black font-semibold py-2.5 md:py-3 rounded-lg hover:bg-green-400 transition text-sm md:text-base">
              Get Started
            </button>
          </form>
        </motion.div>

      </div>

      {/* FLOATING BROCHURE BUTTON */}
      <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50">
        <a
          href={brochure}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center gap-2 bg-green-500 text-black px-4 md:px-5 py-2.5 md:py-3 rounded-full shadow-lg hover:scale-105 transition text-sm">
          <Download size={18} />
          Brochure
        </a>
      </div>

    </section>
  );
};

export default Hero;