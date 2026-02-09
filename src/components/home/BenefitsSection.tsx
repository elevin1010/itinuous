import { motion } from 'framer-motion';
import { Shield, Globe, Link, Eye } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Private Certificate',
    description: 'Your full identity certificate lives behind login. Optionally includes legal name, birthdate, and a photo — never public by default.',
  },
  {
    icon: Globe,
    title: 'Public Proof Page',
    description: 'A non-PII proof page and QR code you can share anywhere. It confirms that a verified record exists, not who you are.',
  },
  {
    icon: Link,
    title: 'Continuity Over Time',
    description: 'Identity isn\'t a snapshot. Your proof links back to the same underlying record every time — today, next year, five years from now.',
  },
  {
    icon: Eye,
    title: 'You Control Exposure',
    description: 'You decide what\'s revealed, when, and to whom. Nothing is exposed automatically. Ever.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-pill inline-block mb-6">
            Core Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Built for <span className="text-emphasis-italic">privacy-first</span> identity
          </h2>
        </motion.div>

        {/* Bento grid with slide animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ 
                opacity: 0.3, 
                x: index % 2 === 0 ? -25 : 25,
                y: 15 
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="landio-card p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
