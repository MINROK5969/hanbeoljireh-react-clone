import { css } from "@styled-system/css";
import { SystemStyleObject } from "@styled-system/types";
import { PropsWithChildren } from "react";

interface TextComponent extends PropsWithChildren {
  css?: SystemStyleObject;
}

const style1 = {
  color: "#fff",
  fontWeight: "light",
  fontSize: { base: "2rem", smDown: "21px", sm: "2rem", md: "2.625rem" },
  textAlign: "center",
} as SystemStyleObject;

export default function H2({ children, css: cssProp }: TextComponent) {
  const clsx = css(style1, cssProp);
  return <h1 className={clsx}>{children} </h1>;
}
