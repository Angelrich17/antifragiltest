
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOLanguageLinks from "@/components/SEOLanguageLinks";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const Nosotros = () => {
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
              <span className="text-sm font-medium text-neutral-600">{t('about.badge')}</span>
            </div>
            <h1 className="text-6xl font-light text-neutral-900 mb-6 tracking-tight">
              {t('about.title')}
            </h1>
            <p className="text-xl text-neutral-600 font-light max-w-4xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center space-y-6 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-neutral-200">
              <div className="w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900">{t('about.multidisciplinary.title')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('about.multidisciplinary.description')}
              </p>
            </div>

            <div className="text-center space-y-6 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-neutral-200">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900">{t('about.boutique.title')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('about.boutique.description')}
              </p>
            </div>

            <div className="text-center space-y-6 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-neutral-200">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900">{t('about.excellence.title')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('about.excellence.description')}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to={getLocalizedPath("/")}>
              <Button size="lg" className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white rounded-xl px-8 py-4 font-light">
                {t('about.back-home')}
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

export default Nosotros;
