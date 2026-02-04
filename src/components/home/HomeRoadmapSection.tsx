import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section id="roadmap" className="py-20 md:py-32 relative">
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
            Roadmap Transparency
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Version 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Version 1 (now)
                </h3>
                <ul className="space-y-3">
                  {currentFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-4 h-4 text-primary/60 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* What's coming */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  What's coming
                </h3>
                <ul className="space-y-3">
                  {futureFeatures.map((feature) => (
                    <li 
                      key={feature.text} 
                      className={`flex items-center gap-3 ${
                        feature.highlight 
                          ? 'text-foreground font-medium' 
                          : 'text-muted-foreground'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        feature.highlight ? 'bg-primary' : 'bg-muted-foreground/50'
                      }`} />
                      <span className={feature.highlight ? 'text-gradient-gold' : ''}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Highlight explanation */}
                <p className="mt-4 text-xs text-muted-foreground/60 italic">
                  Foundational models can request proof directly from Intinuous, never scrape it.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Closer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-muted-foreground">
            We're building this deliberately.
          </p>
          <p className="text-muted-foreground">
            Privacy first. Utility second. Scale last.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeRoadmapSection;
