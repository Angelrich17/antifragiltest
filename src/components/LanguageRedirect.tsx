import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const detectBrowserLanguage = (): 'es' | 'en' => {
    // Check if language was previously selected and stored
    const storedLang = localStorage.getItem('language');
    if (storedLang === 'es' || storedLang === 'en') {
      return storedLang;
    }

    // Detect browser language
    const browserLang = navigator.language || navigator.languages?.[0] || '';
    
    if (browserLang.startsWith('es')) {
      return 'es';
    } else if (browserLang.startsWith('en')) {
      return 'en';
    }
    
    // Default fallback
    return 'es';
  };

  useEffect(() => {
    const path = location.pathname;
    
    // Skip redirection for static files (sitemap.xml, robots.txt, etc.)
    if (path.match(/\.(xml|txt|json|ico|png|jpg|jpeg|gif|svg)$/) || path === '/sitemap.xml' || path === '/robots.txt') {
      return;
    }
    
    // If path doesn't start with /es or /en, redirect with language detection
    if (!path.match(/^\/(es|en)($|\/)/)) {
      const detectedLang = detectBrowserLanguage();
      const newPath = path === '/' ? `/${detectedLang}` : `/${detectedLang}${path}`;
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};

export default LanguageRedirect;