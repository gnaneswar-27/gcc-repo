interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ image, title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] min-h-[300px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center px-6">
        {subtitle && (
          <p className="text-xs tracking-[0.25em] uppercase text-white/80 mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;
