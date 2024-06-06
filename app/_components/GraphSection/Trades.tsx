import { useMarketContext } from "@/app/_hooks/context";
import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";
import { dummyDataTrades } from "@/constants/DummyData";
import { Colors, globalStyles } from "@/constants/Styles";
import { View, StyleSheet } from "react-native";

const { secondary, success, danger } = Colors.main;

export default function Trades() {
  const { selectedMarket } = useMarketContext();

  return (
    <View style={globalStyles.container}>
      <Flex>
        <ThemedText style={[styles.textHeader, { flex: 1 }]}>Time</ThemedText>
        <ThemedText style={[styles.textHeader, { flex: 1 }]}>Side</ThemedText>
        <ThemedText style={[styles.textHeader, { flex: 2 }]}>
          Price ({selectedMarket?.currency})
        </ThemedText>
        <ThemedText
          style={[styles.textHeader, { flex: 2, textAlign: "right" }]}
        >
          Amount ({selectedMarket?.name})
        </ThemedText>
      </Flex>
      <View style={{ marginTop: 5 }}>
        {dummyDataTrades.map((_) => (
          <Flex>
            <ThemedText style={[styles.textCell, { flex: 1 }]}>
              {_.time}
            </ThemedText>
            <ThemedText
              style={[
                styles.textCell,
                { flex: 1, color: _.side === "Buy" ? success : danger },
              ]}
            >
              {_.side}
            </ThemedText>
            <ThemedText style={[styles.textCell, { flex: 2 }]}>
              {_.price.toLocaleString()}
            </ThemedText>
            <ThemedText
              style={[styles.textCell, { flex: 2, textAlign: "right" }]}
            >
              {_.amount}
            </ThemedText>
          </Flex>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 12,
    color: secondary,
  },
  textCell: {
    fontSize: 12,
  },
});
