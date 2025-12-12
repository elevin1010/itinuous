import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check, Circle } from 'lucide-react';

const milestones = [
  {
    period: "Q1 2025",
    title: "Foundation",
    items: ["Core identity vault architecture", "Biometric encoding engine", "Early access program launch"],
    status: "current"
  },
  {
    period: "Q2 2025",
    title: "Platform Launch",
    items: ["Public beta release", "Rights management dashboard", "First AI platform integrations"],
    status: "upcoming"
  },
  {
    period: "Q3 2025",
    title: "Enterprise Scale",
    items: ["Enterprise API launch", "Studio partnerships", "Legal toolkit expansion"],
    status: "upcoming"
  },
  {
    period: "Q4 2025",
    title: "Global Network",
    items: ["International rights framework", "Creator marketplace", "Enforcement automation"],
    status: "future"
  },
  {
    period: "2026",
    title: "Vision",
    items: ["Universal identity layer for AI", "Cross-platform rights protocol", "Industry standard adoption"],
    status: "future"
  }
];

const statusColors = {
  completed: { dot: 'bg-primary', text: 'text-primary', bg: 'bg-primary/10' },
  current: { dot: 'bg-accent', text: 'text-accent', bg: 'bg-accent/10' },
  upcoming: { dot: 'bg-muted-foreground', text: 'text-foreground', bg: 'bg-muted/30' },
  future: { dot: 'bg-muted', text: 'text-muted-foreground', bg: 'bg-muted/20' }
};

const RoadmapSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-transparent to-transparent" />

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
            <span className="text-gradient-gold">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the future of digital identity protection
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border/30">
            <motion.div
              style={{ scaleY: lineProgress }}
              className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-muted origin-top"
            />
          </div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const colors = statusColors[milestone.status as keyof typeof statusColors];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.period}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex items-start gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className={`w-4 h-4 rounded-full ${colors.dot} ring-4 ring-background`}
                    />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`p-6 ${colors.bg} border border-border/30 rounded-lg`}>
                      <div className={`inline-block px-3 py-1 mb-3 text-sm font-mono ${colors.text} ${colors.bg} rounded-full border border-current/20`}>
                        {milestone.period}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{milestone.title}</h3>
                      <ul className={`space-y-2 ${isEven ? 'md:text-right' : ''}`}>
                        {milestone.items.map((item) => (
                          <li key={item} className={`flex items-center gap-2 text-sm text-muted-foreground ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            {milestone.status === 'completed' ? (
                              <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            ) : (
                              <Circle className={`w-2 h-2 ${colors.dot} flex-shrink-0`} />
                            )}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
