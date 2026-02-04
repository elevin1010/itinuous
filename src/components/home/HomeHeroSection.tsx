import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import facesTopographic from '@/assets/faces-topographic.png';

const HomeHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const faceY = useTransform(scrollY, [0, 500], [0, -30]);
  const faceScale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const faceOpacity = useTransform(scrollY, [0, 300], [0.18, 0.08]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-[100px]" />
      
      {/* Topographic faces - atmospheric background */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ 
          y: faceY, 
          scale: faceScale,
          opacity: faceOpacity 
        }}
      >
        <img 
          src={facesTopographic} 
          alt="" 
          className="w-full max-w-4xl h-auto object-contain mix-blend-screen"
          aria-hidden="true"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Primary headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient-gold">Verify once.</span>
            <br />
            <span className="text-foreground">Prove forever.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
            Intinuous Proof creates a private identity certificate and a public proof page — without exposing your personal data.
          </p>

          {/* Qualifier */}
          <p className="text-base text-muted-foreground/80 max-w-2xl mb-8">
            This isn't about looking real. It's about being verifiably the same person over time.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
              asChild
            >
              <a href="mailto:hello@intinuous.com?subject=Start%20Verification">
                Start Verification
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection('how-it-works')}
            >
              See how it works
            </Button>
          </div>

          {/* Reassurance + Process clarity */}
          <div className="space-y-2 text-sm text-muted-foreground/70">
            <p>Your personal data stays private by default.</p>
            <p>You'll be guided through a one-time identity check, then receive your private certificate.</p>
          </div>
        </motion.div>
      </div>

      {/* Anchored brand name */}
      <div className="absolute bottom-8 left-0 right-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center"
        >
          <span 
            className="text-foreground font-bold tracking-tighter"
            style={{ 
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              lineHeight: 0.85,
              letterSpacing: '-0.03em'
            }}
          >
            INTINUOUS PROOF
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
