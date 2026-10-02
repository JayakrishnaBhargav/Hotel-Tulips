import { hotelData } from "../config/hotelData";
import { Phone, MessageSquare, Bed, UtensilsCrossed, Calendar } from "lucide-react";

interface ContactProps {
  onOpenBooking: () => void;
  onOpenReservation: () => void;
  onOpenEnquiry: () => void;
}

export default function Contact({
  onOpenBooking,
  onOpenReservation,
  onOpenEnquiry,
}: ContactProps) {
  return (
    <section
      id="contact"
      className="bg-[#11110F] text-[#F4F0E7] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#22211D]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium block mb-3">
            Direct Concierge Desk
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white tracking-wide uppercase leading-tight">
            Let's Make It <br />
            <span className="italic text-[#C6A15B] font-normal">
              Memorable.
            </span>
          </h2>
          <p className="mt-4 text-sm text-[#A7A39A] font-light max-w-lg mx-auto">
            Our guest relationship team is available to assist with room bookings, family dining table reservations, and banquet event inquiries.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {/* Call */}
          <a
            href={`tel:${hotelData.contact.phone}`}
            className="group p-6 bg-[#151412] border border-[#252420] hover:border-[#C6A15B] transition-all text-center flex flex-col items-center justify-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#1B1A17] flex items-center justify-center text-[#C6A15B] mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-[0.16em] font-medium text-white group-hover:text-[#C6A15B] transition-colors">
              Call
            </span>
            <span className="text-[11px] text-[#A7A39A] mt-1 font-mono hidden sm:block">
              {hotelData.contact.displayPhone}
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={hotelData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-[#151412] border border-[#252420] hover:border-[#25D366] transition-all text-center flex flex-col items-center justify-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#1B1A17] flex items-center justify-center text-[#25D366] mb-3 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-[0.16em] font-medium text-white group-hover:text-[#25D366] transition-colors">
              WhatsApp
            </span>
            <span className="text-[11px] text-[#A7A39A] mt-1 hidden sm:block">
              Instant Chat
            </span>
          </a>

          {/* Reserve a Table */}
          <button
            type="button"
            onClick={onOpenReservation}
            className="group p-6 bg-[#151412] border border-[#252420] hover:border-[#C6A15B] transition-all text-center flex flex-col items-center justify-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#1B1A17] flex items-center justify-center text-[#C6A15B] mb-3 group-hover:scale-110 transition-transform">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-[0.16em] font-medium text-white group-hover:text-[#C6A15B] transition-colors">
              Dining
            </span>
            <span className="text-[11px] text-[#A7A39A] mt-1 hidden sm:block">
              Reserve Table
            </span>
          </button>

          {/* Book a Room */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="group p-6 bg-[#151412] border border-[#252420] hover:border-[#C6A15B] transition-all text-center flex flex-col items-center justify-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#1B1A17] flex items-center justify-center text-[#C6A15B] mb-3 group-hover:scale-110 transition-transform">
              <Bed className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-[0.16em] font-medium text-white group-hover:text-[#C6A15B] transition-colors">
              Stay
            </span>
            <span className="text-[11px] text-[#A7A39A] mt-1 hidden sm:block">
              Book a Room
            </span>
          </button>

          {/* Plan an Event */}
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="col-span-2 md:col-span-1 group p-6 bg-[#151412] border border-[#252420] hover:border-[#C6A15B] transition-all text-center flex flex-col items-center justify-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#1B1A17] flex items-center justify-center text-[#C6A15B] mb-3 group-hover:scale-110 transition-transform">
              <Calendar className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-[0.16em] font-medium text-white group-hover:text-[#C6A15B] transition-colors">
              Banquets
            </span>
            <span className="text-[11px] text-[#A7A39A] mt-1 hidden sm:block">
              Plan an Event
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
