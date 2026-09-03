"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search, LifeBuoy } from "lucide-react";
import { NAV_ITEMS } from "@/data/content.js";
import SosModal from "@/components/SosModal.jsx";

import logo from "@/assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sosOpen, setSosOpen] = useState(false);
  const pathname = usePathname();

  function isActive(path) {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  }

  return (
    <header className="site-header">
      <div className="header-inner">
      <Link href="/" className="brand" onClick={() => setMenuOpen(false)} aria-label="Art des Mots Justes — Accueil">
        <Image src={logo} alt="Art des Mots Justes — Écrivain public" className="brand-logo" priority />
      </Link>

        <nav className="nav-desktop" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Rechercher sur le site"
            aria-expanded={searchOpen}
          >
            <Search size={19} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            className="icon-btn sos-btn"
            aria-label="Besoin d'aide rapidement — SOS écriture"
            aria-haspopup="dialog"
            aria-expanded={sosOpen}
            onClick={() => setSosOpen(true)}
          >
            <LifeBuoy size={19} strokeWidth={1.8} />
            <span className="icon-btn-label">SOS</span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Ouvrir le menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="search-bar">
          <div className="search-bar-inner">
            <Search size={17} strokeWidth={1.8} />
            <input type="search" placeholder="Rechercher une prestation, une page…" autoFocus />
          </div>
        </div>
      )}

      {menuOpen && (
        <nav className="nav-mobile" aria-label="Navigation mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="nav-link sos-mobile-link"
            onClick={() => {
              setMenuOpen(false);
              setSosOpen(true);
            }}
          >
            SOS écriture
          </button>
        </nav>
      )}

      <SosModal open={sosOpen} onClose={() => setSosOpen(false)} />
    </header>
  );
}
