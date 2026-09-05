import Link from "next/link";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";

/* Decorative cross/spark mark — echoes the small accents in the approved logo. */
export function Spark({ className = "", style = {} }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 2 L12 22 M2 12 L22 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* Feather glyph used as a bullet / section marker throughout the site */
export function FeatherMark({ size = 16, color = "var(--terracotta)" }) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 40 46" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path
        d="M20 2C20 2 8 10 8 24C8 33 13 40 19 44V22.5C19 21.7 19.7 21 20.5 21C21.3 21 22 21.7 22 22.5V44C28 40 32 33 32 24C32 10 20 2 20 2Z"
        fill={color}
      />
    </svg>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <Spark className="eyebrow-spark" />
      {children}
    </div>
  );
}

export function PrimaryButton({ children, href, icon: Icon = ArrowRight }) {
  return (
    <Link href={href} className="btn-primary">
      {children}
      <Icon size={16} strokeWidth={2} />
    </Link>
  );
}

export function OutlineButton({ children, href, icon: Icon }) {
  return (
    <Link href={href} className="btn-outline">
      {Icon && <Icon size={16} strokeWidth={2} />}
      {children}
    </Link>
  );
}

export function BackLink({ children, href = "/prestations" }) {
  return (
    <Link href={href} className="back-link">
      <ArrowLeft size={15} /> {children}
    </Link>
  );
}

/* Audience selector card — the mechanism requested to keep pages light:
   one click routes straight to that public's tailored prestations (real URL). */
export function AudienceCard({ audience }) {
  const Icon = audience.icon;
  return (
    <Link href={audience.path} className={`audience-card accent-${audience.accent}`}>
      <span className="audience-icon"><Icon size={22} strokeWidth={1.6} /></span>
      <span className="audience-label">{audience.label}</span>
      <span className="audience-tagline">{audience.tagline}</span>
      <span className="audience-cta">Découvrir <ChevronRight size={15} /></span>
    </Link>
  );
}

export function ServiceBlock({ section }) {
  const Icon = section.icon;
  return (
    <div className="service-block">
      {Icon && (
        <div className="service-icon"><Icon size={20} strokeWidth={1.6} /></div>
      )}
      <div className="service-body">
        <h3>{section.title}</h3>
        {Array.isArray(section.text) ? (
          section.text.map((p, i) => <p key={i}>{p}</p>)
        ) : (
          section.text && (
            <p>
              {section.text}
              {section.textHighlight && (
                <span className="text-highlight">{section.textHighlight}</span>
              )}
            </p>
          )
        )}
        {section.items && section.items.length > 0 && (
          <ul className="feather-list">
            {section.items.map((item, i) => {
              const parts = item.split("||");
              return (
                <li key={i}>
                  <FeatherMark size={13} />
                  <span>
                    {parts.map((part, j) => (
                      <span key={j}>
                        {j > 0 && <br />}
                        {part}
                      </span>
                    ))}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

/* Bold colour-blocked pill tag — the "modern portal" visual signature. */
export function Tag({ children, accent = "terracotta" }) {
  return <span className={`tag accent-${accent}`}>{children}</span>;
}

export function PageIntro({ eyebrow, title, lead, children }) {
  return (
    <div className="page-intro">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </div>
  );
}
