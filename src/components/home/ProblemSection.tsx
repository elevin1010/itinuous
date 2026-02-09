import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const scenarios = [
  'Someone questions whether an image of you is real',
  'A platform asks you to prove you\'re the original source',
  'Your name, face, or voice is used without permission',
  'A client or collaborator needs to know they\'re dealing with the real you',
];

const ProblemSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["60px", "-60px"]);
  const yLeft = useTransform(scrollYProgress, [0, 1], ["40px", "-80px"]);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Atmospheric gold glow — hidden on mobile for performance */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-primary/10 via-primary/3 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Right parallax circle */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none"
      >
        <div className="absolute top-1/3 right-1/4 w-72 h-72 border border-muted-foreground/30 rounded-full" />
      </motion.div>

      {/* Left parallax circle — dashed, balances right side */}
      <motion.div
        style={{ y: yLeft }}
        className="absolute top-0 left-0 w-1/2 h-full opacity-[0.04] pointer-events-none"
      >
        <div className="absolute bottom-1/4 left-1/6 w-56 h-56 border border-dashed border-muted-foreground/25 rounded-full" />
      </motion.div>

      <div className="container relative z-10 max-w-3xl mx-auto text-center">
        {/* Animated vertical accent line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
          className="origin-top w-px h-20 bg-gradient-to-b from-transparent via-primary/25 to-transparent mx-auto mb-6"
        />

        {/* Badge + Opening Line */}
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="badge-pill inline-block mb-8">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
          At some point, identity stops being implicit.
          </h2>
        </motion.div>

        {/* Beat 2 — Scenario List with animated ring bullets */}
        <ul className="text-left max-w-xl mx-auto space-y-5 mb-16">
          {scenarios.map((scenario, index) => (
            <motion.li
              key={scenario}
              initial={{ opacity: 0.3, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.3, delay: index * 0.08 + 0.1, type: 'spring', stiffness: 300 }}
                className="mt-2 w-2.5 h-2.5 rounded-full border border-primary/50 bg-primary/10 shrink-0"
              />
              <span className="text-lg text-muted-foreground font-light leading-relaxed">
                {scenario}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Beat 3 — The Punchline */}
        <motion.div
          initial={{ opacity: 0.3, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-3">
            In those moments, screenshots and profiles don't hold up.
          </p>
          {/* "Proof does." with gold glow treatment */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-2xl scale-150 pointer-events-none" />
            <p className="relative text-2xl md:text-3xl font-semibold text-gradient-gold">
              Proof does.
            </p>
          </div>
        </motion.div>

        {/* Closing Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-8"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <p className="text-muted-foreground/60 text-sm tracking-wide whitespace-nowrap">
            That's the gap Intinuous exists to fill
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
