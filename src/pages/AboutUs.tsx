import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { History, ShieldCheck, Users2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Header isTransparent />

      {/* 1. CLEAN LEGACY HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/about-1.jpg" 
            className="w-full h-full object-cover grayscale-[0.1]" 
            alt="The Estate" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <span className="text-[10px] tracking-[0.8em] uppercase mb-8 block opacity-90 font-medium">
            Since 1922
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-light tracking-tighter leading-none mb-10">
            OUR STORY
          </h1>
          <div className="w-[1px] h-24 bg-white/40 mx-auto" />
        </div>
      </section>

      {/* 2. THE FOUNDATION (Minimalist Narrative) */}
      <section className="py-24 lg:py-48 border-b border-border/40">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-serif text-4xl lg:text-6xl font-light leading-tight text-foreground mb-12 uppercase tracking-tight">
            A CENTENNIAL LEGACY OF SPORTING EXCELLENCE
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl font-light leading-relaxed mb-12">
            Founded in the heart of the Lancashire countryside, Garstang Country Club has evolved 
            into a premier destination. Our estate is built on the principles of tradition, 
            community, and the relentless pursuit of perfection in every detail of hospitality.
          </p>
          <div className="flex justify-center gap-20 pt-10">
             <div className="flex flex-col items-center gap-3">
                <span className="font-serif text-5xl text-primary font-light">100+</span>
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-60">Years of History</span>
             </div>
             <div className="flex flex-col items-center gap-3">
                <span className="font-serif text-5xl text-primary font-light">18</span>
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-60">Championship Holes</span>
             </div>
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL LAYOUT (Large Image Focus) */}
      <section className="py-32 lg:py-56 container mx-auto px-6 lg:px-24">
        {/* Row 1 */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
          <div className="relative group">
             <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                <img src="/golf-fairway.jpg" alt="Vintage Club" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
             </div>
             <div className="absolute -top-12 -left-12 w-64 h-64 border border-primary/10 -z-10 hidden lg:block" />
          </div>
          <div className="space-y-10 lg:pl-16">
            <span className="text-xs tracking-[0.5em] uppercase text-primary font-bold">The Heritage</span>
            <h3 className="font-serif text-4xl lg:text-6xl font-light tracking-tight leading-none uppercase">
              HONOURING THE ORIGINAL VISION
            </h3>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Designed by the visionary architects of the golden age, the course was 
              conceived to challenge the spirit while providing a serene natural escape. 
              We manage the landscape with the same reverence as our founders.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-10 lg:pr-16 lg:text-right">
            <span className="text-xs tracking-[0.5em] uppercase text-primary font-bold">Modernity</span>
            <h3 className="font-serif text-4xl lg:text-6xl font-light tracking-tight leading-none uppercase">
              EVOLUTION OF LUXURY
            </h3>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              While our roots are historic, our facilities are contemporary. Our estate 
              provides a seamless blend of heritage and modern sophistication across 
              our golf, dining, and event suites.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative group">
             <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                <img src="/bistro-3.jpg" alt="Modern Club" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
             </div>
             <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-primary/10 -z-10 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES (Minimalist Grid) */}
      <section className="bg-white py-32 lg:py-48 border-y border-border/40">
        <div className="container mx-auto px-6 lg:px-24">
           <div className="grid md:grid-cols-3 gap-20">
              <div className="space-y-8 text-center">
                 <History className="w-10 h-10 text-primary/30 stroke-[1px] mx-auto" />
                 <h4 className="font-serif text-2xl uppercase tracking-[0.2em] font-light">Tradition</h4>
                 <p className="text-muted-foreground text-sm font-light leading-relaxed px-4">
                   Upholding the etiquette and historic rituals that define the game.
                 </p>
              </div>
              <div className="space-y-8 text-center">
                 <ShieldCheck className="w-10 h-10 text-primary/30 stroke-[1px] mx-auto" />
                 <h4 className="font-serif text-2xl uppercase tracking-[0.2em] font-light">Stewardship</h4>
                 <p className="text-muted-foreground text-sm font-light leading-relaxed px-4">
                   Preserving the natural Lancashire landscape for future generations.
                 </p>
              </div>
              <div className="space-y-8 text-center">
                 <Users2 className="w-10 h-10 text-primary/30 stroke-[1px] mx-auto" />
                 <h4 className="font-serif text-2xl uppercase tracking-[0.2em] font-light">Community</h4>
                 <p className="text-muted-foreground text-sm font-light leading-relaxed px-4">
                   Providing a warm, exclusive haven for members and guests alike.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. IMMERSIVE INVITATION */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <img src="/meetings-hero.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Join the Legacy" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 space-y-16 px-6">
          <h2 className="font-serif text-5xl lg:text-8xl text-white font-light tracking-tighter leading-none uppercase">
            BE PART OF OUR FUTURE
          </h2>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <a href="/membership" className="bg-white text-black px-16 py-6 text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-primary hover:text-white transition-all duration-500 shadow-xl">
              Membership
            </a>
            <a href="/contact-us" className="group flex items-center gap-4 text-[11px] tracking-[0.5em] uppercase font-bold text-white">
              Plan Your Visit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;