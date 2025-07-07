
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">BA</span>
              </div>
              <div>
                <span className="text-xl font-bold">Buenos Aires</span>
                <span className="text-sm text-slate-400 block leading-none">Investment Group</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Tu socio estratégico para inversiones inmobiliarias inteligentes en Buenos Aires. 
              Acompañamiento integral desde búsqueda hasta gestión de renta.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">hola@buenosairesig.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">+54 11 xxxx-xxxx</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-3">
              <li><Link to="/servicios" className="text-slate-400 hover:text-white transition-colors">Asesoría 1-a-1</Link></li>
              <li><Link to="/servicios" className="text-slate-400 hover:text-white transition-colors">Búsqueda de inmuebles</Link></li>
              <li><Link to="/servicios" className="text-slate-400 hover:text-white transition-colors">Cambio de divisas</Link></li>
              <li><Link to="/servicios" className="text-slate-400 hover:text-white transition-colors">Documentación legal</Link></li>
              <li><Link to="/servicios" className="text-slate-400 hover:text-white transition-colors">Remodelación turnkey</Link></li>
              <li><Link to="/servicios" className="text-slate-400 hover:text-white transition-colors">Gestión de alquiler</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Recursos</h3>
            <ul className="space-y-3">
              <li><Link to="/por-que-argentina" className="text-slate-400 hover:text-white transition-colors">Tesis de inversión</Link></li>
              <li><Link to="/recursos" className="text-slate-400 hover:text-white transition-colors">Guías rápidas</Link></li>
              <li><Link to="/recursos" className="text-slate-400 hover:text-white transition-colors">Blog & análisis</Link></li>
              <li><Link to="/recursos" className="text-slate-400 hover:text-white transition-colors">Calculadora ROI</Link></li>
              <li><Link to="/casos-reales" className="text-slate-400 hover:text-white transition-colors">Casos reales</Link></li>
              <li><Link to="/nosotros" className="text-slate-400 hover:text-white transition-colors">Sobre nosotros</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Mantente informado</h3>
            <p className="text-slate-400">
              Recibe análisis de mercado, oportunidades de inversión y actualizaciones regulatorias.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Suscribirse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 Buenos Aires Investment Group. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/terminos" className="text-slate-400 hover:text-white transition-colors">
                Términos y condiciones
              </Link>
              <Link to="/privacidad" className="text-slate-400 hover:text-white transition-colors">
                Política de privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
