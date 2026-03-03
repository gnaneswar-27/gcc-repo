import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import spaImage from "@/assets/spa-wellness.jpg";

const SpaWellness = () => {
  return (
    <main className="min-h-screen">
      <Header isTransparent />
      <PageHero image={spaImage} title="GCC Spa" subtitle="Wellness" />

      <section className="py-16 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="divider-elegant !mx-0" />
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
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
                <a href="#book" className="btn-luxury-primary text-center">Book Treatment</a>
                <a href="#spa-menu" className="btn-luxury-outline text-center">View Spa Menu</a>
              </div>
            </div>
            <div>
              <img src={spaImage} alt="Our GCC Spa treatment room" className="w-full h-[350px] lg:h-[600px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SpaWellness;
