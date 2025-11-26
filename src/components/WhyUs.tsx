import { motion } from "framer-motion";
import { Clock, TrendingUp, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Gain de temps massif",
    description: "Réduisez de 70% le temps de traitement des demandes clients",
    stat: "-70%",
  },
  {
    icon: TrendingUp,
    title: "Satisfaction augmentée",
    description: "95% de satisfaction client grâce à des réponses instantanées et précises",
    stat: "95%",
  },
  {
    icon: Globe,
    title: "Support 24/7",
    description: "Votre IA ne dort jamais. Disponible pour vos clients à toute heure",
    stat: "24/7",
  },
  {
    icon: Shield,
    title: "IA adaptative",
    description: "Apprentissage continu pour des réponses toujours plus pertinentes",
    stat: "∞",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Pourquoi <span className="text-gradient">VoxFlow.ai</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des résultats concrets et mesurables pour votre entreprise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent p-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-full h-full text-white" />
              </div>

              <div className="text-4xl font-bold text-gradient mb-2">
                {feature.stat}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">500K+</div>
              <p className="text-sm text-muted-foreground">Messages traités par mois</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Langues supportées</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime garanti</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;