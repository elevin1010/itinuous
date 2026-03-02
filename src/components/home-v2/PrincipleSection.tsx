import { motion } from 'framer-motion';

const PrincipleSection = () => {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Your identity is not <span className="text-emphasis-italic">content.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto space-y-6 text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Intinuous is built on one principle: your data belongs to you. We don't sell it, share it, or build a profile from it. We create a record that you own and control.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            This is infrastructure, not a platform. A proof layer, not a marketplace.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipleSection;
