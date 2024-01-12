import H1 from "@components/base/Typography/H1";
import { convertCSVtoJson } from "@readCsv";
import { ChangeEvent, useEffect, useState } from "react";

import BarPlot from "./BarPlot";
import { css } from "@styled-system/css";

export default function ChartInput() {
  const [file, setFile] = useState<File>();
  const [data, setData] = useState<{ [key: string]: string }[]>();

  useEffect(() => {}, []);

  return (
    <>
      <H1 css={{ color: "gray.100", bg: "blue.400" }}>This is H1</H1>
      <h2
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          color: { base: "orange.200", _hover: "blue.400" },
        })}
      >
        Hello 🐼!
      </h2>
      <div>children</div>
      <p>ENTER CSV FILE</p>
      <input
        type="file"
        accept=".csv"
        onChange={async (e: ChangeEvent<HTMLInputElement>) => {
          if (!e.target.files) return;
          setFile(e.target.files[0]);
          const readFile = (file: File) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = (e) => resolve(reader.result);
              reader.readAsText(file);
            });

          const csvText = await readFile(e.target.files[0]);
          const jsonArr = convertCSVtoJson(csvText as string);
          //집계하기 x-연도, y-농가의 개수
          const yearMap = new Map();
          jsonArr.forEach((jsonObj) => {
            const year = "년도";
            const VALUE = jsonObj[year];
            if (yearMap.has(VALUE)) {
              const count = yearMap.get(VALUE);
              yearMap.set(VALUE, count + 1);
            } else {
              yearMap.set(VALUE, 1);
            }
          });
          const finalData = Array.from(yearMap.entries())
            .map(([key, value]) => ({
              년도: key,
              개수: value,
            }))
            .sort((a, b) => a["년도"] - b["년도"]);
          setData(finalData);
        }}
      />
      <BarPlot data={data} />
    </>
  );
}
