import { useState } from "react";
import { restaurantDishes, menuCategories, MenuItem } from "../config/restaurantData";
import { hotelData } from "../config/hotelData";
import { Utensils, Phone, CalendarCheck, Sparkles } from "lucide-react";

interface DiningProps {
  onOpenReservation: () => void;
}

export default function Dining({ onOpenReservation }: DiningProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredDishes =
    selectedCategory === "ALL"
      ? restaurantDishes
      : restaurantDishes.filter((dish) => dish.category === selectedCategory);

  return (
    <section
      id="dining"
      className="bg-[#151412] text-[#F4F0E7] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#22211D]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                The Restaurant
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-wide leading-tight">
              Flavours Worth <br />
              <span className="italic text-[#C6A15B] font-normal">
                Coming Back For.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm text-[#DED6C7] font-light leading-relaxed">
              A vibrant multi-cuisine family dining destination bringing together the royal culinary traditions of Hyderabad, fragrant slow-simmered dum biryanis, aromatic tandoori grills, rich North Indian curries, and wok-fired Chinese dishes.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#A7A39A]">
              <span>Halal Certified Kitchens</span>
              <span>·</span>
              <span>Pure Vegetarian Options</span>
              <span>·</span>
              <span>Family Seating</span>
            </div>
          </div>
        </div>

        {/* Featured Ambience Showcase (Section 28) */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-[#1B1A17] border border-[#2B2924] mb-20">
          <img
            src="/src/assets/images/tulips_restaurant_dining_1790936905781.jpg"
            alt="Tulips Grand Multi-Cuisine Dining Hall"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151412] via-transparent to-[#151412]/30" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C6A15B]">
                Culinary Experience
              </span>
              <p className="text-xl sm:text-2xl font-serif text-white">
                Warm Ambience · Attentive Service · Generous Portions
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenReservation}
              className="px-6 py-2.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C6A15B] text-[#11110F] hover:bg-[#D5B26E] transition-all self-start sm:self-auto shadow-md"
            >
              Reserve a Table
            </button>
          </div>
        </div>

        {/* Interactive Digital Menu (Section 21) */}
        <div id="menu" className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2B2924] pb-6 mb-8 gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wide">
                Interactive Tasting Menu
              </h3>
              <p className="text-xs text-[#A7A39A] mt-1">
                * Sample cuisine portfolio shown. Daily chef specials and verified market prices presented tableside.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#C6A15B] text-[#11110F] font-semibold"
                      : "bg-[#1F1E1A] text-[#A7A39A] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group p-6 bg-[#11110F] border border-[#262420] hover:border-[#C6A15B]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-base font-serif text-white group-hover:text-[#C6A15B] transition-colors">
                      {dish.name}
                    </h4>
                    {dish.specialtyTag && (
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#C6A15B] shrink-0 border border-[#C6A15B]/30 px-2 py-0.5">
                        {dish.specialtyTag}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#A7A39A] leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1F1E1A] flex items-center justify-between text-xs text-[#DED6C7]">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        dish.dietary === "Veg"
                          ? "bg-emerald-500"
                          : dish.dietary === "Halal"
                          ? "bg-[#C6A15B]"
                          : "bg-red-500"
                      }`}
                    />
                    <span className="text-[11px] uppercase tracking-wider">
                      {dish.dietary}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#A7A39A] font-mono">
                    Specialty Item
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dining Bottom Conversion CTA (Section 27) */}
        <div className="p-8 sm:p-12 bg-[#11110F] border border-[#2B2924] text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C6A15B] block mb-2">
            Family Dining & Gatherings
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-white mb-4">
            Ready for Dinner?
          </h3>
          <p className="text-xs sm:text-sm text-[#A7A39A] max-w-lg mx-auto mb-8 leading-relaxed">
            Whether it's a spontaneous family celebration or a business lunch near Malla Reddy Health City, we invite you to experience the flavours of Tulips Grand.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenReservation}
              className="px-6 py-3 text-xs uppercase tracking-[0.16em] font-medium bg-[#C6A15B] hover:bg-[#D5B26E] text-[#11110F] transition-all flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              Reserve a Table
            </button>
            <a
              href={`tel:${hotelData.contact.phone}`}
              className="px-6 py-3 text-xs uppercase tracking-[0.16em] font-medium border border-[#33312B] hover:border-[#C6A15B] text-white hover:text-[#C6A15B] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C6A15B]" />
              Call Restaurant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
