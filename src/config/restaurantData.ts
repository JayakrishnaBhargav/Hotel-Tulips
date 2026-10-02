export interface MenuItem {
  id: string;
  name: string;
  category: "ALL" | "NORTH INDIAN" | "MUGHLAI" | "CHINESE" | "HYDERABADI" | "BIRYANI" | "SEAFOOD" | "VEGETARIAN";
  description: string;
  dietary: "Veg" | "Non-Veg" | "Halal";
  specialtyTag?: string;
}

export const menuCategories = [
  "ALL",
  "HYDERABADI",
  "BIRYANI",
  "MUGHLAI",
  "NORTH INDIAN",
  "CHINESE",
  "SEAFOOD",
  "VEGETARIAN",
] as const;

export const restaurantDishes: MenuItem[] = [
  {
    id: "hyd-dum-biryani",
    name: "Hyderabadi Dum Gosht Biryani",
    category: "BIRYANI",
    description: "Slow-cooked fragrant long-grain basmati layered with tender spiced meat, saffron, and caramelized onions sealed in traditional clay handi.",
    dietary: "Halal",
    specialtyTag: "Chef's Signature",
  },
  {
    id: "hyd-chicken-biryani",
    name: "Special Tulips Chicken Dum Biryani",
    category: "HYDERABADI",
    description: "Signature Suraram family favorite, marinated overnight with secret Nizami spices, served with Mirchi Ka Salan and creamy Burani Raita.",
    dietary: "Halal",
    specialtyTag: "Must Try",
  },
  {
    id: "mughlai-murgh-malai",
    name: "Mughlai Murgh Malai Tikka",
    category: "MUGHLAI",
    description: "Succulent chicken morsels steeped in rich cashew cream, green cardamom, and hung yogurt, charred delicately over open charcoal tandoor.",
    dietary: "Non-Veg",
    specialtyTag: "Tandoor Special",
  },
  {
    id: "mughlai-seekh-kebab",
    name: "Royal Gosht Seekh Kebab",
    category: "MUGHLAI",
    description: "Minced lamb infused with aromatic royal herbs, ginger, mint, and toasted coriander, grilled on skewers to melting tenderness.",
    dietary: "Halal",
  },
  {
    id: "north-dal-makhani",
    name: "Slow-Simmered Dal Makhani",
    category: "NORTH INDIAN",
    description: "Whole black lentils simmered overnight over slow charcoal embers with dairy churned butter, vine-ripened tomatoes, and fresh cream.",
    dietary: "Veg",
    specialtyTag: "Classic",
  },
  {
    id: "north-paneer-butter",
    name: "Paneer Tikka Butter Masala",
    category: "NORTH INDIAN",
    description: "Char-grilled cottage cheese cubes folded into a velvet tomato-fenugreek gravy finished with farm butter and roasted kasuri methi.",
    dietary: "Veg",
  },
  {
    id: "chinese-chilli-fish",
    name: "Crispy Szechuan Chilli Fish",
    category: "SEAFOOD",
    description: "Fresh river fish fillets tossed in wok-fired red Szechuan peppercorns, scallions, dry red chilies, and superior dark soy.",
    dietary: "Non-Veg",
  },
  {
    id: "chinese-dim-sum",
    name: "Steamed Vegetable Crystal Dumplings",
    category: "CHINESE",
    description: "Delicate translucent parcels filled with water chestnuts, bok choy, and shiitake mushrooms served with house chili-garlic dipping oil.",
    dietary: "Veg",
  },
  {
    id: "chinese-wok-noodles",
    name: "Hakka Wok Tossed Noodles",
    category: "CHINESE",
    description: "High-flame tossed spring noodles with crunchy shredded vegetables, light garlic, and toasted sesame aroma.",
    dietary: "Veg",
  },
  {
    id: "seafood-tandoori-prawns",
    name: "Coastal Spiced Tandoori Prawns",
    category: "SEAFOOD",
    description: "Jumbo king prawns marinated in crushed yellow mustard, aromatic carom seeds, and crushed kashmiri chilies, tandoor-roasted.",
    dietary: "Non-Veg",
    specialtyTag: "Catch of the Day",
  },
  {
    id: "veg-subz-diwani-handi",
    name: "Subz Diwani Handi",
    category: "VEGETARIAN",
    description: "Garden fresh harvest vegetables tossed with baby corn and green peas in a rich spinach and cashew nut emulsion.",
    dietary: "Veg",
  },
  {
    id: "hyd-double-ka-meetha",
    name: "Hyderabadi Shahi Double Ka Meetha",
    category: "HYDERABADI",
    description: "Traditional Hyderabad celebratory dessert of fried bread crisps soaked in thickened saffron-infused rabri, garnished with slivered pistachios.",
    dietary: "Veg",
    specialtyTag: "Heritage Dessert",
  },
];
