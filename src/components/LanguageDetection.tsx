import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageDetection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only run on the root path to avoid infinite redirects
    if (location.pathname === '/') {
      const userLang = navigator.language || (navigator as any).userLanguage;
      const hasVisited = localStorage.getItem('language-detected');
      
      // Only redirect if user hasn't manually chosen a language before
      if (!hasVisited) {
        if (userLang.startsWith('en')) {
          localStorage.setItem('language-detected', 'true');
          navigate('/en');
        }
        // For Spanish or other languages, stay on root (/)
        localStorage.setItem('language-detected', 'true');
      }
    }
  }, [navigate, location.pathname]);

  return null;
};

export default LanguageDetection;