import { motion } from 'framer-motion';

const WhyExistsSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-[100px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Why This Exists
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
            <p className="text-foreground font-medium text-xl md:text-2xl">
              Looking real isn't proof. Continuity is.
            </p>
            
            <p>
              AI, deepfakes, and synthetic media have made appearance meaningless. 
              What matters now is whether an identity can be re-proven without being re-exposed.
            </p>
            
            <p>
              Intinuous Proof exists to solve that exact problem.
            </p>
          </div>

          {/* Implicit social proof */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-sm text-muted-foreground/60 italic"
          >
            Used by professionals, creators, and organizations who need identity continuity — not visibility.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyExistsSection;
