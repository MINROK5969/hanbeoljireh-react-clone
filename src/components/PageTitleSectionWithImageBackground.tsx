import { styled } from "@styled-system/jsx";

import H1 from "./base/Typography/H1";
import H2 from "./base/Typography/H2";
import { css } from "@styled-system/css";
import { SystemStyleObject } from "@pandacss/dev";

interface PageTitleSectionWithImageBackground {
  title: string;
  subTitle?: string;
  css: SystemStyleObject;
}

export default function PageTitleSectionWithImageBackground({
  title,
  subTitle,
  css: cssProp,
}: PageTitleSectionWithImageBackground) {
  return (
    <styled.section>
      <div
        className={css(cssProp, {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: "14vw",
          paddingBottom: "12vw",
          paddingLeft: "3%",
          paddingRight: "3%",
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
          })}
        >
          <H1>{title}</H1>
          <H2>{subTitle}</H2>
        </div>
      </div>
    </styled.section>
  );
}
