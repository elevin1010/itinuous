import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      {/* Subtle glow - top */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-muted/20 via-transparent to-transparent" />
      
      {/* Ambient orbs */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-muted/20 via-transparent to-transparent rounded-full blur-[100px]"
      />
      
      {/* Decorative geometric elements */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-1/2 h-full opacity-20"
      >
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-muted-foreground/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 border border-muted-foreground/15" />
      </motion.div>

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
            Identity has become
            <br />
            <span className="text-muted-foreground">an attack surface</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI does not need to recreate a specific person to replace them. "Looking real" is no longer meaningful. The issue is not fakes — it is the absence of continuity.
          </p>
        </motion.div>

        {/* Core insight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-10 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed text-center">
              There is no authoritative way to determine who is allowed to stand in for whom, or whether an identity today is the same entity as yesterday.
            </p>
            
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </div>
        </motion.div>

        {/* Dividing line with message */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 flex items-center gap-8"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <p className="text-muted-foreground font-mono text-sm whitespace-nowrap">
            A different frame is required
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
