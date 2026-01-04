import { motion } from 'framer-motion';

const RoadmapSection = () => {
  return (
    <section id="vision" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-transparent to-transparent" />

      <div className="container relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-20%" }}
          className="text-center space-y-12"
        >
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
            <span className="text-gradient-gold">Vision</span>
          </h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              Intinuous begins with human identity — the most abused and emotionally charged surface — and expands naturally to voices, bodies, and persistent digital entities.
            </p>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              As synthetic entities become persistent, they too require <span className="text-gradient-gold">continuity</span>, <span className="text-primary">revocation</span>, and <span className="text-foreground">authority</span>.
            </p>

            <div className="pt-4">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light">
                Intinuous becomes infrastructure for any entity that must persist across time.
              </p>
            </div>

            {/* Market callout */}
            <motion.div
              initial={{ opacity: 0.3, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-20%" }}
              className="mt-8 p-6 md:p-8 bg-gradient-to-br from-primary/5 via-card/30 to-transparent border border-primary/20 rounded-lg"
            >
              <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
                Industry analysts project AI-enabled identity abuse and related mitigation markets to grow into a{' '}
                <span className="text-primary font-medium">multi-billion-dollar category</span>{' '}
                this decade.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
