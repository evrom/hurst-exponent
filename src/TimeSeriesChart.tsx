import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
  VictoryTheme,
} from "victory";

type Data = {
  y: number;
  x: number | Date;
};

type Props = {
  data: Data[];
};

const TimeSeriesChart: React.FC<Props> = (props: Props) => {
  return (
    <VictoryChart
      theme={VictoryTheme.grayscale}
      containerComponent={<VictoryZoomContainer zoomDimension="x" />}
    >
      <VictoryLine
        style={{
          data: { stroke: "#c43a31", strokeWidth: 1 },
        }}
        data={props.data}
      />
    </VictoryChart>
  );
};

export default TimeSeriesChart;
