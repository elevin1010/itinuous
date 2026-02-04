import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-40 relative">
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[150px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            There's only <span className="text-gradient-gold">ONE</span> you.
            <br />
            Prove it.
          </h2>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Start verification once —
            <br />
            and stop proving yourself from scratch every time.
          </p>

          {/* Non-action framing */}
          <p className="text-sm text-muted-foreground/60 mb-8 italic">
            Without continuity, identity has to be proven from scratch every time.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
              asChild
            >
              <a href="mailto:hello@intinuous.com?subject=Start%20Verification">
                Start Verification
              </a>
            </Button>
            <Link 
              to="/investors" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              Learn more about Intinuous
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
