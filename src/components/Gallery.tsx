import { useState, useEffect, useCallback } from "react";
import { galleryItems, GalleryItem } from "../config/galleryData";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ["ALL", "HOTEL", "DINING", "ROOMS", "EVENTS", "FOOD"];

  const filteredItems =
    selectedCategory === "ALL"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1
    );
  }, [activeLightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0
    );
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, handlePrev, handleNext]);

  return (
    <section
      id="gallery"
      className="bg-[#151412] text-[#F4F0E7] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#22211D]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                Visual Showcase
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-wide">
              The Tulips Gallery.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
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

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className={`group relative overflow-hidden bg-[#11110F] border border-[#262420] cursor-pointer ${
                idx % 5 === 0 ? "lg:col-span-2 lg:row-span-2 aspect-[4/3]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#11110F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono tracking-widest text-[#C6A15B] uppercase bg-[#11110F]/90 px-2 py-0.5 border border-white/10">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#11110F]/80 flex items-center justify-center text-[#C6A15B]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-serif text-white tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#DED6C7] line-clamp-1 mt-1 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-[#11110F]/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between border-b border-[#252420] pb-4">
            <div className="flex items-center space-x-3 text-xs tracking-wider">
              <span className="text-[#C6A15B] font-mono">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
              <span className="text-[#A7A39A]">·</span>
              <span className="text-[#F4F0E7]">
                {filteredItems[activeLightboxIndex].category}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 text-[#A7A39A] hover:text-white"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image & Controls */}
          <div className="relative w-full max-w-5xl my-auto flex items-center justify-center">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 bg-[#11110F]/80 border border-[#2B2924] text-white hover:text-[#C6A15B] hover:border-[#C6A15B] transition-colors rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] max-w-full overflow-hidden border border-[#252420]">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 bg-[#11110F]/80 border border-[#2B2924] text-white hover:text-[#C6A15B] hover:border-[#C6A15B] transition-colors rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption */}
          <div className="w-full max-w-3xl text-center pt-4">
            <h3 className="text-xl font-serif text-white">
              {filteredItems[activeLightboxIndex].title}
            </h3>
            <p className="text-xs text-[#A7A39A] mt-1">
              {filteredItems[activeLightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
