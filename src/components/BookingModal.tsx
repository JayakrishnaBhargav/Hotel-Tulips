import { useState } from "react";
import { bookingPlatforms, BookingPlatform } from "../config/bookingLinks";
import { hotelData } from "../config/hotelData";
import { X, ExternalLink, Calendar, Users, Home, AlertCircle, Phone } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoomName?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultRoomName,
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [rooms, setRooms] = useState("1 Room");

  if (!isOpen) return null;

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePlatformClick = (platform: BookingPlatform) => {
    if (platform.url) {
      window.open(platform.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#11110F]/90 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Book Your Stay"
    >
      <div className="relative w-full max-w-xl bg-[#151412] border border-[#33312B] p-6 sm:p-10 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            setStep(1);
            onClose();
          }}
          className="absolute top-6 right-6 p-2 text-[#A7A39A] hover:text-white"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono block mb-1">
                Discovery & Reservation
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wide">
                Book Your Stay
              </h3>
              {defaultRoomName && (
                <p className="text-xs text-[#C6A15B] mt-1 font-mono">
                  Selected Room: {defaultRoomName}
                </p>
              )}
              <p className="text-xs text-[#A7A39A] mt-2">
                Specify your dates to find the best available rates across verified booking channels.
              </p>
            </div>

            <form onSubmit={handleContinue} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Guests">2 Guests (Standard)</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4+ Family">4+ Family</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Rooms
                  </label>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                  >
                    <option value="1 Room">1 Room</option>
                    <option value="2 Rooms">2 Rooms</option>
                    <option value="3+ Rooms">3+ Rooms (Group)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs uppercase tracking-[0.18em] font-medium bg-[#C6A15B] hover:bg-[#D5B26E] text-[#11110F] transition-all shadow-md"
                >
                  Continue to Select Booking Platform →
                </button>
              </div>

              <p className="text-[11px] text-[#A7A39A] text-center pt-2">
                * We redirect directly to authorized booking platforms without collecting payments or claiming unverified live inventory.
              </p>
            </form>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono block mb-1">
                Verified Partners
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wide">
                Where Would You Like to Book?
              </h3>
              <p className="text-xs text-[#A7A39A] mt-2">
                You’ll continue to the selected booking platform to complete your reservation.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {bookingPlatforms.map((platform) => (
                <div
                  key={platform.id}
                  onClick={() => handlePlatformClick(platform)}
                  className={`p-4 border transition-all flex items-center justify-between ${
                    platform.verified
                      ? "bg-[#11110F] border-[#2E2B25] hover:border-[#C6A15B] cursor-pointer group"
                      : "bg-[#11110F]/50 border-[#22211D] opacity-75"
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-serif text-white font-medium">
                        {platform.name}
                      </h4>
                      {!platform.verified && (
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#A7A39A] bg-[#1B1A17] px-2 py-0.5 border border-white/5">
                          Partner Link Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#A7A39A] mt-0.5">
                      {platform.tagline}
                    </p>
                  </div>

                  {platform.verified ? (
                    <span className="text-xs uppercase tracking-wider text-[#C6A15B] group-hover:underline flex items-center gap-1 shrink-0 ml-3">
                      Continue →
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <span className="text-[11px] text-[#A7A39A] shrink-0 ml-3">
                      Slot Ready
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Direct Phone Fallback */}
            <div className="p-4 bg-[#11110F] border border-[#2B2924] flex items-center justify-between">
              <div>
                <p className="text-xs font-serif text-white">
                  Prefer direct phone booking assistance?
                </p>
                <p className="text-[11px] text-[#A7A39A]">
                  Speak directly with the front desk concierge.
                </p>
              </div>
              <a
                href={`tel:${hotelData.contact.phone}`}
                className="px-4 py-2 text-xs uppercase tracking-wider font-medium border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B]/10 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Desk
              </a>
            </div>

            <div className="mt-6 flex justify-between items-center pt-4 border-t border-[#262420]">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs uppercase tracking-wider text-[#A7A39A] hover:text-white"
              >
                ← Back to Dates
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  onClose();
                }}
                className="text-xs uppercase tracking-wider text-[#C6A15B] hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
