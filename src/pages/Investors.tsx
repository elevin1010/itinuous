import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Investors = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.info('Investor portal coming soon', {
      description: 'Individual login functionality will be available shortly.'
    });
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Ambient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/15 via-transparent to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px]" />
      
      {/* Header with back button */}
      <header className="relative z-10 p-6 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="font-semibold tracking-tight">
            <span className="text-foreground">Int</span>
            <span className="text-primary">inuous</span>
          </span>
        </Link>
        <Link to="/">
          <Button variant="outline" size="sm" className="border-border hover:border-foreground/30 text-foreground hover:bg-foreground/5 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="p-8 bg-card/70 backdrop-blur-sm border border-border/50 rounded-lg">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/30 rounded-xl blur-2xl"
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground mb-2">Investor Portal</h1>
              <p className="text-muted-foreground">
                Access confidential materials and updates
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                required
              />
              
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground pr-10 focus:border-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border/50" />
              <span className="text-xs text-muted-foreground">OR</span>
              <div className="flex-1 h-px bg-border/50" />
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Don't have access yet?
              </p>
              <Button
                variant="outline"
                className="border-border hover:border-foreground/30 text-foreground hover:bg-foreground/5"
                onClick={() => window.location.href = 'mailto:hello@intinuous.com?subject=Investor%20Access%20Request'}
              >
                Request Investor Access
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="relative z-10 p-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 Intinuous. Confidential.
        </p>
      </footer>
    </div>
  );
};

export default Investors;
