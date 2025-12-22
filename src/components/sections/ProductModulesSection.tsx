import { motion } from 'framer-motion';
import { Database, Shield, Scan, FileCheck, Link2, BarChart3 } from 'lucide-react';

const modules = [
  {
    icon: Database,
    name: "Identity Registry",
    description: "Secure registration and storage under defined authority"
  },
  {
    icon: Shield,
    name: "Authority Layer",
    description: "Permission and authorization management"
  },
  {
    icon: Scan,
    name: "Verification",
    description: "Continuity authentication over time"
  },
  {
    icon: FileCheck,
    name: "Evidence",
    description: "Documentation and dispute support"
  },
  {
    icon: Link2,
    name: "Attribution",
    description: "Usage observation and monitoring"
  },
  {
    icon: BarChart3,
    name: "Insights",
    description: "Activity visibility and reporting"
  }
];

const ProductModulesSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/20" />
      
      {/* Grid pattern - more subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.01)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Core <span className="text-gradient-gold">Capabilities</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Infrastructure for identity continuity
          </p>
        </motion.div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((module, index) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative h-full p-7 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl hover:border-primary/15 transition-all duration-500 overflow-hidden">
                {/* Icon */}
                <div className="relative mb-5">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-500">
                    <module.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Name */}
                <h3 className="relative text-lg font-light text-foreground mb-2">
                  {module.name}
                </h3>

                {/* Description */}
                <p className="relative text-sm text-muted-foreground/80 font-light leading-relaxed">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModulesSection;
