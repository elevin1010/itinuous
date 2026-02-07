import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const currentFeatures = [
  'One-time verification',
  'Private certificate',
  'Public proof page + QR',
  'Manual sharing',
];

const futureFeatures = [
  { text: 'Opt-in model permissions', highlight: true },
  { text: 'Revocable proof tokens', highlight: false },
  { text: 'Higher-exposure tiers', highlight: false },
  { text: 'API access for platforms', highlight: false },
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
            Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Building <span className="text-emphasis-italic">deliberately</span>
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
              Version 1 (now)
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

          {/* What's coming */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="landio-card p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              What's coming
            </h3>
            <ul className="space-y-4">
              {futureFeatures.map((feature) => (
                <li 
                  key={feature.text} 
                  className="flex items-center gap-3"
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    feature.highlight ? 'bg-primary' : 'bg-muted-foreground/50'
                  }`} />
                  <span className={
                    feature.highlight 
                      ? 'text-foreground font-medium text-emphasis-italic' 
                      : 'text-muted-foreground'
                  }>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Highlight explanation */}
            <p className="mt-6 text-xs text-muted-foreground/60 italic">
              Foundational models can request proof directly from Intinuous, never scrape it.
            </p>
          </motion.div>
        </div>

        {/* Closer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-xl mx-auto space-y-2 text-muted-foreground"
        >
          <p>We're building this deliberately.</p>
          <p className="text-emphasis-italic">Privacy first. Utility second. Scale last.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeRoadmapSection;
