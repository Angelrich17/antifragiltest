
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
