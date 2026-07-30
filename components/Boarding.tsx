import { Photo } from "./ui/Photo";
import { Eyebrow } from "./ui/Eyebrow";
import { waLink } from "@/lib/site-config";

const features: Array<[string, string]> = [
  ["Quiet suites", "Low-stress, cat-first spaces"],
  ["Daily care", "Feeding, cleaning, cuddles"],
  ["Safe & secure", "Supervised, vaccination-checked"],
  ["Flexible stays", "By the hour or by the week"],
];

export function Boarding() {
  return (
    <section
      id="boarding"
      className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center"
    >
      <div className="reveal">
        <Eyebrow>Serene cat boarding · Goa</Eyebrow>
        <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
          A peaceful stay for your cat, while you explore
        </h2>
        <p className="text-soft mt-5" style={{ lineHeight: 1.7 }}>
          Visiting Goa, or just need a few human-only days? Leave your cat in a calm, cats-only retreat
          built around feline comfort — quiet suites, gentle company and steady routines that keep them
          relaxed for a few hours or a few weeks.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-7">
          {features.map(([t, d]) => (
            <div key={t} className="card p-5">
              <p className="serif text-palm" style={{ fontSize: "1.1rem" }}>
                {t}
              </p>
              <p className="text-soft mt-1" style={{ fontSize: ".9rem" }}>
                {d}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-8">
          <a
            href={waLink("Hi! I'd like to ask about cat boarding at Mostlyfur.")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            Ask about cat boarding
          </a>
          <a
            href={waLink("Hi! I'd like to join the waitlist for dog boarding at Mostlyfur.")}
            target="_blank"
            rel="noreferrer"
            className="text-clay"
            style={{ fontSize: ".92rem", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Dog boarding coming soon — join the waitlist
          </a>
        </div>
      </div>
      <div className="reveal">
        <Photo label="Boarding photo — your cat suite / lounge" tall />
      </div>
    </section>
  );
}
