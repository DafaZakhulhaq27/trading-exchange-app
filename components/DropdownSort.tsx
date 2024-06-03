import { Pressable, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Styles";
import { SortType } from "@/types/filter";

const activeColor = Colors.main.dark;
const inAcctiveColor = Colors.main.secondary;

type Props = {
  value: SortType;
  title: string;
  name: string;
  onClick: ({ name, value }: { name: string; value: SortType }) => void;
};

export default function DropdownSort({ value, title, name, onClick }: Props) {
  const _onSort = () => {
    const prev = value;
    let _value: SortType = null;

    switch (prev) {
      case "asc":
        _value = "desc";
        break;
      case "desc":
        _value = null;
        break;
      default:
        _value = "asc";
        break;
    }

    onClick({
      name,
      value: _value,
    });
  };

  return (
    <Pressable style={styles.container} onPress={_onSort}>
      <ThemedText
        style={[
          styles.title,
          {
            color: value ? activeColor : inAcctiveColor,
          },
        ]}
      >
        {title}
      </ThemedText>
      <View>
        <Ionicons
          name="chevron-up"
          color={value === "asc" ? activeColor : inAcctiveColor}
          size={8}
          style={{ marginBottom: -3 }}
        />
        <Ionicons
          name="chevron-down"
          color={value === "desc" ? activeColor : inAcctiveColor}
          size={8}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  title: {
    fontSize: 10,
    textTransform: "uppercase",
  },
});
