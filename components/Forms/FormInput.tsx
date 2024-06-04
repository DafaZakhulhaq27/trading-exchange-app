import { TextInputProps, View } from "react-native";
import { ThemedText } from "../ThemedText";
import BaseInput from "./BaseInput";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Styles";

type Props = {
  label: string;
} & TextInputProps;

export default function FormInput({ label, ...props }: Props) {
  return (
    <View style={styles.container}>
      <ThemedText type="xs" style={styles.label}>
        {label}
      </ThemedText>
      <BaseInput
        containerStyle={{
          height: "auto",
        }}
        inputProps={{ style: styles.input, ...props }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  label: {
    lineHeight: 12,
    color: Colors.main.secondary,
  },
  input: {
    backgroundColor: "white",
    color: "Black",
    fontWeight: "600",
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 28,
    marginTop: 3,
    borderWidth: 1,
    borderColor: Colors.main.grey,
    borderRadius: 5,
  },
});
