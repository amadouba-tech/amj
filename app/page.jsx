import Image from "next/image";
import { Eyebrow, Tag, PrimaryButton, OutlineButton, FeatherMark } from "@/components/ui.jsx";
import {
  FONCTIONNEMENT_STEPS,
  FONCTIONNEMENT_PARAGRAPHS,
  CHARTE_DEONTOLOGIE,
  HOME_PUBLICS_ITEMS,
} from "@/data/content.js";
import { IMAGES } from "@/data/images.js";
import logo from "@/assets/logo.png";

export default function Accueil() {
  return (
    <>
      <section className="event-hero">
        <div className="event-hero-photo">
          <Image src={IMAGES.heroAccueil} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" priority />
        </div>
        <div className="event-hero-content">
          <Eyebrow>Écrivain public</Eyebrow>
          <h1>Art des Mots Justes</h1>
          <p className="lead">
            Un accompagnement sur mesure pour tous vos écrits&nbsp;: démarches administratives, correspondance,
            récits de vie, documents professionnels ou institutionnels. Parce que chaque mot compte.
          </p>
          <p className="lead">
            L&rsquo;art de trouver le mot Juste pour exprimer une idée, convaincre, faire valoir un droit ou
            émouvoir&nbsp;: c&rsquo;est le cœur de métier de tout professionnel de l&rsquo;écriture. Avec AMJ Écrivain
            public, donnez à vos écrits l&rsquo;impact qu&rsquo;ils méritent.
          </p>
          <div className="event-hero-tags">
            <Tag accent="terracotta">Particuliers</Tag>
            <Tag accent="mauve">Associations &amp; collectivités</Tag>
            <Tag accent="bleuGris">Professionnels &amp; culture</Tag>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <Eyebrow>Fonctionnement</Eyebrow>
          <h2>Simple, souple, sans engagement</h2>
          {FONCTIONNEMENT_PARAGRAPHS.map((p, i) => (
            <p key={i} className="paragraph">{p}</p>
          ))}
          <div className="steps-grid">
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

          <div className="home-charte">
            <h2>{CHARTE_DEONTOLOGIE.title}</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Eyebrow>Publics concernés</Eyebrow>
          <h2>Des prestations pour vous</h2>
          <p className="section-lead">Trois univers, trois accompagnements.</p>
          <ul className="feather-list home-publics-list">
            {HOME_PUBLICS_ITEMS.map((item) => (
              <li key={item}><FeatherMark size={13} /><span>{item}</span></li>
            ))}
          </ul>
          <div className="cta-inline">
            <PrimaryButton href="/prestations">Des prestations pour vous</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="section alt qui-teaser">
        <div className="section-inner two-col">
          <div>
            <Eyebrow>Qui suis-je&nbsp;?</Eyebrow>
            <h2>Une double expérience, au service de vos mots</h2>
            <p>
              Plus de 25 ans au service de collectivités territoriales - une formation d&rsquo;écrivain public et de
              correcteur - et un engagement de longue date dans le domaine culturel&nbsp;: je mets cette double
              expérience au service de vos écrits, quels qu&rsquo;ils soient.
            </p>
            <OutlineButton href="/qui-suis-je">En savoir plus sur mon parcours</OutlineButton>
          </div>
          <div className="monogram-panel">
            <Image src={logo} alt="Art des Mots Justes" />
          </div>
        </div>
      </section>

      <section className="section cta-banner">
        <div className="section-inner">
          <h2>Une idée, un projet d&rsquo;écriture , un document à faire relire&nbsp;?</h2>
          <p>Parlons-en. L&rsquo;entretien et le devis sont toujours gratuits, et sans engagement.</p>
          <PrimaryButton href="/contact">Me contacter</PrimaryButton>
        </div>
      </section>
    </>
  );
}
