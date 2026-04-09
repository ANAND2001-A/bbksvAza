// src/data/productsData.js

// ================= IMPORT PRODUCT IMAGES =================
import npkFertilizer from "/Users/anandbahaduryadav/Documents/AthravAgricure/Landing-Page/src/assets/productImage/Bags Mock up/Prom Front.jpg";
import organicCompost from "/Users/anandbahaduryadav/Documents/AthravAgricure/Landing-Page/src/assets/productImage/Bags Mock up/IMG-20230711-WA0105 - Copy.jpg";
import bioFertilizer from "/Users/anandbahaduryadav/Documents/AthravAgricure/Landing-Page/src/assets/productImage/Bags Mock up/IMG-20230711-WA0105 - Copy.jpg";
import growthBooster from "/Users/anandbahaduryadav/Documents/AthravAgricure/Landing-Page/src/assets/productImage/Bags Mock up/IMG-20230711-WA0105 - Copy.jpg";
import micronutrientMix from "/Users/anandbahaduryadav/Documents/AthravAgricure/Landing-Page/src/assets/productImage/Bags Mock up/IMG-20230711-WA0105 - Copy.jpg";
import cropProtection from "/Users/anandbahaduryadav/Documents/AthravAgricure/Landing-Page/src/assets/productImage/Bags Mock up/IMG-20230711-WA0105 - Copy.jpg";

// 🔥 Helper function
const getCategoryFromImage = (imagePath) => {
  return imagePath.toLowerCase().includes("bag")
    ? "Bag Photo"
    : "Product Photo";
};

// ✅ Raw product data
const rawProducts = [
  {
    id: 1,
    title: "Premium NPK Fertilizer",
    description: "Balanced NPK fertilizer for maximum crop yield and soil health",
    image: npkFertilizer
  },
  {
    id: 2,
    title: "Organic Compost",
    description: "Eco-friendly organic compost for sustainable farming",
    image: organicCompost
  },
  {
    id: 3,
    title: "Bio Fertilizer",
    description: "Microbial solution to enhance soil fertility naturally",
    image: bioFertilizer
  },
  {
    id: 4,
    title: "Plant Growth Booster",
    description: "Advanced growth enhancer for faster and healthier crops",
    image: growthBooster
  },
  {
    id: 5,
    title: "Micronutrient Mix",
    description: "Essential nutrients to prevent deficiencies in crops",
    image: micronutrientMix
  },
  {
    id: 6,
    title: "Crop Protection Solution",
    description: "Protect crops from pests and diseases effectively",
    image: cropProtection
  }
];

// ✅ Final processed data
export const productsData = rawProducts.map((item) => ({
  ...item,
  category: getCategoryFromImage(item.image)
}));

// ✅ Categories
export const productCategories = [
  "All",
  "Bag Photo",
  "Product Photo"
];