
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOLanguageLinks from "@/components/SEOLanguageLinks";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import PreciosHistoricos from "@/components/PreciosHistoricos";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const Recursos = () => {
  const { t } = useLanguage();
  const { getLocalizedPath } = useLocalizedPath();

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <SEOLanguageLinks />
      <Header />
      
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-neutral-200 mb-8">
              <BarChart3 className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-neutral-600">{t('resources.badge')}</span>
            </div>
            <h1 className="text-6xl font-light text-neutral-900 mb-6 tracking-tight">
              {t('resources.title')}
            </h1>
            <p className="text-xl text-neutral-600 font-light max-w-4xl mx-auto leading-relaxed">
              {t('resources.subtitle')}
            </p>
          </div>

          {/* Gráfico de Precios Históricos */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-6 w-6 text-amber-600" />
              <h2 className="text-3xl font-light text-neutral-900">
                {t('resources.market-analysis')}
              </h2>
            </div>
            <PreciosHistoricos />
          </div>

          <div className="text-center">
            <Link to={getLocalizedPath("/")}>
              <Button size="lg" className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white rounded-xl px-8 py-4 font-light">
                {t('resources.back-home')}
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

export default Recursos;
