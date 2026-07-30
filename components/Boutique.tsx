import { Photo } from "./ui/Photo";
import { Eyebrow } from "./ui/Eyebrow";

const categories = ["Gourmet treats", "Toys & enrichment", "Coats & accessories", "Gift bundles"];

export function Boutique() {
  return (
    <section id="boutique" className="bg-ivory">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-end reveal">
          <div>
            <Eyebrow>The pet boutique</Eyebrow>
            <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
              A pet store, fit for a crown
            </h2>
          </div>
          <p className="text-soft" style={{ lineHeight: 1.7 }}>
            Our in-store boutique stocks toys, gourmet treats, accessories and everyday pet supplies —
            hand-picked, not just stacked. Ask about curated gift bundles, perfect for the pet who already
            has everything.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {categories.map((t) => (
            <div key={t} className="reveal">
              <Photo label={t} ratio="1 / 1" />
              <p
                className="marc text-palm mt-3 text-center"
                style={{ letterSpacing: ".08em", fontSize: ".95rem" }}
              >
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
