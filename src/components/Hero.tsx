import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section relative overflow-hidden h-screen w-full">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/golf-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Hero Overlay - Ensure this has a background color like bg-black/40 in your CSS */}
        <div className="hero-overlay absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container (Optional: if you have text to add later) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          {/* Add hero text here if needed */}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="scroll-indicator group cursor-pointer absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity text-white">
          Scroll Down
        </span>
        <ChevronDown className="scroll-arrow text-white animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;