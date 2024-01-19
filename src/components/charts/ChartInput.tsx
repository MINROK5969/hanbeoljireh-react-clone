"use client";

import { ChangeEvent, useEffect, useState } from "react";
import ComposedChartDisplay from "./ComposedChartDisplay";
import H2 from "@components/base/Typography/H2";
import { flex } from "@styled-system/patterns";
import { css } from "@styled-system/css";
import { convertCSVtoJson } from "@utils/readCsv";

interface DataRow {
  년도: number;
  농장명: string;
  위치: string;
  품목: string;
}

export default function ChartInput() {
  const [file, setFile] = useState<File>();
  const [data, setData] = useState<[string, DataRow[]][]>();

  useEffect(() => {}, []);

  return (
    <div className={css({ maxW: "1400", mx: "auto" })}>
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
          const groupByLocation = new Map();
          jsonArr.forEach((jsonObj) => {
            const LOCATION_KEY = "위치";
            const VALUE = jsonObj[LOCATION_KEY];
            if (groupByLocation.has(VALUE)) {
              const currList = groupByLocation.get(VALUE);
              groupByLocation.set(VALUE, [...currList, jsonObj]);
            } else {
              groupByLocation.set(VALUE, [jsonObj]);
            }
          });
          const finalData = Array.from(groupByLocation.entries()) as [
            string,
            DataRow[]
          ][];

          setData(finalData.sort((a, b) => a[0].localeCompare(b[0])));
        }}
      />
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "3",
        })}
      >
        {data?.map((s) => {
          const yearMap = new Map();
          s[1].forEach((obj) => {
            yearMap.has(obj.년도)
              ? yearMap.set(obj.년도, yearMap.get(obj.년도) + 1)
              : yearMap.set(obj.년도, 1);
          });
          let sum = 0;
          const parsedData = Array.from(yearMap.entries()).map(
            ([year, count]) => {
              sum += count;
              return {
                년도: year,
                당해실적: count,
                누적실적: sum,
              };
            }
          );
          return (
            <div
              key={s[0]}
              className={flex({ flexDir: "column", align: "center" })}
            >
              <H2 css={{ color: "black", marginLeft: "15%" }}>{s[0]}</H2>
              <ComposedChartDisplay data={parsedData} key={s[0]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
