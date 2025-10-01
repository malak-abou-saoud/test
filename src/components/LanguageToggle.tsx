import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  language: "en" | "fr";
  setLanguage: (lang: "en" | "fr") => void;
}

const LanguageToggle = ({ language, setLanguage }: LanguageToggleProps) => {
  return (
    <div className="fixed top-6 right-6 z-50 glass-card rounded-full p-1 animate-fade-in">
      <div className="flex gap-1">
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="rounded-full text-xs font-medium transition-smooth"
        >
          <Languages className="w-3 h-3 mr-1" />
          EN
        </Button>
        <Button
          variant={language === "fr" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("fr")}
          className="rounded-full text-xs font-medium transition-smooth"
        >
          <Languages className="w-3 h-3 mr-1" />
          FR
        </Button>
      </div>
    </div>
  );
};

export default LanguageToggle;
