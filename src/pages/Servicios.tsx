
import { CheckCircle, ArrowRight, Users, Search, DollarSign, FileText, Hammer, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const Servicios = () => {
  const services = [
    {
      icon: Users,
      title: "Asesoría 1-a-1",
      price: "300 USD/hora",
      description: "Consultoría personalizada con expertos locales. Análisis de tu perfil de inversión y recomendaciones específicas.",
      features: [
        "Análisis de perfil de riesgo",
        "Recomendaciones de barrios",
        "Estrategia de financiamiento",
        "Proyección de ROI personalizada"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Search,
      title: "Zona & Búsqueda",
      price: "Incluido en packs",
      description: "Investigación profunda de barrios y búsqueda activa de propiedades que cumplan tus criterios específicos.",
      features: [
        "Análisis demográfico detallado",
        "Proyección de crecimiento urbano",
        "Búsqueda activa de propiedades",
        "Due diligence completo"
      ],
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: DollarSign,
      title: "Cambio de Divisas",
      price: "Mejor rate del mercado",
      description: "Conversión USDT/crypto a USD billete o ARS al mejor tipo de cambio. Proceso seguro y trazable.",
      features: [
        "USDT → USD billete",
        "Crypto → ARS",
        "Rate competitivo garantizado",
        "Transferencias seguras y rápidas"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: FileText,
      title: "Documentación Legal",
      price: "Pack integral",
      description: "Gestión completa de CUIT/CDI, documentación fiscal y estructuras legales para inversores extranjeros.",
      features: [
        "Tramitación CUIT/CDI",
        "Apertura cuenta bancaria",
        "Estructuras fiscales óptimas",
        "Documentación apostillada"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "Escribano & Poder",
      price: "Cierre remoto seguro",
      description: "Escribano certificado y poder notarial para compra remota. Cierre 100% a distancia con garantías legales.",
      features: [
        "Escribano de confianza",
        "Poder notarial internacional",
        "Verificación de títulos",
        "Cierre remoto certificado"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Hammer,
      title: "Remodelación Turnkey",
      price: "Proyecto integral",
      description: "Diseño, remodelación e interiorismo completo. De la compra al alquiler sin que tengas que viajar.",
      features: [
        "Diseño arquitectónico",
        "Gestión de obra completa",
        "Interiorismo profesional",
        "Entrega llave en mano"
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const rentalServices = [
    {
      title: "Alquiler Tradicional",
      description: "Gestión de alquiler residencial de largo plazo. Máxima estabilidad y previsibilidad de ingresos.",
      features: [
        "Contratos 2-3 años",
        "Inquilinos verificados",
        "Garantías sólidas",
        "Administración completa"
      ]
    },
    {
      title: "Airbnb / Estudiantes",
      description: "Alquiler temporario y a estudiantes internacionales. Mayor rotación pero yields superiores.",
      features: [
        "Gestión Airbnb completa",
        "Alquiler a estudiantes",
        "Yields 15-25% superiores",
        "Mantenimiento incluido"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              Servicios <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">360°</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Todo lo que necesitas para invertir exitosamente en Buenos Aires. 
              Desde la primera consulta hasta la gestión de alquiler, nos encargamos de cada detalle.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Servicios principales
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cada servicio está diseñado para eliminar fricciones y maximizar tu retorno de inversión
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-2xl text-slate-800">{service.title}</CardTitle>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-600 leading-relaxed text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Management */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Home className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Gestión de Alquiler
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dos modalidades de alquiler para maximizar tu retorno según tu perfil de riesgo y objetivos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {rentalServices.map((rental, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800">{rental.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {rental.description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {rental.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">
              ¿No estás seguro cuál modalidad te conviene más?
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                <span className="sm:hidden">Consulta personalizada</span>
                <span className="hidden sm:inline">Consulta personalizada gratuita</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-amber-50">
            <CardContent className="p-12 text-center space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-amber-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-800">
                  Garantía de satisfacción 100%
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Si no estás completamente satisfecho con nuestro servicio en los primeros 30 días, 
                  te devolvemos el 100% de tu inversión. Sin preguntas.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-slate-600">Operaciones exitosas</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-amber-600">24/7</div>
                  <div className="text-sm text-slate-600">Soporte disponible</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-green-600">30 días</div>
                  <div className="text-sm text-slate-600">Garantía de devolución</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicios;
