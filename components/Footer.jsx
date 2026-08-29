import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { NAV_ITEMS, AUDIENCES } from "@/data/content.js";
import NewsletterForm from "./NewsletterForm.jsx";
import logo from "@/assets/logo.png";

const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/accessibilite", label: "Accessibilité" },
  { href: "/politique-cookies", label: "Politique de cookies" },
  { href: "/plan-du-site", label: "Plan du site" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-top-inner">
          <div className="footer-col">
            <h4>Vous êtes…</h4>
            <div className="footer-audience-tags">
              {AUDIENCES.map((a) => (
                <Link key={a.id} href={a.path} className={`footer-tag accent-${a.accent}`}>
                  {a.label.split(",")[0].split("&")[0].trim()}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Restons en contact</h4>
            <p>Recevez occasionnellement des nouvelles d&rsquo;Art des Mots Justes par mail.</p>
            <NewsletterForm />
          </div>

          <div className="footer-col">
            <h4>Sur les réseaux</h4>
            {/* TODO : remplacer par les vrais liens une fois les profils créés */}
            <div className="footer-socials">
              <span className="social-icon" aria-hidden="true"><Instagram size={17} /></span>
              <span className="social-icon" aria-hidden="true"><Facebook size={17} /></span>
              <span className="social-icon" aria-hidden="true"><Linkedin size={17} /></span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Une question&nbsp;?</h4>
            <Link href="/contact" className="footer-contact-link">Contactez-moi</Link>
          </div>
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-brand">
          <Image src={logo} alt="Art des Mots Justes" className="footer-logo" />
          <div>
            <div className="footer-title">Art des Mots Justes</div>
            <div className="footer-sub">Écrivain public — Yonne &amp; à distance</div>
          </div>
        </div>
        <nav className="footer-nav">
          {NAV_ITEMS.map((item) => (
            <Link key={item.id} href={item.path}>{item.label}</Link>
          ))}
        </nav>
        <div className="footer-note">Devis gratuit et sans engagement.</div>
      </div>

      <div className="footer-legal">
        <div className="footer-legal-inner">
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
