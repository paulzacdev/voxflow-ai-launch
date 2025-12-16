import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
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
            Mentions Légales
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Éditeur du site</h2>
              <p>
                Le site VoxFlow.ai est édité par :
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Raison sociale :</strong> VoxFlow.ai</li>
                <li><strong>Activité :</strong> Services d'automatisation par intelligence artificielle pour le support client</li>
                <li><strong>Email :</strong> flowaivox@gmail.com</li>
                <li><strong>WhatsApp :</strong> +21376891935</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Directeur de la publication</h2>
              <p>
                Le directeur de la publication est le représentant légal de VoxFlow.ai.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Hébergement</h2>
              <p>
                Le site est hébergé par :
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Hébergeur :</strong> Netlify, Inc.</li>
                <li><strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA</li>
                <li><strong>Site web :</strong> www.netlify.com</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu du site VoxFlow.ai est protégé par le droit d'auteur et les lois relatives à la propriété intellectuelle. Cela comprend notamment :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Le design et l'interface graphique</li>
                <li>Les textes, images et illustrations</li>
                <li>Le logo et la marque VoxFlow.ai</li>
                <li>Les technologies et algorithmes d'IA</li>
                <li>Le code source et les logiciels</li>
              </ul>
              <p>
                Toute reproduction, représentation, modification ou exploitation non autorisée du contenu est strictement interdite et peut donner lieu à des poursuites judiciaires.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Données personnelles</h2>
              <p>
                Conformément à la réglementation en vigueur sur la protection des données personnelles, vous disposez de droits sur vos données. Pour en savoir plus, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Cookies</h2>
              <p>
                Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers des sites tiers. VoxFlow.ai n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Limitation de responsabilité</h2>
              <p>
                VoxFlow.ai s'efforce de fournir des informations exactes et à jour sur son site. Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisation des informations et contenus disponibles sur ce site se fait sous la pleine responsabilité de l'utilisateur.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">9. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit algérien. Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux algériens.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">10. Contact</h2>
              <p>
                Pour toute question concernant ces mentions légales :
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

export default MentionsLegales;
