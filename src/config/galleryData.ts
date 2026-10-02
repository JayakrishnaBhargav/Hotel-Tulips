export interface GalleryItem {
  id: string;
  category: "HOTEL" | "DINING" | "ROOMS" | "EVENTS" | "FOOD";
  title: string;
  caption: string;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "HOTEL",
    title: "Contemporary Facade at Dusk",
    caption: "Hotel Tulips Grand architectural exterior with illuminated entrance in Suraram, Hyderabad",
    image: "/src/assets/images/tulips_grand_facade_signage_1790937432898.jpg",
  },
  {
    id: "g2",
    category: "ROOMS",
    title: "Standard Room with City View",
    caption: "Thoughtfully configured king room with Suraram skyline view and work desk",
    image: "/src/assets/images/tulips_room_city_view_1790936880532.jpg",
  },
  {
    id: "g3",
    category: "DINING",
    title: "Multi-Cuisine Restaurant Ambience",
    caption: "Warm chandelier illumination and intimate family seating arrangements",
    image: "/src/assets/images/tulips_restaurant_dining_1790936905781.jpg",
  },
  {
    id: "g4",
    category: "EVENTS",
    title: "Vaibhavam Celebration Ballroom",
    caption: "Grand banquet setting prepared for a landmark reception gala",
    image: "/src/assets/images/tulips_banquet_ballroom_1790936917494.jpg",
  },
  {
    id: "g5",
    category: "ROOMS",
    title: "Standard Twin Accommodation",
    caption: "Comfortable twin-bed room configuration with open sit-out corner",
    image: "/src/assets/images/tulips_room_twin_bed_1790936893090.jpg",
  },
  {
    id: "g6",
    category: "FOOD",
    title: "Royal Tandoori & Mughlai Specialties",
    caption: "Authentic slow-cooked kebabs and aromatic charcoal preparations",
    image: "/src/assets/images/tulips_restaurant_dining_1790936905781.jpg",
  },
  {
    id: "g7",
    category: "EVENTS",
    title: "Amantran & Utsavam Gathering Venues",
    caption: "Elegantly arranged seating for private milestones and seminars",
    image: "/src/assets/images/tulips_banquet_ballroom_1790936917494.jpg",
  },
  {
    id: "g8",
    category: "HOTEL",
    title: "Lounge & Reception Foyer",
    caption: "Inviting arrival experience opposite Malla Reddy Health City",
    image: "/src/assets/images/tulips_hero_facade_1790936865676.jpg",
  },
];
