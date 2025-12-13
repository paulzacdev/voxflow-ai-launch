import { motion } from "framer-motion";
import { Building2, ShoppingCart, Briefcase, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Building2,
    title: "Agences immobilières",
    problem: "Appels manqués et rendez-vous non planifiés",
    solution: "Agent IA vocal qui répond 24/7, qualifie les prospects et planifie automatiquement les visites",
    benefit: "3x plus de rendez-vous qualifiés",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    problem: "Clients abandonnent faute de réponse rapide",
    solution: "Chatbot IA qui répond instantanément aux questions sur les produits, livraisons et retours",
    benefit: "+40% de taux de conversion",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    icon: Briefcase,
    title: "PME & Services",
    problem: "Leads non qualifiés qui submergent l'équipe",
    solution: "IA qui qualifie automatiquement les prospects et transmet uniquement les opportunités sérieuses",
    benefit: "60% de temps économisé",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: MapPin,
    title: "Entreprises locales",
    problem: "Clients perdus hors des heures d'ouverture",
    solution: "Réponse instantanée par WhatsApp, SMS ou téléphone, même à 3h du matin",
    benefit: "Disponibilité 24/7 sans coût supplémentaire",
    gradient: "from-cyan-500 to-blue-500",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Cas d'usage <span className="text-gradient">concrets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment VoxFlow AI transforme le quotidien des entreprises comme la vôtre
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                </div>

                {/* Problem */}
                <div className="mb-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                  <span className="text-sm font-medium text-destructive">Problème :</span>
                  <p className="text-foreground mt-1">{useCase.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <span className="text-sm font-medium text-primary">Solution VoxFlow AI :</span>
                  <p className="text-foreground mt-1">{useCase.solution}</p>
                </div>

                {/* Benefit */}
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">{useCase.benefit}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Demander une démo gratuite
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
