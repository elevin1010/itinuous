import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    lastScrollY.current = latest;

    setIsScrolled(latest > 50);

    // Don't hide when mobile menu is open or near top
    if (isMobileMenuOpen || latest < 100) {
      setIsVisible(true);
      return;
    }

    if (direction === "down" && latest > 150) {
      setIsVisible(false);
    } else if (direction === "up") {
      setIsVisible(true);
    }
  });

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Contact', href: '/contact', isRoute: true },
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
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-muted/80"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-muted/80"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            {/* Spacer for layout balance */}
            <div className="hidden md:block w-10" />

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
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl text-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ) : (
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
                  )
                ))}
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
