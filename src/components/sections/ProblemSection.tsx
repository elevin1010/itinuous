import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      {/* Subtle ambient element */}
      <motion.div
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-muted/15 via-transparent to-transparent rounded-full blur-[120px]"
      />
      
      {/* Decorative geometric elements */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
      >
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-muted-foreground/20 rounded-full" />
      </motion.div>

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            Identity has become
            <br />
            <span className="text-muted-foreground">an attack surface</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            AI does not need to recreate a specific person to replace them. "Looking real" is no longer meaningful. The issue is not fakes — it is the absence of continuity.
          </p>
        </motion.div>

        {/* Core insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative p-12 md:p-16 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-center font-light">
              There is no authoritative way to determine who is allowed to stand in for whom, or whether an identity today is the same entity as yesterday.
            </p>
          </div>
        </motion.div>

        {/* Dividing line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 flex items-center gap-10"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          <p className="text-muted-foreground/70 text-sm tracking-wide">
            A different frame is required
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
