import { ShieldCheck, Stethoscope, Leaf, Sparkles, LucideIcon } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";

const reasons: Array<{ icon: LucideIcon; t: string; d: string }> = [
  {
    icon: ShieldCheck,
    t: "Stress-free, always",
    d: "Certified groomers trained to keep handling calm and gentle from start to finish.",
  },
  {
    icon: Stethoscope,
    t: "Wellness checks",
    d: "Every visit includes a basic once-over, so small issues get spotted early.",
  },
  {
    icon: Leaf,
    t: "All-natural products",
    d: "Skin-kind, high-quality products chosen for sensitive coats and noses.",
  },
  {
    icon: Sparkles,
    t: "Pet-first by design",
    d: "Built for animals, not just tolerant of them — your pet is the guest of honour.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-palm">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center reveal">
          <Eyebrow light>Why Mostlyfur</Eyebrow>
          <h2 className="display text-paper mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
            The little things, done royally
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {reasons.map(({ icon: Icon, t, d }) => (
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
      </div>
    </section>
  );
}
