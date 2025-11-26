import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice Support Client",
    company: "TechCorp France",
    content: "VoxFlow.ai a révolutionné notre support client. Nos équipes sont désormais focalisées sur les cas complexes tandis que l'IA gère 80% des demandes courantes.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
  },
  {
    name: "Marc Dubois",
    role: "CEO",
    company: "InnovateCom",
    content: "ROI impressionnant en moins de 3 mois. La qualité des réponses automatiques dépasse nos attentes et nos clients adorent la réactivité.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc",
  },
  {
    name: "Léa Bernard",
    role: "Head of Customer Success",
    company: "StartupXYZ",
    content: "L'intégration a été ultra-simple et le support VoxFlow.ai est exceptionnel. Nous avons pu scaler notre support sans recruter.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lea",
  },
];

const Testimonials = () => {
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
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nos clients transforment leur support client avec VoxFlow.ai
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-6 hover:bg-primary/5 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-secondary"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-primary">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Plus de 100 entreprises nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["TechCorp", "InnovateCom", "StartupXYZ", "GlobalCo", "FutureNet"].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;