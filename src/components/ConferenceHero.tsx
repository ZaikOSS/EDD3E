import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Target, Mail } from "lucide-react";
import heroImage from "@/assets/hero-conference.jpg";

export default function ConferenceHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Conference Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <p className="text-primary-foreground/80 text-lg mb-2">
            ÉCOLE NORMALE SUPÉRIEURE
          </p>
          <p className="text-primary-foreground/80 text-lg mb-2">
            LABORATOIRE ISDEESIA
          </p>
          <p className="text-primary-foreground/80 text-lg mb-6">
            ÉQUIPE DE RECHERCHE PNEEDD
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Premier Colloque International
          <span className="block text-sky-blue">EDD3E</span>
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
          Environnement et Développement Durable : Éthique, Études et Éducation
        </p>

        {/* Key Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <Card className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 p-6">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-sky-blue" />
            </div>
            <h3 className="text-primary-foreground font-semibold mb-2">Dates</h3>
            <p className="text-primary-foreground/80">25, 26 et 27 novembre 2025</p>
          </Card>

          <Card className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 p-6">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-leaf-green" />
            </div>
            <h3 className="text-primary-foreground font-semibold mb-2">Lieu</h3>
            <p className="text-primary-foreground/80">CCF/USMBA</p>
          </Card>

          <Card className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 p-6">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-earth-brown" />
            </div>
            <h3 className="text-primary-foreground font-semibold mb-2">Objectif</h3>
            <p className="text-primary-foreground/80 text-sm">Recherche et formation en ERE et EDD à l'ère de l'IA</p>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            <Mail className="h-5 w-5 mr-2" />
            Soumettre une Communication
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            En Savoir Plus
          </Button>
        </div>

        {/* Important Date */}
        <div className="mt-8 p-4 bg-destructive/20 backdrop-blur-sm rounded-lg border border-destructive/30 max-w-md mx-auto">
          <p className="text-primary-foreground font-semibold">
            📧 Date limite des résumés : 30 septembre 2025
          </p>
        </div>
      </div>
    </section>
  );
}