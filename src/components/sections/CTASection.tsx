import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      {/* Animated gold orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/15 via-transparent to-transparent rounded-full blur-[120px]"
      />

      <div className="container relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-20%" }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Private Previews <span className="text-gradient-gold">Underway</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed font-light">
            Intinuous is currently in discussion with early partners. If you represent an organization with meaningful identity surface area, we'd welcome a conversation.
          </p>

          {/* CTA */}
          <div className="mb-16">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-base font-medium tracking-wide"
              onClick={() => window.location.href = 'mailto:hello@intinuous.com?subject=Partnership%20Inquiry'}
            >
              Reach Out to Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-10 text-sm text-muted-foreground/70">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
              <span className="font-light">In discussion with early partners</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
              <span className="font-light">Private previews available</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
              <span className="font-light">Confidential inquiries welcome</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
