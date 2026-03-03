import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RoomsAndSuites from "./pages/RoomsAndSuites";
import Dining from "./pages/Dining";
import SpaWellness from "./pages/SpaWellness";
import Weddings from "./pages/Weddings";
import MeetingsAndEvents from "./pages/Meetings&Events";
import GolfCourse from "./pages/GolfCourse";
import SpecialOffers from "./pages/SpecialOffers";
import AboutUs from "./pages/AboutUs";
import GiftVouchers from "./pages/GiftVouchers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rooms-and-suites" element={<RoomsAndSuites />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/spa-wellness" element={<SpaWellness />} />
          <Route path="/golf-course" element={<GolfCourse />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/meetings-and-events" element={<MeetingsAndEvents />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/gift-vouchers" element={<GiftVouchers />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
