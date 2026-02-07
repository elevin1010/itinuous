import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let raf = 0;

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 py-4"
      >
        <div className="container">
          <nav className={`flex items-center justify-between h-14 px-4 md:px-6 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-background/80 backdrop-blur-xl border border-border/50' 
              : 'bg-transparent'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo size="sm" />
            </Link>

            {/* Desktop nav - centered pill */}
            <div className="hidden md:flex items-center gap-1 bg-muted/50 backdrop-blur-sm rounded-full px-1 py-1 border border-border/30">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-muted/80"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/investors"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-muted/80"
              >
                Investors
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <Button 
                size="sm" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2"
                asChild
              >
                <a href="mailto:hello@intinuous.com?subject=Start%20Verification">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
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
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden pt-24"
          >
            <div className="container py-8">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-xl text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  to="/investors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl text-foreground hover:text-primary transition-colors py-2"
                >
                  Investors
                </Link>
                <Button 
                  className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full gap-2"
                  asChild
                >
                  <a
                    href="mailto:hello@intinuous.com?subject=Start%20Verification"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
