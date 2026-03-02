import { motion } from 'framer-motion';

const InfraSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0.3, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="badge-pill inline-block mb-6">Vision</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            The beginning of a <span className="text-emphasis-italic">permission layer.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Intinuous launches as a portable identity attestation for individuals. It's designed for what follows. As AI platforms develop permission systems, as agencies standardize likeness documentation, as contracts increasingly reference identity attestation — an independent, portable record becomes the missing layer. We're building that infrastructure now, starting with the people who understand why it matters before everyone else does.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfraSection;
