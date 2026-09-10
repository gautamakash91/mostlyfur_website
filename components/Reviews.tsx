import { Crest } from "./ui/Crest";
import { Eyebrow } from "./ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";

const reviews = [
  {
    q: "We had a wonderful experience! The place is beautiful, comfortable, and incredibly pet-friendly. My dog absolutely loved it. The hosts were so caring, thoughtful towards pets, and always ready to help. Highly recommend!",
    a: "— Sanya Kalra, Google review",
  },
  {
    q: "This pet grooming spa is an absolute gem. Run by a lovely, fun, and genuinely caring couple, the place immediately gives off a warm and welcoming vibe.",
    a: "— Mona Nalovalia, Google review",
  },
  {
    q: "I've been there twice so far with two very different temperaments of my pets — Lana, an easy-going golden retriever, and Rooney, an unpredictable rescue dog.",
    a: "— Rutuja Dhuwali, Google review",
  },
];

export function Reviews() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-20 md:py-28">
      <div className="text-center reveal">
        <Eyebrow>Kind words</Eyebrow>
        <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
          Loved by Goa&apos;s pet parents
        </h2>
        <p className="text-soft mt-3" style={{ fontSize: "1rem" }}>
          5.0 stars from {siteConfig.googleReviewCount}+ reviews on Google
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {reviews.map((r, i) => (
          <div key={i} className="card p-7 reveal">
            <Crest size={22} />
            <p className="serif text-palm mt-4" style={{ fontSize: "1.2rem", lineHeight: 1.45 }}>
              &quot;{r.q}&quot;
            </p>
            <p className="text-soft mt-4" style={{ fontSize: ".9rem" }}>
              {r.a}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center reveal mt-10">
        <a
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-clay"
          style={{ fontSize: "1rem", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          See all our reviews on Google
        </a>
      </div>
    </section>
  );
}
