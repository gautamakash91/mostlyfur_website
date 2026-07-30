import { Crest } from "./Crest";

export function Photo({
  label,
  ratio = "4 / 5",
  tall,
}: {
  label: string;
  ratio?: string;
  tall?: boolean;
}) {
  return (
    <div className="photo" style={{ aspectRatio: tall ? "3 / 4" : ratio }}>
      <Crest size={34} />
      <span className="photo-label">{label}</span>
    </div>
  );
}
