import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <span className="text-gradient-gold">Privacy Policy</span>
              </h1>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </div>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or communicate with us. This may include your name, email address, 
                  and other contact information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, 
                  to communicate with you, and to protect the security of our platform and users.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">3. Information Sharing</h2>
                <p>
                  We do not sell your personal information. We may share your information with third 
                  parties only as described in this policy, including with service providers who assist 
                  us in operating our platform.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">5. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. You may 
                  also have the right to restrict or object to certain processing of your data.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">6. Contact</h2>
                <p>
                  For questions about this Privacy Policy, please contact us at{' '}
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

export default Privacy;
