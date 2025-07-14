
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageDetection from "@/components/LanguageDetection";
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
import ArticleDetail from "./pages/ArticleDetail";
import Sitemap from "./pages/Sitemap";
import Robots from "./pages/Robots";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <LanguageDetection />
            <Routes>
              {/* Spanish routes */}
              <Route path="/" element={<Index />} />
              <Route path="/por-que-argentina" element={<PorQueArgentina />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/proceso" element={<Proceso />} />
              <Route path="/casos-reales" element={<CasosReales />} />
              <Route path="/recursos" element={<Recursos />} />
              <Route path="/tarifas" element={<Tarifas />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<ArticleDetail />} />
              <Route path="/contacto" element={<Contacto />} />
              
              {/* English routes */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/why-argentina" element={<PorQueArgentina />} />
              <Route path="/en/services" element={<Servicios />} />
              <Route path="/en/process" element={<Proceso />} />
              <Route path="/en/real-cases" element={<CasosReales />} />
              <Route path="/en/resources" element={<Recursos />} />
              <Route path="/en/rates" element={<Tarifas />} />
              <Route path="/en/about-us" element={<Nosotros />} />
              <Route path="/en/blog" element={<Blog />} />
              <Route path="/en/blog/:slug" element={<ArticleDetail />} />
              <Route path="/en/contact" element={<Contacto />} />
              
              {/* Utility routes */}
              <Route path="/sitemap.xml" element={<Sitemap />} />
              <Route path="/robots.txt" element={<Robots />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
