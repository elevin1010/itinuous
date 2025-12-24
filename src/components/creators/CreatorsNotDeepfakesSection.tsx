import { motion } from 'framer-motion';

const examples = [
  "A voice model trained near your sound",
  "A digital double licensed through a third party",
  "A performance \"in your style\" attributed to you",
  "A game, ad, or training system using a stand-in version of you"
];

const CreatorsNotDeepfakesSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-transparent to-card/10" />
      
      {/* Subtle ambient element */}
      <motion.div
        animate={{ opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px]"
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
            Not Deepfakes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            This isn't about{' '}
            <span className="text-muted-foreground">deepfakes</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            This isn't primarily a problem of fake videos or obvious impersonation.
          </p>
        </motion.div>

        {/* It's things like */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <p className="text-lg text-foreground/80 font-light mb-8 text-center">
            It's things like:
          </p>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-card/30 border border-border/20 rounded-lg"
              >
                <span className="text-primary/60 mt-0.5">•</span>
                <span className="text-lg text-foreground/80 font-light">{example}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center space-y-6"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            None of these rely on deception.
            <br />
            They rely on <span className="text-foreground">missing permission records.</span>
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl"
          >
            <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
              The issue isn't whether something is fake — it's whether there's a{' '}
              <span className="text-gradient-gold">provable record of authorization.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorsNotDeepfakesSection;
