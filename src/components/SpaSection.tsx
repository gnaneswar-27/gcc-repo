import spaImage from "@/assets/spa-wellness.jpg";

const SpaSection = () => {
  return (
    <section id="spa" className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-[300px] lg:h-auto">
          <img
            src={spaImage}
            alt="The Mayfair Spa treatment room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="bg-secondary flex items-center py-16 lg:py-32 px-6 lg:px-16">
          <div className="max-w-lg">
            <p className="section-subtitle">Wellness</p>
            <h2 className="section-title text-foreground mb-8">
              Our GCC Spa
            </h2>
            <div className="divider-elegant !mx-0" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              A serene sanctuary in the heart of Mayfair. Our spa offers
              transformative treatments that blend ancient Eastern wisdom with
              modern Western techniques, delivered by world-renowned therapists.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Featuring private treatment suites, a vitality pool, and our
              signature aromatherapy steam room, Our GCC Spa promises
              complete restoration of mind, body, and spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="btn-luxury-primary text-center">
                Book Treatment
              </a>
              <a href="#spa" className="btn-luxury-outline text-center">
                View Spa Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;
