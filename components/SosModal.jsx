"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, LifeBuoy, X } from "lucide-react";
import { FeatherMark } from "@/components/ui.jsx";
import { SOS_CONTENT } from "@/data/sos.js";

export default function SosModal({ open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="sos-modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="sos-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sos-modal-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="sos-modal-close" onClick={onClose} aria-label="Fermer">
          <X size={20} strokeWidth={1.8} />
        </button>

        <div className="sos-modal-header">
          <div className="sos-modal-icon" aria-hidden="true">
            <LifeBuoy size={28} strokeWidth={1.6} />
          </div>
          <div>
            <p className="sos-modal-eyebrow">SOS Écriture</p>
            <h2 id="sos-modal-title">{SOS_CONTENT.title}</h2>
            <p className="sos-modal-intro">{SOS_CONTENT.intro}</p>
          </div>
        </div>

        <ul className="sos-modal-list">
          {SOS_CONTENT.items.map((item, index) => (
            <li key={index} className="sos-modal-item">
              <FeatherMark size={15} />
              <div>
                <p className="sos-modal-situation">{item.situation}</p>
                <p className="sos-modal-solution">{item.solution}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="sos-modal-footer">
          <Link href={SOS_CONTENT.cta.href} className="btn-primary" onClick={onClose}>
            {SOS_CONTENT.cta.label}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
