"use client";

import { CircleGauge, CirclePlus } from "lucide-react";
import React from "react";
import { FileTreeItem } from "./file-tree-item";

export const FileTree = () => {
  return (
    <nav className="h-full w-full">
      <ul className="h-full space-y-2">
        {/* Tableau de bord */}
        <FileTreeItem
          icon={CircleGauge}
          label="Tableau de bord"
          path="/dashboard"
        />

        {/* Déclarations */}
        <FileTreeItem
          label="Déclarations"
          subFiles={[
            { label: "Nouvelle déclaration",  icon: CirclePlus,},
            { label: "Taxe sur la Valeur Ajoutée", path: "/declarations/vat" },
            { label: "Impôt sur le revenu", path: "/declarations/income-tax" },
            {
              label: "Sécurité sociale",
              path: "/declarations/social-security",
            },
            { label: "Droits d'accise", path: "/declarations/excise-duties" },
          ]}
        />

        {/* Paiements */}
        <FileTreeItem
          label="Paiements"
          subFiles={[
            {
              label: "Effectuer un paiement",
              path: "/payments/make",
              icon: CirclePlus,
            },
            { label: "Historique des paiements", path: "/payments/history" },
          ]}
        />

        {/* Rapports */}
        {/* <FileTreeItem
          label="Rapports"
          subFiles={[
            { label: "Rapport général", path: "/reports/general" },
            { label: "Rapport fiscal", path: "/reports/tax" },
            {
              label: "Rapport de sécurité sociale",
              path: "/reports/social-security",
            },
          ]}
        /> */}

        {/* Paramètres */}
        {/* <FileTreeItem
          label="Paramètres"
          subFiles={[
            { label: "Paramètres du profil", path: "/settings/profile" },
            {
              label: "Paramètres de notification",
              path: "/settings/notifications",
            },
            { label: "Gestion du compte", path: "/settings/account" },
          ]}
        /> */}

        {/* Aide */}
        {/* <FileTreeItem
          label="Aide"
          subFiles={[
            { label: "FAQ", path: "/help/faq" },
            { label: "Contacter le support", path: "/help/support" },
            { label: "Documentation", path: "/help/documentation" },
          ]}
        /> */}
      </ul>
    </nav>
  );
};
