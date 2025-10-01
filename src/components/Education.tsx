import { GraduationCap } from "lucide-react";

interface EducationProps {
  language: "en" | "fr";
}

const Education = ({ language }: EducationProps) => {
  const educationItems = [
    {
      en: {
        degree: "Bachelor's Degree in Data Science",
        school: "Faculty of Science, El Jadida",
        period: "2023 - 2026",
        description:
          "Comprehensive program covering programming, statistical analysis, machine learning, data visualization, and big data technologies.",
      },
      fr: {
        degree: "Licence en Data Science",
        school: "Faculté des Sciences d'El Jadida",
        period: "2023 - 2026",
        description:
          "Programme complet couvrant la programmation, l'analyse statistique, le machine learning, la visualisation de données et les technologies big data.",
      },
    },
    {
      en: {
        degree: "AI Formation Program",
        school: "Tamhin , CTPES , IDS , GIZ",
        period: "10 months",
        description:
          "Intensive 10-month program focused on AI tools",
      },
      fr: {
        degree: "Programme de Formation en IA",
        school: "Académie IA en ligne",
        period: "2024 - 2025 (10 mois)",
        description:
          "Programme intensif de 10 mois axé sur les outils de l'IA",
      },
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          {language === "en" ? "Education" : "Formation"}
        </h2>

        <div className="flex flex-col gap-8">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 md:p-12 rounded-2xl animate-scale-in"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-secondary/10 rounded-xl glow-effect">
                  <GraduationCap className="w-10 h-10 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {item[language].degree}
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-2">
                    {item[language].school}
                  </p>
                  <p className="text-muted-foreground font-medium mb-4">
                    {item[language].period}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item[language].description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
