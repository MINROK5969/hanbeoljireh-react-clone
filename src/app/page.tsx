"use client";
import PageTitleSectionWithImageBackground from "@components/PageTitleSectionWithImageBackground";
import H2 from "@components/base/Typography/H2";
import { RecipeVariantProps, css, cva, cx } from "@styled-system/css";
import Image from "next/image";
import PlusIcon from "@asset/plus_circle_fill.svg";
import HomeSVGIcon from "@asset/HomeIcon.svg";
import ProductsIcon from "@asset/ProductsIcon.svg";
import ProjectsIcon from "@asset/ProjectsIcon.svg";
import ContactIcon from "@asset/ContactIcon.svg";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { styled } from "@styled-system/jsx";
import Paragraph from "@components/base/Typography/Paragraph";
import H5 from "@components/base/Typography/H5";
import Link from "next/link";

const plusIconContainer = cva({
  base: {
    position: "absolute",
    top: 0,
    left: 0,
    w: "16px",
    h: "16px",
    opacity: 1,
    marginLeft: "-18px",
    marginTop: "-14px",
    cursor: "pointer",
  },
  variants: {
    target: {
      AirScrubber: {
        top: "3.451%",
        left: "50%",
      },
      VentilationSystem: {
        top: "30%",
        left: "59.144%",
      },
      FeedSystem: {
        top: "62.89%",
        left: "48.2%",
      },
      FarrowingPlaceGestationUnit: {
        top: "78%",
        left: "72.5%",
      },
      FarmDesign: {
        top: "92%",
        left: "88%",
      },
      HanbyolFarmTech: {
        top: "87%",
        left: "37%",
      },
      Miscellaneous: {
        top: "89%",
        left: "10%",
      },
    },
  },
  defaultVariants: {
    target: "AirScrubber",
  },
});

export const PlusIconContainer = styled("div", plusIconContainer);

export default function Home() {
  return (
    <main>
      <PageTitleSectionWithImageBackground
        title="Farmer’s Point of View"
        subTitle="Represent pig on pig side."
        css={{ bgImage: "url(/assets/main_img.jpg)" }}
      />
      <Section>
        <div
          className={css({
            maxWidth: {
              smDown: "320",
              sm: "420",
              md: "600",
              lg: "1028",
              xl: "1245",
            },
            mx: "auto",
          })}
        >
          <H2 css={{ color: "black" }}>Design a farm in your palm</H2>
          <HorizontalDivider size="md" />
          <div className={css({ position: "relative" })}>
            <div
              className={css({
                position: "absolute",
                top: 0,
                left: 0,
                w: "100%",
                h: "100%",
              })}
            >
              <PlusIconContainer target="AirScrubber">
                <Tooltip
                  placement="top"
                  title="Mold therapy professionals, innovation companies and other workplaces are used to improve the ambient air quality."
                >
                  <IconButton>
                    <PlusIcon />
                  </IconButton>
                </Tooltip>
              </PlusIconContainer>
              <PlusIconContainer target="VentilationSystem">
                <Tooltip
                  placement="top"
                  title="To maintain or improve the air environment, the outside air is introduced to discharge the inside air."
                >
                  <IconButton>
                    <PlusIcon />
                  </IconButton>
                </Tooltip>
              </PlusIconContainer>
              <PlusIconContainer target="FeedSystem">
                <Tooltip
                  placement="top"
                  title="Feeding system is equipped with a manual and fully automatic system."
                >
                  <IconButton>
                    <PlusIcon />
                  </IconButton>
                </Tooltip>
              </PlusIconContainer>
              <PlusIconContainer target="FarrowingPlaceGestationUnit">
                <Tooltip
                  placement="top"
                  title="Farm Farrowing Place, Gestation Unit"
                >
                  <IconButton>
                    <PlusIcon />
                  </IconButton>
                </Tooltip>
              </PlusIconContainer>
              <PlusIconContainer target="FarmDesign">
                <Tooltip placement="top" title="Hanbyol Company Profile Page">
                  <IconButton>
                    <PlusIcon />
                  </IconButton>
                </Tooltip>
              </PlusIconContainer>
              <PlusIconContainer target="HanbyolFarmTech">
                <Tooltip placement="top" title="Hanbyol Farm Tech">
                  <IconButton>
                    <PlusIcon />
                  </IconButton>
                </Tooltip>
              </PlusIconContainer>
              <PlusIconContainer target="Miscellaneous">
                <Tooltip
                  placement="top"
                  title="Agricultural S / W increases the efficiency of agricultural work and increases the production of agricultural and livestock products."
                >
                  <IconButton>
                    <PlusIcon />
                  </IconButton>
                </Tooltip>
              </PlusIconContainer>
            </div>
            <Image
              width={1028}
              height={671}
              layout="responsive"
              src={"/assets/main_illustration.jpg"}
              alt="main_illustration_image"
            />
          </div>
        </div>
      </Section>
      <Section>
        <Paragraph css={{ color: "black", pb: "27px" }}>
          더 나은 기술과 제품으로 농장별로 알맞게 컨설팅과 설치를 제공합니다.
        </Paragraph>
        <H5 css={{ color: "#bbbbbb" }}>Keep it short and simple</H5>
      </Section>
      <Section className={css({ pt: { mdDown: "0px" } })}>
        <div className={css(flexColWithMobileAndRowWithTablet)}>
          <Link href={"/company-info"}>
            <div
              className={cx(css(cardItem), css({ animationDelay: "100ms" }))}
            >
              <div className={css(iconWithAnimation)}>
                <HomeSVGIcon />
              </div>
              <H5Icon type="cardTitle">Company Info</H5Icon>
              <p className={css({ color: "cardBody" })}>
                양돈농가의 생산성 향상과
              </p>
              <p>양돈산업의 발전을 위해</p>
              <p>매진하고 있습니다.</p>
            </div>
          </Link>
          <Link href={"/projects"}>
            <div
              className={cx(css(cardItem), css({ animationDelay: "200ms" }))}
            >
              <span className={css(iconWithAnimation)}>
                <ProductsIcon />
              </span>
              <H5Icon type="cardTitle">Products</H5Icon>
              <p>양돈농가의 생산성 향상과</p>
              <p>양돈산업의 발전을 위해</p>
              <p>매진하고 있습니다.</p>
            </div>
          </Link>
          <Link href={"/projects"}>
            <div
              className={cx(css(cardItem), css({ animationDelay: "300ms" }))}
            >
              <span className={css(iconWithAnimation)}>
                <ProjectsIcon />
              </span>
              <H5Icon type="cardTitle">Projects</H5Icon>
              <p>양돈농가의 생산성 향상과</p>
              <p>양돈산업의 발전을 위해</p>
              <p>매진하고 있습니다.</p>
            </div>
          </Link>
          <Link href={"/contact"}>
            <div
              className={cx(css(cardItem), css({ animationDelay: "400ms" }))}
            >
              <span className={css(iconWithAnimation)}>
                <ContactIcon />
              </span>
              <H5Icon type="cardTitle">Contact</H5Icon>
              <p>양돈농가의 생산성 향상과</p>
              <p>양돈산업의 발전을 위해</p>
              <p>매진하고 있습니다.</p>
            </div>
          </Link>
        </div>
      </Section>
    </main>
  );
}

export const H5Icon = styled(
  "h5",
  cva({
    base: {
      color: "#fff",
      fontWeight: "light",
      fontSize: { base: "1.5rem", mobile: "1.25rem" },
      textAlign: "center",
    },
    variants: {
      type: {
        cardTitle: {
          color: "black",
          fontWeight: "bold",
          lineHeight: "2",
        },
      },
    },
  })
);

export const iconWithAnimation = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: { base: "1.5rem" },
  "& path": {
    stroke: "cardIconSVG",
    animation: "draw 2000ms linear",
  },
};

export const flexColWithMobileAndRowWithTablet = {
  display: "grid",
  gridTemplateColumns: { base: "1", mobile: "1", sm: "2", lg: "4" },
  gap: "auto",
};

export const cardItem = {
  textAlign: "center",
  p: "0 20px 20px",
  flex: 1,
  animation: "fadein 2000ms",
};

export const Section = styled(
  "section",
  cva({
    base: {
      bgColor: "sectionDefaultBg",
      pt: "100px",
      px: { base: "90px", smDown: "40px" },
      pb: "calc(100vw * 0.05)",
    },
  })
);

export const HorizontalDivider = styled(
  "div",
  cva({
    base: {
      w: "full",
      bg: "transparent",
    },
    variants: {
      size: {
        md: { height: { base: "50px", smDown: "30px" } },
        lg: { height: { base: "100px", smDown: "50px" } },
      },
    },
    defaultVariants: { size: "md" },
  })
);
