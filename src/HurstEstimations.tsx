import React, { useState } from "react";

type Props = {
  data: Float64Array;
};

const HurstEstimations: React.FC<Props> = ({ data }: Props) => {
  const [rsSimple, setRsSimple] = useState(0);
  const [rsCorrected, setRsCorrected] = useState(0);

  import("hurst").then((module) => {
    setRsSimple(module.rssimple(data));
    setRsCorrected(module.rs_corrected(data));
  });

  return (
    <table>
      <tbody>
        <tr>
          <th>Hurst Exponent from Rescaled Range</th>
          <td>{rsCorrected}</td>
        </tr>
        <tr>
          <th>Simplified rescaled range</th>
          <td>{rsSimple}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default HurstEstimations;
