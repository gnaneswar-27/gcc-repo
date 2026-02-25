import suiteImage from "@/assets/suite-bedroom.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="section-title text-foreground mb-8">
              A Place Of Rare Belonging
            </h2>
            <div className="divider-elegant !mx-0" />
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Perfectly situated in the heart of the city, Our GCC is
              a place of rare belonging for discerning voyagers and cultured
              travelers alike. A discreet enclave of warmth and style, suites
              and rooms here effortlessly blend tradition and modernity, while
              award-winning gastronomic experiences transcend the everyday.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Deeply rooted in our neighbourhood, Our GCC
              promises a quiet welcome home in the capital of culture.
            </p>
            <a href="/rooms-and-suites" className="btn-luxury-outline">
              About the Hotel
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden">
              <img
                src={suiteImage}
                alt="Luxury hotel suite bedroom"
                className="w-full h-[350px] lg:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
