import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-light">
                <span className="text-gradient-gold">Terms of Service</span>
              </h1>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </div>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Intinuous services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">2. Description of Service</h2>
                <p>
                  Intinuous provides identity verification and protection infrastructure designed to help 
                  individuals and organizations maintain control over their digital identity in an era of 
                  synthetic media.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">3. User Responsibilities</h2>
                <p>
                  Users are responsible for maintaining the confidentiality of their account credentials 
                  and for all activities that occur under their account. You agree to notify us immediately 
                  of any unauthorized use of your account.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">4. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of Intinuous services are owned by Intinuous 
                  and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">5. Limitation of Liability</h2>
                <p>
                  Intinuous shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use or inability to use the service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">6. Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us at{' '}
                  <a 
                    href="mailto:hello@intinuous.com" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    hello@intinuous.com
                  </a>.
                </p>
              </section>
            </div>

            <div className="pt-8 border-t border-border/30">
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
