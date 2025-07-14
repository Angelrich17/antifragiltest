
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Tarifas = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <Header />
      
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-neutral-200 mb-8">
              <span className="text-sm font-medium text-neutral-600">{t('pricing.badge')}</span>
            </div>
            <h1 className="text-6xl font-light text-neutral-900 mb-6 tracking-tight">
              {t('pricing.title')}
            </h1>
            <p className="text-xl text-neutral-600 font-light max-w-4xl mx-auto leading-relaxed">
              {t('pricing.subtitle')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Personal Shopper Inmobiliario */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">{t('pricing.personal-shopper.title')}</h3>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {t('pricing.personal-shopper.description')}
                </p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.personal-shopper.feature1')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.personal-shopper.feature2')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.personal-shopper.feature3')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.personal-shopper.feature4')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.personal-shopper.feature5')}</span>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-6 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">{t('pricing.personal-shopper.commission')}</span>
                    <span className="text-3xl font-bold text-amber-600">{t('pricing.personal-shopper.rate')}</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">{t('pricing.personal-shopper.note')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Ingreso de divisas vía crypto */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">💱</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">{t('pricing.crypto-exchange.title')}</h3>
                </div>
                
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  {t('pricing.crypto-exchange.description')}
                </p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.crypto-exchange.feature1')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.crypto-exchange.feature2')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.crypto-exchange.feature3')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.crypto-exchange.feature4')}</span>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-6 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">{t('pricing.crypto-exchange.commission')}</span>
                    <span className="text-3xl font-bold text-blue-600">{t('pricing.crypto-exchange.rate')}</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">{t('pricing.crypto-exchange.note')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Gestión Airbnb */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🏨</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">{t('pricing.airbnb.title')}</h3>
                </div>
                
                <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
                  {t('pricing.airbnb.badge')}
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {t('pricing.airbnb.description')}
                </p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.airbnb.feature1')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.airbnb.feature2')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.airbnb.feature3')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.airbnb.feature4')}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{t('pricing.airbnb.feature5')}</span>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-6 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">{t('pricing.airbnb.commission')}</span>
                    <span className="text-3xl font-bold text-red-600">{t('pricing.airbnb.rate')}</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">{t('pricing.airbnb.note')}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white rounded-xl px-8 py-4 font-light">
                {t('pricing.back-home')}
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

export default Tarifas;
