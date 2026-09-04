import AudienceDetailShell from "@/components/AudienceDetailShell.jsx";
import { ServiceBlock } from "@/components/ui.jsx";
import { ASSOCIATIONS } from "@/data/content.js";

export const metadata = {
  title: "Prestations pour associations et collectivités",
  description: ASSOCIATIONS.intro,
};

export default function PrestationsAssociations() {
  return (
    <AudienceDetailShell
      eyebrow="Publics concernés — Associations et collectivités"
      title={ASSOCIATIONS.title}
      subtitle={ASSOCIATIONS.subtitle}
      lead={ASSOCIATIONS.intro}
      accent="mauve"
    >
      <div className="service-list">
        {ASSOCIATIONS.sections.map((s, i) => <ServiceBlock key={i} section={s} />)}
      </div>
    </AudienceDetailShell>
  );
}
