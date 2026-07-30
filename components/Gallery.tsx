import Image from "next/image";
import { Seal } from "./ui/Seal";
import pompomPuppy from "@/public/photos/gallery/gallery-puppy-pompom.jpg";
import catGroomTable from "@/public/photos/gallery/gallery-cat-groomtable.jpg";
import dogPhotowall from "@/public/photos/gallery/gallery-dog-photowall.jpg";
import pitbullCouch from "@/public/photos/gallery/gallery-pitbull-couch.jpg";
import catCouchPet from "@/public/photos/gallery/gallery-cat-couch-pet.jpg";
import catTree from "@/public/photos/gallery/gallery-cat-tree.jpg";
import poodleCouch from "@/public/photos/gallery/gallery-poodle-couch.jpg";
import shopCorridor from "@/public/photos/gallery/gallery-shop-corridor.jpg";
import treatWall from "@/public/photos/gallery/gallery-treat-wall.jpg";

const shots = [
  { label: "Tiny crown energy", photo: pompomPuppy },
  { label: "Spa day", photo: catGroomTable },
  { label: "Paws for a photo", photo: dogPhotowall },
  { label: "Happy regular", photo: pitbullCouch },
  { label: "Behind the scenes", photo: catCouchPet },
  { label: "Boarding lounge", photo: catTree },
  { label: "Fresh & fluffy", photo: poodleCouch },
  { label: "The boutique", photo: shopCorridor },
  { label: "The treat wall", photo: treatWall },
];

export function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-20 md:py-28">
      <div className="text-center reveal">
        <Seal />
        <h2 className="display text-palm mt-2" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
          Moments from the spa
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {shots.map(({ label, photo }, i) => (
          <div key={label} className="reveal" style={{ gridRow: i % 5 === 0 ? "span 2" : "auto" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: i % 5 === 0 ? "3 / 4" : "1 / 1",
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(194,161,77,.28)",
              }}
            >
              <Image
                src={photo}
                alt={label}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
