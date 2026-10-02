import { useState, useEffect } from "react";
import { hotelData } from "../config/hotelData";
import { X, Calendar, MessageSquare, Phone, CheckCircle, Sparkles } from "lucide-react";

interface EventEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVenueName?: string;
}

export default function EventEnquiryModal({
  isOpen,
  onClose,
  defaultVenueName,
}: EventEnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("Wedding / Reception");
  const [venue, setVenue] = useState(defaultVenueName || "Vaibhavam");
  const [expectedGuests, setExpectedGuests] = useState("100 - 250 Guests");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultVenueName) {
      setVenue(defaultVenueName);
    }
  }, [defaultVenueName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDispatch = () => {
    const text = encodeURIComponent(
      `Hello Hotel Tulips Grand Banquet Team,\nI would like to enquire about hosting an event:\n• Name: ${name}\n• Phone: ${phone}\n• Email: ${email || "N/A"}\n• Event Type: ${eventType}\n• Preferred Venue: ${venue}\n• Guests: ${expectedGuests}\n• Date: ${preferredDate || "TBD"}\n• Notes: ${message || "Standard enquiry"}`
    );
    window.open(`https://wa.me/918712016688?text=${text}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#11110F]/90 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Plan Your Event"
    >
      <div className="relative w-full max-w-xl bg-[#151412] border border-[#33312B] p-6 sm:p-10 shadow-2xl max-h-[92vh] overflow-y-auto">
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
                Banquets & Celebrations
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wide">
                Plan Your Event
              </h3>
              <p className="text-xs text-[#A7A39A] mt-2">
                Connect directly with our banquet manager to discuss dates, seating layouts, and customized catering menus.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Your Full Name
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Occasion / Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                  >
                    <option value="Wedding / Reception">Wedding / Reception</option>
                    <option value="Engagement / Sangeet">Engagement / Sangeet</option>
                    <option value="Birthday / Milestone Celebration">Birthday / Milestone</option>
                    <option value="Corporate Seminar / Health City Meet">Corporate / Health City Meet</option>
                    <option value="Naming / Traditional Ceremony">Traditional Ceremony</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Preferred Hall
                  </label>
                  <select
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                  >
                    <option value="Vaibhavam">Vaibhavam</option>
                    <option value="Amantran">Amantran</option>
                    <option value="Utsavam">Utsavam</option>
                    <option value="Need Guidance">Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Expected Guests
                  </label>
                  <select
                    value={expectedGuests}
                    onChange={(e) => setExpectedGuests(e.target.value)}
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                  >
                    <option value="50 - 100 Guests">50 - 100 Guests</option>
                    <option value="100 - 250 Guests">100 - 250 Guests</option>
                    <option value="250 - 500 Guests">250 - 500 Guests</option>
                    <option value="500+ Gala Gathering">500+ Gala Gathering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2.5 text-xs text-white focus:border-[#C6A15B] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#DED6C7] mb-1.5">
                  Message / Special Requirements
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about decor preferences, catering requirements, or audio/visual needs"
                  className="w-full bg-[#11110F] border border-[#2B2924] px-3.5 py-2 text-xs text-white focus:border-[#C6A15B] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs uppercase tracking-[0.18em] font-medium bg-[#C6A15B] hover:bg-[#D5B26E] text-[#11110F] transition-all shadow-md"
                >
                  Plan My Event
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-4 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#C6A15B]/15 border border-[#C6A15B] flex items-center justify-center text-[#C6A15B] mb-4">
              <CheckCircle className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-serif text-white uppercase tracking-wide mb-2">
              Enquiry Formatted
            </h3>
            <p className="text-xs text-[#DED6C7] leading-relaxed max-w-sm mx-auto mb-6">
              Your banquet enquiry for <span className="text-[#C6A15B] font-medium">{venue}</span> ({eventType}) on{" "}
              <span className="text-[#C6A15B] font-medium">{preferredDate}</span> is ready for direct dispatch to our event planners.
            </p>

            <div className="space-y-3 max-w-xs mx-auto mb-6">
              <button
                type="button"
                onClick={handleWhatsAppDispatch}
                className="w-full py-3 bg-[#25D366] hover:bg-[#22bf5b] text-white text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Send via WhatsApp
              </button>

              <a
                href={`tel:${hotelData.contact.phone}`}
                className="w-full py-3 border border-[#33312B] hover:border-[#C6A15B] text-[#F4F0E7] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors block"
              >
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                Call Banquet Manager
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
