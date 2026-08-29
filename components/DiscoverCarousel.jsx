"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Tag } from "./ui.jsx";

export default function DiscoverCarousel({ title, items }) {
  const trackRef = useRef(null);

  function scroll(dir) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 420), behavior: "smooth" });
  }

  return (
    <section className="section discover">
      <div className="section-inner">
        <div className="discover-header">
          <h2 className="discover-title"><Search size={22} strokeWidth={2.2} />{title}</h2>
          <div className="discover-arrows">
            <button onClick={() => scroll(-1)} aria-label="Précédent"><ChevronLeft size={18} /></button>
            <button onClick={() => scroll(1)} aria-label="Suivant"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div className="discover-track" ref={trackRef}>
          {items.map((item, i) => (
            <Link href={item.path} className={`discover-card accent-${item.accent}`} key={i}>
              <div className="discover-card-image">
                <Image src={item.image} alt="" fill sizes="(max-width: 640px) 80vw, 320px" />
              </div>
              <Tag accent={item.accent}>{item.tag}</Tag>
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}