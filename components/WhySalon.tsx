import { ArrowRight, ShieldCheck, Scissors, Sparkles, LucideIcon } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { waLink } from "@/lib/site-config";

const points: Array<{ icon: LucideIcon; t: string; d: string }> = [
  {
    icon: ShieldCheck,
    t: "Calmer on neutral ground",
    d: "At home, animals instinctively guard their territory and tense up. In our calm, dedicated space they settle faster — so handling stays gentle and safe.",
  },
  {
    icon: Scissors,
    t: "A proper, professional setup",
    d: "Salon tubs, tables, dryers, lighting and non-slip grip make for a thorough, careful groom no bathroom floor can match.",
  },
  {
    icon: Sparkles,
    t: "Your home stays spotless",
    d: "Grooming is wet, hairy, messy work. We contain every bit of it — you get a fresh pet and a clean home, no cleanup required.",
  },
];

export function WhySalon() {
  return (
    <section className="bg-palm">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center reveal">
          <Eyebrow light>Salon-only, on purpose</Eyebrow>
          <h2 className="display text-paper mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
            Why we groom at the salon, not your home
          </h2>
          <p
            className="text-paper mt-4"
            style={{ opacity: 0.82, maxWidth: "40rem", margin: "1rem auto 0", lineHeight: 1.65 }}
          >
            We&apos;re often asked for home grooming. We don&apos;t offer it — and that&apos;s a deliberate
            choice, because it&apos;s genuinely better for your pet.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {points.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="reveal"
              style={{
                padding: "1.75rem",
                borderRadius: 18,
                border: "1px solid rgba(194,161,77,.22)",
                background: "rgba(255,255,255,.03)",
              }}
            >
              <Icon size={26} className="text-gold" />
              <h3 className="serif text-paper mt-4" style={{ fontSize: "1.25rem" }}>
                {t}
              </h3>
              <p className="text-paper mt-2" style={{ opacity: 0.78, fontSize: "1rem", lineHeight: 1.6 }}>
                {d}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center reveal mt-12">
          <p className="serif text-gold" style={{ fontSize: "1.15rem", maxWidth: "34rem", margin: "0 auto 1.5rem" }}>
            It&apos;s not about convenience for us — it&apos;s a better, safer experience for them.
          </p>
          <a
            href={waLink("Hi! I'd like to book a salon grooming visit at Mostlyfur.")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold"
          >
            Book a salon visit <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
