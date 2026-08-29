import { MapPin, Calendar, Euro, Phone, Mail } from "lucide-react";

/**
 * Encart d'infos pratiques façon paris.fr (bloc rose sur la page de référence).
 * Réutilisable partout où un résumé pratique est utile (Contact, prestations...).
 *
 * La carte utilise OpenStreetMap (gratuit, sans clé API). Le bbox ci-dessous est
 * centré sur l'Yonne (Auxerre) à titre indicatif — à ajuster avec l'adresse
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
          title="Localisation approximative — Yonne"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.4%2C47.6%2C3.85%2C47.95&layer=mapnik&marker=47.8%2C3.57"
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
          <span>Réponse sous quelques jours ouvrés</span>
        </div>
      </div>
    </aside>
  );
}
