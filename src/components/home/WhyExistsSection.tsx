import { motion } from 'framer-motion';

const WhyExistsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="badge-pill inline-block mb-8">
            Why This Exists
          </span>

          {/* Quote-style headline */}
          <blockquote className="mb-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              "Looking real isn't proof.{' '}
              <span className="text-emphasis-italic">Continuity is.</span>"
            </p>
          </blockquote>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              AI, deepfakes, and synthetic media have made appearance meaningless. 
              What matters now is whether an identity can be re-proven without being re-exposed.
            </p>
            
            <p className="text-foreground font-medium">
              Intinuous Proof exists to solve that exact problem.
            </p>
          </div>

          {/* Social proof hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground/60 italic">
              Used by professionals, creators, and organizations who need identity continuity — not visibility.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyExistsSection;
