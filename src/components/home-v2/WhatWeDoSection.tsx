import { motion } from 'framer-motion';
import { UserCheck, FileKey, Share2 } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    number: '01',
    title: 'Verify once',
    description: 'Complete a one-time identity verification against a trusted third-party provider.',
  },
  {
    icon: FileKey,
    number: '02',
    title: 'Receive your record',
    description: 'You get a tamper-resistant private certificate and a public attestation page — a timestamped, referenceable proof that you are the original.',
  },
  {
    icon: Share2,
    number: '03',
    title: 'Use it where it matters',
    description: 'Embed it in your bio. Reference it in contracts. Share it when authenticity is questioned. Present it in disputes. Establish the original before it becomes contested.',
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0.3, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="badge-pill inline-block mb-6">What Intinuous Does</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Verify once. Own the <span className="text-emphasis-italic">record.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Intinuous creates a permanent, tamper-resistant attestation of your verified identity — cryptographically anchored, timestamped, and independent of any platform.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            It's not a social profile. It's not a blue check. It's a portable proof of origin — the kind of documented record that existed for trademarks, titles, and contracts long before AI made it necessary for individuals.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0.3, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="landio-card p-8 text-center relative"
              >
                <span className="text-4xl font-bold text-primary/20 mb-4 block">
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
