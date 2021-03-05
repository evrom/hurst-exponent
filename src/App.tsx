import React, { useState } from "react";
import "./App.css";
import TimeSeriesChart from "./TimeSeriesChart";
import HurstEstimations from "./HurstEstimations";
import datasets from "./datasets";

const App: React.FC = () => {
  const [datasetName, setDatasetName] = useState("nile");

  return (
    <div className="App">
      <h1>Hurst Exponent</h1>
      <p>about the hurst exponent</p>
      <button disabled={false} onClick={() => setDatasetName("nile")}>
        Nile water levels
      </button>
      <button onClick={() => setDatasetName("btcusd")}>
        Bitcoin Price (2015-2021)
      </button>
      <button>Corn Futures Price (2015-2021)</button>
      <TimeSeriesChart
        data={datasets[datasetName].map(({ x, y }) => {
          return { x: new Date(x), y: y };
        })}
      />
      <h2>Hurst Estimations</h2>
      <p>What it means</p>
      <HurstEstimations
        data={new Float64Array(datasets[datasetName].map(({ y }) => y))}
      ></HurstEstimations>
    </div>
  );
};

export default App;
