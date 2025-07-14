import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const currentPath = location.pathname;
    
    if (language === 'es') {
      // Switch to English
      const newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
      navigate(newPath);
    } else {
      // Switch to Spanish
      const newPath = currentPath.replace('/en', '') || '/';
      navigate(newPath);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'es' ? 'EN' : 'ES'}
    </Button>
  );
};

export default LanguageSwitcher;