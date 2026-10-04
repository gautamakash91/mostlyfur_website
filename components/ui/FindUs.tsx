import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Wayfinding line under the grooming/boarding CTAs. Those sections are the Google Ads
// landing URLs, so visitors should see where we are without scrolling to #visit.
export function FindUs() {
  return (
    <p className="flex items-start gap-2.5 text-soft mt-5" style={{ fontSize: ".95rem", lineHeight: 1.5 }}>
      <MapPin size={18} className="text-clay" style={{ flex: "none", marginTop: 2 }} />
      <span>
        {siteConfig.landmark}, {siteConfig.locality} ·{" "}
        <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="nav-link text-palm">
          Get directions
        </a>
      </span>
    </p>
  );
}
