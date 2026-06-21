export const serviceCategories = [
  "Electrical & Wiring",
  "Plumbing Solutions",
  "IT & Technical",
  "Cleaning & Janitorial",
  "Salon & Beauty",
  "Events & Photography"
];

export const serviceSpecializations = [
  "Leak Repair", "Pipe Installation", "Bathroom Fitting", "Waterproofing",
  "House Wiring", "A/C Repair & Service", "Generator Diagnostics", "Appliance Fixing",
  "Computer Repair", "Network Setup", "Software Installation", "CCTV System",
  "Home Deep Cleaning", "Sofa & Carpet Cleaning", "Office Janitorial", "Pest Control",
  "Bridal Makeup", "Hair Dressing", "Facial & Skincare", "Mehendi Artist",
  "Wedding Photography", "Event Planning", "Catering Services", "DJ & Music"
];

export const allServicesList = [...serviceCategories, ...serviceSpecializations].sort();
