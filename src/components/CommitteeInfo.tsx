import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, Users, BookOpen } from "lucide-react";

const honorCommittee = [
  {
    nom: "IJAALI",
    prenom: "Mustapha",
    etablissement: "Présidence USMBA/Maroc",
  },
  { nom: "AHAITOUF", prenom: "Ali", etablissement: "ENS de Fès / USMBA/Maroc" },
  {
    nom: "BENNANI DOSS",
    prenom: "Saad",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
];

const organizationCommittee = [
  { nom: "BENAMAR", prenom: "Saad", etablissement: "ENS de Fès / USMBA/Maroc" },
  { nom: "SLALI", prenom: "Hamid", etablissement: "ENS de Fès / USMBA/Maroc" },
  {
    nom: "MERZOUKI",
    prenom: "Abdelouahid",
    etablissement: "Direction provinciale MNE de Fès",
  },
  {
    nom: "ESSAHALE",
    prenom: "Adil",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
  {
    nom: "ZARROUQ",
    prenom: "Btissame",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
  {
    nom: "BEN BAQQAL",
    prenom: "Hicham",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
  {
    nom: "EL ASMI",
    prenom: "Hicham",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
  {
    nom: "EL KHATTABI",
    prenom: "Khalid",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
  {
    nom: "LAGUENINI",
    prenom: "Fouzia",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
  {
    nom: "LAMSAADI",
    prenom: "Nadia",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
  {
    nom: "BEN FARES",
    prenom: "Samiha",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
];

const scientificCommittee = [
  { nom: "BENAMAR", prenom: "Saad", etablissement: "ENS de Fès / USMBA/Maroc" },
  { nom: "BENZIANE", prenom: "Zineb", etablissement: "FSDM, USMBA/ Maroc" },
  {
    nom: "BEN BAQQAL",
    prenom: "Hicham",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
  {
    nom: "ESSAHALE",
    prenom: "Adil",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
  {
    nom: "HILALI",
    prenom: "Jawad",
    etablissement: "CRMEF de Fès-Meknès /Maroc",
  },
  {
    nom: "MELOUANI",
    prenom: "Mohammed",
    etablissement: "Picardie Jules Verne Amiens /France",
  },
  {
    nom: "MULNET",
    prenom: "Didier",
    etablissement: "ESPE de Chamalières /France",
  },
  { nom: "SLALI", prenom: "Hamid", etablissement: "ENS de Fès / USMBA/Maroc" },
  {
    nom: "LAMSAADI",
    prenom: "Nadia",
    etablissement: "ENS de Fès / USMBA/Maroc",
  },
];

interface Member {
  nom: string;
  prenom: string;
  etablissement: string;
}

interface CommitteeTableProps {
  members: Member[];
}

function CommitteeTable({ members }: CommitteeTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold text-foreground">
              Nom
            </th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">
              Prénom
            </th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">
              Établissement / Pays
            </th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr
              key={index}
              className="border-b border-border/50 hover:bg-accent/50 transition-colors"
            >
              <td className="py-3 px-4 font-medium text-foreground">
                {member.nom}
              </td>
              <td className="py-3 px-4 text-muted-foreground">
                {member.prenom}
              </td>
              <td className="py-3 px-4 text-muted-foreground text-sm">
                {member.etablissement}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CommitteeInfo() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comités du Colloque
          </h2>
          <div className="w-24 h-1 bg-gradient-nature mx-auto mb-6"></div>
        </div>

        <Tabs defaultValue="honor" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="honor" className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              Honneur
            </TabsTrigger>
            <TabsTrigger
              value="organization"
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Organisation
            </TabsTrigger>
            <TabsTrigger value="scientific" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Scientifique
            </TabsTrigger>
          </TabsList>

          <TabsContent value="honor">
            <Card className="shadow-card-nature">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Crown className="h-8 w-8 text-earth-brown" />
                  Comité d'Honneur
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CommitteeTable members={honorCommittee} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="organization">
            <Card className="shadow-card-nature">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-8 w-8 text-forest-green" />
                  Comité d'Organisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CommitteeTable members={organizationCommittee} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scientific">
            <Card className="shadow-card-nature">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BookOpen className="h-8 w-8 text-ocean-blue" />
                  Comité Scientifique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CommitteeTable members={scientificCommittee} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
