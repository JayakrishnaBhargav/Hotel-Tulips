import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"tulips" | "grand" | "fade">("tulips");

  useEffect(() => {
    // Phase 1: TULIPS appears
    const timer1 = setTimeout(() => {
      setPhase("grand");
    }, 600);

    // Phase 2: Fade out transition
    const timer2 = setTimeout(() => {
      setPhase("fade");
    }, 1400);

    // Phase 3: Unmount
    const timer3 = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#11110F] text-[#F4F0E7] transition-opacity duration-500 ${
        phase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-label="Loading Hotel Tulips Grand"
    >
      <div className="flex flex-col items-center select-none">
        <span className="text-xs uppercase tracking-[0.35em] text-[#C6A15B] mb-3">
          Suraram • Hyderabad
        </span>
        <div className="flex items-baseline space-x-3 text-3xl sm:text-4xl md:text-5xl font-serif tracking-[0.2em] uppercase font-light">
          <span className="transition-opacity duration-500 opacity-100">
            TULIPS
          </span>
          <span
            className={`transition-all duration-500 ${
              phase === "grand" || phase === "fade"
                ? "opacity-100 translate-x-0 text-[#C6A15B]"
                : "opacity-0 -translate-x-2 text-white"
            }`}
          >
            GRAND
          </span>
        </div>
        {/* Thin champagne-gold loading line */}
        <div className="w-36 h-[1.5px] bg-[#22211D] mt-6 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-[#C6A15B] w-full animate-[progress_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards]" />
        </div>
      </div>
    </div>
  );
}
