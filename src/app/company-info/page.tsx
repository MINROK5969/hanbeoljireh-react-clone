"use client";
import PageTitleSectionWithImageBackground from "@components/PageTitleSectionWithImageBackground";
import H2 from "@components/base/Typography/H2";
import { css, cx } from "@styled-system/css";

import H5 from "@components/base/Typography/H5";
import farmerPointOfViewImgSrc from "@asset/company-info/farmer-point-of-view.jpeg";
import Image from "next/image";
import Disease from "@asset/company-info/Disease.svg";
import Genetics from "@asset/company-info/Genetics.svg";
import FarmManagement from "@asset/company-info/FarmManagement.svg";
import FarmDesign from "@asset/company-info/FarmDesign.svg";
import Ventilation from "@asset/company-info/Ventilation.svg";

import { SectionWithResponsiveContainer } from "@app/recipies/homeRecipies";
import { circle, flex } from "@styled-system/patterns";
import { ReactNode } from "react";
import Link from "next/link";

export default function CompanyInfoPage() {
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
        title="COMPANY INFO"
        css={{ bgImage: "url(/assets/company-info/title_image.jpg)" }}
      />
      <SectionWithResponsiveContainer>
        <div
          className={css({
            display: "flex",
            gap: "1%",
            position: "relative",
            flexDir: { base: "row", lgDown: "column" },
            justifyContent: "space-between",
          })}
        >
          <div
            className={cx(
              css({
                width: { base: "50%", lgDown: "100%" },
                height: { base: "auto" },
                rounded: "10px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                m: "auto",
              })
            )}
          >
            <Image src={farmerPointOfViewImgSrc} alt="Farmer's Point of View" />
          </div>

          <div
            className={css({
              maxHeight: "100%",
              width: { base: "50%", lgDown: "100%" },
              p: "10px",
              color: "black",
            })}
          >
            <div
              className={css({
                bgColor: "#ffffff",
                rounded: "1rem",
                p: "1rem",
                px: { lgDown: "10px", lg: "50px" },
              })}
            >
              <H2
                css={{
                  color: "black",
                  fontSize: "1.875rem",
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                “<br className={css({ hideFrom: "lg" })} />
                Farmer’s <br className={css({ hideFrom: "lg" })} />
                Point of View
                <br className={css({ hideFrom: "lg" })} />”
              </H2>
              <H5 css={{ color: "cardIconSVG" }}>
                농장의 눈높이에서 농장을 바라봅니다.
              </H5>
              <p className={css({ pt: "20px", fontWeight: "600" })}>
                “Harmony of Expertise and Innovation: HanbyolJireh, Your Smart
                Farming Solutions Partner”
              </p>
              <p className={css({ pt: "10px" })}>
                전문적이고 혁신적인 한별이레가 여러분의 농장에 스마트팜 솔루션을
                제공합니다.
              </p>
              <p className={css({ pt: "20px", fontWeight: "600" })}>
                Welcome to HanbyolJireh, where expertise meets innovation in the
                realm of Smart Farming. With a keen focus on farmers’ needs, we
                specialize in designing and installing cutting-edge products for
                Smart Farms. Our commitment extends to delivering only certified
                products and systems, ensuring the success and efficiency of
                your farming endeavors.
              </p>
              <p className={css({ py: "10px" })}>
                한별이레에 오신 것을 환영합니다. 한별이레는 농부의 요구와 필요에
                집중하며 최첨단 제품과 시스템을 설계, 설치하고 있습니다. 우리는
                인증된 제품과 시스템만을 제공하여 여러분의 농장이 성공적이고
                효율적으로 운영되도록 지원하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </SectionWithResponsiveContainer>
      <SectionWithResponsiveContainer css={{ bgColor: "#F9F9F9" }}>
        <H2
          css={{
            color: "black",
            fontSize: "36px",
            fontWeight: "300",
          }}
        >
          Your Farm on Your Palm
        </H2>
        <H2
          css={{
            color: "black",
            fontSize: "45px",
            fontWeight: "800",
          }}
        >
          HanbyolJireh
        </H2>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1", lg: "2" },
            textAlign: "center",
            columnGap: "20px",
            mt: "50px",
          })}
        >
          <div>
            <p
              className={css({
                fontSize: "20px",
                pb: "27px",
                fontWeight: "800",
              })}
            >
              1. Smart Farm Design and Installation
            </p>
            <p className={css({ mb: "50px" })}>
              Elevate your farming environment with our skilled team, crafting
              and implementing advanced Smart Farms customized to meet your
              specific requirement.
            </p>
          </div>
          <div>
            <p
              className={css({
                fontSize: "20px",
                pb: "27px",
                fontWeight: "800",
              })}
            >
              1. 스마트팜 토탈 디자인
            </p>
            <p className={css({ mb: "50px" })}>
              한별이레 전문가들과 여러분의 농장을 업그레이드하세요. 한별이레는
              고객의 요구에 부응하는 고객 맞춤형 스마트팜을 구축해드립니다.
            </p>
          </div>
        </div>

        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1", lg: "2" },
            textAlign: "center",
            columnGap: "20px",
          })}
        >
          <div>
            <p
              className={css({
                fontSize: "20px",
                pb: "27px",
                fontWeight: "800",
              })}
            >
              2. Proud Distributor of Fancom
            </p>
            <p className={css({ mb: "50px" })}>
              As an authorized distributor of Fancom, we bring you cutting-edge
              technology to enhance your farming experience.
            </p>
          </div>
          <div>
            <p
              className={css({
                fontSize: "20px",
                pb: "27px",
                fontWeight: "800",
              })}
            >
              2. Fancom의 한국 대리점
            </p>
            <p className={css({ mb: "50px" })}>
              한별이레는 세계 최고의 축사기업인 네덜란드 Fancom(팬콤)의 대한민국
              공식파트너로 여러분들의 농장 내 스마트팜 시설 전반을 업그레이드
              해드립니다.
            </p>
          </div>
        </div>

        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1", lg: "2" },
            textAlign: "center",
            columnGap: "20px",
          })}
        >
          <div>
            <p
              className={css({
                fontSize: "20px",
                pb: "27px",
                fontWeight: "800",
              })}
            >
              3.Customer Happiness and Efficiency
            </p>
            <p className={css({ mb: "50px" })}>
              Our primary goal is your satisfaction. Experience joy in farming
              and work smarter with our up-to-date systems, designed to make
              your farm life happier and more efficient.
            </p>
          </div>
          <div>
            <p
              className={css({
                fontSize: "20px",
                pb: "27px",
                fontWeight: "800",
              })}
            >
              3. 고객 만족과 농장의 효율성
            </p>
            <p className={css({ mb: "50px" })}>
              한별이레의 최우선 1의 목표는 고객만족입니다. 농장의 높은 생산효율
              달성을 위해 세심하고 직관적으로 설계된 최첨단 시스템으로 더
              행복하고 효율적인 여러분의 농장 생활을 지원합니다.
            </p>
          </div>
        </div>
      </SectionWithResponsiveContainer>
      <SectionWithResponsiveContainer css={{ bgColor: "#F9F9F9" }}>
        <H2
          css={{
            color: "black",
            fontSize: "36px",
            fontWeight: "300",
          }}
        >
          Explore the success stories of
        </H2>
        <H2
          css={{
            color: "black",
            fontSize: "45px",
            fontWeight: "800",
            mb: "50px",
          }}
        >
          Our valued customers
        </H2>
        <p className={css({ mb: "50px" })}>
          Explore the success stories of our valued customers – a testament to
          the trust they’ve placed in HanbyolJireh. Join the growing community
          of satisfied farmers who have elevated their agricultural journey with
          our innovative Smart Farming solutions.
        </p>
        <p className={css({ mb: "50px" })}>
          한별이레를 이미 경험한 고객분들의 스토리를 확인해보세요. 한별이레의
          스마트팜 솔루션을 통해 우수한 성적을 보이는 고객 공동체에 참여해
          보세요.
        </p>
        <div
          className={flex({
            flexDir: "column",
            alignItems: "center",
            mb: "50px",
          })}
        >
          <button
            type="button"
            className={css({
              padding: "1rem",
              rounded: "10px",
              border: "1px solid red",
              borderColor: "border",
              color: { base: "black", _hover: "black" },
              bgColor: { base: "white", _hover: "hoverPrimary" },
              animation: "pulse 1s infinite",
              cursor: "pointer",
            })}
          >
            <Link href={"/projects"}>
              스마트팜 솔루션을 경험 중인 고객 리스트 확인하러 가기
            </Link>
          </button>
        </div>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1", lg: "5" },
          })}
        >
          <IconWithText icon={<Disease />} text="Disease" />
          <IconWithText icon={<Genetics />} text="Importation of genetics" />
          <IconWithText icon={<FarmManagement />} text="Farm management" />
          <IconWithText
            icon={<FarmDesign />}
            text="Farm design and
re-modeling"
          />
          <IconWithText icon={<Ventilation />} text="Ventilation" />
        </div>
      </SectionWithResponsiveContainer>
    </main>
  );
}

function IconWithText({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div
      className={css({
        display: "inline-block",
        flexDir: "column",
        m: "auto",
        mb: "20px",
        justifyContent: "center",
        textAlign: "center",
      })}
    >
      <div
        className={circle({
          size: "150px",
          bgColor: { base: "#e6e6e6", _hover: "hoverPrimary" },
          m: "auto",
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            width: "64px",
            height: "64px",
          })}
        >
          {icon}
        </div>
      </div>
      <span className={css({ fontWeight: 600 })}>{text}</span>
    </div>
  );
}
