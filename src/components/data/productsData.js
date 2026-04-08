// src/data/productsData.js

// 🔥 Helper function
const getCategoryFromImage = (imagePath) => {
  return imagePath.toLowerCase().includes("bag")
    ? "Bag Photo"
    : "Product Photo";
};

// ✅ Dummy product data (ONLINE IMAGES)
const rawProducts = [
  {
    id: 1,
    title: "Premium NPK Fertilizer",
    description: "Balanced NPK fertilizer for maximum crop yield and soil health",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4"
  },
  {
    id: 2,
    title: "Organic Compost",
    description: "Eco-friendly organic compost for sustainable farming",
    image: "https://images.unsplash.com/photo-1592982537447-6f2b3d3bdb9c"
  },
  {
    id: 3,
    title: "Bio Fertilizer",
    description: "Microbial solution to enhance soil fertility naturally",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 4,
    title: "Plant Growth Booster",
    description: "Advanced growth enhancer for faster and healthier crops",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
  },
  {
    id: 5,
    title: "Micronutrient Mix",
    description: "Essential nutrients to prevent deficiencies in crops",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf"
  },
  {
    id: 6,
    title: "Crop Protection Solution",
    description: "Protect crops from pests and diseases effectively",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30"
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