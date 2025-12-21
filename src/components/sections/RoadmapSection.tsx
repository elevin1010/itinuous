import { motion } from 'framer-motion';

const RoadmapSection = () => {
  return (
    <section id="vision" className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-transparent to-transparent" />

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            <span className="text-gradient-gold">Vision</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            The inevitable trajectory of identity infrastructure
          </p>
        </motion.div>

        {/* Vision content */}
        <div className="space-y-12">
          {/* Initial focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative p-10 md:p-12 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl">
              <div className="flex items-center gap-6 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <span className="text-xs text-primary/80 uppercase tracking-[0.2em] font-light">Initial Focus</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
              </div>
              <p className="text-lg md:text-xl text-foreground/80 text-center leading-relaxed font-light">
                Intinuous begins with human identity — the most abused and emotionally charged surface — and expands naturally to voices, bodies, and persistent digital entities.
              </p>
            </div>
          </motion.div>

          {/* Future vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative p-12 md:p-16 bg-card/60 backdrop-blur-sm border border-primary/20 rounded-xl">
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 text-center leading-relaxed mb-8">
                "As synthetic entities become persistent, they too require <span className="text-gradient-gold">continuity</span>, <span className="text-primary">revocation</span>, and <span className="text-foreground">authority</span>."
              </blockquote>
              <p className="text-lg text-muted-foreground text-center font-light">
                Intinuous becomes infrastructure for any entity that must persist across time.
              </p>

              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-5 right-5 w-6 h-px bg-primary/30" />
                <div className="absolute top-5 right-5 w-px h-6 bg-primary/30" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16">
                <div className="absolute bottom-5 left-5 w-6 h-px bg-primary/30" />
                <div className="absolute bottom-5 left-5 w-px h-6 bg-primary/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
