import { motion } from 'framer-motion';

const TheGapSection = () => {
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
          <span className="badge-pill inline-block mb-6">The Gap</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            There's no authoritative record of <span className="text-emphasis-italic">you.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Right now, if your face appears somewhere it shouldn't — in an ad, a deepfake, a generated video — you have screenshots. You have social profiles. You have your word.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            None of that holds up the way documented proof does.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            There is no cross-platform record that links your verified identity to your likeness. No timestamped claim of prior ownership. No portable proof that travels with you independent of any single platform.
          </p>

          {/* Callout quote block */}
          <motion.blockquote
            initial={{ opacity: 0.3, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-l-2 border-primary/40 pl-6 py-2 my-8"
          >
            <p className="text-lg md:text-xl text-foreground font-medium italic leading-relaxed">
              A watermark protects a file. It doesn't protect the person behind it.
            </p>
          </motion.blockquote>

          <p className="text-lg text-muted-foreground leading-relaxed">
            That's the gap Intinuous fills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TheGapSection;
