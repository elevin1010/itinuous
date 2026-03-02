import { motion } from 'framer-motion';

const TheMomentSection = () => {
  return (
    <section id="the-moment" className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0.3, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="badge-pill inline-block mb-6">The Moment</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            It's not coming. It's <span className="text-emphasis-italic">here.</span>
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
            AI has reduced the cost of replicating a person's face, voice, and likeness to near zero. It's already happening to actors, creators, executives, and ordinary people whose image carries value online.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The celebrities who can afford lawyers are trademarking their identity. SAG-AFTRA is negotiating contracts. Legislation is moving — slowly.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Everyone else is waiting.
          </p>

          <motion.p
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-gradient-gold"
          >
            Waiting is no longer a neutral position.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TheMomentSection;
