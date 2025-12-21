import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const RoadmapSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="vision" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-transparent to-transparent" />

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
            <span className="text-gradient-gold">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The inevitable trajectory of identity infrastructure
          </p>
        </motion.div>

        {/* Vision content */}
        <div className="max-w-4xl mx-auto">
          {/* Initial focus */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-16"
          >
            <div className="relative p-8 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <span className="text-sm font-mono text-primary uppercase tracking-widest">Initial Focus</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
              </div>
              <p className="text-xl text-foreground/90 text-center leading-relaxed">
                Intinuous begins with human identity — the most abused and emotionally charged surface — and expands naturally to voices, bodies, and persistent digital entities.
              </p>
            </div>
          </motion.div>

          {/* Future vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative p-10 bg-card/70 backdrop-blur-sm border border-primary/30 rounded-lg glow-gold">
              <blockquote className="text-2xl md:text-3xl font-light text-foreground text-center leading-relaxed mb-6">
                "As synthetic entities become persistent, they too require <span className="text-gradient-gold font-medium">continuity</span>, <span className="text-primary font-medium">revocation</span>, and <span className="text-foreground font-medium">authority</span>."
              </blockquote>
              <p className="text-lg text-muted-foreground text-center">
                Intinuous becomes infrastructure for any entity that must persist across time.
              </p>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-4 right-4 w-8 h-px bg-primary/50" />
                <div className="absolute top-4 right-4 w-px h-8 bg-primary/50" />
              </div>
              <div className="absolute bottom-0 left-0 w-20 h-20">
                <div className="absolute bottom-4 left-4 w-8 h-px bg-primary/50" />
                <div className="absolute bottom-4 left-4 w-px h-8 bg-primary/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
