import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import ButtonBuySell from "./ButtonBuySell";

export default function OrderForm() {
  return (
    <View>
      <ButtonBuySell onChange={() => {}} />

      <ThemedText>Order Form</ThemedText>
    </View>
  );
}
