import PageTitleSectionWithImageBackground from "@components/PageTitleSectionWithImageBackground";
import H1 from "@components/base/Typography/H1";
import ChartInput from "@components/charts/ChartInput";
import { css } from "@styled-system/css";

export default function MapPage() {
  return (
    <main>
      <PageTitleSectionWithImageBackground
        title="MAP TEST PAGE"
        subTitle="지도 표 만드는 페이지"
        css={{ bgImage: "url(/assets/main_img.jpg)" }}
      />
      <div className={css({ py: "50" })}>
        <H1 css={{ color: "black" }}>Fancom System Customers </H1>
        <ChartInput />
        <H1 css={{ color: "black" }}>Fancom Accessories Customers </H1>
        <ChartInput />
        <H1 css={{ color: "black" }}>Skiold Customers </H1>
        <ChartInput />
      </div>
    </main>
  );
}
