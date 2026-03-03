import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Gem, Users, Music, Utensils, Camera, Star, ArrowRight } from "lucide-react";

const weddingSpaces = [
  {
    title: "The Grand Ballroom",
    description: "An opulent space adorned with crystal chandeliers and gilded detailing, accommodating up to 250 guests for the most magnificent celebrations.",
    capacity: "Up to 250 guests",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
  },
  {
    title: "The Garden Terrace",
    description: "An enchanting outdoor setting surrounded by manicured gardens and fountains, perfect for intimate ceremonies bathed in natural light.",
    capacity: "Up to 120 guests",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  },
  {
    title: "The Private Dining Suite",
    description: "An intimate and refined space for smaller celebrations, featuring bespoke table arrangements and personalised service.",
    capacity: "Up to 40 guests",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
];

const services = [
  { icon: Gem, title: "Bespoke Planning", description: "Our dedicated wedding coordinators craft every detail to perfection." },
  { icon: Utensils, title: "Exquisite Cuisine", description: "Michelin-inspired menus tailored to your vision and palate." },
  { icon: Music, title: "Entertainment", description: "From string quartets to live bands, curated to set the mood." },
  { icon: Camera, title: "Photography", description: "Partnerships with renowned photographers to capture every moment." },
  { icon: Users, title: "Guest Experience", description: "Luxurious accommodation and bespoke amenities for your guests." },
  { icon: Star, title: "Floral Design", description: "Stunning arrangements crafted by our in-house floral artisans." },
];

const Weddings = () => {
  return (
    <main className="min-h-screen">
      <Header isTransparent />

      {/* Full-Screen Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
            alt="Elegant wedding celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-6 animate-fade-in">
            Celebrations at GCC
          </p>
          <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tighter leading-none mb-12">
            Weddings
          </h1>
          <div className="w-16 h-px bg-white/40 mb-8" />
          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Where timeless elegance meets unforgettable moments
          </p>
        </div>
      </section>

      {/* Introduction - Maybourne-style editorial layout */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-subtitle">Your Day, Your Way</p>
              <h2 className="section-title mb-8">
                A Celebration<br />Beyond Compare
              </h2>
              <div className="divider-elegant !mx-0" />
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                At GCC, we believe every love story deserves a setting as extraordinary 
                as the bond it celebrates. Our dedicated events team will be with you from 
                the very first consultation, ensuring every detail reflects your unique vision.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From intimate gatherings in our private dining suite to grand celebrations 
                in our magnificent ballroom, we offer an unparalleled canvas for your most 
                cherished day. Our award-winning culinary team, master florists, and 
                event designers work in harmony to create moments that linger in memory forever.
              </p>
              <a href="#enquiry" className="btn-luxury-primary inline-flex items-center gap-3">
                Make an Enquiry
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&q=80"
                alt="Elegant wedding table setting"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 lg:p-8 hidden lg:block">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Spaces - Connaught-style stacked cards */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-subtitle">Our Venues</p>
            <h2 className="section-title mb-4">Exquisite Spaces</h2>
            <div className="divider-elegant" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Each of our event spaces has been designed to provide a distinctive 
              atmosphere, from grandeur to intimacy.
            </p>
          </div>

          <div className="space-y-16">
            {weddingSpaces.map((space, index) => (
              <div
                key={space.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-[350px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    {space.capacity}
                  </p>
                  <h3 className="font-serif text-3xl lg:text-4xl font-light tracking-wide text-foreground mb-6">
                    {space.title}
                  </h3>
                  <div className="w-12 h-px bg-primary mb-6" />
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    {space.description}
                  </p>
                  <a href="#enquiry" className="btn-luxury-outline inline-flex items-center gap-3">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-subtitle">Wedding Services</p>
            <h2 className="section-title mb-4">Every Detail, Perfected</h2>
            <div className="divider-elegant" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {services.map((service) => (
              <div key={service.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-border group-hover:border-primary group-hover:bg-primary transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-xl font-light tracking-wide text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width CTA Image Band */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80"
          alt="Wedding celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-6">
            Begin Your Journey
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-8">
            Let Us Create Your<br />Perfect Day
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#enquiry" className="btn-luxury-primary">
              Wedding Enquiry
            </a>
            <a href="tel:+442074995400" className="btn-luxury-light">
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="enquiry" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title mb-4">Wedding Enquiry</h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Our dedicated wedding team would be delighted to discuss your plans. 
            Please reach out and we will arrange a private consultation at your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:weddings@gcc.com" className="btn-luxury-primary inline-flex items-center gap-3">
              Email Our Team
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+442074995400" className="btn-luxury-outline">
              +44 (0)20 7499 5400
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Weddings;
