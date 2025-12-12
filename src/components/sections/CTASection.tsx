import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast.success('Welcome to the waitlist!', {
        description: "We'll be in touch soon with early access updates."
      });
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      {/* Animated gold orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-[100px]"
      />
      
      {/* Secondary orb */}
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-accent/15 via-transparent to-transparent rounded-full blur-[80px]"
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Reserve Your <span className="text-gradient-gold">Identity</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join the waitlist for early access to LikenessVault. 
            Be among the first to secure your digital likeness.
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card/60 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                required
              />
              <Button 
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold px-6"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <>
                    Join <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Early access priority
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              Founding member benefits
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground/50 rounded-full" />
              No spam, ever
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
