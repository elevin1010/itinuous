import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Shield, CheckCircle, Gavel, LucideIcon } from 'lucide-react';

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  color: 'gold' | 'cyan' | 'titanium';
}

const pillars: Pillar[] = [
  {
    icon: Shield,
    title: "Secure",
    description: "Cryptographically encode your likeness with immutable proof of ownership",
    details: [
      "Multi-modal biometric encoding",
      "Blockchain-anchored timestamps",
      "Tamper-proof identity vault"
    ],
    color: 'gold'
  },
  {
    icon: CheckCircle,
    title: "Verify",
    description: "Real-time authentication against global AI generation requests",
    details: [
      "AI platform integrations",
      "Instant permission checks",
      "Cross-platform identity graph"
    ],
    color: 'cyan'
  },
  {
    icon: Gavel,
    title: "Enforce",
    description: "Automated takedowns and legal frameworks for unauthorized usage",
    details: [
      "DMCA-style automation",
      "Legal documentation suite",
      "Usage violation alerts"
    ],
    color: 'titanium'
  }
];

const colorClasses = {
  gold: {
    border: 'hover:border-primary/50',
    glow: 'group-hover:shadow-[0_0_60px_hsl(43_74%_60%/0.2)]',
    icon: 'text-primary',
    accent: 'bg-primary/10',
    gradient: 'text-gradient-gold'
  },
  cyan: {
    border: 'hover:border-accent/50',
    glow: 'group-hover:shadow-[0_0_60px_hsl(187_100%_45%/0.2)]',
    icon: 'text-accent',
    accent: 'bg-accent/10',
    gradient: 'text-gradient-cyan'
  },
  titanium: {
    border: 'hover:border-foreground/30',
    glow: 'group-hover:shadow-[0_0_60px_hsl(0_0%_100%/0.05)]',
    icon: 'text-foreground',
    accent: 'bg-foreground/10',
    gradient: 'text-foreground'
  }
};

const PillarsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
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
            <span className="text-gradient-gold">Secure.</span>{' '}
            <span className="text-gradient-cyan">Verify.</span>{' '}
            <span className="text-foreground">Enforce.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three pillars of protection for the AI age
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const colors = colorClasses[pillar.color];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <motion.div
                  animate={{
                    y: hoveredIndex === index ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`
                    relative h-full p-8 lg:p-10 
                    bg-card/70 backdrop-blur-sm 
                    border border-border/50 rounded-lg
                    ${colors.border} ${colors.glow}
                    transition-all duration-500
                  `}
                >
                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center 
                    w-16 h-16 rounded-lg mb-6
                    ${colors.accent}
                  `}>
                    <pillar.icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${colors.gradient}`}>
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {pillar.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-3">
                    {pillar.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-sm text-foreground/80">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')}`} />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative corner */}
                  <div className={`
                    absolute top-0 right-0 w-20 h-20 
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  `}>
                    <div className={`
                      absolute top-4 right-4 w-8 h-px 
                      ${colors.icon.replace('text-', 'bg-')}/50
                    `} />
                    <div className={`
                      absolute top-4 right-4 w-px h-8 
                      ${colors.icon.replace('text-', 'bg-')}/50
                    `} />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
