import { motion } from 'framer-motion';
import logoText from '@/assets/intinuous-text.png';
import logoRough from '@/assets/intinuous-rough.png';
import logoMark from '@/assets/intinuous-mark.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  variant?: 'text' | 'rough' | 'mark';
}

const Logo = ({ size = 'md', className = '', variant = 'text' }: LogoProps) => {
  const sizeConfig = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    hero: 'h-32 md:h-48 lg:h-56',
  };

  const logoSrc = {
    text: logoText,
    rough: logoRough,
    mark: logoMark,
  };

  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={logoSrc[variant]} 
        alt="Intinuous" 
        className={`${sizeConfig[size]} w-auto object-contain`}
      />
    </motion.div>
  );
};

export default Logo;
