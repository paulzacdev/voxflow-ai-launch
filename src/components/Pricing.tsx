import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Globe, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Globe,
    price: "25 000",
    currency: "DZD",
    period: "/ mois",
    description: "Idéal pour démarrer avec l'IA",
    features: [
      "Chatbot IA simple intégré au site web",
      "Réponses automatisées basiques",
      "Support email IA",
      "1 canal : Email OU WhatsApp",
      "5 000 messages / mois",
    ],
    cta: "Commencer avec Starter",
    popular: false,
  },
  {
    name: "Pro",
    icon: Zap,
    price: "55 000",
    currency: "DZD",
    period: "/ mois",
    description: "Pour les entreprises ambitieuses",
    features: [
      "Chatbot IA avancé + IA vocale",
      "Automatisation complète email + WhatsApp",
      "Intégration Instagram DM et Messenger",
      "20 000 messages / mois",
      "Tableau d'analyse des conversations",
      "Support prioritaire",
    ],
    cta: "Choisir Pro",
    popular: true,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-accent mb-4">
            Tarification
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Des plans adaptés à vos{" "}
            <span className="text-gradient">besoins</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez le plan qui correspond à votre volume d'interactions et commencez à automatiser votre support client.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-sm font-semibold text-background">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div
                className={`h-full glass-card rounded-3xl p-8 transition-all duration-500 ${
                  plan.popular
                    ? "border-primary/50 glow-effect"
                    : "hover:border-primary/30"
                }`}
              >
                {/* Plan header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${plan.popular ? "bg-primary/20" : "bg-secondary"}`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? "text-accent" : "text-primary"}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${plan.popular ? "text-gradient" : ""}`}>
                      {plan.price}
                    </span>
                    <span className="text-lg text-muted-foreground">{plan.currency}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? "bg-accent/20" : "bg-primary/20"}`}>
                        <Check className={`w-4 h-4 ${plan.popular ? "text-accent" : "text-primary"}`} />
                      </div>
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50"
                      : "bg-secondary hover:bg-secondary/80 text-foreground border border-border hover:border-primary/50"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-muted-foreground mt-12"
        >
          Tous les prix sont hors taxes. Facturation mensuelle. Annulation possible à tout moment.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
