import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenBooking, onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track active section for indicator
      const sections = ["hero", "stay", "dining", "celebrations", "gallery", "location"];
      const scrollPosition = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Stay", href: "#stay", id: "stay" },
    { label: "Dining", href: "#dining", id: "dining" },
    { label: "Celebrations", href: "#celebrations", id: "celebrations" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Location", href: "#location", id: "location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? "bg-[#11110F]/90 backdrop-blur-md border-b border-[#252420] py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-[#11110F]/80 via-[#11110F]/30 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="text-xl sm:text-2xl font-serif tracking-[0.2em] font-light text-[#F4F0E7] hover:text-[#C6A15B] transition-colors uppercase whitespace-nowrap"
          >
            TULIPS GRAND
          </a>

          {/* Zone 2: Clean 5-link text navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 text-xs uppercase tracking-[0.16em] transition-colors ${
                  activeSection === link.id
                    ? "text-[#C6A15B] font-semibold"
                    : "text-[#DED6C7] hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A15B]" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              type="button"
              onClick={onOpenReservation}
              className="px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium text-[#F4F0E7] border border-[#C6A15B]/40 hover:border-[#C6A15B] hover:text-[#C6A15B] bg-transparent transition-all whitespace-nowrap"
            >
              Reserve a Table
            </button>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium text-[#11110F] bg-[#C6A15B] hover:bg-[#D5B26E] transition-all whitespace-nowrap shadow-sm"
            >
              Book a Room
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#F4F0E7] hover:text-[#C6A15B] focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Luxury Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#11110F] flex flex-col justify-between p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-[#22211D] pb-6">
            <span className="text-xl font-serif tracking-[0.2em] uppercase text-[#F4F0E7]">
              TULIPS GRAND
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#A7A39A] hover:text-white"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 my-auto py-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl sm:text-3xl font-serif tracking-widest text-[#F4F0E7] hover:text-[#C6A15B] flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="flex flex-col space-y-3 pt-6 border-t border-[#22211D]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 text-center text-xs uppercase tracking-[0.18em] font-medium border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B]/10 transition-colors"
            >
              Reserve a Table
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 text-center text-xs uppercase tracking-[0.18em] font-medium bg-[#C6A15B] text-[#11110F] hover:bg-[#D5B26E] transition-colors"
            >
              Book a Room
            </button>
            <p className="text-center text-[11px] text-[#A7A39A] pt-2 tracking-wider">
              Suraram • Near Malla Reddy Health City
            </p>
          </div>
        </div>
      )}
    </>
  );
}
