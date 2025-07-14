import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    
    // If path doesn't start with /es or /en, redirect to /es version
    if (!path.match(/^\/(es|en)($|\/)/)) {
      const defaultLang = 'es';
      const newPath = path === '/' ? `/${defaultLang}` : `/${defaultLang}${path}`;
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};

export default LanguageRedirect;