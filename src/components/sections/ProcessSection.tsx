import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const ProcessSection = () => {
  const { t } = useLanguage();
  const { getLocalizedPath } = useLocalizedPath();
  
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-4 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-neutral-200 mb-8">
            <span className="text-sm font-medium text-neutral-600">{t('process.badge')}</span>
          </div>
          <h2 className="text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {t('process.title.part1')}
            <span className="font-medium text-blue-600"> {t('process.title.part2')}</span>
          </h2>
          <p className="text-xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
            {t('process.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 transform -translate-y-1/2"></div>
          
          <div className="relative text-center space-y-8">
            <div className="w-24 h-24 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-lg">
              <span className="text-2xl font-light text-white">01</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-neutral-900">{t('process.step1.title')}</h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {t('process.step1.description')}
              </p>
            </div>
          </div>
          
          <div className="relative text-center space-y-8">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-lg">
              <span className="text-2xl font-light text-white">02</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-neutral-900">{t('process.step2.title')}</h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {t('process.step2.description')}
              </p>
            </div>
          </div>
          
          <div className="relative text-center space-y-8">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-lg">
              <span className="text-2xl font-light text-white">03</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-neutral-900">{t('process.step3.title')}</h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {t('process.step3.description')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link to={getLocalizedPath("/proceso")}>
            <Button size="lg" variant="outline" className="rounded-xl px-4 py-2 sm:px-8 sm:py-4 font-light">
              {t('process.explore-methodology')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;