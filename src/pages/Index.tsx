import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import PillarsSection from '@/components/sections/PillarsSection';
import SolutionSection from '@/components/sections/SolutionSection';
import AudienceSection from '@/components/sections/AudienceSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ProductModulesSection from '@/components/sections/ProductModulesSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <section id="solution">
          <PillarsSection />
          <SolutionSection />
        </section>
        <section id="audience">
          <AudienceSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <ProductModulesSection />
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