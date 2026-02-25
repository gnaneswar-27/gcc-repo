import suiteImage from "@/assets/suite-bedroom.jpg";
import spaImage from "@/assets/spa-wellness.jpg";

const offers = [
  {
    id: 1,
    title: "Life Is Suite",
    subtitle: "Save 10% on Suite Stays",
    description: "Experience the epitome of luxury with our exclusive suite offer. Enjoy 10% off our finest accommodations, complete with butler service and daily breakfast.",
    image: suiteImage,
    terms: "Valid for stays through December 2026",
  },
  {
    id: 2,
    title: "Spa Retreat",
    subtitle: "Wellness Package",
    description: "Rejuvenate with our curated spa journey. Three nights of tranquility including daily treatments, wellness breakfast, and private yoga sessions.",
    image: spaImage,
    terms: "Minimum 3-night stay required",
  },
];

const OffersSection = () => {
  return (
    <section id="offers" className="py-16 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-subtitle">Exclusive</p>
          <h2 className="section-title text-foreground">
            Special Offers
          </h2>
          <div className="divider-elegant" />
        </div>

        {/* Offers Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-background group"
            >
              <div className="luxury-card group aspect-[16/10]">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="luxury-card-image group-hover:scale-105"
                />
                <div className="luxury-card-overlay group-hover:opacity-90" />
              </div>
              <div className="p-6 lg:p-10">
                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">
                  {offer.subtitle}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-wide text-foreground mb-4">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {offer.description}
                </p>
                <p className="text-xs text-muted-foreground mb-6">
                  {offer.terms}
                </p>
                <a href="#book" className="btn-luxury-outline">
                  View Offer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
