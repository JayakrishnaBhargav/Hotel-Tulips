import { useState } from "react";
import { Play, Sparkles, X } from "lucide-react";

export default function VideoExperience() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full bg-[#11110F] border-t border-[#22211D] overflow-hidden">
      <div className="relative aspect-[21/9] sm:aspect-[24/9] min-h-[380px] w-full flex items-center justify-center">
        {/* Background Image / Reel Frame */}
        <img
          src="/src/assets/images/tulips_grand_facade_signage_1790937432898.jpg"
          alt="Experience Tulips Grand"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-50"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-transparent to-[#11110F]" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Cinematic Centerpiece */}
        <div className="relative z-10 text-center max-w-2xl px-6">
          <div className="flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#C6A15B] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cinematic Showcase</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif text-white uppercase tracking-[0.1em] mb-6">
            Experience <br />
            <span className="text-[#C6A15B]">Tulips Grand</span>
          </h2>

          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group inline-flex items-center space-x-3 px-6 py-3.5 bg-[#11110F]/80 border border-[#C6A15B] text-white hover:bg-[#C6A15B] hover:text-[#11110F] transition-all rounded-full shadow-2xl"
          >
            <div className="w-8 h-8 rounded-full bg-[#C6A15B] text-[#11110F] group-hover:bg-[#11110F] group-hover:text-[#C6A15B] flex items-center justify-center transition-colors">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium">
              Play Visual Reel
            </span>
          </button>
        </div>
      </div>

      {/* Video Modal / Showcase */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-10 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-[#151412] border border-[#33312B] p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 p-2 text-[#A7A39A] hover:text-white"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-video w-full bg-black flex flex-col items-center justify-center p-6 text-center border border-[#2B2924]">
              <div className="w-16 h-16 rounded-full border border-[#C6A15B]/50 flex items-center justify-center mb-4 text-[#C6A15B]">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Hotel Tulips Grand Cinematic Walkthrough
              </h3>
              <p className="text-xs text-[#A7A39A] max-w-md">
                This video frame is architected for the hotel's verified 4K promotional drone footage and property walkthrough once provided.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
