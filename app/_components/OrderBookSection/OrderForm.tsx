import { View } from "react-native";
import ButtonBuySell from "./ButtonBuySell";
import Select from "@/components/Forms/Select";
import { StyleSheet } from "react-native";
import { useState } from "react";

const TypeBooks = [
  {
    title: "Limit Order",
    value: "limit-order",
  },
  {
    title: "Market Order",
    value: "market-order",
  },
];

export default function OrderForm() {
  const [selectedTypeBook, setSelectedTypeBook] = useState(TypeBooks[0]);

  return (
    <View style={styles.formContainer}>
      <ButtonBuySell onChange={() => {}} />
      <Select
        defaultValue={TypeBooks[0]}
        onSelect={(selectedItem) => {
          setSelectedTypeBook(selectedItem);
        }}
        data={TypeBooks}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
  },
});
