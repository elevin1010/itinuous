import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Gradient mesh - Formless/Jeton inspired */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated gold orb - top left */}
      <motion.div
        style={{ y }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-[100px]"
      />
      
      {/* Animated secondary gold orb - bottom right */}
      <motion.div
        style={{ y }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] bg-gradient-radial from-primary/10 via-primary/3 to-transparent rounded-full blur-[120px]"
      />

      {/* Lighter gold accent orb - center top */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-[80px]"
      />

      {/* Interactive mouse-following glow */}
      <motion.div
        animate={{
          x: mousePosition.x * 80,
          y: mousePosition.y * 80,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 30 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[60px] pointer-events-none"
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/60" />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-40 h-40 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-20 w-56 h-56 border border-primary/10"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      />
      
      {/* Animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7
          }}
          className={`absolute w-1.5 h-1.5 rounded-full blur-[1px] ${i % 2 === 0 ? 'bg-primary/60' : 'bg-foreground/30'}`}
          style={{
            top: `${15 + (i * 10)}%`,
            left: `${5 + (i * 12)}%`,
          }}
        />
      ))}

      {/* Gradient accent lines */}
      <div className="absolute top-0 left-1/4 w-px h-1/3 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-px h-1/3 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      {/* Hero content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Shield logo with enhanced glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateY: -180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-10 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 30px hsl(43 74% 60% / 0.3), 0 0 60px hsl(43 74% 60% / 0.1)",
                  "0 0 50px hsl(43 74% 60% / 0.5), 0 0 100px hsl(43 74% 60% / 0.2)",
                  "0 0 30px hsl(43 74% 60% / 0.3), 0 0 60px hsl(43 74% 60% / 0.1)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/30"
            >
              <Shield className="w-16 h-16 md:w-20 md:h-20 text-primary" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/30 rounded-2xl blur-3xl"
            />
          </div>
        </motion.div>

        {/* Wordmark with staggered reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Likeness
            </motion.span>
            <motion.span 
              className="text-gradient-gold inline-block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Vault
            </motion.span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-3 font-light tracking-wide"
        >
          The Global Identity & Rights Registry
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-lg md:text-xl text-primary font-mono mb-14"
        >
          for the AI Era
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold px-10 py-7 text-lg font-semibold group"
          >
            <span>Join Early Access</span>
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border hover:border-foreground/30 text-foreground hover:bg-foreground/5 px-10 py-7 text-lg"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs text-muted-foreground font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
