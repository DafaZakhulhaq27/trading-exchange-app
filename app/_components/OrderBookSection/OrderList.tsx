import { useMarketContext } from "@/app/_hooks/context";
import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";
import { dummyDataPriceDiff } from "@/constants/DummyData";
import { Colors } from "@/constants/Styles";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const { grey, secondary, danger, dark, success } = Colors.main;

const OrderListItem = ({
  type,
  price,
  token,
}: {
  type: "min" | "plus";
  price: number;
  token: number;
}) => {
  const isMin = type === "min";

  return (
    <TouchableOpacity onPress={() => {}} style={styles.itemContainer}>
      <Flex justify="space-between">
        <ThemedText style={isMin ? styles.textMin : styles.textPlus}>
          {price.toLocaleString()}
        </ThemedText>
        <ThemedText style={styles.textValue}>
          {token.toLocaleString()}
        </ThemedText>
      </Flex>
    </TouchableOpacity>
  );
};

export default function OrderList() {
  const { selectedMarket } = useMarketContext();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Flex justify="space-between">
          <View>
            <ThemedText style={styles.textTitle}>Harga</ThemedText>
            <ThemedText style={styles.textTitle}>
              ({selectedMarket?.currency})
            </ThemedText>
          </View>
          <View>
            <ThemedText style={styles.textTitle}>Jumlah</ThemedText>
            <ThemedText style={styles.textTitle}>
              ({selectedMarket?.name})
            </ThemedText>
          </View>
        </Flex>
      </View>
      {dummyDataPriceDiff.min.map((_) => (
        <OrderListItem key={_.id} type={"min"} {..._} />
      ))}
      <View style={styles.titleContainer}>
        <ThemedText style={[styles.textSelectedValue, { color: success }]}>
          61.511.000
        </ThemedText>
      </View>
      {dummyDataPriceDiff.plus.map((_) => (
        <OrderListItem key={_.id} type={"plus"} {..._} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 1,
    borderColor: grey,
    borderRadius: 5,
  },
  titleContainer: {
    padding: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: grey,
  },
  itemContainer: {
    padding: 5,
  },
  textSelectedValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  textTitle: {
    color: secondary,
    lineHeight: 14,
    fontSize: 10,
  },
  textMin: {
    fontSize: 10,
    lineHeight: 16,
    color: danger,
  },
  textPlus: {
    fontSize: 10,
    lineHeight: 16,
    color: success,
  },
  textValue: {
    fontSize: 10,
    lineHeight: 16,
    color: dark,
  },
});
