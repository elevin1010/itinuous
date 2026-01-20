import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/30 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <Logo size="sm" />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/creators" className="text-muted-foreground hover:text-foreground transition-colors">
              Creators
            </Link>
            <Link to="/investors" className="text-muted-foreground hover:text-foreground transition-colors">
              Investors
            </Link>
            <a 
              href="mailto:hello@intinuous.com?subject=Contact%20Inquiry" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <Link to="/legal" className="text-muted-foreground hover:text-foreground transition-colors">
              Legal
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 Intinuous. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
