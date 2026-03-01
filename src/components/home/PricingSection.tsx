import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Individual',
    audience: 'For performers, creators, executives, and public figures who want to formally anchor their likeness in the generative era.',
    subtitle: null,
    features: [
      'Verified identity attestation',
      'Tamper-resistant private certificate',
      'Public attestation page with live status',
      'Unique Intinuous ID',
      'Badge + QR verification asset',
      'Embed-ready verification snippet',
      'Identity continuity dashboard',
      'Documentation package for dispute support',
    ],
    cta: 'By invitation · Apply below',
    highlight: true,
  },
  {
    name: 'Agency & Management',
    audience: 'For talent agencies and representation firms standardizing identity documentation across their roster.',
    subtitle: null,
    features: [
      'Everything in Individual',
      'Coordinated roster onboarding',
      'Centralized status tracking (managed support)',
      'Bulk intake workflow (assisted)',
      'Contract-reference documentation templates',
      'Priority documentation support',
      'Dedicated onboarding partner',
    ],
    cta: 'Annual agreement · Structured pilot available',
    highlight: false,
  },
  {
    name: 'Studio & Enterprise',
    audience: 'For AI studios, production companies, and platforms exploring identity verification before generating or publishing identity-based content.',
    subtitle: 'Available through structured pilot and custom integration.',
    features: [
      'Registry-based identity verification access',
      'Live attestation status lookup',
      'Documentation export for compliance workflows',
      'Custom integration consultation',
      'Identity verification framework alignment',
      'Early partnership access to evolving permission-layer roadmap',
    ],
    cta: 'Bespoke engagement · Contact us',
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="access" className="py-24 md:py-32 relative">
      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[120px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0.3, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="badge-pill inline-block mb-6">
            Early Access
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Intinuous is currently <span className="text-emphasis-italic">invitation only.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We're onboarding a small number of individuals and organizations in our first cohort. Priority is given to those with meaningful identity exposure — performers, public figures, agencies, and studios.
          </p>
          <p className="text-foreground font-medium">
            This isn't a waitlist. It's a conversation.
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0.3, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`landio-card p-8 relative overflow-hidden ${
                tier.highlight ? 'border-primary/30' : ''
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-gradient-radial from-primary/15 via-transparent to-transparent rounded-full blur-[40px] -translate-y-1/2" />
              )}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {tier.audience}
                </p>
                {tier.subtitle && (
                  <p className="text-xs text-muted-foreground/70 italic mb-4">
                    {tier.subtitle}
                  </p>
                )}
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-3">Includes:</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/70 italic">
                  {tier.cta}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0.3, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2 glow-gold px-8"
            asChild
          >
            <Link to="/contact">
              Request Early Access
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground/60 mt-4">
            We respond to every inquiry personally. No automated sequences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
