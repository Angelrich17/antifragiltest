
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.why-argentina'), href: "/por-que-argentina" },
    { name: t('nav.services'), href: "/servicios" },
    { name: t('nav.process'), href: "/proceso" },
    { name: t('nav.case-studies'), href: "/casos-reales" },
    { name: t('nav.resources'), href: "/recursos" },
    { name: t('nav.pricing'), href: "/tarifas" },
    { name: t('nav.blog'), href: "/blog" },
    { name: t('nav.about'), href: "/nosotros" },
    { name: t('nav.contact'), href: "/contacto" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-light text-neutral-900">Antifragile</span>
              <span className="text-sm text-neutral-500 block leading-none font-light">Advisors</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-light rounded-xl transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button 
              className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white rounded-xl px-6 py-2 font-light shadow-sm"
              onClick={() => window.open('https://calendly.com/anruizzzi/30min', '_blank', 'width=800,height=600')}
            >
              {t('header.schedule-consultation')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200/50 py-6 bg-white/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-light rounded-xl transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <div className="flex justify-center">
                  <LanguageSelector />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white rounded-xl font-light"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open('https://calendly.com/anruizzzi/30min', '_blank', 'width=800,height=600');
                  }}
                >
                  {t('header.schedule-consultation')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
