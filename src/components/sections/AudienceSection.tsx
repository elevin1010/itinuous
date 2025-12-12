import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Video, Building2, Palette, Scale, LucideIcon } from 'lucide-react';

interface Audience {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

const audiences: Audience[] = [
  {
    icon: User,
    title: "Actors & Influencers",
    subtitle: "Protect your personal brand",
    description: "Your face is your livelihood. Secure it against unauthorized AI reproductions and deepfakes.",
    benefits: ["Digital likeness registration", "Usage monitoring", "Automated takedowns"]
  },
  {
    icon: Video,
    title: "AI Studios",
    subtitle: "Build with confidence",
    description: "License synthetic actors and digital doubles with verified rights and clear permissions.",
    benefits: ["Cleared rights library", "API integration", "Compliance assurance"]
  },
  {
    icon: Building2,
    title: "Brands & Products",
    subtitle: "Protect your IP",
    description: "Register product designs, packaging, and brand assets before AI recreates them.",
    benefits: ["Brand asset registry", "Counterfeit detection", "Global enforcement"]
  },
  {
    icon: Palette,
    title: "Creators & Designers",
    subtitle: "Own your creations",
    description: "Secure avatars, characters, and digital art with provable ownership records.",
    benefits: ["NFT integration", "Rights management", "Licensing marketplace"]
  },
  {
    icon: Scale,
    title: "Legal Teams",
    subtitle: "Enforce with evidence",
    description: "Access documentation, timestamps, and audit trails for intellectual property cases.",
    benefits: ["Legal-grade evidence", "Chain of custody", "Expert reports"]
  }
];

const AudienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      {/* Ambient orb */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-[100px]" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Who It's <span className="text-gradient-gold">For</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From individual creators to enterprise legal teams
          </p>
        </motion.div>

        {/* Audience selector - Mobile: cards, Desktop: tabs + detail */}
        <div className="lg:hidden space-y-4">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground">{audience.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{audience.description}</p>
              <ul className="space-y-2">
                {audience.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="col-span-4 space-y-2">
            {audiences.map((audience, index) => (
              <motion.button
                key={audience.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(index)}
                className={`
                  w-full p-4 text-left rounded-lg transition-all duration-300
                  flex items-center gap-4
                  ${activeIndex === index 
                    ? 'bg-card/80 border border-primary/30 glow-gold' 
                    : 'bg-card/30 border border-transparent hover:bg-card/50'
                  }
                `}
              >
                <div className={`
                  w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                  ${activeIndex === index ? 'bg-primary/20' : 'bg-muted/30'}
                `}>
                  <audience.icon className={`w-5 h-5 ${activeIndex === index ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div>
                  <h3 className={`font-medium ${activeIndex === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {audience.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{audience.subtitle}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="col-span-8">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full p-8 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  {(() => {
                    const Icon = audiences[activeIndex].icon;
                    return <Icon className="w-8 h-8 text-primary" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{audiences[activeIndex].title}</h3>
                  <p className="text-muted-foreground">{audiences[activeIndex].subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                {audiences[activeIndex].description}
              </p>

              <div className="grid grid-cols-3 gap-4">
                {audiences[activeIndex].benefits.map((benefit, i) => (
                  <div 
                    key={benefit}
                    className="p-4 bg-background/50 border border-border/30 rounded-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-primary font-mono text-sm">{i + 1}</span>
                    </div>
                    <p className="text-sm text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
