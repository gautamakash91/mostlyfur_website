import { ArrowRight } from "lucide-react";
import { Crest } from "./ui/Crest";
import { Photo } from "./ui/Photo";
import { Eyebrow } from "./ui/Eyebrow";
import { waLink } from "@/lib/site-config";

const warrants = [
  "Certified stress-free groomers",
  "Dogs & cats groomed",
  "Serene cats-only boarding",
  "All-natural products",
];

export function Hero() {
  return (
    <section id="top" className="bg-palm" style={{ position: "relative" }}>
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal in">
          <Eyebrow light>Pet Spa · Grooming · Cat Boarding · Siolim, Goa</Eyebrow>
          <h1 className="display text-paper mt-5" style={{ fontSize: "clamp(2.7rem,6vw,4.6rem)" }}>
            Pampering pets like the <i className="text-gold">royalty</i> they already are.
          </h1>
          <p className="text-paper mt-6" style={{ maxWidth: "31rem", opacity: 0.85, lineHeight: 1.65 }}>
            Luxurious dog &amp; cat grooming, a serene cats-only boarding retreat, and a curated pet
            boutique — in the heart of Siolim, North Goa. Loved by locals and visiting pet parents alike.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={waLink("Hi! I'd like to book a grooming session at Mostlyfur.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold"
            >
              Book on WhatsApp <ArrowRight size={17} />
            </a>
            <a href="#services" className="btn btn-ghost on-dark">
              Explore services
            </a>
          </div>
        </div>
        <div className="reveal in">
          <Photo label="Hero photo — your spa / happy pet" tall />
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(194,161,77,.22)" }}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap gap-x-6 gap-y-2 justify-center">
          {warrants.map((t) => (
            <span key={t} className="pill on-dark">
              <Crest size={14} /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
