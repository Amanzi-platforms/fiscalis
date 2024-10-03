"use client";

import React, { ChangeEvent, FC, useState } from "react";
import linksData from "@/data/links.json";
import documentsData from "@/data/documents.json";
import Link from "next/link";
import { useRouter } from "next/navigation";


export const GlobalSearchResults: FC = () => {
  const [activeTab, setActiveTab] = useState<"links" | "documents">("links");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleTabChange = (tab: "links" | "documents") => {
    setActiveTab(tab);
    setSearchQuery("");
  };

  const filteredLinks = linksData.filter((link) =>
    link.label.toLowerCase().includes(searchQuery)
  );

  const filteredDocuments = {
    paiements: documentsData.paiements.filter((doc) =>
      doc.label.toLowerCase().includes(searchQuery)
    ),
    declarations: documentsData.declarations.filter((doc) =>
      doc.label.toLowerCase().includes(searchQuery)
    ),
  };

  const router = useRouter();

  return (
    <div className="h-full flex flex-col justify-between">
      <input
        type="text"
        placeholder="Rechercher..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => handleTabChange("links")}
          className={`px-4 py-1 rounded transition-all duration-300 ease-in-out border ${
            activeTab === "links"
              ? "bg-emerald-600 text-white hover:bg-white border-emerald-600 hover:text-emerald-600"
              : "hover:bg-gray-100"
          }`}
        >
          Liens
        </button>
        <button
          onClick={() => handleTabChange("documents")}
          className={`px-4 py-1 rounded transition-all duration-300 ease-in-out border ${
            activeTab === "documents"
              ? "bg-emerald-600 text-white hover:bg-white border-emerald-600 hover:text-emerald-600"
              : "hover:bg-gray-100"
          }`}
        >
          Déclarations et Paiements
        </button>
      </div>

      <ul className="mt-4 space-y-2 overflow-y-auto h-[20rem]">
        {searchQuery ? (
          activeTab === "links" ? (
            filteredLinks.length > 0 ? (
              filteredLinks.map((link) => (
                <li key={link.path} className="p-2 border-b border-gray-200">
                  <Link
                    href={link.path}
                    onClick={() => router.refresh()}
                    className="hover:text-emerald-600 text-gray-800 transition-all duration-300 ease-in-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))
            ) : (
              <li className="p-2">Aucun lien trouvé</li>
            )
          ) : (
            <>
              <h3 className="font-bold">Paiements</h3>
              {filteredDocuments.paiements.length > 0 ? (
                filteredDocuments.paiements.map((doc, index) => (
                  <li key={index} className="p-2 border-b border-gray-200">
                    {doc.label} - Montant : {doc.montant ?? "Non spécifié"} -
                    Date d&apos;échéance :{" "}
                    {doc.date_echeance ?? "Non spécifiée"}
                  </li>
                ))
              ) : (
                <li className="p-2">Aucun paiement trouvé</li>
              )}

              <h3 className="font-bold mt-4">Déclarations</h3>
              {filteredDocuments.declarations.length > 0 ? (
                filteredDocuments.declarations.map((doc, index) => (
                  <li key={index} className="p-2 border-b border-gray-200">
                    {doc.label} - Montant : {doc.montant ?? "Non spécifié"} -
                    Date de déclaration :{" "}
                    {doc.date_declaration ?? "Non spécifiée"}
                  </li>
                ))
              ) : (
                <li className="p-2">Aucune déclaration trouvée</li>
              )}
            </>
          )
        ) : (
          <li className="p-2">
            Veuillez entrer un terme de recherche pour voir les résultats
          </li>
        )}
      </ul>
    </div>
  );
};
