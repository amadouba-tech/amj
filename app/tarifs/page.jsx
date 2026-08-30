import { PageIntro, PrimaryButton, FeatherMark } from "@/components/ui.jsx";
import { FONCTIONNEMENT_STEPS, TARIFS_INDICATIFS } from "@/data/content.js";

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
          lead="Exerçant mon activité d&rsquo;écrivain public dans le cadre juridique d&rsquo;une auto-entreprise, mes tarifs et factures sont établis hors TVA, non applicable, art. 293 B du Code général des impôts."
        />
        <p className="paragraph">
          Chaque demande est différente, chaque tarif l&rsquo;est donc aussi. Plutôt qu&rsquo;une grille figée, je préfère
          prendre le temps de comprendre votre besoin avant de vous proposer un prix juste et transparent.
        </p>
        <ul className="feather-list tarif-list">
          {TARIFS_INDICATIFS.map((text, i) => (
            <li key={i}>
              <FeatherMark size={13} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
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
