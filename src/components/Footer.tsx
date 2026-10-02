import { hotelData } from "../config/hotelData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D0D0B] text-[#F4F0E7] pt-20 pb-16 px-6 sm:px-10 lg:px-16 border-t border-[#1C1B17]">
      <div className="max-w-7xl mx-auto">
        {/* Top Editorial Wordmark */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#22211D] pb-12 mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-mono block mb-2">
              Suraram • Hyderabad • Telangana
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-[0.1em] text-white uppercase font-light">
              Tulips Grand
            </h2>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#A7A39A] hover:text-[#C6A15B] transition-colors self-start md:self-auto"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#C6A15B]" />
          </button>
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16 text-xs text-[#A7A39A]">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider">
              About Tulips Grand
            </h4>
            <p className="leading-relaxed font-light">
              A contemporary hospitality destination offering 38 well-appointed rooms, a multi-cuisine family dining restaurant, and three signature celebration halls near Malla Reddy Health City.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#stay" className="hover:text-white transition-colors">
                  Accommodations & Rooms
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-white transition-colors">
                  Multi-Cuisine Restaurant & Menu
                </a>
              </li>
              <li>
                <a href="#celebrations" className="hover:text-white transition-colors">
                  Banquets & Event Halls
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Property Gallery & Media
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider mb-3">
              Direct Contact
            </h4>
            <p className="text-[#DED6C7]">{hotelData.contact.displayPhone}</p>
            <p className="text-[#DED6C7]">{hotelData.contact.email}</p>
            <p className="leading-relaxed pt-2 text-[#A7A39A]">
              Block A, Merix Pride, 02-019/64, Suraram Village, 1, Hyderabad, Telangana 500055
            </p>
          </div>

          {/* Col 4: Verified Channels */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider">
              Hospitality Channels
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href={hotelData.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6A15B] transition-colors"
              >
                Google Maps Location
              </a>
              <a
                href="https://www.google.com/travel/hotels/s/search?q=Hotel+Tulips+Grand+Suraram+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6A15B] transition-colors"
              >
                Google Travel Profile
              </a>
              <a
                href={hotelData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>

        {/* Discreet Concept Demonstration Notice (Section 54) */}
        <div className="pt-8 border-t border-[#1C1B17] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A7A39A] gap-4">
          <p>© {new Date().getFullYear()} Hotel Tulips Grand. Suraram, Hyderabad, Telangana, India.</p>
          <p className="text-[#A7A39A] italic text-center sm:text-right">
            Concept website — professional design demonstration.
          </p>
        </div>
      </div>
    </footer>
  );
}
