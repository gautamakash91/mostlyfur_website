export const siteConfig = {
  name: "Mostlyfur",
  shortTagline: "Pet Spa · Grooming · Cat Boarding · Siolim, Goa",
  title: "Mostlyfur — Pet Grooming & Cat Boarding Spa in Siolim, Goa",
  description:
    "Luxurious dog & cat grooming, a serene cats-only boarding retreat, and a curated pet boutique in Siolim, North Goa. Certified stress-free groomers, all-natural products. Book on WhatsApp.",
  // TODO: replace with the live production domain once it's registered/deployed.
  url: "https://www.mostlyfur.com",
  phoneDisplay: "+91 91756 90509",
  phoneE164: "+919175690509",
  whatsapp: "919175690509",
  email: "pets@mostlyfur.com",
  streetAddress: "1st floor, Newton's Villa, Kudal, Porta Vaddo, above House of Barbecue",
  locality: "Siolim",
  region: "Goa",
  country: "IN",
  postalCode: "403517",
  mapsUrl: "https://maps.app.goo.gl/5CTDE1qoVk7Wk4ww5",
  // Exact pin coordinates, from the same Google Business Profile as mapsUrl.
  latitude: 15.6263585,
  longitude: 73.7623725,
  // From the business's own Google Business Profile — update if it changes materially.
  googleRating: 5.0,
  googleReviewCount: 99,
  // Open Wed–Mon, 10am–7pm. Closed Tuesdays.
  hoursDisplay: "10am – 7pm",
  closedDayDisplay: "Closed Tuesdays",
} as const;

// schema.org day names for the days we're open (everything except Tuesday).
export const openDays = [
  "Monday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;
export const opensAt = "10:00";
export const closesAt = "19:00";

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${siteConfig.name}, ${siteConfig.locality}, ${siteConfig.region}`
)}&ll=${siteConfig.latitude},${siteConfig.longitude}&z=16&output=embed`;

export const nav: Array<[string, string]> = [
  ["Services", "#services"],
  ["Grooming", "#grooming"],
  ["Boarding", "#boarding"],
  ["Boutique", "#boutique"],
  ["Team", "#team"],
  ["Visit", "#visit"],
];

export function waLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
