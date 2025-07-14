import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Por favor ingresa un email válido",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke('newsletter-subscribe', {
        body: { email }
      });

      if (error) throw error;

      toast({
        title: "¡Suscripción exitosa!",
        description: "Te has suscrito al newsletter correctamente",
      });
      setEmail("");
    } catch (error: any) {
      toast({
        title: "Error en la suscripción",
        description: error.message || "Hubo un problema al suscribirte",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
              {t('footer.company-description')}
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
            <h3 className="text-lg font-light">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.service.strategic-consulting')}</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.service.property-curation')}</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.service.financial-structuring')}</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.service.legal-due-diligence')}</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.service.asset-optimization')}</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.service.integral-management')}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-8">
            <h3 className="text-lg font-light">{t('footer.resources')}</h3>
            <ul className="space-y-3">
              <li><Link to="/por-que-argentina" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.resource.investment-thesis')}</Link></li>
              <li><Link to="/recursos" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.resource.research-analysis')}</Link></li>
              <li><Link to="/recursos" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.resource.market-intelligence')}</Link></li>
              <li><Link to="/recursos" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.resource.roi-calculator')}</Link></li>
              <li><Link to="/casos-reales" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.resource.success-cases')}</Link></li>
              <li><Link to="/nosotros" className="text-neutral-400 hover:text-white transition-colors font-light">{t('footer.resource.team')}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="text-lg font-light">{t('footer.newsletter')}</h3>
            <p className="text-neutral-400 font-light">
              {t('footer.newsletter-subtitle')}
            </p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder={t('footer.email-placeholder')} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 font-light" 
              />
              <Button 
                onClick={handleSubscribe}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-white to-neutral-100 hover:from-neutral-100 hover:to-neutral-200 text-neutral-900 rounded-xl font-light disabled:opacity-50"
              >
                {isLoading ? t('common.loading') : t('footer.subscribe')}
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