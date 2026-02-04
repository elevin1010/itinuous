import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const clarifications = [
  { isPositive: false, text: 'Not a social profile' },
  { isPositive: false, text: 'Not a KYC resale business' },
  { isPositive: false, text: 'Not biometric surveillance' },
  { isPositive: true, text: 'A user-owned proof layer' },
];

const ClarificationSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What This Is — and Isn't
          </h2>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <ul className="space-y-4 mb-12">
            {clarifications.map((item, index) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.isPositive 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {item.isPositive ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                </div>
                <span className={`text-lg ${
                  item.isPositive 
                    ? 'text-foreground font-medium' 
                    : 'text-muted-foreground'
                }`}>
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Thesis closer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center border-t border-border/50 pt-8"
          >
            <p className="text-lg md:text-xl text-foreground font-medium">
              Your identity is not content.
            </p>
            <p className="text-lg md:text-xl text-gradient-gold font-medium">
              It's infrastructure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClarificationSection;
