import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EarlyAccessCTA = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0.3, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Intinuous is invitation only at <span className="text-gradient-gold">launch.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed">
            We're building our first cohort deliberately — a small group of individuals and organizations whose participation shapes what this becomes. Every application is reviewed personally. No automated sequences.
          </p>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            If you have meaningful identity exposure — as a performer, creator, executive, or public figure — we'd like to hear from you.
          </p>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2 glow-gold px-8"
            asChild
          >
            <Link to="/contact">
              Request Early Access
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <motion.p
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-foreground/80 mt-10 font-medium"
          >
            There's only one you. The time to establish that record is before it's contested.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccessCTA;
