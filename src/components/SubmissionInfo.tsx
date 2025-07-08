import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Mail, Award, Globe } from "lucide-react";

export default function SubmissionInfo() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Appel à Communication
          </h2>
          <div className="w-24 h-1 bg-gradient-nature mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Submission Details */}
          <Card className="shadow-card-nature">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="h-8 w-8 text-forest-green" />
                Modalités de Soumission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Format :</strong> Résumé de 250-300 mots avec titre, prénom et nom, 
                    affiliation, mots-clés et axe choisi
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Langues :</strong> Français ou Anglais
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Public cible :</strong> Chercheurs, enseignants, doctorants, 
                    éducateurs, acteurs associatifs et étudiants
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Dates */}
          <Card className="shadow-card-nature">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Calendar className="h-8 w-8 text-ocean-blue" />
                Dates Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-destructive" />
                  <span className="font-semibold text-destructive">Date Limite</span>
                </div>
                <p className="text-lg font-bold text-destructive">30 septembre 2025</p>
                <p className="text-sm text-muted-foreground">Soumission des résumés</p>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Dates du Colloque</span>
                </div>
                <p className="text-lg font-bold text-primary">25-27 novembre 2025</p>
                <p className="text-sm text-muted-foreground">CCF/USMBA (présentiel et/ou à distance)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact and Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="shadow-card-nature">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-earth-brown" />
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="font-semibold text-foreground">Hamid SLALI</p>
                <p className="text-muted-foreground">hamid.slali@usmba.ac.ma</p>
                <p className="text-muted-foreground">Tél : +212 661 461 302</p>
              </div>
              <Button variant="nature" className="mt-4 w-full">
                <Mail className="h-4 w-4 mr-2" />
                Envoyer votre résumé
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card-nature">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-forest-green" />
                Informations Complémentaires
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Langues du colloque : Français – Anglais</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Certificat de participation délivré</span>
              </div>
              <div className="p-3 bg-accent rounded-lg">
                <p className="text-sm text-accent-foreground">
                  🌐 Infos et inscription : Site web à venir
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}