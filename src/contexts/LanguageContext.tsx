import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.whyArgentina': '¿Por qué Argentina?',
    'nav.services': 'Servicios',
    'nav.process': 'Proceso',
    'nav.realCases': 'Casos Reales',
    'nav.resources': 'Recursos',
    'nav.rates': 'Tarifas',
    'nav.aboutUs': 'Nosotros',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',
    
    // Common
    'common.readMore': 'Leer más',
    'common.contactUs': 'Contáctanos',
    'common.getStarted': 'Comenzar',
    'common.learnMore': 'Aprender más',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.whyArgentina': 'Why Argentina?',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.realCases': 'Real Cases',
    'nav.resources': 'Resources',
    'nav.rates': 'Rates',
    'nav.aboutUs': 'About Us',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    
    // Common
    'common.readMore': 'Read more',
    'common.contactUs': 'Contact us',
    'common.getStarted': 'Get started',
    'common.learnMore': 'Learn more',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('es');

  useEffect(() => {
    // Check if we're on an English route
    const path = window.location.pathname;
    if (path.startsWith('/en')) {
      setLanguage('en');
    } else {
      setLanguage('es');
    }
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
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