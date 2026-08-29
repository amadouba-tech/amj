"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ nom: "", prenom: "", ville: "", tel: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: no backend is wired up yet. Hook this up to your form endpoint
    // (e.g. Formspree, Resend, a Next.js Route Handler, or your own API) before going live.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success">
        <CheckCircle2 size={28} />
        <h3>Message envoyé, merci&nbsp;!</h3>
        <p>Votre demande a bien été prise en compte. Je reviens vers vous très prochainement.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Nom
          <input name="nom" value={form.nom} onChange={handleChange} required />
        </label>
        <label>
          Prénom
          <input name="prenom" value={form.prenom} onChange={handleChange} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Ville
          <input name="ville" value={form.ville} onChange={handleChange} />
        </label>
        <label>
          Tél.
          <input name="tel" type="tel" value={form.tel} onChange={handleChange} />
        </label>
      </div>
      <label>
        Adresse mail
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} value={form.message} onChange={handleChange} required />
      </label>
      <button type="submit" className="btn-primary full">
        Envoyer ma demande <Send size={16} />
      </button>
    </form>
  );
}
