
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* Redirect routes without language */}
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
            <Route path="/:lang/" element={<Index />} />
            <Route path="/:lang/por-que-argentina" element={<PorQueArgentina />} />
            <Route path="/:lang/servicios" element={<Servicios />} />
            <Route path="/:lang/proceso" element={<Proceso />} />
            <Route path="/:lang/casos-reales" element={<CasosReales />} />
            <Route path="/:lang/recursos" element={<Recursos />} />
            <Route path="/:lang/tarifas" element={<Tarifas />} />
            <Route path="/:lang/nosotros" element={<Nosotros />} />
            <Route path="/:lang/blog" element={<Blog />} />
            <Route path="/:lang/blog/:slug" element={<ArticleDetail />} />
            <Route path="/:lang/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
