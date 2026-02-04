import { motion } from 'framer-motion';
import { Briefcase, Mic, Building2, Clapperboard, Scale } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section id="audience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who It's For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            People and organizations with reputational or economic surface area
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <audience.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {audience.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {audience.description}
                      </p>
                      <p className="text-xs text-primary/80 italic">
                        {audience.microLine}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAudienceSection;
