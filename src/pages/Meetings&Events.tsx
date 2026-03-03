import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ArrowRight, MapPin, Users, Maximize, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const eventSpaces = [
  {
    title: "The Heritage Suite",
    capacity: "Up to 150 Guests",
    size: "220 sq m / 2,368 sq ft",
    description:
      "A grand, light-filled space featuring original 1920s architecture and floor-to-ceiling windows overlooking the 18th green.",
    image: "/meetings-heritage.jpg",
  },
  {
    title: "The Boardroom",
    capacity: "Up to 16 Guests",
    size: "45 sq m / 484 sq ft",
    description:
      "An intimate, oak-paneled sanctuary designed for high-level transitions and private discussions, equipped with discreet state-of-the-art technology.",
    image: "/meetings.jpg",
  },
];

const MeetingsAndEvents = () => {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Header isTransparent />

      {/* 1. THE MAYBOURNE HERO: CINEMATIC & MINIMAL */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={"/meetings-5.jpg"}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Event Hero"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-[10px] tracking-[0.6em] uppercase mb-6 opacity-90">
            Unforgettable Occasions
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none">
            Meetings <span className="italic">&</span> Events
          </h1>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY SECTION (Centered Editorial) */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="w-[1px] h-20 bg-primary mx-auto mb-12 opacity-30" />
          <h2 className="font-serif text-3xl lg:text-5xl font-light leading-snug text-foreground mb-8">
            From visionary board meetings to <br />
            <span className="italic text-primary">grand celebratory galas</span>
            , we provide the <br />
            perfect stage for your story.
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">
            At Garstang Country Club, we believe every event is a performance.
            Our dedicated events team ensures that every detail—from bespoke
            menus to seamless technology—is executed with unrivalled precision
            and grace.
          </p>
        </div>
      </section>

      {/* 3. FEATURED SPACES: THE LARGE IMAGE CARDS */}
      <section className="pb-24 lg:pb-48 space-y-32 lg:space-y-64">
        {eventSpaces.map((space, index) => (
          <div key={space.title} className="container mx-auto px-6 lg:px-24">
            <div
              className={cn(
                "flex flex-col gap-12 lg:gap-24 items-center",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
              )}
            >
              {/* Image Side - Full Bleed Feel */}
              <div className="w-full lg:w-3/5 group overflow-hidden">
                <img
                  src={space.image}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={space.title}
                />
              </div>

              {/* Text Side - Elegant Specs */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-4xl lg:text-5xl font-light tracking-tight">
                    {space.title}
                  </h3>
                  <div className="flex flex-wrap gap-6 text-[10px] tracking-[0.2em] uppercase text-primary font-bold">
                    <span className="flex items-center gap-2">
                      <Users className="w-3 h-3" /> {space.capacity}
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize className="w-3 h-3" /> {space.size}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  {space.description}
                </p>
                <div className="pt-4">
                  <a
                    href="#"
                    className="group flex items-center gap-4 text-[11px] tracking-[0.4em] uppercase font-bold"
                  >
                    Explore This Space
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. THE TRIPTYCH: SERVICE HIGHLIGHTS (Maybourne Style) */}
      <section className="bg-secondary/30 py-24 lg:py-40 border-y border-border/50">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            <div className="space-y-6">
              <span className="font-serif italic text-3xl text-primary/40 block">
                01.
              </span>
              <h4 className="font-serif text-2xl uppercase tracking-tighter">
                Bespoke Catering
              </h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Our Executive Chef curates seasonal menus using the finest local
                produce, tailored to the specific requirements of your occasion.
              </p>
            </div>
            <div className="space-y-6">
              <span className="font-serif italic text-3xl text-primary/40 block">
                02.
              </span>
              <h4 className="font-serif text-2xl uppercase tracking-tighter">
                Event Technology
              </h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                State-of-the-art audiovisual capabilities and high-speed
                connectivity are integrated seamlessly into our historic
                surroundings.
              </p>
            </div>
            <div className="space-y-6">
              <span className="font-serif italic text-3xl text-primary/40 block">
                03.
              </span>
              <h4 className="font-serif text-2xl uppercase tracking-tighter">
                A Dedicated Team
              </h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                From initial enquiry to the final guest’s departure, a dedicated
                event planner will be at your side to ensure total perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMMERSIVE INQUIRY SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <img
          src={"/meetings3.jpg"}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Inquiry Background"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div className="relative z-10 space-y-12 px-6">
          <h2 className="font-serif text-5xl lg:text-8xl text-white font-light tracking-tighter leading-none max-w-5xl mx-auto">
            Plan Your <span className="italic text-primary">Masterpiece</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <a
              href="mailto:events@gcc.com"
              className="bg-white text-black px-16 py-6 text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl"
            >
              Inquire Now
            </a>
            <a
              href="#"
              className="border border-white/30 text-white px-16 py-6 text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MeetingsAndEvents;
