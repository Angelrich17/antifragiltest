
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageRedirect from "@/components/LanguageRedirect";
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
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect routes without language to /es */}
          <Route path="/" element={<LanguageRedirect />} />
          <Route path="/por-que-argentina" element={<LanguageRedirect />} />
          <Route path="/servicios" element={<LanguageRedirect />} />
          <Route path="/proceso" element={<LanguageRedirect />} />
          <Route path="/casos-reales" element={<LanguageRedirect />} />
          <Route path="/recursos" element={<LanguageRedirect />} />
          <Route path="/tarifas" element={<LanguageRedirect />} />
          <Route path="/nosotros" element={<LanguageRedirect />} />
          <Route path="/blog" element={<LanguageRedirect />} />
          <Route path="/blog/:slug" element={<LanguageRedirect />} />
          <Route path="/contacto" element={<LanguageRedirect />} />
          
          {/* Localized routes */}
          <Route path="/:lang/*" element={
            <LanguageProvider>
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
                <Route path="/blog/:slug" element={<ArticleDetail />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/sitemap.xml" element={<Sitemap />} />
                <Route path="/robots.txt" element={<Robots />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </LanguageProvider>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
