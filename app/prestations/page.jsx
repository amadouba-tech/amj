import { Eyebrow, PageIntro, AudienceCard, FeatherMark } from "@/components/ui.jsx";
import { AUDIENCES, FONCTIONNEMENT_STEPS, FONCTIONNEMENT_PARAGRAPHS } from "@/data/content.js";

export const metadata = {
  title: "Des prestations pour vous",
  description:
    "Des services gradués et sur mesure, détaillés par public : particuliers, associations et collectivités, professionnels et secteur culturel.",
};

export default function Prestations() {
  return (
    <>
      <section className="section first">
        <div className="section-inner">
          <PageIntro
            eyebrow="Des prestations pour vous"
            title="Des services gradués, sur mesure, en fonction de vos besoins"
            lead=""
          />

          <div className="mini-cards">
            <div className="mini-card">
              <FeatherMark size={18} />
              <div>
                <h4>RELECTURE ET CORRECTION</h4>
                <p>Ne vous posez plus de questions su la manière de rédiger vos textes.Je relis vos écrits et assure la correction de l'orthographe, la grammaire, la syntaxe, voire la mise en forme de vos documents .</p>
              </div>
            </div>
            <div className="mini-card">
              <FeatherMark size={18} color="var(--bleu-gris)" />
              <div>
                <h4>Réécriture, réformulation de textes</h4>
                <p>On se situe entre la correstion et la rédaction.La Réécriture vise à retravailler votre écrit afin d'en améliorer le style rédactionnel.</p>
              </div>
            </div>
            <div className="mini-card">
              <FeatherMark size={18} color="var(--bleu-gris)" />
              <div>
                <h4>REDACTION DE TEXTES</h4>
                <p>Adieu la page blanche ! j'assure la rédaction de tous vos écrits : CV, lettre de motivation, lettres administratives, écrits professionnels, récits de vie, monographies, discours  etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <Eyebrow>Fonctionnement</Eyebrow>
          <h2>Comment je procède ?</h2>
          {FONCTIONNEMENT_PARAGRAPHS.map((p, i) => <p key={i} className="paragraph">{p}</p>)}
          <div className="steps-grid compact">
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
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="charte-card">
            <h4>Charte de déontologie</h4>
            <p>Bientôt disponible sur cette page.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <Eyebrow>Publics concernés</Eyebrow>
          <h2>Choisissez votre profil</h2>
          <p className="section-lead">
            Pour alléger la lecture, les prestations sont détaillées par public. Cliquez sur votre profil pour
            découvrir les services qui vous concernent.
          </p>
          <div className="audience-grid">
            {AUDIENCES.map((a) => <AudienceCard key={a.id} audience={a} />)}
          </div>
          <p className="fine-print">
            La liste des prestations mentionnées dans les différentes rubriques n&rsquo;est pas exhaustive.
          </p>
        </div>
      </section>
    </>
  );
}
