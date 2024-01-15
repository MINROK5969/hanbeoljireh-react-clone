import { styled } from "@styled-system/jsx";

import H1 from "./base/Typography/H1";
import H2 from "./base/Typography/H2";
import { css } from "@styled-system/css";

interface PageTitleSectionWithImageBackground {
  title: string;
  subTitle?: string;
  imgSrc: string;
}

export default function PageTitleSectionWithImageBackground({
  title,
  subTitle,
  imgSrc,
}: PageTitleSectionWithImageBackground) {
  return (
    <styled.section>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: "14vw",
          paddingBottom: "12vw",
          paddingLeft: "3%",
          paddingRight: "3%",
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: { base: "cover" },
          zIndex: 1,
          boxSizing: "border-box",
        })}
      >
        <div
          className={css({
            width: "100%",
            rounded: "10px",
          })}
        >
          <H1>{title}</H1>
          <H2>{subTitle}</H2>
        </div>
      </div>
    </styled.section>
  );
}
