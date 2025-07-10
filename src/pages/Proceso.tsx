
import { Phone, Search, FileCheck, Hammer, Home, ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const Proceso = () => {
  const steps = [
    {
      icon: Phone,
      title: "Discovery Call Gratuita",
      duration: "15 minutos",
      description: "Conocemos tus objetivos, presupuesto y perfil de riesgo. Definimos estrategia inicial y expectativas realistas.",
      details: [
        "Análisis de perfil de inversión",
        "Definición de presupuesto disponible",
        "Objetivos de rentabilidad y plazo",
        "Recomendaciones iniciales de barrios"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Search,
      title: "Mandato & Due Diligence",
      duration: "2-4 semanas",
      description: "Búsqueda activa y análisis profundo de propiedades. Verificación legal, técnica y financiera completa.",
      details: [
        "Búsqueda activa en base a criterios",
        "Verificación de títulos y documentación",
        "Inspección técnica detallada",
        "Análisis de rentabilidad proyectada"
      ],
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: FileCheck,
      title: "Oferta & Cierre Notarial",
      duration: "1-2 semanas",
      description: "Negociación, oferta formal y cierre notarial remoto. Transferencia segura con poder certificado.",
      details: [
        "Negociación de precio y condiciones",
        "Preparación de documentación legal",
        "Cierre notarial con poder remoto",
        "Transferencia de fondos segura"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Hammer,
      title: "Proyecto de Obra",
      duration: "4-8 semanas",
      description: "Diseño, remodelación e interiorismo turnkey. Supervisión completa hasta entrega llave en mano.",
      details: [
        "Diseño arquitectónico y decorativo",
        "Gestión de permisos y contratistas",
        "Supervisión de obra diaria",
        "Entrega con mobiliario incluido"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Home,
      title: "Administración Post-Compra",
      duration: "Ongoing",
      description: "Gestión completa del alquiler, mantenimiento y administración. Reportes mensuales de performance.",
      details: [
        "Búsqueda y verificación de inquilinos",
        "Gestión de contratos y cobros",
        "Mantenimiento preventivo y correctivo",
        "Reportes mensuales de rentabilidad"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  const timeline = [
    { week: "Semana 1", milestone: "Discovery call + Mandato de búsqueda" },
    { week: "Semana 2-3", milestone: "Presentación de opciones preseleccionadas" },
    { week: "Semana 4", milestone: "Due diligence + Oferta formal" },
    { week: "Semana 5", milestone: "Cierre notarial + Transferencia" },
    { week: "Semana 6-12", milestone: "Proyecto de obra + Remodelación" },
    { week: "Semana 13", milestone: "Puesta a renta + Primer inquilino" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">Proceso</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Un proceso probado que te lleva de la idea inicial a generar renta pasiva en menos de 3 meses. 
              Transparente, predecible y con seguimiento paso a paso.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Tiempo promedio</h3>
              <p className="text-3xl font-bold text-blue-600">8-12 semanas</p>
              <p className="text-slate-600">De consulta inicial a primer alquiler</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Tasa de éxito</h3>
              <p className="text-3xl font-bold text-amber-600">100%</p>
              <p className="text-slate-600">Operaciones completadas exitosamente</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Satisfacción</h3>
              <p className="text-3xl font-bold text-green-600">100%</p>
              <p className="text-slate-600">Clientes que recomiendan nuestro servicio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              5 pasos hacia tu inversión exitosa
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cada paso está diseñado para minimizar riesgos y maximizar transparencia
            </p>
          </div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-24 w-px h-20 bg-gradient-to-b from-current to-transparent text-slate-300"></div>
                )}
                
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                      <div className="space-y-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}>
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-slate-400" />
                            <span className="text-sm font-medium text-slate-600">{step.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-800">Incluye:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="hidden sm:block py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Timeline típico de proyecto
            </h2>
            <p className="text-xl text-slate-600">
              Cronograma semanal desde el primer contacto hasta generar renta
            </p>
          </div>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="w-24 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">{item.week}</span>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-blue-100 rounded-full">
                    <div 
                      className="h-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full transition-all duration-500"
                      style={{ width: `${((index + 1) / timeline.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-slate-700 font-medium">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50 inline-block">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">¡Tu propiedad generando renta!</h3>
                  <p className="text-slate-600 max-w-md">
                    Al final del proceso tendrás un activo de calidad generando ingresos pasivos en USD.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-800">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              El primer paso es siempre una consulta gratuita de 15 minutos. 
              Sin compromiso, solo para conocerte y ver si somos el fit correcto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6">
                  Agenda tu consulta gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tarifas">
                <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                  Ver tarifas y packs
                </Button>
              </Link>
            </div>
            <div className="flex justify-center items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Sin compromiso inicial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Consulta 100% gratuita
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Respuesta en 24h
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Proceso;
