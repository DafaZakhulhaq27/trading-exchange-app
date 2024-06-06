type Stock = {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
};

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
  stocks: Stock[];
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
    const stocks = () => {
      const data: Stock[] = [
        {
          timestamp: 1625945400000,
          open: 33575.25,
          high: 33600.52,
          low: 33475.12,
          close: 33520.11,
        },
      ];

      for (let i = data.length; i < 30; i++) {
        const lastDataPoint = data[data.length - 1];
        const newTimestamp = lastDataPoint.timestamp + 1800000;
        const newOpen = lastDataPoint.close + (Math.random() * 1000 - 500);
        const newHigh = newOpen + Math.random() * 1000;
        const newLow = newOpen - Math.random() * 1000;
        const newClose = newLow + Math.random() * (newHigh - newLow);

        data.push({
          timestamp: newTimestamp,
          open: parseFloat(newOpen.toFixed(2)),
          high: parseFloat(newHigh.toFixed(2)),
          low: parseFloat(newLow.toFixed(2)),
          close: parseFloat(newClose.toFixed(2)),
        });
      }

      return data;
    };

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
      stocks: stocks(),
    };
  }
);

export const dummyDataPriceDiff = {
  min: [
    {
      id: 1,
      price: 61511000,
      token: 0.4875,
    },
    {
      id: 2,
      price: 61421000,
      token: 7.99999,
    },
    {
      id: 3,
      price: 61387000,
      token: 0.4125,
    },
    {
      id: 4,
      price: 61379000,
      token: 0.824343,
    },
    {
      id: 5,
      price: 61233000,
      token: 0.3232232,
    },
    {
      id: 6,
      price: 61220000,
      token: 0.29451,
    },
  ],
  plus: [
    {
      id: 7,
      price: 61038000,
      token: 0.21753,
    },
    {
      id: 8,
      price: 61033000,
      token: 7.99999,
    },
    {
      id: 9,
      price: 61031000,
      token: 0.0932,
    },
    {
      id: 10,
      price: 61000000,
      token: 1.01636,
    },
    {
      id: 11,
      price: 60981000,
      token: 0.29476,
    },
    {
      id: 12,
      price: 60927000,
      token: 0.337533,
    },
  ],
};

export const dummyDataTrades = [
  {
    time: "10:22:16",
    side: "Buy",
    price: 630000000,
    amount: 0.0000343,
  },
  {
    time: "11:45:10",
    side: "Sell",
    price: 629500000,
    amount: 0.0000288,
  },
  {
    time: "12:03:21",
    side: "Buy",
    price: 630100000,
    amount: 0.0000375,
  },
  {
    time: "12:59:59",
    side: "Sell",
    price: 628900000,
    amount: 0.00004,
  },
];
