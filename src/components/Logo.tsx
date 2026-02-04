import { motion } from 'framer-motion';
import logoImage from '@/assets/intinuous-logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

const Logo = ({ size = 'md', className = '', showText = true }: LogoProps) => {
  const sizeConfig = {
    sm: { image: 'h-8', text: 'text-lg' },
    md: { image: 'h-10', text: 'text-xl' },
    lg: { image: 'h-14', text: 'text-2xl' },
  };

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={logoImage} 
        alt="Intinuous" 
        className={`${sizeConfig[size].image} w-auto object-contain`}
      />
      {showText && (
        <span className={`font-['Montserrat'] font-light tracking-widest uppercase ${sizeConfig[size].text} text-primary`}>
          INUOUS
        </span>
      )}
    </motion.div>
  );
};

export default Logo;
