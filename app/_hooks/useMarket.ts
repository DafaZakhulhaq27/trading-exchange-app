import { useCallback, useState } from "react";
import { useMarketContext } from "./context";
import { MarketValueProps } from "../_components/MarketDrawer/MarketSort";

export default function useMarket() {
  const { dataMarket, onSelectMarket } = useMarketContext();
  const [data, setData] = useState(dataMarket);
  const [search, setSearch] = useState("");

  const _onSearch = useCallback((v: string) => {
    const filteredData = dataMarket.filter((item) =>
      item.name.toLowerCase().includes(v.toLowerCase())
    );
    setSearch(v);
    setData(filteredData);
  }, []);

  const _onSort = useCallback(
    (sortOptions: MarketValueProps | null) => {
      let sortedData = [...data];

      if (!sortOptions) return;

      if (sortOptions.label === "name") {
        sortedData.sort((a, b) =>
          sortOptions.value === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
      } else if (sortOptions.label === "vol") {
        sortedData.sort((a, b) =>
          sortOptions.value === "asc" ? a.vol - b.vol : b.vol - a.vol
        );
      } else if (sortOptions.label === "price") {
        sortedData.sort((a, b) =>
          sortOptions.value === "asc" ? a.price - b.price : b.price - a.price
        );
      } else if (sortOptions.label) {
        sortedData.sort((a, b) =>
          sortOptions.value === "asc"
            ? a.change - b.change
            : b.change - a.change
        );
      }

      setData(sortedData);
    },
    [data]
  );

  return {
    onSelectMarket,
    data,
    search,
    _onSearch,
    _onSort,
  };
}
