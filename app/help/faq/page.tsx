"use client";

import { CircleHelp } from "lucide-react";
import { useState, useEffect } from "react";
import FAQData from "@/data/faq.json";

interface Response {
  content: string;
  responded_by: string;
  response_time: string;
}

interface FAQItem {
  subject: string;
  content: string;
  request_by: string;
  request_time: string;
  responses: Response[];
}

const FAQPage = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);

  useEffect(() => {
    setFaqItems(FAQData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-emerald-600 text-center mb-6">FAQ</h1>

      <div className="flex justify-center mb-6">
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-700 transition">
          Poser une question
        </button>
      </div>

      {/* Liste des questions */}
      <div className="space-y-8">
        {faqItems.length > 0 ? (
          faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-emerald-600 transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-emerald-600 flex items-center mb-2">
                <CircleHelp className="mr-2" />
                {item.subject}
              </h2>
              <p className="mt-2 text-gray-700">{item.content}</p>
              <div className="mt-1 text-sm text-gray-600">
                Posée par {item.request_by} le {new Date(item.request_time).toLocaleString()}
              </div>
              
              {/* Réponses */}
              <div className="mt-4">
                <h3 className="text-lg font-medium text-emerald-600">Réponses :</h3>
                {item.responses.length > 0 ? (
                  item.responses.map((response, idx) => (
                    <div key={idx} className="mt-2 border-t border-gray-200 pt-2">
                      <p className="text-gray-800">{response.content}</p>
                      <div className="mt-1 text-sm text-gray-600">
                        Répondu par {response.responded_by} le {new Date(response.response_time).toLocaleString()}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">Aucune réponse disponible.</p>
                )}
              </div>
              <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
                Répondre
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Aucune question disponible pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default FAQPage;
