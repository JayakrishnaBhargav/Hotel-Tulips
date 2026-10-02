export interface HotelInfo {
  name: string;
  tagline: string;
  subTagline: string;
  location: {
    street: string;
    landmark: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    whatsappNumber: string;
    whatsappUrl: string;
    googleMapsUrl: string;
  };
  stats: {
    roomsCount: number;
    roomTypes: string;
    cuisines: string[];
    venuesCount: number;
  };
  disclaimer: string;
}

export const hotelData: HotelInfo = {
  name: "Hotel Tulips Grand",
  tagline: "DINE. STAY. CELEBRATE.",
  subTagline: "A contemporary destination for dining, stays and celebrations in Suraram, Hyderabad.",
  location: {
    street: "Block A, Merix Pride, 02-019/64, Suraram Village, 1",
    landmark: "Near Malla Reddy Health City",
    locality: "Suraram",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500055",
    fullAddress: "Block A, Merix Pride, 02-019/64, Suraram Village, 1, Hyderabad, Telangana 500055 (Near Malla Reddy Health City)",
  },
  contact: {
    phone: "+918712016688",
    displayPhone: "+91 87120 16688",
    email: "reservations@hoteltulipsgrand.in",
    whatsappNumber: "+918712016688",
    whatsappUrl: "https://wa.me/918712016688?text=Hello%20Hotel%20Tulips%20Grand,%20I%20would%20like%20to%20enquire%20about%20your%20services.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Tulips+Grand+Block+A+Merix+Pride+02-019%2F64+Suraram+Village+Hyderabad+Telangana+500055",
  },
  stats: {
    roomsCount: 38,
    roomTypes: "Standard City View & Twin Configurations",
    cuisines: ["Hyderabadi", "North Indian", "Mughlai", "Chinese", "Seafood"],
    venuesCount: 3,
  },
  disclaimer: "Concept website demonstration prepared for Hotel Tulips Grand. All third-party trademarks belong to their respective owners.",
};
