import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const DocumentationPage: FC = () => {
  return (
    <div className=" min-h-screen py-10 space-y-12">
      {/* Header de la page */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-emerald-600">
          Documentation - Amanzi Fiscalis
        </h1>
        <p className="text-gray-600 mt-4">
          Apprenez à utiliser efficacement Amanzi Fiscalis pour gérer vos
          déclarations fiscales et vos paiements
        </p>
      </header>

      {/* Menu de navigation rapide */}
      <nav className="container mx-auto max-w-screen-lg flex justify-around text-center mb-12">
        <Link
          href="#create-account"
          className="text-emerald-600 font-medium hover:underline"
        >
          1. Créer un compte
        </Link>
        <Link
          href="#declare-taxes"
          className="text-emerald-600 font-medium hover:underline"
        >
          2. Déclarer vos impôts
        </Link>
        <Link
          href="#pay-taxes"
          className="text-emerald-600 font-medium hover:underline"
        >
          3. Payer vos taxes
        </Link>
        <Link
          href="#generate-reports"
          className="text-emerald-600 font-medium hover:underline"
        >
          4. Générer des rapports
        </Link>
        <Link
          href="#faq"
          className="text-emerald-600 font-medium hover:underline"
        >
          5. FAQ
        </Link>
      </nav>

      {/* Section 1: Créer un compte */}
      <section
        id="create-account"
        className="container mx-auto max-w-screen-lg mb-16"
      >
        <h2 className="text-3xl font-semibold text-emerald-600 mb-6">
          1. Créer un compte
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-gray-700">
            <p className="mb-4">
              Pour commencer à utiliser Amanzi Fiscalis, vous devez créer un
              compte. Suivez les étapes suivantes pour vous inscrire :
            </p>
            <ol className="list-decimal list-inside mb-4">
              <li>
                Cliquez sur le bouton "Créer un compte" sur la page d'accueil.
              </li>
              <li>
                Remplissez vos informations personnelles : nom, adresse email et
                mot de passe.
              </li>
              <li>
                Vérifiez votre adresse email et confirmez votre inscription via
                le lien envoyé.
              </li>
              <li>
                Connectez-vous à votre nouveau compte et explorez l'application
                !
              </li>
            </ol>
            <p>
              Besoin d'aide supplémentaire ? Consultez notre{" "}
              <a href="#faq" className="text-emerald-600 hover:underline">
                FAQ
              </a>
              .
            </p>
          </div>
          <div className="relative w-[450px] h-full">
            <Image
              src="/img/create-account.jpg"
              alt="Créer un compte"
              width={700}
              height={700}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Déclarer vos impôts */}
      <section id="declare-taxes" className="bg-white py-16">
        <div className="container mx-auto max-w-screen-lg">
          <h2 className="text-3xl font-semibold text-emerald-600 mb-6">
            2. Déclarer vos impôts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-72">
              <video
                controls
                className="w-full h-full object-cover rounded-lg shadow-lg"
              >
                <source src="/videos/declare-taxes.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
            <div className="text-gray-700">
              <p className="mb-4">
                Suivez ces étapes pour déclarer vos impôts :
              </p>
              <ol className="list-decimal list-inside mb-4">
                <li>Allez dans la section "Déclarations" du menu principal.</li>
                <li>
                  Sélectionnez le type d'impôt à déclarer (Impôt sur le revenu,
                  TVA, CNSS, etc.).
                </li>
                <li>
                  Remplissez les informations nécessaires : revenus, déductions,
                  TVA collectée et déductible.
                </li>
                <li>
                  Vérifiez les montants et soumettez la déclaration. Vous
                  recevrez une confirmation.
                </li>
              </ol>
              <p>
                Vous avez une question ? Consultez notre{" "}
                <a href="#faq" className="text-emerald-600 hover:underline">
                  FAQ
                </a>{" "}
                ou{" "}
                <a
                  href="/help/support"
                  className="text-emerald-600 hover:underline"
                >
                  contactez le support
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Payer vos taxes */}
      <section
        id="pay-taxes"
        className="container mx-auto max-w-screen-lg mb-16"
      >
        <h2 className="text-3xl font-semibold text-emerald-600 mb-6">
          3. Payer vos taxes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-gray-700">
            <p className="mb-4">
              Une fois vos déclarations soumises, suivez ces étapes pour régler
              vos taxes :
            </p>
            <ol className="list-decimal list-inside mb-4">
              <li>Accédez à la section "Paiements".</li>
              <li>Sélectionnez le type de paiement (Impôts, TVA, CNSS).</li>
              <li>
                Choisissez la méthode de paiement (virement bancaire, carte
                bancaire).
              </li>
              <li>Confirmez le paiement et téléchargez votre reçu.</li>
            </ol>
            <p>
              Pour plus de détails, vous pouvez{" "}
              <a href="#faq" className="text-emerald-600 hover:underline">
                consulter notre FAQ
              </a>
              .
            </p>
          </div>
          <div className="relative h-72">
            <Image
              src="/images/pay-taxes.png"
              alt="Payer vos taxes"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Générer des rapports */}
      <section id="generate-reports" className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-screen-lg">
          <h2 className="text-3xl font-semibold text-emerald-600 mb-6">
            4. Générer des rapports
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-72">
              <Image
                src="/images/generate-reports.png"
                alt="Générer des rapports"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-gray-700">
              <p className="mb-4">
                Générer des rapports fiscaux ou sociaux pour suivre vos
                paiements et déclarations :
              </p>
              <ol className="list-decimal list-inside mb-4">
                <li>Accédez à la section "Rapports".</li>
                <li>
                  Sélectionnez le type de rapport (fiscal, CNSS, historique des
                  paiements).
                </li>
                <li>Choisissez la période et générez le rapport.</li>
                <li>Téléchargez le rapport au format PDF pour archivage.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section id="faq" className="container mx-auto max-w-screen-lg mb-16">
        <h2 className="text-3xl font-semibold text-emerald-600 mb-6">5. FAQ</h2>
        <div className="text-gray-700">
          <p className="mb-4">
            Voici quelques réponses aux questions les plus fréquemment posées :
          </p>
          <ul className="list-disc list-inside">
            <li>Comment créer un compte sur Amanzi Fiscalis ?</li>
            <li>Comment déclarer mes impôts en ligne ?</li>
            <li>Comment payer mes cotisations CNSS via l'application ?</li>
            <li>
              Comment générer des rapports fiscaux pour une période donnée ?
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;
