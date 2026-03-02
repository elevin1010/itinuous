import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import intinuousMark from '@/assets/intinuous-mark.png';
import intinuousText from '@/assets/intinuous-text.png';

const HeroV2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <motion.section ref={sectionRef} style={{ opacity }} className="relative min-h-screen flex flex-col justify-center pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[80px]" />

      <div className="container relative z-10 pt-32 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img src={intinuousMark} alt="Intinuous" className="w-12 h-12 mx-auto" />
            <img src={intinuousText} alt="Intinuous" className="h-6 mx-auto mt-4" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            <span className="text-gradient-gold">Own yourself.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            In the age of generative AI, your voice, your face, your likeness — can be replicated in minutes, without your permission, before you've said a word.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Matthew McConaughey trademarked his. Most people can't do that.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Intinuous is how everyone else establishes the original.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-6 mb-6"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2 glow-gold px-8"
              asChild
            >
              <Link to="/contact">
                Request Early Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-muted-foreground/60"
          >
            Private by default · No data resale · No biometric marketplace
          </motion.p>

          {/* Scroll indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => document.getElementById('the-moment')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 mx-auto flex flex-col items-center gap-2 cursor-pointer group"
            aria-label="Scroll down"
          >
            <span className="text-xs text-muted-foreground/50 uppercase tracking-widest group-hover:text-muted-foreground transition-colors">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-muted-foreground rotate-90 transition-colors" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroV2;
