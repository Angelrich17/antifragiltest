
import { CheckCircle, ArrowRight, Users, Search, DollarSign, FileText, Hammer, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOLanguageLinks from "@/components/SEOLanguageLinks";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const Servicios = () => {
  const { t } = useLanguage();
  const { getLocalizedPath } = useLocalizedPath();

  const serviceIcons = [Users, Search, DollarSign, FileText, FileText, Hammer];
  const serviceColors = [
    "from-blue-500 to-blue-600",
    "from-amber-500 to-amber-600", 
    "from-green-500 to-green-600",
    "from-purple-500 to-purple-600",
    "from-red-500 to-red-600",
    "from-indigo-500 to-indigo-600"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOLanguageLinks />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {t('services.main-title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('services.main-subtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[
              {
                title: t('services.advisory.title'),
                price: t('services.advisory.price'),
                description: t('services.advisory.description'),
                features: [
                  t('services.advisory.feature1'),
                  t('services.advisory.feature2'),
                  t('services.advisory.feature3'),
                  t('services.advisory.feature4')
                ]
              },
              {
                title: t('services.search.title'),
                price: t('services.search.price'),
                description: t('services.search.description'),
                features: [
                  t('services.search.feature1'),
                  t('services.search.feature2'),
                  t('services.search.feature3'),
                  t('services.search.feature4')
                ]
              },
              {
                title: t('services.exchange.title'),
                price: t('services.exchange.price'),
                description: t('services.exchange.description'),
                features: [
                  t('services.exchange.feature1'),
                  t('services.exchange.feature2'),
                  t('services.exchange.feature3'),
                  t('services.exchange.feature4')
                ]
              },
              {
                title: t('services.legal.title'),
                price: t('services.legal.price'),
                description: t('services.legal.description'),
                features: [
                  t('services.legal.feature1'),
                  t('services.legal.feature2'),
                  t('services.legal.feature3'),
                  t('services.legal.feature4')
                ]
              },
              {
                title: t('services.notary.title'),
                price: t('services.notary.price'),
                description: t('services.notary.description'),
                features: [
                  t('services.notary.feature1'),
                  t('services.notary.feature2'),
                  t('services.notary.feature3'),
                  t('services.notary.feature4')
                ]
              },
              {
                title: t('services.renovation.title'),
                price: t('services.renovation.price'),
                description: t('services.renovation.description'),
                features: [
                  t('services.renovation.feature1'),
                  t('services.renovation.feature2'),
                  t('services.renovation.feature3'),
                  t('services.renovation.feature4')
                ]
              }
            ].map((service, index) => {
              const ServiceIcon = serviceIcons[index];
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${serviceColors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <ServiceIcon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-center text-2xl text-slate-800">{service.title}</CardTitle>
                    <div className="text-center">
                      <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-slate-600 leading-relaxed text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rental Management */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Home className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {t('services.rental-title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('services.rental-subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: t('services.traditional.title'),
                description: t('services.traditional.description'),
                features: [
                  t('services.traditional.feature1'),
                  t('services.traditional.feature2'),
                  t('services.traditional.feature3'),
                  t('services.traditional.feature4')
                ]
              },
              {
                title: t('services.airbnb.title'),
                description: t('services.airbnb.description'),
                features: [
                  t('services.airbnb.feature1'),
                  t('services.airbnb.feature2'),
                  t('services.airbnb.feature3'),
                  t('services.airbnb.feature4')
                ]
              }
            ].map((rental, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800">{rental.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {rental.description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {rental.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">
              {t('services.rental-question')}
            </p>
            <Link to={getLocalizedPath("/contacto")}>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                <span className="sm:hidden">{t('services.rental-button-mobile')}</span>
                <span className="hidden sm:inline">{t('services.rental-button')}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-amber-50">
            <CardContent className="p-12 text-center space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-amber-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-800">
                  {t('services.guarantee-title')}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  {t('services.guarantee-subtitle')}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  { value: t('services.guarantee-stat1'), label: t('services.guarantee-label1') },
                  { value: t('services.guarantee-stat2'), label: t('services.guarantee-label2') },
                  { value: t('services.guarantee-stat3'), label: t('services.guarantee-label3') }
                ].map((stat, index) => {
                  const colors = ["text-blue-600", "text-amber-600", "text-green-600"];
                  return (
                    <div key={index} className="space-y-2">
                      <div className={`text-2xl font-bold ${colors[index]}`}>{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicios;
