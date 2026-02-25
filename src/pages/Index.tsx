import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SuitesSection from "@/components/SuitesSection";
import DiningSection from "@/components/DiningSection";
import SpaSection from "@/components/SpaSection";
import GolfCourseSection from "@/components/GolfCourseSection";
import OffersSection from "@/components/OffersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <SuitesSection />
      <DiningSection />
      <SpaSection />
      <GolfCourseSection />
      <OffersSection />
      <Footer />
    </main>
  );
};

export default Index;
