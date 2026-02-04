import { motion } from 'framer-motion';
import { Shield, Globe, Link, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Core Benefits
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/20 transition-colors relative overflow-hidden">
                {/* Subtle topographic pattern hint */}
                <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-primary/20 to-transparent" />
                
                <CardContent className="p-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
