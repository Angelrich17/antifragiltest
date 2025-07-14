import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.why-argentina': 'Por qué Argentina',
    'nav.services': 'Servicios',
    'nav.process': 'Proceso',
    'nav.case-studies': 'Casos Reales',
    'nav.resources': 'Recursos',
    'nav.pricing': 'Tarifas',
    'nav.blog': 'Blog',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'header.schedule-consultation': 'Agenda consulta',
    
    // Hero Section
    'hero.title.part1': 'Tu acceso al',
    'hero.title.part2': 'futuro inmobiliario',
    'hero.title.part3': 'de Buenos Aires',
    'hero.subtitle': 'Navegamos la complejidad del mercado argentino para transformar las dudas en oportunidades de renta excepcionales. Acompañamiento integral desde la estrategia hasta la ejecución.',
    'hero.schedule-consultation': 'Agenda tu consulta',
    'hero.watch-presentation': 'Ver presentación',
    'hero.free-consultation': 'Consulta inicial sin costo',
    'hero.total-transparency': 'Transparencia total',
    'hero.secure-remote': 'Operación remota segura',
    'hero.play-teaser': 'Reproducir teaser',
    'hero.teaser-description': 'Descubre cómo convertimos la volatilidad argentina en rentabilidad predecible',
    'hero.average-roi': 'ROI promedio',
    'hero.upside-potential': 'Potencial alcista',
    
    // Data Section
    'data.title': 'Los números no mienten',
    'data.subtitle': 'Datos comparativos que demuestran el momento excepcional para invertir en Buenos Aires',
    'data.international-comparison': 'Comparativa internacional (USD/m²)',
    
    // Philosophy Section
    'philosophy.badge': 'Filosofía Antifragile',
    'philosophy.title.part1': 'Prosperamos en la',
    'philosophy.title.part2': 'incertidumbre',
    'philosophy.subtitle': 'Mientras otros temen la volatilidad, nosotros la aprovechamos. Buenos Aires ofrece oportunidades únicas para inversionistas que entienden cómo navegar la complejidad.',
    'philosophy.exceptional-returns.title': 'Retornos Excepcionales',
    'philosophy.exceptional-returns.description': 'ROI del 8-15% anual en USD. Precios 60% por debajo de máximos históricos crean oportunidades irrepetibles.',
    'philosophy.exceptional-returns.stat': 'potencial de apreciación',
    'philosophy.legal-security.title': 'Seguridad Jurídica',
    'philosophy.legal-security.description': 'Due diligence exhaustivo, escribano certificado y poder notarial para operaciones 100% remotas y seguras.',
    'philosophy.legal-security.stat': 'operaciones exitosas',
    'philosophy.boutique-service.title': 'Servicio Boutique',
    'philosophy.boutique-service.description': 'Desde estrategia hasta gestión de renta. Un equipo especializado dedicado exclusivamente a tu éxito.',
    'philosophy.boutique-service.stat': 'acompañamiento integral',
    
    // Process Section
    'process.badge': 'Metodología Probada',
    'process.title.part1': 'De la estrategia a la',
    'process.title.part2': 'rentabilidad',
    'process.subtitle': 'Un proceso refinado que transforma conceptos complejos en resultados tangibles',
    'process.step1.title': 'Consulta Estratégica',
    'process.step1.description': 'Sesión inicial de 30 minutos para comprender tus objetivos, apetito de riesgo y definir la estrategia de inversión óptima.',
    'process.step2.title': 'Curación & Análisis',
    'process.step2.description': 'Identificación de oportunidades premium. Due diligence completo de propiedades, documentación y potencial de rentabilidad.',
    'process.step3.title': 'Ejecución & Gestión',
    'process.step3.description': 'Cierre notarial remoto, optimización del activo y gestión integral de renta desde el primer día.',
    'process.explore-methodology': 'Explorar metodología completa',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.why-argentina': 'Why Argentina',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.case-studies': 'Case Studies',
    'nav.resources': 'Resources',
    'nav.pricing': 'Pricing',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'header.schedule-consultation': 'Schedule consultation',
    
    // Hero Section
    'hero.title.part1': 'Your gateway to',
    'hero.title.part2': 'Buenos Aires',
    'hero.title.part3': 'real estate future',
    'hero.subtitle': 'We navigate the complexity of the Argentine market to transform doubts into exceptional rental opportunities. Comprehensive support from strategy to execution.',
    'hero.schedule-consultation': 'Schedule your consultation',
    'hero.watch-presentation': 'Watch presentation',
    'hero.free-consultation': 'Free initial consultation',
    'hero.total-transparency': 'Total transparency',
    'hero.secure-remote': 'Secure remote operation',
    'hero.play-teaser': 'Play teaser',
    'hero.teaser-description': 'Discover how we turn Argentine volatility into predictable profitability',
    'hero.average-roi': 'Average ROI',
    'hero.upside-potential': 'Upside potential',
    
    // Data Section
    'data.title': 'Numbers don\'t lie',
    'data.subtitle': 'Comparative data demonstrating the exceptional moment to invest in Buenos Aires',
    'data.international-comparison': 'International comparison (USD/m²)',
    
    // Philosophy Section
    'philosophy.badge': 'Antifragile Philosophy',
    'philosophy.title.part1': 'We thrive in',
    'philosophy.title.part2': 'uncertainty',
    'philosophy.subtitle': 'While others fear volatility, we leverage it. Buenos Aires offers unique opportunities for investors who understand how to navigate complexity.',
    'philosophy.exceptional-returns.title': 'Exceptional Returns',
    'philosophy.exceptional-returns.description': '8-15% annual ROI in USD. Prices 60% below historical peaks create unrepeatable opportunities.',
    'philosophy.exceptional-returns.stat': 'appreciation potential',
    'philosophy.legal-security.title': 'Legal Security',
    'philosophy.legal-security.description': 'Exhaustive due diligence, certified notary and power of attorney for 100% remote and secure operations.',
    'philosophy.legal-security.stat': 'successful operations',
    'philosophy.boutique-service.title': 'Boutique Service',
    'philosophy.boutique-service.description': 'From strategy to rental management. A specialized team dedicated exclusively to your success.',
    'philosophy.boutique-service.stat': 'comprehensive support',
    
    // Process Section
    'process.badge': 'Proven Methodology',
    'process.title.part1': 'From strategy to',
    'process.title.part2': 'profitability',
    'process.subtitle': 'A refined process that transforms complex concepts into tangible results',
    'process.step1.title': 'Strategic Consultation',
    'process.step1.description': '30-minute initial session to understand your objectives, risk appetite and define the optimal investment strategy.',
    'process.step2.title': 'Curation & Analysis',
    'process.step2.description': 'Identification of premium opportunities. Complete due diligence of properties, documentation and profitability potential.',
    'process.step3.title': 'Execution & Management',
    'process.step3.description': 'Remote notarial closing, asset optimization and comprehensive rental management from day one.',
    'process.explore-methodology': 'Explore complete methodology',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};