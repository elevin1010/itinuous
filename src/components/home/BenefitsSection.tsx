import { motion } from 'framer-motion';
import { Shield, Fingerprint, ShieldAlert, Target, Lock, Scan } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Create permanent proof of who you are',
    description: 'Your identity is verified once and registered in a tamper-resistant system that can\'t be quietly changed or erased.',
  },
  {
    icon: Fingerprint,
    title: 'Establish clear ownership of your identity',
    description: 'Create a trusted reference point that shows you are the original, verified individual — not just someone who looks real online.',
  },
  {
    icon: ShieldAlert,
    title: 'Protect against unauthorized use of your likeness',
    description: 'Use verifiable proof to challenge or deter fake images, video, or voice created without your consent.',
  },
  {
    icon: Target,
    title: 'One identity, one source of truth',
    description: 'Your verification is anchored to a single record you can reference whenever proof is requested.',
  },
  {
    icon: Lock,
    title: 'Private by default, shareable when needed',
    description: 'Receive a private identity certificate and a public proof page that confirms verification without exposing personal details.',
  },
  {
    icon: Scan,
    title: 'A unique digital signature you control',
    description: 'Each verification includes a unique visual signature and ID that others can independently confirm.',
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
