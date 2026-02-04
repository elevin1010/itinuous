import { motion } from 'framer-motion';
import { UserCheck, FileKey, Share2 } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    number: '01',
    title: 'Verify once',
    description: 'Complete a one-time identity check with a secure third-party verification provider.',
  },
  {
    icon: FileKey,
    number: '02',
    title: 'Receive your private certificate',
    description: 'Your verified data is stored securely and tied to a single Intinuous record.',
  },
  {
    icon: Share2,
    number: '03',
    title: 'Share proof when needed',
    description: 'Use your public proof page or QR code to demonstrate verification — without sharing personal data.',
  },
];

const HomeHowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center md:text-left"
              >
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-primary/60 mb-2">{step.number}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-2"
          >
            <p className="text-lg text-foreground font-medium">That's it.</p>
            <p className="text-muted-foreground">No recurring re-verification.</p>
            <p className="text-muted-foreground">No screenshots.</p>
            <p className="text-muted-foreground">No "trust me bro."</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorksSection;
