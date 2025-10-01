import { Users, Lightbulb, Globe, Wrench, FileCode2 } from "lucide-react";

interface SkillsProps {
  language: "en" | "fr";
}

const Skills = ({ language }: SkillsProps) => {
  const content = {
    en: {
      title: "Skills",
      tools: "Technical Skills - Tools",
      hardLanguages: "Technical Skills - Languages",
      softSkills: "Soft Skills",
      languages: "Languages",
      toolsList: [
        { name: "Linux (Ubuntu)", level: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Git/GitHub", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "MS Office Suite", level: 90, logo: "https://img.icons8.com/color/48/microsoft-office-2019.png" },
        { name: "VS Code", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "n8n", level: 70, logo: "https://n8n.io/favicon.ico" },
        { name: "Power BI", level: 90, logo: "https://img.icons8.com/color/48/power-bi.png" }
      ],
      hardLanguagesList: [
        { name: "HTML/CSS", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "JavaScript", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "C/C++", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "MySQL", level: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "React", level: 40, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
      ],
      soft: [
        { name: "Analytical & Problem-solving", icon: Lightbulb },
        { name: "Teamwork", icon: Users },
        { name: "Autonomy", icon: Lightbulb },
        { name: "Curiosity & Willingness to Learn", icon: Lightbulb },
        { name: "Time Management", icon: Lightbulb },
        { name: "Clear Communication", icon: Users }
      ],
      langs: [
        { name: "Arabic", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "French", level: "Advanced" }
      ]
    },
    fr: {
      title: "Compétences",
      tools: "Compétences Techniques - Outils",
      hardLanguages: "Compétences Techniques - Langages",
      softSkills: "Compétences Comportementales",
      languages: "Langues",
      toolsList: [
        { name: "Linux (Ubuntu)", level: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Git/GitHub", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Suite MS Office", level: 90, logo: "https://img.icons8.com/color/48/microsoft-office-2019.png" },
        { name: "VS Code", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "n8n", level: 70, logo: "https://n8n.io/favicon.ico" },
        { name: "Power BI", level: 90, logo: "https://img.icons8.com/color/48/power-bi.png" }
      ],
      hardLanguagesList: [
        { name: "HTML/CSS", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "JavaScript", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "C/C++", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "MySQL", level: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
       { name: "React", level: 40, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
      ],
      soft: [
        { name: "Analyse et résolution de problèmes", icon: Lightbulb },
        { name: "Esprit d'équipe", icon: Users },
        { name: "Autonomie", icon: Lightbulb },
        { name: "Curiosité et volonté d'apprendre", icon: Lightbulb },
        { name: "Gestion du temps", icon: Lightbulb },
        { name: "Communication claire", icon: Users }
      ],
      langs: [
        { name: "Arabe", level: "Langue maternelle" },
        { name: "Anglais", level: "Avancé" },
        { name: "Français", level: "Avancé" }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          {content[language].title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Hard Skills: Tools + Languages */}
          <div className="glass-card p-8 rounded-2xl animate-slide-in-left">
            {/* Tools */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">{content[language].tools}</h3>
              </div>
              <div className="space-y-4">
                {content[language].toolsList.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-3">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <span className="text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hard Languages */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileCode2 className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold">{content[language].hardLanguages}</h3>
              </div>
              <div className="space-y-4">
                {content[language].hardLanguagesList.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-3">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <span className="text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-8 rounded-2xl animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold">{content[language].softSkills}</h3>
            </div>
            <div className="space-y-3">
              {content[language].soft.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 glass-card rounded-lg hover:scale-105 transition-smooth"
                  >
                    <IconComponent className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="glass-card p-8 rounded-2xl animate-slide-in-right max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold">{content[language].languages}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content[language].langs.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col items-center text-center">
                  <span className="text-foreground font-medium text-lg">{lang.name}</span>
                  <span className="text-primary text-sm font-semibold mt-2">{lang.level}</span>
                </div>
                <div className="h-1 bg-muted rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
