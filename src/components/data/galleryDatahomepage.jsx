// src/data/galleryData.js

// ================= IMPORT ALL IMAGES =================
import president from "../../assets/homeimage/1.jpeg";
import primeMinister from "../../assets/homeimage/1.jpeg";
import chiefMinister from "../../assets/homeimage/1.jpeg";
import deputyCM from "../../assets/homeimage/1.jpeg";
import nepalMinister from "../../assets/homeimage/1.jpeg";

import stateSocialAward from "../../assets/homeimage/1.jpeg";
import bestSocialActivity from "../../assets/homeimage/1.jpeg";

import csrAward from "../../assets/homeimage/1.jpeg";
import exportExcellence from "../../assets/homeimage/1.jpeg";
import innovationAward from "../../assets/homeimage/1.jpeg";
import brandAward from "../../assets/homeimage/1.jpeg";

import agricultureMinister from "../../assets/homeimage/1.jpeg";
import govtOfficialVisit from "../../assets/homeimage/1.jpeg";
import governorInteraction from "../../assets/homeimage/1.jpeg";
import cabinetMinister from "../../assets/homeimage/1.jpeg";
import healthMinister from "../../assets/homeimage/1.jpeg";
import govtCeremony from "../../assets/homeimage/1.jpeg";

// ================= CATEGORIES =================
export const galleryCategories = [
  "All",
  "Minister Image",
  "Award Name",
  "CSR Award",
  "Export Excellence",
  "Innovation Award",
  "Brand Awards"
];

// ================= GALLERY ITEMS =================
export const galleryItems = [
  // MINISTER IMAGES
  { id: 1, title: "President", category: "Minister Image", type: "image", thumbnail: president, description: "Meeting with President" },
  { id: 2, title: "Prime Minister", category: "Minister Image", type: "image", thumbnail: primeMinister, description: "Interaction with Prime Minister" },
  { id: 3, title: "Chief Minister", category: "Minister Image", type: "image", thumbnail: chiefMinister, description: "Meeting with CM" },
  { id: 4, title: "Deputy CM & Minister", category: "Minister Image", type: "image", thumbnail: deputyCM, description: "Discussion with Deputy CM" },
  { id: 5, title: "Nepal Minister Meeting", category: "Minister Image", type: "image", thumbnail: nepalMinister, description: "Government interaction" },

  // AWARD NAME
  { id: 6, title: "State Social Excellence Award", category: "Award Name", type: "image", thumbnail: stateSocialAward, description: "Awarded for social excellence" },
  { id: 7, title: "Best Social Activity Award", category: "Award Name", type: "image", thumbnail: bestSocialActivity, description: "Recognized by MSME" },
  { id: 8, title: "Fastest Growing Company", category: "Award Name", type: "image", thumbnail: stateSocialAward, description: "Growth achievement" },

  // CSR
  { id: 9, title: "CSR Award", category: "CSR Award", type: "image", thumbnail: csrAward, description: "CSR excellence" },

  // EXPORT
  { id: 10, title: "Export Excellence", category: "Export Excellence", type: "image", thumbnail: exportExcellence, description: "Export performance" },

  // INNOVATION
  { id: 11, title: "Innovation Award", category: "Innovation Award", type: "image", thumbnail: innovationAward, description: "Innovation in agriculture" },

  // BRAND
  { id: 12, title: "Brand Excellence Award", category: "Brand Awards", type: "image", thumbnail: brandAward, description: "Brand growth" },

  // MORE MINISTER
  { id: 13, title: "Agriculture Minister Meeting", category: "Minister Image", type: "image", thumbnail: agricultureMinister, description: "" },
  { id: 14, title: "Government Official Visit", category: "Minister Image", type: "image", thumbnail: govtOfficialVisit, description: "" },
  { id: 15, title: "Governor Interaction", category: "Minister Image", type: "image", thumbnail: governorInteraction, description: "" },
  { id: 16, title: "Cabinet Minister Meeting", category: "Minister Image", type: "image", thumbnail: cabinetMinister, description: "" },
  { id: 17, title: "Health Minister Visit", category: "Minister Image", type: "image", thumbnail: healthMinister, description: "" },
  { id: 18, title: "Government Ceremony", category: "Minister Image", type: "image", thumbnail: govtCeremony, description: "s" },
];