export interface Room {
  id: string;
  name: string;
  size: string;
  bedType: string;
  occupancy: string;
  view: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  verifiedAmenities: string[];
}

export const roomData: Room[] = [
  {
    id: "standard-city-view",
    name: "Standard Room with City View",
    size: "Approx. 280 sq.ft",
    bedType: "Plush King Bed",
    occupancy: "Up to 2 Adults + 1 Child",
    view: "City View (Suraram / Health City)",
    image: "/src/assets/images/tulips_room_city_view_1790936880532.jpg",
    shortDescription: "Thoughtfully configured contemporary room featuring generous natural light, plush king bedding, and an open sit-out corner.",
    fullDescription: "Designed for business travelers and visiting families, the Standard Room with City View offers a peaceful, climate-controlled retreat near Malla Reddy Health City. The room features a spacious king bed, dedicated work desk with high-speed connectivity, a comfortable dining setup, and a private ensuite bathroom with modern fixtures.",
    verifiedAmenities: [
      "Plush King-size bedding with fine linens",
      "Expansive windows with Suraram city view",
      "Dedicated ergonomic work desk & task lighting",
      "Intimate in-room dining seating area",
      "Ensuite private bathroom with hot water shower",
      "Open sit-out relaxation corner",
      "Individual climate control air conditioning",
      "Direct phone & concierge connection",
    ],
  },
  {
    id: "standard-twin",
    name: "Standard Twin Room",
    size: "Approx. 250 sq.ft",
    bedType: "Twin Single Beds",
    occupancy: "Up to 2 Adults",
    view: "Quiet Courtyard View",
    image: "/src/assets/images/tulips_room_twin_bed_1790936893090.jpg",
    shortDescription: "Flexible twin-bed accommodation featuring an open sit-out lounge, work station, and calm residential ambiance.",
    fullDescription: "Ideal for colleagues, delegates attending Malla Reddy Health City events, or traveling companions. The Standard Twin Room pairs two independent twin beds with clean architectural finishes, warm oak tones, a private ensuite bathroom, and versatile work & dining space.",
    verifiedAmenities: [
      "Two individual twin beds with plush mattresses",
      "Private ensuite bathroom with premium amenities",
      "Compact work desk & accessible power stations",
      "In-room dining table & seating",
      "Air-conditioned interior climate management",
      "Open sit-out reading area",
      "Daily housekeeping & laundry assistance",
      "High-speed wireless connectivity",
    ],
  },
];
