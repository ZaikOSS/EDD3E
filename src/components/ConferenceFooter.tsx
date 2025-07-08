import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function ConferenceFooter() {
  return (
    <footer className="bg-gradient-nature text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Premier Colloque International EDD3E</h3>
            <p className="text-primary-foreground/80 mb-4">
              Environnement et Développement Durable : Éthique, Études et Éducation
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>ÉCOLE NORMALE SUPÉRIEURE</p>
              <p>LABORATOIRE ISDEESIA</p>
              <p>ÉQUIPE DE RECHERCHE PNEEDD</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Hamid SLALI</p>
                  <p className="text-sm text-primary-foreground/80">hamid.slali@usmba.ac.ma</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <p className="text-primary-foreground/80">+212 661 461 302</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <p className="text-primary-foreground/80">CCF/USMBA, Fès, Maroc</p>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dates Importantes</h3>
            <div className="space-y-4">
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-4">
                <p className="font-semibold text-primary-foreground">Date limite des résumés</p>
                <p className="text-2xl font-bold text-primary-foreground">30 Sept 2025</p>
              </Card>
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-4">
                <p className="font-semibold text-primary-foreground">Dates du colloque</p>
                <p className="text-lg font-bold text-primary-foreground">25-27 Nov 2025</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-primary-foreground/80">
                © 2025 Premier Colloque International EDD3E. Tous droits réservés.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Français • English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}