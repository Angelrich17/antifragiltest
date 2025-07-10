
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PorQueArgentina from "./pages/PorQueArgentina";
import Servicios from "./pages/Servicios";
import Proceso from "./pages/Proceso";
import CasosReales from "./pages/CasosReales";
import Recursos from "./pages/Recursos";
import Tarifas from "./pages/Tarifas";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
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
          <Route path="/por-que-argentina" element={<PorQueArgentina />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proceso" element={<Proceso />} />
          <Route path="/casos-reales" element={<CasosReales />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
