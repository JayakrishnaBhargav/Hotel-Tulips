import { useState } from "react";
import { roomData, Room } from "../config/roomData";
import { ArrowRight, Maximize2, X, Check, ExternalLink } from "lucide-react";

interface RoomsProps {
  onOpenBooking: (roomType?: string) => void;
}

export default function Rooms({ onOpenBooking }: RoomsProps) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section
      id="stay"
      className="bg-[#11110F] text-[#F4F0E7] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#22211D]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                Accommodations
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-wide">
              Stay With Us.
            </h2>
            <p className="mt-2 text-base text-[#C6A15B] font-serif italic">
              Comfort designed around you.
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#A7A39A] leading-relaxed">
              Featuring approximately 38 rooms tailored for guests visiting Suraram and Malla Reddy Health City. 
              Modern air-conditioned layouts with dedicated work desks, intimate dining areas, and private ensuite bathrooms.
            </p>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {roomData.map((room) => (
            <div
              key={room.id}
              className="group bg-[#151412] border border-[#262420] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#C6A15B]/50 hover:-translate-y-1 shadow-lg"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1B1A17]">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-transparent to-transparent opacity-80" />
                
                {/* Size & Bed Badges as unboxed text per zero-pill rules */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 text-xs font-mono tracking-wider bg-[#11110F]/85 text-[#F4F0E7] px-3 py-1 border border-white/10">
                  <span>{room.size}</span>
                  <span className="text-[#C6A15B]">·</span>
                  <span>{room.bedType}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedRoom(room)}
                  className="absolute bottom-4 right-4 p-2 bg-[#11110F]/80 text-[#DED6C7] hover:text-[#C6A15B] transition-colors"
                  aria-label={`View details of ${room.name}`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-serif text-white tracking-wide group-hover:text-[#C6A15B] transition-colors">
                      {room.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#C6A15B] uppercase tracking-wider mb-4">
                    {room.view}
                  </p>
                  <p className="text-sm text-[#A7A39A] font-light leading-relaxed mb-6">
                    {room.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#DED6C7] py-4 border-y border-[#262420]">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                      <span>Dedicated Work Desk</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                      <span>In-Room Dining Table</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                      <span>Private Bathroom</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                      <span>Open Sit-out Space</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-8 pt-2 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className="text-xs uppercase tracking-[0.16em] text-[#DED6C7] hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    View Room
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(room.name)}
                    className="px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C6A15B] hover:bg-[#D5B26E] text-[#11110F] transition-all flex items-center gap-2"
                  >
                    Check Latest Price
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#A7A39A] tracking-wider max-w-xl mx-auto">
            * Room rates fluctuate based on dates, occupancy, and promotional booking partner offers. 
            Click <span className="text-[#C6A15B]">Check Latest Price</span> to view real-time availability across verified booking platforms.
          </p>
        </div>
      </div>

      {/* Room Detail Modal (Section 15) */}
      {selectedRoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#11110F]/90 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={selectedRoom.name}
        >
          <div className="relative w-full max-w-3xl bg-[#151412] border border-[#33312B] p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedRoom(null)}
              className="absolute top-6 right-6 p-2 text-[#A7A39A] hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden mb-6 bg-[#1B1A17] border border-[#262420]">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap items-baseline gap-4 mb-2">
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wide">
                {selectedRoom.name}
              </h3>
              <span className="text-xs text-[#C6A15B] font-mono">
                {selectedRoom.size} · {selectedRoom.bedType}
              </span>
            </div>

            <p className="text-xs text-[#A7A39A] uppercase tracking-widest mb-6">
              {selectedRoom.view} · Occupancy: {selectedRoom.occupancy}
            </p>

            <p className="text-sm text-[#DED6C7] font-light leading-relaxed mb-8">
              {selectedRoom.fullDescription}
            </p>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] mb-4 font-semibold">
                Verified Amenities & Inclusions
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedRoom.verifiedAmenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#DED6C7]">
                    <Check className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#262420] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#A7A39A]">
                No payment collected on this demo concept
              </span>
              <button
                type="button"
                onClick={() => {
                  const roomName = selectedRoom.name;
                  setSelectedRoom(null);
                  onOpenBooking(roomName);
                }}
                className="w-full sm:w-auto px-8 py-3 text-xs uppercase tracking-[0.18em] font-medium bg-[#C6A15B] hover:bg-[#D5B26E] text-[#11110F] transition-all"
              >
                Book This Room →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
