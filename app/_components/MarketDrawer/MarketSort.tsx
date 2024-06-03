import DropdownSort from "@/components/DropdownSort";
import { SortType } from "@/types/filter";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export type MarketValueProps = {
  label: string;
  value: SortType;
};

type Props = {
  onChange: (v: MarketValueProps | null) => void;
};

export default function MarketSort({ onChange }: Props) {
  const [currentValue, setCurrentValue] = useState<MarketValueProps | null>(
    null
  );

  const _onChange = ({ name, value }: { name: string; value: SortType }) => {
    setCurrentValue({
      label: name,
      value: value,
    });
  };

  useEffect(() => {
    onChange(currentValue);
  }, [currentValue]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <DropdownSort
          value={currentValue?.label === "name" ? currentValue.value : null}
          title="Name"
          name="name"
          onClick={_onChange}
        />
        <DropdownSort
          value={currentValue?.label === "vol" ? currentValue.value : null}
          title="/ Vol"
          name="vol"
          onClick={_onChange}
        />
      </View>
      <View style={styles.subContainer}>
        <DropdownSort
          value={currentValue?.label === "price" ? currentValue.value : null}
          title="Price (IDR)"
          name="price"
          onClick={_onChange}
        />
        <DropdownSort
          value={currentValue?.label === "hours" ? currentValue.value : null}
          title="24H Change"
          name="hours"
          onClick={_onChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 15,
  },
  subContainer: {
    display: "flex",
    gap: 5,
    flexDirection: "row",
  },
});
