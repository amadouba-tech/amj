import { PageIntro, PrimaryButton } from "@/components/ui.jsx";

export const metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <section className="section first">
      <div className="section-inner">
        <PageIntro
          eyebrow="Erreur 404"
          title="Cette page n&rsquo;existe pas"
          lead="Le lien suivi ne correspond à aucune page du site. Retournez à l&rsquo;accueil pour retrouver vos repères."
        />
        <PrimaryButton href="/">Retour à l&rsquo;accueil</PrimaryButton>
      </div>
    </section>
  );
}
