import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { UserCheck, Clock, Eye, FileText } from 'lucide-react';
const features = [{
  icon: UserCheck,
  label: "Verified registration under defined authority"
}, {
  icon: Clock,
  label: "Continuity anchored over time"
}, {
  icon: Eye,
  label: "Ongoing attribution and monitoring"
}, {
  icon: FileText,
  label: "Evidence and escalation support when disputes arise"
}];
const SolutionSection = () => {
  const ref = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const leftX = useTransform(scrollYProgress, [0, 0.5], ["-60px", "0px"]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], ["60px", "0px"]);
  const centerScale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  return <section id="solution" ref={ref} className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/15 to-transparent" />
      
      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-48 hidden md:block w-[500px] h-[500px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-48 hidden md:block w-[400px] h-[400px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-[120px]" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div initial={{
        opacity: 0.3,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        ease: "easeOut"
      }} viewport={{
        once: true,
        margin: "-20%"
      }} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            What Intinuous <span className="text-gradient-gold">provides</span>
          </h2>
        </motion.div>

        {/* Pull quote */}
        <motion.div style={{
        scale: centerScale,
        opacity: centerOpacity
      }} className="text-center mb-20 max-w-4xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">These primitives are designed to operate independently of any single platform, model, or media format.</blockquote>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          {/* Left - Features */}
          <motion.div style={{
          x: leftX
        }} className="space-y-5">
            <p className="text-sm text-muted-foreground/70 uppercase tracking-[0.2em] mb-6 font-light">Core system primitives</p>
            {features.map((feature, index) => <motion.div key={feature.label} initial={{
            opacity: 0.3,
            x: -15
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4,
            delay: index * 0.05
          }} viewport={{
            once: true,
            margin: "-20%"
          }} className="flex items-center gap-5 p-5 bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg hover:border-primary/20 transition-colors group">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base text-foreground/80 font-light">{feature.label}</span>
              </motion.div>)}
            <p className="text-lg text-muted-foreground font-light pt-4">
              This is infrastructure, not a platform.
            </p>
          </motion.div>

          {/* Right - Diagram */}
          <motion.div style={{
          x: rightX
        }} className="relative">
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Central icon */}
              <motion.div initial={{
              scale: 0.95,
              opacity: 0.3
            }} whileInView={{
              scale: 1,
              opacity: 1
            }} transition={{
              duration: 0.5,
              ease: "easeOut"
            }} viewport={{
              once: true,
              margin: "-20%"
            }} className="absolute inset-1/4 bg-card/70 border border-primary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-light text-gradient-gold mb-2">∞</div>
                  <div className="text-xs text-muted-foreground/70 uppercase tracking-[0.2em] font-light">
                    Continuity
                  </div>
                </div>
              </motion.div>

              {/* Orbiting elements */}
              <motion.div animate={{
              rotate: 360
            }} transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary/60 rounded-full" />
                </div>
              </motion.div>

              <motion.div animate={{
              rotate: -360
            }} transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute inset-10">
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary/15 border border-primary/40 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                </div>
              </motion.div>

              {/* Outer rings */}
              <div className="absolute inset-0 border border-dashed border-border/20 rounded-full" />
              <div className="absolute inset-10 border border-dashed border-border/15 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;