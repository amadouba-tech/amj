import Image from "next/image";
import { Eyebrow, PageIntro, AudienceCard, FeatherMark } from "@/components/ui.jsx";
import { AUDIENCES } from "@/data/content.js";
import { IMAGES } from "@/data/images.js";

const PRESTATION_SERVICES = [
  {
    title: "RELECTURE ET CORRECTION",
    text: "Ne vous posez plus de questions sur la manière de rédiger vos textes. Je relis vos écrits et assure la correction de l\u2019orthographe, la grammaire, la syntaxe, voire la mise en forme de vos documents.",
    image: IMAGES.relectureCorrection,
    imageAlt: "Document corrigé à la main, illustrant la relecture et la correction de textes",
    imageFirst: false,
  },
  {
    title: "REECRITURE, REFORMULATION DE TEXTES",
    text: "On se situe entre la correction et la rédaction. La réécriture vise à retravailler votre écrit afin d\u2019en améliorer le style rédactionnel.",
    image: IMAGES.reecriture,
    imageAlt: "Texte réécrit avec corrections en rouge, illustrant la réformulation de textes",
    imageFirst: true,
  },
  {
    title: "REDACTION DE TEXTES",
    text: "Adieu la page blanche\u00A0! J\u2019assure la rédaction de tous vos écrits\u00A0: CV, lettre de motivation, lettres administratives, écrits professionnels, récits de vie, monographies, discours, etc.",
    image: null,
  },
];

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
            title="Des prestations pour tous publics"
            lead="Pour alléger la lecture, les prestations sont détaillées par public. Cliquez sur votre profil pour découvrir les services qui vous concernent."
          />
          <div className="audience-grid">
            {AUDIENCES.map((a) => <AudienceCard key={a.id} audience={a} />)}
          </div>
          <p className="fine-print">
            La liste des prestations mentionnées dans les différentes rubriques n&rsquo;est pas exhaustive.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <Eyebrow>Des prestations pour vous</Eyebrow>
          <h2>Des services gradués, sur mesure, en fonction de vos besoins</h2>

          <div className="prestation-services">
            {PRESTATION_SERVICES.map((service) => (
              <article
                key={service.title}
                className={`prestation-service${service.image ? " has-image" : ""}${service.imageFirst ? " image-first" : ""}`}
              >
                <div className="prestation-service-body">
                  <FeatherMark size={18} color="var(--terracotta)" />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </div>
                {service.image && (
                  <div className="prestation-service-photo">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 860px) 100vw, 420px"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
