import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOLanguageLinksProps {
  baseUrl?: string;
}

const SEOLanguageLinks = ({ baseUrl = 'https://antifragileadvisors.com' }: SEOLanguageLinksProps) => {
  const location = useLocation();

  useEffect(() => {
    // Remove existing hreflang and canonical links
    const existingHreflangLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    const existingCanonicalLinks = document.querySelectorAll('link[rel="canonical"]');
    existingHreflangLinks.forEach(link => link.remove());
    existingCanonicalLinks.forEach(link => link.remove());

    // Get current language and path
    const currentLang = location.pathname.match(/^\/(es|en)/)?.[1] || 'es';
    const currentPath = location.pathname.replace(/^\/(es|en)/, '') || '/';
    
    // Create canonical link for current language version
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = `${baseUrl}/${currentLang}${currentPath}`;
    document.head.appendChild(canonicalLink);
    
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

    console.log(`SEO tags added - Canonical: ${baseUrl}/${currentLang}${currentPath}, Hreflang: es/en`);

    // Cleanup function
    return () => {
      const links = document.querySelectorAll('link[rel="alternate"][hreflang], link[rel="canonical"]');
      links.forEach(link => link.remove());
    };
  }, [location.pathname, baseUrl]);

  return null; // This component doesn't render anything visible
};

export default SEOLanguageLinks;