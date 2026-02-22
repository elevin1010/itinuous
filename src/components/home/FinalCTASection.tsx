import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Atmospheric glow — larger for cinematic feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-[150px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            There's only one{' '}
            <span className="text-gradient-gold">you.</span>
          </h2>

          {/* Sub */}
          <p className="text-2xl md:text-3xl font-light text-foreground mb-4">
            Let's keep it that way.
          </p>

          {/* Body */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Intinuous is invitation only at launch. We're building the first cohort deliberately — a small number of individuals and organizations whose participation shapes what this becomes.
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            If that sounds like you, we'd like to hear from you.
          </p>

          {/* CTA */}
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

          {/* Small line */}
          <p className="text-sm text-muted-foreground/60 mt-6">
            We respond to every inquiry personally · No automated sequences · Confidential inquiries welcome
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
