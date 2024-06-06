import { useCallback, useEffect, useState } from "react";
import { MarketValueProps } from "../_components/MarketDrawer/MarketSort";
import { useMarketStore } from "../_stores/useMarketStore";

export default function useMarket() {
  const { markets, setSelectedMarket } = useMarketStore();
  const [data, setData] = useState(markets);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<MarketValueProps | null>(null);

  useEffect(() => {
    const filteredData = markets.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sort) {
      if (sort.label === "name") {
        filteredData.sort((a, b) =>
          sort.value === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
      } else if (sort.label === "vol") {
        filteredData.sort((a, b) =>
          sort.value === "asc" ? a.vol - b.vol : b.vol - a.vol
        );
      } else if (sort.label === "price") {
        filteredData.sort((a, b) =>
          sort.value === "asc" ? a.price - b.price : b.price - a.price
        );
      } else if (sort.label) {
        filteredData.sort((a, b) =>
          sort.value === "asc" ? a.change - b.change : b.change - a.change
        );
      }
    }

    setData(filteredData);
  }, [JSON.stringify(markets), search, sort]);

  const _onSearch = (v: string) => {
    setSearch(v);
  };

  const _onSort = useCallback(
    (sortOptions: MarketValueProps | null) => {
      setSort(sortOptions);
    },
    [data]
  );

  return {
    setSelectedMarket,
    data,
    search,
    _onSearch,
    _onSort,
  };
}
