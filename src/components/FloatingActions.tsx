import { useState } from "react";
import { hotelData } from "../config/hotelData";
import { Phone, MessageSquare, Bed, UtensilsCrossed, Navigation, Plus, X } from "lucide-react";

interface FloatingActionsProps {
  onOpenBooking: () => void;
  onOpenReservation: () => void;
}

export default function FloatingActions({
  onOpenBooking,
  onOpenReservation,
}: FloatingActionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Floating Speed Dial */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <div className="relative flex flex-col items-end">
          {/* Expanded Actions */}
          <div
            className={`flex flex-col items-end space-y-2.5 mb-3 transition-all duration-300 origin-bottom ${
              isOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            {/* Book Room */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="flex items-center space-x-3 px-4 py-2.5 bg-[#151412] border border-[#33312B] hover:border-[#C6A15B] text-white shadow-xl rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              <span>Book Room</span>
              <Bed className="w-4 h-4 text-[#C6A15B]" />
            </button>

            {/* Reserve Table */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenReservation();
              }}
              className="flex items-center space-x-3 px-4 py-2.5 bg-[#151412] border border-[#33312B] hover:border-[#C6A15B] text-white shadow-xl rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              <span>Reserve Table</span>
              <UtensilsCrossed className="w-4 h-4 text-[#C6A15B]" />
            </button>

            {/* WhatsApp */}
            <a
              href={hotelData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-2.5 bg-[#151412] border border-[#33312B] hover:border-[#25D366] text-white shadow-xl rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              <span>WhatsApp</span>
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
            </a>

            {/* Call */}
            <a
              href={`tel:${hotelData.contact.phone}`}
              className="flex items-center space-x-3 px-4 py-2.5 bg-[#151412] border border-[#33312B] hover:border-[#C6A15B] text-white shadow-xl rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              <span>Call Concierge</span>
              <Phone className="w-4 h-4 text-[#C6A15B]" />
            </a>

            {/* Directions */}
            <a
              href={hotelData.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-2.5 bg-[#151412] border border-[#33312B] hover:border-[#C6A15B] text-white shadow-xl rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              <span>Directions</span>
              <Navigation className="w-4 h-4 text-[#C6A15B]" />
            </a>
          </div>

          {/* Trigger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-13 h-13 rounded-full bg-[#C6A15B] text-[#11110F] shadow-2xl flex items-center justify-center hover:bg-[#D5B26E] transition-all focus:outline-none"
            aria-label="Quick Concierge Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Fixed Bottom Bar (Strict 15% Viewport Height Cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#11110F]/95 backdrop-blur-md border-t border-[#262420] px-4 py-2.5 flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenReservation}
          className="flex-1 py-2.5 text-center text-xs uppercase tracking-wider font-medium border border-[#C6A15B]/60 text-[#C6A15B] bg-[#151412] transition-colors"
        >
          Reserve Table
        </button>
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 py-2.5 text-center text-xs uppercase tracking-wider font-medium bg-[#C6A15B] text-[#11110F] transition-colors"
        >
          Book Room
        </button>
      </div>
    </>
  );
}
