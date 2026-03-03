import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gift, ArrowRight, Sparkles, CreditCard, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const vouchers = [
  {
    id: "GV-01",
    title: "THE CHAMPIONSHIP EXPERIENCE",
    price: "£150.00",
    description:
      "An 18-hole round of golf on our legendary links course, including a premium lunch at the 1922 Bar.",
    category: "GOLF",
  },
  {
    id: "GV-02",
    title: "SUITE INDULGENCE STAY",
    price: "£350.00",
    description:
      "One night's accommodation in a Luxury Suite with breakfast and a three-course dinner for two.",
    category: "STAY",
  },
  {
    id: "GV-03",
    title: "RELAX & RESTORE SPA DAY",
    price: "£120.00",
    description:
      "A full day of access to our wellness facilities, including a signature 60-minute massage.",
    category: "SPA",
  },
  {
    id: "GV-04",
    title: "TRADITIONAL AFTERNOON TEA",
    price: "£45.00",
    description:
      "A classic selection of fine teas, artisanal sandwiches, and pastries served in our Heritage Lounge.",
    category: "DINING",
  },
];

const GiftVouchers = () => {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Header isTransparent />

      {/* 1. CONSISTENT HERO - Full height (h-screen) for impact */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/gift-1.jpg"
            className="w-full h-full object-cover"
            alt="Gift Vouchers"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-[10px] tracking-[0.8em] uppercase mb-8 block opacity-90 font-medium">
            Give the Gift of Excellence
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-light tracking-tighter leading-none uppercase">
            GIFT VOUCHERS
          </h1>
        </div>
      </section>

      {/* 2. THE BOUTIQUE GRID */}
      <section className="py-32 lg:py-48 container mx-auto px-6 lg:px-24">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-5xl font-light leading-tight text-foreground mb-8 uppercase tracking-tight">
            SHARE THE EXPERIENCE
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Our gift vouchers are the perfect way to celebrate life's
            milestones. From the thrill of the links to the tranquility of the
            spa, provide your loved ones with an unforgettable escape to
            Garstang Country Club.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {vouchers.map((v) => (
            <div
              key={v.id}
              className="group bg-white border border-border/50 p-10 lg:p-16 flex flex-col justify-between transition-all duration-700 hover:shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-border pb-6">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold">
                    {v.category}
                  </span>
                  <span className="font-serif text-2xl font-light">
                    {v.price}
                  </span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-light uppercase tracking-tight pt-4">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {v.description}
                </p>
              </div>
              <div className="pt-12">
                <button className="w-full border border-foreground py-5 text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-500">
                  Purchase Voucher
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BESPOKE GIFTING - Redesigned Green Section */}
      <section className="py-24 lg:py-32 container mx-auto px-6 lg:px-24">
        <div className="bg-primary p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="max-w-2xl space-y-6 text-white text-center lg:text-left">
            <Sparkles className="w-10 h-10 text-white/40 stroke-[1px] mx-auto lg:mx-0" />
            <h2 className="font-serif text-3xl lg:text-5xl font-light uppercase leading-tight">
              BESPOKE GIFTING
            </h2>
            <p className="text-white/80 text-base font-light">
              For corporate orders or to create a custom experience tailored to
              your specific requirements, please contact our concierge team. We
              offer personalized branding and volume arrangements for our most
              discerning clients.
            </p>
          </div>

          <div className="whitespace-nowrap">
            <a
              href="/contact-us"
              className="group flex items-center justify-center gap-4 bg-white text-primary px-12 py-6 text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-white/90 transition-all duration-300 shadow-xl min-w-[280px]"
            >
              Inquire Privately
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GiftVouchers;
