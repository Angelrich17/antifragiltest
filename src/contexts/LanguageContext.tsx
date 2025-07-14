import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'header.nav.inicio': 'Inicio',
    'header.nav.servicios': 'Servicios',
    'header.nav.proceso': 'Proceso',
    'header.nav.nosotros': 'Nosotros',
    'header.nav.tarifas': 'Tarifas',
    'header.nav.blog': 'Blog',
    'header.nav.contacto': 'Contacto',
    'header.nav.casos-reales': 'Casos Reales',
    'header.nav.porque-argentina': '¿Por qué Argentina?',
    'header.nav.recursos': 'Recursos',
    
    // Hero Section
    'hero.badge': 'Especialistas en Inversión Inmobiliaria',
    'hero.title': 'Oportunidades inmobiliarias en Buenos Aires que el mercado aún no ve',
    'hero.subtitle': 'Inversiones directas en propiedades con potencial de 2-3x. Compramos, reciclamos y ponemos a renta por ti.',
    'hero.primary-cta': 'Agenda tu consulta gratuita',
    'hero.secondary-cta': 'Ver casos reales',
    'hero.benefit1': 'Yields 8-12% en USD',
    'hero.benefit2': 'Expertise local + visión global',
    'hero.benefit3': 'Proceso integral llave en mano',

    // Services Section
    'services.badge': 'Nuestros servicios',
    'services.title': 'De la oportunidad al cash flow',
    'services.subtitle': 'Un proceso integral que va desde el hallazgo de la oportunidad hasta la gestión completa del activo generando renta.',
    'services.personal-shopper.title': 'Personal Shopper Inmobiliario',
    'services.personal-shopper.description': 'Identificamos y adquirimos la propiedad ideal según tu perfil de riesgo y objetivos de retorno.',
    'services.renovation.title': 'Gestión Integral de Obra',
    'services.renovation.description': 'Reciclamos la propiedad para maximizar su potencial de renta y valorización.',
    'services.management.title': 'Gestión de Airbnb',
    'services.management.description': 'Ponemos la propiedad a generar renta optimizada desde el día uno.',

    // Why Argentina Section
    'why-argentina.badge': 'Timing del mercado',
    'why-argentina.title': '¿Por qué Buenos Aires ahora?',
    'why-argentina.subtitle': 'El mercado inmobiliario argentino atraviesa un momento único que genera oportunidades excepcionales para inversores con visión.',
    'why-argentina.economic-cycle.title': 'Nuevo ciclo económico',
    'why-argentina.economic-cycle.description': 'Estabilización macroeconómica y retorno de la confianza crean condiciones ideales para inversión.',
    'why-argentina.undervalued.title': 'Activos subvaluados',
    'why-argentina.undervalued.description': 'Precios en USD históricamente bajos con potencial de normalización del 100-200%.',
    'why-argentina.yields.title': 'Yields excepcionales',
    'why-argentina.yields.description': 'Rentabilidades del 8-12% anual en USD, muy superiores a mercados desarrollados.',

    // Historic Prices Section
    'historic-prices.title': 'Precios históricos en USD',
    'historic-prices.description': 'Evolución del precio promedio del m² en Buenos Aires vs otras ciudades globales.',

    // Blog Section
    'blog.badge': 'Análisis y tendencias',
    'blog.title': 'Últimas publicaciones',
    'blog.subtitle': 'Análisis profundo del mercado argentino, casos de estudio y tendencias que impactan las inversiones inmobiliarias.',
    'blog.read-more': 'Leer más',
    'blog.all-articles': 'Ver todos los artículos',
    'blog.back-to-blog': 'Volver al blog',

    // Footer
    'footer.tagline': 'Antifragile Advisors - Transformamos la volatilidad argentina en oportunidades de inversión excepcionales.',
    'footer.services.title': 'Servicios',
    'footer.services.personal-shopper': 'Personal Shopper',
    'footer.services.renovation': 'Gestión de Obra',
    'footer.services.management': 'Gestión Airbnb',
    'footer.resources.title': 'Recursos',
    'footer.resources.blog': 'Blog',
    'footer.resources.case-studies': 'Casos Reales',
    'footer.resources.why-argentina': '¿Por qué Argentina?',
    'footer.company.title': 'Empresa',
    'footer.company.about': 'Nosotros',
    'footer.company.process': 'Proceso',
    'footer.company.pricing': 'Tarifas',
    'footer.company.contact': 'Contacto',
    'footer.newsletter.title': 'Newsletter',
    'footer.newsletter.subtitle': 'Recibe análisis exclusivos del mercado argentino',
    'footer.newsletter.placeholder': 'Tu email',
    'footer.newsletter.button': 'Suscribirse',
    'footer.newsletter.success': '¡Suscripción exitosa!',
    'footer.newsletter.error': 'Error al suscribirse. Inténtalo de nuevo.',
    'footer.copyright': '© 2025 Antifragile Advisors. Todos los derechos reservados.',

    // CTA Section
    'cta.badge': 'Comienza hoy',
    'cta.title': '¿Listo para tu primera inversión?',
    'cta.subtitle': 'Agenda una consulta gratuita de 15 minutos para evaluar tu perfil de inversor y las mejores oportunidades disponibles.',
    'cta.button': 'Agenda tu consulta gratuita',
    'cta.no-commitment': 'Sin compromiso',

    // Contact Page
    'contact.badge': 'Iniciar conversación',
    'contact.title': 'Contacto',
    'contact.subtitle': 'Agenda tu consulta estratégica inicial sin costo. Conversaremos sobre tus objetivos y exploraremos las oportunidades más relevantes para tu perfil inversor.',
    'contact.strategic-consultation.title': 'Consulta estratégica',
    'contact.strategic-consultation.description': 'Sesión inicial de 30 minutos para evaluar objetivos y oportunidades. Calendario disponible próximamente.',
    'contact.direct-contact.title': 'Contacto directo',
    'contact.direct-contact.description': 'Para consultas específicas o información adicional. Haz clic aquí para contactar vía WhatsApp.',
    'contact.form.title': 'Formulario de contacto',
    'contact.form.subtitle': 'Envíanos tu consulta y te responderemos a la brevedad',
    'contact.form.name': 'Nombre completo',
    'contact.form.name-placeholder': 'Tu nombre completo',
    'contact.form.email': 'Correo electrónico',
    'contact.form.email-placeholder': 'tu@email.com',
    'contact.form.message': 'Mensaje',
    'contact.form.message-placeholder': 'Cuéntanos sobre tu consulta o interés en inversiones inmobiliarias...',
    'contact.form.submit': 'Enviar mensaje',
    'contact.whatsapp-message': 'Hola, me interesa conocer más sobre las oportunidades de inversión en Buenos Aires.',
    'contact.back-home': 'Volver al inicio',

    // Blog Articles 
    'articles.microcentro.title': 'Por qué el Microcentro porteño es la mejor oportunidad inmobiliaria (2025)',
    'articles.microcentro.excerpt': 'Análisis completo del ciclo argentino, comparativas con Madrid y Barcelona, y cómo invertir en oficinas a reciclar con yields del 8-10%.',
    'articles.microcentro.content': `
      <div class="space-y-8">
        <!-- Intro destacado -->
        <div class="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p class="text-sm text-blue-700 font-medium mb-2">🏢 Actualizado: 13 de enero de 2025 | Nuevo ciclo económico argentino</p>
        </div>

        <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-8 mb-4">
          El punto de partida: nuevo ciclo argentino
        </h2>
        <p class="text-lg leading-relaxed text-slate-700 mb-6">
          Desde la llegada de Javier Milei en diciembre 2023, Argentina recortó de raíz el déficit fiscal primario y estabilizó el tipo de cambio. <strong>El resultado es doble: el salario real en dólares casi se triplicó y los bancos volvieron a ofrecer crédito hipotecario en moneda dura</strong>. En paralelo, la oferta publicada de propiedades en venta viene cayendo desde 2020, mientras las escrituras suben trimestre a trimestre, creando un mercado en clara fase de absorción.
        </p>

        <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-3 mt-12 mb-6">
          🏙️ Zonas prime versus zonas de valor
        </h2>
        
        <!-- Mobile version -->
        <div class="md:hidden space-y-4 mb-8">
          <div class="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
            <h3 class="font-bold text-purple-800 mb-2">Puerto Madero</h3>
            <p class="text-purple-700 font-bold text-lg">~US$6.000/m²</p>
            <p class="text-purple-600 text-sm">Waterfront ultramoderno con torres de obra nueva y vistas al Río.</p>
          </div>
          
          <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 border border-indigo-200 rounded-lg p-4">
            <h3 class="font-bold text-indigo-800 mb-2">Palermo Chico</h3>
            <p class="text-indigo-700 font-bold text-lg">~US$4.000/m²</p>
            <p class="text-indigo-600 text-sm">Barrio de las Embajadas, palacetes y parques.</p>
          </div>
          
          <div class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
            <h3 class="font-bold text-blue-800 mb-2">Palermo Soho/Hollywood y Núñez</h3>
            <p class="text-blue-700 font-bold text-lg">~US$3.000/m²</p>
            <p class="text-blue-600 text-sm">Polo gastronómico (Don Julio, La Carnicería) y vida nocturna.</p>
          </div>
          
          <div class="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
            <h3 class="font-bold text-green-800 mb-2">Recoleta</h3>
            <p class="text-green-700 font-bold text-lg">~US$2.700/m²</p>
            <p class="text-green-600 text-sm">Arquitectura clásica y turismo cultural.</p>
          </div>
          
          <div class="bg-gradient-to-r from-amber-50 to-yellow-100 border-2 border-amber-300 rounded-lg p-4 shadow-md">
            <h3 class="font-bold text-amber-800 mb-2">🌟 Microcentro (San Nicolás/Monserrat)</h3>
            <p class="text-amber-700 font-bold text-xl">US$1.000-1.500/m²</p>
            <p class="text-amber-600 font-medium">Inventario masivo de plantas con techos altos, hoy a precio de remate.</p>
          </div>
        </div>
        
        <!-- Desktop version -->
        <div class="hidden md:block overflow-x-auto shadow-lg rounded-lg mb-8">
          <table class="w-full bg-white">
            <thead class="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">Zona</th>
                <th class="px-6 py-4 text-left font-semibold">Precio/m²</th>
                <th class="px-6 py-4 text-left font-semibold">Características</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr class="hover:bg-purple-50 transition-colors">
                <td class="px-6 py-4 font-medium text-purple-800">Puerto Madero</td>
                <td class="px-6 py-4 text-purple-700 font-bold">~US$6.000/m²</td>
                <td class="px-6 py-4 text-slate-600">Waterfront ultramoderno con torres de obra nueva y vistas al Río</td>
              </tr>
              <tr class="hover:bg-indigo-50 transition-colors">
                <td class="px-6 py-4 font-medium text-indigo-800">Palermo Chico</td>
                <td class="px-6 py-4 text-indigo-700 font-bold">~US$4.000/m²</td>
                <td class="px-6 py-4 text-slate-600">Barrio de las Embajadas, palacetes y parques</td>
              </tr>
              <tr class="hover:bg-blue-50 transition-colors">
                <td class="px-6 py-4 font-medium text-blue-800">Palermo Soho/Hollywood y Núñez</td>
                <td class="px-6 py-4 text-blue-700 font-bold">~US$3.000/m²</td>
                <td class="px-6 py-4 text-slate-600">Polo gastronómico (Don Julio, La Carnicería) y vida nocturna</td>
              </tr>
              <tr class="hover:bg-green-50 transition-colors">
                <td class="px-6 py-4 font-medium text-green-800">Recoleta</td>
                <td class="px-6 py-4 text-green-700 font-bold">~US$2.700/m²</td>
                <td class="px-6 py-4 text-slate-600">Arquitectura clásica y turismo cultural</td>
              </tr>
              <tr class="hover:bg-amber-50 transition-colors bg-amber-25 border-l-4 border-amber-500">
                <td class="px-6 py-4 font-bold text-amber-800">🌟 Microcentro (San Nicolás/Monserrat)</td>
                <td class="px-6 py-4 text-amber-700 font-bold text-lg">US$1.000-1.500/m²</td>
                <td class="px-6 py-4 text-amber-700 font-medium">Inventario masivo de plantas con techos altos, hoy a precio de remate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    'articles.bitcoin.title': 'Comprar una vivienda en Buenos Aires con Bitcoin sin venderlo',
    'articles.bitcoin.excerpt': 'Cómo apalancar tu BTC al 5% en DeFi, comprar metros a USD 1,000/m² y conservar el potencial alcista de la criptomoneda.',
    'articles.bitcoin.content': 'La intersección entre criptomonedas y bienes raíces en Argentina abre oportunidades únicas para holders de Bitcoin que buscan diversificar su portafolio sin liquidar sus activos digitales.'
  },
  en: {
    // Header
    'header.nav.inicio': 'Home',
    'header.nav.servicios': 'Services',
    'header.nav.proceso': 'Process',
    'header.nav.nosotros': 'About',
    'header.nav.tarifas': 'Pricing',
    'header.nav.blog': 'Blog',
    'header.nav.contacto': 'Contact',
    'header.nav.casos-reales': 'Case Studies',
    'header.nav.porque-argentina': 'Why Argentina?',
    'header.nav.recursos': 'Resources',
    
    // Hero Section
    'hero.badge': 'Real Estate Investment Specialists',
    'hero.title': 'Buenos Aires real estate opportunities the market hasn\'t seen yet',
    'hero.subtitle': 'Direct investments in properties with 2-3x potential. We buy, renovate and rent for you.',
    'hero.primary-cta': 'Schedule your free consultation',
    'hero.secondary-cta': 'See real cases',
    'hero.benefit1': '8-12% USD yields',
    'hero.benefit2': 'Local expertise + global vision',
    'hero.benefit3': 'Comprehensive turnkey process',

    // Services Section
    'services.badge': 'Our services',
    'services.title': 'From opportunity to cash flow',
    'services.subtitle': 'A comprehensive process that goes from finding the opportunity to complete asset management generating rent.',
    'services.personal-shopper.title': 'Real Estate Personal Shopper',
    'services.personal-shopper.description': 'We identify and acquire the ideal property according to your risk profile and return objectives.',
    'services.renovation.title': 'Comprehensive Construction Management',
    'services.renovation.description': 'We renovate the property to maximize its rental and appreciation potential.',
    'services.management.title': 'Airbnb Management',
    'services.management.description': 'We put the property to generate optimized rent from day one.',

    // Why Argentina Section
    'why-argentina.badge': 'Market timing',
    'why-argentina.title': 'Why Buenos Aires now?',
    'why-argentina.subtitle': 'The Argentine real estate market is going through a unique moment that generates exceptional opportunities for investors with vision.',
    'why-argentina.economic-cycle.title': 'New economic cycle',
    'why-argentina.economic-cycle.description': 'Macroeconomic stabilization and return of confidence create ideal conditions for investment.',
    'why-argentina.undervalued.title': 'Undervalued assets',
    'why-argentina.undervalued.description': 'Historically low USD prices with 100-200% normalization potential.',
    'why-argentina.yields.title': 'Exceptional yields',
    'why-argentina.yields.description': '8-12% annual returns in USD, far superior to developed markets.',

    // Historic Prices Section
    'historic-prices.title': 'Historic prices in USD',
    'historic-prices.description': 'Evolution of average price per m² in Buenos Aires vs other global cities.',

    // Blog Section
    'blog.badge': 'Analysis and trends',
    'blog.title': 'Latest publications',
    'blog.subtitle': 'Deep analysis of the Argentine market, case studies and trends that impact real estate investments.',
    'blog.read-more': 'Read more',
    'blog.all-articles': 'See all articles',
    'blog.back-to-blog': 'Back to blog',

    // Footer
    'footer.tagline': 'Antifragile Advisors - We transform Argentine volatility into exceptional investment opportunities.',
    'footer.services.title': 'Services',
    'footer.services.personal-shopper': 'Personal Shopper',
    'footer.services.renovation': 'Construction Management',
    'footer.services.management': 'Airbnb Management',
    'footer.resources.title': 'Resources',
    'footer.resources.blog': 'Blog',
    'footer.resources.case-studies': 'Case Studies',
    'footer.resources.why-argentina': 'Why Argentina?',
    'footer.company.title': 'Company',
    'footer.company.about': 'About',
    'footer.company.process': 'Process',
    'footer.company.pricing': 'Pricing',
    'footer.company.contact': 'Contact',
    'footer.newsletter.title': 'Newsletter',
    'footer.newsletter.subtitle': 'Get exclusive analysis of the Argentine market',
    'footer.newsletter.placeholder': 'Your email',
    'footer.newsletter.button': 'Subscribe',
    'footer.newsletter.success': 'Subscription successful!',
    'footer.newsletter.error': 'Subscription error. Try again.',
    'footer.copyright': '© 2025 Antifragile Advisors. All rights reserved.',

    // CTA Section
    'cta.badge': 'Start today',
    'cta.title': 'Ready for your first investment?',
    'cta.subtitle': 'Schedule a free 15-minute consultation to evaluate your investor profile and the best available opportunities.',
    'cta.button': 'Schedule your free consultation',
    'cta.no-commitment': 'No commitment',

    // Contact Page
    'contact.badge': 'Start conversation',
    'contact.title': 'Contact',
    'contact.subtitle': 'Schedule your initial strategic consultation at no cost. We will discuss your objectives and explore the most relevant opportunities for your investor profile.',
    'contact.strategic-consultation.title': 'Strategic consultation',
    'contact.strategic-consultation.description': '30-minute initial session to evaluate objectives and opportunities. Calendar available soon.',
    'contact.direct-contact.title': 'Direct contact',
    'contact.direct-contact.description': 'For specific queries or additional information. Click here to contact via WhatsApp.',
    'contact.form.title': 'Contact form',
    'contact.form.subtitle': 'Send us your query and we will respond shortly',
    'contact.form.name': 'Full name',
    'contact.form.name-placeholder': 'Your full name',
    'contact.form.email': 'Email',
    'contact.form.email-placeholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.message-placeholder': 'Tell us about your query or interest in real estate investments...',
    'contact.form.submit': 'Send message',
    'contact.whatsapp-message': 'Hello, I am interested in learning more about investment opportunities in Buenos Aires.',
    'contact.back-home': 'Back to home',

    // Blog Articles
    'articles.microcentro.title': 'Why Buenos Aires Downtown is the best real estate opportunity (2025)',
    'articles.microcentro.excerpt': 'Complete analysis of the Argentine cycle, comparisons with Madrid and Barcelona, and how to invest in offices to recycle with 8-10% yields.',
    'articles.microcentro.content': 'The Buenos Aires real estate market is experiencing one of its most interesting moments of the last decade. While the country goes through a new phase of economic stabilization under the Milei administration, the Buenos Aires Downtown emerges as the most attractive investment opportunity for 2025.',
    'articles.bitcoin.title': 'Buy a home in Buenos Aires with Bitcoin without selling it',
    'articles.bitcoin.excerpt': 'How to leverage your BTC at 5% in DeFi, buy meters at USD 1,000/m² and preserve the upside potential of cryptocurrency.',
    'articles.bitcoin.content': 'The intersection of cryptocurrency and real estate in Argentina opens unique opportunities for Bitcoin holders looking to diversify their portfolio without liquidating their digital assets.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};