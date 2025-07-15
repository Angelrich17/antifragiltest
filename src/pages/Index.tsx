import { Play, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOLanguageLinks from "@/components/SEOLanguageLinks";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import LazySection from "@/components/LazySection";
import { lazy } from "react";

// Lazy load heavy sections
const DataSection = lazy(() => import("@/components/sections/DataSection"));
const PhilosophySection = lazy(() => import("@/components/sections/PhilosophySection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));

const Index = () => {
  const { t } = useLanguage();
  
  const openCalendly = () => {
    // Simple direct approach - open Calendly in new tab
    window.open('https://calendly.com/anruizzzi/30min', '_blank', 'width=800,height=600');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <SEOLanguageLinks />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          {/* Background image with transparency */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{
            backgroundImage: "url('/lovable-uploads/21e4c240-bc54-4cdd-97b6-0f61ba0c6be5.png')"
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/5 to-amber-900/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-amber-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 text-center lg:text-left px-2 sm:px-0">
              <div className="space-y-6">
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-neutral-900 leading-tight tracking-tight">
                  {t('hero.title.part1')}
                  <span className="block font-medium bg-gradient-to-r from-blue-700 via-blue-600 to-amber-600 bg-clip-text text-transparent">
                    {t('hero.title.part2')}
                  </span>
                  {t('hero.title.part3')}
                </h1>
                
                <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">{t('hero.subtitle')}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={openCalendly} size="lg" className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  {t('hero.schedule-consultation')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-xl border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  {t('hero.watch-presentation')}
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-neutral-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>{t('hero.free-consultation')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>{t('hero.total-transparency')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>{t('hero.secure-remote')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative lg:ml-8 mx-auto lg:mx-0 max-w-lg lg:max-w-none px-2 sm:px-0">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 hover:bg-white text-neutral-900 rounded-2xl px-8 py-4">
                    <Play className="mr-3 h-6 w-6 fill-current" />
                    <span className="font-medium">{t('hero.play-teaser')}</span>
                  </Button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10">
                    <p className="text-sm font-light">{t('hero.teaser-description')}</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - hidden on mobile to avoid overlap */}
              <div className="hidden lg:block absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-neutral-200">
                <div className="text-2xl font-bold text-emerald-600">12%</div>
                <div className="text-xs text-neutral-500">{t('hero.average-roi')}</div>
              </div>
              
              <div className="hidden lg:block absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-neutral-200">
                <div className="text-2xl font-bold text-blue-600">180%</div>
                <div className="text-xs text-neutral-500">{t('hero.upside-potential')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lazy loaded sections for better performance */}
      <LazySection>
        <DataSection />
      </LazySection>

      <LazySection>
        <PhilosophySection />
      </LazySection>

      <LazySection>
        <ProcessSection />
      </LazySection>

      <LazySection>
        <TestimonialsSection />
      </LazySection>

      <LazySection>
        <CTASection />
      </LazySection>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;