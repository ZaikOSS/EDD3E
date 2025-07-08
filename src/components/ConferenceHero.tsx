import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Target, Mail, ChevronDown } from "lucide-react";

export default function ConferenceHero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ens.jpg"
          alt="Conference Background"
          className="w-full h-full object-cover"
        />
        {/* Enhanced overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex items-center justify-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Premier Colloque International
            <span className="block text-green-300 mt-4">EDD3E</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4">
            Environnement et Développement Durable : Éthique, Études et
            Éducation
          </p>
        </div>
      </div>

      {/* Scroll indicator - CENTERED at bottom of section */}
      <div className="relative z-10 w-full flex justify-center mb-6">
        <button
          onClick={scrollToNextSection}
          className="animate-bounce"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center p-2">
            <ChevronDown className="h-8 w-8 md:h-10 md:w-10 text-white/80 hover:text-white transition-colors" />
            <span className="text-white/80 text-xs md:text-sm mt-1">
              Défiler
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
