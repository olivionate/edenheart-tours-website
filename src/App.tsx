import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import SafariTours from "./pages/services/SafariTours";
import FlightTicketing from "./pages/services/FlightTicketing";
import HotelReservations from "./pages/services/HotelReservations";
import ConferenceFacilities from "./pages/services/ConferenceFacilities";
import CorporateGroups from "./pages/services/CorporateGroups";
import Transfers from "./pages/services/Transfers";
import BeachHolidays from "./pages/services/BeachHolidays";
import LuxuryPackages from "./pages/services/LuxuryPackages";
import CulturalTours from "./pages/services/CulturalTours";
import DayTrips from "./pages/services/DayTrips";
import GroupTours from "./pages/services/GroupTours";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/safari-tours" element={<SafariTours />} />
          <Route path="/services/beach-holidays" element={<BeachHolidays />} />
          <Route path="/services/luxury-packages" element={<LuxuryPackages />} />
          <Route path="/services/cultural-tours" element={<CulturalTours />} />
          <Route path="/services/day-trips" element={<DayTrips />} />
          <Route path="/services/group-tours" element={<GroupTours />} />
          <Route path="/services/flight-ticketing" element={<FlightTicketing />} />
          <Route path="/services/hotel-reservations" element={<HotelReservations />} />
          <Route path="/services/conference-facilities" element={<ConferenceFacilities />} />
          <Route path="/services/corporate-groups" element={<CorporateGroups />} />
          <Route path="/services/transfers" element={<Transfers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
