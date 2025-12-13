import { motion } from "framer-motion";
import { Clock, AlertTriangle, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Temps de réponse trop longs",
    description: "Vos clients attendent des heures, voire des jours, pour obtenir une réponse simple.",
  },
  {
    icon: TrendingDown,
    title: "Coûts de support élevés",
    description: "Une équipe de support coûte cher et ne peut pas être disponible 24h/24.",
  },
  {
    icon: Users,
    title: "Leads perdus",
    description: "Des prospects abandonnent car personne n'est disponible pour répondre immédiatement.",
  },
  {
    icon: AlertTriangle,
    title: "Saturation des équipes",
    description: "Vos équipes sont submergées par des questions répétitives au lieu de se concentrer sur l'essentiel.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Les problèmes que vous <span className="text-destructive">rencontrez</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chaque jour, des entreprises perdent des clients et de l'argent à cause d'un support client inefficace
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:border-destructive/30 transition-all duration-300"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-destructive/10 p-3 group-hover:bg-destructive/20 transition-colors duration-300">
                <problem.icon className="w-full h-full text-destructive" />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {problem.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
