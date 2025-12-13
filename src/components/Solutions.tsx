import { motion } from "framer-motion";
import { MessageSquare, Mic, Mail, MessageCircle } from "lucide-react";

const solutions = [
  {
    icon: MessageSquare,
    title: "Agents IA textuels",
    description: "Réponses instantanées sur votre site web. Vos visiteurs obtiennent des réponses précises en moins de 3 secondes, 24h/24.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Mic,
    title: "Agents IA vocaux",
    description: "Appels téléphoniques gérés automatiquement. L'IA répond, qualifie et transfère uniquement les appels importants.",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    icon: Mail,
    title: "Automatisation emails",
    description: "Chaque email reçoit une réponse personnalisée en quelques secondes. Plus de retards, plus de clients frustrés.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Instagram",
    description: "Gérez des centaines de conversations simultanées sur WhatsApp et Instagram sans effort supplémentaire.",
    gradient: "from-cyan-500 to-blue-500",
  },
];

const Solutions = () => {
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
            La solution <span className="text-gradient">VoxFlow AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des agents IA qui répondent instantanément à vos clients, sur tous les canaux, sans interruption
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-gradient transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>

                <div className="mt-6 flex items-center text-primary group-hover:text-accent transition-colors">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;