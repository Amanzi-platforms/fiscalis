import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page non trouvée
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Nous ne pouvons pas trouver la ressource demandée.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
};

export default NotFound;
