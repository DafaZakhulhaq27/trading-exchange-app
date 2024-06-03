export type Market = {
  id: number;
  name: string;
  currency: string;
  vol: number;
  price: number;
  change: number;
};

export const dummyMarketData: Market[] = Array.from(
  { length: 20 },
  (_, index) => ({
    id: index + 1,
    name: `Token${index + 1}`,
    currency: "IDR",
    vol: Math.floor(1000 + Math.random() * 2000),
    price: Math.floor(1000 + Math.random() * 5000),
    change: parseFloat((Math.random() * 2 - 1).toFixed(2)),
  })
);
