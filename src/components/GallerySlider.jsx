import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  galleryCategories,
  galleryItems,
} from "../components/data/galleryDatahomepage";

const GalleryShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === selectedCategory);

  const featured = filteredItems[0]; // first item highlight
  const restItems = filteredItems.slice(1);

  return (
    <>
      <div className="w-full pt-28 px-4 md:px-12">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-white">
          Our Gallery & Achievements
        </h2>

        {/* CATEGORY */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                selectedCategory === cat
                  ? "bg-[#272861] text-white"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED IMAGE */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 cursor-pointer"
            onClick={() => setSelectedImage(featured)}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={featured.thumbnail}
                alt=""
                className="w-full h-[300px] md:h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl md:text-3xl font-bold">
                  {featured.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {restItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.thumbnail}
                alt=""
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white font-semibold text-sm">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.thumbnail}
              alt=""
              className="max-w-[90%] max-h-[90%] rounded-2xl"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryShowcase;