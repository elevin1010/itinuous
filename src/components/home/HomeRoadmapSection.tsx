import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const currentFeatures = [
  'One-time identity verification',
  'Tamper-resistant private certificate',
  'Public attestation page + QR verification',
  'Badge and embed-ready verification assets',
  'Identity continuity dashboard',
];

const currentTagline = 'A formal, portable identity attestation — available today.';

const futureFeatures = [
  {
    title: 'Likeness Keys for Generative Systems',
    description: 'A structured identity reference layer designed for the generative era — enabling documented permission signaling before likeness is generated or used.\n\nBuilt to align with how AI systems evolve, not depend on them.',
    highlight: true,
  },
  {
    title: 'Credential Stacking',
    description: 'Attach additional validations to your existing record over time — without starting over.\n\nOne identity. Continuously strengthened.',
    highlight: false,
  },
  {
    title: 'Legacy & Estate Continuity',
    description: 'Designate how your verified identity should be handled after you\'re gone.\n\nA foundation for long-term identity stewardship beyond any single platform.',
    highlight: false,
  },
  {
    title: 'Organizational Verification',
    description: 'Structured onboarding and coordination tools for agencies, studios, and enterprises managing identity documentation at scale.\n\nEarly partnership integrations available.',
    highlight: false,
  },
];
const HomeRoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0.3, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
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
            initial={{ opacity: 0.3, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5 }}
            className="landio-card p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Version 1 — Now Launching
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
            <p className="text-sm text-muted-foreground/70 italic mt-6">{currentTagline}</p>
          </motion.div>

          {/* On the roadmap */}
          <motion.div
            initial={{ opacity: 0.3, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="landio-card p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              In Development
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
