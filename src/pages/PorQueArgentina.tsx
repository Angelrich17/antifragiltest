import { Play, Download, TrendingUp, DollarSign, BarChart3, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
const PorQueArgentina = () => {
  return <div className="min-h-screen max-w-screen overflow-x-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 sm:px-6 lg:px-4 overflow-hidden">
        <div className="absolute inset-0">
          {/* Background image with transparency */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{
          backgroundImage: "url('/lovable-uploads/b499d954-153b-4ff6-8f76-fb7776c58a03.png')"
        }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/5 to-amber-900/5"></div>
          <div className="hidden sm:block absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-amber-100/50 rounded-full blur-3xl"></div>
          <div className="hidden sm:block absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Columna izquierda: Texto y botones */}
            <div className="space-y-10 text-center sm:text-center lg:text-left px-2 sm:px-0">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 leading-tight tracking-tight">
                  ¿Por qué <span className="font-medium bg-gradient-to-r from-blue-700 via-blue-600 to-amber-600 bg-clip-text text-transparent">Argentina</span> ahora?
                </h1>
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                  Una tesis de inversión respaldada por datos duros, ciclos económicos y una oportunidad histórica de comprar activos de calidad mundial a precios de mercados emergentes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-center lg:justify-start w-full">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  Ver análisis completo
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-xl border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar PDF gratuito
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-neutral-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Datos macroeconómicos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Comparativa internacional</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Oportunidad histórica</span>
                </div>
              </div>
            </div>
            
            {/* Columna derecha: video + cards */}
            <div className="relative lg:ml-8 mx-auto lg:mx-0 max-w-lg lg:max-w-none px-2 sm:px-0">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 hover:bg-white text-slate-800 rounded-2xl px-8 py-4">
                    <Play className="mr-3 h-6 w-6 fill-current" />
                    <span className="font-medium">Reproducir análisis</span>
                  </Button>
                </div>
              </div>

              {/* Opcional: elementos flotantes si quieres reforzar info clave */}
              <div className="hidden lg:block absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-neutral-200">
                <div className="text-2xl font-bold text-blue-600">8x</div>
                <div className="text-xs text-neutral-500">Multiplicador potencial</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Datos comparativos que demuestran el momento excepcional para invertir en Buenos Aires</p>
          </div>
          
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl">
                <BarChart3 className="mr-3 h-7 w-7 text-amber-600" />
                Comparativa internacional (USD/m²)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
                  <div className="text-2xl font-bold text-slate-800">$8,500</div>
                  <div className="text-sm text-slate-600">Miami</div>
                  <div className="w-full h-2 bg-amber-200 rounded-full">
                    <div className="w-4/5 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-slate-800">$10,000</div>
                  <div className="text-sm text-slate-600">Madrid</div>
                  <div className="w-full h-2 bg-red-200 rounded-full">
                    <div className="w-full h-2 bg-red-600 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-slate-800">$50,000</div>
                  <div className="text-sm text-slate-600">Mónaco</div>
                  <div className="w-full h-2 bg-purple-200 rounded-full">
                    <div className="w-full h-2 bg-purple-600 rounded-full"></div>
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
                    <h3 className="text-xl font-bold text-slate-800">Riesgo: Inestabilidad política / económica</h3>
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
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base" onClick={() => window.open('https://calendly.com/anruizzzi/30min', '_blank', 'width=800,height=600')}>
              Agenda una consulta
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>;
};
export default PorQueArgentina;