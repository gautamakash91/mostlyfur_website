"use client";

import { useEffect } from "react";
import Script from "next/script";
import { gaMeasurementId } from "@/lib/site-config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Where on the site a link was clicked: the enclosing section's id (e.g. "grooming"),
// else header/footer, so GA can tell which CTA drove a WhatsApp chat or call.
function linkLocation(el: Element) {
  return el.closest("section[id]")?.id ?? el.closest("header, footer")?.tagName.toLowerCase() ?? "page";
}

/**
 * GA4 tag plus the two conversion events we mark as key events in GA4:
 * `whatsapp_click` (any wa.me link) and `call_click` (any tel: link).
 * One delegated listener covers every CTA, so new buttons are tracked automatically.
 */
export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a || !window.gtag) return;
      const href = a.getAttribute("href") ?? "";
      const event = href.startsWith("https://wa.me/")
        ? "whatsapp_click"
        : href.startsWith("tel:")
          ? "call_click"
          : null;
      if (!event) return;
      window.gtag("event", event, {
        link_location: linkLocation(a),
        page_path: window.location.pathname,
      });
    };
    // Capture phase, so the event is sent before a tel: link hands off to the dialer.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`}
      </Script>
    </>
  );
}
