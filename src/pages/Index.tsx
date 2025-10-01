import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <LanguageToggle language={language} setLanguage={setLanguage} />
      
      <main className="relative z-10">
        <Hero language={language} />
        <About language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Certifications language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
};

export default Index;
