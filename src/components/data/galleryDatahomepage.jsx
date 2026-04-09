// src/data/galleryData.js

// ================= IMPORT ALL IMAGES =================
import president from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import primeMinister from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import chiefMinister from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import deputyCM from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import nepalMinister from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";

import stateSocialAward from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import bestSocialActivity from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";

import csrAward from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import exportExcellence from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import innovationAward from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import brandAward from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";

import agricultureMinister from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import govtOfficialVisit from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import governorInteraction from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import cabinetMinister from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import healthMinister from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";
import govtCeremony from "../../assets/images/8 MINISTER PHOTO WITH NAME/1.PRESIDENT.jpeg";

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
  { id: 18, title: "Government Ceremony", category: "Minister Image", type: "image", thumbnail: govtCeremony, description: "" },
];