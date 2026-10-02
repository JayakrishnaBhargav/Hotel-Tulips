import { useState } from "react";
import { banquetVenues, BanquetVenue } from "../config/banquetData";
import { ArrowRight, Check, Sparkles, Calendar } from "lucide-react";

interface BanquetsProps {
  onOpenEnquiry: (venueName?: string) => void;
}

export default function Banquets({ onOpenEnquiry }: BanquetsProps) {
  const [activeVenue, setActiveVenue] = useState<BanquetVenue>(banquetVenues[0]);

  return (
    <section
      id="celebrations"
      className="bg-[#11110F] text-[#F4F0E7] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#22211D]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                Banquets & Events
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-wide">
              Celebrate Something Special.
            </h2>
            <p className="mt-2 text-base text-[#C6A15B] font-serif italic">
              Spaces designed for moments that deserve to be remembered.
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#A7A39A] leading-relaxed">
              Featuring three distinguished event venues—Vaibhavam, Amantran, and Utsavam. 
              Equipped with banquet audio systems, adaptable seating, and dedicated catering services for wedding celebrations, corporate meets, and family gatherings.
            </p>
          </div>
        </div>

        {/* WOW INTERACTION #3: Interactive Venue Selector Tabs */}
        <div className="flex items-center gap-3 border-b border-[#252420] pb-4 mb-10 overflow-x-auto no-scrollbar">
          {banquetVenues.map((venue) => (
            <button
              key={venue.id}
              type="button"
              onClick={() => setActiveVenue(venue)}
              className={`pb-2 px-4 text-sm font-serif tracking-[0.16em] uppercase transition-all whitespace-nowrap relative ${
                activeVenue.id === venue.id
                  ? "text-[#C6A15B] font-medium"
                  : "text-[#A7A39A] hover:text-white"
              }`}
            >
              {venue.name}
              {activeVenue.id === venue.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A15B]" />
              )}
            </button>
          ))}
        </div>

        {/* Active Venue Hero Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#151412] border border-[#2B2924] p-6 sm:p-10 mb-12">
          {/* Venue Image */}
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#1B1A17] border border-[#22211D]">
            <img
              src={activeVenue.image}
              alt={activeVenue.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-mono">
                {activeVenue.tagline}
              </span>
              <h3 className="text-3xl font-serif text-white uppercase">
                {activeVenue.name}
              </h3>
            </div>
          </div>

          {/* Venue Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C6A15B] mb-2 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Venue Overview</span>
              </div>
              <p className="text-sm text-[#DED6C7] font-light leading-relaxed mb-6">
                {activeVenue.description}
              </p>

              {/* Event Types */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-[0.16em] text-white mb-3 font-semibold">
                  Ideal Occasions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeVenue.eventTypes.map((evt, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#1C1A16] border border-[#302D26] px-3 py-1 text-[#DED6C7]"
                    >
                      {evt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Venue Features */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.16em] text-white mb-3 font-semibold">
                  Venue Inclusions
                </h4>
                <ul className="space-y-2">
                  {activeVenue.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-[#A7A39A]">
                      <Check className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-[#262420]">
              <button
                type="button"
                onClick={() => onOpenEnquiry(activeVenue.name)}
                className="w-full py-3.5 text-center text-xs uppercase tracking-[0.18em] font-medium bg-[#C6A15B] hover:bg-[#D5B26E] text-[#11110F] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Plan Your Event at {activeVenue.name}
              </button>
            </div>
          </div>
        </div>

        {/* 3 Venue Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {banquetVenues.map((venue) => (
            <div
              key={venue.id}
              className={`p-6 border transition-all duration-300 flex flex-col justify-between ${
                activeVenue.id === venue.id
                  ? "bg-[#181714] border-[#C6A15B]/60"
                  : "bg-[#151412] border-[#22211D] hover:border-[#38352D]"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#C6A15B] uppercase">
                  {venue.tagline}
                </span>
                <h4 className="text-xl font-serif text-white uppercase mt-1 mb-2">
                  {venue.name}
                </h4>
                <p className="text-xs text-[#A7A39A] leading-relaxed line-clamp-3 mb-4">
                  {venue.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#252420]">
                <button
                  type="button"
                  onClick={() => setActiveVenue(venue)}
                  className="text-xs uppercase tracking-wider text-[#DED6C7] hover:text-white"
                >
                  View Details
                </button>
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(venue.name)}
                  className="text-xs uppercase tracking-wider text-[#C6A15B] hover:underline flex items-center gap-1"
                >
                  Enquire
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
