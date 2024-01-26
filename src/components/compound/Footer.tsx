import { ResponsiveContainer, sectionStyle } from "@app/recipies/homeRecipies";
import { css, cx } from "@styled-system/css";
import Link from "next/link";
import hanbyolLogoDark from "@asset/hbjr_logo_dark.png";
import Image from "next/image";
import { flex } from "@styled-system/patterns";

export default function Footer() {
  return (
    <footer className={cx(sectionStyle(), css({ bgColor: "#f4f4f5" }))}>
      <ResponsiveContainer>
        <div className={flex({ flexDir: "column", gap: "20px" })}>
          <Link href="/">
            <div
              className={css({
                width: { base: "150px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              <Image src={hanbyolLogoDark} alt="Logo" />
            </div>
          </Link>
          <p
            className={css({
              color: "#898989",
              fontSize: { base: "15px" },
            })}
          >
            (주)한별이레 | Hanbyoljireh
            <br />
            경기도 성남시 분당구 정자일로 213번길 19, 201-207{" "}
            <span className={css({ fontSize: "13px" })}>
              #201-207, 19, Jungjailro 213 bungil, Bungdang-gu, Seongnam-si,
              Gyeonggi-do, Korea
            </span>
          </p>
          <p
            className={css({
              color: "#898989",
              fontSize: { base: "15px" },

              lineHeight: "1.5",
            })}
          >
            사업자등록번호 275-81-00170 | 대표번호 010.8781.6059 | 팩스
            031.717.6059 | 이메일 baemvery@gmail.com
          </p>
          <p
            className={css({
              color: "#676e74",
              fontSize: { base: "15px" },
            })}
          >
            Copyright © Hanbyoljireh co.ltd. All Rights Reserved
          </p>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
