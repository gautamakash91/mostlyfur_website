import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #1F4A3A, #16352A)",
          fontFamily: "serif",
        }}
      >
        <img src={logoSrc} width={96} height={96} style={{ marginBottom: 28 }} alt="" />
        <div
          style={{
            display: "flex",
            color: "#F4EDE0",
            fontSize: 60,
            fontWeight: 700,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Pampering pets like the <span style={{ color: "#C2A14D", marginLeft: 16, marginRight: 16 }}>royalty</span> they already are
        </div>
        <div style={{ display: "flex", color: "#F4EDE0", opacity: 0.75, fontSize: 28, marginTop: 28 }}>
          Grooming · Cat Boarding · Boutique — Siolim, Goa
        </div>
      </div>
    ),
    { ...size }
  );
}
