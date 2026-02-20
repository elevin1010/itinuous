import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  'One verified identity record',
  'One public proof page',
  'Ongoing continuity',
  'QR code for instant sharing',
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[120px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge-pill inline-block mb-6">
            Planned Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            One plan. <span className="text-emphasis-italic">Full protection.</span>
          </h2>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="landio-card p-10 text-center relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-[60px] -translate-y-1/2" />
            
            <div className="relative z-10">
              {/* Price */}
              <div className="mb-8">
                <span className="text-6xl md:text-7xl font-bold text-gradient-gold">
                  $40
                </span>
                <span className="text-2xl text-muted-foreground font-light ml-2">
                  / year
                </span>
              </div>

              {/* Monthly reframe */}
              <p className="text-sm text-muted-foreground mb-8">
                Less than $4 per month for permanent identity continuity
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-10 text-left">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2 glow-gold"
                asChild
              >
                <Link to="/contact">
                  Request Early Access
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
