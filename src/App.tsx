import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Blueprint from "./pages/Blueprint";
import Products from "./pages/Products";
import PathwayDetail from "./pages/PathwayDetail";
import Platform from "./pages/Platform";
import Enterprise from "./pages/Enterprise";
import DeveloperPortal from "./pages/DeveloperPortal";
import TalentIndex from "./pages/TalentIndex";
import Ecosystem from "./pages/Ecosystem";
import CaseStudies from "./pages/CaseStudies";
import Research from "./pages/Research";
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
          <Route path="/platform" element={<Platform />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/developers" element={<DeveloperPortal />} />
          <Route path="/talent" element={<TalentIndex />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/research" element={<Research />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blueprint" element={<Blueprint />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pathways/:pathwayId" element={<PathwayDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
