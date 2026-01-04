import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';

const Legal = () => {
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
                <span className="text-gradient-gold">Terms of Service</span>
              </h1>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </div>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Intinuous services, including our identity verification infrastructure, 
                  APIs, and related tools (collectively, the "Services"), you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Service. If you are using the Services 
                  on behalf of an organization, you represent that you have authority to bind that organization 
                  to these terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">2. Description of Services</h2>
                <p>
                  Intinuous provides identity verification and protection infrastructure designed to help 
                  individuals and organizations maintain authenticity and control over their digital presence. 
                  Our Services may include identity anchoring, verification APIs, authenticity signaling, 
                  and related tools. The specific features available to you depend on your service tier and 
                  agreement with Intinuous.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of the Services at any 
                  time, with reasonable notice when practicable.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">3. Eligibility</h2>
                <p>
                  You must be at least 18 years of age to use our Services. By using Intinuous, you represent 
                  that you meet this requirement and that all information you provide is accurate and complete.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">4. Account Responsibilities</h2>
                <p>
                  You are responsible for maintaining the security of your account credentials and for all 
                  activities that occur under your account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete registration information</li>
                  <li>Keep your login credentials confidential</li>
                  <li>Notify us immediately of any unauthorized access or security breach</li>
                  <li>Not share your account or credentials with third parties</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">5. Acceptable Use</h2>
                <p>
                  You agree to use the Services only for lawful purposes and in accordance with these Terms. 
                  You shall not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the Services to impersonate others or misrepresent your identity</li>
                  <li>Attempt to circumvent, disable, or interfere with security features</li>
                  <li>Use the Services to facilitate fraud, harassment, or illegal activities</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code from our systems</li>
                  <li>Resell or redistribute the Services without authorization</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">6. Identity Data and Verification</h2>
                <p>
                  When you use our identity verification Services, you grant Intinuous permission to collect, 
                  process, and store identity-related data as necessary to provide the Services. You represent 
                  that any identity information you submit is your own or that you have proper authorization 
                  to submit it. The handling of this data is governed by our{' '}
                  <Link to="/privacy" className="text-primary hover:text-primary/80 transition-colors">
                    Privacy Policy
                  </Link>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">7. Intellectual Property</h2>
                <p>
                  All content, features, functionality, trademarks, and technology comprising the Services 
                  are owned by Intinuous or its licensors and are protected by intellectual property laws. 
                  These Terms do not grant you any right, title, or interest in the Services except for 
                  the limited right to use them as permitted herein.
                </p>
                <p>
                  You retain ownership of any content you submit through the Services, but grant Intinuous 
                  a license to use such content as necessary to provide and improve the Services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">8. Third-Party Services</h2>
                <p>
                  The Services may integrate with or contain links to third-party services. Intinuous is not 
                  responsible for the content, policies, or practices of third-party services. Your use of 
                  such services is subject to their respective terms and conditions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">9. Disclaimer of Warranties</h2>
                <p>
                  The Services are provided "as is" and "as available" without warranties of any kind, 
                  whether express, implied, or statutory. Intinuous does not warrant that the Services 
                  will be uninterrupted, error-free, or completely secure. We do not guarantee that our 
                  verification systems will detect all synthetic or fraudulent content.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">10. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Intinuous shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to 
                  loss of profits, data, reputation, or business opportunities, arising from your use 
                  or inability to use the Services.
                </p>
                <p>
                  Our total liability for any claims arising from or related to these Terms or the Services 
                  shall not exceed the amounts you paid to Intinuous in the twelve months preceding the claim.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">11. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Intinuous and its officers, directors, 
                  employees, and agents from any claims, damages, losses, or expenses arising from your 
                  use of the Services, violation of these Terms, or infringement of any rights of third parties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">12. Termination</h2>
                <p>
                  We may suspend or terminate your access to the Services at any time for violation of 
                  these Terms or for any other reason at our discretion. Upon termination, your right 
                  to use the Services will immediately cease. Provisions that by their nature should 
                  survive termination will remain in effect.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">13. Modifications to Terms</h2>
                <p>
                  We may update these Terms from time to time. When we make material changes, we will 
                  notify you through the Services or by other means. Your continued use of the Services 
                  after such changes constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">14. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with applicable laws, 
                  without regard to conflict of law principles. Any disputes arising from these Terms 
                  or the Services shall be resolved through binding arbitration or in courts of competent 
                  jurisdiction, as determined by the nature of the dispute.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-foreground">15. Contact</h2>
                <p>
                  For questions, concerns, or notices regarding these Terms of Service, please contact us at{' '}
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
