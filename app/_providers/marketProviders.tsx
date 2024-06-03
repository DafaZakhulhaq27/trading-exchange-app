import { Market } from "@/constants/DummyData";
import { ReactNode, useState } from "react";
import { MarketContext } from "../_context/marketContext";

type Props = {
  dataMarket: Market[];
  children: ReactNode;
};

export default function MarketProviders({ dataMarket, children }: Props) {
  const [currentDataMarket] = useState(dataMarket);
  const [selectedMarket, setSelectedMarket] = useState(
    currentDataMarket && currentDataMarket.length ? currentDataMarket[0] : null
  );

  const _onSelecetMartet = (v: Market) => {
    setSelectedMarket(v);
  };

  return (
    <MarketContext.Provider
      value={{
        dataMarket: currentDataMarket,
        selectedMarket,
        onSelectMarket: _onSelecetMartet,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
}
