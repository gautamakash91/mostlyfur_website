import { Logo } from "./ui/Logo";
import { nav, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-palm" style={{ borderTop: "1px solid rgba(194,161,77,.18)" }}>
      <div className="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo size={36} />
            <span className="marc text-paper" style={{ fontSize: "1.2rem", letterSpacing: ".16em" }}>
              MOSTLYFUR
            </span>
          </div>
          <p
            className="text-paper mt-4"
            style={{ opacity: 0.72, fontSize: ".9rem", lineHeight: 1.6, maxWidth: "20rem" }}
          >
            Pampering pets like they&apos;re royalty — luxurious spa, serene cat boarding and a curated
            boutique in Goa.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {nav.map(([l, h]) => (
              <li key={l}>
                <a href={h} className="text-paper nav-link" style={{ opacity: 0.82 }}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Contact</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-paper" style={{ opacity: 0.82, fontSize: ".92rem" }}>
            <li>{siteConfig.phoneDisplay}</li>
            <li>{siteConfig.email}</li>
            <li>
              {siteConfig.locality}, North {siteConfig.region}
            </li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(194,161,77,.14)" }}>
        <div
          className="max-w-6xl mx-auto px-5 py-5 flex flex-wrap gap-3 justify-between text-paper"
          style={{ opacity: 0.6, fontSize: ".82rem" }}
        >
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span className="flex gap-5">
            <a href="#" className="nav-link" style={{ color: "inherit" }}>
              Privacy
            </a>
            <a href="#" className="nav-link" style={{ color: "inherit" }}>
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
