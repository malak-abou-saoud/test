interface AboutProps {
  language: "en" | "fr";
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: "About Me",
      description: "I am a third-year Data Science student, seeking an internship to apply my skills in programming, data processing, and statistical analysis. Curious, autonomous, and motivated, I aim to actively contribute to concrete projects while expanding my knowledge in data science.",
      location: "El Jadida, Morocco",
      email: "Abousaoudm@gmail.com",
      phone: "+212 626 211 234"
    },
    fr: {
      title: "À Propos",
      description: "Étudiante en troisième année de licence en Data Science, je suis à la recherche d'un stage pour mettre en pratique mes compétences en programmation, traitement de données et analyse statistique. Curieuse, autonome et motivée, je souhaite contribuer activement à des projets concrets tout en développant mes connaissances dans le domaine de la science des données.",
      location: "El Jadida, Maroc",
      email: "Abousaoudm@gmail.com",
      phone: "+212 626 211 234"
    }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          {content[language].title}
        </h2>
        
        <div className="glass-card p-8 md:p-12 rounded-2xl animate-scale-in">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            {content[language].description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-smooth">
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="text-foreground font-medium">{content[language].location}</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-smooth">
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="text-foreground font-medium">{content[language].email}</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-smooth">
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <p className="text-foreground font-medium">{content[language].phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
