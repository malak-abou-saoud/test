import { Award } from "lucide-react";

interface CertificationsProps {
  language: "en" | "fr";
}

const Certifications = ({ language }: CertificationsProps) => {
  const content = {
    en: {
      title: "Awards & Certifications",
      certs: [
        { name: "Data Analyst", provider: "OpenClassroom" },
        { name: "Data Scientist", provider: "OpenClassroom" },
        { name: "Product Management for AI & Data Science", provider: "365 Data Science" },
        { name: "Data-Driven Business Growth", provider: "365 Data Science" },
        { name: "Business Analytics", provider: "365 Data Science" },
        { name: "How to Think Like a Data Analyst", provider: "365 Data Science" },
        { name: "Career Essentials in Generative AI", provider: "LinkedIn Learning & Microsoft" },
        { name: "Data Strategy", provider: "365 Data Science" }
      ]
    },
    fr: {
      title: "Distinctions & Certifications",
      certs: [
        { name: "Data Analyst", provider: "OpenClassroom" },
        { name: "Data Scientist", provider: "OpenClassroom" },
        { name: "Product Management pour l'IA et Data Science", provider: "365 Data Science" },
        { name: "Croissance d'Entreprise Basée sur les Données", provider: "365 Data Science" },
        { name: "Business Analytics", provider: "365 Data Science" },
        { name: "Comment Penser Comme un Data Analyst", provider: "365 Data Science" },
        { name: "Carrière en IA Générative", provider: "LinkedIn Learning & Microsoft" },
        { name: "Stratégie de Données", provider: "365 Data Science" }
      ]
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          {content[language].title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[language].certs.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 hover:glow-effect transition-smooth animate-scale-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg glow-effect group-hover:scale-110 transition-smooth">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2 leading-tight">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
