import { Market } from "@/constants/DummyData";
import { createContext } from "react";

type Props = {
  dataMarket: Market[];
  selectedMarket: Market | null;
  onSelectMarket?: (v: Market) => void;
};

export const MarketContext = createContext<Props>({
  dataMarket: [],
  selectedMarket: null,
});
