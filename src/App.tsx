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
      <p>
        The{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/Hurst_exponent"
        >
          Hurst Exponent
        </a>{" "}
        is a metric of the long term memory of a time series. Harold Edwin Hurst
        developed the technique, and Benoît Mandelbrot explored it further. For
        an introduction to the topic, see{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://dx.doi.org/10.3390/e19090437"
        >
          {`"`}A brief history of long memory: Hurst, Mandelbrot and the road to
          ARFIMA{`"`} (2017)
        </a>
        .
      </p>
      {Object.entries(datasets).map(([k, { title }]) => {
        return (
          <button
            key={k}
            disabled={datasetName == k}
            onClick={() => setDatasetName(k)}
          >
            {title}
          </button>
        );
      })}
      <TimeSeriesChart
        data={datasets[datasetName].data.map(({ x, y }) => {
          return { x: new Date(x), y: y };
        })}
      />
      <h2>Hurst Estimations</h2>
      <HurstEstimations
        data={new Float64Array(datasets[datasetName].data.map(({ y }) => y))}
      ></HurstEstimations>
      <p>
        calculated using{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://crates.io/crates/hurst"
        >
          Hurst
        </a>{" "}
        compiled to WebAssembly
      </p>
      <h2>Interpretation</h2>
      <ul>
        <li>
          <b>H = 0.5</b>, then the time series is Brownian. Meaning there is no
          detectable long term memory, and each change in value appears to be
          random and not autocorrelated
        </li>
        <li>
          <b>H {"<"} 0.5</b>, then the time series is negatively autocorrelated.
          I.e. there is a negative feedback loop. A high value signifies a low
          value with come in the future, while a low value signifies a high
          value in the future.
        </li>
        <li>
          <b>H {">"} 0.5</b>, then the time series is positively autocorrelated.
          I.e. A high value signifies a higher value with come in the future,
          while a low value signifies a lower value in the future. Most real
          world time series have a Hurst exponent above 0.5, and often around
          0.72. Financial data tends to be higher than natural phenomena,
          because there are more positive feedback loops, less negative loops,
          and -- for pricing -- the inflation pushes the value upward
          exponentially.
        </li>
      </ul>
    </div>
  );
};

export default App;
