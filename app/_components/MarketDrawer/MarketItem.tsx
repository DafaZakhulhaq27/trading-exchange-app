import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Market } from "@/constants/DummyData";
import { View } from "react-native";
import { StyleSheet } from "react-native";

type Props = {
  onClick: (v: Market) => void;
} & Market;

export default function MarketItem({ onClick, ...props }: Props) {
  return (
    <Flex
      style={{
        paddingVertical: 5,
      }}
      justify="space-between"
      onPress={() => onClick(props)}
    >
      <View>
        <Flex>
          <ThemedText style={styles.name} type="sm">
            {props.name}
          </ThemedText>
          <ThemedText style={styles.currency} type="xs">
            /{props.currency}
          </ThemedText>
        </Flex>
        <ThemedText style={styles.vol}>
          Vol. {props.vol.toLocaleString()}
        </ThemedText>
      </View>
      <Flex style={styles.containerRight}>
        <ThemedText type="sm">{props.price.toLocaleString()}</ThemedText>
        <Flex
          justify="center"
          style={[
            styles.changeContainer,
            {
              backgroundColor: props.change > 0 ? "green" : "red",
            },
          ]}
        >
          <ThemedText style={styles.change} type="sm">
            {props.change.toLocaleString()}%
          </ThemedText>
        </Flex>
      </Flex>
    </Flex>
  );
}

export const styles = StyleSheet.create({
  name: {
    color: Colors.main.dark,
  },
  currency: {
    color: Colors.main.secondary,
  },
  vol: {
    marginTop: -8,
    color: Colors.main.secondary,
    fontSize: 10,
  },
  containerRight: {
    gap: 10,
  },
  changeContainer: {
    width: 80,
    borderRadius: 5,
    height: 25,
  },
  change: {
    fontWeight: "bold",
    color: "white",
  },
});
