import { PageIntro, PrimaryButton, FeatherMark } from "@/components/ui.jsx";
import { FONCTIONNEMENT_STEPS, TARIFS_INTRO, TARIFS_PRIX, TARIFS_PRECISIONS } from "@/data/content.js";

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
          lead={TARIFS_INTRO[0]}
        />
        <p className="paragraph">{TARIFS_INTRO[1]}</p>

        <ul className="feather-list tarif-list">
          {TARIFS_PRIX.map((text, i) => (
            <li key={i}>
              <FeatherMark size={13} />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        {TARIFS_PRECISIONS.map((text, i) => (
          <p key={i} className="paragraph tarif-precision">{text}</p>
        ))}

        <p className="tarif-note">
          Espaces comprises<sup>1</sup>. Pour information, une page standard comprend 1 500 signes (espaces comprises, avec une police de caractères Times New Roman 12 ou Calibri 12)
        </p>

        <div className="steps-grid">
          {FONCTIONNEMENT_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div className="step-card" key={i}>
                <div className="step-icon"><Icon size={20} strokeWidth={1.6} /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            );
          })}
        </div>
        <div className="cta-inline">
          <PrimaryButton href="/contact">Demander mon devis gratuit</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
