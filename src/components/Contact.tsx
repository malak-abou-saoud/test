import { Mail, Phone, MapPin, Github, Linkedin, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  language: "en" | "fr";
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: "Get In Touch",
      description: "I'm currently seeking internship opportunities. Feel free to reach out!",
      email: "Email",
      phone: "Phone",
      location: "Location",
      cv: "View CV",
    },
    fr: {
      title: "Me Contacter",
      description: "Je suis actuellement à la recherche d'opportunités de stage. N'hésitez pas à me contacter !",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      cv: "Voir CV",
    },
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in">
          {content[language].title}
        </h2>
        <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
          {content[language].description}
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:Abousaoudm@gmail.com"
            className="glass-card p-6 rounded-xl hover:scale-105 hover:glow-effect transition-smooth animate-scale-in group"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
            <p className="text-sm text-muted-foreground mb-1">{content[language].email}</p>
            <p className="text-foreground font-medium">Abousaoudm@gmail.com</p>
          </a>

          <a
            href="tel:+212626211234"
            className="glass-card p-6 rounded-xl hover:scale-105 hover:glow-effect transition-smooth animate-scale-in group"
          >
            <Phone className="w-8 h-8 text-secondary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
            <p className="text-sm text-muted-foreground mb-1">{content[language].phone}</p>
            <p className="text-foreground font-medium">+212 626 211 234</p>
          </a>

          <div className="glass-card p-6 rounded-xl hover:scale-105 hover:glow-effect transition-smooth animate-scale-in group">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-smooth" />
            <p className="text-sm text-muted-foreground mb-1">{content[language].location}</p>
            <p className="text-foreground font-medium">El Jadida, {language === "en" ? "Morocco" : "Maroc"}</p>
          </div>
        </div>

        
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            variant="outline"
            size="lg"
            className="glass-card hover:glow-effect transition-smooth"
            asChild
          >
            <a href="https://github.com/Malak-27" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="glass-card hover:glow-effect transition-smooth"
            asChild
          >
            <a href="https://www.linkedin.com/in/malak-abou-saoud-ba64982b7" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>

          
          <Button
            variant="default"
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 glass-card hover:glow-effect transition-smooth"
            asChild
          >
            <a href="https://drive.google.com/file/d/1fjYPsktSpSpOK0Btsvb_JU8sCarT0YIi/view?usp=sharing" target="_blank" rel="https://drive.google.com/file/d/1fjYPsktSpSpOK0Btsvb_JU8sCarT0YIi/view?usp=sharing">
              <FileDown className="w-5 h-5 mr-2" />
              {content[language].cv}
            </a>
          </Button>
        </div>

        
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © 2025 Malak Abou-Saoud. {language === "en" ? "All rights reserved." : "Tous droits réservés."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
