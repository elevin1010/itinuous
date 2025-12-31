import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CreatorsCTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Animated gold orb */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-[100px]"
      />

      <div className="container relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-primary/70 mb-6 font-medium">
            Close
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            We're early —{' '}
            <span className="text-gradient-gold">and listening</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed font-light">
            This is a private preview.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            If you're an actor or performer and want to share perspective — concerns, edge cases, or hard questions — we'd value your input.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-base font-medium tracking-wide"
              onClick={() => window.location.href = 'mailto:hello@intinuous.com?subject=Conversation%20Request%20-%20Creator'}
            >
              Request a conversation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorsCTASection;
