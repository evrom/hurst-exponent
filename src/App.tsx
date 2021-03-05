import React from "react";
import "./App.css";
import TimeSeriesChart from "./TimeSeriesChart";
import HurstEstimations from "./HurstEstimations";
import nile from "./datasets/nile.json";

const App: React.FC = () => {
  return (
    <div className="App">
      <TimeSeriesChart
        data={nile.map(({ x, y }) => {
          return { x: new Date(x), y: y };
        })}
      />
      <h2>Hurst Estimations</h2>
      <HurstEstimations
        data={new Float64Array(nile.map(({ y }) => y))}
      ></HurstEstimations>
    </div>
  );
};

export default App;
