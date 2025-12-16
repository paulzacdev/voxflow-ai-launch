import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
              <p>
                VoxFlow.ai s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services d'automatisation par intelligence artificielle.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Données collectées</h2>
              <p>Nous collectons les types de données suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone, nom de l'entreprise</li>
                <li><strong>Données de communication :</strong> messages échangés via notre chatbot, historique des appels avec nos agents IA vocaux</li>
                <li><strong>Données techniques :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
                <li><strong>Données d'utilisation :</strong> interactions avec nos services, préférences de communication</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Utilisation des données</h2>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir et améliorer nos services d'automatisation IA</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Répondre à vos demandes et vous contacter</li>
                <li>Envoyer des communications marketing (avec votre consentement)</li>
                <li>Analyser et améliorer nos performances</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Partage des données</h2>
              <p>
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations avec :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nos prestataires techniques (hébergement, analyse)</li>
                <li>Les autorités compétentes si la loi l'exige</li>
                <li>Nos partenaires avec votre consentement explicite</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Cela inclut le chiffrement des données, des pare-feu et des contrôles d'accès stricts.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Vos droits</h2>
              <p>Conformément à la réglementation applicable, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers stockés sur votre appareil qui nous permettent de mémoriser vos préférences et d'analyser le trafic du site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email :</strong> flowaivox@gmail.com</li>
                <li><strong>WhatsApp :</strong> +21376891935</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
