import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";
import { Colors, globalStyles } from "@/constants/Styles";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { useMarketStore } from "../_stores/useMarketStore";

type InfoItemProps = {
  title: string;
  value: number;
};

const InfoItem = ({ title, value }: InfoItemProps) => {
  return (
    <View>
      <ThemedText style={styles.infoItemTitle}>{title}</ThemedText>
      <ThemedText style={styles.infoItemDesc}>
        {value.toLocaleString()}
      </ThemedText>
    </View>
  );
};

export default function InfoSection() {
  const { selectedMarket } = useMarketStore();

  if (!selectedMarket) return;

  return (
    <Flex style={globalStyles.containerHorizontal} justify="space-between">
      <View>
        <ThemedText type="subtitle">
          {selectedMarket?.price.toLocaleString()}
        </ThemedText>
        <ThemedText
          type="xs"
          style={[
            styles.change,
            {
              color:
                selectedMarket.change < 0
                  ? Colors.main.danger
                  : Colors.main.success,
            },
          ]}
        >
          {selectedMarket.priceChange.toLocaleString()} ({selectedMarket.change}
          %)
        </ThemedText>
      </View>
      <Flex style={styles.infoItemsContainer}>
        <View style={styles.infoItemContainer}>
          <InfoItem title="24H High" value={selectedMarket.priceHigh} />
          <InfoItem title="24H Low" value={selectedMarket.priceLow} />
        </View>
        <View style={styles.infoItemContainer}>
          <InfoItem title="24H Vol (IDR)" value={selectedMarket.volIDR} />
          <InfoItem title="24H Vol (USDT)" value={selectedMarket.volUSDT} />
        </View>
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  change: {
    letterSpacing: 0,
    fontWeight: "bold",
  },
  infoItemsContainer: {
    gap: 10,
  },
  infoItemContainer: {
    gap: 5,
  },
  infoItemTitle: {
    lineHeight: 16,
    fontSize: 8,
    color: Colors.main.secondary,
  },
  infoItemDesc: {
    lineHeight: 12,
    fontSize: 12,
  },
});
