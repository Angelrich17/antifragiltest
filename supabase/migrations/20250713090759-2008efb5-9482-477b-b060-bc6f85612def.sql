-- Add slug column to blog_articles table
ALTER TABLE public.blog_articles 
ADD COLUMN slug TEXT UNIQUE;

-- Create index for better performance on slug queries
CREATE INDEX idx_blog_articles_slug ON public.blog_articles(slug);

-- Update existing articles with appropriate slugs
UPDATE public.blog_articles 
SET slug = CASE 
  WHEN title ILIKE '%comprar vivienda%' THEN 'comprar-vivienda-buenos-aires-bitcoin'
  WHEN title ILIKE '%invertir%' THEN 'invertir-propiedades-argentina-bitcoin'
  WHEN title ILIKE '%documentos%' THEN 'documentos-necesarios-compra-propiedad'
  ELSE LOWER(REPLACE(REPLACE(REPLACE(title, ' ', '-'), 'á', 'a'), 'é', 'e'))
END
WHERE slug IS NULL;