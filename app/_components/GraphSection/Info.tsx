import { useMarketContext } from "@/app/_hooks/context";
import { ThemedText } from "@/components/ThemedText";
import { Colors, globalStyles } from "@/constants/Styles";
import { View, StyleSheet } from "react-native";

export default function Info() {
  const { selectedMarket } = useMarketContext();

  return (
    <View style={globalStyles.container}>
      <ThemedText>About {selectedMarket?.name}</ThemedText>
      <ThemedText style={styles.textDesc} type="xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  textDesc: {
    color: Colors.main.secondary,
  },
});
