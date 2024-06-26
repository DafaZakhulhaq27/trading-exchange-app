import { useState } from "react";
import { useMarketStore } from "../_stores/useMarketStore";

export const TypeBooks = [
  {
    title: "Limit Order",
    value: "limit-order",
  },
  {
    title: "Market Order",
    value: "market-order",
  },
];

export const TypePosts = [
  {
    title: "GTC",
    value: "gtc",
  },
  {
    title: "FOK",
    value: "fok",
  },
  {
    title: "IOC",
    value: "ioc",
  },
];

export default function useOrderForm() {
  const { selectedMarket } = useMarketStore();
  const [currentAction, setCurrentAction] = useState("buy");
  const [selectedTypeBook, setSelectedTypeBook] = useState(TypeBooks[0]);
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [isPostOnly, setIsPostOnly] = useState(false);
  const [selectedTypePost, setSelectedTypePost] = useState(TypePosts[0]);
  const [form, setForm] = useState({
    price: selectedMarket?.price,
    amount: 0,
    total: 0,
  });

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value.replace(/[^0-9.]/g, ""),
    }));
  };

  return {
    form,
    handleChange,
    selectedMarket,
    currentAction,
    setCurrentAction,
    selectedTypeBook,
    setSelectedTypeBook,
    selectedPercentage,
    setSelectedPercentage,
    isPostOnly,
    setIsPostOnly,
    selectedTypePost,
    setSelectedTypePost,
  };
}
