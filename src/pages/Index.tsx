import Navbar from '@/components/layout/Navbar';
import HomeHeroSection from '@/components/home/HomeHeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import HomeSolutionSection from '@/components/home/HomeSolutionSection';
import HomeAudienceSection from '@/components/home/HomeAudienceSection';
import ClarificationSection from '@/components/home/ClarificationSection';
import HomeRoadmapSection from '@/components/home/HomeRoadmapSection';
import PricingSection from '@/components/home/PricingSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HomeHeroSection />
        <ProblemSection />
        <HomeSolutionSection />
        <HomeAudienceSection />
        <ClarificationSection />
        <HomeRoadmapSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
