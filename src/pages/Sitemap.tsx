import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    // Set minimal styling for XML display
    if (typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        body { margin: 0; padding: 0; font-family: monospace; }
        pre { white-space: pre-wrap; margin: 0; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- Home Pages -->
  <url>
    <loc>https://antifragileadvisors.com/es</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://antifragileadvisors.com/en"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://antifragileadvisors.com/es"/>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/en</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://antifragileadvisors.com/en"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://antifragileadvisors.com/es"/>
  </url>

  <!-- Spanish Pages -->
  <url>
    <loc>https://antifragileadvisors.com/es/servicios</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/es/proceso</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/es/por-que-argentina</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/es/tarifas</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/es/casos-reales</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/es/recursos</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/es/blog</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/es/nosotros</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/es/contacto</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- English Pages -->
  <url>
    <loc>https://antifragileadvisors.com/en/servicios</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/en/proceso</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/en/por-que-argentina</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/en/tarifas</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/en/casos-reales</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/en/recursos</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/en/blog</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/en/nosotros</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://antifragileadvisors.com/en/contacto</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- Blog Articles - Spanish -->
  <url>
    <loc>https://antifragileadvisors.com/es/blog/microcentro-porteno-mejor-oportunidad-inmobiliaria-2025</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://antifragileadvisors.com/es/blog/comprar-vivienda-buenos-aires-bitcoin</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog Articles - English -->
  <url>
    <loc>https://antifragileadvisors.com/en/blog/microcentro-porteno-mejor-oportunidad-inmobiliaria-2025</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://antifragileadvisors.com/en/blog/comprar-vivienda-buenos-aires-bitcoin</loc>
    <lastmod>2025-07-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>`;

  return (
    <pre style={{ 
      margin: 0, 
      padding: 0, 
      whiteSpace: 'pre-wrap',
      fontFamily: 'monospace',
      fontSize: '12px',
      lineHeight: '1.2'
    }}>
      {sitemapXML}
    </pre>
  );
};

export default Sitemap;