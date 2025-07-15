import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  
  const openCalendly = () => {
    window.open('https://calendly.com/anruizzzi/30min', '_blank', 'width=800,height=600');
  };
  
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-4 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-amber-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-amber-100/20 to-emerald-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="border-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12 lg:p-16 text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-medium text-white">{t('cta.badge')}</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
                {t('cta.title.part1')}
                <span className="font-medium text-amber-400"> {t('cta.title.part2')}</span>
              </h2>
              
              <p className="text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
                {t('cta.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={openCalendly}
                size="lg"
                className="bg-white hover:bg-neutral-100 text-neutral-900 text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('cta.schedule-meeting')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-neutral-400 font-light">
                {t('cta.free-consultation')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">15min</div>
                <div className="text-sm text-neutral-400 font-light">{t('cta.quick-call')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">0€</div>
                <div className="text-sm text-neutral-400 font-light">{t('cta.no-cost')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">24h</div>
                <div className="text-sm text-neutral-400 font-light">{t('cta.quick-response')}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;