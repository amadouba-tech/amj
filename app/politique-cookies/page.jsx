import { PageIntro } from "@/components/ui.jsx";

export const metadata = { title: "Politique de cookies" };

export default function PolitiqueCookies() {
  return (
    <section className="section first">
      <div className="section-inner narrow">
        <PageIntro eyebrow="Vie privée" title="Politique de cookies" />
        <div className="placeholder-card">
          <p>
            En l&rsquo;état, ce site ne dépose aucun cookie de suivi ni traceur publicitaire&nbsp;: il n&rsquo;utilise que ce
            qui est strictement nécessaire à son fonctionnement.
          </p>
          <p className="fine-print">
            Si un outil de mesure d&rsquo;audience, un formulaire relié à un service externe ou une newsletter sont
            ajoutés par la suite, cette page devra être mise à jour en conséquence.
          </p>
        </div>
      </div>
    </section>
  );
}
