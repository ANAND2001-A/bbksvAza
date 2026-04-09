// src/data/productsData.js

// ================= IMPORT PRODUCT IMAGES =================
import npkFertilizer from "../../assets/productImage/Bags Mock up/4.jpg";
import organicCompost from "../../assets/productImage/Bags Mock up/4.jpg";
import bioFertilizer from "../../assets/productImage/Bags Mock up/4.jpg";
import growthBooster from "../../assets/productImage/Bags Mock up/4.jpg";
import micronutrientMix from "../../assets/productImage/Bags Mock up/4.jpg";
import cropProtection from "../../assets/productImage/Bags Mock up/4.jpg";

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