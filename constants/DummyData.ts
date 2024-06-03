export type Market = {
  id: number;
  name: string;
  currency: string;
  vol: number;
  volIDR: number;
  volUSDT: number;
  price: number;
  priceChange: number;
  priceHigh: number;
  priceLow: number;
  change: number;
};

export const dummyMarketData: Market[] = Array.from(
  { length: 20 },
  (_, index) => {
    const vol = Math.floor(1000 + Math.random() * 2000);
    const volIDR = Math.floor(Math.random() * 500);
    const volUSDT = Math.floor(Math.random() * 500);
    const price = Math.floor(1000 + Math.random() * 5000);
    const priceHigh = price + Math.floor(Math.random() * 1000);
    const priceLow = price - Math.floor(Math.random() * 1000);
    const change = parseFloat((Math.random() * 2 - 1).toFixed(2));
    const priceChange = Math.round(price * (change / 100));

    return {
      id: index + 1,
      name: `Token${index + 1}`,
      currency: "IDR",
      vol,
      volIDR,
      volUSDT,
      price,
      priceHigh,
      priceLow,
      change,
      priceChange,
    };
  }
);
