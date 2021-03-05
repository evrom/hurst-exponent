import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import numeral from "numeral";

type Data = {
  y: number;
  x: number | Date;
};

type Props = {
  data: Data[];
};

const TimeSeriesChart: React.FC<Props> = (props: Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={600} height={300} data={props.data}>
        <Line type="linear" dot={false} dataKey="y" stroke="#8884d8" />
        <XAxis
          dataKey="x"
          scale="time"
          tickFormatter={(tick) => tick.getFullYear()}
        />
        <Tooltip />
        <YAxis
          dataKey="y"
          tickFormatter={(tick) => numeral(tick).format("0a")}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TimeSeriesChart;
