import { ArrowRight, Bed, UtensilsCrossed, PartyPopper } from "lucide-react";

interface PlanYourVisitProps {
  onOpenBooking: () => void;
  onOpenReservation: () => void;
  onOpenEnquiry: () => void;
}

export default function PlanYourVisit({
  onOpenBooking,
  onOpenReservation,
  onOpenEnquiry,
}: PlanYourVisitProps) {
  const pillars = [
    {
      step: "01",
      title: "STAY",
      heading: "Find Your Room",
      description: "Book comfortable accommodation with city views, generous workspaces, and high-speed Wi-Fi.",
      cta: "Book a Room",
      icon: Bed,
      action: onOpenBooking,
    },
    {
      step: "02",
      title: "DINE",
      heading: "Discover The Restaurant",
      description: "Savor authentic Hyderabadi Biryani, Mughlai delicacies, and family dining specialties.",
      cta: "Reserve a Table",
      icon: UtensilsCrossed,
      action: onOpenReservation,
    },
    {
      step: "03",
      title: "CELEBRATE",
      heading: "Plan Your Occasion",
      description: "Host milestone weddings, receptions, and corporate conferences in our signature halls.",
      cta: "Plan an Event",
      icon: PartyPopper,
      action: onOpenEnquiry,
    },
  ];

  return (
    <section className="bg-[#11110F] text-[#F4F0E7] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#22211D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium block mb-3">
            Seamless Guest Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-wide">
            Plan Your Visit.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#A7A39A]">
            Select your journey to begin exploring or connect directly with our hospitality team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group p-8 sm:p-10 bg-[#151412] border border-[#262420] hover:border-[#C6A15B]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-mono tracking-widest text-[#C6A15B]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#1B1A17] border border-[#2B2924] flex items-center justify-center text-[#C6A15B] group-hover:border-[#C6A15B] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-[#A7A39A]">
                    {item.title}
                  </span>
                  <h3 className="text-2xl font-serif text-white tracking-wide mt-1 mb-3">
                    {item.heading}
                  </h3>
                  <p className="text-xs text-[#A7A39A] leading-relaxed font-light mb-8">
                    {item.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={item.action}
                  className="w-full py-3.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#1F1E1A] hover:bg-[#C6A15B] text-[#DED6C7] hover:text-[#11110F] border border-[#33312B] hover:border-[#C6A15B] transition-all flex items-center justify-center gap-2"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
