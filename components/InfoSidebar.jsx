import { MapPin, Calendar, Euro, Phone, Mail } from "lucide-react";

/**
 * Encart d'infos pratiques façon paris.fr (bloc rose sur la page de référence).
 * Réutilisable partout où un résumé pratique est utile (Contact, prestations...).
 *
 * La carte utilise OpenStreetMap (gratuit, sans clé API). Le bbox ci-dessous est
 * centré sur Sens (Yonne) à titre indicatif — à ajuster avec l'adresse
 * exacte une fois disponible.
 */
export default function InfoSidebar() {
  return (
    <aside className="info-sidebar">
      <h3>Écrivain public</h3>

      <div className="info-row">
        <MapPin size={18} />
        <div>
          <strong>Yonne (89)</strong>
          <span>Déplacements possibles dans le département, et à distance partout en France.</span>
        </div>
      </div>

      <div className="info-row">
        <Calendar size={18} />
        <div>
          <strong>Sur rendez-vous</strong>
          <span>Entretien téléphonique ou en présentiel, selon vos disponibilités.</span>
        </div>
      </div>

      <div className="info-row">
        <Euro size={18} />
        <div>
          <strong>Devis gratuit</strong>
          <span>Sans engagement, établi après un premier échange.</span>
        </div>
      </div>

      <div className="info-map">
        <iframe
          title="Localisation approximative — Sens, Yonne"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.05%2C48.02%2C3.51%2C48.37&layer=mapnik&marker=48.197%2C3.283"
          loading="lazy"
        />
      </div>

      <div className="info-contact-block">
        <div className="info-contact-title">Une question&nbsp;?</div>
        <div className="info-row compact">
          <Phone size={16} />
          <span>Coordonnées transmises via le formulaire de contact</span>
        </div>
        <div className="info-row compact">
          <Mail size={16} />
          <span>Réponse rapide</span>
        </div>
      </div>
    </aside>
  );
}
