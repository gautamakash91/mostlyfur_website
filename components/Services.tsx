import { Scissors, Moon, ShoppingBag, LucideIcon } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";

const pillars: Array<{ icon: LucideIcon; t: string; d: string }> = [
  {
    icon: Scissors,
    t: "Dog & Cat Grooming",
    d: "Soothing baths and stylish, stress-free grooming at our calm Siolim salon — the relaxation they deserve.",
  },
  {
    icon: Moon,
    t: "Serene Cat Boarding",
    d: "A peaceful, cats-only retreat for your feline to stay while you explore Goa. Dog boarding coming soon.",
  },
  {
    icon: ShoppingBag,
    t: "The Pet Boutique",
    d: "An in-store pet shop of toys, gourmet treats, accessories and supplies — hand-picked for spoiled royalty.",
  },
];

export function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-5 py-20 md:py-28">
      <div className="text-center reveal">
        <Eyebrow>Experience the Goa magic</Eyebrow>
        <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)" }}>
          Goa&apos;s pet-first spa, all under one roof
        </h2>
        <p className="text-soft mt-4" style={{ maxWidth: "36rem", margin: "1rem auto 0" }}>
          Premium dog and cat grooming, serene cats-only boarding, and a curated pet store — in Siolim,
          North Goa. Here, pets aren&apos;t just allowed. We exist for them.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {pillars.map(({ icon: Icon, t, d }) => (
          <div key={t} className="card p-8 reveal">
            <div
              className="flex items-center justify-center"
              style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(22,53,42,.06)" }}
            >
              <Icon size={24} className="text-palm" />
            </div>
            <h3 className="serif text-palm mt-5" style={{ fontSize: "1.5rem" }}>
              {t}
            </h3>
            <p className="text-soft mt-3" style={{ lineHeight: 1.6 }}>
              {d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
