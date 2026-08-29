import Image from "next/image";
import { Eyebrow, PageIntro, FeatherMark } from "@/components/ui.jsx";
import { FORMATION, EXPERIENCE_GROUPS } from "@/data/content.js";
import { IMAGES } from "@/data/images.js";

export const metadata = {
  title: "Qui suis-je ?",
  description:
    "Formation d'écrivain public et de correcteur, plus de 25 ans au service des collectivités, et un engagement durable dans le domaine culturel.",
};

export default function QuiSuisJe() {
  return (
    <>
      <section className="section first">
        <div className="section-inner two-col">
          <PageIntro
            eyebrow="Qui suis-je&nbsp;?"
            title="Un parcours au service des mots"
            lead="Une formation dédiée à l&rsquo;écriture publique et à la correction, complétée par plus de 25 ans d&rsquo;expérience professionnelle au service des collectivités et un engagement durable dans le domaine culturel."
          />
          <div className="portrait-panel">
            <Image
              src={IMAGES.quiSuisJePortrait}
              alt="Portrait de l&rsquo;écrivain public"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 380px"
            />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <Eyebrow>Formation professionnelle</Eyebrow>
          <h2>Formation</h2>
          <ol className="formation-list">
            {FORMATION.map((f, i) => (
              <li key={i}>
                <span className="formation-dot" />
                <div>
                  <p>{f.text}</p>
                  {f.sub && (
                    <ul className="feather-list nested">
                      {f.sub.map((s, j) => <li key={j}><FeatherMark size={12} /><span>{s}</span></li>)}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Eyebrow>Expérience et réalisations</Eyebrow>
          <h2>Expérience</h2>
          <div className="experience-grid">
            {EXPERIENCE_GROUPS.map((g, i) => {
              const Icon = g.icon;
              return (
                <div className="experience-card" key={i}>
                  <div className="service-icon"><Icon size={20} strokeWidth={1.6} /></div>
                  <h3>{g.title}</h3>
                  <ul className="feather-list">
                    {g.items.map((item, j) => <li key={j}><FeatherMark size={13} /><span>{item}</span></li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
