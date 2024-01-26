"use client";
import { ResponsiveContainer, sectionStyle } from "@app/recipies/homeRecipies";
import { css, cx } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import { PropsWithChildren, useEffect, useState } from "react";
import Image from "next/image";
import hanbyolLogoLight from "@asset/hbjr_logo_light.png";
import hanbyolLogoDark from "@asset/hbjr_logo_dark.png";
import { styled } from "@styled-system/jsx";
import { defineKeyframes } from "@pandacss/dev";
import Link from "next/link";

interface HeaderProps extends PropsWithChildren {}

interface Menu {
  title: string;
  path: string;
}
const MENU_ARR: Menu[] = [
  { title: "Home", path: "/" },
  { title: "Company Info", path: "/company-info" },
  { title: "Products", path: "/products" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

const LG_WINDOW_WIDTH = 1024; //refer to panda.config.ts

export const keyframes = defineKeyframes({
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
});

export default function Header({ children }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > LG_WINDOW_WIDTH) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  return (
    <>
      <header
        className={cx(
          css(sectionStyle.raw({ bg: "header" })),
          css({
            position: "fixed",
            w: "100%",
            h: "fit-content",
            top: 0,
            left: 0,
            zIndex: 999,
          })
        )}
      >
        {children}{" "}
        <ResponsiveContainer>
          <div
            className={css({
              w: "100%",
              color: "white",
            })}
          >
            <Link href="/">
              <div
                className={css({
                  hideFrom: "lg",
                  width: { base: "108px" },
                  float: "left",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                })}
              >
                <Image src={hanbyolLogoDark} alt="Logo" />
              </div>
              <div
                className={css({
                  hideBelow: "lg",
                  width: { base: "176px" },
                  float: "left",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                })}
              >
                <Image src={hanbyolLogoLight} alt="Logo" />
              </div>
            </Link>
            <div
              className={cx(
                flex({ alignItems: "center" }),
                css({ float: "right" })
              )}
            >
              <div className={css({ hideBelow: "lg" })}>
                {MENU_ARR.map((menu) => (
                  <styled.a
                    key={menu.path}
                    href={menu.path}
                    pt="17px"
                    pb="17px"
                    marginX="20px"
                    display="inline-block"
                  >
                    {menu.title}
                  </styled.a>
                ))}
              </div>
              <button
                className={css({
                  hideFrom: "lg",
                  bgColor: "transparent",

                  p: "5px",
                  borderRadius: "5px",
                  height: "38px",
                  display: "flex",
                  flexDir: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  cursor: "pointer",
                  _hover: {
                    bgColor: "#d6d6d6",
                    border: "1px solid #a3a3a3",
                  },
                })}
                onClick={() => {
                  setIsSidebarOpen((prev) => !prev);
                }}
              >
                <div
                  className={css({
                    width: "24px",
                    height: "2px",
                    bgColor: "#a3a3a3",
                    borderRadius: "5px",
                    transition: "all 0.5s",
                    transform: "translate(0,-6px)",
                  })}
                ></div>
                <div
                  className={css({
                    width: "24px",
                    height: "2px",
                    bgColor: "#a3a3a3",
                    borderRadius: "5px",
                    transition: "all 0.5s",
                  })}
                ></div>
                <div
                  className={css({
                    width: "24px",
                    height: "2px",
                    bgColor: "#a3a3a3",
                    borderRadius: "5px",
                    transition: "all 0.5s",
                    transform: "translate(0,6px)",
                  })}
                ></div>
              </button>
            </div>
          </div>
        </ResponsiveContainer>
      </header>
      <aside
        className={cx(
          isSidebarOpen ? "nav-opened" : "nav-closed",
          css({
            position: "fixed",
            zIndex: "500",
            top: 0,
            left: 0,
            pt: { base: "94px", lg: "115px" },
            display: "flex",
            flexDir: "column",
            w: "100%",
            hideFrom: "lg",
            bgColor: "white",
            "&.nav-closed": {
              transform: "translate3D(-100vw,0,0)",
              animation: "transform .8s cubic-bezier(1,.04,.16,.52)",
            },
            "&.nav-opened": {
              transform: "translate3D(0,0,0)",
              transition: "transform .8s cubic-bezier(.52,.16,.04,1)",
            },
          })
        )}
      >
        <ul
          className={cx(
            flex({ direction: "column", textAlign: "center" }),
            css({
              float: "right",
              color: "cardIconSVG",
              bgColor: "#ffffff",
              "& li": {
                borderBottom: "1px solid #acaca7",
              },
              _first: {
                borderTop: "1px solid #969692",
              },
            })
          )}
        >
          {MENU_ARR.map((menu) => (
            <li
              key={menu.path}
              className={css({
                w: "100%",
                _hover: {
                  "& span": { transform: "scale(1.1)" },
                  bgColor: "#EBEB9E",
                },
              })}
            >
              <styled.a
                key={menu.path}
                href={menu.path}
                pb="20px"
                pt="20px"
                marginX="20px"
                display="block"
              >
                <span>{menu.title}</span>
              </styled.a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
