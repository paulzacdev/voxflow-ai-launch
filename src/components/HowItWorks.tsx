import { motion } from "framer-motion";
import { Plug, Brain, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Plug,
    title: "Intégration",
    description: "Connectez VoxFlow.ai à vos canaux de communication en quelques clics. Installation simple et rapide.",
    number: "01",
  },
  {
    icon: Brain,
    title: "IA apprend",
    description: "Notre IA s'entraîne sur vos données pour comprendre votre business et votre ton de communication.",
    number: "02",
  },
  {
    icon: Zap,
    title: "Automatisation",
    description: "L'IA gère automatiquement les demandes clients sur tous vos canaux avec des réponses pertinentes.",
    number: "03",
  },
  {
    icon: BarChart3,
    title: "Analyse & reporting",
    description: "Suivez les performances en temps réel et optimisez continuellement votre support client.",
    number: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Comment <span className="text-gradient">ça marche</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et efficace pour transformer votre support client en quelques jours
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="text-center relative">
                  <div className="relative inline-block mb-6">
                    {/* Number background */}
                    <div className="absolute -top-4 -right-4 text-7xl font-bold text-primary/10">
                      {step.number}
                    </div>
                    
                    {/* Icon container */}
                    <div className="relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent p-5 shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-110">
                      <step.icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual flow indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 p-8 glass-card rounded-2xl text-center"
          >
            <p className="text-lg text-muted-foreground mb-4">
              En moyenne, nos clients voient des résultats en
            </p>
            <div className="text-5xl font-bold text-gradient mb-2">
              7 jours
            </div>
            <p className="text-sm text-muted-foreground">
              Temps moyen de déploiement complet
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;