import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";
import { Colors, globalStyles } from "@/constants/Styles";
import { useState } from "react";
import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import { CandlestickChart } from "react-native-wagmi-charts";
import { BarChart } from "react-native-gifted-charts";
import { useMarketContext } from "@/app/_hooks/context";
import { format } from "date-fns";

const { secondary, dark, success, danger } = Colors.main;

const filterList = ["1M", "15M", "1H", "1D"];

export default function Graph() {
  const { selectedMarket } = useMarketContext();
  const [activeFilter, setActiveFilter] = useState(filterList[0]);

  if (!selectedMarket) return;

  const barData = selectedMarket.stocks.map((stock, index) => {
    const value = stock.close / 1000;
    const label =
      index % 5 === 0 ? format(new Date(stock.timestamp), "HH:mm") : "";
    const frontColor = stock.close >= stock.open ? success : danger;
    return { value, label, frontColor };
  });

  return (
    <View style={styles.container}>
      <Flex style={[globalStyles.container, styles.containerFilter]}>
        {filterList.map((filter) => (
          <Pressable onPress={() => setActiveFilter(filter)} key={filter}>
            <ThemedText
              type="xs"
              style={{
                color: filter === activeFilter ? dark : secondary,
              }}
            >
              {filter}
            </ThemedText>
          </Pressable>
        ))}
      </Flex>
      <CandlestickChart.Provider data={selectedMarket?.stocks}>
        <CandlestickChart height={200}>
          <CandlestickChart.Candles />
          <CandlestickChart.Crosshair>
            <CandlestickChart.Tooltip
              style={styles.candleStickTooltip}
              textStyle={styles.candleStickTooltipText}
            />
          </CandlestickChart.Crosshair>
        </CandlestickChart>
      </CandlestickChart.Provider>
      <View style={{ height: 5 }} />
      <BarChart
        yAxisThickness={0}
        noOfSections={2}
        data={barData}
        barWidth={10}
        spacing={5}
        xAxisLabelTextStyle={styles.barText}
        labelWidth={40}
        yAxisTextStyle={styles.barText}
        width={Dimensions.get("screen").width}
        height={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  containerFilter: {
    gap: 30,
    borderBottomWidth: 0.5,
    borderColor: secondary,
    marginBottom: 5,
  },
  candleStickTooltip: {
    borderWidth: 1,
    height: 20,
    borderRadius: 5,
  },
  candleStickTooltipText: {
    fontSize: 10,
    lineHeight: 10,
  },
  barText: {
    fontSize: 10,
    color: secondary,
    textAlign: "center",
  },
});
