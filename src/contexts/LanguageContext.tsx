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

    // Blog Page
    'blog.title': 'Insights & Análisis',
    'blog.subtitle': 'Perspectivas profundas sobre inversiones inmobiliarias en Argentina',
    'blog.featured-articles': 'Artículos destacados',
    'blog.all-articles': 'Todos los artículos',
    'blog.newsletter.title': 'Mantente informado',
    'blog.newsletter.subtitle': 'Recibe análisis exclusivos y oportunidades de inversión directamente en tu email',
    'blog.newsletter.placeholder': 'Tu email',
    'blog.newsletter.subscribe': 'Suscribirse',
    'blog.newsletter.success': '¡Suscripción exitosa!',
    'blog.newsletter.success.description': 'Te has suscrito correctamente a nuestro newsletter',
    'blog.newsletter.error': 'Error',
    'blog.newsletter.error.invalid': 'Por favor ingresa un email válido',
    'blog.newsletter.error.general': 'Hubo un error al suscribirse. Inténtalo nuevamente.',
    'blog.read-more': 'Leer más',
    'blog.back-to-blog': 'Volver al blog',
    'blog.reading-time': 'lectura',

    // Why Argentina Page
    'why-argentina.title': '¿Por qué Argentina ahora?',
    'why-argentina.subtitle': 'Una tesis de inversión respaldada por datos duros, ciclos económicos y una oportunidad histórica de comprar activos de calidad mundial a precios de mercados emergentes.',
    'why-argentina.watch-analysis': 'Ver análisis completo',
    'why-argentina.download-pdf': 'Descargar PDF gratuito',
    'why-argentina.macroeconomic-data': 'Datos macroeconómicos',
    'why-argentina.historical-cycles': 'Ciclos históricos',
    'why-argentina.expert-analysis': 'Análisis experto',
    'why-argentina.international-comparison': 'Comparativa internacional',
    'why-argentina.historic-opportunity': 'Oportunidad histórica',
    'why-argentina.growth-catalysts': 'Catalizadores de crecimiento',
    'why-argentina.growth-catalysts.subtitle': 'Factores macro que impulsan la revalorización inmobiliaria en el mediano plazo',
    'why-argentina.political-cycle': 'Ciclo Político',
    'why-argentina.political-cycle.description': 'Nuevo gobierno pro-mercado. Políticas de apertura económica y normalización del tipo de cambio.',
    'why-argentina.vaca-muerta': 'Vaca Muerta',
    'why-argentina.vaca-muerta.description': 'Segundo yacimiento de gas no convencional del mundo. Potencial de ingresos por $200B+ en 20 años.',
    'why-argentina.exchange-rate': 'Tipo de Cambio',
    'why-argentina.exchange-rate.description': 'Unificación cambiaria inminente. Corrección hacia equilibrio de largo plazo favorece activos locales.',
    'why-argentina.risks-title': '¿Riesgos y cómo los mitigamos?',
    'why-argentina.risks-subtitle': 'Transparencia total sobre los desafíos y nuestras estrategias de mitigación',

    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
    'common.contact': 'Contacto',
    'common.email': 'Email',
    'common.phone': 'Teléfono',
    'common.name': 'Nombre',
    'common.send': 'Enviar',
    'common.read-more': 'Leer más',
    'common.learn-more': 'Saber más',
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

    // Blog Page
    'blog.title': 'Insights & Analysis',
    'blog.subtitle': 'Deep perspectives on real estate investments in Argentina',
    'blog.featured-articles': 'Featured articles',
    'blog.all-articles': 'All articles',
    'blog.newsletter.title': 'Stay informed',
    'blog.newsletter.subtitle': 'Receive exclusive analysis and investment opportunities directly in your email',
    'blog.newsletter.placeholder': 'Your email',
    'blog.newsletter.subscribe': 'Subscribe',
    'blog.newsletter.success': 'Subscription successful!',
    'blog.newsletter.success.description': 'You have successfully subscribed to our newsletter',
    'blog.newsletter.error': 'Error',
    'blog.newsletter.error.invalid': 'Please enter a valid email',
    'blog.newsletter.error.general': 'There was an error subscribing. Please try again.',
    'blog.read-more': 'Read more',
    'blog.back-to-blog': 'Back to blog',
    'blog.reading-time': 'read',

    // Why Argentina Page
    'why-argentina.title': 'Why Argentina now?',
    'why-argentina.subtitle': 'An investment thesis backed by hard data, economic cycles and a historic opportunity to buy world-class assets at emerging market prices.',
    'why-argentina.watch-analysis': 'Watch complete analysis',
    'why-argentina.download-pdf': 'Download free PDF',
    'why-argentina.macroeconomic-data': 'Macroeconomic data',
    'why-argentina.historical-cycles': 'Historical cycles',
    'why-argentina.expert-analysis': 'Expert analysis',
    'why-argentina.international-comparison': 'International comparison',
    'why-argentina.historic-opportunity': 'Historic opportunity',
    'why-argentina.growth-catalysts': 'Growth Catalysts',
    'why-argentina.growth-catalysts.subtitle': 'Macro factors driving real estate appreciation in the medium term',
    'why-argentina.political-cycle': 'Political Cycle',
    'why-argentina.political-cycle.description': 'New pro-market government. Economic opening policies and exchange rate normalization.',
    'why-argentina.vaca-muerta': 'Vaca Muerta',
    'why-argentina.vaca-muerta.description': 'Second largest unconventional gas field in the world. Revenue potential of $200B+ over 20 years.',
    'why-argentina.exchange-rate': 'Exchange Rate',
    'why-argentina.exchange-rate.description': 'Imminent currency unification. Long-term equilibrium correction favors local assets.',
    'why-argentina.risks-title': 'Risks and how we mitigate them?',
    'why-argentina.risks-subtitle': 'Total transparency about challenges and our mitigation strategies',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.contact': 'Contact',
    'common.email': 'Email',
    'common.phone': 'Phone',
    'common.name': 'Name',
    'common.send': 'Send',
    'common.read-more': 'Read more',
    'common.learn-more': 'Learn more',
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