import React from "react";
import { motion } from "framer-motion";

const Investment = () => {
  return (
    <section className="bg-[#272861] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - BIG PRICE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full"></div>

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-12">
            <p className="text-gray-300 mb-4 text-lg">
              Starting Investment
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-green-400 leading-tight">
              ₹20L
            </h2>

            <p className="text-gray-400 mt-2">
              to ₹1 Crore+
            </p>

            <div className="mt-6 h-[2px] w-20 bg-green-400"></div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Investment Details
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Our investment model is designed to be flexible based on your
            location, scale, and business goals. We ensure strong returns
            with complete operational and marketing support.
          </p>

          {/* Points */}
          <div className="space-y-4">
            {[
              "Flexible investment plans",
              "High return potential",
              "Complete business setup support",
              "Marketing & branding assistance",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-3"
              >
                {/* WHITE ICON */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-white text-sm border border-white/20">
                  ✔
                </div>

                <p className="text-gray-200">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-8 py-3 bg-green-500 text-black font-semibold rounded-xl shadow-lg hover:shadow-green-500/40 transition"
          >
            Get Started
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Investment;