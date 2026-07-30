"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { faqs } from "@/lib/faq-data";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-ivory">
      <div className="max-w-3xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center reveal">
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
            Questions, answered
          </h2>
        </div>
        <div className="mt-12 reveal">
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="serif text-palm" style={{ fontSize: "1.2rem" }}>
                  {f.q}
                </span>
                <ChevronDown className={`chev text-clay ${open === i ? "open" : ""}`} size={20} />
              </button>
              <div className={`faq-a ${open === i ? "open" : ""}`}>
                <p className="text-soft" style={{ paddingBottom: "1.25rem", lineHeight: 1.6 }}>
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
