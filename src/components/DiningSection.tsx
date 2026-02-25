import barImage from "@/assets/bar-lounge.jpg";
import diningImage from "@/assets/fine-dining.jpg";

const restaurants = [
  {
    id: 1,
    name: "The Mayfair Grill",
    description: "Our flagship restaurant where culinary artistry meets British tradition. Led by acclaimed chef Marcus Belmont, experience seasonal menus that celebrate the finest local ingredients.",
    cuisine: "Contemporary British",
    image: diningImage,
  },
  {
    id: 2,
    name: "The Coburg Bar",
    description: "An intimate sanctuary for cocktail connoisseurs. Our award-winning mixologists craft bespoke libations in an atmosphere of refined elegance.",
    cuisine: "Cocktail Bar",
    image: barImage,
  },
];

const DiningSection = () => {
  return (
    <section id="dining" className="py-16 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-subtitle">Gastronomy</p>
          <h2 className="section-title text-foreground">
            Culinary Excellence
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Award-winning dining experiences that transcend the everyday.
            From intimate cocktail moments to unforgettable culinary journeys.
          </p>
        </div>

        {/* Restaurant Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {restaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="luxury-card group aspect-[4/5] mb-8">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="luxury-card-image group-hover:scale-105"
                />
                <div className="luxury-card-overlay group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                  <p className="text-xs tracking-[0.2em] uppercase mb-2 opacity-80">
                    {restaurant.cuisine}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-wide">
                    {restaurant.name}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {restaurant.description}
              </p>
              <a href="#book" className="btn-luxury-outline">
                Reserve a Table
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
