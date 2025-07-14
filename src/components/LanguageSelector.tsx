import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2 h-auto">
          {language === 'es' ? (
            <img 
              src="https://flagcdn.com/w20/es.png" 
              alt="Español"
              className="w-5 h-4 rounded-sm"
            />
          ) : (
            <img 
              src="https://flagcdn.com/w20/gb.png" 
              alt="English"
              className="w-5 h-4 rounded-sm"
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-white/95 backdrop-blur-xl border border-neutral-200/50">
        <DropdownMenuItem 
          onClick={() => setLanguage('es')}
          className={`flex items-center space-x-2 cursor-pointer ${language === 'es' ? 'bg-neutral-100' : ''}`}
        >
          <img 
            src="https://flagcdn.com/w20/es.png" 
            alt="Español"
            className="w-5 h-4 rounded-sm"
          />
          <span>Español</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={`flex items-center space-x-2 cursor-pointer ${language === 'en' ? 'bg-neutral-100' : ''}`}
        >
          <img 
            src="https://flagcdn.com/w20/gb.png" 
            alt="English"
            className="w-5 h-4 rounded-sm"
          />
          <span>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;