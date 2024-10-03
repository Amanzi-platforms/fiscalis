import { FC } from "react";
import Link from "next/link";

const HelpPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header de la page */}
      <h1 className="text-3xl font-bold mb-6">Aide</h1>

      {/* Liste des sous-sections */}
      <div className="space-y-4">
        {/* FAQ */}
        <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">FAQ</h2>
          <p className="text-gray-600 mb-4">
            Consultez la Foire aux questions pour obtenir des réponses rapides à
            vos questions.
          </p>
          <Link href="/help/faq" className="text-emerald-600 hover:underline transition-all duration-300 ease-in-out">
            Accéder à la FAQ
          </Link>
        </div>

        {/* Contacter le support */}
        <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Contacter le support</h2>
          <p className="text-gray-600 mb-4">
            Si vous avez besoin d'assistance, contactez notre équipe de support.
          </p>
          <Link
            href="/help/support"
            className="text-emerald-600 hover:underline transition-all duration-300 ease-in-out"
          >
            Contacter le support
          </Link>
        </div>

        {/* Documentation */}
        <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Documentation</h2>
          <p className="text-gray-600 mb-4">
            Accédez à la documentation complète pour une aide détaillée sur
            l'utilisation de l'application.
          </p>
          <Link
            href="/help/documentation"
            className="text-emerald-600 hover:underline transition-all duration-300 ease-in-out"
          >
            Voir la documentation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
