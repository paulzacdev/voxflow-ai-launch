import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ConditionsUtilisation = () => {
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
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Objet</h2>
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web VoxFlow.ai et de l'ensemble des services d'automatisation par intelligence artificielle proposés. En accédant à notre site ou en utilisant nos services, vous acceptez d'être lié par ces conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Description des services</h2>
              <p>VoxFlow.ai propose les services suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Agents IA vocaux :</strong> automatisation des appels téléphoniques avec des agents conversationnels intelligents</li>
                <li><strong>Chatbots IA :</strong> assistance automatisée sur site web et applications</li>
                <li><strong>Automatisation email :</strong> gestion intelligente des communications par email</li>
                <li><strong>Messagerie omnicanal :</strong> automatisation WhatsApp, Instagram, Messenger</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Accès aux services</h2>
              <p>
                L'accès à nos services est réservé aux professionnels et entreprises. Pour utiliser nos services, vous devez :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Être une personne morale ou un entrepreneur individuel</li>
                <li>Fournir des informations exactes et à jour</li>
                <li>Respecter les présentes CGU</li>
                <li>Disposer d'une connexion internet stable</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Obligations de l'utilisateur</h2>
              <p>En utilisant nos services, vous vous engagez à :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ne pas utiliser nos services à des fins illégales ou frauduleuses</li>
                <li>Respecter les droits de propriété intellectuelle</li>
                <li>Ne pas tenter de contourner les mesures de sécurité</li>
                <li>Ne pas utiliser nos IA pour diffuser du contenu illicite</li>
                <li>Maintenir la confidentialité de vos identifiants</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu du site VoxFlow.ai (textes, images, logos, logiciels, technologies d'IA) est protégé par les droits de propriété intellectuelle. Toute reproduction, représentation ou exploitation non autorisée est strictement interdite.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Tarification et paiement</h2>
              <p>
                Les tarifs de nos services sont indiqués sur notre site. Les prix sont exprimés en Dinars Algériens (DZD) et sont susceptibles d'être modifiés. Le paiement s'effectue selon les modalités convenues lors de la souscription.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Limitation de responsabilité</h2>
              <p>
                VoxFlow.ai s'efforce de fournir des services de qualité mais ne peut garantir un fonctionnement ininterrompu ou exempt d'erreurs. Notre responsabilité est limitée au montant des sommes versées pour les services concernés. Nous ne sommes pas responsables des dommages indirects.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Résiliation</h2>
              <p>
                Chaque partie peut résilier le contrat selon les conditions prévues. En cas de violation des CGU, VoxFlow.ai se réserve le droit de suspendre ou résilier l'accès aux services sans préavis.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">9. Modification des CGU</h2>
              <p>
                VoxFlow.ai se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés des modifications substantielles. L'utilisation continue des services après modification vaut acceptation des nouvelles conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">10. Contact</h2>
              <p>
                Pour toute question concernant ces conditions d'utilisation :
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

export default ConditionsUtilisation;
