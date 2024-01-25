import { css } from "@styled-system/css";
import { SystemStyleObject } from "@styled-system/types";
import { PropsWithChildren } from "react";

interface TextComponent extends PropsWithChildren {
  css?: SystemStyleObject;
}

const style1 = {
  color: "#fff",
  fontWeight: "light",
  fontSize: { base: "1.5rem", mobile: "1.25rem" },
  textAlign: "center",
} as SystemStyleObject;

export default function H5({ children, css: cssProp }: TextComponent) {
  const clsx = css(style1, cssProp);
  return <h5 className={clsx}>{children} </h5>;
}
