import { useState, useEffect, useRef } from "react";
import { ArrowDown, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenReservation: () => void;
}

type ExperienceMode = "default" | "stay" | "dine" | "celebrate";

export default function Hero({ onOpenBooking, onOpenReservation }: HeroProps) {
  const [activeMode, setActiveMode] = useState<ExperienceMode>("default");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Background images for the WOW Interaction #2
  const bgImages = {
    default: "/src/assets/images/tulips_grand_facade_signage_1790937432898.jpg",
    stay: "/src/assets/images/tulips_room_city_view_1790936880532.jpg",
    dine: "/src/assets/images/tulips_restaurant_dining_1790936905781.jpg",
    celebrate: "/src/assets/images/tulips_banquet_ballroom_1790936917494.jpg",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 15; // Max 15px shift
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#11110F] pt-28 pb-12 px-6 sm:px-10 lg:px-16"
      aria-label="Hotel Tulips Grand Introduction"
    >
      {/* Background Image Layer with smooth crossfade and subtle mouse parallax */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out scale-105 will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        {Object.entries(bgImages).map(([mode, src]) => (
          <img
            key={mode}
            src={src}
            alt="Hotel Tulips Grand Ambience"
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              activeMode === mode ? "opacity-45" : "opacity-0"
            }`}
          />
        ))}
        {/* Cinematic Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/60 to-[#11110F]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11110F]/90 via-[#11110F]/50 to-transparent" />
      </div>

      {/* Top spacing placeholder */}
      <div className="hidden sm:block" />

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto py-10">
        {/* Subtle Regional Kicker */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="w-8 h-[1px] bg-[#C6A15B]" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
            Suraram • Hyderabad
          </span>
          <span className="text-xs text-[#A7A39A] hidden md:inline">
            · Near Malla Reddy Health City
          </span>
        </div>

        {/* Editorial Brand Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light text-white tracking-[0.06em] leading-[1.05] uppercase">
          Hotel <br />
          <span className="text-[#F4F0E7]">Tulips</span> <br />
          <span className="text-[#C6A15B] font-normal">Grand</span>
        </h1>

        {/* WOW INTERACTION #2: Interactive DINE. STAY. CELEBRATE. Triad */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-baseline gap-4 sm:gap-8 select-none">
          <button
            type="button"
            onMouseEnter={() => setActiveMode("stay")}
            onMouseLeave={() => setActiveMode("default")}
            onClick={() => {
              document.getElementById("stay")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`text-2xl sm:text-4xl font-serif tracking-[0.14em] transition-all duration-300 ${
              activeMode === "stay"
                ? "text-[#C6A15B] scale-105"
                : activeMode === "default"
                ? "text-[#F4F0E7]"
                : "text-white/30"
            }`}
          >
            STAY.
          </button>
          <button
            type="button"
            onMouseEnter={() => setActiveMode("dine")}
            onMouseLeave={() => setActiveMode("default")}
            onClick={() => {
              document.getElementById("dining")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`text-2xl sm:text-4xl font-serif tracking-[0.14em] transition-all duration-300 ${
              activeMode === "dine"
                ? "text-[#C6A15B] scale-105"
                : activeMode === "default"
                ? "text-[#F4F0E7]"
                : "text-white/30"
            }`}
          >
            DINE.
          </button>
          <button
            type="button"
            onMouseEnter={() => setActiveMode("celebrate")}
            onMouseLeave={() => setActiveMode("default")}
            onClick={() => {
              document.getElementById("celebrations")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`text-2xl sm:text-4xl font-serif tracking-[0.14em] transition-all duration-300 ${
              activeMode === "celebrate"
                ? "text-[#C6A15B] scale-105"
                : activeMode === "default"
                ? "text-[#F4F0E7]"
                : "text-white/30"
            }`}
          >
            CELEBRATE.
          </button>
        </div>

        {/* Supporting Narrative */}
        <p className="mt-6 text-base sm:text-lg text-[#DED6C7] max-w-2xl font-light leading-relaxed">
          A contemporary destination for dining, stays and celebrations in Suraram, Hyderabad.
          Thoughtfully crafted hospitality designed for moments worth remembering.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#experience"
            className="px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-white border border-[#C6A15B]/50 hover:border-[#C6A15B] hover:bg-[#C6A15B]/10 transition-colors inline-flex items-center gap-2"
          >
            Explore Tulips
            <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
          </a>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-[#11110F] bg-[#C6A15B] hover:bg-[#D5B26E] transition-all shadow-md"
          >
            Book Your Stay
          </button>
          <button
            type="button"
            onClick={onOpenReservation}
            className="px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-[#F4F0E7] hover:text-[#C6A15B] transition-colors"
          >
            Reserve a Table →
          </button>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex items-center justify-between pt-8 border-t border-[#22211D]/80 text-[#A7A39A] text-xs uppercase tracking-[0.2em]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
          <span>38 Curated Rooms · 3 Banquets · Multi-Cuisine Dining</span>
        </div>
        <a
          href="#experience"
          className="flex items-center space-x-2 hover:text-[#C6A15B] transition-colors"
        >
          <span className="hidden sm:inline">Scroll to Discover</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#C6A15B]" />
        </a>
      </div>
    </section>
  );
}
