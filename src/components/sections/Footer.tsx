import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30 bg-background">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-2">
            <Logo size="sm" />
            <span className="text-xs text-muted-foreground/60 tracking-widest uppercase">
              Identity Continuity Layer
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground/60">
            © 2026 Intinuous. All rights reserved.
          </div>

          {/* Closing line */}
          <p className="text-sm text-muted-foreground/50 italic">
            Your identity is infrastructure. Treat it that way.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
