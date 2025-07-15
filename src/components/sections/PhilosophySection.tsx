import { TrendingUp, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const PhilosophySection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-4 bg-white border-y border-neutral-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-50 rounded-full border border-neutral-200 mb-8">
            <span className="text-sm font-medium text-neutral-600">{t('philosophy.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {t('philosophy.title.part1')}
            <span className="font-medium text-amber-600"> {t('philosophy.title.part2')}</span>
          </h2>
          <p className="text-xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
            {t('philosophy.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-500 rounded-2xl">
            <CardContent className="p-10 text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900">{t('philosophy.exceptional-returns.title')}</h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {t('philosophy.exceptional-returns.description')}
              </p>
              <div className="pt-4 border-t border-neutral-100">
                <span className="text-4xl font-light text-blue-600">+200%</span>
                <p className="text-sm text-neutral-500 font-light">{t('philosophy.exceptional-returns.stat')}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-500 rounded-2xl">
            <CardContent className="p-10 text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900">{t('philosophy.legal-security.title')}</h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {t('philosophy.legal-security.description')}
              </p>
              <div className="pt-4 border-t border-neutral-100">
                <span className="text-4xl font-light text-amber-600">100%</span>
                <p className="text-sm text-neutral-500 font-light">{t('philosophy.legal-security.stat')}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-500 rounded-2xl">
            <CardContent className="p-10 text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900">{t('philosophy.boutique-service.title')}</h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {t('philosophy.boutique-service.description')}
              </p>
              <div className="pt-4 border-t border-neutral-100">
                <span className="text-4xl font-light text-emerald-600">360°</span>
                <p className="text-sm text-neutral-500 font-light">{t('philosophy.boutique-service.stat')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;