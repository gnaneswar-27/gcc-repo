interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ image, title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        {subtitle && (
          <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-6 animate-fade-in">
            {subtitle}
          </p>
        )}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tighter leading-none mb-12 text-white">
          {title}
        </h1>
        <div className="w-16 h-px bg-white/40" />
      </div>
    </section>
  );
};

export default PageHero;
