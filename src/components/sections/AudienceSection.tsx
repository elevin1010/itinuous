import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Briefcase, Building2, Mic, Scale, LucideIcon } from 'lucide-react';

interface Audience {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

const audiences: Audience[] = [
  {
    icon: User,
    title: "Professionals",
    subtitle: "Executives, consultants, public figures",
    description: "Individuals with reputational or economic surface area who need to maintain verifiable continuity across their professional identity."
  },
  {
    icon: Mic,
    title: "Creators & Performers",
    subtitle: "Artists, musicians, actors, influencers",
    description: "Those whose voice, image, and likeness form the basis of their economic value and creative expression."
  },
  {
    icon: Briefcase,
    title: "Organizations",
    subtitle: "Enterprises managing identity at scale",
    description: "Companies and institutions that need to establish and maintain authoritative identity for employees, representatives, and brand assets."
  },
  {
    icon: Building2,
    title: "Platforms & Studios",
    subtitle: "AI studios, content platforms, agencies",
    description: "Organizations that need to verify rights and authority before generating, distributing, or licensing identity-based content."
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    subtitle: "Attorneys, regulators, compliance teams",
    description: "Professionals who need access to verifiable evidence and authority records when questions of identity arise."
  }
];

const AudienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="audience" className="relative py-32 overflow-hidden">
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
            People and organizations with reputational or economic surface area
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
              <p className="text-muted-foreground text-sm">{audience.description}</p>
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
              className="h-full p-8 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg flex flex-col justify-center"
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

              <p className="text-xl text-foreground/80 leading-relaxed">
                {audiences[activeIndex].description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
