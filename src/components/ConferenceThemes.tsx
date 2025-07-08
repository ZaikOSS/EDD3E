import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Droplets, Bot, Landmark, TreePine } from "lucide-react";

const themes = [
  {
    id: 1,
    title: "Pratiques éducatives en lien avec l'environnement et le DD dans les clubs d'environnement",
    icon: Users,
    color: "text-forest-green"
  },
  {
    id: 2,
    title: "Pénurie d'eau et changements climatiques : enjeux et résilience durable",
    icon: Droplets,
    color: "text-ocean-blue"
  },
  {
    id: 3,
    title: "Développement Durable (DD) et écocitoyenneté à l'ère de l'Intelligence Artificielle (IA)",
    icon: Bot,
    color: "text-earth-brown"
  },
  {
    id: 4,
    title: "Préservation du patrimoine culturel et des ressources naturelles",
    icon: Landmark,
    color: "text-forest-green"
  },
  {
    id: 5,
    title: "Biodiversité et EDD",
    icon: TreePine,
    color: "text-ocean-blue"
  }
];

export default function ConferenceThemes() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Thématiques du Colloque
          </h2>
          <div className="w-24 h-1 bg-gradient-nature mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cinq axes de recherche principaux structurent ce premier colloque international
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {themes.map((theme) => {
            const IconComponent = theme.icon;
            return (
              <Card 
                key={theme.id} 
                className="shadow-card-nature hover:shadow-nature transition-all duration-300 border-l-4 border-l-forest-green"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-primary mb-2">
                        Thème {theme.id}
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {theme.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent rounded-full">
            <span className="text-accent-foreground font-medium">
              📣 Appel à communication ouvert à tous les chercheurs, enseignants, doctorants, 
              acteurs éducatifs et associatifs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}