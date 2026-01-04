import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Clock, Eye, FileSearch } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Registration under Authority",
    description: "Identity assets are registered under clear, defined authority with verified provenance.",
  },
  {
    number: "02",
    icon: Clock,
    title: "Continuity over Time",
    description: "Persistent identity is maintained and anchored across time, creating an accountable history.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Attribution and Observation",
    description: "Usage and representation are observed and attributed to authorized parties.",
  },
  {
    number: "04",
    icon: FileSearch,
    title: "Evidence when Questions Arise",
    description: "When disputes occur, evidence is produced to support evaluation and resolution.",
  }
];

const HowItWorksSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/15 to-transparent" />
      
      {/* Ambient orb */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-[120px]" />

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-20%" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            A conceptual framework for identity continuity
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[1.75rem] top-0 bottom-0 w-px bg-border/20 hidden md:block">
            <motion.div
              style={{ scaleY: lineProgress }}
              className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20 origin-top"
            />
          </div>

          {/* Step cards */}
          <div className="space-y-14">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0.3, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-20%" }}
                className="relative flex gap-8"
              >
                {/* Step indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0.3 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true, margin: "-20%" }}
                    className="w-14 h-14 rounded-xl bg-card/70 border border-primary/20 flex items-center justify-center"
                  >
                    <step.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="text-xs text-primary/70 mb-3 tracking-[0.15em] uppercase font-light">
                    Step {step.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
