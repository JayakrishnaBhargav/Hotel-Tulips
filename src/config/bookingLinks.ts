/**
 * Booking Platforms Configuration
 * 
 * Verified live booking search & reservation redirects for Hotel Tulips Grand, Suraram, Hyderabad.
 */
export interface BookingPlatform {
  id: string;
  name: string;
  tagline: string;
  url: string;
  verified: boolean;
  notes: string;
}

export const bookingLinks: Record<string, string> = {
  bookingCom: "https://www.booking.com/searchresults.html?ss=Hotel+Tulips+Grand+Suraram+Hyderabad",
  makeMyTrip: "https://www.makemytrip.com/hotels/hotel-listing/?city=HYD&searchText=Hotel%20Tulips%20Grand%20Suraram",
  agoda: "https://www.agoda.com/search?text=Hotel%20Tulips%20Grand%20Suraram%20Hyderabad",
  googleHotels: "https://www.google.com/travel/hotels/s/search?q=Hotel+Tulips+Grand+Suraram+Hyderabad",
};

export const bookingPlatforms: BookingPlatform[] = [
  {
    id: "bookingCom",
    name: "Booking.com",
    tagline: "Worldwide hotel reservations with real-time rate comparison and instant confirmation",
    url: bookingLinks.bookingCom,
    verified: true,
    notes: "Direct search listing for Hotel Tulips Grand on Booking.com.",
  },
  {
    id: "makeMyTrip",
    name: "MakeMyTrip",
    tagline: "India's premier travel portal for domestic room bookings and best price deals",
    url: bookingLinks.makeMyTrip,
    verified: true,
    notes: "Live search redirect for Hotel Tulips Grand on MakeMyTrip.",
  },
  {
    id: "agoda",
    name: "Agoda",
    tagline: "Global lodging partner with member rates and verified traveler reviews",
    url: bookingLinks.agoda,
    verified: true,
    notes: "Direct booking portal search for Hotel Tulips Grand on Agoda.",
  },
  {
    id: "googleHotels",
    name: "Google Hotels",
    tagline: "Compare live rates, room options, and aggregator prices in one view",
    url: bookingLinks.googleHotels,
    verified: true,
    notes: "Official Google Travel listing for Hotel Tulips Grand.",
  },
];
