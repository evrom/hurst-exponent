import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
  VictoryTheme,
} from "victory";
import nile from "./datasets/nile.json";

const data = {
  datasets: [
    {
      label: "# of Votes",
      data: nile.map(({ x, y }) => {
        return { y: y, x: new Date(x) };
      }),
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const TimeSeriesChart: React.FC = () => {
  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.grayscale}
        containerComponent={<VictoryZoomContainer zoomDimension="x" />}
      >
        <VictoryLine
          style={{
            data: { stroke: "#c43a31", strokeWidth: 1 },
          }}
          data={nile.map(({ x, y }) => {
            return { x: new Date(x), y: y };
          })}
        />
      </VictoryChart>
    </div>
  );
};

export default TimeSeriesChart;
