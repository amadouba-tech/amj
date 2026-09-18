import { PageIntro, PrimaryButton, FeatherListItem } from "@/components/ui.jsx";
import { TARIFS_INTRO, TARIFS_PRIX, TARIFS_PRECISIONS, TARIFS_NOTE } from "@/data/content.js";

export const metadata = {
  title: "Tarifs",
  description: "Un devis gratuit et sur mesure, établi après un entretien sans engagement.",
};

export default function Tarifs() {
  return (
    <section className="section first">
      <div className="section-inner">
        <PageIntro
          eyebrow="Tarifs"
          title="Un devis gratuit, sur mesure"
        />
        <p className="paragraph tarif-intro-legal">{TARIFS_INTRO[0]}</p>
        <p className="paragraph tarif-intro-lead">
          {TARIFS_INTRO[1].split("||").map((part, i) => (
            <span key={i}>{i > 0 && <br />}{part}</span>
          ))}
        </p>

        <ul className="feather-list tarif-list">
          {TARIFS_PRIX.map((text, i) => (
            <FeatherListItem key={i} item={text} />
          ))}
        </ul>

        {TARIFS_PRECISIONS.map((text, i) => (
          <p key={i} className="paragraph tarif-precision">{text}</p>
        ))}

        <p className="tarif-note">{TARIFS_NOTE}</p>

        <div className="cta-inline">
          <PrimaryButton href="/contact">Demander mon devis gratuit</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
