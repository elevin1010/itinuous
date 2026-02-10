import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import intinuousMark from '@/assets/intinuous-mark.png';

const HomeHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section ref={sectionRef} style={{ opacity }} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Atmospheric gold glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[80px]" />
      
      {/* Content */}
      <div className="container relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img 
              src={intinuousMark} 
              alt="Intinuous" 
              className="w-12 h-12 mx-auto"
            />
          </motion.div>

          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <span className="badge-pill inline-block">
              Identity Continuity Layer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="text-foreground">There's only one </span>
            <span className="text-primary">YOU.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Intinuous Proof creates a private identity certificate and a public proof page that help you prove what's real in the age of AI.
          </motion.p>

          {/* Extended context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-xl mx-auto mb-10"
          >
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                As generative AI advances, traditional signals of identity are no longer reliable. Intinuous establishes verifiable digital proof that gives individuals and organizations a trusted reference point for what's real. Built for privacy and permanence, it's digital proof for a generative era.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2 glow-gold px-8"
              asChild
            >
              <a href="mailto:hello@intinuous.com?subject=Start%20Verification">
                Start Verification
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-muted-foreground hover:text-foreground rounded-full"
              onClick={() => scrollToSection('how-it-works')}
            >
              See how it works
            </Button>
          </motion.div>

          {/* Reassurance */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-muted-foreground/60"
          >
            Your personal data stays private by default.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button 
          onClick={() => scrollToSection('what-is')}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-scroll-indicator" />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default HomeHeroSection;
