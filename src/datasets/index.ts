import nile from "./nile.json";
import btc from "./btc.json";
import corn from "./corn.json";

type DataPoint = {
  y: number;
  x: string;
};

type Dataset = {
  title: string;
  data: DataPoint[];
};

const datasets: Record<string, Dataset> = {
  nile: {
    title: "Nile water levels 1871-1984",
    data: nile,
  },
  btc: {
    title: "BTC/USD 2015-2021",
    data: btc,
  },
  corn: {
    title: "Corn futures opening 2015-2021",
    data: corn,
  },
};

export default datasets;
