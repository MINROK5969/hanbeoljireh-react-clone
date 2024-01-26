"use client";
import PageTitleSectionWithImageBackground from "@components/PageTitleSectionWithImageBackground";
import H2 from "@components/base/Typography/H2";
import { css, cva, cx } from "@styled-system/css";
import Image from "next/image";
import PlusIcon from "@asset/plus_circle_fill.svg";
import HomeSVGIcon from "@asset/HomeIcon.svg";
import ProductsIcon from "@asset/ProductsIcon.svg";
import ProjectsIcon from "@asset/ProjectsIcon.svg";
import ContactIcon from "@asset/ContactIcon.svg";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { styled } from "@styled-system/jsx";
import H5 from "@components/base/Typography/H5";
import Link from "next/link";
import Carousel from "@components/compound/Carousel";
import { sectionStyle } from "./recipies/homeRecipies";

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

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

const LOGO_PATHS = [
  "/assets/partners-logo/main_clientLogo_01_farmtech.png",
  "/assets/partners-logo/main_clientLogo_02_fancom.png",
  "/assets/partners-logo/main_clientLogo_03_dacs.png",
  "/assets/partners-logo/main_clientLogo_04_ms_schippers.png",
  "/assets/partners-logo/main_clientLogo_05_envirologic.png",
  "/assets/partners-logo/main_clientLogo_06_osi.png",
  "/assets/partners-logo/main_clientLogo_07_skiold.png",
];

export const PlusIconContainer = styled("div", plusIconContainer);

export default function Home() {
  return (
    <main
      className={css({
        bgColor: "white",
        pt: {
          lgDown: "90px",
        },
      })}
    >
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
      <Section bg="white">
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
          <HomeParagraph role="sectionTitle">
            더 나은 기술과 제품으로 농장별로 알맞게 컨설팅과 설치를 제공합니다.
          </HomeParagraph>
          <H5 css={{ color: "#bbbbbb" }}>Keep it short and simple</H5>
        </div>
      </Section>
      <Section bg="white" className={css({ pt: { mdDown: "0px" } })}>
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
          <div className={css(flexColWithMobileAndRowWithTablet)}>
            <Link href={"/company-info"}>
              <div
                className={cx(css(cardItem), css({ animationDelay: "100ms" }))}
              >
                <div className={css(iconWithAnimation)}>
                  <HomeSVGIcon />
                </div>
                <H5Icon type="cardTitle">Company Info</H5Icon>
                <HomeParagraph role="cardBody">
                  양돈농가의 생산성 향상과
                  <br className={css({ hideBelow: "sm" })} />
                  <span> </span>
                  양돈산업의 발전을 위해
                  <br className={css({ hideBelow: "sm" })} />
                  <span> </span>
                  매진하고 있습니다.
                </HomeParagraph>
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
                <HomeParagraph role="cardBody">
                  저희 한별이레와
                  <br className={css({ hideBelow: "sm" })} />
                  <span> </span>
                  함께해오고 있는 회사의
                  <br />
                  제품들을 소개합니다.
                  <br />
                </HomeParagraph>
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
                <HomeParagraph role="cardBody">
                  각 클라이언트의
                  <br className={css({ hideBelow: "sm" })} />
                  프로젝트 성과 설명과
                  <br />
                  360도 비디오를 보여줍니다.
                  <br />
                </HomeParagraph>
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
                <HomeParagraph role="cardBody">
                  찾아오시는 길, 문의/주문/견적에
                  <br />
                  대하여 자세히 알 수 있습니다.
                  <br />
                </HomeParagraph>
              </div>
            </Link>
          </div>
        </div>
      </Section>
      <section>
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
            backgroundPosition: "left 20%",
            backgroundRepeat: "no-repeat",
            backgroundSize: { base: "cover" },
            zIndex: 1,
            boxSizing: "border-box",
            bgImage: "url(/assets/landscape.png)",
          })}
        >
          <div
            className={css({
              width: "100%",
              pt: "calc(100vw * 0.03)",
              px: { base: "90px", mobile: "30px" },
              pb: "335px",
              display: "flex",
              justifyContent: "center",
            })}
          >
            <div className={css({ width: { base: "48%", mdDown: "100%" } })}>
              <Text size="headline">
                We provide consulting and installation on a farm-by-farm
                <br />
              </Text>
              <div className={css({ mb: "12px" })}></div>
              <Text size="headline">
                basis with better technology and products.
              </Text>
              <div className={css({ mb: "24px" })}></div>
              <p className={css({ pt: "15px", pb: "25px" })}>
                저희 한별이레는 책임시공을 전문으로,
                <br />
                축사 전체적인 관리와 셋팅을 우선시 합니다.
              </p>
              <div
                className={css({ fontSize: "1rem", pt: "15px", pb: "25px" })}
              >
                <p
                  className={css({
                    color: "cardIconSVG",
                    fontSize: "1rem",
                    mb: "7px",
                  })}
                >
                  WHAT WE CAN HELP YOU ACHIEVE
                </p>
                <p className={css({ color: "rgba(0,0,0,0.45)" })}>
                  <span>
                    works with swine farmers to improve swine farm’s profits by
                    improving health status, animal welfare and productivity.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section bg="grayGradient">
        <div
          className={css({
            maxWidth: {
              smDown: "320px",
              sm: "420px",
              md: "600px",
              lg: "1028px",
              xl: "1245px",
            },
            mx: "auto",
          })}
        >
          <H2 css={{ color: "#96969E" }}>Our Partners</H2>
          <div className={css({ height: "30px" })}></div>
          <Carousel images={LOGO_PATHS} interval={300} />
          <div className={css({ height: "50px" })}></div>
        </div>
      </Section>
    </main>
  );
}

const Text = styled(
  "span",
  cva({
    base: {
      fontWeight: 300,
    },
    variants: {
      size: {
        headline: {
          color: "cardIconSVG",
          fontSize: {
            mobile: "20px",
            sm: "31px",
            md: "33px",
            lg: "36px",
            xl: "42px",
          },
          lineHeight: {
            mobile: "7px",
            sm: "36px",
            md: "38px",
            lg: "40px",
            xl: "48px",
          },
          mb: "7px",
        },
      },
    },
  })
);

export const H5Icon = styled(
  "h5",
  cva({
    base: {
      color: "#fff",
      fontWeight: "light",
      fontSize: { base: "1.5rem", mobile: "1rem" },
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
  maxW: "1245px",
  gridTemplateColumns: { base: "1", mobile: "1", sm: "2", lg: "4" },
  gap: "auto",
};

export const cardItem = {
  textAlign: "center",
  p: "0 20px 20px",
  flex: 1,
  animation: "fadein 2000ms",
};

export const Section = styled("section", sectionStyle);

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

const paragraphStyle = cva({
  base: {
    color: "#424242",
    fontWeight: "medium",
    fontSize: {
      base: "1.5rem",
      mobile: "1.125rem",
      sm: "1.25rem",
      md: "2.25rem",
    },
    textAlign: "center",
    lineHeight: { sm: "50px", md: "50px" },
  },
  variants: {
    role: {
      sectionTitle: {
        color: "black",
        pb: "27px",
      },
      cardBody: {
        color: "cardBody",
        fontSize: {
          mobile: "0.8rem",
          sm: "1rem",
          md: "1rem",
          lg: "1rem",
        },
        lineHeight: 1.5,
      },
    },
  },
});

const HomeParagraph = styled("p", paragraphStyle);
