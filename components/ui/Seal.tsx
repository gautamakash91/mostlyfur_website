import { Crest } from "./Crest";

export function Seal() {
  return (
    <div className="flex items-center justify-center gap-4 my-2" aria-hidden="true">
      <span className="seal-line" />
      <Crest size={26} />
      <span className="seal-line" />
    </div>
  );
}
