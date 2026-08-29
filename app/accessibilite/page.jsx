import { PageIntro } from "@/components/ui.jsx";

export const metadata = { title: "Accessibilité" };

export default function Accessibilite() {
  return (
    <section className="section first">
      <div className="section-inner narrow">
        <PageIntro eyebrow="Accessibilité" title="Déclaration d'accessibilité" />
        <div className="placeholder-card">
          <p>
            La déclaration d&rsquo;accessibilité (niveau de conformité au RGAA, résultats d&rsquo;audit le cas échéant,
            voies de recours) reste à rédiger.
          </p>
          <p className="fine-print">
            Un site de particulier n&rsquo;est pas légalement tenu à cette déclaration, mais elle reste une bonne
            pratique si vous souhaitez la publier.
          </p>
        </div>
      </div>
    </section>
  );
}
