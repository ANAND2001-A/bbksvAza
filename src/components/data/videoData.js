// src/data/videoData.js

// ================= IMPORT VIDEOS =================
import blOverview from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import blMachinery from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import blProduction from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import blPackaging from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import blTeam from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";

import factoryProcess from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import rawMaterial from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import productionUnit from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import qualityLab from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import finalDispatch from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";

import sampleDemo1 from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import sampleDemo2 from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import fieldUsage from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import farmerExperience from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";
import beforeAfter from "../../assets/videos/PixVerse_V6_Extend_360P_Ultra_cinematic_commer.mp4";

// ================= CATEGORIES =================
export const videoCategories = [
  "All",
  "BL Factory Video",
  "Factory Video",
  "Sample Video"
];

// ================= VIDEO DATA =================
export const videoData = [
  // BL FACTORY VIDEOS
  { id: 1, title: "BL Factory Overview", category: "BL Factory Video", video: blOverview },
  { id: 2, title: "BL Factory Machinery Setup", category: "BL Factory Video", video: blMachinery },
  { id: 3, title: "BL Factory Production Line", category: "BL Factory Video", video: blProduction },
  { id: 4, title: "BL Factory Packaging Unit", category: "BL Factory Video", video: blPackaging },
  { id: 5, title: "BL Factory Team & Staff", category: "BL Factory Video", video: blTeam },

  // FACTORY VIDEOS
  { id: 6, title: "Factory Working Process", category: "Factory Video", video: factoryProcess },
  { id: 7, title: "Raw Material Handling", category: "Factory Video", video: rawMaterial },
  { id: 8, title: "Production Unit Operations", category: "Factory Video", video: productionUnit },
  { id: 9, title: "Quality Testing Lab", category: "Factory Video", video: qualityLab },
  { id: 10, title: "Final Product Dispatch", category: "Factory Video", video: finalDispatch },

  // SAMPLE VIDEOS
  { id: 11, title: "Product Sample Demo 1", category: "Sample Video", video: sampleDemo1 },
  { id: 12, title: "Product Sample Demo 2", category: "Sample Video", video: sampleDemo2 },
  { id: 13, title: "Field Usage Demo", category: "Sample Video", video: fieldUsage },
  { id: 14, title: "Farmer Experience Video", category: "Sample Video", video: farmerExperience },
  { id: 15, title: "Before & After Results", category: "Sample Video", video: beforeAfter },
];