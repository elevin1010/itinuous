import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, ShieldOff, Gavel } from 'lucide-react';

const problemCards = [
  {
    icon: AlertTriangle,
    stat: 'Deepfake fraud has increased by thousands of percent in recent years',
  },
  {
    icon: ShieldOff,
    stat: 'No standard exists for AI systems to ask permission before generating someone\'s likeness',
  },
  {
    icon: Gavel,
    stat: 'Estates, actors, and public figures have almost no technical recourse — only legal',
  },
];

const ProblemSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["60px", "-60px"]);

  return (
    <section ref={ref} id="problem" className="relative py-12 md:py-16 overflow-hidden">
      {/* Atmospheric glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-primary/10 via-primary/3 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Parallax circle */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none"
      >
        <div className="absolute top-1/3 right-1/4 w-72 h-72 border border-muted-foreground/30 rounded-full" />
      </motion.div>

      <div className="container relative z-10 max-w-3xl mx-auto">
        {/* Vertical accent line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
          className="origin-top w-px h-20 bg-gradient-to-b from-transparent via-primary/25 to-transparent mx-auto mb-6"
        />

        {/* Badge + Headline */}
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="badge-pill inline-block mb-8">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            Looking real is no longer <span className="text-emphasis-italic">proof.</span>
          </h2>
        </motion.div>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0.3, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 mb-16"
        >
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Anyone with a prompt can now generate your face, your voice, your likeness — convincingly, instantly, at scale. The question is no longer whether it's possible. It's whether you have any say in it.
          </p>
          <p className="text-lg text-foreground font-medium">
            Right now, you don't.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            There's no authoritative record of what your face actually looks like. No permission layer. No way to prove the original is you. When your image appears somewhere it shouldn't, screenshots and social profiles don't hold up.
          </p>
          {/* "Proof does." with glow */}
          <div className="relative inline-block pt-2">
            <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-2xl scale-150 pointer-events-none" />
            <p className="relative text-2xl md:text-3xl font-semibold text-gradient-gold">
              Proof does.
            </p>
          </div>
        </motion.div>

        {/* Problem stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problemCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="landio-card p-6 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.stat}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
