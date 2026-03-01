import { motion } from 'framer-motion';
import { UserCheck, FileKey, Share2 } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    number: '01',
    title: 'Verify once',
    description: 'Complete a one-time identity verification. Your data is confirmed against a trusted third-party provider.',
  },
  {
    icon: FileKey,
    number: '02',
    title: 'Receive your key',
    description: 'Your verified identity is anchored to a single Intinuous record. You receive a private certificate and a public proof page — yours permanently.',
  },
  {
    icon: Share2,
    number: '03',
    title: 'Share proof when it matters',
    description: 'Use your public proof page or QR code to demonstrate verification without re-exposing personal information. Challenge unauthorized use. Establish the original.',
  },
];

const HomeSolutionSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-[100px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="badge-pill inline-block mb-6">
            What Intinuous Does
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            One verified record. One key. <span className="text-emphasis-italic">Yours to control.</span>
          </h2>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Intinuous creates a permanent, tamper-resistant record of your verified identity — anchored cryptographically, tied to you, and independent of any single platform.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Think of it as a key to your own likeness. When your identity appears, you have a documented, timestamped way to prove it's yours.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="landio-card p-8 text-center relative"
              >
                {/* Step number */}
                <span className="text-4xl font-bold text-primary/20 mb-4 block">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border/50" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Closer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-sm text-muted-foreground/70 italic">
              No recurring re-verification. No screenshots. No "trust me."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutionSection;
