import Image from "next/image";
import logo from "@/public/logo.png";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src={logo}
      alt="Mostlyfur"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      priority
    />
  );
}
