import { ArrowRight } from "lucide-react";
import { Seal } from "./ui/Seal";
import { waLink } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <section className="bg-palm">
      <div className="max-w-3xl mx-auto px-5 py-20 md:py-24 text-center reveal">
        <Seal />
        <h2 className="display text-paper mt-4" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)" }}>
          Ready to spoil <i className="text-gold">your</i> royalty?
        </h2>
        <p
          className="text-paper mt-5"
          style={{ opacity: 0.82, maxWidth: "30rem", margin: "1.25rem auto 0", lineHeight: 1.65 }}
        >
          Book a groom, reserve a stay, or just ask us anything — we reply on WhatsApp.
        </p>
        <a
          href={waLink("Hi! I'd like to book with Mostlyfur.")}
          target="_blank"
          rel="noreferrer"
          className="btn btn-gold mt-8"
        >
          Book on WhatsApp <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}
