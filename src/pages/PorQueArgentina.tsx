
import { Play, Download, TrendingUp, DollarSign, BarChart3, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PorQueArgentina = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              ¿Por qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">Argentina</span> ahora?
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Una tesis de inversión respaldada por datos duros, ciclos económicos y una oportunidad histórica 
              de comprar activos de calidad mundial a precios de mercados emergentes.
            </p>
          </div>
        </div>
      </section>

      {/* Tesis de Inversión */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-800">
                  Tesis de inversión completa
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Análisis profundo del mercado inmobiliario argentino: desde fundamentos macroeconómicos 
                  hasta oportunidades específicas por barrio y tipo de propiedad.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-800">Versión video</h3>
                    <p className="text-sm text-slate-600 mt-2">Análisis completo (5-7 min)</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Download className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-800">PDF ejecutivo</h3>
                    <p className="text-sm text-slate-600 mt-2">Descarga gratuita</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <Play className="mr-2 h-5 w-5" />
                  Ver análisis completo
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar PDF gratuito
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" variant="secondary" className="bg-white/90 hover:bg-white text-slate-800">
                    <Play className="mr-2 h-6 w-6 fill-current" />
                    Reproducir análisis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datos Duros */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Los números no mienten
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Datos históricos que demuestran el momento excepcional para invertir en Buenos Aires
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <DollarSign className="mr-3 h-6 w-6 text-green-600" />
                  Precio por m² (USD)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-48 bg-gradient-to-t from-green-100 to-green-50 rounded-lg flex items-end justify-center p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">$1,200</div>
                    <div className="text-sm text-slate-600">Precio actual promedio</div>
                    <div className="text-xs text-slate-500 mt-1">vs. $3,200 en 2017</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Pico histórico (2017)</span>
                  <span className="font-semibold text-red-600">-62%</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <TrendingUp className="mr-3 h-6 w-6 text-blue-600" />
                  ROI vs. Inflación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-48 bg-gradient-to-t from-blue-100 to-blue-50 rounded-lg flex items-end justify-center p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">+180%</div>
                    <div className="text-sm text-slate-600">Ventaja vs. inflación USD</div>
                    <div className="text-xs text-slate-500 mt-1">Últimos 5 años</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Alquiler anual en USD</span>
                  <span className="font-semibold text-blue-600">8-12%</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <BarChart3 className="mr-3 h-7 w-7 text-amber-600" />
                Comparativa internacional (USD/m²)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-slate-800">$1,200</div>
                  <div className="text-sm text-slate-600">Buenos Aires</div>
                  <div className="w-full h-2 bg-green-200 rounded-full">
                    <div className="w-1/4 h-2 bg-green-600 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-slate-800">$3,800</div>
                  <div className="text-sm text-slate-600">Montevideo</div>
                  <div className="w-full h-2 bg-blue-200 rounded-full">
                    <div className="w-3/4 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-slate-800">$4,200</div>
                  <div className="text-sm text-slate-600">Madrid</div>
                  <div className="w-full h-2 bg-amber-200 rounded-full">
                    <div className="w-4/5 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-slate-800">$10,000</div>
                  <div className="text-sm text-slate-600">Miami</div>
                  <div className="w-full h-2 bg-red-200 rounded-full">
                    <div className="w-full h-2 bg-red-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Catalizadores Macro */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Catalizadores de crecimiento
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Factores macro que impulsan la revalorización inmobiliaria en el mediano plazo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Ciclo Político</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nuevo gobierno pro-mercado. Políticas de apertura económica y normalización del tipo de cambio.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Vaca Muerta</h3>
                <p className="text-slate-600 leading-relaxed">
                  Segundo yacimiento de gas no convencional del mundo. Potencial de ingresos por $200B+ en 20 años.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Tipo de Cambio</h3>
                <p className="text-slate-600 leading-relaxed">
                  Unificación cambiaria inminente. Corrección hacia equilibrio de largo plazo favorece activos locales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Riesgos */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              ¿Riesgos y cómo los mitigamos?
            </h2>
            <p className="text-xl text-slate-600">
              Transparencia total sobre los desafíos y nuestras estrategias de mitigación
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-800">Riesgo: Inestabilidad política/económica</h3>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>Mitigación:</strong> Inversión en activos físicos (ladrillo) denominados en USD. 
                      Diversificación por barrios y tipos de propiedad. Contratos de alquiler en moneda dura.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-800">Riesgo: Regulaciones de alquiler</h3>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>Mitigación:</strong> Estructuras legales robustas. Monitoreo regulatorio constante. 
                      Flexibilidad entre alquiler tradicional y temporario (Airbnb) según cambios normativos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-800">Riesgo: Liquidez y salida</h3>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>Mitigación:</strong> Selección de propiedades en zonas prime con alta demanda. 
                      Red de compradores locales e internacionales. Estrategia de salida planificada desde el día 1.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              Agenda una consulta personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PorQueArgentina;
