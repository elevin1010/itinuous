import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const {
    scrollYProgress
  } = useScroll({
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
  return <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Gradient mesh */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated gold orb - top left */}
      <motion.div style={{
      y
    }} animate={{
      scale: [1, 1.1, 1],
      opacity: [0.12, 0.2, 0.12]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-[120px]" />
      
      {/* Animated secondary gold orb - bottom right */}
      <motion.div style={{
      y
    }} animate={{
      scale: [1.1, 1, 1.1],
      opacity: [0.08, 0.15, 0.08]
    }} transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] bg-gradient-radial from-primary/10 via-primary/3 to-transparent rounded-full blur-[140px]" />

      {/* Interactive mouse-following glow */}
      <motion.div animate={{
      x: mousePosition.x * 60,
      y: mousePosition.y * 60
    }} transition={{
      type: "spring",
      stiffness: 20,
      damping: 40
    }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.015)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.015)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />

      {/* Floating geometric shapes - more subtle */}
      <motion.div animate={{
      rotate: 360
    }} transition={{
      duration: 90,
      repeat: Infinity,
      ease: "linear"
    }} className="absolute top-24 right-24 w-32 h-32 border border-primary/5 rounded-full" />
      <motion.div animate={{
      rotate: -360
    }} transition={{
      duration: 70,
      repeat: Infinity,
      ease: "linear"
    }} className="absolute bottom-40 left-24 w-48 h-48 border border-primary/5" style={{
      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
    }} />

      {/* Gradient accent lines - more subtle */}
      <div className="absolute top-0 left-1/4 w-px h-1/3 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-px h-1/3 bg-gradient-to-b from-transparent via-primary/8 to-transparent" />

      {/* Hero content */}
      <motion.div style={{
      opacity,
      scale
    }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Wordmark */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeOut"
      }} className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            <span className="text-foreground">Int</span>
            <span className="text-gradient-gold">inuous</span>
          </h1>
        </motion.div>

        {/* Primary tagline */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6,
        duration: 0.8
      }} className="text-2xl md:text-3xl lg:text-4xl text-foreground/90 mb-8 font-light tracking-wide leading-snug">Verifiable continuity in a generative world</motion.p>
        
        {/* Secondary description */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.8,
        duration: 0.8
      }} className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed font-light">Generative AI has made identity infinite — and trust fragile. Owning your image, voice, and identity now requires more than looking real. Intinuous functions as a neutral registry and authority layer that records identity continuity across time.</motion.p>

        {/* CTAs */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1,
        duration: 0.8
      }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-base font-medium tracking-wide">
            Reach Out
          </Button>
          <Button size="lg" variant="outline" className="border-border/50 hover:border-foreground/20 text-foreground/80 hover:text-foreground hover:bg-foreground/5 px-12 py-6 text-base font-light tracking-wide">
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="flex flex-col items-center gap-4">
          <span className="text-xs text-muted-foreground/60 font-light tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;