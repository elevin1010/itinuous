import Navbar from '@/components/layout/Navbar';
import HomeHeroSection from '@/components/home/HomeHeroSection';
import WhatIsSection from '@/components/home/WhatIsSection';
import WhyExistsSection from '@/components/home/WhyExistsSection';
import HomeAudienceSection from '@/components/home/HomeAudienceSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import HomeHowItWorksSection from '@/components/home/HomeHowItWorksSection';
import PricingSection from '@/components/home/PricingSection';
import ClarificationSection from '@/components/home/ClarificationSection';
import HomeRoadmapSection from '@/components/home/HomeRoadmapSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import Footer from '@/components/sections/Footer';
import SectionDivider from '@/components/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HomeHeroSection />
        <SectionDivider showChevron />
        <WhatIsSection />
        <SectionDivider />
        <WhyExistsSection />
        <SectionDivider />
        <HomeAudienceSection />
        <SectionDivider />
        <BenefitsSection />
        <SectionDivider />
        <HomeHowItWorksSection />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <ClarificationSection />
        <SectionDivider />
        <HomeRoadmapSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
