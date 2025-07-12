-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy for subscribers (public can insert, only authenticated users can read all)
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscribers 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can view all subscribers" 
ON public.newsletter_subscribers 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create blog_articles table
CREATE TABLE public.blog_articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  author TEXT,
  category TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;

-- Create policies for blog articles
CREATE POLICY "Anyone can view published articles" 
ON public.blog_articles 
FOR SELECT 
USING (published = true);

CREATE POLICY "Authenticated users can manage articles" 
ON public.blog_articles 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_articles_updated_at
BEFORE UPDATE ON public.blog_articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to notify subscribers when an article is published
CREATE OR REPLACE FUNCTION public.notify_subscribers_on_publish()
RETURNS TRIGGER AS $$
BEGIN
  -- Only trigger when an article is published (published changes from false to true)
  IF OLD.published = false AND NEW.published = true THEN
    -- This will be handled by the edge function
    PERFORM pg_notify('article_published', json_build_object(
      'article_id', NEW.id,
      'title', NEW.title,
      'excerpt', NEW.excerpt
    )::text);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for article publication
CREATE TRIGGER on_article_published
AFTER UPDATE ON public.blog_articles
FOR EACH ROW
EXECUTE FUNCTION public.notify_subscribers_on_publish();