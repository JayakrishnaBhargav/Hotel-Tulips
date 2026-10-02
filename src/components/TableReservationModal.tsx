import { useState } from "react";
import { restaurantLinks } from "../config/restaurantLinks";
import { hotelData } from "../config/hotelData";
import { X, Calendar, Clock, Users, CheckCircle, MessageSquare, Phone } from "lucide-react";

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TableReservationModal({
  isOpen,
  onClose,
}: TableReservationModalProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:30");
  const [guests, setGuests] = useState("4 Persons");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Tulips Grand Restaurant, I would like to reserve a table:\n• Name: ${name || "Guest"}\n• Phone: ${phone || "Not provided"}\n• Date: ${date || "Today"}\n• Time: ${time}\n• Guests: ${guests}\n• Notes: ${specialRequest || "None"}`
    );
    window.open(`https://wa.me/918712016688?text=${text}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#11110F]/90 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Reserve a Table"
    >
      <div className="relative w-full max-w-lg bg-[#151412] border border-[#33312B] p-6 sm:p-10 shadow-2xl">
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className="absolute top-6 right-6 p-2 text-[#A7A39A] hover:text-white"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono block mb-1">
                Family & Fine Dining
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wide">
                Your Table Awaits.
              </h3>
              <p className="text-xs text-[#DED6C7] font-serif italic mt-1">
                “Reserve your table and make your next meal a little more special.”
              </p>
              <p className="text-xs text-[#A7A39A] mt-2">
                Submit your table request directly to our restaurant manager.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="19:00">07:00 PM (Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Dinner)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Guests / Party Size
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                  >
                    <option value="2 Persons">2 Persons</option>
                    <option value="4 Persons">4 Persons (Family)</option>
                    <option value="6 Persons">6 Persons</option>
                    <option value="8+ Large Table">8+ Large Table</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98490 00000"
                  className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                  Special Request (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="e.g. Birthday celebration, high chair, dietary preferences"
                  className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2 text-xs text-white focus:border-[#C6A15B] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs uppercase tracking-[0.18em] font-medium bg-[#C6A15B] hover:bg-[#D5B26E] text-[#11110F] transition-all shadow-md"
                >
                  Request a Table
                </button>
              </div>

              <p className="text-[11px] text-[#A7A39A] text-center pt-1">
                * We do not display fake availability slots. Your dining request is dispatched directly for concierge confirmation.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-4 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#C6A15B]/15 border border-[#C6A15B] flex items-center justify-center text-[#C6A15B] mb-4">
              <CheckCircle className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-serif text-white uppercase tracking-wide mb-2">
              Request Ready to Dispatch
            </h3>
            <p className="text-xs text-[#DED6C7] leading-relaxed max-w-sm mx-auto mb-6">
              Your table inquiry for <span className="text-[#C6A15B] font-medium">{guests}</span> on{" "}
              <span className="text-[#C6A15B] font-medium">{date || "your selected date"}</span> at{" "}
              <span className="text-[#C6A15B] font-medium">{time}</span> is formatted and ready.
            </p>

            <div className="space-y-3 max-w-xs mx-auto mb-6">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-3 bg-[#25D366] hover:bg-[#22bf5b] text-white text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Dispatch via WhatsApp
              </button>

              <a
                href={`tel:${hotelData.contact.phone}`}
                className="w-full py-3 border border-[#33312B] hover:border-[#C6A15B] text-[#F4F0E7] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors block"
              >
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                Call Restaurant Directly
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs uppercase tracking-wider text-[#A7A39A] hover:text-white"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
