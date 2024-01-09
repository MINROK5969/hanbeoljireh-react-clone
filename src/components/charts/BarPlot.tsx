import { PropsWithChildren } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

interface BarPlot extends PropsWithChildren {
  data: any;
}

export default function BarPlot({ data }: BarPlot) {
  if (!data) return;
  return (
    <BarChart width={300} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <Legend verticalAlign="top" height={36} />
      <XAxis dataKey="년도" fontSize={10} interval={0} />
      <YAxis />
      {/* <Tooltip /> */}
      <Bar dataKey="개수" fill="#55b948" label={{ fill: "red" }} barSize={10} />
    </BarChart>
  );
}
