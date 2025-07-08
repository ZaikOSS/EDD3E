import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function ConferenceFooter() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Conference Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              Premier Colloque International EDD3E
            </h3>
            <p className="text-white/80 mb-3 text-sm">
              Environnement et Développement Durable : Éthique, Études et
              Éducation
            </p>
            <div className="space-y-1 text-xs text-white/70">
              <p>ÉCOLE NORMALE SUPÉRIEURE</p>
              <p>LABORATOIRE ISDEESIA</p>
              <p>ÉQUIPE DE RECHERCHE PNEEDD</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <div>
                  <p className="font-medium text-sm">Hamid SLALI</p>
                  <p className="text-xs text-white/80">
                    hamid.slali@usmba.ac.ma
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <p className="text-xs text-white/80">+212 661 461 302</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <p className="text-xs text-white/80">CCF/USMBA, Fès, Maroc</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex justify-center">
            <p className="text-white/80 text-xs text-center">
              © 2025 Premier Colloque International EDD3E. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
