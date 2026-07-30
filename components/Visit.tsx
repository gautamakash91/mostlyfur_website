import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { siteConfig, mapEmbedUrl, waLink } from "@/lib/site-config";

export function Visit() {
  return (
    <section
      id="visit"
      className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="reveal">
        <Eyebrow>Visit us</Eyebrow>
        <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
          Come say hey 😊
        </h2>
        <p className="text-soft mt-4" style={{ lineHeight: 1.65, maxWidth: "30rem" }}>
          In the heart of Siolim, North Goa — an easy drive from Assagao, Anjuna, Morjim, Mandrem and
          Mapusa, and a favourite with both Goa locals and visiting pet parents.
        </p>
        <div className="flex flex-col gap-4 mt-7">
          <p className="flex items-start gap-3 text-palm">
            <MapPin size={20} className="text-clay" style={{ flex: "none" }} />{" "}
            <span>
              {siteConfig.streetAddress}, {siteConfig.locality}, {siteConfig.region}{" "}
              {siteConfig.postalCode}
            </span>
          </p>
          <p className="flex items-center gap-3 text-palm">
            <Clock size={20} className="text-clay" />{" "}
            <span>
              Open daily <span className="text-soft">· confirm hours</span>
            </span>
          </p>
          <p className="flex items-center gap-3 text-palm">
            <Phone size={20} className="text-clay" />{" "}
            <a href={`tel:${siteConfig.phoneE164}`} className="nav-link">
              {siteConfig.phoneDisplay}
            </a>
          </p>
          <p className="flex items-center gap-3 text-palm">
            <Mail size={20} className="text-clay" />{" "}
            <a href={`mailto:${siteConfig.email}`} className="nav-link">
              {siteConfig.email}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href={waLink("Hi! I'd like to visit Mostlyfur — could you share your address and hours?")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold"
          >
            Message on WhatsApp
          </a>
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            Get directions
          </a>
        </div>
      </div>
      <div className="reveal">
        <div
          style={{
            aspectRatio: "4 / 3",
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(194,161,77,.28)",
          }}
        >
          <iframe
            src={mapEmbedUrl}
            title={`${siteConfig.name} location on Google Maps`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
