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
    description: "Individuals who need to maintain verifiable continuity across their professional identity."
  },
  {
    icon: Mic,
    title: "Creators & Performers",
    subtitle: "Artists, musicians, actors, influencers",
    description: "Those whose voice, image, and likeness form the basis of their economic value."
  },
  {
    icon: Briefcase,
    title: "Organizations",
    subtitle: "Enterprises managing identity at scale",
    description: "Companies that must establish authoritative identity for employees and representatives."
  },
  {
    icon: Building2,
    title: "Platforms & Studios",
    subtitle: "AI studios, content platforms, agencies",
    description: "Organizations that need to verify rights and authority before generating or licensing identity-based content."
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    subtitle: "Attorneys, regulators, compliance teams",
    description: "Professionals who require verifiable evidence when questions of identity arise."
  }
];

const AudienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="audience" className="relative pt-5 pb-20 md:pt-8 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/15 to-transparent" />
      
      {/* Ambient orb */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary/6 via-transparent to-transparent rounded-full blur-[120px]" />

      <div className="container relative z-10">
        {/* Organizational risk callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl mx-auto p-6 md:p-8 bg-gradient-to-br from-destructive/5 via-card/30 to-transparent border border-destructive/20 rounded-lg"
        >
          <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed text-center">
            Organizations now report identity misuse as one of the{' '}
            <span className="text-destructive font-medium">fastest-growing operational and security risks</span>, 
            surpassing traditional identity theft in perceived impact.
          </p>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Who It's <span className="text-gradient-gold">For</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            People and organizations with reputational or economic surface area
          </p>
        </motion.div>

        {/* Mobile: cards */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-6 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <audience.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-light text-foreground">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground/70 font-light">{audience.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: tabs + detail */}
        <div className="hidden lg:grid grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="col-span-5 space-y-2">
            {audiences.map((audience, index) => (
              <motion.button
                key={audience.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(index)}
                className={`
                  w-full p-4 text-left rounded-xl transition-all duration-300
                  flex items-center gap-4
                  ${activeIndex === index 
                    ? 'bg-card/70 border border-primary/20' 
                    : 'bg-transparent border border-transparent hover:bg-card/40'
                  }
                `}
              >
                <div className={`
                  w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                  ${activeIndex === index ? 'bg-primary/15' : 'bg-muted/20'}
                `}>
                  <audience.icon className={`w-5 h-5 ${activeIndex === index ? 'text-primary' : 'text-muted-foreground/70'}`} />
                </div>
                <div>
                  <h3 className={`font-light ${activeIndex === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {audience.title}
                  </h3>
                  <p className="text-xs text-muted-foreground/60 font-light">{audience.subtitle}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="col-span-7">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full p-10 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl flex flex-col justify-center"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  {(() => {
                    const Icon = audiences[activeIndex].icon;
                    return <Icon className="w-7 h-7 text-primary" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-light text-foreground">{audiences[activeIndex].title}</h3>
                  <p className="text-muted-foreground/70 font-light">{audiences[activeIndex].subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed font-light">
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
