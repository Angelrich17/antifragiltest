import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOLanguageLinksProps {
  baseUrl?: string;
}

const SEOLanguageLinks = ({ baseUrl = 'https://antifragileadvisors.com' }: SEOLanguageLinksProps) => {
  const location = useLocation();

  useEffect(() => {
    // Remove existing hreflang links
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingLinks.forEach(link => link.remove());

    // Get current path without language prefix
    const currentPath = location.pathname.replace(/^\/(es|en)/, '') || '/';
    
    // Create hreflang links for both languages
    const languages = [
      { code: 'es', path: `/es${currentPath}` },
      { code: 'en', path: `/en${currentPath}` }
    ];

    languages.forEach(({ code, path }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = code;
      link.href = `${baseUrl}${path}`;
      document.head.appendChild(link);
    });

    // Add x-default for root domain
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${baseUrl}/es${currentPath}`; // Default to Spanish
    document.head.appendChild(defaultLink);

    // Cleanup function
    return () => {
      const links = document.querySelectorAll('link[rel="alternate"][hreflang]');
      links.forEach(link => link.remove());
    };
  }, [location.pathname, baseUrl]);

  return null; // This component doesn't render anything visible
};

export default SEOLanguageLinks;