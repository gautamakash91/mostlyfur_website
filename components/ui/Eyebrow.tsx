export function Eyebrow({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return <p className={`eyebrow ${light ? "text-gold" : "text-clay"}`}>{children}</p>;
}
