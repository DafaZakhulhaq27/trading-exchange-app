import { useMarketStore } from "@/app/_stores/useMarketStore";
import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";
import { Colors, globalStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MarketHeader({ navigation }: DrawerHeaderProps) {
  const { selectedMarket } = useMarketStore();

  return (
    <SafeAreaView>
      <Flex style={globalStyles.container} justify="space-between">
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
          style={styles.headerToggle}
        >
          <Ionicons name="reorder-three" size={22} />
          <ThemedText style={styles.titleMarket}>
            {selectedMarket?.name}
          </ThemedText>
          <ThemedText style={styles.currencyMarket}>
            /{selectedMarket?.currency}
          </ThemedText>
        </TouchableOpacity>
        <Ionicons name="ellipsis-vertical" size={20} />
      </Flex>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerToggle: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleMarket: {
    fontWeight: 600,
    marginLeft: 3,
  },
  currencyMarket: {
    fontWeight: 600,
    color: Colors.main.secondary,
  },
});
