import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Copy, Users, DollarSign } from 'lucide-react';

const stats = [
  { value: "95%", label: "of deepfakes go undetected", icon: AlertTriangle },
  { value: "$25B", label: "annual identity fraud losses", icon: DollarSign },
  { value: "500M+", label: "AI-generated faces created daily", icon: Copy },
  { value: "Zero", label: "universal protection standards", icon: Users },
];

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      {/* Red warning glow - top */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-destructive/8 via-transparent to-transparent" />
      
      {/* Ambient orbs */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-destructive/10 via-transparent to-transparent rounded-full blur-[100px]"
      />
      
      {/* Decorative geometric elements */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-1/2 h-full opacity-20"
      >
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-destructive/30 rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 border border-destructive/20" />
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
            AI has made identity
            <br />
            <span className="text-destructive">infinitely reproducible</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your face, voice, and likeness can be cloned in seconds. 
            Current protections were built for a pre-AI world.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="relative p-8 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg hover:border-destructive/40 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-destructive/80 mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-mono">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dividing line with message */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 flex items-center gap-8"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <p className="text-muted-foreground font-mono text-sm whitespace-nowrap">
            There has to be a better way
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
