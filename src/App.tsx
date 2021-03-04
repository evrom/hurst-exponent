import React from "react";
import TimeSeriesChart from "./TimeSeriesChart";
import nile from "./datasets/nile.json";

const App: React.FC = () => {
  return (
    <div className="App">
      <TimeSeriesChart
        data={nile.map(({ x, y }) => {
          return { x: new Date(x), y: y };
        })}
      />
    </div>
  );
};

export default App;
