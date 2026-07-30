import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Scissors, Moon, ShoppingBag, ShieldCheck, Leaf, Sparkles,
  Stethoscope, ChevronDown, Phone, Mail, MapPin, Clock, ArrowRight,
} from "lucide-react";

const WA = "919175690509";
const wa = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

/* ---------- Brand mark: crown + paw crest ---------- */
function Crest({ size = 44, tone = "gold" }) {
  const c = tone === "gold" ? "var(--gold)" : "var(--paper)";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M9 18l5 5 5-8 5 8 5-8 5 8 5-5-2 14H11L9 18z" stroke={c} strokeWidth="1.4"
        strokeLinejoin="round" />
      <circle cx="14" cy="16" r="1.6" fill={c} />
      <circle cx="24" cy="13.5" r="1.6" fill={c} />
      <circle cx="34" cy="16" r="1.6" fill={c} />
      {/* paw */}
      <circle cx="24" cy="36" r="3.2" fill={c} />
      <circle cx="19.5" cy="31.5" r="1.5" fill={c} />
      <circle cx="24" cy="29.8" r="1.5" fill={c} />
      <circle cx="28.5" cy="31.5" r="1.5" fill={c} />
    </svg>
  );
}

/* ---------- Gold seal divider ---------- */
function Seal() {
  return (
    <div className="flex items-center justify-center gap-4 my-2" aria-hidden="true">
      <span className="seal-line" />
      <Crest size={26} />
      <span className="seal-line" />
    </div>
  );
}

/* ---------- Scroll reveal hook ---------- */
function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll(".reveal");
    if (reduce) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("in")),
      { threshold: 0.15 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

/* ---------- Labeled photo placeholder ---------- */
function Photo({ label, ratio = "4 / 5", tall }) {
  return (
    <div className="photo" style={{ aspectRatio: tall ? "3 / 4" : ratio }}>
      <Crest size={34} />
      <span className="photo-label">{label}</span>
    </div>
  );
}

function Eyebrow({ children, light }) {
  return <p className={`eyebrow ${light ? "text-gold" : "text-clay"}`}>{children}</p>;
}

export default function MostlyfurLanding() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState(0);
  useReveal();

  const nav = [
    ["Services", "#services"],
    ["Grooming", "#grooming"],
    ["Boarding", "#boarding"],
    ["Boutique", "#boutique"],
    ["Team", "#team"],
    ["Visit", "#visit"],
  ];

  const pillars = [
    { icon: Scissors, t: "Dog & Cat Grooming", d: "Soothing baths and stylish, stress-free grooming at our calm Siolim salon — the relaxation they deserve." },
    { icon: Moon, t: "Serene Cat Boarding", d: "A peaceful, cats-only retreat for your feline to stay while you explore Goa. Dog boarding coming soon." },
    { icon: ShoppingBag, t: "The Pet Boutique", d: "An in-store pet shop of toys, gourmet treats, accessories and supplies — hand-picked for spoiled royalty." },
  ];

  const reasons = [
    { icon: ShieldCheck, t: "Stress-free, always", d: "Certified groomers trained to keep handling calm and gentle from start to finish." },
    { icon: Stethoscope, t: "Wellness checks", d: "Every visit includes a basic once-over, so small issues get spotted early." },
    { icon: Leaf, t: "All-natural products", d: "Skin-kind, high-quality products chosen for sensitive coats and noses." },
    { icon: Sparkles, t: "Pet-first by design", d: "Built for animals, not just tolerant of them — your pet is the guest of honour." },
  ];

  const team = [
    { n: "Kasturi Borkotoky", r: "Founder · Lead Groomer", b: "Traded boardrooms for grooming rooms. A decade of retail polish, the heart of a proud cat mom." },
    { n: "Akash Gautam", r: "Co-founder · Groomer", b: "Tech geek, certified groomer and devoted cat dad. Precise cuts, endless cuddles." },
    { n: "Kanky Borkotoky", r: "Groomer · Educator", b: "Certified groomer and full-time animal enthusiast — more four-legged friends than two." },
  ];

  const reviews = [
    { q: "They treated our anxious rescue like family. First groom she didn't tremble through.", a: "— Placeholder review · replace with real Google review" },
    { q: "Boarded our cat for a week in Goa. Came back calm, clean and clearly spoiled.", a: "— Placeholder review · replace with real Google review" },
    { q: "The boutique finds are unreal. Walked in for a brush, left with a tiny crown.", a: "— Placeholder review · replace with real Google review" },
  ];

  const faqs = [
    { q: "Do you groom both dogs and cats?", a: "Yes — our certified groomers handle both dogs and cats. All grooming happens at our Siolim salon, where pets settle faster than they would at home." },
    { q: "Do you offer grooming at home?", a: "We're salon-only, on purpose. Pets are calmer on neutral ground, the professional setup gives a safer, better groom, and you skip the considerable mess at home. More on that below." },
    { q: "Do I need an appointment?", a: "Grooming and boarding are best booked ahead so we can give each pet unhurried time. Message us on WhatsApp to find a slot." },
    { q: "Is boarding for cats only?", a: "For now, yes — a quiet, cats-only retreat. Dog boarding is on its way; message us to join the waitlist." },
    { q: "Are vaccinations required for boarding?", a: "Yes, up-to-date vaccinations keep every guest safe. Bring records for your cat's stay. (Confirm exact requirements before publishing.)" },
    { q: "Where are you located?", a: "In the heart of Siolim, North Goa — an easy drive from Assagao, Anjuna, Morjim, Mandrem and Mapusa. Loved by locals and visiting pet parents alike." },
  ];

  const css = `
    :root{
      --paper:#F4EDDE; --ivory:#FBF6EC; --palm:#16352A; --palm-2:#1F4A3A;
      --gold:#C2A14D; --gold-soft:#DFC588; --clay:#C57A53; --ink:#241F1B; --ink-soft:#6A5F53;
    }
    .mf{ background:var(--paper); color:var(--ink); font-family:"Hanken Grotesk",system-ui,sans-serif;
      -webkit-font-smoothing:antialiased; overflow-x:hidden; }
    .display{ font-family:"Bodoni Moda",Georgia,serif; line-height:1.02; letter-spacing:-0.01em; }
    .display i{ font-style:italic; }
    .eyebrow{ font-family:"Marcellus",serif; text-transform:uppercase; letter-spacing:0.34em;
      font-size:0.72rem; }
    .serif{ font-family:"Bodoni Moda",Georgia,serif; }
    .marc{ font-family:"Marcellus",serif; }
    .text-gold{ color:var(--gold); } .text-clay{ color:var(--clay); } .text-palm{ color:var(--palm); }
    .text-paper{ color:var(--paper); } .text-ivory{ color:var(--ivory); } .text-soft{ color:var(--ink-soft); }
    .bg-palm{ background:var(--palm); } .bg-ivory{ background:var(--ivory); } .bg-paper{ background:var(--paper); }

    .btn{ display:inline-flex; align-items:center; gap:.55rem; padding:.85rem 1.5rem; border-radius:999px;
      font-weight:600; font-size:.95rem; transition:transform .2s ease, box-shadow .2s ease, background .2s; cursor:pointer; }
    .btn:hover{ transform:translateY(-2px); }
    .btn-gold{ background:var(--gold); color:var(--palm); box-shadow:0 6px 22px rgba(194,161,77,.32); }
    .btn-gold:hover{ background:var(--gold-soft); }
    .btn-ghost{ border:1px solid var(--gold); color:var(--palm); }
    .btn-ghost.on-dark{ color:var(--paper); }
    .btn-ghost:hover{ background:rgba(194,161,77,.12); }

    .seal-line{ height:1px; width:64px; background:linear-gradient(90deg,transparent,var(--gold)); }
    .seal-line:last-child{ background:linear-gradient(90deg,var(--gold),transparent); }

    .photo{ width:100%; border-radius:18px; background:
      radial-gradient(120% 90% at 30% 10%, rgba(194,161,77,.18), transparent 60%),
      linear-gradient(160deg, var(--palm-2), var(--palm));
      display:flex; flex-direction:column; align-items:center; justify-content:center; gap:.7rem;
      border:1px solid rgba(194,161,77,.28); }
    .photo-label{ font-family:"Marcellus",serif; color:var(--gold-soft); font-size:.78rem;
      letter-spacing:.12em; text-transform:uppercase; padding:0 1rem; text-align:center; }

    .card{ background:var(--ivory); border:1px solid rgba(36,31,27,.07); border-radius:18px;
      transition:transform .25s ease, box-shadow .25s ease; }
    .card:hover{ transform:translateY(-4px); box-shadow:0 18px 40px rgba(22,53,42,.10); }

    .pill{ display:inline-flex; align-items:center; gap:.45rem; padding:.4rem .85rem; border-radius:999px;
      border:1px solid rgba(194,161,77,.5); color:var(--palm); font-size:.8rem; }
    .pill.on-dark{ color:var(--paper); border-color:rgba(194,161,77,.45); }

    .reveal{ opacity:0; transform:translateY(22px); transition:opacity .7s ease, transform .7s ease; }
    .reveal.in{ opacity:1; transform:none; }

    .nav-link{ position:relative; font-size:.92rem; color:var(--ink); transition:color .2s; }
    .nav-link:after{ content:""; position:absolute; left:0; bottom:-4px; height:1px; width:0;
      background:var(--gold); transition:width .25s; }
    .nav-link:hover{ color:var(--palm); } .nav-link:hover:after{ width:100%; }

    .faq-item{ border-top:1px solid rgba(36,31,27,.12); }
    .faq-q{ width:100%; display:flex; align-items:center; justify-content:space-between; gap:1rem;
      padding:1.25rem 0; text-align:left; cursor:pointer; }
    .faq-a{ overflow:hidden; max-height:0; transition:max-height .35s ease; }
    .faq-a.open{ max-height:240px; }
    .chev{ transition:transform .3s; flex:none; } .chev.open{ transform:rotate(180deg); }

    a:focus-visible, button:focus-visible{ outline:2px solid var(--gold); outline-offset:3px; border-radius:6px; }
    @media (prefers-reduced-motion: reduce){ *{ transition:none !important; } }
  `;

  useEffect(() => {
    const pre1 = Object.assign(document.createElement("link"), { rel: "preconnect", href: "https://fonts.googleapis.com" });
    const pre2 = Object.assign(document.createElement("link"), { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" });
    const font = Object.assign(document.createElement("link"), {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,500&family=Marcellus&family=Hanken+Grotesk:wght@400;500;600;700&display=swap",
    });
    document.head.append(pre1, pre2, font);
    return () => [pre1, pre2, font].forEach((n) => n.remove());
  }, []);

  return (
    <div className="mf">
      <style>{css}</style>

      {/* ---------------- NAV ---------------- */}
      <header className="sticky top-0 z-50" style={{ background: "rgba(244,237,222,.82)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(36,31,27,.08)" }}>
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <Crest size={30} />
            <span className="marc text-palm" style={{ fontSize: "1.25rem", letterSpacing: ".16em" }}>MOSTLYFUR</span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {nav.map(([l, h]) => <a key={l} href={h} className="nav-link">{l}</a>)}
          </nav>
          <a href={wa("Hi! I'd like to book an appointment with Mostlyfur.")} target="_blank" rel="noreferrer"
            className="btn btn-gold hidden sm:inline-flex" style={{ padding: ".6rem 1.15rem" }}>
            Book on WhatsApp
          </a>
          <button className="md:hidden text-palm" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-3" style={{ borderTop: "1px solid rgba(36,31,27,.08)" }}>
            {nav.map(([l, h]) => <a key={l} href={h} className="nav-link py-1.5" onClick={() => setOpen(false)}>{l}</a>)}
            <a href={wa("Hi! I'd like to book an appointment with Mostlyfur.")} target="_blank" rel="noreferrer" className="btn btn-gold mt-1">Book on WhatsApp</a>
          </div>
        )}
      </header>

      {/* ---------------- HERO ---------------- */}
      <section id="top" className="bg-palm" style={{ position: "relative" }}>
        <div className="max-w-6xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal in">
            <Eyebrow light>Pet Spa · Grooming · Cat Boarding · Siolim, Goa</Eyebrow>
            <h1 className="display text-paper mt-5" style={{ fontSize: "clamp(2.7rem,6vw,4.6rem)" }}>
              Pampering pets like the <i className="text-gold">royalty</i> they already are.
            </h1>
            <p className="text-paper mt-6" style={{ maxWidth: "31rem", opacity: .85, lineHeight: 1.65 }}>
              Luxurious dog &amp; cat grooming, a serene cats-only boarding retreat, and a curated pet
              boutique — in the heart of Siolim, North Goa. Loved by locals and visiting pet parents alike.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={wa("Hi! I'd like to book a grooming session at Mostlyfur.")} target="_blank" rel="noreferrer" className="btn btn-gold">
                Book on WhatsApp <ArrowRight size={17} />
              </a>
              <a href="#services" className="btn btn-ghost on-dark">Explore services</a>
            </div>
          </div>
          <div className="reveal in"><Photo label="Hero photo — your spa / happy pet" tall /></div>
        </div>
        {/* royal warrants */}
        <div style={{ borderTop: "1px solid rgba(194,161,77,.22)" }}>
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {["Certified stress-free groomers", "Dogs & cats groomed", "Serene cats-only boarding", "All-natural products"].map((t) => (
              <span key={t} className="pill on-dark"><Crest size={14} /> {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES / PILLARS ---------------- */}
      <section id="services" className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center reveal">
          <Eyebrow>Experience the Goa magic</Eyebrow>
          <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)" }}>
            Goa's pet-first spa, all under one roof
          </h2>
          <p className="text-soft mt-4" style={{ maxWidth: "36rem", margin: "1rem auto 0" }}>
            Premium dog and cat grooming, serene cats-only boarding, and a curated pet store — in Siolim,
            North Goa. Here, pets aren't just allowed. We exist for them.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {pillars.map(({ icon: Icon, t, d }) => (
            <div key={t} className="card p-8 reveal">
              <div className="flex items-center justify-center" style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(22,53,42,.06)" }}>
                <Icon size={24} className="text-palm" />
              </div>
              <h3 className="serif text-palm mt-5" style={{ fontSize: "1.5rem" }}>{t}</h3>
              <p className="text-soft mt-3" style={{ lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- GROOMING ---------------- */}
      <section id="grooming" className="bg-ivory">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
          <div className="reveal order-2 md:order-1"><Photo label="Grooming photo — your groomer at work" /></div>
          <div className="reveal order-1 md:order-2">
            <Eyebrow>Signature grooming · Siolim</Eyebrow>
            <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
              Dog &amp; cat grooming, where health meets happiness
            </h2>
            <p className="text-soft mt-5" style={{ lineHeight: 1.7 }}>
              Grooming isn't vanity — it's comfort, health and confidence. At our Siolim salon, certified,
              stress-free groomers tailor every session to your dog or cat, with essential wellness checks
              and all-natural products, so they leave looking and feeling their best.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {["Calm, unhurried handling", "Basic wellness check every visit", "Skin-kind, all-natural products", "Cuts tailored to coat and breed"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-palm"><Crest size={16} /> {t}</li>
              ))}
            </ul>
            <a href={wa("Hi! I'd like to schedule a grooming session for my pet.")} target="_blank" rel="noreferrer" className="btn btn-gold mt-8">
              Schedule a pampering session <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- WHY SALON (not at-home) ---------------- */}
      <section className="bg-palm">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
          <div className="text-center reveal">
            <Eyebrow light>Salon-only, on purpose</Eyebrow>
            <h2 className="display text-paper mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
              Why we groom at the salon, not your home
            </h2>
            <p className="text-paper mt-4" style={{ opacity: .82, maxWidth: "40rem", margin: "1rem auto 0", lineHeight: 1.65 }}>
              We're often asked for home grooming. We don't offer it — and that's a deliberate choice,
              because it's genuinely better for your pet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { icon: ShieldCheck, t: "Calmer on neutral ground", d: "At home, animals instinctively guard their territory and tense up. In our calm, dedicated space they settle faster — so handling stays gentle and safe." },
              { icon: Scissors, t: "A proper, professional setup", d: "Salon tubs, tables, dryers, lighting and non-slip grip make for a thorough, careful groom no bathroom floor can match." },
              { icon: Sparkles, t: "Your home stays spotless", d: "Grooming is wet, hairy, messy work. We contain every bit of it — you get a fresh pet and a clean home, no cleanup required." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="reveal" style={{ padding: "1.75rem", borderRadius: 18, border: "1px solid rgba(194,161,77,.22)", background: "rgba(255,255,255,.03)" }}>
                <Icon size={26} className="text-gold" />
                <h3 className="serif text-paper mt-4" style={{ fontSize: "1.25rem" }}>{t}</h3>
                <p className="text-paper mt-2" style={{ opacity: .78, fontSize: ".92rem", lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
          <div className="text-center reveal mt-12">
            <p className="serif text-gold" style={{ fontSize: "1.15rem", maxWidth: "34rem", margin: "0 auto 1.5rem" }}>
              It's not about convenience for us — it's a better, safer experience for them.
            </p>
            <a href={wa("Hi! I'd like to book a salon grooming visit at Mostlyfur.")} target="_blank" rel="noreferrer" className="btn btn-gold">
              Book a salon visit <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- BOARDING ---------------- */}
      <section id="boarding" className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <Eyebrow>Serene cat boarding · Goa</Eyebrow>
          <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
            A peaceful stay for your cat, while you explore
          </h2>
          <p className="text-soft mt-5" style={{ lineHeight: 1.7 }}>
            Visiting Goa, or just need a few human-only days? Leave your cat in a calm, cats-only retreat
            built around feline comfort — quiet suites, gentle company and steady routines that keep them
            relaxed for a few hours or a few weeks.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-7">
            {[["Quiet suites", "Low-stress, cat-first spaces"], ["Daily care", "Feeding, cleaning, cuddles"], ["Safe & secure", "Supervised, vaccination-checked"], ["Flexible stays", "By the hour or by the week"]].map(([t, d]) => (
              <div key={t} className="card p-5">
                <p className="serif text-palm" style={{ fontSize: "1.1rem" }}>{t}</p>
                <p className="text-soft mt-1" style={{ fontSize: ".9rem" }}>{d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a href={wa("Hi! I'd like to ask about cat boarding at Mostlyfur.")} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Ask about cat boarding
            </a>
            <a href={wa("Hi! I'd like to join the waitlist for dog boarding at Mostlyfur.")} target="_blank" rel="noreferrer" className="text-clay" style={{ fontSize: ".92rem", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Dog boarding coming soon — join the waitlist
            </a>
          </div>
        </div>
        <div className="reveal"><Photo label="Boarding photo — your cat suite / lounge" tall /></div>
      </section>

      {/* ---------------- BOUTIQUE ---------------- */}
      <section id="boutique" className="bg-ivory">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-end reveal">
            <div>
              <Eyebrow>The pet boutique</Eyebrow>
              <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
                A pet store, fit for a crown
              </h2>
            </div>
            <p className="text-soft" style={{ lineHeight: 1.7 }}>
              Our in-store boutique stocks toys, gourmet treats, accessories and everyday pet supplies —
              hand-picked, not just stacked. Ask about curated gift bundles, perfect for the pet who already
              has everything.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {["Gourmet treats", "Toys & enrichment", "Coats & accessories", "Gift bundles"].map((t) => (
              <div key={t} className="reveal">
                <Photo label={t} ratio="1 / 1" />
                <p className="marc text-palm mt-3 text-center" style={{ letterSpacing: ".08em", fontSize: ".95rem" }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY (dark band) ---------------- */}
      <section className="bg-palm">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
          <div className="text-center reveal">
            <Eyebrow light>Why Mostlyfur</Eyebrow>
            <h2 className="display text-paper mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
              The little things, done royally
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {reasons.map(({ icon: Icon, t, d }) => (
              <div key={t} className="reveal" style={{ padding: "1.75rem", borderRadius: 18, border: "1px solid rgba(194,161,77,.22)", background: "rgba(255,255,255,.03)" }}>
                <Icon size={26} className="text-gold" />
                <h3 className="serif text-paper mt-4" style={{ fontSize: "1.25rem" }}>{t}</h3>
                <p className="text-paper mt-2" style={{ opacity: .78, fontSize: ".92rem", lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- GALLERY ---------------- */}
      <section className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center reveal"><Seal /><h2 className="display text-palm mt-2" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>Moments from the spa</h2></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {["Before & after", "Spa day", "Happy regular", "The boutique", "Boarding lounge", "Behind the scenes", "Tiny crown energy", "Fresh & fluffy"].map((t, i) => (
            <div key={t} className="reveal" style={{ gridRow: i % 5 === 0 ? "span 2" : "auto" }}>
              <Photo label={t} ratio={i % 5 === 0 ? "3 / 4" : "1 / 1"} />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- TEAM ---------------- */}
      <section id="team" className="bg-ivory">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
          <div className="text-center reveal">
            <Eyebrow>The hoomans</Eyebrow>
            <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>Faces that add the magic</h2>
            <p className="text-soft mt-4" style={{ maxWidth: "34rem", margin: "1rem auto 0" }}>
              A small team of pet parents and lovers, here to support your pet's happiness — from the
              perfect groom to the right treat.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {team.map((m) => (
              <div key={m.n} className="card overflow-hidden reveal">
                <Photo label={`Portrait — ${m.n.split(" ")[0]}`} ratio="4 / 5" />
                <div className="p-6">
                  <h3 className="serif text-palm" style={{ fontSize: "1.35rem" }}>{m.n}</h3>
                  <p className="eyebrow text-clay mt-1" style={{ letterSpacing: ".18em" }}>{m.r}</p>
                  <p className="text-soft mt-3" style={{ fontSize: ".92rem", lineHeight: 1.6 }}>{m.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- REVIEWS ---------------- */}
      <section className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center reveal"><Eyebrow>Kind words</Eyebrow>
          <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>Loved by Goa's pet parents</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {reviews.map((r, i) => (
            <div key={i} className="card p-7 reveal">
              <Crest size={22} />
              <p className="serif text-palm mt-4" style={{ fontSize: "1.2rem", lineHeight: 1.45 }}>"{r.q}"</p>
              <p className="text-soft mt-4" style={{ fontSize: ".82rem" }}>{r.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-ivory">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-28">
          <div className="text-center reveal"><Eyebrow>Good to know</Eyebrow>
            <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>Questions, answered</h2>
          </div>
          <div className="mt-12 reveal">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button className="faq-q" onClick={() => setFaq(faq === i ? -1 : i)} aria-expanded={faq === i}>
                  <span className="serif text-palm" style={{ fontSize: "1.2rem" }}>{f.q}</span>
                  <ChevronDown className={`chev text-clay ${faq === i ? "open" : ""}`} size={20} />
                </button>
                <div className={`faq-a ${faq === i ? "open" : ""}`}>
                  <p className="text-soft" style={{ paddingBottom: "1.25rem", lineHeight: 1.6 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- VISIT ---------------- */}
      <section id="visit" className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <Eyebrow>Visit us</Eyebrow>
          <h2 className="display text-palm mt-4" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>Come say hey 😊</h2>
          <p className="text-soft mt-4" style={{ lineHeight: 1.65, maxWidth: "30rem" }}>
            In the heart of Siolim, North Goa — an easy drive from Assagao, Anjuna, Morjim, Mandrem and
            Mapusa, and a favourite with both Goa locals and visiting pet parents.
          </p>
          <div className="flex flex-col gap-4 mt-7">
            <p className="flex items-start gap-3 text-palm"><MapPin size={20} className="text-clay" style={{ flex: "none" }} /> <span>Siolim, North Goa <span className="text-soft">(confirm full address)</span></span></p>
            <p className="flex items-center gap-3 text-palm"><Clock size={20} className="text-clay" /> <span>Open daily <span className="text-soft">· confirm hours</span></span></p>
            <p className="flex items-center gap-3 text-palm"><Phone size={20} className="text-clay" /> +91 91756 90509</p>
            <p className="flex items-center gap-3 text-palm"><Mail size={20} className="text-clay" /> pets@mostlyfur.com</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={wa("Hi! I'd like to visit Mostlyfur — could you share your address and hours?")} target="_blank" rel="noreferrer" className="btn btn-gold">Message on WhatsApp</a>
            <a href="https://www.google.com/maps/search/Mostlyfur+Siolim+Goa" target="_blank" rel="noreferrer" className="btn btn-ghost">Get directions</a>
          </div>
        </div>
        <div className="reveal"><Photo label="Map / storefront — embed Google Map here" ratio="4 / 3" /></div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="bg-palm">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-24 text-center reveal">
          <Seal />
          <h2 className="display text-paper mt-4" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)" }}>
            Ready to spoil <i className="text-gold">your</i> royalty?
          </h2>
          <p className="text-paper mt-5" style={{ opacity: .82, maxWidth: "30rem", margin: "1.25rem auto 0", lineHeight: 1.65 }}>
            Book a groom, reserve a stay, or just ask us anything — we reply on WhatsApp.
          </p>
          <a href={wa("Hi! I'd like to book with Mostlyfur.")} target="_blank" rel="noreferrer" className="btn btn-gold mt-8">
            Book on WhatsApp <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-palm" style={{ borderTop: "1px solid rgba(194,161,77,.18)" }}>
        <div className="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5"><Crest size={28} /><span className="marc text-paper" style={{ fontSize: "1.2rem", letterSpacing: ".16em" }}>MOSTLYFUR</span></div>
            <p className="text-paper mt-4" style={{ opacity: .72, fontSize: ".9rem", lineHeight: 1.6, maxWidth: "20rem" }}>
              Pampering pets like they're royalty — luxurious spa, serene cat boarding and a curated boutique in Goa.
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold">Explore</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {nav.map(([l, h]) => <li key={l}><a href={h} className="text-paper nav-link" style={{ opacity: .82 }}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-gold">Contact</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-paper" style={{ opacity: .82, fontSize: ".92rem" }}>
              <li>+91 91756 90509</li>
              <li>pets@mostlyfur.com</li>
              <li>Siolim, North Goa</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(194,161,77,.14)" }}>
          <div className="max-w-6xl mx-auto px-5 py-5 flex flex-wrap gap-3 justify-between text-paper" style={{ opacity: .6, fontSize: ".82rem" }}>
            <span>© {new Date().getFullYear()} Mostlyfur. All rights reserved.</span>
            <span className="flex gap-5"><a href="#" className="nav-link" style={{ color: "inherit" }}>Privacy</a><a href="#" className="nav-link" style={{ color: "inherit" }}>Terms</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
