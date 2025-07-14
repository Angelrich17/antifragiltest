import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import bitcoinBuenosAires from "@/assets/bitcoin-buenos-aires.jpg";

const Blog = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: t('blog.newsletter.error'),
        description: t('blog.newsletter.error.invalid'),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke('newsletter-subscribe', {
        body: { email }
      });

      if (error) {
        throw error;
      }

      toast({
        title: t('blog.newsletter.success'),
        description: t('blog.newsletter.success.description'),
      });
      setEmail("");
    } catch (error: any) {
      toast({
        title: t('blog.newsletter.error'),
        description: error.message || t('blog.newsletter.error.general'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const { language } = useLanguage();
  
  const featuredArticles = [
    {
      id: 5,
      slug: "microcentro-porteno-mejor-oportunidad-inmobiliaria-2025",
      title: language === 'es' ? "Por qué el Microcentro porteño es la mejor oportunidad inmobiliaria (2025)" : "Why Buenos Aires Microcentro is the Best Real Estate Opportunity (2025)",
      excerpt: language === 'es' ? "Análisis completo del ciclo argentino, comparativas con Madrid y Barcelona, y cómo invertir en oficinas a reciclar con yields del 8-10%." : "Complete analysis of the Argentine cycle, comparisons with Madrid and Barcelona, and how to invest in offices to be recycled with yields of 8-10%.",
      date: language === 'es' ? "13 Julio 2025" : "July 13, 2025",
      readTime: "12 min",
      category: language === 'es' ? "Análisis" : "Analysis",
      image: "/lovable-uploads/c3fd08a1-3820-4862-ba17-78694bcc2cab.png",
      featured: true
    },
    {
      id: 1,
      slug: "comprar-vivienda-buenos-aires-bitcoin",
      title: language === 'es' ? "Comprar una vivienda en Buenos Aires con Bitcoin sin venderlo" : "Buying a Home in Buenos Aires with Bitcoin Without Selling It",
      excerpt: language === 'es' ? "Cómo apalancar tu BTC al 5 % en DeFi, comprar metros a USD 1 000/m² y conservar el potencial alcista de la criptomoneda." : "How to leverage your BTC at 5% in DeFi, buy square meters at USD 1,000/m² and preserve the upside potential of cryptocurrency.",
      date: language === 'es' ? "10 Julio 2025" : "July 10, 2025",
      readTime: "8 min",
      category: language === 'es' ? "Guías" : "Guides",
      image: bitcoinBuenosAires,
      featured: false
    },
    {
      id: 2,
      slug: "momento-perfecto-invertir-buenos-aires",
      title: language === 'es' ? "El momento perfecto para invertir en Buenos Aires" : "The Perfect Time to Invest in Buenos Aires",
      excerpt: language === 'es' ? "Análisis del contexto macroeconómico actual y por qué ahora es una oportunidad histórica para invertir en real estate porteño." : "Analysis of the current macroeconomic context and why now is a historic opportunity to invest in Buenos Aires real estate.",
      date: language === 'es' ? "15 Enero 2025" : "January 15, 2025",
      readTime: "8 min",
      category: language === 'es' ? "Análisis" : "Analysis",
      image: "/lovable-uploads/b499d954-153b-4ff6-8f76-fb7776c58a03.png",
      featured: false
    },
    {
      id: 3,
      slug: "guia-completa-inversion-inmobiliaria-argentina",
      title: language === 'es' ? "Guía completa: Cómo funciona la inversión inmobiliaria en Argentina" : "Complete Guide: How Real Estate Investment Works in Argentina",
      excerpt: language === 'es' ? "Todo lo que necesitas saber sobre el proceso de compra, documentación legal y aspectos fiscales para inversores extranjeros." : "Everything you need to know about the buying process, legal documentation and tax aspects for foreign investors.",
      date: language === 'es' ? "12 Enero 2025" : "January 12, 2025",
      readTime: "12 min",
      category: language === 'es' ? "Guías" : "Guides",
      image: "/lovable-uploads/e355cc0f-59a3-456f-8360-e64ba6394c00.png",
      featured: false
    },
    {
      id: 4,
      slug: "barrios-emergentes-mejores-oportunidades",
      title: language === 'es' ? "Barrios emergentes: Dónde encontrar las mejores oportunidades" : "Emerging Neighborhoods: Where to Find the Best Opportunities",
      excerpt: language === 'es' ? "Análisis detallado de los barrios con mayor potencial de revalorización en Buenos Aires para los próximos 5 años." : "Detailed analysis of neighborhoods with the highest revaluation potential in Buenos Aires for the next 5 years.",
      date: language === 'es' ? "8 Enero 2025" : "January 8, 2025",
      readTime: "6 min",
      category: language === 'es' ? "Mercados" : "Markets",
      image: "/lovable-uploads/21e4c240-bc54-4cdd-97b6-0f61ba0c6be5.png",
      featured: false
    }
  ];

  const recentArticles = [
    {
      id: 4,
      slug: "vaca-muerta-impacto-sector-inmobiliario",
      title: language === 'es' ? "Vaca Muerta: El impacto en el sector inmobiliario" : "Vaca Muerta: Impact on the Real Estate Sector",
      excerpt: language === 'es' ? "Cómo el desarrollo del yacimiento de Vaca Muerta está transformando el mercado inmobiliario argentino." : "How the development of the Vaca Muerta field is transforming the Argentine real estate market.",
      author: language === 'es' ? "Lucía Fernández" : "Lucia Fernandez",
      date: language === 'es' ? "5 Enero 2025" : "January 5, 2025",
      readTime: "10 min",
      category: language === 'es' ? "Análisis" : "Analysis"
    },
    {
      id: 5,
      slug: "rentabilidades-record-alquileres-temporarios",
      title: language === 'es' ? "Rentabilidades récord en alquileres temporarios" : "Record Returns on Short-term Rentals",
      excerpt: language === 'es' ? "Estadísticas actualizadas sobre el rendimiento de propiedades destinadas a Airbnb en Buenos Aires." : "Updated statistics on the performance of Airbnb properties in Buenos Aires.",
      author: language === 'es' ? "Diego Ruiz" : "Diego Ruiz",
      date: language === 'es' ? "2 Enero 2025" : "January 2, 2025",
      readTime: "5 min",
      category: language === 'es' ? "Rentabilidad" : "Returns"
    },
    {
      id: 6,
      slug: "aspectos-legales-compra-extranjeros",
      title: language === 'es' ? "Aspectos legales: Todo sobre la compra para extranjeros" : "Legal Aspects: Everything About Purchasing for Foreigners",
      excerpt: language === 'es' ? "Marco legal actualizado para inversores internacionales que quieren comprar propiedades en Argentina." : "Updated legal framework for international investors wanting to buy properties in Argentina.",
      author: language === 'es' ? "Ana Martínez" : "Ana Martinez",
      date: language === 'es' ? "28 Diciembre 2024" : "December 28, 2024",
      readTime: "7 min",
      category: language === 'es' ? "Legal" : "Legal"
    }
  ];

  const categories = language === 'es' 
    ? ["Todos", "Análisis", "Guías", "Mercados", "Rentabilidad", "Legal"]
    : ["All", "Analysis", "Guides", "Markets", "Returns", "Legal"];

  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 leading-tight">
              {t('blog.title')} <span className="font-medium bg-gradient-to-r from-blue-700 via-blue-600 to-amber-600 bg-clip-text text-transparent"></span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>


      {/* Articles Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">{t('blog.featured-articles')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link key={article.id} to={`/blog/${article.slug}`}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-3">
                      <Badge variant="outline" className="w-fit">{article.category}</Badge>
                      <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="flex items-center space-x-3 text-xs text-slate-500">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles List */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">{t('blog.all-articles')}</h2>
          
          <div className="space-y-6">
            {recentArticles.map((article) => (
              <Link key={article.id} to={`/blog/${article.slug}`}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="w-fit">{article.category}</Badge>
                          <div className="flex items-center space-x-3 text-xs text-slate-500">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime} {t('blog.reading-time')}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="ml-6">
                        <Button variant="ghost" size="sm" className="group-hover:bg-blue-50 group-hover:text-blue-600">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">
              {t('blog.newsletter.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('blog.newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={t('blog.newsletter.placeholder')} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button 
                onClick={handleSubscribe}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8"
              >
                {isLoading ? t('common.loading') : t('blog.newsletter.subscribe')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;