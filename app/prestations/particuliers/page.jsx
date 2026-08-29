import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AudienceDetailShell from "@/components/AudienceDetailShell.jsx";
import { ServiceBlock } from "@/components/ui.jsx";
import { PARTICULIERS } from "@/data/content.js";

export const metadata = {
  title: "Prestations pour particuliers",
  description: PARTICULIERS.intro,
};

export default function PrestationsParticuliers() {
  return (
    <AudienceDetailShell
      eyebrow="Publics concernés — Particuliers"
      title="Prestations pour particuliers"
      lead={PARTICULIERS.intro}
      accent="terracotta"
    >
      <div className="service-list">
        {PARTICULIERS.sections.map((s, i) => <ServiceBlock key={i} section={s} />)}
      </div>
      <Link className="callout" href={`/prestations/${PARTICULIERS.callout.target}`}>
        <span>{PARTICULIERS.callout.text}</span>
        <span className="callout-link">{PARTICULIERS.callout.linkLabel} <ArrowRight size={15} /></span>
      </Link>
    </AudienceDetailShell>
  );
}
