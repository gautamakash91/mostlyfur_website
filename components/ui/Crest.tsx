export function Crest({ size = 44, tone = "gold" }: { size?: number; tone?: "gold" | "paper" }) {
  const c = tone === "gold" ? "var(--gold)" : "var(--paper)";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M9 18l5 5 5-8 5 8 5-8 5 8 5-5-2 14H11L9 18z"
        stroke={c}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="16" r="1.6" fill={c} />
      <circle cx="24" cy="13.5" r="1.6" fill={c} />
      <circle cx="34" cy="16" r="1.6" fill={c} />
      <circle cx="24" cy="36" r="3.2" fill={c} />
      <circle cx="19.5" cy="31.5" r="1.5" fill={c} />
      <circle cx="24" cy="29.8" r="1.5" fill={c} />
      <circle cx="28.5" cy="31.5" r="1.5" fill={c} />
    </svg>
  );
}
