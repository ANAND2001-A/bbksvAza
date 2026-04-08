import React from "react";
import { motion } from "framer-motion";
import { Armchair, Gem, Store } from "lucide-react";

const Investment = () => {
  const data = [
    {
      icon: Armchair,
      title: "Interiors",
      value: "₹ 75 Lac",
    },
    {
      icon: Gem,
      title: "Inventory",
      value: "₹ 8 Cr+",
    },
    {
      icon: Store,
      title: "Store Size",
      value: "1200+ Sq. Ft.",
    },
  ];

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
            Investment{" "}
            <span className="text-green-400">Requirements</span>
          </motion.h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Start your journey with a clear investment plan. 
            Our structured requirements ensure scalability, 
            profitability, and long-term success for your business.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/20"></div>

          <div className="space-y-10">
            {data.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-6"
                >
                  {/* Icon */}
                  <div className="
                    relative z-10 
                    w-12 h-12 
                    flex items-center justify-center 
                    rounded-full 
                    bg-green-500/10 
                    border border-green-500/30
                    text-green-400
                  ">
                    <Icon size={22} />
                  </div>

                  {/* Content */}
                  <div className="
                    bg-white/5 
                    backdrop-blur-md 
                    p-6 
                    rounded-xl 
                    border border-white/10 
                    w-full 
                    hover:bg-white/10 
                    transition
                  ">
                    <p className="text-gray-400 text-sm mb-1">
                      {item.title}
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      {item.value}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Investment;