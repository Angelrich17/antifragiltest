
import { Play, Shield, TrendingUp, Users, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-amber-900/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Tu llave a la 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600"> renta</span> en Buenos Aires
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Inversión inmobiliaria inteligente en el mercado más prometedor de Latinoamérica. 
                  Acompañamiento completo desde búsqueda hasta gestión de alquiler.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6">
                  Reserva tu llamada
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                  <Play className="mr-2 h-5 w-5" />
                  Ver video (90s)
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Consulta gratuita 15 min
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Sin comisiones ocultas
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" variant="secondary" className="bg-white/90 hover:bg-white text-slate-800">
                    <Play className="mr-2 h-6 w-6 fill-current" />
                    Reproducir teaser
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-3 rounded-lg backdrop-blur-sm">
                  <p className="text-sm">💡 Descubre por qué Buenos Aires es la oportunidad de inversión del momento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              ¿Por qué invertir en Buenos Aires?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tres razones fundamentales que hacen de esta ciudad el mercado más atractivo para inversionistas internacionales
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">ROI Excepcional</h3>
                <p className="text-slate-600 leading-relaxed">
                  Rendimientos del 8-12% anual en USD. Precios 60% por debajo de picos históricos.
                </p>
                <div className="pt-2">
                  <span className="text-3xl font-bold text-blue-600">+180%</span>
                  <p className="text-sm text-slate-500">potencial de apreciación</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Proceso Seguro</h3>
                <p className="text-slate-600 leading-relaxed">
                  Escribano certificado, due diligence completo y poder notarial para compra remota.
                </p>
                <div className="pt-2">
                  <span className="text-3xl font-bold text-amber-600">100%</span>
                  <p className="text-sm text-slate-500">operaciones exitosas</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Servicio Integral</h3>
                <p className="text-slate-600 leading-relaxed">
                  Desde búsqueda hasta gestión de alquiler. Un solo punto de contacto para todo.
                </p>
                <div className="pt-2">
                  <span className="text-3xl font-bold text-green-600">360°</span>
                  <p className="text-sm text-slate-500">acompañamiento completo</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Cómo funciona
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un proceso simple y transparente que te lleva de la idea a generar renta en meses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2"></div>
            
            <div className="relative text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto relative z-10">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-800">Discovery Call</h3>
                <p className="text-slate-600 leading-relaxed">
                  Llamada gratuita de 15 min para entender tus objetivos y presupuesto. Definimos estrategia inicial.
                </p>
              </div>
            </div>
            
            <div className="relative text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto relative z-10">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-800">Búsqueda & Due Diligence</h3>
                <p className="text-slate-600 leading-relaxed">
                  Seleccionamos propiedades que cumplan tus criterios. Análisis completo de documentación y mercado.
                </p>
              </div>
            </div>
            
            <div className="relative text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto relative z-10">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-800">Cierre & Gestión</h3>
                <p className="text-slate-600 leading-relaxed">
                  Cierre notarial remoto y puesta a renta. Gestión completa del alquiler desde el primer día.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/proceso">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Ver proceso completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Inversionistas de todo el mundo han confiado en nosotros para sus inversiones en Buenos Aires
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed">
                  "En 8 meses recuperé mi inversión inicial. El proceso fue completamente transparente y profesional."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Miguel Ramírez</p>
                    <p className="text-sm text-slate-500">Inversionista, México</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed">
                  "Compré sin pisar Buenos Aires. Todo se manejó remotamente con total seguridad jurídica."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Ana Silva</p>
                    <p className="text-sm text-slate-500">Empresaria, España</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 space-y-4">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed">
                  "ROI del 11% anual en USD. Mejor inversión que he hecho en los últimos 5 años."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">JC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">James Cooper</p>
                    <p className="text-sm text-slate-500">Inversionista, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/casos-reales">
              <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                Ver más casos reales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
