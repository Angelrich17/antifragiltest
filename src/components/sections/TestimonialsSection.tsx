import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-50 rounded-full border border-neutral-200 mb-8">
            <span className="text-sm font-medium text-neutral-600">{t('testimonials.badge')}</span>
          </div>
          <h2 className="text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {t('testimonials.title.part1')}
            <span className="font-medium text-emerald-600"> {t('testimonials.title.part2')}</span>
          </h2>
          <p className="text-xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
            <CardContent className="p-8 space-y-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-neutral-300" />
              <p className="text-neutral-600 leading-relaxed font-light italic">
                {t('testimonials.testimonial1.content')}
              </p>
              <div className="border-t border-neutral-100 pt-6">
                <div className="font-medium text-neutral-900">{t('testimonials.testimonial1.name')}</div>
                <div className="text-sm text-neutral-500 font-light">{t('testimonials.testimonial1.title')}</div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
            <CardContent className="p-8 space-y-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-neutral-300" />
              <p className="text-neutral-600 leading-relaxed font-light italic">
                {t('testimonials.testimonial2.content')}
              </p>
              <div className="border-t border-neutral-100 pt-6">
                <div className="font-medium text-neutral-900">{t('testimonials.testimonial2.name')}</div>
                <div className="text-sm text-neutral-500 font-light">{t('testimonials.testimonial2.title')}</div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="border-0 bg-gradient-to-br from-white to-neutral-50 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl md:col-span-2 lg:col-span-1">
            <CardContent className="p-8 space-y-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-neutral-300" />
              <p className="text-neutral-600 leading-relaxed font-light italic">
                {t('testimonials.testimonial3.content')}
              </p>
              <div className="border-t border-neutral-100 pt-6">
                <div className="font-medium text-neutral-900">{t('testimonials.testimonial3.name')}</div>
                <div className="text-sm text-neutral-500 font-light">{t('testimonials.testimonial3.title')}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;