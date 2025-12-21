import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PillarsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="insight" ref={ref} className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Parallax ambient orb */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-primary/6 via-transparent to-transparent rounded-full blur-[100px]" />
      </motion.div>

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
            Identity is no longer about <span className="text-gradient-gold">likeness</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            It is about continuity
          </p>
        </motion.div>

        {/* Core insight card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative p-12 lg:p-16 bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 leading-relaxed text-center mb-10">
              "What remains scarce is a <span className="text-gradient-gold">persistent identity</span> with verifiable origin, accountable history, and recognized authority."
            </blockquote>
            
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto font-light leading-relaxed">
              Appearance, voice, and performance are now infinite. What matters is who persists across time, under recognized authority.
            </p>

            {/* Decorative corners */}
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-5 right-5 w-6 h-px bg-primary/30" />
              <div className="absolute top-5 right-5 w-px h-6 bg-primary/30" />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16">
              <div className="absolute bottom-5 left-5 w-6 h-px bg-primary/30" />
              <div className="absolute bottom-5 left-5 w-px h-6 bg-primary/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
