import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Clock, Eye, FileSearch } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Registration under Authority",
    description: "Identity assets are registered under clear, defined authority with verified provenance.",
    details: "Established origin and ownership"
  },
  {
    number: "02",
    icon: Clock,
    title: "Continuity over Time",
    description: "Persistent identity is maintained and anchored across time, creating an accountable history.",
    details: "Verifiable persistence"
  },
  {
    number: "03",
    icon: Eye,
    title: "Attribution and Observation",
    description: "Usage and representation are observed and attributed to authorized parties.",
    details: "Ongoing monitoring"
  },
  {
    number: "04",
    icon: FileSearch,
    title: "Evidence when Questions Arise",
    description: "When disputes occur, evidence is produced to support evaluation and resolution.",
    details: "Escalation support"
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
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      {/* Ambient orb */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/6 via-transparent to-transparent rounded-full blur-[100px]" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A conceptual framework for identity continuity
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-border/30 hidden md:block">
            <motion.div
              style={{ scaleY: lineProgress }}
              className="absolute inset-0 bg-gradient-to-b from-primary via-primary/70 to-primary origin-top"
            />
          </div>

          {/* Step cards */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex gap-8"
              >
                {/* Step indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-[4.5rem] h-[4.5rem] rounded-xl bg-card/80 border border-primary/30 flex items-center justify-center glow-gold"
                  >
                    <step.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="text-sm font-mono text-primary mb-2">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border/50 rounded-full">
                    <span className="text-sm font-mono text-primary">{step.details}</span>
                  </div>
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
