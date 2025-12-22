import { motion } from 'framer-motion';

const RoadmapSection = () => {
  return (
    <section id="vision" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-transparent to-transparent" />

      <div className="container relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
