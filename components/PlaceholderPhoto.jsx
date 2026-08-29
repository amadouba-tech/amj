/**
 * Placeholder "photo à remplacer" généré entièrement en code (SVG inline).
 * Aucun fichier image nécessaire — évite les soucis de fichiers manquants
 * ou corrompus. À remplacer par de vraies photos avant mise en ligne.
 */
export default function PlaceholderPhoto({ label = "", className = "" }) {
    return (
      <div className={`placeholder-photo ${className}`}>
        <svg viewBox="0 0 64 64" className="placeholder-photo-icon" aria-hidden="true">
          <rect x="8" y="14" width="48" height="36" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="20" cy="26" r="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M10 44 L24 30 L34 40 L42 32 L54 44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
        <span className="placeholder-photo-title">Photo à remplacer</span>
        {label && <span className="placeholder-photo-label">{label}</span>}
      </div>
    );
  }