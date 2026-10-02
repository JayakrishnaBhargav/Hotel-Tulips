export interface BanquetVenue {
  id: string;
  name: string;
  pronunciation?: string;
  tagline: string;
  description: string;
  eventTypes: string[];
  features: string[];
  image: string;
}

export const banquetVenues: BanquetVenue[] = [
  {
    id: "vaibhavam",
    name: "VAIBHAVAM",
    pronunciation: "Vye-bha-vam",
    tagline: "The Grandeur Ballroom",
    description: "Our signature flagship hall designed for major life milestones, wedding receptions, and gala banquets. Features high ceilings, celebratory chandeliers, audio-visual stage setups, and expansive banquet floor plan.",
    eventTypes: ["Grand Weddings", "Reception Galas", "Corporate Annual Meets", "Large Family Celebrations"],
    features: [
      "Custom stage and elevated dais",
      "Dedicated banquet dining corridor",
      "Acoustically tuned sound infrastructure",
      "Customizable theme lighting and floral decor setups",
    ],
    image: "/src/assets/images/tulips_banquet_ballroom_1790936917494.jpg",
  },
  {
    id: "amantran",
    name: "AMANTRAN",
    pronunciation: "Aman-tran",
    tagline: "Intimate Elegance & Milestone Moments",
    description: "A warmly illuminated, sophisticated hall tailored for intimate gatherings, traditional ceremonies, ring ceremonies, and engagement dinners where personal connection is paramount.",
    eventTypes: ["Engagements & Sangeet", "Pre-wedding Rituals", "Milestone Birthdays", "Private Family Dinners"],
    features: [
      "Warm ambient chandelier fixtures",
      "Flexible seating layouts (Cluster, Theatre, or Formal Dining)",
      "Dedicated buffet presentation counters",
      "Private bridal / host waiting chamber",
    ],
    image: "/src/assets/images/tulips_hero_facade_1790936865676.jpg",
  },
  {
    id: "utsavam",
    name: "UTSAVAM",
    pronunciation: "Ut-sa-vam",
    tagline: "Dynamic Celebrations & Corporate Conclaves",
    description: "A modern, highly adaptable venue ideal for high-impact seminars, corporate conferences, product presentations, and celebratory banquets for medical & corporate teams.",
    eventTypes: ["Corporate Seminars & Conclaves", "Doctors' Symposiums & Health City Meets", "Half-Saree & Naming Ceremonies", "Festive Banquets"],
    features: [
      "Integrated projection and presentation screens",
      "High-speed enterprise Wi-Fi connectivity",
      "Versatile classroom, U-shape, or cocktail banquet formats",
      "Full in-house catering by Tulips Grand culinary team",
    ],
    image: "/src/assets/images/tulips_restaurant_dining_1790936905781.jpg",
  },
];
