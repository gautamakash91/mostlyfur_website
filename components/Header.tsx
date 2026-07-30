"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./ui/Logo";
import { nav, waLink } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(244,237,222,.82)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(36,31,27,.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo size={38} />
          <span className="marc text-palm" style={{ fontSize: "1.25rem", letterSpacing: ".16em" }}>
            MOSTLYFUR
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {nav.map(([l, h]) => (
            <a key={l} href={h} className="nav-link">
              {l}
            </a>
          ))}
        </nav>
        <a
          href={waLink("Hi! I'd like to book an appointment with Mostlyfur.")}
          target="_blank"
          rel="noreferrer"
          className="btn btn-gold hidden sm:inline-flex"
          style={{ padding: ".6rem 1.15rem" }}
        >
          Book on WhatsApp
        </a>
        <button className="md:hidden text-palm" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div
          className="md:hidden px-5 pb-5 flex flex-col gap-3"
          style={{ borderTop: "1px solid rgba(36,31,27,.08)" }}
        >
          {nav.map(([l, h]) => (
            <a key={l} href={h} className="nav-link py-1.5" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a
            href={waLink("Hi! I'd like to book an appointment with Mostlyfur.")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold mt-1"
          >
            Book on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
