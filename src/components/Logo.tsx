import { motion } from 'framer-motion';
import '@fontsource/montserrat/300.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeConfig = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <motion.span
      className={`font-['Montserrat'] font-light tracking-widest uppercase ${sizeConfig[size]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-foreground">INT</span>
      <span className="text-primary">INUOUS</span>
    </motion.span>
  );
};

export default Logo;
