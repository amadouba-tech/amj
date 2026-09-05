import AudienceDetailShell from "@/components/AudienceDetailShell.jsx";
import { FeatherMark, FeatherListItem } from "@/components/ui.jsx";
import { PROFESSIONNELS } from "@/data/content.js";

export const metadata = {
  title: "Prestations pour professionnels et secteur culturel",
  description:
    "Professions libérales, entreprises, artistes et structures culturelles : écrits professionnels, communication, monographies.",
};

export default function PrestationsProfessionnels() {
  const lib = PROFESSIONNELS.liberaux;
  const art = PROFESSIONNELS.artistique;
  const LibIcon = lib.icon;
  const ArtIcon = art.icon;

  return (
    <AudienceDetailShell
      eyebrow="Publics concernés — Professionnels et secteur culturel"
      title="Prestations pour autres professionnels et structures culturelles"
      lead="Professions libérales, entreprises, artistes et structures culturelles&nbsp;: deux univers, un même souci de qualité pour vos écrits."
      accent="bleuGris"
    >
      <div className="sub-audience">
        <div className="sub-audience-header">
          <div className="service-icon"><LibIcon size={20} strokeWidth={1.6} /></div>
          <h2>{lib.title}</h2>
        </div>
        {lib.intro.map((p, i) => <p key={i} className="paragraph">{p}</p>)}
        <ul className="feather-list">
          {lib.items.map((item, i) => <FeatherListItem key={i} item={item} />)}
        </ul>
      </div>

      <div className="sub-audience">
        <div className="sub-audience-header">
          <div className="service-icon"><ArtIcon size={20} strokeWidth={1.6} /></div>
          <h2>{art.title}</h2>
        </div>
        {art.intro.map((p, i) => <p key={i} className="paragraph">{p}</p>)}
        <ul className="feather-list">
          {art.items.map((item, i) => <FeatherListItem key={i} item={item} />)}
        </ul>
      </div>
    </AudienceDetailShell>
  );
}
