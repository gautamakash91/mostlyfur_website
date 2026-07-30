import { Photo } from "./ui/Photo";
import { Eyebrow } from "./ui/Eyebrow";

const team = [
  {
    n: "Kasturi Borkotoky",
    r: "Founder · Lead Groomer",
    b: "Traded boardrooms for grooming rooms. A decade of retail polish, the heart of a proud cat mom.",
  },
  {
    n: "Akash Gautam",
    r: "Co-founder · Groomer",
    b: "Tech geek, certified groomer and devoted cat dad. Precise cuts, endless cuddles.",
  },
  {
    n: "Kanky Borkotoky",
    r: "Groomer · Educator",
    b: "Certified groomer and full-time animal enthusiast — more four-legged friends than two.",
  },
];

export function Team() {
  return (
    <section id="team" className="bg-ivory">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center reveal">
          <Eyebrow>The hoomans</Eyebrow>
          <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
            Faces that add the magic
          </h2>
          <p className="text-soft mt-4" style={{ maxWidth: "34rem", margin: "1rem auto 0" }}>
            A small team of pet parents and lovers, here to support your pet&apos;s happiness — from the
            perfect groom to the right treat.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {team.map((m) => (
            <div key={m.n} className="card overflow-hidden reveal">
              <Photo label={`Portrait — ${m.n.split(" ")[0]}`} ratio="4 / 5" />
              <div className="p-6">
                <h3 className="serif text-palm" style={{ fontSize: "1.35rem" }}>
                  {m.n}
                </h3>
                <p className="eyebrow text-clay mt-1" style={{ letterSpacing: ".18em" }}>
                  {m.r}
                </p>
                <p className="text-soft mt-3" style={{ fontSize: ".92rem", lineHeight: 1.6 }}>
                  {m.b}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
