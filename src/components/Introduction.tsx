import { ArrowRight } from "lucide-react";

export default function Introduction() {
  return (
    <section
      id="experience"
      className="relative bg-[#11110F] text-[#F4F0E7] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#1F1E1B]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1.5px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                The Tulips Experience
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide leading-tight">
              More than a stay. <br />
              <span className="italic font-normal text-[#C6A15B]">
                A place to gather.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#DED6C7] font-light leading-relaxed">
              From relaxed family dining to comfortable stays and memorable celebrations,
              Hotel Tulips Grand brings hospitality, food, and experiences together under
              one roof in Suraram, Hyderabad.
            </p>

            <p className="text-sm text-[#A7A39A] leading-relaxed">
              Located near Malla Reddy Health City on the vibrant corridor of
              North Hyderabad, we offer modern sanctuary for medical visitors, out-of-town
              guests, corporate delegates, and families hosting milestone celebrations.
            </p>

            <div className="pt-4 flex items-center space-x-8 text-xs uppercase tracking-[0.2em] text-[#C6A15B]">
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-white font-normal">38</span>
                <span className="text-[#A7A39A] text-[10px] mt-1">Comfortable Rooms</span>
              </div>
              <div className="w-[1px] h-8 bg-[#252420]" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-white font-normal">3</span>
                <span className="text-[#A7A39A] text-[10px] mt-1">Signature Halls</span>
              </div>
              <div className="w-[1px] h-8 bg-[#252420]" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-white font-normal">8+</span>
                <span className="text-[#A7A39A] text-[10px] mt-1">Cuisine Styles</span>
              </div>
            </div>
          </div>

          {/* Right Asymmetrical Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden aspect-[4/3] group border border-[#2B2A25]">
              <img
                src="/src/assets/images/tulips_grand_facade_signage_1790937432898.jpg"
                alt="Hotel Tulips Grand Suraram Facade"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs tracking-wider">
                <span className="text-[#F4F0E7]">Block A, Merix Pride, 02-019/64, Suraram Village, 1</span>
                <span className="text-[#C6A15B] flex items-center gap-1">
                  Near Health City
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
