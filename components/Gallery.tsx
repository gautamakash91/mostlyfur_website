import { Photo } from "./ui/Photo";
import { Seal } from "./ui/Seal";

const shots = [
  "Before & after",
  "Spa day",
  "Happy regular",
  "The boutique",
  "Boarding lounge",
  "Behind the scenes",
  "Tiny crown energy",
  "Fresh & fluffy",
];

export function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-20 md:py-28">
      <div className="text-center reveal">
        <Seal />
        <h2 className="display text-palm mt-2" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
          Moments from the spa
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {shots.map((t, i) => (
          <div key={t} className="reveal" style={{ gridRow: i % 5 === 0 ? "span 2" : "auto" }}>
            <Photo label={t} ratio={i % 5 === 0 ? "3 / 4" : "1 / 1"} />
          </div>
        ))}
      </div>
    </section>
  );
}
