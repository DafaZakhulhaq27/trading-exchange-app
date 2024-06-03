import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Styles";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Svg, { Polygon } from "react-native-svg";

type Props = {
  onChange?: (v: "buy" | "sell") => void;
};

const { success, secondary, grey, danger } = Colors.main;

export default function ButtonBuySell({ onChange }: Props) {
  const [isBuy, setIsBuy] = useState(true);

  const _onBuy = () => {
    setIsBuy(true);
  };

  const _onSell = () => {
    setIsBuy(false);
  };

  useEffect(() => {
    if (onChange) {
      onChange(isBuy ? "buy" : "sell");
    }
  }, [isBuy]);

  return (
    <Flex style={styles.buttonContainer}>
      <Flex
        onPress={_onBuy}
        justify="center"
        style={[
          styles.button,
          {
            backgroundColor: isBuy ? success : grey,
          },
        ]}
      >
        <ThemedText
          style={[styles.buttonText, { color: isBuy ? "white" : secondary }]}
        >
          Beli
        </ThemedText>
      </Flex>
      <View
        style={{
          backgroundColor: isBuy ? grey : danger,
        }}
      >
        <Svg height="28" width="28">
          <Polygon points="0,0 50,50 0,50" fill={isBuy ? success : grey} />
        </Svg>
      </View>
      <Flex
        onPress={_onSell}
        justify="center"
        style={[
          styles.button,
          styles.button,
          {
            backgroundColor: isBuy ? grey : danger,
          },
        ]}
      >
        <ThemedText
          style={[styles.buttonText, , { color: isBuy ? secondary : "white" }]}
        >
          Jual
        </ThemedText>
      </Flex>
    </Flex>
  );
}

export const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
  },
  button: {
    height: 28,
    flex: 1,
    backgroundColor: Colors.main.grey,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.main.secondary,
  },
});
