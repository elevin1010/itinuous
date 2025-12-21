import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      {/* Animated gold orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-[100px]"
      />
      
      {/* Secondary orb */}
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[80px]"
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Private Previews <span className="text-gradient-gold">Underway</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Intinuous is currently in discussion with early partners. If you represent an organization with meaningful identity surface area, we'd welcome a conversation.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold px-10 py-7 text-lg"
            >
              Reach Out to Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              In discussion with early partners
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary/70 rounded-full" />
              Private previews available
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground/50 rounded-full" />
              Confidential inquiries welcome
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
