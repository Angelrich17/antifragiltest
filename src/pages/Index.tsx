import { Play, Shield, TrendingUp, Users, ArrowRight, Star, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";


const Index = () => {
  const openCalendly = () => {
    // Simple direct approach - open Calendly in new tab
    window.open('https://calendly.com/anruizzzi/30min', '_blank', 'width=800,height=600');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-8 sm:px-8 lg:px-4 overflow-hidden">
        <div className="absolute inset-0">
          {/* Background image with transparency */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: "url('/lovable-uploads/21e4c240-bc54-4cdd-97b6-0f61ba0c6be5.png')"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/5 to-amber-900/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-amber-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 text-center lg:text-left px-2 sm:px-0">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6 justify-center lg:justify-start">
                  <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent flex-1"></div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-neutral-200">
                    <Sparkles className="h-4 w-4 text-amber-600" />
                    <span className="text-sm font-medium text-neutral-700">Inversión Antifragile</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent flex-1"></div>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-neutral-900 leading-tight tracking-tight">
                  Tu acceso al
                  <span className="block font-medium bg-gradient-to-r from-blue-700 via-blue-600 to-amber-600 bg-clip-text text-transparent">
                    futuro inmobiliario
                  </span>
                  de Buenos Aires
                </h1>
                
                <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                  Navegamos la complejidad del mercado argentino para transformar la incertidumbre 
                  en oportunidades de renta excepcionales. Acompañamiento integral desde la estrategia hasta la ejecución.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={openCalendly} size="lg" className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Agenda tu consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-xl border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  Ver presentación
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-neutral-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Consulta inicial sin costo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Transparencia total</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Operación remota segura</span>
                </div>
              </div>
            </div>
            
            <div className="relative lg:ml-8 mx-auto lg:mx-0 max-w-lg lg:max-w-none px-2 sm:px-0">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 hover:bg-white text-neutral-900 rounded-2xl px-8 py-4">
                    <Play className="mr-3 h-6 w-6 fill-current" />
                    <span className="font-medium">Reproducir teaser</span>
                  </Button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10">
                    <p className="text-sm font-light">Descubre cómo convertimos la volatilidad argentina en rentabilidad predecible</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - hidden on mobile to avoid overlap */}
              <div className="hidden lg:block absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-neutral-200">
                <div className="text-2xl font-bold text-emerald-600">12%</div>
                <div className="text-xs text-neutral-500">ROI promedio</div>
              </div>
              
              <div className="hidden lg:block absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-neutral-200">
                <div className="text-2xl font-bold text-blue-600">180%</div>
                <div className="text-xs text-neutral-500">Potencial alcista</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-4 bg-white border-y border-neutral-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-50 rounded-full border border-neutral-200 mb-8">
              <span className="text-sm font-medium text-neutral-600">Filosofía Antifragile</span>
            </div>
            <h2 className="text-5xl font-light text-neutral-900 mb-6 tracking-tight">
              Prosperamos en la
              <span className="font-medium text-amber-600"> incertidumbre</span>
            </h2>
            <p className="text-xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
              Mientras otros temen la volatilidad, nosotros la aprovechamos. Buenos Aires ofrece 
              oportunidades únicas para inversionistas que entienden cómo navegar la complejidad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-500 rounded-2xl">
              <CardContent className="p-10 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-neutral-900">Retornos Excepcionales</h3>
                <p className="text-neutral-600 leading-relaxed font-light">
                  ROI del 8-15% anual en USD. Precios 60% por debajo de máximos históricos 
                  crean oportunidades irrepetibles.
                </p>
                <div className="pt-4 border-t border-neutral-100">
                  <span className="text-4xl font-light text-blue-600">+200%</span>
                  <p className="text-sm text-neutral-500 font-light">potencial de apreciación</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-500 rounded-2xl">
              <CardContent className="p-10 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-neutral-900">Seguridad Jurídica</h3>
                <p className="text-neutral-600 leading-relaxed font-light">
                  Due diligence exhaustivo, escribano certificado y poder notarial 
                  para operaciones 100% remotas y seguras.
                </p>
                <div className="pt-4 border-t border-neutral-100">
                  <span className="text-4xl font-light text-amber-600">100%</span>
                  <p className="text-sm text-neutral-500 font-light">operaciones exitosas</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-500 rounded-2xl">
              <CardContent className="p-10 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-neutral-900">Servicio Boutique</h3>
                <p className="text-neutral-600 leading-relaxed font-light">
                  Desde estrategia hasta gestión de renta. Un equipo especializado 
                  dedicado exclusivamente a tu éxito.
                </p>
                <div className="pt-4 border-t border-neutral-100">
                  <span className="text-4xl font-light text-emerald-600">360°</span>
                  <p className="text-sm text-neutral-500 font-light">acompañamiento integral</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-4 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-neutral-200 mb-8">
              <span className="text-sm font-medium text-neutral-600">Metodología Probada</span>
            </div>
            <h2 className="text-5xl font-light text-neutral-900 mb-6 tracking-tight">
              De la estrategia a la
              <span className="font-medium text-blue-600"> rentabilidad</span>
            </h2>
            <p className="text-xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
              Un proceso refinado que transforma conceptos complejos en resultados tangibles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 transform -translate-y-1/2"></div>
            
            <div className="relative text-center space-y-8">
              <div className="w-24 h-24 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-lg">
                <span className="text-2xl font-light text-white">01</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-neutral-900">Consulta Estratégica</h3>
                <p className="text-neutral-600 leading-relaxed font-light">
                  Sesión inicial de 30 minutos para comprender tus objetivos, 
                  apetito de riesgo y definir la estrategia de inversión óptima.
                </p>
              </div>
            </div>
            
            <div className="relative text-center space-y-8">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-lg">
                <span className="text-2xl font-light text-white">02</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-neutral-900">Curación & Análisis</h3>
                <p className="text-neutral-600 leading-relaxed font-light">
                  Identificación de oportunidades premium. Due diligence completo 
                  de propiedades, documentación y potencial de rentabilidad.
                </p>
              </div>
            </div>
            
            <div className="relative text-center space-y-8">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-lg">
                <span className="text-2xl font-light text-white">03</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-neutral-900">Ejecución & Gestión</h3>
                <p className="text-neutral-600 leading-relaxed font-light">
                  Cierre notarial remoto, optimización del activo y gestión 
                  integral de renta desde el primer día.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link to="/proceso">
              <Button size="lg" variant="outline" className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 rounded-xl px-8 py-4 font-light">
                Explorar metodología completa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 sm:px-8 lg:px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-50 rounded-full border border-neutral-200 mb-8">
              <span className="text-sm font-medium text-neutral-600">Casos de Éxito</span>
            </div>
            <h2 className="text-5xl font-light text-neutral-900 mb-6 tracking-tight">
              Inversionistas que
              <span className="font-medium text-amber-600"> confiaron</span>
            </h2>
            <p className="text-xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
              Profesionales de todo el mundo han elegido nuestra expertise para sus inversiones en Buenos Aires
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-8 space-y-6">
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 italic leading-relaxed font-light text-lg">
                  "ROI del 14% en el primer año. El proceso fue impecablemente profesional 
                  y completamente transparente desde el inicio."
                </p>
                <div className="flex items-center space-x-4 pt-4 border-t border-neutral-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">MR</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Miguel Ramírez</p>
                    <p className="text-sm text-neutral-500 font-light">Executive, México</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-8 space-y-6">
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 italic leading-relaxed font-light text-lg">
                  "Operación 100% remota desde Madrid. Seguridad jurídica absoluta 
                  y acompañamiento en cada detalle del proceso."
                </p>
                <div className="flex items-center space-x-4 pt-4 border-t border-neutral-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">AS</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Ana Silva</p>
                    <p className="text-sm text-neutral-500 font-light">Empresaria, España</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 space-y-6">
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 italic leading-relaxed font-light text-lg">
                  "Mejor decisión de inversión en años. Combina rentabilidad 
                  excepcional con un servicio verdaderamente boutique."
                </p>
                <div className="flex items-center space-x-4 pt-4 border-t border-neutral-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">JC</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">James Cooper</p>
                    <p className="text-sm text-neutral-500 font-light">Investor, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <Link to="/casos-reales">
              <Button size="lg" variant="outline" className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 rounded-xl px-8 py-4 font-light">
                Ver más casos de éxito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
