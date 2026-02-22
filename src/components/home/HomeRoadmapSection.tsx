import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const currentFeatures = [
  'One-time verification',
  'Private certificate',
  'Public proof page + QR code',
  'Manual sharing',
];

const futureFeatures = [
  {
    title: 'Likeness Keys for AI Systems',
    description: 'A permission layer designed for the way AI actually works — so generative models can ask before they generate, and rights holders have a technical mechanism to say yes or no.',
    highlight: true,
  },
  {
    title: 'Credential Stacking',
    description: 'Attach future validations to your existing record without starting over. One identity, growing over time.',
    highlight: false,
  },
  {
    title: 'Legacy & Estate Management',
    description: 'Set rules for how your identity is handled after you\'re gone. A foundation for long-term identity control that current platforms don\'t offer.',
    highlight: false,
  },
  {
    title: 'Organizational Verification',
    description: 'Tools for agencies, studios, and enterprises to manage identity continuity at scale.',
    highlight: false,
  },
];

const HomeRoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-pill inline-block mb-6">
            What's Coming
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Built deliberately. Expanding with <span className="text-emphasis-italic">purpose.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Version 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="landio-card p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Version 1 — Launching Soon
            </h3>
            <ul className="space-y-4">
              {currentFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* On the roadmap */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="landio-card p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              On the roadmap
            </h3>
            <ul className="space-y-5">
              {futureFeatures.map((feature) => (
                <li 
                  key={feature.title} 
                  className="flex items-start gap-3"
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${
                    feature.highlight ? 'bg-primary' : 'bg-muted-foreground/50'
                  }`} />
                  <div>
                    <span className={
                      feature.highlight 
                        ? 'text-foreground font-medium text-emphasis-italic' 
                        : 'text-foreground/90 font-medium'
                    }>
                      {feature.title}
                    </span>
                    <p className="text-xs text-muted-foreground/70 mt-0.5 leading-relaxed">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeRoadmapSection;
