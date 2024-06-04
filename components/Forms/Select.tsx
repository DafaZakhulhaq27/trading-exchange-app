import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import SelectDropdown, {
  SelectDropdownProps,
} from "react-native-select-dropdown";
import Flex from "@/components/Flex";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Styles";

export type SelectProps = {
  data: { title: string; value: string }[];
} & Omit<SelectDropdownProps, "renderButton" | "renderItem">;

export default function Select({ data, ...props }: SelectProps) {
  return (
    <SelectDropdown
      {...props}
      data={data}
      renderButton={(selectedItem, isOpened) => {
        return (
          <Flex style={styles.selectButton}>
            <ThemedText type="xs" style={styles.selectButtonText}>
              {selectedItem?.title}
            </ThemedText>
            <Ionicons name={isOpened ? "chevron-up" : "chevron-down"} />
          </Flex>
        );
      }}
      renderItem={(item) => {
        return (
          <View style={styles.renderItem}>
            <ThemedText>{item.title}</ThemedText>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
}

const styles = StyleSheet.create({
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
    marginTop: -30,
  },
  selectButton: {
    height: 28,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.main.grey,
    width: "100%",
  },
  selectButtonText: {
    fontWeight: 600,
  },
  renderItem: {
    height: 28,
    paddingHorizontal: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.main.grey,
  },
});
