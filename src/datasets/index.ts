import nile from "./nile.json";
import btc from "./btc.json";
import corn from "./corn.json";

type Data = {
  y: number;
  x: string;
};

const datasets: Record<string, Data[]> = {
  nile: nile,
  btc: btc,
  corn: corn,
};

type Metadata = {
  title: string;
};

const metadata: Record<string, Metadata> = {
  nile: {
    title: "Nile water levels 1871-1984",
  },
  btc: {
    title: "BTC/USD 2015-2021",
  },
  corn: {
    title: "Corn futures opening 2015-2021",
  },
};

export { datasets, metadata };
