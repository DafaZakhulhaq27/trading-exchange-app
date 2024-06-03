import { useContext } from "react";
import { MarketContext } from "../_context/marketContext";

export const useMarketContext = () => useContext(MarketContext);
