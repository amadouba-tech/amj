import AudienceDetailShell from "@/components/AudienceDetailShell.jsx";
import { FeatherMark } from "@/components/ui.jsx";
import { PROFESSIONNELS } from "@/data/content.js";

export const metadata = {
  title: "Prestations pour professionnels & secteur culturel",
  description:
    "Professions libérales, entreprises, artistes et organismes culturels : écrits professionnels, communication, monographies.",
};

export default function PrestationsProfessionnels() {
  const lib = PROFESSIONNELS.liberaux;
  const art = PROFESSIONNELS.artistique;
  const LibIcon = lib.icon;
  const ArtIcon = art.icon;

  return (
    <AudienceDetailShell
      eyebrow="Publics concernés — Professionnels & secteur culturel"
      title="Prestations pour professionnels & secteur culturel"
      lead="Professions libérales, entreprises, artistes et organismes culturels&nbsp;: deux univers, un même souci de qualité pour vos écrits."
      accent="bleuGris"
    >
      <div className="sub-audience">
        <div className="sub-audience-header">
          <div className="service-icon"><LibIcon size={20} strokeWidth={1.6} /></div>
          <h2>{lib.title}</h2>
        </div>
        {lib.intro.map((p, i) => <p key={i} className="paragraph">{p}</p>)}
        <ul className="feather-list">
          {lib.items.map((item, i) => <li key={i}><FeatherMark size={13} /><span>{item}</span></li>)}
        </ul>
      </div>

      <div className="sub-audience">
        <div className="sub-audience-header">
          <div className="service-icon"><ArtIcon size={20} strokeWidth={1.6} /></div>
          <h2>{art.title}</h2>
        </div>
        {art.intro.map((p, i) => <p key={i} className="paragraph">{p}</p>)}
        <ul className="feather-list">
          {art.items.map((item, i) => <li key={i}><FeatherMark size={13} /><span>{item}</span></li>)}
        </ul>
      </div>
    </AudienceDetailShell>
  );
}
