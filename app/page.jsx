import Image from "next/image";
import { Eyebrow, Tag, PrimaryButton, OutlineButton, AudienceCard } from "@/components/ui.jsx";
import DiscoverCarousel from "@/components/DiscoverCarousel.jsx";
import { AUDIENCES, FONCTIONNEMENT_STEPS, DISCOVER_CARDS } from "@/data/content.js";
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
          <div className="event-hero-tags">
            <Tag accent="terracotta">Particuliers</Tag>
            <Tag accent="mauve">Associations &amp; collectivités</Tag>
            <Tag accent="bleuGris">Professionnels &amp; culture</Tag>
          </div>
          <div className="hero-actions">
            <PrimaryButton href="/prestations">Des prestations pour vous</PrimaryButton>
            <OutlineButton href="/contact">Demander un devis gratuit</OutlineButton>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <Eyebrow>Fonctionnement</Eyebrow>
          <h2>Simple, souple, sans engagement</h2>
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
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Eyebrow>Publics concernés</Eyebrow>
          <h2>Des prestations pour vous</h2>
          <p className="section-lead">
            Trois univers, trois accompagnements. Choisissez celui qui vous ressemble pour découvrir les
            prestations qui vous concernent.
          </p>
          <div className="audience-grid">
            {AUDIENCES.map((a) => <AudienceCard key={a.id} audience={a} />)}
          </div>
        </div>
      </section>

      <DiscoverCarousel title="À découvrir aussi" items={DISCOVER_CARDS} />

      <section className="section alt qui-teaser">
        <div className="section-inner two-col">
          <div>
            <Eyebrow>Qui suis-je&nbsp;?</Eyebrow>
            <h2>Une double expérience, au service de vos mots</h2>
            <p>
              Plus de 25 ans au service de collectivités territoriales, une formation d&rsquo;écrivain public et de
              correcteur, et un engagement de longue date dans le domaine culturel&nbsp;: je mets cette double
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
          <h2>Une idée, un projet, un document à faire relire&nbsp;?</h2>
          <p>Parlons-en. L&rsquo;entretien et le devis sont toujours gratuits, et sans engagement.</p>
          <PrimaryButton href="/contact">Me contacter</PrimaryButton>
        </div>
      </section>
    </>
  );
}
