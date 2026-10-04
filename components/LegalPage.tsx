import { Header } from "./Header";
import { Footer } from "./Footer";
import { Eyebrow } from "./ui/Eyebrow";

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
}: {
  title: string;
  intro: React.ReactNode;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-palm">
          <div className="max-w-3xl mx-auto px-5 pt-16 pb-14 md:pt-20 md:pb-16">
            <Eyebrow light>Legal · Last updated {lastUpdated}</Eyebrow>
            <h1 className="display text-paper mt-5" style={{ fontSize: "clamp(2.4rem,5.5vw,3.8rem)" }}>
              {title}
            </h1>
            <div className="text-paper mt-6" style={{ opacity: 0.85, lineHeight: 1.65 }}>
              {intro}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-14 md:py-20">
          <nav aria-label="On this page" className="card p-6" style={{ transform: "none" }}>
            <p className="eyebrow text-clay">On this page</p>
            <ol className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2" style={{ fontSize: ".98rem" }}>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="nav-link">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="legal mt-12">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id}>
                <h2>
                  {i + 1}. {s.title}
                </h2>
                {s.body}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
