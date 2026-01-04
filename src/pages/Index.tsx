import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ProductModulesSection from '@/components/sections/ProductModulesSection';
import AudienceSection from '@/components/sections/AudienceSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import SectionDivider from '@/components/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider showChevron />
        <section id="the-shift">
          <ProblemSection />
        </section>
        <SectionDivider />
        <section id="solution">
          <SolutionSection />
        </section>
        <SectionDivider />
        <section id="audience">
          <AudienceSection />
        </section>
        <SectionDivider />
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <SectionDivider />
        <ProductModulesSection />
        <SectionDivider />
        <section id="roadmap">
          <RoadmapSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;