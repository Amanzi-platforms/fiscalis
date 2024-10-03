import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/app.css";
// import { AppProvider } from "./app-provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Amanzi Fiscalis",
    default: "Amanzi Fiscalis",
  },
  description:
    "Découvrez Amanzi, la solution complète pour gérer trésorerie, autorisations, fiscalité et bien plus. Profitez d'une sécurité maximale et d'une interface intuitive pour optimiser vos opérations financières.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="text-sm scroll-smooth focus:scroll-auto">
        {/* <AppProvider> */}
        {children}
        {/* </AppProvider> */}
      </body>
    </html>
  );
}
