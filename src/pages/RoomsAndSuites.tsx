import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import suiteImage from "@/assets/suite-bedroom.jpg";
import classicImage from "@/assets/room-classic.jpg";
import executiveImage from "@/assets/room-executive.jpg";
import suiteRoomImage from "@/assets/room-suite.jpg";
import { Users, BedDouble, Bath, Wifi } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Classic",
    description:
      "Our classic range of rooms all have a view of the golf course or gardens. Guests can enjoy the views or watch the wildlife from their window while enjoying a spacious, clean bedroom with Egyptian cotton bedding, fluffy towels, and all the facilities you expect for a one-night stay or short break.",
    image: classicImage,
    amenities: [
      { icon: Users, label: "2 Adult + 2 Child" },
      { icon: BedDouble, label: "Twin or King" },
      { icon: Bath, label: "1 Bathroom" },
      { icon: Wifi, label: "WiFi Included" },
    ],
  },
  {
    id: 2,
    name: "Executive",
    description:
      "All our Executive upgrade rooms overlook the Gardens, Golf course and Countryside beyond. The rooms are spacious and equipped with 50\" HD TVs, a Pod coffee maker with luxury biscuits, Bathrobes, slippers, additional toiletries and a sofa for two. To sit back and enjoy the peace.",
    image: executiveImage,
    amenities: [
      { icon: Users, label: "2 Adult + 2 Child" },
      { icon: BedDouble, label: "King" },
      { icon: Bath, label: "1 Bathroom" },
      { icon: Wifi, label: "WiFi Included" },
    ],
  },
  {
    id: 3,
    name: "Suite",
    description:
      "This room exudes luxury and spaciousness, featuring French doors leading straight to the patio and gardens. The bathroom is a standout, offering a five-headed walk-in rain shower, a double-ended two-person bathtub, twin sinks, and additional toiletries that match the room's exceptional quality.",
    image: suiteRoomImage,
    amenities: [
      { icon: Users, label: "2 Adult + 2 Child" },
      { icon: BedDouble, label: "Super King" },
      { icon: Bath, label: "1 Bathroom" },
      { icon: Wifi, label: "WiFi Included" },
    ],
  },
];

const RoomsAndSuites = () => {
  return (
    <main className="min-h-screen">
      <Header isTransparent />
      <PageHero image={suiteImage} title="Suites & Rooms" subtitle="Accommodations" />

      {/* Intro */}
      <section className="py-16 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <h2 className="section-title text-foreground mb-8">Storied Suites & Refined Rooms</h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            Past and present come together with effortless elegance at GCC. Every luxury suite and room has been
            beautifully appointed by renowned designers. The resulting spaces pair contemporary comfort with elements
            evoking the building's classical heritage.
          </p>
        </div>
      </section>

      {/* Room Categories */}
      {rooms.map((room, index) => (
        <section
          key={room.id}
          className={`py-16 lg:py-32 ${index % 2 === 0 ? "bg-secondary" : "bg-background"}`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className="luxury-card group aspect-[16/10] lg:aspect-[3/4] lg:[direction:ltr]">
                <img
                  src={room.image}
                  alt={`${room.name} room at GCC`}
                  className="luxury-card-image group-hover:scale-105"
                />
                <div className="luxury-card-overlay" />
              </div>

              {/* Content */}
              <div className="py-4 lg:[direction:ltr]">
                <p className="section-subtitle">Accommodations</p>
                <h3 className="font-serif text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-8">
                  {room.name}
                </h3>
                <div className="w-12 h-px bg-primary mb-8" />
                <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg text-base">
                  {room.description}
                </p>

                {/* Amenity Icons */}
                <div className="grid grid-cols-2 gap-6 mb-10">
                  {room.amenities.map((amenity) => (
                    <div key={amenity.label} className="flex items-center gap-3">
                      <amenity.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground tracking-wide">
                        {amenity.label}
                      </span>
                    </div>
                  ))}
                </div>

                <a href="#book" className="btn-luxury-outline">
                  Book This Room
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 lg:py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <h2 className="font-serif text-4xl lg:text-5xl font-light tracking-wide mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="opacity-80 leading-relaxed mb-10">
            Experience exceptional comfort and warm hospitality. Book directly for the best rates and a complimentary welcome drink.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="btn-luxury-light">Book Your Stay</a>
            <a href="/special-offers" className="btn-luxury-light">See Offers</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RoomsAndSuites;
