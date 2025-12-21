import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PillarsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="insight" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Parallax ambient orb */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-[80px]" />
      </motion.div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Identity is no longer about <span className="text-gradient-gold">likeness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            It is about continuity
          </p>
        </motion.div>

        {/* Core insight card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-10 lg:p-14 bg-card/70 backdrop-blur-sm border border-border/50 rounded-lg">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed text-center mb-8">
              "What remains scarce is a <span className="text-gradient-gold font-medium">persistent identity</span> with verifiable origin, accountable history, and recognized authority."
            </blockquote>
            
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Appearance, voice, and performance are now infinite. What matters is who persists across time, under recognized authority.
            </p>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20">
              <div className="absolute top-4 right-4 w-8 h-px bg-primary/50" />
              <div className="absolute top-4 right-4 w-px h-8 bg-primary/50" />
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20">
              <div className="absolute bottom-4 left-4 w-8 h-px bg-primary/50" />
              <div className="absolute bottom-4 left-4 w-px h-8 bg-primary/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
