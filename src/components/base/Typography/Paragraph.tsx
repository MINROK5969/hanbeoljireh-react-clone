import { css } from "@styled-system/css";
import { SystemStyleObject } from "@styled-system/types";
import { PropsWithChildren } from "react";

interface TextComponent extends PropsWithChildren {
  css?: SystemStyleObject;
}

const paragraphStyle = {
  color: "#424242",
  fontWeight: "medium",
  fontSize: {
    base: "1.5rem",
    smDown: "1.125rem",
    sm: "1.25rem",
    md: "2.25rem",
  },
  textAlign: "center",
  lineHeight: { sm: "50px", md: "50px" },
} as SystemStyleObject;

export default function Paragraph({ children, css: cssProp }: TextComponent) {
  const clsx = css(paragraphStyle, cssProp);
  return <p className={clsx}>{children} </p>;
}
