import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-neutral-200 rounded-xl flex items-center justify-center">
                <span className="text-neutral-900 font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-xl font-light">Antifragile</span>
                <span className="text-sm text-neutral-400 block leading-none font-light">Advisors</span>
              </div>
            </Link>
            <p className="text-neutral-400 leading-relaxed font-light">
              Transformamos la incertidumbre del mercado argentino en oportunidades 
              de inversión excepcionales. Expertise boutique para inversionistas sofisticados.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-neutral-500" />
                <span className="text-neutral-300 font-light">info@antifragileadvisors.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-neutral-500" />
                <span className="text-neutral-300 font-light">+447832775774</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-neutral-500" />
                <span className="text-neutral-300 font-light">Buenos Aires, Argentina</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-xl flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5 text-neutral-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-xl flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5 text-neutral-300" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="text-lg font-light">Servicios</h3>
            <ul className="space-y-3">
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">Consultoría Estratégica</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">Curación de Inmuebles</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">Estructuración Financiera</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">Due Diligence Legal</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">Optimización de Activos</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">Gestión Integral</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-8">
            <h3 className="text-lg font-light">Recursos</h3>
            <ul className="space-y-3">
              <li><Link to="/por-que-argentina" className="text-neutral-400 hover:text-white transition-colors font-light">Tesis de Inversión</Link></li>
              <li><Link to="/recursos" className="text-neutral-400 hover:text-white transition-colors font-light">Research & Análisis</Link></li>
              <li><Link to="/recursos" className="text-neutral-400 hover:text-white transition-colors font-light">Market Intelligence</Link></li>
              <li><Link to="/recursos" className="text-neutral-400 hover:text-white transition-colors font-light">Calculadora ROI</Link></li>
              <li><Link to="/casos-reales" className="text-neutral-400 hover:text-white transition-colors font-light">Casos de Éxito</Link></li>
              <li><Link to="/nosotros" className="text-neutral-400 hover:text-white transition-colors font-light">Equipo</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="text-lg font-light">Newsletter</h3>
            <p className="text-neutral-400 font-light">
              Recibe artículos exclusivos sobre la actualidad del mundo inmobiliario 
              y económico de Argentina directamente en tu inbox.
            </p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 font-light" 
              />
              <Button className="w-full bg-gradient-to-r from-white to-neutral-100 hover:from-neutral-100 hover:to-neutral-200 text-neutral-900 rounded-xl font-light">
                Suscribirse al Newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm font-light">
              © 2024 Antifragile Advisors. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-8 text-sm">
              <Link to="/terminos" className="text-neutral-400 hover:text-white transition-colors font-light">
                Términos
              </Link>
              <Link to="/privacidad" className="text-neutral-400 hover:text-white transition-colors font-light">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;