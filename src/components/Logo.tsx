import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeConfig = {
    sm: { glyph: 24, text: 'text-lg' },
    md: { glyph: 32, text: 'text-xl' },
    lg: { glyph: 48, text: 'text-2xl' },
  };

  const { glyph, text } = sizeConfig[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Abstract continuous glyph - a single unbroken stroke forming a balanced, institutional mark */}
      <motion.svg
        width={glyph}
        height={glyph}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--primary-light))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
          <linearGradient id="logoGradientSubtle" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
          </linearGradient>
        </defs>
        
        {/* Subtle reflection/glow layer */}
        <motion.path
          d="M24 6 L24 42"
          stroke="url(#logoGradientSubtle)"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        
        {/* Primary continuous vertical stroke - representing continuity and axis */}
        <motion.path
          d="M24 8 L24 40"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Top serif/anchor - authority and registration mark */}
        <motion.path
          d="M18 8 L30 8"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        
        {/* Bottom serif/anchor - grounding and permanence */}
        <motion.path
          d="M18 40 L30 40"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        
        {/* Small center mark - registry/verification point */}
        <motion.circle
          cx="24"
          cy="24"
          r="2"
          fill="url(#logoGradient)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        />
      </motion.svg>

      {showText && (
        <motion.span 
          className={`${text} font-light tracking-tight`}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-foreground">Int</span>
          <span className="text-primary">inuous</span>
        </motion.span>
      )}
    </div>
  );
};

export default Logo;
