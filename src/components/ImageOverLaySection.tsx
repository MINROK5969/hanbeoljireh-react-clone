import Image from "next/image";
import { PropsWithChildren } from "react";

interface ImageOverLaySection extends PropsWithChildren {
  src: string;
}

export default function ImageOverLaySection({
  children,
  src,
}: ImageOverLaySection) {
  return (
    <section className="w-[1920px] h-[774.23px] justify-center items-center inline-flex relative">
      <Image src={src} alt="altImage" layout="fill" className="w-20 h-20" />
    </section>
  );
}
