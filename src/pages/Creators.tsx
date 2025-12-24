import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import SectionDivider from '@/components/SectionDivider';
import CreatorsHeroSection from '@/components/creators/CreatorsHeroSection';
import CreatorsShiftSection from '@/components/creators/CreatorsShiftSection';
import CreatorsNotDeepfakesSection from '@/components/creators/CreatorsNotDeepfakesSection';
import CreatorsWhatIsSection from '@/components/creators/CreatorsWhatIsSection';
import CreatorsValueSection from '@/components/creators/CreatorsValueSection';
import CreatorsNotReplacingSection from '@/components/creators/CreatorsNotReplacingSection';
import CreatorsHowItWorksSection from '@/components/creators/CreatorsHowItWorksSection';
import CreatorsWhyEarlySection from '@/components/creators/CreatorsWhyEarlySection';
import CreatorsCTASection from '@/components/creators/CreatorsCTASection';

const Creators = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <CreatorsHeroSection />
        <SectionDivider showChevron />
        <CreatorsShiftSection />
        <SectionDivider />
        <CreatorsNotDeepfakesSection />
        <SectionDivider />
        <CreatorsWhatIsSection />
        <SectionDivider />
        <CreatorsValueSection />
        <SectionDivider />
        <CreatorsNotReplacingSection />
        <SectionDivider />
        <CreatorsHowItWorksSection />
        <SectionDivider />
        <CreatorsWhyEarlySection />
        <CreatorsCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Creators;
