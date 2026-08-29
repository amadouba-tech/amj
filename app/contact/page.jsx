import Image from "next/image";
import { Eyebrow } from "@/components/ui.jsx";
import InfoSidebar from "@/components/InfoSidebar.jsx";
import ContactForm from "@/components/ContactForm.jsx";
import { IMAGES } from "@/data/images.js";

export const metadata = {
  title: "Contact",
  description:
    "Basée dans l'Yonne, j'interviens à distance où que vous soyez. Devis gratuit et sans engagement.",
};

export default function Contact() {
  return (
    <>
      <section className="event-hero compact">
        <div className="event-hero-photo">
          <Image src={IMAGES.contactPhoto} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" priority />
        </div>
        <div className="event-hero-content">
          <Eyebrow>Contact</Eyebrow>
          <h1>Parlons de votre projet</h1>
          <p className="lead">
            Pour tous renseignements, n&rsquo;hésitez pas à me contacter en me laissant un message. Je reviens vers
            vous rapidement pour convenir d&rsquo;un premier échange, gratuit et sans engagement.
          </p>
        </div>
      </section>

      <section className="section first">
        <div className="section-inner contact-grid">
          <InfoSidebar />
          <div className="contact-form-wrap">
            <h2>Formulaire de contact</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
