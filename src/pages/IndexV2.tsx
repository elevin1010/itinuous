import Navbar from '@/components/layout/Navbar';
import HeroV2 from '@/components/home-v2/HeroV2';
import TheMomentSection from '@/components/home-v2/TheMomentSection';
import TheGapSection from '@/components/home-v2/TheGapSection';
import WhatWeDoSection from '@/components/home-v2/WhatWeDoSection';
import InfraSection from '@/components/home-v2/InfraSection';
import AudienceV2Section from '@/components/home-v2/AudienceV2Section';
import PrincipleSection from '@/components/home-v2/PrincipleSection';
import EarlyAccessCTA from '@/components/home-v2/EarlyAccessCTA';
import Footer from '@/components/sections/Footer';

const IndexV2 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroV2 />
        <TheMomentSection />
        <TheGapSection />
        <WhatWeDoSection />
        <AudienceV2Section />
        <InfraSection />
        <PrincipleSection />
        <EarlyAccessCTA />
      </main>
      <Footer />
    </div>
  );
};

export default IndexV2;
