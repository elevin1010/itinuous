import { motion } from 'framer-motion';
import { Briefcase, Mic, Building2, Clapperboard, Scale } from 'lucide-react';

const audiences = [
  {
    icon: Briefcase,
    title: 'Professionals',
    description: 'Executives, consultants, public figures',
    microLine: 'Maintain continuity across public exposure',
  },
  {
    icon: Mic,
    title: 'Creators & Performers',
    description: 'Artists, musicians, actors, influencers',
    microLine: 'Prevent unauthorized identity reuse',
  },
  {
    icon: Building2,
    title: 'Organizations',
    description: 'Enterprises managing identity at scale',
    microLine: 'Establish authority for employees and representatives',
  },
  {
    icon: Clapperboard,
    title: 'Platforms & Studios',
    description: 'AI studios, content platforms, agencies',
    microLine: 'Verify rights before generating identity-based content',
  },
  {
    icon: Scale,
    title: 'Legal & Compliance',
    description: 'Attorneys, regulators, compliance teams',
    microLine: 'Access verifiable evidence when questions arise',
  },
];

const HomeAudienceSection = () => {
  return (
    <section id="audience" className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-pill inline-block mb-6">
            Who It's For
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            People with <span className="text-emphasis-italic">reputational</span> surface area
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            People and organizations with economic or reputational exposure
          </p>
        </motion.div>

        {/* Grid layout with alternating slide directions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0.3, x: index % 2 === 0 ? -20 : 20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="landio-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {audience.description}
                  </p>
                  <p className="text-xs text-primary/80 italic">
                    {audience.microLine}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAudienceSection;
