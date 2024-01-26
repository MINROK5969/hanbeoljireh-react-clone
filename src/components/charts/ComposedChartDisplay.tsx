import { PropsWithChildren, useRef } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ComposedChart,
  Line,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface ComposedChart extends PropsWithChildren {
  data: any;
}

function CustomBarLabel({
  x = 0,
  y = 0,
  value,
}: {
  x?: number;
  y?: number;
  value?: string;
}) {
  // Adjust the y-coordinate to position the label in the middle
  const middleY = y + 100; // You may need to adjust this value based on your design

  return (
    <text x={200} y={middleY} fill="#888" textAnchor="middle">
      {value}
    </text>
  );
}

export default function ComposedChartDisplay({ data }: ComposedChart) {
  const chartRef = useRef(null);
  if (!data) return;
  return (
    <>
      <ResponsiveContainer width="100%" height={500} ref={chartRef}>
        <ComposedChart
          barGap={1}
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="년도" label={<CustomBarLabel />} />
          <YAxis
            type="number"
            domain={["dataMin - 1", "dataMax + 1"]}
            interval={0}
            allowDecimals={false}
          />
          <Tooltip />
          <Legend content={customLegend} />
          <Bar dataKey="당해실적" barSize={20} fill="#55b948" />
          <Bar dataKey="누적실적" barSize={20} fill="red" />
          <Line type="linear" dataKey="누적실적" stroke="#413ea0" dot={false}>
            <LabelList
              dataKey="누적실적"
              position="top"
              content={<CustomizedLabel />}
            />
          </Line>
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
}

interface CustomizedLabelProps {
  x?: number;
  y?: number;
  stroke?: string;
  value?: string;
}

function CustomizedLabel({
  x = 0,
  y = 0,
  stroke = "black",
  value,
}: CustomizedLabelProps) {
  return (
    <text
      x={x}
      y={y}
      dy={-14}
      dx={8}
      fill={stroke}
      fontSize={10}
      textAnchor="middle"
    >
      {value}
    </text>
  );
}

function customLegend({ payload }: any) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        marginLeft: "15%",
      }}
    >
      {payload.slice(0, 2).map((entry, index) => (
        <div
          key={`legend-${index}`}
          style={{
            color: entry.color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <div
            style={{
              backgroundColor: entry.color,
              width: "10px",
              height: "10px",
            }}
          />
          {entry.value}
        </div>
      ))}
    </div>
  );
}
