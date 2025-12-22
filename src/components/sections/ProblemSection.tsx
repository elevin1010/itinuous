import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);
  return <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      {/* Subtle ambient element */}
      <motion.div animate={{
      opacity: [0.03, 0.06, 0.03]
    }} transition={{
      duration: 8,
      repeat: Infinity
    }} className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-muted/15 via-transparent to-transparent rounded-full blur-[120px]" />
      
      {/* Decorative geometric elements */}
      <motion.div style={{
      y
    }} className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-muted-foreground/20 rounded-full" />
      </motion.div>

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: "easeOut"
      }} viewport={{
        once: true,
        margin: "-100px"
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            Identity has become
            <br />
            <span className="text-muted-foreground">an attack surface</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light mb-8">AI does not need to recreate a specific person to replace them. "Looking real" is no longer meaningful — even when your image appears authentic. The issue is not fakes, it is the absence of continuity.</p>
          
          <div className="text-left max-w-2xl mx-auto">
            <p className="text-lg text-foreground/80 font-light mb-4">
              There is no authoritative way to determine:
            </p>
            <ul className="text-lg text-muted-foreground font-light space-y-2 mb-6 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-primary/60 mt-2">•</span>
                <span>who is allowed to stand in for whom, or</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary/60 mt-2">•</span>
                <span>whether an identity today is the same entity as yesterday.</span>
              </li>
            </ul>
            <p className="text-lg text-foreground/70 font-light">
              That gap breaks trust across labor, platforms, and institutions.
            </p>
          </div>

          {/* Stats callout */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="mt-10 p-6 md:p-8 bg-gradient-to-br from-destructive/5 via-card/30 to-transparent border border-destructive/20 rounded-lg">
            <p className="text-sm uppercase tracking-widest text-destructive/70 mb-3 font-medium">
              The shift is already measurable
            </p>
            <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
              Deepfake-enabled impersonation and identity fraud have increased by{' '}
              <span className="text-destructive font-medium">thousands of percent</span>{' '}
              in recent years, with losses projected in the{' '}
              <span className="text-destructive font-medium">tens of billions of dollars</span>{' '}
              globally.
            </p>
          </motion.div>
        </motion.div>

        {/* Core insight - What remains scarce */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true,
        margin: "-50px"
      }}>
          <div className="relative p-12 md:p-16 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-center font-light mb-8">
              What remains scarce is a <span className="text-gradient-gold">persistent identity</span> with:
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <div className="flex-1 p-5 bg-primary/5 border border-primary/20 rounded-lg text-center">
                <span className="text-lg md:text-xl text-foreground font-medium">verifiable origin</span>
              </div>
              <div className="flex-1 p-5 bg-primary/5 border border-primary/20 rounded-lg text-center">
                <span className="text-lg md:text-xl text-foreground font-medium">recognized authority</span>
              </div>
              <div className="flex-1 p-5 bg-primary/5 border border-primary/20 rounded-lg text-center">
                <span className="text-lg md:text-xl text-foreground font-medium">accountable history</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dividing line */}
        <motion.div initial={{
        scaleX: 0,
        opacity: 0
      }} whileInView={{
        scaleX: 1,
        opacity: 1
      }} transition={{
        duration: 1.2,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="mt-20 flex items-center gap-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          <p className="text-muted-foreground/70 text-sm tracking-wide">
            A different frame is required
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border/50 to-transparent" />
        </motion.div>
      </div>
    </section>;
};
export default ProblemSection;