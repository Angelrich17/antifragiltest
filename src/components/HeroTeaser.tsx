import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroTeaser = () => {
  const { t } = useLanguage();

  return (
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
  );
};

export default HeroTeaser; 