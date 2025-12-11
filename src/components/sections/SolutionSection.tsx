import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Fingerprint, Lock, Globe, Zap } from 'lucide-react';

const features = [
  { icon: Fingerprint, label: "Biometric Identity Layer" },
  { icon: Lock, label: "Cryptographic Rights Management" },
  { icon: Globe, label: "Global AI Integration" },
  { icon: Zap, label: "Real-time Enforcement" },
];

const SolutionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5], ["-100px", "0px"]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], ["100px", "0px"]);
  const centerScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Animated connection lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
            d="M 100 400 Q 400 200 600 400 Q 800 600 1100 400"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Pull quote */}
        <motion.div
          style={{ scale: centerScale, opacity: centerOpacity }}
          className="text-center mb-24"
        >
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-relaxed max-w-4xl mx-auto">
            "Identity is now <span className="text-gradient-gold font-medium">digital</span>.
            <br />
            Rights must be <span className="text-gradient-cyan font-medium">too</span>."
          </blockquote>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features */}
          <motion.div style={{ x: leftX }} className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg hover:border-primary/30 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium text-foreground">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Diagram */}
          <motion.div style={{ x: rightX }} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central vault icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                className="absolute inset-1/4 bg-card border border-primary/30 rounded-2xl flex items-center justify-center glow-gold"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-gradient-gold mb-2">LV</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Identity Vault
                  </div>
                </div>
              </motion.div>

              {/* Orbiting elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent/20 border border-accent/50 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8"
              >
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
              </motion.div>

              {/* Outer ring */}
              <div className="absolute inset-0 border border-dashed border-border/30 rounded-full" />
              <div className="absolute inset-8 border border-dashed border-border/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;