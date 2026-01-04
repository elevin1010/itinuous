import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Shift', href: '#the-shift' },
    { label: 'Approach', href: '#solution' },
    { label: 'Who It\'s For', href: '#audience' },
    { label: 'Vision', href: '#roadmap' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-lg border-b border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/">
              <Logo size="sm" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/investors">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  Investors
                </Button>
              </Link>
              <Button 
                size="sm" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
                onClick={() => window.location.href = 'mailto:hello@intinuous.com?subject=General%20Inquiry'}
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden pt-20"
          >
            <div className="container py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  to="/investors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl text-foreground hover:text-primary transition-colors"
                >
                  Investors
                </Link>
                <Button 
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 glow-gold w-full"
                  onClick={() => window.location.href = 'mailto:hello@intinuous.com?subject=General%20Inquiry'}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
