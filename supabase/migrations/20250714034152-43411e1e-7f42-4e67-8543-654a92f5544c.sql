-- Add translation fields to blog_articles table
ALTER TABLE public.blog_articles 
ADD COLUMN title_en TEXT,
ADD COLUMN excerpt_en TEXT,
ADD COLUMN content_en TEXT;

-- Add index for better performance when filtering by language
CREATE INDEX idx_blog_articles_published_lang ON public.blog_articles(published, title, title_en);

-- Update existing articles with English translations
UPDATE public.blog_articles 
SET 
  title_en = CASE 
    WHEN slug = 'microcentro-porteno-mejor-oportunidad-inmobiliaria-2025' THEN 'Why Buenos Aires Microcentro is the Best Real Estate Opportunity (2025)'
    WHEN slug = 'comprar-vivienda-buenos-aires-bitcoin' THEN 'Buying a Home in Buenos Aires with Bitcoin Without Selling It'
    WHEN slug = 'momento-perfecto-invertir-buenos-aires' THEN 'The Perfect Time to Invest in Buenos Aires'
    WHEN slug = 'guia-completa-inversion-inmobiliaria-argentina' THEN 'Complete Guide: How Real Estate Investment Works in Argentina'
    WHEN slug = 'barrios-emergentes-mejores-oportunidades' THEN 'Emerging Neighborhoods: Where to Find the Best Opportunities'
    ELSE title
  END,
  excerpt_en = CASE 
    WHEN slug = 'microcentro-porteno-mejor-oportunidad-inmobiliaria-2025' THEN 'Complete analysis of the Argentine cycle, comparisons with Madrid and Barcelona, and how to invest in offices to be recycled with yields of 8-10%.'
    WHEN slug = 'comprar-vivienda-buenos-aires-bitcoin' THEN 'How to leverage your BTC at 5% in DeFi, buy square meters at USD 1,000/m² and preserve the upside potential of cryptocurrency.'
    WHEN slug = 'momento-perfecto-invertir-buenos-aires' THEN 'Analysis of the current macroeconomic context and why now is a historic opportunity to invest in Buenos Aires real estate.'
    WHEN slug = 'guia-completa-inversion-inmobiliaria-argentina' THEN 'Everything you need to know about the buying process, legal documentation and tax aspects for foreign investors.'
    WHEN slug = 'barrios-emergentes-mejores-oportunidades' THEN 'Detailed analysis of neighborhoods with the highest revaluation potential in Buenos Aires for the next 5 years.'
    ELSE excerpt
  END,
  content_en = CASE 
    WHEN slug = 'microcentro-porteno-mejor-oportunidad-inmobiliaria-2025' THEN '<h2>The Historic Opportunity</h2><p>The Buenos Aires Microcentro presents an unprecedented opportunity for savvy real estate investors. After years of economic uncertainty, market fundamentals are aligning to create exceptional value propositions.</p><h2>Market Analysis</h2><p>Current office prices in the Microcentro are trading at significant discounts to historical valuations, with yields reaching 8-10% for renovated properties. This compares favorably to Madrid (4-5%) and Barcelona (3-4%), while offering similar or superior infrastructure and cultural amenities.</p><h2>The Argentine Cycle</h2><p>Argentina''s economic cycles are predictable and profitable for those who understand the timing. We are currently at the bottom of the cycle, presenting maximum opportunity for capital appreciation alongside strong rental yields.</p><h2>Investment Strategy</h2><p>Focus on office buildings requiring renovation in prime Microcentro locations. These properties offer the highest yield potential while positioning for significant capital appreciation as the market recovers.</p>'
    WHEN slug = 'comprar-vivienda-buenos-aires-bitcoin' THEN '<h2>The DeFi Leverage Strategy</h2><p>Bitcoin holders can now purchase Buenos Aires real estate without selling their cryptocurrency, preserving upside exposure while gaining property ownership.</p><h2>How It Works</h2><p>1. Collateralize Bitcoin at 5% annual rates through established DeFi protocols<br>2. Convert proceeds to USD for property purchase<br>3. Maintain Bitcoin exposure while building real estate portfolio</p><h2>Market Opportunity</h2><p>Buenos Aires offers world-class properties at USD 1,000/m², significantly below comparable global cities. This creates a unique arbitrage opportunity for crypto-wealthy investors.</p><h2>Risk Management</h2><p>Proper loan-to-value ratios ensure Bitcoin positions remain secure even during market volatility, while rental income can service debt obligations.</p>'
    ELSE content
  END
WHERE slug IN (
  'microcentro-porteno-mejor-oportunidad-inmobiliaria-2025',
  'comprar-vivienda-buenos-aires-bitcoin',
  'momento-perfecto-invertir-buenos-aires',
  'guia-completa-inversion-inmobiliaria-argentina',
  'barrios-emergentes-mejores-oportunidades'
);