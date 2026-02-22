import { motion } from 'framer-motion';
import { Clapperboard, Mic, Briefcase, Baby, Building2, Scale } from 'lucide-react';

const audiences = [
  {
    icon: Clapperboard,
    title: 'Actors & Performers',
    description: 'AI-generated likenesses are already being used without consent. Intinuous gives performers a verifiable record and a technical foundation for likeness rights.',
  },
  {
    icon: Mic,
    title: 'Creators & Influencers',
    description: 'Your image is your brand. Protect it with proof that travels with you across platforms.',
  },
  {
    icon: Briefcase,
    title: 'Executives & Public Figures',
    description: 'Deepfake fraud targeting business leaders is accelerating. Establish a verified record before your identity is used against you.',
  },
  {
    icon: Baby,
    title: 'Parents',
    description: 'Secure your child\'s identity before someone else defines it. Intinuous lets families establish a protected record early.',
  },
  {
    icon: Building2,
    title: 'Organizations & Studios',
    description: 'Verify rights before generating identity-based content. Reduce liability. Build trust with talent.',
  },
  {
    icon: Scale,
    title: 'Legal & Compliance',
    description: 'When disputes arise, verifiable evidence matters. Intinuous produces documentation that holds up.',
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
          className="text-center mb-6"
        >
          <span className="badge-pill inline-block mb-6">
            Who It's For
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            For anyone whose face has <span className="text-emphasis-italic">value</span> — and vulnerability.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-16"
        >
          If your identity, likeness, or reputation has economic or public exposure, Intinuous is for you.
        </motion.p>

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
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {audience.description}
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
