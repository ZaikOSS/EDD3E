import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Target, Mail } from "lucide-react";
import heroImage from "@/assets/hero-conference.jpg";
export default function ConferenceHero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Conference Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Spacer for navbar */}
        <div className="mb-8"></div>

        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Premier Colloque International
          <span className="block text-sky-blue">EDD3E</span>
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
          Environnement et Développement Durable : Éthique, Études et Éducation
        </p>

      </div>
    </section>;
}