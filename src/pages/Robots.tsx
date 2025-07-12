import { useEffect } from 'react';

const Robots = () => {
  useEffect(() => {
    const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://antifragileadvisors.com/sitemap.xml

# Optimizaciones SEO
Crawl-delay: 1

# Permitir indexación de todas las páginas principales
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /`;

    // Replace the entire page content with robots.txt content
    document.body.innerHTML = `<pre style="white-space: pre-wrap; font-family: monospace; margin: 0; padding: 0;">${robotsTxt}</pre>`;
    
  }, []);

  // Return a simple pre-formatted display
  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', padding: '20px' }}>
      Loading robots.txt...
    </div>
  );
};

export default Robots;