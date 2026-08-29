import { PageIntro } from "@/components/ui.jsx";

export const metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <section className="section first">
      <div className="section-inner narrow">
        <PageIntro eyebrow="Informations légales" title="Mentions légales" />
        <div className="placeholder-card">
          <p>
            Cette page reste à compléter avec les informations légales obligatoires&nbsp;: identité de
            l&rsquo;auto-entreprise (nom, SIRET, adresse), directeur de publication, hébergeur du site, etc.
          </p>
          <p className="fine-print">
            Ces informations doivent être exactes et à jour avant la mise en ligne définitive du site — n&rsquo;hésitez
            pas à vous faire accompagner pour vous assurer qu&rsquo;elles sont complètes.
          </p>
        </div>
      </div>
    </section>
  );
}
