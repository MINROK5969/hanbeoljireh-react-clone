"use client";
import ImageOverLaySection from "@/components/ImageOverLaySection";
import BarPlot from "@/components/charts/BarPlot";
import { convertCSVtoJson } from "@/readCsv";
import { ChangeEvent, useEffect, useState } from "react";
import "../index.css";
import { css } from "../../styled-system/css";

export default function Home() {
  const [file, setFile] = useState<File>();
  const [data, setData] = useState<{ [key: string]: string }[]>();

  useEffect(() => {}, []);

  return (
    <main>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>
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
      <ImageOverLaySection src="https://via.placeholder.com/100x100" />
    </main>
  );
}
