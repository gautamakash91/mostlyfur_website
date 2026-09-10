import Image from "next/image";
import { Eyebrow } from "./ui/Eyebrow";
import treatsPhoto from "@/public/photos/boutique-treats.jpg";
import toysPhoto from "@/public/photos/boutique-toys.jpg";
import leashPhoto from "@/public/photos/boutique-leash.jpg";

const categories = [
  { label: "Gourmet treats", photo: treatsPhoto },
  { label: "Toys & enrichment", photo: toysPhoto },
  { label: "Coats & accessories", photo: leashPhoto },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {categories.map(({ label, photo }) => (
            <div key={label} className="reveal">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(194,161,77,.28)",
                }}
              >
                <Image
                  src={photo}
                  alt={label}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p
                className="marc text-palm mt-3 text-center"
                style={{ letterSpacing: ".08em", fontSize: "1.02rem" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
