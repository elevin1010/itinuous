import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const isItems = [
  'A user-owned proof layer',
  'Private and verifiable without re-exposure',
  'Permanent identity continuity you control',
  'Infrastructure, not a platform',
];

const isntItems = [
  'Not a social profile',
  'Not a KYC resale business',
  'Not biometric surveillance',
  'Not data harvesting',
];

const ClarificationSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Your identity is not <span className="text-emphasis-italic">content.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-16"
        >
          Intinuous is built on one principle: your data belongs to you. We don't sell it, share it, or build a profile from it.
        </motion.p>

        {/* Comparison columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* IS column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="landio-card p-8"
          >
            <h3 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
              <Check className="w-5 h-5" />
              What Intinuous IS
            </h3>
            <ul className="space-y-4">
              {isItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ISN'T column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="landio-card p-8"
          >
            <h3 className="text-lg font-semibold text-muted-foreground mb-6 flex items-center gap-2">
              <X className="w-5 h-5" />
              What It ISN'T
            </h3>
            <ul className="space-y-4">
              {isntItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClarificationSection;
