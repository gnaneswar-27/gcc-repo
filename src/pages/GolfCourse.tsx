import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import golfImage from "@/assets/golf-course.jpg";
import {
  Flag,
  Trophy,
  Users,
  Calendar,
  ArrowRight,
  Play,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "01",
    title: "Championship Links",
    description:
      "A legendary 18-hole journey through towering pines and coastal dunes.",
  },
  {
    id: "02",
    title: "The Heritage Club",
    description:
      "Our clubhouse stands as a testament to a century of golfing tradition.",
  },
  {
    id: "03",
    title: "PGA Academy",
    description:
      "World-class coaching using the latest launch monitor technology.",
  },
  {
    id: "04",
    title: "The 1922 Bar",
    description:
      "A refined space to recount the day's play over premium spirits.",
  },
];

const GolfCourse = () => {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      {" "}
      {/* Formby's Signature Cream Background */}
      <Header isTransparent />
      {/* 1. FORMBY STYLE: FULL-SCREEN CINEMATIC HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={"/golf-hero.jpg"}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            alt="Formby Aesthetic Links"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tighter leading-none mb-12">
            The Championship Course
          </h1>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>
      {/* 2. OVERLAPPING "HERITAGE" CARD (As seen on Formby Home) */}
      <section className="relative z-20 -mt-32 pb-24 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="bg-white shadow-[0_30px_100px_rgba(0,0,0,0.05)] grid lg:grid-cols-2">
            <div className="p-12 lg:p-24 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-[1px] bg-primary mb-6" />
                <h2 className="font-serif text-4xl lg:text-6xl font-light leading-[1.1] text-foreground">
                  A Tradition of <br />{" "}
                  <span className="italic text-primary">
                    Unrivalled Excellence
                  </span>
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg font-light max-w-md italic">
                "One of the world’s great championship links, where the pines
                meet the sea."
              </p>
              <p className="text-muted-foreground leading-relaxed text-base font-light">
                Garstang Country Club is more than just a course; it is a
                sanctuary for those who respect the game's history. Carved into
                the natural topography, our links offer a serene escape into the
                heart of the countryside.
              </p>
              <div className="pt-6">
                <a
                  href="#"
                  className="group flex items-center gap-4 text-[11px] tracking-[0.4em] uppercase font-bold text-foreground"
                >
                  View Course Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src={"/golf-fairway.jpg"}
                alt="Heritage View"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 3. STAGGERED IMAGE SHOWCASE (Large Full-Width Style) */}
      <section className="py-24 space-y-48 lg:space-y-64">
        {/* Hole showcase 1 */}
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-end gap-16 lg:gap-32">
            <div className="w-full lg:w-2/3 relative">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={"/golf-1.jpg"}
                  className="w-full h-full object-cover"
                  alt="The Dunes"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-2/3 h-full border-[12px] border-[#fafaf9] -z-10" />
            </div>
            <div className="w-full lg:w-1/3 pb-12 space-y-6">
              <span className="text-primary/40 font-serif italic text-4xl">
                01.
              </span>
              <h3 className="font-serif text-4xl lg:text-5xl font-light uppercase tracking-tighter">
                The Pine <br />
                Woodlands
              </h3>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Winding through ancient pines, the opening holes require
                precision and strategy, setting the tone for a world-class
                round.
              </p>
            </div>
          </div>
        </div>

        {/* Hole showcase 2 */}
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row-reverse items-end gap-16 lg:gap-32">
            <div className="w-full lg:w-2/3 relative">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={"/golf-5.jpg"}
                  className="w-full h-full object-cover"
                  alt="The Championship"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 w-2/3 h-full border-[12px] border-[#fafaf9] -z-10" />
            </div>
            <div className="w-full lg:w-1/3 pb-12 space-y-6 lg:text-right">
              <span className="text-primary/40 font-serif italic text-4xl">
                02.
              </span>
              <h3 className="font-serif text-4xl lg:text-5xl font-light uppercase tracking-tighter text-right">
                Coastal <br />
                Dunes
              </h3>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Experience the raw beauty of our links-style back nine, where
                the wind and terrain become your greatest competitors.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 4. THE CLUBHOUSE DARK SECTION (Premium Contrast) */}
      <section className="bg-[#111] text-white py-32 lg:py-48 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-bold">
                The Clubhouse
              </span>
              <h2 className="font-serif text-5xl lg:text-7xl font-light italic leading-tight">
                Refinement <br /> After the Round
              </h2>
              <div className="grid grid-cols-2 gap-12 pt-12">
                {features.slice(1).map((f) => (
                  <div key={f.id} className="space-y-4">
                    <h4 className="font-serif text-xl border-b border-white/10 pb-4">
                      {f.title}
                    </h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square border border-white/10 p-4">
              <img
                src={golfImage}
                alt="Clubhouse Interior"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 5. FULL WIDTH IMMERSIVE CTA */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src={golfImage}
          className="absolute inset-0 w-full h-full object-cover"
          alt="CTA BG"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 space-y-12 px-6">
          <h2 className="font-serif text-5xl lg:text-[9rem] text-white font-light tracking-tighter leading-none">
            Begin Your <br />{" "}
            <span className="italic text-primary">Legacy</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-12">
            <a
              href="#"
              className="bg-white text-black px-16 py-6 text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl"
            >
              Book Tee Time
            </a>
            <a
              href="#"
              className="border border-white/30 text-white px-16 py-6 text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
            >
              Membership
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default GolfCourse;
