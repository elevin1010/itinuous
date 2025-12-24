import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Link, Shield, FileSearch } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Registration",
    description: "Your identity assets are registered under clear authority."
  },
  {
    icon: Link,
    title: "Continuity",
    description: "That authority persists across time, not tied to one project or contract."
  },
  {
    icon: Shield,
    title: "Authorization",
    description: "Approved uses are recorded and attributable."
  },
  {
    icon: FileSearch,
    title: "Evidence",
    description: "When questions arise, there's a neutral record to point to."
  }
];

const CreatorsHowItWorksSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-transparent to-card/10" />
      
      {/* Ambient orb */}
      <motion.div
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[120px]"
      />

      <div className="container relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-primary/70 mb-6 font-medium">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            How it{' '}
            <span className="text-gradient-gold">works</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-2xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border/30 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20"
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-start gap-6 md:gap-8"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-card border border-border/50 flex items-center justify-center relative z-10">
                  <step.icon className="w-7 h-7 text-primary/80" />
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-20"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            No marketplace pressure.
            <br />
            No forced licensing.
            <br />
            <span className="text-foreground">Just clarity.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorsHowItWorksSection;
