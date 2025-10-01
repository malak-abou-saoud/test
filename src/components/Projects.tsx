import { Code2, Brain } from "lucide-react";

interface ProjectsProps {
  language: "en" | "fr";
}

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    en: {
      title: "Projects",
      projects: [
        { name: "Fashion Website",
          organization: "Digital Club",
          year: "12/5/2024",
          description: "Collaborative project developed in pairs as part of the university Digital Club. Design and development of a website dedicated to the fashion world, combining interactive showcase, dynamic product sheets, and editorial blog.",
          icon: Code2
        },
        {
          name: "Smart Glasses for Autistic People",
          organization: "Romitef",
          year: "16/01/2025",
          description: "Collaborative project conducted within a team of 5 members, aimed at developing a smart glasses prototype to support autistic people in their social interactions. Contributed to the functional definition of the device, data analysis and processing from sensors, and the design of a real-time contextual assistance interface.",
          icon: Brain
        },
        {
          name :"Gala Reservation Website",
          organization : "class project",
          year : "27/11/2024",
          description:"independently designed and built a full-stack web application that allows users to browse upcoming galas, reserve seats, and manage event bookings.",
          icon:Code2
        },
        {
          name :"Fuel operation data into interactive dashboards using Power BI",
          organization : "TAQA Morocco",
          year : "01/08/2025 - 30/08/2025",
          description:"Transformed complex fuel operation data into interactive dashboards using Power BI, enabling clear visualization of key metrics, trends, and performance indicators for improved decision-making.",
          icon:Code2
        },
         {
          name :"CV Parsing Tool",
          organization : "Houssni job",
          year : "01/07/2025 - 30/07/2025",
          description:"developed a system to automatically extract structured information (name, email, skills, education, experience,etc) from resumes and export it into Excel files for easy download and analysis.",
          icon:Code2
        }
      ]
    },
    fr: {
      title: "Projets",
      projects: [
        {
          name: "Site de Mode",
          organization: "Digital Club",
          year: "2024",
          description: "Projet collaboratif réalisé en binôme dans le cadre du Digital Club universitaire. Conception et développement d'un site web dédié à l'univers de la mode, combinant vitrine interactive, fiches produits dynamiques et blog éditorial.",
          icon: Code2
        },
        {
          name: "Lunettes Intelligentes pour Personnes Autistiques",
          organization: "Romitef",
          year: "2025",
          description: "Projet collaboratif mené au sein d'une équipe de 5 membres, visant à développer un prototype de lunettes intelligentes destiné à soutenir les personnes autistes dans leurs interactions sociales. Contribution à la définition fonctionnelle du dispositif, à l'analyse et au traitement des données issues de capteurs et à la conception d'une interface d'assistance contextuelle en temps réel.",
          icon: Brain
        },
        {
          name :"Gala Reservation Website",
          organization : "Projets Académique",
          year : "27/11/2024",
          description:"J’ai conçu et développé de manière autonome une application web full-stack permettant aux utilisateurs de parcourir les galas à venir, de réserver des places et de gérer leurs réservations d’événements.",
          icon:Code2
        },
        {
         name :"Données des opérations de fioul en tableaux de bord interactifs avec Power BI",
          organization : "TAQA Morocco",
          year : "01/08/2025 - 30/08/2025",
          description:"Transformation de données complexes liées aux opérations de fioul en tableaux de bord interactifs avec Power BI, permettant une visualisation claire des indicateurs clés, tendances et performances pour une meilleure prise de décision.",
          icon:Code2 
        },
        {
           name :"CV Parsing Tool",
          organization : "Houssni job",
          year : "01/07/2025 - 30/07/2025",
          description:"Développement d’un système permettant d’extraire automatiquement des informations structurées (nom, email, compétences, formation, expérience, etc.) à partir de CV, puis de les exporter vers des fichiers Excel pour un téléchargement et une analyse facilités.",
          icon:Code2
        }
      ]
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          {content[language].title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {content[language].projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:scale-[1.02] hover:glow-effect transition-smooth animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 p-4 bg-accent/10 rounded-xl w-fit glow-effect group-hover:scale-110 transition-smooth">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.name}</h3>
                <p className="text-primary font-semibold mb-4">
                  {project.organization} • {project.year}
                </p>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
