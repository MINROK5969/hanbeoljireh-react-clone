"use client";
import PageTitleSectionWithImageBackground from "@components/PageTitleSectionWithImageBackground";
import H2 from "@components/base/Typography/H2";
import { css, cx } from "@styled-system/css";

import Image from "next/image";
import { SectionWithResponsiveContainer } from "@app/recipies/homeRecipies";
import { circle, flex } from "@styled-system/patterns";
import { PropsWithChildren, ReactNode } from "react";
import Link from "next/link";
import { text } from "stream/consumers";

export default function ProjectsPage() {
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
        title="Contacts"
        css={{ bgImage: "url(/assets/company-info/title_image.jpg)" }}
      />
      <SectionWithResponsiveContainer css={{ bgColor: "#F9F9F9", mx: "10px" }}>
        <H2
          css={{
            color: "black",
            fontSize: "36px",
            fontWeight: "300",
          }}
        >
          한별이레와 함께하는 파트너들
        </H2>
        <H2
          css={{
            color: "black",
            fontSize: "45px",
            fontWeight: "800",
          }}
        >
          Our Partners
        </H2>
        <div
          className={css({
            display: "grid",
            position: "relative",
            width: "100%",
            gridTemplateColumns: { base: "1", lg: "2" },
            textAlign: "center",
            rowGap: "20px",
            columnGap: "20px",
            mt: "50px",
          })}
        >
          <ProjectCard title="Fancom" link="https://www.fancom.com">
            가금류 농장, 돼지&nbsp;농장 및 버섯 농장의 축사 및 재배실의 공정을
            개선하도록 돕고있습니다.&nbsp;팬콤만의 스마트 기후 관리, 수유 및
            생체 인식 시스템, 센서 및 제어 컴퓨터로 생산성과 가축의 생활 여건
            개선을 확인할 수 있습니다.
          </ProjectCard>
          <ProjectCard title="Skiold" link="https://skiold.com/">
            우리는 선도적인 전문가들과의 긴밀한 협력을 통해 고객들에게 최신
            지식에 기반한 최적의 곡물 세척 및 종자 처리 솔루션을 보장합니다.
          </ProjectCard>
          <ProjectCard title="Hanbyol" link="http://www.hanbyol.kr/?lang=ko">
            2007년부터 양돈농가의 생산성 향상과 양돈산업의 발전을 위해 매진하고
            있습니다. 직원 모두 현장 출신의 전문가로 답은 현장에 있다는 철학으로
            운영되고 있습니다.
          </ProjectCard>
          <ProjectCard
            title="Envirologic"
            link="https://www.envirologic.se/en/start-en/"
          >
            돈사 환경의 관리와 운영에 있어서 가장 편리하고 효율적인 제품들과
            기술을 가지고 있는 회사입니다. Envirologic의 로봇 청소기 ‘EVO
            Cleaner’는 다양한 환경과 상황 속에서 원하시는 방향으로의 돈사 청소를
            돕습니다.
          </ProjectCard>
          <ProjectCard title="Dacs" link="https://dacs.dk/">
            가축 생산을 위한 기후 및 환기 제어 시스템의 개발, 생산 및 서비스를
            전문으로 하고있습니다. 최소한의 에너지 소비로 완벽한 실내 기후를
            조성하여 일년 중 언제라도 수익성있는 생산을 보장합니다.
          </ProjectCard>
        </div>
      </SectionWithResponsiveContainer>
    </main>
  );
}

interface ProjectCardProps extends PropsWithChildren {
  title: string;
  link: string;
}

function ProjectCard({
  title,
  children: textChildren,
  link,
}: ProjectCardProps) {
  return (
    <Link href={link}>
      <div
        className={css({
          width: "100%",
          minH: "300px",
          overflow: "hidden",
          textAlign: "left",
          bgColor: "cardBody",
          color: "white",
          rounded: "10px",
          position: "relative",
        })}
      >
        {/* overlay */}
        <div
          className={css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            bgColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 50,
            padding: "1rem",
          })}
        >
          <div
            className={css({
              height: "100%",
              padding: "1rem",
              display: "flex",
              flexDir: "column",
              justifyContent: "space-between",
            })}
          >
            <div>
              <p
                className={css({
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  mb: "0.5rem",
                })}
              >
                {title}
              </p>
              <p>{textChildren}</p>
            </div>
            <button
              type="button"
              className={css({
                padding: "4px",
                rounded: "4px",
                fontSize: "12px",
                bgColor: "green",
                color: "white",
                mt: "0.5rem",
              })}
            >
              MORE VIEW
            </button>
          </div>
        </div>
        <Image
          className={css({
            filter: "blur(3px)",
            zIndex: 1,
            width: "fill",
            height: "fill",
          })}
          src="/assets/company-info/title_image.jpg"
          width={200}
          height={100}
          alt="card-image"
        />
      </div>
    </Link>
  );
}
