import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { siteConfig, legalLastUpdatedDisplay } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that apply to grooming, cat boarding and boutique purchases at ${siteConfig.name}, ${siteConfig.locality}, ${siteConfig.region}.`,
  alternates: { canonical: "/terms" },
};

const contact = (
  <>
    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or{" "}
    <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a> (call or WhatsApp)
  </>
);

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreeing to these terms",
    body: (
      <>
        <p>
          These terms apply when you book or use our grooming or cat boarding services, buy from our
          boutique, or use this website. In these terms, &ldquo;{siteConfig.name}&rdquo;,
          &ldquo;we&rdquo; and &ldquo;us&rdquo; mean {siteConfig.name}, {siteConfig.streetAddress},{" "}
          {siteConfig.locality}, {siteConfig.region} {siteConfig.postalCode}. &ldquo;You&rdquo; means
          the pet owner, or the person who brings a pet to us or makes a booking or purchase.
        </p>
        <p className="callout">
          <strong>
            By booking with us, bringing your pet to us, or buying from us, you confirm that you have
            read, understood and accept these terms and our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </strong>{" "}
          If you don&apos;t agree, please don&apos;t use our services.
        </p>
        <p>
          If you bring in a pet that isn&apos;t yours, you confirm that you have the owner&apos;s
          authority to agree to these terms on their behalf.
        </p>
      </>
    ),
  },
  {
    id: "consent",
    title: "Your consent when you use our services",
    body: (
      <>
        <p>By availing any of our services, you give us your consent to:</p>
        <ul>
          <li>
            <strong>Handle, groom and care for your pet</strong>{" "}as we professionally judge best —
            including bathing, drying (with hand or cage dryers), brushing, de-matting, clipping,
            scissoring, nail trimming, ear cleaning and hygiene trims.
          </li>
          <li>
            <strong>Shave or clip short a matted coat.</strong>{" "}Severe matting can&apos;t always be
            brushed out humanely. Shaving can reveal pre-existing skin problems and may cause redness,
            irritation or itching afterwards; these are known risks of de-matting.
          </li>
          <li>
            <strong>Use safe restraints</strong>{" "}— such as grooming loops, muzzles, cones or towel
            wraps — when we feel it is needed for the safety of your pet or our team.
          </li>
          <li>
            <strong>Stop a session partway</strong>{" "}if your pet becomes too stressed, aggressive or
            unwell to continue safely. You will be charged for the work completed.
          </li>
          <li>
            <strong>Seek veterinary care in an emergency.</strong>{" "}If your pet needs urgent attention
            while with us and we can&apos;t reach you or your emergency contact quickly, we may take
            your pet to a veterinarian of our choice and authorise the treatment the vet considers
            necessary. All veterinary, transport and related costs are payable by you.
          </li>
          <li>
            <strong>Treat or isolate pets with fleas, ticks or parasites</strong>{" "}found during a visit
            or stay, and charge for that treatment and any extra cleaning required.
          </li>
          <li>
            <strong>Photograph and film your pet</strong>{" "}while in our care and use those photos and
            videos on our website, social media and other marketing, without payment to you. If
            you&apos;d rather we didn&apos;t share images of your pet, just tell us when you book.
          </li>
          <li>
            <strong>Contact you on WhatsApp, phone, SMS or email</strong>{" "}about your bookings, your
            pet&apos;s care, reminders and occasional offers. You can opt out of offers at any time.
          </li>
          <li>
            <strong>Collect and use your personal information and your pet&apos;s information</strong>{" "}
            as described in our <Link href="/privacy">Privacy Policy</Link>.
          </li>
          <li>
            <strong>Be recorded on CCTV</strong>, where installed on our premises, for the safety and
            security of pets, customers and staff.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "right-to-refuse",
    title: "Our right to refuse service",
    body: (
      <>
        <p>
          We reserve the right to refuse, decline, postpone or stop any service or sale, to anyone, at
          any time — before a booking, at drop-off, or partway through — at our sole discretion and
          without having to give a reason. We usually do this only when we feel it&apos;s in the best
          interest of a pet, our team, or other animals and customers in our care, for example where:
        </p>
        <ul>
          <li>a pet appears unwell, injured, pregnant, elderly or frail in a way that makes the service unsafe;</li>
          <li>a pet shows aggressive behaviour, or is too stressed to be handled safely;</li>
          <li>a pet has fleas, ticks, a skin condition or a suspected contagious illness;</li>
          <li>vaccination or health records required for boarding are missing or out of date;</li>
          <li>a customer is abusive, threatening or disrespectful to our team; or</li>
          <li>a customer has previously broken these terms or left payments unpaid.</li>
        </ul>
        <p>If we stop a service partway, the work completed up to that point is chargeable.</p>
      </>
    ),
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities",
    body: (
      <>
        <p>You agree to:</p>
        <ul>
          <li>
            Tell us honestly, before each visit or stay, about your pet&apos;s age, health, medical
            conditions, medication, allergies, recent surgery, pregnancy, behaviour (including any
            history of biting, scratching or aggression) and any previous bad reactions to grooming.
          </li>
          <li>Keep your pet&apos;s vaccinations, deworming and flea/tick prevention up to date.</li>
          <li>Bring and collect your pet on time, on a leash or in a secure carrier.</li>
          <li>Keep your phone reachable and share an emergency contact while your pet is with us.</li>
          <li>Treat our team and other customers with courtesy.</li>
        </ul>
        <p>
          You are responsible for any injury, loss or damage your pet causes to our staff, other
          animals, customers or our property, and you agree to indemnify us against any claims, costs
          or losses arising from it, or from information you gave us that was incomplete or untrue.
        </p>
      </>
    ),
  },
  {
    id: "grooming",
    title: "Grooming",
    body: (
      <>
        <ul>
          <li>
            Grooming is offered at our {siteConfig.locality} salon only, by appointment. We do not
            offer home grooming.
          </li>
          <li>
            Prices quoted are estimates. The final price depends on your pet&apos;s size, coat
            condition, matting and temperament, and may include extra charges for de-matting, flea or
            tick treatment, or extra handling time.
          </li>
          <li>
            If you arrive more than 15 minutes late, we may shorten the service or reschedule it, and
            the booking may still be charged.
          </li>
          <li>
            Grooming involves sharp tools and a live, moving animal. Despite every care, minor nicks,
            clipper irritation or razor burn can occasionally happen, particularly with matted coats,
            skin folds, warts, moles or nervous pets. Older pets and pets with health conditions are
            groomed at your own risk, as grooming can bring on or reveal underlying conditions.
          </li>
          <li>
            Haircut styles are interpreted by our groomers within what your pet&apos;s coat and
            temperament allow, and coats grow back. We don&apos;t guarantee an exact look.
          </li>
          <li>
            If you&apos;re unhappy with an aspect of the groom, please tell us before leaving or within
            24 hours. Where something can reasonably be fixed, we may offer a touch-up at our
            discretion. This doesn&apos;t entitle you to a refund.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "boarding",
    title: "Cat boarding",
    body: (
      <>
        <ul>
          <li>
            Boarding is currently for cats only. Stays must be booked in advance and are subject to
            availability.
          </li>
          <li>
            Every cat must have up-to-date vaccinations and be free of fleas, ticks and contagious
            illness. You must show valid vaccination records at check-in; we can refuse a stay
            without them.
          </li>
          <li>
            Please share feeding, medication and routine instructions in writing. We will follow them
            as closely as we reasonably can, but we are not responsible for the effects of medication
            you have supplied or prescribed.
          </li>
          <li>
            Boarding can be stressful for some cats, even in a calm environment. Changes in appetite,
            litter habits, weight or behaviour, and stress-related illness, can occur. These are
            natural risks of boarding and you accept them.
          </li>
          <li>
            Food, bedding, toys, carriers and other belongings you leave with us are kept at your own
            risk.
          </li>
          <li>
            Collections later than agreed may be charged as extra hours or an extra day. Your cat will
            only be handed over to you or a person you have named at check-in.
          </li>
          <li>
            All outstanding charges, including any vet bills or extra services, must be paid in full at
            pick-up before your cat goes home.
          </li>
          <li>
            If a cat is not collected within 7 days of the agreed pick-up date and we have been unable
            to reach you or your emergency contact, the cat will be treated as abandoned. We may then
            rehome it or hand it over to an animal shelter or rescue, and you remain liable for all
            boarding, care and other costs incurred.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "boutique",
    title: "Boutique purchases",
    body: (
      <>
        <ul>
          <li>Please check products, sizes and fit before paying. All sales are final.</li>
          <li>
            Products are used at your own risk. Always follow label instructions, patch-test where
            sensible, and check with your vet about diet, supplements or products for pets with
            allergies or health conditions. We are not responsible for allergic or adverse reactions.
          </li>
          <li>
            Toys and accessories should be used under supervision and replaced when worn. We are not
            responsible for damage or injury from chewing, swallowing or misuse.
          </li>
          <li>Prices and stock can change without notice.</li>
        </ul>
      </>
    ),
  },
  {
    id: "payments-refunds",
    title: "Payments, cancellations & no-refund policy",
    body: (
      <>
        <p className="callout">
          <strong>We do not offer refunds on any service or product</strong>, except for a boutique
          product that was past its expiry date when you bought it from us.
        </p>
        <h3>Expired products</h3>
        <p>
          If a product you bought from us was already past its printed expiry date at the time of
          purchase, bring it back to our store with your bill within 7 days of purchase and we will
          refund it or replace it. Products that expire after the date of purchase are not covered.
        </p>
        <h3>Services</h3>
        <ul>
          <li>Payment is due when the service is completed, or as agreed when you book.</li>
          <li>
            We may ask for an advance to confirm a booking, especially for boarding. Advances are
            non-refundable.
          </li>
          <li>
            If you need to change a booking, please tell us at least 24 hours ahead. We may, at our
            discretion, let you move an advance to a new date. No-shows and late cancellations
            forfeit any advance and may be charged.
          </li>
          <li>
            Services that have been performed, wholly or partly, are not refundable, including where a
            session was stopped for the reasons in section 3.
          </li>
          <li>Our prices may change from time to time. The price confirmed at booking applies.</li>
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          We take great care with every pet. However, to the fullest extent permitted by law, we are
          not liable for any illness, injury, loss or death of a pet, or any loss or damage to your
          belongings, that is not caused by our proven negligence. This includes conditions that were
          pre-existing, not disclosed to us, or that are natural risks of grooming or boarding
          described above.
        </p>
        <p>
          Where we are found liable, our total liability for any claim is limited to the amount you
          paid us for the specific service or product the claim relates to. We are not liable for
          indirect or consequential losses.
        </p>
        <p>
          Any concern or complaint must be raised with us within 24 hours of collecting your pet, with
          photos where possible, so that we can look into it properly.
        </p>
      </>
    ),
  },
  {
    id: "website",
    title: "Using this website",
    body: (
      <>
        <p>
          The content, photos, logo and branding on this website belong to {siteConfig.name} and may
          not be copied or reused without our written permission. We try to keep information on the
          site accurate, but services, prices and hours can change, so please confirm details with
          us when you book.
        </p>
        <p>
          The site links to third-party services such as WhatsApp and Google Maps. We are not
          responsible for their content or how they handle your information.
        </p>
      </>
    ),
  },
  {
    id: "general",
    title: "Changes, governing law & disputes",
    body: (
      <>
        <p>
          We may update these terms at any time by publishing a new version on this page. The version
          in force on the date of your booking or purchase applies.
        </p>
        <p>
          These terms are governed by the laws of India. Any dispute will be subject to the exclusive
          jurisdiction of the courts in North Goa, Goa.
        </p>
        <p>
          If any part of these terms is found to be unenforceable, the rest continues to apply.
          Nothing in these terms takes away rights you have by law that cannot be excluded.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        Questions about these terms? Reach us at {contact}, or visit us at {siteConfig.streetAddress},{" "}
        {siteConfig.locality}, {siteConfig.region} {siteConfig.postalCode}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated={legalLastUpdatedDisplay}
      intro={
        <p>
          The ground rules for grooming, cat boarding and boutique purchases at {siteConfig.name}.
          They keep every pet safe and make sure we&apos;re all on the same page.
        </p>
      }
      sections={sections}
    />
  );
}
