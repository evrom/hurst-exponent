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

type Metadata = {
  title: string;
};

const metadata: Record<string, Metadata> = {
  nile: {
    title: "Nile water levels 1871-1984",
  },
  btcusd: {
    title: "BTC/USD 2015-2021",
  },
};

export { datasets, metadata };
