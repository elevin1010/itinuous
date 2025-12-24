import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CreatorsShiftSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
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

      <div className="container relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary/70 mb-6 font-medium">
            The Shift
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            The rules changed —{' '}
            <span className="text-muted-foreground">quietly</span>
          </h2>
        </motion.div>

        {/* Content blocks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8 text-center"
        >
          <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed max-w-3xl mx-auto">
            For most of your career, control came from contracts, unions, and distribution channels.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            Those systems worked because identity was scarce and hard to copy.
            <br />
            If someone wanted you, they had to hire you.
          </p>

          {/* Key statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="py-8"
          >
            <p className="text-2xl md:text-3xl text-gradient-gold font-light">
              AI removed that scarcity.
            </p>
          </motion.div>

          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            Today, a system doesn't need to copy you exactly to stand in for you — it just needs to be convincing enough to be accepted.
          </p>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 p-8 md:p-10 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl"
          >
            <p className="text-xl md:text-2xl text-foreground font-light">
              You don't need to be copied to be{' '}
              <span className="text-gradient-gold">replaced.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorsShiftSection;
