import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Trusted Brand",
  "High ROI",
  "Marketing Support",
  "Training & Setup",
];

const Benefits = () => {
  return (
    <section className="py-24 bg-[#272861] text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Why Choose{" "}
            <span className="text-green-400">Us</span>
          </motion.h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            We provide a complete ecosystem to help you grow faster, 
            reduce risk, and maximize your business potential with 
            proven strategies and continuous support.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-8 relative">

          {/* Vertical Divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white"></div>

          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Dot */}
              <div className="
                absolute 
                -top-3 
                left-1/2 
                -translate-x-1/2 
                w-3 h-3 
                bg-green-500 
                rounded-full
              " />

              {/* Card */}
              <div className="
                p-6 
                rounded-xl 
                bg-white/5 
                backdrop-blur-md 
                border border-white/10 
                text-center
                hover:bg-white/10 
                transition
              ">
                {/* Icon */}
                <div className="
                  w-12 h-12 mx-auto mb-4 
                  flex items-center justify-center 
                  rounded-full 
                  bg-white 
                  text-green-400
                ">
                  ✔
                </div>

                {/* Text */}
                <p className="font-semibold text-lg">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Benefits;