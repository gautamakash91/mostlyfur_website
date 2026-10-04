import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { siteConfig, legalLastUpdatedDisplay } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal information and your pet's details.`,
  alternates: { canonical: "/privacy" },
};

const contact = (
  <>
    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or{" "}
    <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a> (call or WhatsApp)
  </>
);

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <p>
        {siteConfig.name} is a pet grooming salon, cats-only boarding retreat and pet boutique at{" "}
        {siteConfig.streetAddress}, {siteConfig.locality}, {siteConfig.region} {siteConfig.postalCode},
        India. We decide how the personal information described here is used, and we are responsible
        for it under India&apos;s Digital Personal Data Protection Act, 2023 and other applicable
        laws.
      </p>
    ),
  },
  {
    id: "your-consent",
    title: "Your consent",
    body: (
      <p className="callout">
        <strong>
          By contacting us, booking with us, using our services or buying from us, you consent to us
          collecting, using, storing and sharing your personal information and your pet&apos;s
          information as described in this policy.
        </strong>{" "}
        You can withdraw your consent at any time (see section 8), but we may then be unable to
        continue providing some services to you.
      </p>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <h3>About you</h3>
        <ul>
          <li>Your name, phone / WhatsApp number, email address and, where needed, your address.</li>
          <li>An emergency contact, and the names of anyone authorised to collect your pet.</li>
          <li>Booking history, the messages you send us, and feedback or reviews you give us.</li>
          <li>
            Payment records such as amounts, dates and UPI or transaction references. We do not store
            full card or bank details — those are handled by your bank or payment provider.
          </li>
        </ul>
        <h3>About your pet</h3>
        <ul>
          <li>Name, species, breed, age, sex, size and coat type.</li>
          <li>
            Vaccination and health records, medical conditions, medication, allergies, diet, behaviour
            notes and your vet&apos;s contact details.
          </li>
          <li>Grooming and boarding notes, and photos or videos taken while your pet is with us.</li>
        </ul>
        <h3>At our premises</h3>
        <ul>
          <li>
            Where CCTV is installed, recordings of our premises, which may include you and your pet.
          </li>
        </ul>
        <h3>On this website</h3>
        <ul>
          <li>
            Our website does not use its own tracking or advertising cookies, and has no sign-up or
            contact forms. Our hosting provider automatically records standard technical data (such as
            IP address, browser type and pages visited) to keep the site secure and running.
          </li>
          <li>
            The embedded Google Map and links to WhatsApp are provided by Google and Meta, who may set
            their own cookies or collect data under their own privacy policies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use it",
    body: (
      <ul>
        <li>To take and manage bookings, and provide grooming, boarding and boutique services.</li>
        <li>To care for your pet safely, including in a medical emergency.</li>
        <li>To contact you about your bookings, your pet&apos;s care, pick-up and reminders.</li>
        <li>
          To send you occasional offers and updates. You can ask us to stop at any time by replying
          &ldquo;STOP&rdquo; or telling us.
        </li>
        <li>
          To share photos and videos of your pet on our website and social media, unless you&apos;ve
          asked us not to.
        </li>
        <li>To take payments, keep accounts and meet our tax and legal obligations.</li>
        <li>To keep our premises, pets, customers and staff safe and secure.</li>
        <li>To handle complaints and disputes and protect our legal rights.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>
          <strong>We never sell your personal information.</strong>{" "}We only share it where needed:
        </p>
        <ul>
          <li>With a veterinarian, if your pet needs medical attention while in our care.</li>
          <li>
            With service providers we rely on to run the business — for example WhatsApp (Meta),
            Google, our payment providers, accountants and website host — only as far as they need
            it to provide their service.
          </li>
          <li>
            With government authorities, courts or police where required by law, or to protect the
            safety of people or animals, or our legal rights.
          </li>
          <li>
            With a buyer or successor, if our business is ever sold, merged or restructured.
          </li>
        </ul>
        <p>
          Some of these providers may store data outside India. Where they do, it is handled under
          their own safeguards and as permitted by Indian law.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <p>
        We keep your information for as long as you are a customer and for a reasonable period after,
        so we have your pet&apos;s history if you come back. Billing and tax records are kept for as
        long as the law requires. CCTV footage is overwritten automatically after a short period
        unless it&apos;s needed to look into an incident. When information is no longer needed, we
        delete or anonymise it.
      </p>
    ),
  },
  {
    id: "security",
    title: "Keeping it safe",
    body: (
      <p>
        We take reasonable steps to protect your information against loss, misuse and unauthorised
        access, and only our team members who need it can see it. No method of storage or
        transmission is completely secure, though, so we can&apos;t guarantee absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Under Indian data protection law, you can ask us to:</p>
        <ul>
          <li>tell you what personal information we hold about you and how we use it;</li>
          <li>correct or update information that is wrong or incomplete;</li>
          <li>
            delete your information, unless we need to keep it for legal, tax or dispute reasons;
          </li>
          <li>stop sending you offers, or stop sharing photos of your pet;</li>
          <li>withdraw your consent to us using your information; and</li>
          <li>
            nominate someone to exercise these rights on your behalf in case of death or incapacity.
          </li>
        </ul>
        <p>
          To make a request, contact us at {contact}. We may need to confirm your identity first.
        </p>
      </>
    ),
  },
  {
    id: "grievances",
    title: "Questions & grievances",
    body: (
      <p>
        If you have a question or complaint about how we handle your information, please contact our
        grievance contact at {contact}, or write to us at {siteConfig.streetAddress},{" "}
        {siteConfig.locality}, {siteConfig.region} {siteConfig.postalCode}. We&apos;ll respond as soon
        as we can. If you&apos;re not satisfied with our response, you may approach the Data
        Protection Board of India.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Our services are meant for adults. If you&apos;re under 18, please have a parent or guardian
        make bookings and share information with us on your behalf.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The latest version will always be on this page,
        with the date it was last updated at the top. Please also read our{" "}
        <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated={legalLastUpdatedDisplay}
      intro={
        <p>
          What information we collect about you and your pet, why we need it, and how we look after
          it.
        </p>
      }
      sections={sections}
    />
  );
}
