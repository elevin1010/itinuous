import { motion } from 'framer-motion';

const WhatIsSection = () => {
  const antiFeatures = [
    'No social graph.',
    'No scraping.',
    'No biometric marketplace.',
    'No data resale.',
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Intinuous Proof is an identity continuity layer.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            You verify yourself once, we anchor that verification to a single record, 
            and you can prove that record exists — again and again — without re-exposing sensitive information.
          </p>

          {/* Anti-features */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {antiFeatures.map((feature, index) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-muted-foreground/80 text-sm md:text-base"
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Closer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-gradient-gold"
          >
            Just proof.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
