import { motion } from 'framer-motion';
import { UserCheck, FileKey, Share2 } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    step: 'STEP 1',
    title: 'Verify once',
    description: 'Complete a one-time identity check with a secure third-party verification provider.',
  },
  {
    icon: FileKey,
    step: 'STEP 2',
    title: 'Receive your private certificate',
    description: 'Your verified data is stored securely and tied to a single Intinuous record.',
  },
  {
    icon: Share2,
    step: 'STEP 3',
    title: 'Share proof when needed',
    description: 'Use your public proof page or QR code to demonstrate verification — without sharing personal data.',
  },
];

const HomeHowItWorksSection = () => {
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
          className="text-center mb-16"
        >
          <span className="badge-pill inline-block mb-6">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Three steps to <span className="text-emphasis-italic">permanent</span> proof
          </h2>
        </motion.div>

        {/* Steps - horizontal on desktop, vertical on mobile */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="landio-card p-8 text-center relative"
              >
                {/* Step badge */}
                <span className="badge-pill inline-block mb-6 text-primary">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (hidden on mobile and last item) */}
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
            className="text-center mt-16 space-y-3"
          >
            <p className="text-xl text-foreground font-semibold">That's it.</p>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              <span>No recurring re-verification.</span>
              <span className="hidden md:inline">•</span>
              <span>No screenshots.</span>
              <span className="hidden md:inline">•</span>
              <span>No "trust me bro."</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorksSection;
