import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  language: "en" | "fr";
}

const Hero = ({ language }: HeroProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = {
    en: "Data Science Student",
    fr: "Étudiante en Data Science"
  };

  const fullText = texts[language];

  useEffect(() => {
    setCurrentIndex(0);
    setDisplayText("");
  }, [language]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const content = {
    en: {
      greeting: "Hi, I'm",
      description: "Passionate about transforming data into actionable insights. Currently pursuing my degree in Data Science at Faculty of Science, El Jadida.",
      cta: "Explore My Work"
    },
    fr: {
      greeting: "Bonjour, je suis",
      description: "Passionnée par la transformation des données en insights exploitables. Actuellement en licence Data Science à la Faculté des Sciences d'El Jadida.",
      cta: "Découvrir Mon Travail"
    }
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 flex flex-col items-start space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground animate-slide-in-left">
            {content[language].greeting}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold animate-slide-in-right">
            <span className="gradient-text">Malak Abou-Saoud</span>
          </h1>
          <div className="h-12 md:h-16 flex items-center">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            {content[language].description}
          </p>

          
          <div className="flex flex-col items-center mt-4 space-y-2">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="text-lg px-8 py-6 animate-scale-in glow-effect hover:glow-strong transition-smooth"
            >
              {content[language].cta}
            </Button>

            <ChevronDown className="w-8 h-8 text-primary animate-float" />
          </div>
        </div>

        
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary animate-slide-in-right">
          <img
            src="profile.jpeg"// <-- Replace with your picture path
            alt="Malak Abou Saoud"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
