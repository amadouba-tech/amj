import { BackLink, PageIntro } from "./ui.jsx";

export default function AudienceDetailShell({ eyebrow, title, subtitle, lead, accent, children }) {
  return (
    <section className={`section first audience-detail accent-${accent}`}>
      <div className="section-inner">
        <BackLink href="/prestations">Tous les publics</BackLink>
        <PageIntro eyebrow={eyebrow} title={title} lead={lead} />
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {children}
        <p className="fine-print">
          La liste des prestations mentionnées dans les différentes rubriques n&rsquo;est pas exhaustive.
        </p>
      </div>
    </section>
  );
}
