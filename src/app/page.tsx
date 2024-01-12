"use client";
import H1 from "@components/base/Typography/H1";
import H2 from "@components/base/Typography/H2";
import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

export default function Home() {
  return (
    <main>
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
            backgroundImage: "url(/assets/main_img.jpg)",
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
            <H1>Farmer’s Point of View</H1>
            <H2>Represent pig on pig side.</H2>
          </div>
        </div>
      </styled.section>
    </main>
  );
}
