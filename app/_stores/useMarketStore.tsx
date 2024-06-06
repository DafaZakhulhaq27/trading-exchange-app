import { dummyMarketData, Market } from "@/constants/DummyData";
import { create } from "zustand";

type MarketStore = {
  markets: Market[];
  selectedMarket: Market | null;
  setMarkets: (v: Market[]) => void;
  setSelectedMarket: (v: Market) => void;
};

export const useMarketStore = create<MarketStore>((set, get) => ({
  markets: dummyMarketData,
  selectedMarket: dummyMarketData[0],
  setMarkets: (v) => set({ markets: v }),
  setSelectedMarket: (v) => set({ selectedMarket: v }),
}));
