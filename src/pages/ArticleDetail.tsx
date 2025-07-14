import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import bitcoinBuenosAires from "@/assets/bitcoin-buenos-aires.jpg";
import casaRosada from "@/assets/casa-rosada-buenos-aires.jpg";

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { t, language } = useLanguage();

  // Datos de artículos - ahora todo viene de las traducciones
  const articles = {
    "microcentro-porteno-mejor-oportunidad-inmobiliaria-2025": {
      id: 5,
      title: t('articles.microcentro.title'),
      excerpt: t('articles.microcentro.excerpt'),
      date: language === 'es' ? "13 Julio 2025" : "July 13, 2025",
      readTime: "12 min",
      category: language === 'es' ? "Análisis" : "Analysis",
      image: "/lovable-uploads/4e8673e3-ad6b-447f-8b19-3a5983846972.png",
      content: t('articles.microcentro.content')
    },
    "comprar-vivienda-buenos-aires-bitcoin": {
      id: 1,
      title: t('articles.bitcoin.title'),
      excerpt: t('articles.bitcoin.excerpt'),
      date: language === 'es' ? "10 Julio 2025" : "July 10, 2025",
      readTime: "8 min",
      category: language === 'es' ? "Guías" : "Guides",
      image: bitcoinBuenosAires,
      content: t('articles.bitcoin.content')
    }
  };

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">{language === 'es' ? 'Artículo no encontrado' : 'Article not found'}</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('blog.back-to-blog')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className={`pt-32 pb-16 ${isMobile ? 'px-0' : 'px-4 sm:px-6'}`}>
        <div className={`${isMobile ? 'w-full' : 'container mx-auto max-w-4xl'}`}>
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className={`${isMobile ? 'mx-4 mb-6' : 'mb-8'} hover:bg-white/80`}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('blog.back-to-blog')}
          </Button>

          {/* Article Header */}
          <div className={`${isMobile ? 'px-4 mb-6' : 'mb-8'}`}>
            <Badge variant="default" className="mb-4">{article.category}</Badge>
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl'} font-bold text-slate-800 leading-tight mb-4`}>
              {article.title}
            </h1>
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-slate-600 mb-6`}>
              {article.excerpt}
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-slate-500 mb-8">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} {language === 'es' ? 'lectura' : 'read'}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className={`aspect-[16/9] overflow-hidden ${isMobile ? 'mb-6' : 'rounded-xl mb-8'}`}>
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className={`bg-white ${isMobile ? 'shadow-none p-4' : 'rounded-xl shadow-lg p-8 sm:p-12'}`}>
            <div 
              className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ArticleDetail;