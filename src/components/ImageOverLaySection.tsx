import Image from "next/image";
import { PropsWithChildren } from "react";
import { css } from "../../styled-system/css";

interface ImageOverLaySection extends PropsWithChildren {
  src: string;
}

export default function ImageOverLaySection({
  children,
  src,
}: ImageOverLaySection) {
  return (
    <section className={css({ w: "240", h: "240" })}>
      <div
        className={css({
          width: 200,
          height: 240,
          position: "relative",
          objectFit: "cover",
        })}
      >
        <Image src={src} alt="altImage" fill />
      </div>
    </section>
  );
}
