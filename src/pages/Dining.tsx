import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
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

const Dining = () => {
  return (
    <main className="min-h-screen">
      <Header isTransparent />
      <PageHero image={diningImage} title="Culinary Excellence" subtitle="Gastronomy" />

      <section className="py-16 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="divider-elegant" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Award-winning dining experiences that transcend the everyday.
              From intimate cocktail moments to unforgettable culinary journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {restaurants.map((restaurant, index) => (
              <div key={restaurant.id} className="group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="luxury-card group aspect-[16/10] md:aspect-[4/5] mb-6 md:mb-8">
                  <img src={restaurant.image} alt={restaurant.name} className="luxury-card-image group-hover:scale-105" />
                  <div className="luxury-card-overlay group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                    <p className="text-xs tracking-[0.2em] uppercase mb-2 opacity-80">{restaurant.cuisine}</p>
                    <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-wide">{restaurant.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{restaurant.description}</p>
                <a href="#book" className="btn-luxury-outline">Reserve a Table</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Dining;
