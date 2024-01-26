import { SystemStyleObject } from "@pandacss/dev";
import { css, cva, cx } from "@styled-system/css";
import { PropsWithChildren } from "react";

export const sectionStyle = cva({
  base: {
    bgColor: "sectionDefaultBg",
    pt: "100px",
    px: { base: "90px", mobile: "30px" },
    pb: "calc(100vw * 0.05)",
  },
  variants: {
    bg: {
      white: {
        bgColor: "#FFFFFF",
      },
      grayPlain: {
        bgColor: "#f9f9f9",
      },
      grayGradient: {
        bg: "linear-gradient(90deg,#585b64 0%,#2c2f38 100%)",
      },
      header: {
        pt: "28px",
        bgColor: { lgDown: "#ffffffD9", lg: "transparent" },
        pb: "28px",
      },
    },
  },
});

export const responsiveContainer = css({
  maxWidth: {
    smDown: "320px",
    sm: "420px",
    md: "600px",
    lg: "1028px",
    xl: "1245px",
  },
  mx: "auto",
});

export function ResponsiveContainer({ children }: PropsWithChildren) {
  return <div className={responsiveContainer}>{children}</div>;
}

interface SectionWithResponsiveContainerProps extends PropsWithChildren {
  css?: SystemStyleObject;
}

export function SectionWithResponsiveContainer({
  children,
  css: cssProp,
}: SectionWithResponsiveContainerProps) {
  return (
    <section
      className={cx(
        css(sectionStyle.raw({ bg: "white" })),
        css({ ...cssProp })
      )}
    >
      <div className={responsiveContainer}>{children}</div>
    </section>
  );
}
