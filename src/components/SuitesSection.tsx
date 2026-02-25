import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import suiteImage from "@/assets/suite-bedroom.jpg";

const suites = [
  {
    id: 1,
    name: "The Mayfair Suite",
    description: "A masterpiece of refined luxury, featuring panoramic city views and bespoke furnishings.",
    size: "150 m²",
    image: suiteImage,
  },
  {
    id: 2,
    name: "The Garden Suite",
    description: "An intimate retreat with private terrace overlooking the hotel's secret garden.",
    size: "95 m²",
    image: suiteImage,
  },
  {
    id: 3,
    name: "The Penthouse",
    description: "The pinnacle of London living, a two-storey sanctuary above the city skyline.",
    size: "280 m²",
    image: suiteImage,
  },
];

const SuitesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % suites.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + suites.length) % suites.length);
  };

  return (
    <section id="rooms" className="py-16 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Accommodations</p>
          <h2 className="section-title text-foreground">
            Storied Suites & Refined Rooms
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For those seeking more than a hotel, suites and rooms at The Mayfair
            are retreats in the truest sense. In the heart of Mayfair, yet a
            world apart from the bustle of the capital.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {suites.map((suite) => (
                <div
                  key={suite.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
                    <div className="luxury-card group aspect-[16/10] lg:aspect-[3/4]">
                      <img
                        src={suite.image}
                        alt={suite.name}
                        className="luxury-card-image group-hover:scale-105"
                      />
                    </div>
                    <div className="py-8">
                      <p className="section-subtitle">{suite.size}</p>
                      <h3 className="font-serif text-3xl lg:text-4xl font-light tracking-wide text-foreground mb-6">
                        {suite.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                        {suite.description}
                      </p>
                      <a href="/rooms-and-suites" className="btn-luxury-outline">
                        Discover More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="p-3 border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              aria-label="Previous suite"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {suites.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              aria-label="Next suite"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuitesSection;
