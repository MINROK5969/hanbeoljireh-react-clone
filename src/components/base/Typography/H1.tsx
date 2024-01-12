import { css } from "@styled-system/css";
import { SystemStyleObject } from "@styled-system/types";
import { PropsWithChildren } from "react";

interface TextComponent extends PropsWithChildren {
  css?: SystemStyleObject;
}

const style1 = {
  color: "#fff",
  fontSize: { base: "4rem", smDown: "33px", sm: "52px" },
  p: "1%",
  fontWeight: "bold",
  textAlign: "center",
} as SystemStyleObject;

export default function H1({ children, css: cssProp }: TextComponent) {
  const clsx = css(style1, cssProp);
  return <h1 className={clsx}>{children} </h1>;
}
