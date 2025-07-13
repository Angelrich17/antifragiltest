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

const Blog = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Error",
        description: "Por favor ingresa un email válido",
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
        title: "¡Suscripción exitosa!",
        description: "Te has suscrito correctamente a nuestro newsletter",
      });
      setEmail("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Hubo un error al suscribirse. Inténtalo nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const featuredArticles = [
    {
      id: 1,
      title: "El momento perfecto para invertir en Buenos Aires",
      excerpt: "Análisis del contexto macroeconómico actual y por qué ahora es una oportunidad histórica para invertir en real estate porteño.",
      author: "Equipo Antifragile",
      date: "15 Enero 2025",
      readTime: "8 min",
      category: "Análisis",
      image: "/lovable-uploads/b499d954-153b-4ff6-8f76-fb7776c58a03.png",
      featured: true
    },
    {
      id: 2,
      title: "Guía completa: Cómo funciona la inversión inmobiliaria en Argentina",
      excerpt: "Todo lo que necesitas saber sobre el proceso de compra, documentación legal y aspectos fiscales para inversores extranjeros.",
      author: "María González",
      date: "12 Enero 2025",
      readTime: "12 min",
      category: "Guías",
      image: "/lovable-uploads/e355cc0f-59a3-456f-8360-e64ba6394c00.png",
      featured: false
    },
    {
      id: 3,
      title: "Barrios emergentes: Dónde encontrar las mejores oportunidades",
      excerpt: "Análisis detallado de los barrios con mayor potencial de revalorización en Buenos Aires para los próximos 5 años.",
      author: "Carlos Mendez",
      date: "8 Enero 2025",
      readTime: "6 min",
      category: "Mercados",
      image: "/lovable-uploads/21e4c240-bc54-4cdd-97b6-0f61ba0c6be5.png",
      featured: false
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: "Vaca Muerta: El impacto en el sector inmobiliario",
      excerpt: "Cómo el desarrollo del yacimiento de Vaca Muerta está transformando el mercado inmobiliario argentino.",
      author: "Lucía Fernández",
      date: "5 Enero 2025",
      readTime: "10 min",
      category: "Análisis"
    },
    {
      id: 5,
      title: "Rentabilidades récord en alquileres temporarios",
      excerpt: "Estadísticas actualizadas sobre el rendimiento de propiedades destinadas a Airbnb en Buenos Aires.",
      author: "Diego Ruiz",
      date: "2 Enero 2025",
      readTime: "5 min",
      category: "Rentabilidad"
    },
    {
      id: 6,
      title: "Aspectos legales: Todo sobre la compra para extranjeros",
      excerpt: "Marco legal actualizado para inversores internacionales que quieren comprar propiedades en Argentina.",
      author: "Ana Martínez",
      date: "28 Diciembre 2024",
      readTime: "7 min",
      category: "Legal"
    }
  ];

  const categories = ["Todos", "Análisis", "Guías", "Mercados", "Rentabilidad", "Legal"];

  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 leading-tight">
              Blog de <span className="font-medium bg-gradient-to-r from-blue-700 via-blue-600 to-amber-600 bg-clip-text text-transparent">inversiones</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Insights, análisis y guías prácticas sobre inversión inmobiliaria en Argentina. 
              Mantente actualizado con las últimas tendencias del mercado.
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
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Artículos recientes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
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
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles List */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Más artículos</h2>
          
          <div className="space-y-6">
            {recentArticles.map((article) => (
              <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="w-fit">{article.category}</Badge>
                        <div className="flex items-center space-x-3 text-xs text-slate-500">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime} lectura</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">
              Suscríbete a nuestro newsletter
            </h2>
            <p className="text-xl text-slate-600">
              Recibe los mejores insights sobre inversión inmobiliaria directamente en tu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button 
                onClick={handleSubscribe}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8"
              >
                {isLoading ? "Suscribiendo..." : "Suscribirse"}
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