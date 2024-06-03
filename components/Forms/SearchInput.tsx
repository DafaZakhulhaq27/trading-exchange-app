import { Ionicons } from "@expo/vector-icons";
import BaseInput from "./BaseInput";
import { StyleSheet, TextInputProps } from "react-native";

export default function SearchInput(props: TextInputProps) {
  return (
    <BaseInput
      inputProps={props}
      containerStyle={styles.container}
      prefix={<Ionicons name="search" size={18} color="#747479" />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: "#E8E8E9",
  },
});
