export const countries = [
  { id: 1, name: "India", code: "IN" },
  { id: 2, name: "Nepal", code: "NP" },
  { id: 3, name: "South Africa", code: "ZA" },
  { id: 4, name: "Sri Lanka", code: "LK" },
  { id: 5, name: "United Arab Emirates", code: "AE" },
  { id: 6, name: "Saudi Arabia", code: "SA" }
];

// Indian states with districts
export const indianStates = {
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad", "Meerut", "Ghaziabad", "Noida"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Thane"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Bardhaman"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Udaipur", "Ajmer"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
  "Haryana": ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Karnal"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Solan", "Mandi", "Kullu"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur"]
};

// Other countries - provinces/states
export const otherLocations = {
  "Nepal": {
    states: ["Province 1", "Madhesh Pradesh", "Bagmati Pradesh", "Gandaki Pradesh", "Lumbini Pradesh"],
    districts: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Biratnagar"]
  },
  "South Africa": {
    states: ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Free State"],
    districts: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"]
  },
  "Sri Lanka": {
    states: ["Western Province", "Central Province", "Southern Province", "Northern Province"],
    districts: ["Colombo", "Kandy", "Galle", "Jaffna", "Anuradhapura"]
  },
  "United Arab Emirates": {
    states: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaimah"],
    districts: ["Abu Dhabi City", "Dubai City", "Sharjah City", "Ajman City"]
  },
  "Saudi Arabia": {
    states: ["Riyadh", "Makkah", "Eastern Province", "Madinah"],
    districts: ["Riyadh City", "Jeddah", "Dammam", "Madinah City"]
  }
};

// Get states for a country
export const getStatesForCountry = (country) => {
  if (country === "India") {
    return Object.keys(indianStates);
  }
  if (otherLocations[country]) {
    return otherLocations[country].states;
  }
  return [];
};

// Get districts for a state
export const getDistrictsForState = (country, state) => {
  if (country === "India" && indianStates[state]) {
    return indianStates[state];
  }
  if (otherLocations[country]) {
    return otherLocations[country].districts;
  }
  return [];
};
