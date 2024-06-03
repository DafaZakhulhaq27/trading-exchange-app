import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Styles";
import { View } from "react-native";

export default function Separator() {
  return <View style={styles.separator} />;
}

export const styles = StyleSheet.create({
  separator: {
    height: 5,
    width: "100%",
    backgroundColor: Colors.main.grey,
  },
});
