import nile from "./nile.json";
import btcusd from "./btcusd_day.json";

type Data = {
  y: number;
  x: string;
};

const datasets: Record<string, Data[]> = {
  nile: nile,
  btcusd: btcusd,
};

export default datasets;
