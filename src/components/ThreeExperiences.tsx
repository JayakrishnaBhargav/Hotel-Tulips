import { ArrowUpRight } from "lucide-react";

export default function ThreeExperiences() {
  const experiences = [
    {
      index: "01",
      title: "STAY",
      tagline: "Comfort designed around you.",
      description: "Restful, air-conditioned rooms featuring dedicated work desks and dining spaces, tailored for both quick overnights and extended family visits.",
      image: "/src/assets/images/tulips_room_city_view_1790936880532.jpg",
      href: "#stay",
      cta: "Explore Accommodations",
    },
    {
      index: "02",
      title: "DINE",
      tagline: "Flavours worth coming back for.",
      description: "A welcoming multi-cuisine family destination presenting authentic Hyderabadi Dum Biryani, Mughlai grills, North Indian curries, and Chinese delicacies.",
      image: "/src/assets/images/tulips_restaurant_dining_1790936905781.jpg",
      href: "#dining",
      cta: "Discover the Restaurant",
    },
    {
      index: "03",
      title: "CELEBRATE",
      tagline: "Moments made memorable.",
      description: "Three versatile banquet venues—Vaibhavam, Amantran, and Utsavam—thoughtfully equipped for weddings, family milestones, and corporate symposiums.",
      image: "/src/assets/images/tulips_banquet_ballroom_1790936917494.jpg",
      href: "#celebrations",
      cta: "View Event Spaces",
    },
  ];

  return (
    <section className="bg-[#151412] text-[#F4F0E7] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#22211D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium block mb-3">
            Hospitality In Harmony
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-wide">
            Three Experiences. One Destination.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <a
              key={exp.index}
              href={exp.href}
              className="group relative flex flex-col bg-[#11110F] border border-[#252420] overflow-hidden transition-all duration-500 hover:border-[#C6A15B]/50"
            >
              {/* Image with slow zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1B1A17]">
                <img
                  src={exp.image}
                  alt={`Hotel Tulips Grand ${exp.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/30 to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-mono tracking-widest text-[#C6A15B] bg-[#11110F]/80 px-2.5 py-1">
                  {exp.index}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-serif tracking-[0.1em] text-white group-hover:text-[#C6A15B] transition-colors uppercase">
                    {exp.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#C6A15B] font-serif italic">
                    {exp.tagline}
                  </p>
                  <p className="mt-4 text-xs text-[#A7A39A] leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#22211D] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.16em] text-[#DED6C7] group-hover:text-white transition-colors">
                    {exp.cta}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#33312B] group-hover:border-[#C6A15B] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
