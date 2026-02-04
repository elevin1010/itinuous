import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'One verified identity record.',
  'One public proof page.',
  'Ongoing continuity.',
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-[120px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Price */}
          <div className="mb-8">
            <span 
              className="text-gradient-gold font-bold"
              style={{ 
                fontSize: 'clamp(3rem, 10vw, 8rem)',
                lineHeight: 1,
                letterSpacing: '-0.02em'
              }}
            >
              $40
            </span>
            <span className="text-2xl md:text-3xl text-muted-foreground font-light ml-2">
              / year
            </span>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-center justify-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Monthly reframe */}
          <p className="text-sm text-muted-foreground/70 mb-8">
            Less than $4 per month for permanent identity continuity.
          </p>

          {/* CTA */}
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold mb-8"
            asChild
          >
            <a href="mailto:hello@intinuous.com?subject=Start%20Verification">
              Start Verification
            </a>
          </Button>

          {/* Stance */}
          <div className="space-y-1 text-muted-foreground/60">
            <p>No free tier.</p>
            <p>If you care about your identity, you secure it.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
