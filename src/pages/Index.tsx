import Navbar from "@/components/Navbar";
import ConferenceHero from "@/components/ConferenceHero";
import ConferenceInfo from "@/components/ConferenceInfo";
import ConferenceObjectives from "@/components/ConferenceObjectives";
import ConferenceThemes from "@/components/ConferenceThemes";
import SubmissionInfo from "@/components/SubmissionInfo";
import CommitteeInfo from "@/components/CommitteeInfo";
import ConferenceFooter from "@/components/ConferenceFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="hero">
        <ConferenceHero />
      </div>
      <ConferenceInfo />
      <div id="objectives">
        <ConferenceObjectives />
      </div>
      <div id="themes">
        <ConferenceThemes />
      </div>
      <div id="submission">
        <SubmissionInfo />
      </div>
      <div id="committee">
        <CommitteeInfo />
      </div>
      <div id="contact">
        <ConferenceFooter />
      </div>
    </div>
  );
};

export default Index;
