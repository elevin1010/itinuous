import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30 bg-background">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Logo size="sm" />

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link to="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Legal
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground/60">
            © 2025 Intinuous. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
