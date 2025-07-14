
import { Phone, Search, FileCheck, Hammer, Home, ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Proceso = () => {
  const { language, t } = useLanguage();

  const stepIcons = [Phone, Search, FileCheck, Hammer, Home];
  const stepColors = [
    "from-blue-500 to-blue-600",
    "from-amber-500 to-amber-600",
    "from-green-500 to-green-600", 
    "from-purple-500 to-purple-600",
    "from-red-500 to-red-600"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              {t('process.title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {t('process.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">{t('process.average-time-title')}</h3>
              <p className="text-3xl font-bold text-blue-600">{t('process.average-time-value')}</p>
              <p className="text-slate-600">{t('process.average-time-desc')}</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">{t('process.success-rate-title')}</h3>
              <p className="text-3xl font-bold text-amber-600">{t('process.success-rate-value')}</p>
              <p className="text-slate-600">{t('process.success-rate-desc')}</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">{t('process.satisfaction-title')}</h3>
              <p className="text-3xl font-bold text-green-600">{t('process.satisfaction-value')}</p>
              <p className="text-slate-600">{t('process.satisfaction-desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {t('process.steps-title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('process.steps-subtitle')}
            </p>
          </div>
          
          <div className="space-y-12">
            {[1, 2, 3, 4, 5].map((stepNum, index) => {
              const StepIcon = stepIcons[index];
              return (
                <div key={index} className="relative">
                  {index < 4 && (
                    <div className="hidden md:block absolute left-8 top-24 w-px h-20 bg-gradient-to-b from-current to-transparent text-slate-300"></div>
                  )}
                  
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-3 gap-8 items-start">
                        <div className="space-y-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${stepColors[index]} rounded-2xl flex items-center justify-center`}>
                            <StepIcon className="h-8 w-8 text-white" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-slate-800">{t(`process.step${stepNum}.title`)}</h3>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-slate-400" />
                              <span className="text-sm font-medium text-slate-600">{t(`process.step${stepNum}.duration`)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <p className="text-slate-600 leading-relaxed text-lg">
                            {t(`process.step${stepNum}.description`)}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-800">{t('process.includes')}</h4>
                          <ul className="space-y-2">
                            {[1, 2, 3, 4].map((detailNum) => (
                              <li key={detailNum} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{t(`process.step${stepNum}.detail${detailNum}`)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="hidden sm:block py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {t('process.timeline-title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('process.timeline-subtitle')}
            </p>
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3, 4, 5, 6].map((weekNum, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="w-24 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">{t(`process.timeline.week${weekNum}`)}</span>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-blue-100 rounded-full">
                    <div 
                      className="h-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full transition-all duration-500"
                      style={{ width: `${((index + 1) / 6) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-slate-700 font-medium">{t(`process.timeline.milestone${weekNum}`)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50 inline-block">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{t('process.final-title')}</h3>
                  <p className="text-slate-600 max-w-md">
                    {t('process.final-description')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-800">
              {t('process.cta-title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('process.cta-subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6">
                  <span className="sm:hidden">{t('process.cta-button-mobile')}</span>
                  <span className="hidden sm:inline">{t('process.cta-button')}</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tarifas">
                <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                  {t('process.cta-pricing')}
                </Button>
              </Link>
            </div>
            <div className="flex justify-center items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                {t('process.cta-benefit1')}
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                {t('process.cta-benefit2')}
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                {t('process.cta-benefit3')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Proceso;
