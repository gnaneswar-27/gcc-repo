import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import golfImage from "@/assets/golf-course.jpg";
import { Flag, Trophy, Users, Calendar } from "lucide-react";

const features = [
  { icon: Flag, title: "18-Hole Championship", description: "World-class course designed by legendary architects with stunning views." },
  { icon: Trophy, title: "Pro Shop", description: "Premium equipment and apparel from the world's finest golf brands." },
  { icon: Users, title: "Private Lessons", description: "One-on-one instruction from PGA-certified professionals." },
  { icon: Calendar, title: "Tournament Events", description: "Exclusive member tournaments and prestigious invitational events." },
];

const GolfCourse = () => {
  return (
    <main className="min-h-screen">
      <Header isTransparent />
      <PageHero image={golfImage} title="Our GCC Golf Club" subtitle="Championship Course" />

      <section className="py-16 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="divider-elegant" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Experience golfing excellence at Our GCC's championship course. Our meticulously 
              maintained 18-hole course offers a challenging yet rewarding experience for 
              golfers of all skill levels, set against breathtaking natural landscapes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-border group-hover:border-primary group-hover:bg-primary transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-xl font-light tracking-wide text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary p-8 lg:p-12 text-center">
            <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-wide text-foreground mb-4">Book Your Tee Time</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Reserve your round at Our GCC Golf Club. Members enjoy priority booking and exclusive access to premium tee times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book-golf" className="btn-luxury-primary">Book Tee Time</a>
              <a href="#membership" className="btn-luxury-outline">Membership Enquiry</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GolfCourse;
