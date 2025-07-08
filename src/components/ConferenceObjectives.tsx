import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, BookOpen, Cpu, Globe } from "lucide-react";

export default function ConferenceObjectives() {
  return (
    <section className="py-16 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Objectifs du Colloque
          </h2>
          <div className="w-24 h-1 bg-gradient-nature mx-auto mb-6"></div>
        </div>

        <Card className="shadow-card-nature border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Target className="h-8 w-8 text-forest-green" />
              Mission Principale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Renforcer la recherche et la formation en éducation relative à l'environnement (ERE) 
              et au développement durable (EDD) à l'ère de l'Intelligence Artificielle (IA), 
              en explorant les interactions entre les enjeux écologiques, sociaux et technologiques 
              de notre époque.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="shadow-card-nature hover:shadow-nature transition-all duration-300">
            <CardHeader className="text-center">
              <BookOpen className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
              <CardTitle className="text-xl">Éducation Environnementale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Développer des approches pédagogiques innovantes pour l'éducation 
                relative à l'environnement
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card-nature hover:shadow-nature transition-all duration-300">
            <CardHeader className="text-center">
              <Cpu className="h-12 w-12 text-forest-green mx-auto mb-4" />
              <CardTitle className="text-xl">Intelligence Artificielle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Explorer l'intégration de l'IA dans l'éducation au développement durable 
                et à l'écocitoyenneté
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card-nature hover:shadow-nature transition-all duration-300">
            <CardHeader className="text-center">
              <Globe className="h-12 w-12 text-earth-brown mx-auto mb-4" />
              <CardTitle className="text-xl">Enjeux Globaux</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Analyser les interactions entre défis écologiques, sociaux et technologiques 
                contemporains
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}