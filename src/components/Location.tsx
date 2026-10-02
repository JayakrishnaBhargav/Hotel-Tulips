import { hotelData } from "../config/hotelData";
import { MapPin, Navigation, Phone, MessageSquare, ExternalLink } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="bg-[#151412] text-[#F4F0E7] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#22211D]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Location Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1.5px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                Destination & Coordinates
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-wide">
              Find Your Way <br />
              <span className="italic text-[#C6A15B] font-normal">To Tulips.</span>
            </h2>

            {/* Landmark Tag */}
            <div className="inline-flex items-center space-x-2 bg-[#C6A15B]/10 border border-[#C6A15B]/30 px-3.5 py-1.5 text-xs text-[#C6A15B]">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="font-semibold tracking-wider uppercase">
                {hotelData.location.landmark}
              </span>
            </div>

            {/* Address Block */}
            <div className="p-6 bg-[#11110F] border border-[#262420] space-y-2">
              <p className="text-sm font-serif text-white tracking-wide">
                {hotelData.name}
              </p>
              <p className="text-xs text-[#DED6C7] font-light">
                {hotelData.location.street}
              </p>
              <p className="text-xs text-[#DED6C7] font-light">
                {hotelData.location.locality}, {hotelData.location.city}
              </p>
              <p className="text-xs text-[#A7A39A] font-mono">
                {hotelData.location.state} — {hotelData.location.pincode}, India
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={hotelData.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xs uppercase tracking-[0.16em] font-medium bg-[#C6A15B] hover:bg-[#D5B26E] text-[#11110F] transition-all flex items-center gap-2 shadow-md"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={`tel:${hotelData.contact.phone}`}
                className="px-5 py-3 text-xs uppercase tracking-[0.16em] font-medium border border-[#33312B] hover:border-[#C6A15B] text-white hover:text-[#C6A15B] transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                Call Concierge
              </a>
              <a
                href={hotelData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs uppercase tracking-[0.16em] font-medium border border-[#33312B] hover:border-[#25D366] text-white hover:text-[#25D366] transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full bg-[#11110F] border border-[#2B2924] overflow-hidden flex flex-col justify-between p-6">
              {/* Architectural Map Background Graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#A7A39A]">
                <span>17.5147° N, 78.4382° E</span>
                <span className="text-[#C6A15B]">Suraram Junction</span>
              </div>

              {/* Pin Centerpiece */}
              <div className="relative z-10 text-center my-auto py-8">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#C6A15B]/15 border border-[#C6A15B] flex items-center justify-center text-[#C6A15B] mb-3 animate-pulse">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-white uppercase">
                  Hotel Tulips Grand
                </h3>
                <p className="text-xs text-[#C6A15B] mt-1 font-mono">
                  Near Malla Reddy Health City
                </p>
                <p className="text-[11px] text-[#A7A39A] mt-2 max-w-xs mx-auto">
                  Strategically positioned along the North Hyderabad corridor with seamless transit to Medchal road and surrounding educational hubs.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-[#22211D] flex items-center justify-between">
                <span className="text-xs text-[#DED6C7]">
                  Open in Google Maps
                </span>
                <a
                  href={hotelData.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C6A15B] hover:underline flex items-center gap-1 font-medium uppercase tracking-wider"
                >
                  View Live Map
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
