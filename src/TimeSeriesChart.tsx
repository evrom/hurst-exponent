import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
  VictoryTheme,
  VictoryAxis,
} from "victory";
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
    <VictoryChart
    // theme={VictoryTheme.grayscale}
    // containerComponent={<VictoryZoomContainer zoomDimension="x" />}
    >
      <VictoryAxis
        dependentAxis
        tickFormat={(tick) => numeral(tick).format("0a")}
      />
      <VictoryAxis />

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
