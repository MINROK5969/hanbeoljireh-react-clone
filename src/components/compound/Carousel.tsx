import { css, cx } from "@styled-system/css";
import image from "next/image";
import Image from "next/image";

export default function Carousel({
  images,
  interval = 3000,
}: {
  images: string[];
  interval: number;
}) {
  return (
    // container
    <div
      className={css({
        display: "inline-block",
        whiteSpace: "nowrap",
        width: "100%",
        overflowX: "hidden",
        _hover: {
          "& .logo-slide": {
            animationPlayState: "paused",
          },
        },
      })}
    >
      <div
        className={cx(
          "logo-slide",
          css({
            position: "relative",
            display: "inline-flex",
            alignItems: "start",
            whiteSpace: "nowrap",
            animation: "slide 10s infinite linear",
          })
        )}
      >
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className={css({
              display: "inline-block",
              width: { mobile: "6rem", sm: "15rem" },
              mx: { mobile: "1rem", sm: "2rem" },
            })}
          >
            <div
              className={css({
                position: "relative",
                width: "auto",
                height: { mobile: "2rem", sm: "5rem" },
              })}
            >
              <Image
                src={image}
                alt={`carousel-${index}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className={cx(
          "logo-slide",
          css({
            position: "relative",
            display: "inline-flex",
            alignItems: "start",
            whiteSpace: "nowrap",
            animation: "slide 10s infinite linear",
          })
        )}
      >
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className={css({
              display: "inline-block",
              width: { mobile: "6rem", sm: "15rem" },
              mx: "30px",
            })}
          >
            <div
              className={css({
                position: "relative",
                width: "auto",
                height: { mobile: "2rem", sm: "5rem" },
              })}
            >
              <Image
                src={image}
                alt={`carousel-${index}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
