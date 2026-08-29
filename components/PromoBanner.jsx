"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

/**
 * Bandeau promotionnel en haut du site, façon paris.fr.
 * Contenu réel (pas un faux exemple) : met en avant la page Associations
 * & collectivités. À adapter selon l'actualité du moment.
 */
export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="promo-banner">
      <Link href="/prestations/associations" className="promo-banner-link">
        <span className="promo-banner-pill">Nouveau</span>
        <span className="promo-banner-text">
          Vous accompagnez des publics en difficulté&nbsp;? Découvrez les prestations pour associations et collectivités.
        </span>
      </Link>
      <button
        className="promo-banner-close"
        onClick={() => setVisible(false)}
        aria-label="Fermer le bandeau"
      >
        <X size={18} />
      </button>
    </div>
  );
}
