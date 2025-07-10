
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <Header />
      
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-neutral-200 mb-8">
              <span className="text-sm font-medium text-neutral-600">Comenzar Conversación</span>
            </div>
            <h1 className="text-6xl font-light text-neutral-900 mb-6 tracking-tight">
              <span className="font-medium bg-gradient-to-r from-amber-600 to-neutral-900 bg-clip-text text-transparent">Contacto</span>
            </h1>
            <p className="text-xl text-neutral-600 font-light max-w-4xl mx-auto leading-relaxed">
              Agenda tu consulta estratégica inicial sin costo. Discutiremos tus objetivos 
              y exploraremos las oportunidades más relevantes para tu perfil de inversor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center space-y-6 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-neutral-200">
              <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-2xl flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900">Consulta Estratégica</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Sesión inicial de 30 minutos para evaluar objetivos y oportunidades. 
                Calendario disponible próximamente.
              </p>
            </div>

            <div 
              className="text-center space-y-6 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-neutral-200 cursor-pointer hover:bg-white/70 transition-all duration-300"
              onClick={() => {
                const phoneNumber = "+447909317995";
                const message = "Hola, me interesa conocer más sobre las oportunidades de inversión en Buenos Aires.";
                const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900">Contacto Directo</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Para consultas específicas o información adicional. 
                Click aquí para contactar por WhatsApp.
              </p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-neutral-200 p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-light text-neutral-900 mb-4">Formulario de Contacto</h3>
                <p className="text-neutral-600 font-light">
                  Envíanos tu consulta y te responderemos a la brevedad
                </p>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm resize-none"
                    placeholder="Cuéntanos sobre tu consulta o interés en inversiones inmobiliarias..."
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white rounded-xl px-8 py-4 font-light transition-all duration-300 hover:shadow-lg"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
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
      <WhatsAppButton />
    </div>
  );
};

export default Contacto;
