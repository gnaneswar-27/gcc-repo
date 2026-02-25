import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/Vd3JxN14NwA?autoplay=1&mute=1&loop=1&playlist=Vd3JxN14NwA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Our GCC Hero Video"
          className="w-full h-full object-cover pointer-events-none"
          style={{ position: 'absolute', top: '50%', left: '50%', width: '177.78vh', height: '100vh', minWidth: '100%', minHeight: '100%', transform: 'translate(-50%, -50%)' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
        />
        <div className="hero-overlay" />
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="scroll-indicator group cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </span>
        <ChevronDown className="scroll-arrow" />
      </button>
    </section>
  );
};

export default Hero;
