"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * Inscription newsletter — visuelle pour l'instant, à relier à un vrai
 * service d'envoi (Brevo, Mailchimp, etc.) avant mise en ligne, comme le
 * formulaire de contact.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div className="newsletter-done">
        <CheckCircle2 size={16} /> Inscription prise en compte.
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="Votre adresse mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Adresse mail pour la newsletter"
      />
      <button type="submit" aria-label="S'inscrire"><ArrowRight size={16} /></button>
    </form>
  );
}
