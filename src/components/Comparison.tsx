import { motion } from "framer-motion";
import { X, Minus, Check, Zap } from "lucide-react";

const comparisons = [
  {
    feature: "Disponibilité",
    human: "8h-18h en semaine",
    chatbot: "24/7 (réponses limitées)",
    voxflow: "24/7 (conversations naturelles)",
  },
  {
    feature: "Temps de réponse",
    human: "Minutes à heures",
    chatbot: "Instantané",
    voxflow: "Instantané",
  },
  {
    feature: "Qualité des réponses",
    human: "Variable selon l'agent",
    chatbot: "Scripts rigides",
    voxflow: "IA adaptative et contextuelle",
  },
  {
    feature: "Coût mensuel",
    human: "2000€+ / agent",
    chatbot: "50-200€",
    voxflow: "À partir de 25 000 DZD",
  },
  {
    feature: "Gestion multicanal",
    human: "Difficile à gérer",
    chatbot: "Limité à 1-2 canaux",
    voxflow: "Email, WhatsApp, Instagram, Téléphone",
  },
  {
    feature: "Capacité simultanée",
    human: "1 client à la fois",
    chatbot: "Illimité",
    voxflow: "Illimité",
  },
  {
    feature: "Appels vocaux",
    human: "Oui",
    chatbot: "Non",
    voxflow: "Oui, avec IA vocale naturelle",
  },
];

const Comparison = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
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
            Pourquoi choisir <span className="text-gradient">VoxFlow AI</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comparez les solutions et découvrez pourquoi les entreprises choisissent VoxFlow AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-secondary/30 border-b border-border/50">
              <div className="font-semibold text-muted-foreground">Fonctionnalité</div>
              <div className="text-center">
                <div className="font-semibold text-foreground">Support humain</div>
                <div className="text-sm text-muted-foreground">Équipe traditionnelle</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">Chatbots basiques</div>
                <div className="text-sm text-muted-foreground">Solutions classiques</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gradient flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  VoxFlow AI
                </div>
                <div className="text-sm text-accent">Notre solution</div>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`grid grid-cols-4 gap-4 p-6 ${
                  index % 2 === 0 ? "bg-background/50" : "bg-secondary/10"
                } border-b border-border/30 last:border-b-0`}
              >
                <div className="font-medium text-foreground">{row.feature}</div>
                <div className="text-center text-muted-foreground text-sm flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive shrink-0 hidden sm:block" />
                  <span>{row.human}</span>
                </div>
                <div className="text-center text-muted-foreground text-sm flex items-center justify-center gap-2">
                  <Minus className="w-4 h-4 text-yellow-500 shrink-0 hidden sm:block" />
                  <span>{row.chatbot}</span>
                </div>
                <div className="text-center text-sm flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-foreground font-medium">{row.voxflow}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground">
            <span className="text-gradient font-semibold">VoxFlow AI</span> combine le meilleur des deux mondes : 
            la réactivité de l'automatisation avec l'intelligence et la naturalité des conversations humaines.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
