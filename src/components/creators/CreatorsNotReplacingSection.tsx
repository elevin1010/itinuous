import { motion } from 'framer-motion';

const notReplacing = [
  "SAG or other unions",
  "Agents or managers",
  "Lawyers or contracts"
];

const CreatorsNotReplacingSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />

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
            Not Replacing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            What this{' '}
            <span className="text-muted-foreground">doesn't change</span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <p className="text-lg text-foreground/80 font-light mb-8">
            Intinuous doesn't replace:
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {notReplacing.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-card/50 border border-border/30 rounded-full"
              >
                <span className="text-lg text-foreground/70 font-light">{item}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground font-light mb-8">
            Those systems negotiate terms.
          </p>

          {/* Key distinction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl"
          >
            <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
              Intinuous supports them by making{' '}
              <span className="text-gradient-gold">authorization verifiable</span>{' '}
              outside any single studio, vendor, or platform.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorsNotReplacingSection;
