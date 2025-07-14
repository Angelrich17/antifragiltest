import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  image = "https://antifragileadvisors.com/imagen-compartir.jpg",
  url
}) => {
  const { language } = useLanguage();
  const baseUrl = 'https://antifragileadvisors.com';
  
  const defaultTitles = {
    es: 'Inversión inmobiliaria en Buenos Aires | Antifragile Advisors',
    en: 'Real Estate Investment in Buenos Aires | Antifragile Advisors'
  };
  
  const defaultDescriptions = {
    es: 'Asesoría experta en inversión inmobiliaria en Buenos Aires. Te ayudamos a comprar, reformar y gestionar tu propiedad para obtener la máxima rentabilidad sin complicaciones.',
    en: 'Expert real estate investment advisory in Buenos Aires. We help you buy, renovate and manage your property to obtain maximum profitability without complications.'
  };

  const finalTitle = title || defaultTitles[language as keyof typeof defaultTitles];
  const finalDescription = description || defaultDescriptions[language as keyof typeof defaultDescriptions];
  const finalUrl = url || (language === 'en' ? `${baseUrl}/en` : baseUrl);

  return (
    <Helmet>
      <html lang={language} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      
      {/* Hreflang tags for SEO */}
      <link rel="alternate" hrefLang="es" href={baseUrl} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
      <link rel="alternate" hrefLang="es-419" href={baseUrl} />
      <link rel="alternate" hrefLang="en-us" href={`${baseUrl}/en`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;