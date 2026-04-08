import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "NPK",
    image: "src/assets/productImage/Bags Mock up/IMG-20230711-WA0105 - Copy.jpg",
  },
  {
    id: 2,
    name: "PROM",
    image: "src/assets/productImage/Bags Mock up/Prom Front.jpg",
  },
  {
    id: 3,
    name: "Sulphur",
    image: "src/assets/productImage/Lucknow Factor Products/IMG-20230711-WA0058.jpg",
  },
  {
    id: 4,
    name: "AN-84",
    image: "src/assets/productImage/Lucknow Factor Products/IMG-20230711-WA0076.jpg",
  },
  {
    id: 5,
    name: "Raizobiyam",
    image: "src/assets/productImage/Lucknow Factor Products/WhatsApp Image 2024-03-17 at 21.21.04_94b12582.jpg",
  },
];

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Showcase */}
        <div className="relative flex justify-center items-center h-[400px] md:h-[450px]">

          {products.map((item, index) => {
            const position = getPosition(index);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity:
                    position === "center"
                      ? 1
                      : position === "left" || position === "right"
                      ? 0.6
                      : 0,
                  scale:
                    position === "center"
                      ? 1.1
                      : position === "left" || position === "right"
                      ? 0.9
                      : 0.7,
                  x:
                    position === "center"
                      ? 0
                      : position === "left"
                      ? -260
                      : position === "right"
                      ? 260
                      : 0,
                }}
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
                    <h3 className="text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                    <div className="mt-3 h-[2px] w-0 bg-green-400 mx-auto group-hover:w-16 transition-all duration-300"></div>
                  </div>

                </div>
              </motion.div>
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