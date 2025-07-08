
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Tarifas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <Header />
      
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-neutral-200 mb-8">
              <span className="text-sm font-medium text-neutral-600">Estructura de Inversión</span>
            </div>
            <h1 className="text-6xl font-light text-neutral-900 mb-6 tracking-tight">
              <span className="font-medium bg-gradient-to-r from-amber-600 to-neutral-900 bg-clip-text text-transparent">Tarifas</span> & Servicios
            </h1>
            <p className="text-xl text-neutral-600 font-light max-w-4xl mx-auto leading-relaxed">
              Estructura de fees transparente y paquetes diseñados para cada perfil de inversionista. 
              Alineación total de intereses con resultados medibles.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Personal Shopper Inmobiliario */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">Personal Shopper Inmobiliario</h3>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Nos especializamos en encontrar la propiedad ideal para ti, basada en tus gustos, objetivos de inversión y presupuesto.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Análisis de zonas con mayor potencial de revalorización</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Grabación de propiedades e informe de viabilidad</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Negociación del mejor precio con datos actualizados</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Gestión CDI/CUIL y tramitación de poder notarial</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Asistencia legal, registral y documental integral</span>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Comisión:</span>
                    <span className="text-3xl font-bold text-amber-600">2%</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">sobre el valor de compra</p>
                </div>
              </CardContent>
            </Card>

            {/* Ingreso de divisas vía crypto */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">💱</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">Ingreso de Divisas vía Crypto</h3>
                </div>
                
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  Ofrecemos un servicio ágil y seguro para traer tus dólares al país mediante criptomonedas, con tarifas ultra competitivas.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Proceso ágil y seguro</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Tarifas ultra competitivas</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Depende de condiciones de mercado</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Según volumen operado</span>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Tarifa desde:</span>
                    <span className="text-3xl font-bold text-blue-600">0%</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">según condiciones de mercado</p>
                </div>
              </CardContent>
            </Card>

            {/* Gestión Airbnb */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🏨</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">Gestión Airbnb</h3>
                </div>
                
                <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
                  ⭐ Superanfitrión
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  ¿Compraste para alquilar? Nos ocupamos de todo el proceso de gestión de tu propiedad.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Publicación profesional del anuncio</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Gestión de reservas y atención huéspedes</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Comunicación 24/7</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Optimización de ingresos</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">Check-in, check-out y coordinación limpieza</span>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Comisión:</span>
                    <span className="text-3xl font-bold text-red-600">15%</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">del ingreso bruto mensual + limpieza</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white rounded-xl px-8 py-4 font-light">
                Volver al inicio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>  
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tarifas;
