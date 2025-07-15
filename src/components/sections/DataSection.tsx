import { BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const DataSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-4 bg-gradient-to-br from-neutral-50 to-blue-50/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral-900 mb-4 tracking-tight">
            {t('data.title')}
          </h2>
          <p className="text-xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
            {t('data.subtitle')}
          </p>
        </div>
        
        <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-8">
              <BarChart3 className="mr-3 h-7 w-7 text-amber-600" />
              <h3 className="text-2xl font-light text-neutral-900">{t('data.international-comparison')}</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center space-y-3">
                <div className="text-2xl font-light text-neutral-900">$1,200</div>
                <div className="text-sm text-neutral-600 font-light">Buenos Aires</div>
                <div className="w-full h-2 bg-emerald-100 rounded-full">
                  <div className="w-1/4 h-2 bg-emerald-600 rounded-full"></div>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-2xl font-light text-neutral-900">$3,800</div>
                <div className="text-sm text-neutral-600 font-light">Montevideo</div>
                <div className="w-full h-2 bg-blue-100 rounded-full">
                  <div className="w-3/4 h-2 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-2xl font-light text-neutral-900">$8,500</div>
                <div className="text-sm text-neutral-600 font-light">Miami</div>
                <div className="w-full h-2 bg-amber-100 rounded-full">
                  <div className="w-4/5 h-2 bg-amber-600 rounded-full"></div>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-2xl font-light text-neutral-900">$10,000</div>
                <div className="text-sm text-neutral-600 font-light">Madrid</div>
                <div className="w-full h-2 bg-red-100 rounded-full">
                  <div className="w-full h-2 bg-red-600 rounded-full"></div>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-2xl font-light text-neutral-900">$50,000</div>
                <div className="text-sm text-neutral-600 font-light">Mónaco</div>
                <div className="w-full h-2 bg-purple-100 rounded-full">
                  <div className="w-full h-2 bg-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DataSection;