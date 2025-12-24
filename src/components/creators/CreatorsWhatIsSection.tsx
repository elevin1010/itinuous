import { motion } from 'framer-motion';
import { FileCheck, CreditCard, Clock } from 'lucide-react';

const metaphors = [
  {
    icon: FileCheck,
    title: "A title registry for identity"
  },
  {
    icon: CreditCard,
    title: "A credit report for authorized use"
  },
  {
    icon: Clock,
    title: "A permission record that can outlive any single studio or platform"
  }
];

const CreatorsWhatIsSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.01)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Ambient orb */}
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[120px]"
      />

      <div className="container relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary/70 mb-6 font-medium">
            What It Is
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
            So what is{' '}
            <span className="text-gradient-gold">Intinuous?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Intinuous isn't a marketplace, an app, or a content platform.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-light mt-4">
            It's <span className="text-foreground">infrastructure</span>: a neutral record that establishes who is allowed to represent you, and under what authority.
          </p>
        </motion.div>

        {/* Metaphors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <p className="text-lg text-foreground/70 font-light mb-8 text-center">
            You can think of it as:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {metaphors.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="p-6 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl text-center"
              >
                <item.icon className="w-8 h-8 text-primary/70 mx-auto mb-4" />
                <p className="text-lg text-foreground font-light">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key distinction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <div className="p-8 md:p-10 bg-primary/5 border border-primary/20 rounded-xl">
            <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
              Contracts define terms.
              <br />
              <span className="text-gradient-gold">Intinuous records continuity and authorization over time.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorsWhatIsSection;
