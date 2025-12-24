import { motion } from 'framer-motion';

const CreatorsWhyEarlySection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      {/* Subtle ambient element */}
      <motion.div
        animate={{ opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 11, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px]"
      />

      <div className="container relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-primary/70 mb-6 font-medium">
            Why Actors Early
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Why performers are{' '}
            <span className="text-gradient-gold">early</span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed mb-8">
            Performers are among the first whose identity has direct economic value — and among the first to feel{' '}
            <span className="text-foreground">generative substitution.</span>
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-primary/5 border border-primary/20 rounded-xl"
          >
            <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
              What happens here will likely shape how{' '}
              <span className="text-gradient-gold">permission works for everyone else.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorsWhyEarlySection;
