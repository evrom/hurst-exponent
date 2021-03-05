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
    <>
      <div>{rsSimple}</div>
      <div>{rsCorrected}</div>
    </>
  );
};

export default HurstEstimations;
