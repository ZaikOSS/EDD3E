import ConferenceHero from "@/components/ConferenceHero";
import ConferenceObjectives from "@/components/ConferenceObjectives";
import ConferenceThemes from "@/components/ConferenceThemes";
import SubmissionInfo from "@/components/SubmissionInfo";
import CommitteeInfo from "@/components/CommitteeInfo";
import ConferenceFooter from "@/components/ConferenceFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ConferenceHero />
      <ConferenceObjectives />
      <ConferenceThemes />
      <SubmissionInfo />
      <CommitteeInfo />
      <ConferenceFooter />
    </div>
  );
};

export default Index;
