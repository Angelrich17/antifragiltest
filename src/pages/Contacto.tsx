
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">Contacto</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Agenda tu consulta gratuita o contáctanos directamente. Calendly y WhatsApp próximamente disponibles.
          </p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700">
              Volver al inicio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>  
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
