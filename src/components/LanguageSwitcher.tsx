import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const switchToSpanish = () => {
    const currentPath = location.pathname;
    
    if (currentPath.startsWith('/en')) {
      // Remove /en prefix and redirect to /es
      const newPath = `/es${currentPath.replace('/en', '')}`;
      navigate(newPath);
    } else if (!currentPath.startsWith('/es')) {
      // Add /es prefix
      navigate(`/es${currentPath}`);
    }
  };

  const switchToEnglish = () => {
    const currentPath = location.pathname;
    
    if (currentPath.startsWith('/es')) {
      // Replace /es with /en
      const newPath = currentPath.replace('/es', '/en');
      navigate(newPath);
    } else {
      // Add /en prefix
      navigate(`/en${currentPath}`);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={switchToSpanish}
        className={`p-2 ${language === 'es' ? 'bg-neutral-100' : ''}`}
        title="Español"
      >
        🇪🇸
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={switchToEnglish}
        className={`p-2 ${language === 'en' ? 'bg-neutral-100' : ''}`}
        title="English"
      >
        🇬🇧
      </Button>
    </div>
  );
};

export default LanguageSwitcher;