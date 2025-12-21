import { motion } from 'framer-motion';
import { Database, Shield, Scan, FileCheck, Link2, BarChart3 } from 'lucide-react';

const modules = [
  {
    icon: Database,
    name: "Identity Vault",
    code: "vault.encode()",
    description: "Secure biometric encoding and storage"
  },
  {
    icon: Shield,
    name: "Rights Engine",
    code: "rights.define()",
    description: "Permission and licensing management"
  },
  {
    icon: Scan,
    name: "Verification API",
    code: "verify.check()",
    description: "Real-time identity authentication"
  },
  {
    icon: FileCheck,
    name: "Compliance Suite",
    code: "comply.audit()",
    description: "Legal documentation and evidence"
  },
  {
    icon: Link2,
    name: "Platform Connect",
    code: "connect.sync()",
    description: "AI platform integrations"
  },
  {
    icon: BarChart3,
    name: "Analytics Dashboard",
    code: "track.monitor()",
    description: "Usage insights and alerts"
  }
];

const ProductModulesSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/30" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.015)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Product <span className="text-gradient-gold">Modules</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure for identity protection
          </p>
        </motion.div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative h-full p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/30 transition-all duration-300 overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Name */}
                <h3 className="relative text-xl font-semibold text-foreground mb-2">
                  {module.name}
                </h3>

                {/* Code snippet */}
                <div className="relative mb-4">
                  <code className="text-sm font-mono text-primary/80 bg-background/50 px-2 py-1 rounded">
                    {module.code}
                  </code>
                </div>

                {/* Description */}
                <p className="relative text-sm text-muted-foreground">
                  {module.description}
                </p>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 right-2 w-6 h-px bg-primary/30" />
                  <div className="absolute bottom-2 right-2 w-px h-6 bg-primary/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModulesSection;
