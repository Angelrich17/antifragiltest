import { useParams } from 'react-router-dom';

export const useLocalizedPath = () => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang === 'es' || lang === 'en' ? lang : 'es';

  const getLocalizedPath = (path: string) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // If path is empty or just '/', return language root
    if (!cleanPath || cleanPath === '/') {
      return `/${currentLang}`;
    }
    
    return `/${currentLang}/${cleanPath}`;
  };

  return { getLocalizedPath, currentLang };
};