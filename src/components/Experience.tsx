import { Briefcase } from "lucide-react";

interface ExperienceProps {
  language: "en" | "fr";
}

const Experience = ({ language }: ExperienceProps) => {
  const content = {
    en: {
      title: "Experience",
      experiences: [
        {
          company: "TAQA Morocco",
          position: "Internship",
          period: "01/08/2024 - 30/08/2025",
          description: "Completed an internship at TAQA Morocco, where I gained a clear understanding of the company hierarchy and transformed all fuel operation data into interactive visualizations using Power BI. "
        },
        {
          company: "Housssni Job",
          position: "Internship",
          period: "01/07/2024 - 30/07/2025",
          description: " Completed an internship at Houssni Job, where I developed a CV parser that extracts data from resumes and transforms it into structured Excel documents."
        }
      ]
    },
    fr: {
      title: "Expérience",
      experiences: [
        {
          company: "TAQA Maroc",
          position: "Stage",
          period: "01/08/2024 - 30/08/2025",
          description: "J’ai effectué un stage chez TAQA Morocco, où j’ai compris la hiérarchie de l’entreprise et transformé l’ensemble des données des opérations de carburant en visualisations interactives avec Power BI."
        },
        {
          company: "Houssni Job",
          position: "Stage",
          period: "01/07/2024 - 30/07/2025",
          description: "J’ai effectué un stage chez Houssni Job, où j’ai développé un outil de parsing de CV capable d’extraire les données des CV et de les transformer en fichiers Excel structurés."
        }
      ]
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          {content[language].title}
        </h2>

        <div className="space-y-8">
          {content[language].experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-smooth animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl glow-effect">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.company}</h3>
                  <p className="text-primary font-semibold mb-2">{exp.position} • {exp.period}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
