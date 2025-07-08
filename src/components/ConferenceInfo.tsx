import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Target } from "lucide-react";

export default function ConferenceInfo() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Informations Pratiques
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les détails essentiels du Premier Colloque International EDD3E
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card border-border p-8 text-center hover:shadow-card transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-sky-blue/10 rounded-full">
                <Calendar className="h-8 w-8 text-sky-blue" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Dates</h3>
            <p className="text-lg font-medium text-primary">25, 26 et 27 novembre 2025</p>
            <p className="text-sm text-muted-foreground mt-2">3 jours de conférences</p>
          </Card>

          <Card className="bg-card border-border p-8 text-center hover:shadow-card transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-leaf-green/10 rounded-full">
                <MapPin className="h-8 w-8 text-leaf-green" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Lieu</h3>
            <p className="text-lg font-medium text-primary">CCF/USMBA</p>
            <p className="text-sm text-muted-foreground mt-2">Fès, Maroc</p>
          </Card>

          <Card className="bg-card border-border p-8 text-center hover:shadow-card transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-earth-brown/10 rounded-full">
                <Target className="h-8 w-8 text-earth-brown" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Objectif</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Recherche et formation en ERE et EDD à l'ère de l'IA
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}