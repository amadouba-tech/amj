import Link from "next/link";
import { PageIntro } from "@/components/ui.jsx";
import { NAV_ITEMS, AUDIENCES } from "@/data/content.js";

export const metadata = { title: "Plan du site" };

const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/accessibilite", label: "Accessibilité" },
  { href: "/politique-cookies", label: "Politique de cookies" },
];

export default function PlanDuSite() {
  return (
    <section className="section first">
      <div className="section-inner narrow">
        <PageIntro eyebrow="Navigation" title="Plan du site" />

        <h3>Pages principales</h3>
        <ul className="sitemap-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}><Link href={item.path}>{item.label}</Link></li>
          ))}
        </ul>

        <h3>Prestations par public</h3>
        <ul className="sitemap-list">
          {AUDIENCES.map((a) => (
            <li key={a.id}><Link href={a.path}>{a.label}</Link></li>
          ))}
        </ul>

        <h3>Informations légales</h3>
        <ul className="sitemap-list">
          {LEGAL_LINKS.map((l) => (
            <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
