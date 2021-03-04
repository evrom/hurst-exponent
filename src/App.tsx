import React, { useState } from "react";
import TimeSeriesChart from "./TimeSeriesChart";
import nile from "./datasets/nile.json";

const App: React.FC = () => {
  const [rsSimple, setRsSimple] = useState(0);
  const [rsCorrected, setRsCorrected] = useState(0);

  import("hurst").then((module) => {
    setRsSimple(module.rssimple(new Float64Array(nile.map(({ y }) => y))));
    setRsCorrected(
      module.rs_corrected(new Float64Array(nile.map(({ y }) => y)))
    );
  });
  return (
    <div className="App">
      <TimeSeriesChart
        data={nile.map(({ x, y }) => {
          return { x: new Date(x), y: y };
        })}
      />
      <div>{rsSimple}</div>
      <div>{rsCorrected}</div>
    </div>
  );
};

export default App;
