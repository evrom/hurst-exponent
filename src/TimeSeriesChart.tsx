import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

type Data = {
  y: number;
  x: number | Date;
};

type Props = {
  data: Data[];
};

const TimeSeriesChart: React.FC<Props> = (props: Props) => {
  return (
    <LineChart width={600} height={300} data={props.data}>
      <Line type="linear" dot={false} dataKey="y" stroke="#8884d8" />
      <XAxis
        dataKey="x"
        scale="time"
        tickFormatter={(unixTime) => unixTime.getFullYear()}
      />
      <Tooltip />
      <YAxis dataKey="y" />
    </LineChart>
  );
};

export default TimeSeriesChart;
