import { motion } from 'framer-motion';

const WhatIsSection = () => {
  const antiFeatures = [
    'No social graph.',
    'No scraping.',
    'No biometric marketplace.',
    'No data resale.',
  ];

  return (
    <section id="what-is" className="py-24 md:py-32 relative">
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
            What Is Intinuous Proof
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            An <span className="text-emphasis-italic">identity continuity</span> layer.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            You verify yourself once, we anchor that verification to a single record, 
            and you can prove that record exists — again and again — without re-exposing sensitive information.
          </p>

          {/* Anti-features grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {antiFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="landio-card p-4"
              >
                <span className="text-sm text-muted-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Closer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-emphasis-italic"
          >
            Just proof.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
