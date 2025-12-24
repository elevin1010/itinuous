import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  "A clear record of authorized uses of your face and voice",
  "Evidence when your likeness is used without permission",
  "A way to license digital use without losing control",
  "Leverage in conversations with studios, platforms, and agencies",
  "Future-proofing as AI-driven production expands"
];

const CreatorsValueSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-transparent to-card/10" />
      
      {/* Subtle ambient element */}
      <motion.div
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px]"
      />

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
            Value
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            What this{' '}
            <span className="text-gradient-gold">gives you</span>
          </h2>
        </motion.div>

        {/* Benefits list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <div className="space-y-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-card/30 border border-border/20 rounded-lg"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-lg text-foreground/80 font-light">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            This isn't about stopping technology.
            <br />
            It's about making <span className="text-foreground">permission legible</span> when questions arise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorsValueSection;
