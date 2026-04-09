// src/components/ProductSlider.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import images
import img1 from "../assets/productImage/Bags Mock up/4.jpg";
import img2 from "../assets/productImage/Bags Mock up/4.jpg";
import img3 from "../assets/productImage/Bags Mock up/4.jpg";
import img4 from "../assets/productImage/Bags Mock up/4.jpg";
import img5 from "../assets/productImage/Bags Mock up/4.jpg";

const products = [
  { id: 1, name: "NPK", image: img1 },
  { id: 2, name: "PROM", image: img2 },
  { id: 3, name: "Sulphur", image: img3 },
  { id: 4, name: "AN-84", image: img4 },
  { id: 5, name: "Raizobiyam", image: img5 },
];

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  // 🔄 Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Helper: get position class for animation
  const getPosition = (index) => {
    if (index === current) return "center";
    if (index === (current + 1) % products.length) return "right";
    if (index === (current - 1 + products.length) % products.length) return "left";
    return "hidden";
  };

  return (
    <section className="bg-[#272861] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-16"
        >
          Our Products
        </motion.h2>

        {/* Slider */}
        <div className="relative flex justify-center items-center h-[400px] md:h-[450px]">
          {products.map((item, index) => {
            const position = getPosition(index);

            return (
              <AnimatePresence key={item.id}>
                {position !== "hidden" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 0 }}
                    animate={{
                      opacity: position === "center" ? 1 : 0.6,
                      scale: position === "center" ? 1.1 : 0.9,
                      x:
                        position === "center"
                          ? 0
                          : position === "left"
                          ? -260
                          : 260,
                    }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.6 }}
                    className="absolute w-[280px] md:w-[320px]"
                  >
                    {/* Card */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl group">
                      {/* Image */}
                      <div className="relative h-[260px] md:h-[300px] bg-white/10 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                      {/* Content */}
                      <div className="p-5 text-center">
                        <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                        <div className="mt-3 h-[2px] w-0 bg-green-400 mx-auto group-hover:w-16 transition-all duration-300"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() =>
              setCurrent((prev) =>
                prev === 0 ? products.length - 1 : prev - 1
              )
            }
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Prev
          </button>
          <button
            onClick={() =>
              setCurrent((prev) => (prev + 1) % products.length)
            }
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;