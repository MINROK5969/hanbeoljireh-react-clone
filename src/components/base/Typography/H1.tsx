import { css } from "@styled-system/css";
import { SystemStyleObject } from "@styled-system/types";
import { ComponentProps, PropsWithChildren } from "react";

interface TextComponent extends ComponentProps<"h1"> {
  css?: SystemStyleObject;
}

const style1 = {
  color: "#fff",
  fontSize: { base: "4rem", smDown: "33px", sm: "52px" },
  p: "1%",
  fontWeight: "bold",
  textAlign: "center",
} as SystemStyleObject;

export default function H1({
  children,
  css: cssProp,
  ...restProps
}: TextComponent) {
  const clsx = css(style1, cssProp);
  return (
    <h1 className={clsx} {...restProps}>
      {children}{" "}
    </h1>
  );
}
