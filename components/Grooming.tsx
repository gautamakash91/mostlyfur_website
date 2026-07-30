import { ArrowRight } from "lucide-react";
import { Crest } from "./ui/Crest";
import { Photo } from "./ui/Photo";
import { Eyebrow } from "./ui/Eyebrow";
import { waLink } from "@/lib/site-config";

const points = [
  "Calm, unhurried handling",
  "Basic wellness check every visit",
  "Skin-kind, all-natural products",
  "Cuts tailored to coat and breed",
];

export function Grooming() {
  return (
    <section id="grooming" className="bg-ivory">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <div className="reveal order-2 md:order-1">
          <Photo label="Grooming photo — your groomer at work" />
        </div>
        <div className="reveal order-1 md:order-2">
          <Eyebrow>Signature grooming · Siolim</Eyebrow>
          <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
            Dog &amp; cat grooming, where health meets happiness
          </h2>
          <p className="text-soft mt-5" style={{ lineHeight: 1.7 }}>
            Grooming isn&apos;t vanity — it&apos;s comfort, health and confidence. At our Siolim salon,
            certified, stress-free groomers tailor every session to your dog or cat, with essential
            wellness checks and all-natural products, so they leave looking and feeling their best.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {points.map((t) => (
              <li key={t} className="flex items-center gap-3 text-palm">
                <Crest size={16} /> {t}
              </li>
            ))}
          </ul>
          <a
            href={waLink("Hi! I'd like to schedule a grooming session for my pet.")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold mt-8"
          >
            Schedule a pampering session <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
