import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface SectionDividerProps {
  showChevron?: boolean;
}

const SectionDivider = ({ showChevron = false }: SectionDividerProps) => {
  return (
    <div className="relative py-4 md:py-6">
      {/* Gradient line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      
      {/* Animated chevron for mobile */}
      {showChevron && (
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex justify-center md:hidden"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
        </motion.div>
      )}
    </div>
  );
};

export default SectionDivider;